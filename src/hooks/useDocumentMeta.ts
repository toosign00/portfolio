import { useEffect } from 'react';

interface MetaTag {
  name?: string;
  property?: string;
  content: string;
}

interface DocumentMetaOptions {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  canonical?: string;
  robots?: string;
  author?: string;
  structuredData?: object;
}

export const useDocumentMeta = (options: DocumentMetaOptions) => {
  useEffect(() => {
    const originalTitle = document.title;
    const addedTags: HTMLElement[] = [];

    // 제목 설정
    if (options.title) {
      document.title = options.title;
    }

    // 메타 태그 생성 함수
    const createMetaTag = (attributes: Record<string, string>) => {
      const tag = document.createElement('meta');
      Object.entries(attributes).forEach(([key, value]) => {
        tag.setAttribute(key, value);
      });
      return tag;
    };

    // 링크 태그 생성 함수
    const createLinkTag = (attributes: Record<string, string>) => {
      const tag = document.createElement('link');
      Object.entries(attributes).forEach(([key, value]) => {
        tag.setAttribute(key, value);
      });
      return tag;
    };

    // 기존 메타 태그 제거 함수
    const removeExistingTag = (selector: string) => {
      const existing = document.querySelector(selector);
      if (existing) {
        existing.remove();
      }
    };

    // 기본 메타 태그들
    const metaTags: MetaTag[] = [];

    if (options.description) {
      removeExistingTag('meta[name="description"]');
      metaTags.push({ name: 'description', content: options.description });
    }

    if (options.keywords) {
      removeExistingTag('meta[name="keywords"]');
      metaTags.push({ name: 'keywords', content: options.keywords });
    }

    if (options.robots) {
      removeExistingTag('meta[name="robots"]');
      metaTags.push({ name: 'robots', content: options.robots });
    }

    if (options.author) {
      removeExistingTag('meta[name="author"]');
      metaTags.push({ name: 'author', content: options.author });
    }

    // Open Graph 태그들
    if (options.ogTitle) {
      removeExistingTag('meta[property="og:title"]');
      metaTags.push({ property: 'og:title', content: options.ogTitle });
    }

    if (options.ogDescription) {
      removeExistingTag('meta[property="og:description"]');
      metaTags.push({ property: 'og:description', content: options.ogDescription });
    }

    if (options.ogImage) {
      removeExistingTag('meta[property="og:image"]');
      metaTags.push({ property: 'og:image', content: options.ogImage });
    }

    if (options.ogUrl) {
      removeExistingTag('meta[property="og:url"]');
      metaTags.push({ property: 'og:url', content: options.ogUrl });
      removeExistingTag('meta[property="og:type"]');
      metaTags.push({ property: 'og:type', content: 'website' });
    }

    // Twitter Card 태그들
    if (options.twitterCard) {
      removeExistingTag('meta[name="twitter:card"]');
      metaTags.push({ name: 'twitter:card', content: options.twitterCard });

      if (options.ogTitle) {
        removeExistingTag('meta[name="twitter:title"]');
        metaTags.push({ name: 'twitter:title', content: options.ogTitle });
      }

      if (options.ogDescription) {
        removeExistingTag('meta[name="twitter:description"]');
        metaTags.push({ name: 'twitter:description', content: options.ogDescription });
      }

      if (options.ogImage) {
        removeExistingTag('meta[name="twitter:image"]');
        metaTags.push({ name: 'twitter:image', content: options.ogImage });
      }
    }

    // 메타 태그들을 DOM에 추가
    metaTags.forEach((tag) => {
      const metaElement = createMetaTag(
        tag.name
          ? { name: tag.name, content: tag.content }
          : { property: tag.property!, content: tag.content },
      );
      document.head.appendChild(metaElement);
      addedTags.push(metaElement);
    });

    // canonical 링크 태그
    if (options.canonical) {
      removeExistingTag('link[rel="canonical"]');
      const canonicalLink = createLinkTag({
        rel: 'canonical',
        href: options.canonical,
      });
      document.head.appendChild(canonicalLink);
      addedTags.push(canonicalLink);
    }

    // 구조화된 데이터 (JSON-LD)
    if (options.structuredData) {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(options.structuredData);
      document.head.appendChild(script);
      addedTags.push(script);
    }

    // 클린업 함수 - 컴포넌트 언마운트 시 추가된 태그들 제거
    return () => {
      document.title = originalTitle;
      addedTags.forEach((tag) => {
        if (tag.parentNode) {
          tag.parentNode.removeChild(tag);
        }
      });
    };
  }, [options]);
};
