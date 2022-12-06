# Simple Frontend development template

## :construction: Structure

```
/root
 |- /project ... development
 |   |- /public ... static files
 |   |- /styles ... css
 |   |- /src ... js
 |   |- index.html ... entry point
 |- .node-version ... fix node versions
 |- README.md
```

## :rocket: Build

```sh
$ npm run build
```

Output the building files to `dist` directory.

## :dragon: Development

### Setup

```sh
$ cp .vscode/settings.json.sample .vscode/settings.json
$ cp .env.sample .env
$ npm install
```

### :zap: Start dev server

```sh
$ npm run dev
```

Access `http://localhost:3000/`

### :sparkles: Format & lint

```sh
# format & lint
$ npm run format
```

---

## `.env`

> To prevent accidentally leaking env variables to the client, only variables prefixed with VITE\_ are exposed to your Vite-processed code. e.g. for the following env variables:

`.env`

```config
VITE_SOME_KEY=123
DB_PASSWORD=foobar
```

> Only VITE_SOME_KEY will be exposed as import.meta.env.VITE_SOME_KEY to your client source code, but DB_PASSWORD will not.

```js
console.log(import.meta.env.VITE_SOME_KEY); // 123
console.log(import.meta.env.DB_PASSWORD); // undefined
```

cf. https://vitejs.dev/guide/env-and-mode.html#env-variables-and-modes

---

## Multi-Page App

How to add a new page.  
cf. https://vitejs.dev/guide/build.html#multi-page-app

### 1. Add HTML & Javascript in `project`

```diff
/project
+ |- /nested
+ |    |- index.html
+ |    |- nested.js ... entry point
```

### 2. Add build setting

`vite.config.js`

```diff
export default defineConfig({
  root: 'project',
  base: '/',
  publicDir: 'public',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: join(PROJECT_DIR, 'index.html'),
+       nested: join(PROJECT_DIR, 'nested/index.html'),
      },
    },
  },
```
