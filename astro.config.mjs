// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // Importe le plugin

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()] // Ajoute le plugin aux plugins Vite
    // PAS d'option 'config:' pour l'instant, on teste la détection auto
  }
  // Pas de section 'integrations' pour Tailwind ici
});