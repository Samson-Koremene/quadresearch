import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

const BASE_URL = "https://quadtechsolutions.online";
const DEFAULT_IMAGE = `${BASE_URL}/hero.png`;

const useSEO = ({ title, description, canonical, ogImage }: SEOProps) => {
  useEffect(() => {
    const fullTitle = `${title} | Quad Research`;
    const url = canonical ? `${BASE_URL}${canonical}` : BASE_URL;
    const image = ogImage ?? DEFAULT_IMAGE;

    // Title
    document.title = fullTitle;

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        const [attrName, attrVal] = selector.replace("meta[", "").replace("]", "").split('="');
        el.setAttribute(attrName, attrVal.replace('"', ""));
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]',         "content", description);
    setMeta('meta[property="og:title"]',         "content", fullTitle);
    setMeta('meta[property="og:description"]',   "content", description);
    setMeta('meta[property="og:url"]',           "content", url);
    setMeta('meta[property="og:image"]',         "content", image);
    setMeta('meta[name="twitter:title"]',        "content", fullTitle);
    setMeta('meta[name="twitter:description"]',  "content", description);
    setMeta('meta[name="twitter:image"]',        "content", image);

    // Canonical link
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", url);
  }, [title, description, canonical, ogImage]);
};

export default useSEO;
