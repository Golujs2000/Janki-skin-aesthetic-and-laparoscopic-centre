import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SEOHead({
  title,
  description,
  keywords,
  image = '/assets/dr-rashmi-sagar-hero-feathered.png',
  type = 'website',
  schema
}) {
  const location = useLocation();
  const siteUrl = 'https://janki-skin-and-laparo-centre.firebaseapp.com';
  const canonicalUrl = `${siteUrl}${location.pathname}`;

  useEffect(() => {
    // 1. Update Title
    if (title) {
      document.title = title;
    }

    // 2. Helper to set or create meta tags
    const setMetaTag = (attrName, attrValue, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 3. Update Standard Meta Tags
    setMetaTag('name', 'description', description);
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }
    setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('name', 'geo.region', 'IN-BR');
    setMetaTag('name', 'geo.placename', 'Forbesganj, Araria, Bihar, India');
    setMetaTag('name', 'geo.position', '26.303892;87.253310');
    setMetaTag('name', 'ICBM', '26.303892, 87.253310');

    // 4. Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 5. Update Open Graph Meta Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', type);
    const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image.startsWith('/') ? '' : '/'}${image}`;
    setMetaTag('property', 'og:image', fullImageUrl);
    setMetaTag('property', 'og:site_name', 'Janki Skin Aesthetic & Laparoscopic Centre');
    setMetaTag('property', 'og:locale', 'en_IN');

    // 6. Update Twitter Card Meta Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', fullImageUrl);

    // 7. Inject Dynamic JSON-LD Structured Data
    if (schema) {
      let scriptTag = document.getElementById('dynamic-page-schema');
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'dynamic-page-schema';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.text = JSON.stringify(schema);
    }

    return () => {
      // Clean up dynamic schema when leaving
      const dynamicScript = document.getElementById('dynamic-page-schema');
      if (dynamicScript) {
        dynamicScript.remove();
      }
    };
  }, [title, description, keywords, image, type, schema, canonicalUrl]);

  return null;
}
