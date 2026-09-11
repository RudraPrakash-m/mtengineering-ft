import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SEO({ title, description, canonicalUrl, ogType = 'website', image }) {
  const location = useLocation();
  const currentUrl = canonicalUrl || `https://mtengineering.netlify.app${location.pathname === '/' ? '' : location.pathname}`;
  const defaultTitle = 'MT Engineering & Construction | Bhubaneswar Civil & Scale Model Contractors';
  const defaultDesc = "MT Engineering & Construction is Bhubaneswar's premier engineering contractor specializing in physical architectural scale models, structural steel, and RCC slabs.";
  const defaultImage = 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop';

  const fullTitle = title ? `${title} | MT Engineering & Construction` : defaultTitle;
  const fullDesc = description || defaultDesc;
  const fullImage = image || defaultImage;

  useEffect(() => {
    // 1. Update Document Title
    document.title = fullTitle;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', fullDesc);
    }

    // 3. Update Canonical Tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', currentUrl);
    }

    // 4. Update OpenGraph Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', fullTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', fullDesc);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', currentUrl);

    const ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) ogImg.setAttribute('content', fullImage);

    // 5. Update Twitter Card Tags
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', fullTitle);

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', fullDesc);

    const twImg = document.querySelector('meta[name="twitter:image"]');
    if (twImg) twImg.setAttribute('content', fullImage);

  }, [fullTitle, fullDesc, currentUrl, fullImage, ogType]);

  return null;
}
