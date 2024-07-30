import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';

export default defineConfig({
  
  site: "https://lucaspereirasouzat.github.io",
  base: "lucaspereirasouzat",
  integrations: [react(), tailwind()],
  vite: {
    
  }
});