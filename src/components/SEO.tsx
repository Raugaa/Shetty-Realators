import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
  canonicalUrl?: string;
  children?: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Shetty Realtors - Premium Commercial Real Estate Solutions in Pune',
  description = 'Shetty Realtors - Premium commercial real estate solutions. Connecting businesses with the right space for over 30 years. Specializing in office leasing, co-working spaces, and commercial property management in Pune.',
  keywords = 'real estate, commercial property, office leasing, co-working spaces, property management, Pune real estate, commercial real estate, business spaces, office spaces, Shetty Realtors',
  author = 'Shetty Realtors',
  ogTitle,
  ogDescription,
  ogImage = 'https://lovable.dev/opengraph-image-p98pqg.png',
  ogUrl,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterSite = '@lovable_dev',
  twitterCreator = '@lovable_dev',
  canonicalUrl,
  children
}) => {
  const defaultTitle = 'Shetty Realtors - Premium Commercial Real Estate Solutions in Pune';
  const fullTitle = title ? `${title} | Shetty Realtors` : defaultTitle;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Open Graph */}
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={ogTitle || fullTitle} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          "name": "Shetty Realtors",
          "url": "https://shettyrealtors.com",
          "logo": "https://lovable.dev/opengraph-image-p98pqg.png",
          "description": "Premium commercial real estate solutions in Pune with over 30 years of experience.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Pune",
            "addressRegion": "Maharashtra",
            "addressCountry": "India"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9422005110",
            "contactType": "Customer Service"
          }
        })}
      </script>
      
      {children}
    </Helmet>
  );
};

export default SEO;