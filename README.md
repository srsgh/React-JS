# npm

> npm init / npm install

- package manager
- ++package.json (configs for npm)
- ++package-lock.json

# parcel

> npm install -D parcel
> npx parcel index.html

- Dev Build
- Local Server
- HMR: Hot Module Replacement
- File Watching Algorithm: written in C++
- Caching: Faster Builds
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code Spliting
- Differential Bundling: support older browers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking: remove unused code
- Prod(npx parcel build index.html) / dev(npx parcel index.html) bundles

# react

> npm install react

# react-dom

> npm install react-dom

# browserslist

# scripts in package.json

- npm run start

# JSX

- XML-like / html-like syntax
- Parcel uses Babel package to transpile JSX before sent to js engine: JSX=>React.createElement(,,)
- camelCase in atttributes
- class (attribute of html) is className in JSX
- wrap multi-line JSX into ()
- Inject JS into JSX: use {} to run JS expression in JSX code {Javascript expression}

# React Component

- const ReactComponentName = () => { return (JSXCode); }
- Class based Component (old)
- Functional Component (new)
- JS Function that returns a JSX element which is transpiled into react element by Babel
- Syntax (naming convention): [A-Z]+....
- Syntax (rendering): <Name/>
- Component Composition
