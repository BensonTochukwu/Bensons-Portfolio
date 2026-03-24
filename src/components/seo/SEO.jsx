import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Teco-Benson Tochukwu | Benson - Full Stack Developer",
  description = "Frontend developer specializing in React and modern JavaScript, building responsive and user-focused web applications while growing into full stack development.",
  keywords = "Teco-Benson Tochukwu, Tochukwu_dev, Frontend Developer, React Developer, JavaScript Developer, Node.js, Full Stack Developer, Web Developer Nigeria, Portfolio, Lagos Nigeria",
  image = "/images/Benson.png",
  url = "https://mr-heritage.name.ng",
  type = "website",
  structuredData = null,
  canonical = null,
  noindex = false,
  nofollow = false,
}) => {
  const fullTitle = title.includes("Benson")
    ? title
    : `${title} | Benson Portfolio`;
  const fullUrl = canonical || url;
  const fullImage = image.startsWith("http") ? image : `${url}${image}`;

  const robotsContent = [];
  if (noindex) robotsContent.push("noindex");
  if (nofollow) robotsContent.push("nofollow");
  if (!noindex && !nofollow) robotsContent.push("index", "follow");

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Teco-Benson Tochukwu" />
      <meta name="robots" content={robotsContent.join(", ")} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Benson Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:creator" content="@Tochukwu-dev" />
      <meta name="twitter:site" content="@Tochukwu-dev" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#181818" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />

      {/* Name variations for better searchability */}
      <meta name="alternate-name" content="Tochukwu" />
      <meta name="alternate-name" content="Tochukwu_dev" />
      <meta name="alternate-name" content="Teco-Benson" />
      <meta name="nickname" content="Benson" />
      <meta name="nickname" content="Tochukwu" />
      <meta name="nickname" content="Tochukwu_dev" />

      {/* Favicon */}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/Benson.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/Benson.png"
      />
      <link rel="apple-touch-icon" href="/images/Benson.png" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
