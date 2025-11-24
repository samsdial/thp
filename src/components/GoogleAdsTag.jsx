import { useEffect } from "react";

const GoogleAdsTag = ({ conversionId }) => {
  useEffect(() => {
    // Verificar si el script ya existe
    const existingScript = document.querySelector(
      `script[src*="googletagmanager.com/gtag/js?id=${conversionId}"]`
    );

    if (!existingScript) {
      // Crear el script de gtag.js
      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=${conversionId}`;
      script.async = true;
      document.head.appendChild(script);

      // Inicializar dataLayer y gtag
      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        window.gtag = gtag;
        gtag("js", new Date());
        gtag("config", conversionId);
      };
    } else {
      // Si el script ya existe, solo configurar
      if (window.gtag) {
        window.gtag("config", conversionId);
      }
    }
  }, [conversionId]);

  // Este componente no renderiza nada visible
  return null;
};

export default GoogleAdsTag;

