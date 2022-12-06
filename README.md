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

## :dragon: Development

### Setup

```sh
$ cp .vscode/settings.json.sample .vscode/settings.json
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
