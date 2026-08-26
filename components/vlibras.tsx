"use client";

import Script from "next/script";

export function VLibras() {
  return (
    <Script
      src="https://vlibras.gov.br/app/vlibras-plugin.js"
      strategy="lazyOnload"
      onLoad={() => {
        new window.VLibras.Widget("https://vlibras.gov.br/app");
      }}
    />
  );
}
