import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  keywords?: string;
  structuredData?: object | object[];
}

const BASE_URL = "https://quadtechsolutions.online";
const DEFAULT_IMAGE = `${BASE_URL}/hero.png`;

const useSEO = ({ title, description, canonical, ogImage, keywords, structuredData }: SEOProps) => {
  useEffect(() => {
    const fullTitle = `${title} | Quad Research`;
    const url = canonical ? `${BASE_URL}${canonical}` : BASE_URL;
    const image = ogImage ?? DEFAULT_IMAGE;

    document.title = fullTitle;

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        const match = selector.match(/\[(\w+(?::\w+)?)="([^"]+)"\]/);
        if (match) el.setAttribute(match[1], match[2]);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]',        "content", description);
    setMeta('meta[property="og:title"]',        "content", fullTitle);
    setMeta('meta[property="og:description"]',  "content", description);
    setMeta('meta[property="og:url"]',          "content", url);
    setMeta('meta[property="og:image"]',        "content", image);
    setMeta('meta[name="twitter:title"]',       "content", fullTitle);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]',       "content", image);

    if (keywords) setMeta('meta[name="keywords"]', "content", keywords);

    // Canonical
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", url);

    // Per-page structured data
    const SCRIPT_ID = "page-structured-data";
    let script = document.getElementById(SCRIPT_ID);
    if (structuredData) {
      if (!script) {
        script = document.createElement("script");
        script.id = SCRIPT_ID;
        script.setAttribute("type", "application/ld+json");
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(
        Array.isArray(structuredData) ? structuredData : structuredData
      );
    } else if (script) {
      script.remove();
    }

    return () => {
      document.getElementById(SCRIPT_ID)?.remove();
    };
  }, [title, description, canonical, ogImage, keywords, structuredData]);
};

export default useSEO;
