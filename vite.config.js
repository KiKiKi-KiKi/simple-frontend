import postcssNesting from 'postcss-nesting';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  root: 'project',
  base: '/',
  publicDir: 'public',
  build: {
    outDir: '../dist',
  },
  plugins: [
    tsconfigPaths({
      root: '../',
    }),
  ],
  css: {
    postcss: {
      plugins: [postcssNesting],
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
