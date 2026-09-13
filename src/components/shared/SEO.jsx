import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const DEFAULT_TITLE = 'MT Engineering & Construction | Bhubaneswar Civil & Scale Model Contractors';
const DEFAULT_DESC = "MT Engineering & Construction is Bhubaneswar's premier engineering contractor specializing in physical architectural scale models, structural steel, and RCC slabs.";
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop';
const BASE_URL = 'https://mtengineering.netlify.app';

export default function SEO({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  image,
  keywords,
  schemaJson,
  noIndex = false,
  children,
}) {
  const location = useLocation();
  const currentPath = location.pathname === '/' ? '' : location.pathname;
  const currentUrl = canonicalUrl || `${BASE_URL}${currentPath}`;
  const fullTitle = title ? `${title} | MT Engineering & Construction` : DEFAULT_TITLE;
  const fullDesc = description || DEFAULT_DESC;
  const fullImage = image || DEFAULT_IMAGE;
  const robotsDirective = noIndex
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  // Immediate DOM synchronization & deduplication for Lighthouse 100 SEO score
  useEffect(() => {
    // 1. Direct document title sync
    document.title = fullTitle;

    // 2. Remove duplicate meta description tags (keep only 1)
    const metaDescs = document.querySelectorAll('meta[name="description"]');
    if (metaDescs.length > 1) {
      for (let i = 1; i < metaDescs.length; i++) {
        metaDescs[i].remove();
      }
    }
    if (metaDescs[0]) {
      metaDescs[0].setAttribute('content', fullDesc);
    }

    // 3. Remove duplicate canonical links
    const canonicals = document.querySelectorAll('link[rel="canonical"]');
    if (canonicals.length > 1) {
      for (let i = 1; i < canonicals.length; i++) {
        canonicals[i].remove();
      }
    }
    if (canonicals[0]) {
      canonicals[0].setAttribute('href', currentUrl);
    }

    // 4. Remove duplicate robots tags
    const robots = document.querySelectorAll('meta[name="robots"]');
    if (robots.length > 1) {
      for (let i = 1; i < robots.length; i++) {
        robots[i].remove();
      }
    }
    if (robots[0]) {
      robots[0].setAttribute('content', robotsDirective);
    }
  }, [fullTitle, fullDesc, currentUrl, robotsDirective]);

  return (
    <Helmet prioritizeSeoTags>
      {/* Primary Meta */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDesc} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robotsDirective} />

      {/* Canonical Link */}
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="MT Engineering & Construction" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDesc} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDesc} />
      <meta name="twitter:image" content={fullImage} />

      {/* Structured Data (JSON-LD) if provided */}
      {schemaJson && (
        <script type="application/ld+json">
          {JSON.stringify(schemaJson)}
        </script>
      )}

      {/* Custom children elements if supplied */}
      {children}
    </Helmet>
  );
}


