import { useEffect } from "react";

const SITE_URL = "https://hillcitymedia.com";
const SITE_NAME = "Hill City Media";

export default function SEO({
  title,
  description,
  path = "/",
  image = "/images/logo.png",
}) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    const imageUrl = `${SITE_URL}${image}`;

    document.title = title;

    const setMeta = (selector, attributes) => {
      let element = document.head.querySelector(selector);

      if (!element) {
        element = document.createElement("meta");
        document.head.appendChild(element);
      }

      Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
      });
    };

    // Canonical URL
    let canonical = document.head.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", url);

    // Basic SEO
    setMeta('meta[name="description"]', {
      name: "description",
      content: description,
    });

    setMeta('meta[name="robots"]', {
      name: "robots",
      content:
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    });

    // Open Graph
    setMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });

    setMeta('meta[property="og:title"]', {
      property: "og:title",
      content: title,
    });

    setMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });

    setMeta('meta[property="og:url"]', {
      property: "og:url",
      content: url,
    });

    setMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: SITE_NAME,
    });

    setMeta('meta[property="og:locale"]', {
      property: "og:locale",
      content: "en_NG",
    });

    setMeta('meta[property="og:image"]', {
      property: "og:image",
      content: imageUrl,
    });

    // Twitter / X
    setMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });

    setMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: title,
    });

    setMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });

    setMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: imageUrl,
    });
  }, [title, description, path, image]);

  return null;
}