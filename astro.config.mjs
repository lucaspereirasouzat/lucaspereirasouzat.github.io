import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';
import path from 'path';
export default defineConfig({
  site: "https://lucaspereirasouzat.github.io",
  base: "lucaspereirasouzat",

  integrations: [
    tailwind(),
    react({

    }),
  ],

});