export const vertexSource = `
attribute vec2 a_position;
void main() { gl_Position = vec4(a_position, 0.0, 1.0); }
`

export const fragmentSource = `
precision highp float;
uniform vec2 u_resolution;
uniform vec2 u_pointer;
uniform float u_time;
mat2 turn(float a) { float c=cos(a), s=sin(a); return mat2(c,-s,s,c); }
float ring(vec3 p, vec2 size) { return length(vec2(length(p.xz)-size.x,p.y))-size.y; }
float blend(float a, float b, float k) { float h=clamp(0.5+0.5*(b-a)/k,0.0,1.0); return mix(b,a,h)-k*h*(1.0-h); }
float shape(vec3 p) {
  p.xy=turn(0.55+u_pointer.y*0.2)*p.xy;
  p.xz=turn(0.5+u_time*0.14+u_pointer.x*0.35)*p.xz;
  p.yz=turn(0.55)*p.yz;
  p.xz=turn(p.y*0.72)*p.xz;
  p.y+=0.12*sin(p.z*2.5+u_time*0.3);
  vec3 q=p.yzx;
  q.x-=0.12;
  q.z+=0.1;
  return blend(ring(p,vec2(0.99,0.32)),ring(q,vec2(0.8,0.29)),0.32);
}
vec3 normalAt(vec3 p) {
  vec2 e=vec2(0.002,0.0);
  return normalize(vec3(shape(p+e.xyy)-shape(p-e.xyy),shape(p+e.yxy)-shape(p-e.yxy),shape(p+e.yyx)-shape(p-e.yyx)));
}
void main() {
  vec2 uv=(gl_FragCoord.xy*2.0-u_resolution)/min(u_resolution.x,u_resolution.y);
  vec3 origin=vec3(0.0,0.0,4.5);
  vec3 ray=normalize(vec3(uv,-2.35));
  float distance=0.0;
  vec3 p;
  bool hit=false;
  for(int i=0;i<72;i++) {
    p=origin+ray*distance;
    float d=shape(p);
    if(d<0.002) { hit=true; break; }
    distance+=d*0.78;
    if(distance>8.0) break;
  }
  if(!hit) { gl_FragColor=vec4(0.0); return; }
  vec3 n=normalAt(p);
  vec3 reflected=reflect(ray,n);
  vec3 light=normalize(vec3(-0.8,1.0,1.0));
  float diffuse=max(dot(n,light),0.0);
  float fresnel=pow(1.0-max(dot(-ray,n),0.0),2.6);
  float ribbon=smoothstep(-0.24,0.2,sin(reflected.y*5.0+reflected.x*1.8));
  float stripe=smoothstep(0.22,0.26,abs(reflected.y+0.08));
  vec3 metal=mix(vec3(0.1,0.07,0.19),vec3(0.88,0.8,1.0),ribbon);
  metal*=mix(0.38,1.0,stripe);
  vec3 color=metal*(0.27+diffuse*0.73);
  color+=vec3(0.48,0.27,0.88)*fresnel*0.8;
  color+=vec3(1.0,0.96,1.0)*pow(max(dot(reflect(-light,n),-ray),0.0),55.0)*1.2;
  color+=vec3(0.16,0.08,0.28)*max(-n.y,0.0);
  gl_FragColor=vec4(pow(color,vec3(0.88)),1.0);
}
`

export function mountSculpture(canvas) {
  const gl = canvas.getContext('webgl', { alpha: true, antialias: false, powerPreference: 'low-power' })
  if (!gl) return () => {}
  const compile = (type, source) => {
    const shader = gl.createShader(type)
    gl.shaderSource(shader, source); gl.compileShader(shader)
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) { gl.deleteShader(shader); return null }
    return shader
  }
  const vertex = compile(gl.VERTEX_SHADER, vertexSource)
  const fragment = compile(gl.FRAGMENT_SHADER, fragmentSource)
  if (!vertex || !fragment) { if (vertex) gl.deleteShader(vertex); if (fragment) gl.deleteShader(fragment); return () => {} }
  const program = gl.createProgram()
  gl.attachShader(program, vertex); gl.attachShader(program, fragment); gl.linkProgram(program)
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) { gl.deleteProgram(program); gl.deleteShader(vertex); gl.deleteShader(fragment); return () => {} }
  gl.useProgram(program)
  const buffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]), gl.STATIC_DRAW)
  const attribute = gl.getAttribLocation(program, 'a_position')
  gl.enableVertexAttribArray(attribute); gl.vertexAttribPointer(attribute,2,gl.FLOAT,false,0,0)
  const resolution = gl.getUniformLocation(program, 'u_resolution')
  const pointer = gl.getUniformLocation(program, 'u_pointer')
  const time = gl.getUniformLocation(program, 'u_time')
  const media = matchMedia('(prefers-reduced-motion: reduce)')
  const parent = canvas.closest('.sculpture-shell')
  const hero = canvas.closest('.hero')
  let frame = 0, visible = true, destroyed = false, elapsed = 0, previous = 0
  let mx = 0, my = 0, tx = 0, ty = 0
  const paused = () => media.matches || document.documentElement.dataset.motion === 'off'
  const draw = () => {
    if (destroyed || gl.isContextLost()) return
    gl.viewport(0,0,canvas.width,canvas.height)
    gl.uniform2f(resolution,canvas.width,canvas.height)
    gl.uniform2f(pointer,mx,my); gl.uniform1f(time,elapsed)
    gl.drawArrays(gl.TRIANGLES,0,6)
    parent?.classList.add('canvas-ready')
  }
  const animate = timestamp => {
    frame = 0
    if (destroyed || !visible || document.hidden || paused()) return
    if (!previous || timestamp-previous>=(matchMedia('(max-width:760px)').matches?42:30)) {
      elapsed += previous ? Math.min((timestamp-previous)/1000,0.08) : 0
      previous = timestamp
      mx += (tx-mx)*0.055; my += (ty-my)*0.055
      draw()
    }
    frame=requestAnimationFrame(animate)
  }
  const sync = () => {
    cancelAnimationFrame(frame); frame=0; previous=0
    draw()
    if (!destroyed && visible && !document.hidden && !paused()) frame=requestAnimationFrame(animate)
  }
  const resize = () => {
    const rect=canvas.getBoundingClientRect()
    const ratio=Math.min(window.devicePixelRatio || 1,1.3,(matchMedia('(max-width:760px)').matches?500:850)/Math.max(rect.width,rect.height,1))
    canvas.width=Math.max(1,Math.round(rect.width*ratio)); canvas.height=Math.max(1,Math.round(rect.height*ratio))
    draw()
  }
  const move = event => {
    if (paused() || !matchMedia('(pointer: fine)').matches) return
    const rect=hero.getBoundingClientRect()
    tx=(event.clientX-rect.left)/rect.width*2-1; ty=(event.clientY-rect.top)/rect.height*2-1
  }
  const leave = () => { tx=0;ty=0 }
  const lost = event => { event.preventDefault(); cancelAnimationFrame(frame); parent?.classList.remove('canvas-ready'); destroyed=true }
  const resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(canvas)
  const observer = new IntersectionObserver(entries => { visible=entries[0].isIntersecting; sync() })
  observer.observe(canvas)
  hero?.addEventListener('pointermove',move); hero?.addEventListener('pointerleave',leave)
  media.addEventListener('change',sync); document.addEventListener('visibilitychange',sync)
  window.addEventListener('portfolio-motion-change',sync); canvas.addEventListener('webglcontextlost',lost)
  resize();sync()
  return () => {
    destroyed=true;cancelAnimationFrame(frame);observer.disconnect();resizeObserver.disconnect()
    hero?.removeEventListener('pointermove',move); hero?.removeEventListener('pointerleave',leave)
    media.removeEventListener('change',sync); document.removeEventListener('visibilitychange',sync)
    window.removeEventListener('portfolio-motion-change',sync);canvas.removeEventListener('webglcontextlost',lost)
    gl.deleteBuffer(buffer);gl.deleteProgram(program);gl.deleteShader(vertex);gl.deleteShader(fragment)
    parent?.classList.remove('canvas-ready')
  }
}
