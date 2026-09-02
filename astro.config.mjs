import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mattkindle.com',
  output: 'static',
  vite: {
    server: {
      host: '0.0.0.0',
      allowedHosts: ['terminal.local']
    }
  }
});
