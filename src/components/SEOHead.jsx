import { useEffect } from "react";

const SEOHead = ({ title, description, keywords }) => {
  useEffect(() => {
    // Set page title
    if (title) {
      document.title = title;
    }

    // Set meta description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement("meta");
        metaDescription.name = "description";
        document.head.appendChild(metaDescription);
      }
      metaDescription.content = description;
    }

    // Set meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.name = "keywords";
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.content = keywords;
    }

    // Set Open Graph tags for social sharing
    if (title) {
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (!ogTitle) {
        ogTitle = document.createElement("meta");
        ogTitle.setAttribute("property", "og:title");
        document.head.appendChild(ogTitle);
      }
      ogTitle.content = title;
    }

    if (description) {
      let ogDescription = document.querySelector('meta[property="og:description"]');
      if (!ogDescription) {
        ogDescription = document.createElement("meta");
        ogDescription.setAttribute("property", "og:description");
        document.head.appendChild(ogDescription);
      }
      ogDescription.content = description;
    }

    // Twitter Card tags
    if (title) {
      let twitterTitle = document.querySelector('meta[name="twitter:title"]');
      if (!twitterTitle) {
        twitterTitle = document.createElement("meta");
        twitterTitle.name = "twitter:title";
        document.head.appendChild(twitterTitle);
      }
      twitterTitle.content = title;
    }

    if (description) {
      let twitterDescription = document.querySelector('meta[name="twitter:description"]');
      if (!twitterDescription) {
        twitterDescription = document.createElement("meta");
        twitterDescription.name = "twitter:description";
        document.head.appendChild(twitterDescription);
      }
      twitterDescription.content = description;
    }
  }, [title, description, keywords]);

  // This component doesn't render anything
  return null;
};

export default SEOHead;

