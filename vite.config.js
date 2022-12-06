import { join, resolve } from 'path';

import postcssNesting from 'postcss-nesting';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const PROJECT_DIR = resolve(__dirname, 'project/');

export default defineConfig({
  root: 'project',
  base: '/',
  envDir: '../',
  publicDir: 'public',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: join(PROJECT_DIR, 'index.html'),
        nested: join(PROJECT_DIR, 'nested/index.html'),
      },
    },
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
