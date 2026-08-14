import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        products: resolve(__dirname, 'products.html'),
        services: resolve(__dirname, 'services.html'),
        industries: resolve(__dirname, 'industries.html'),
        contact: resolve(__dirname, 'contact.html'),
        consulting: resolve(__dirname, 'consulting.html'),
      },
    },
  },
  server: {
    port: 5173,
    host: true,
    open: false
  }
});
