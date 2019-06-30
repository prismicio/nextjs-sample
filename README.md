# Next.js Universal Application POC


## Author
Sean Kinread
sean@kinread.com


## Tech Stack
* Yarn
* Next.js
* Webpack
* Babel
* React
* React-Bootstrap
* Prismic.io


## Overview
At the start of this year I created this POC utilising [Next v7](https://nextjs.org) to create a fully scaling, highly performant, isomorphic React application, capable of retreiving content directly from Prismic.io.

Although this is an _incomplete_ demo, a complete content and routing solution is in place. When hosting Next application on the [Zeit](https://zeit.co) infrastructure, each page will compile to its own Lambda function in the cloud. This allows for highly cachable server rendered pages that can be fully indexed by searched engines, and can scale virtually instantly on a per-route basis.

When rendered in the browser, Next JS provides full client-side optimisation. The framework includes code splitting and local dev env with hot reloading. The use of prismic-reactjs and prismic-javascript also allow content editors to live preview their edits from the Prismic interface on the live website.

Note: styling and content is basic sample only. This is not a production app, Prismic.io content may not be available.


## Component Structure
Functional jsx templates are used as much as possible

* /pages/ folder contains React class specialised for Next.js
* /layouts/ example shared temples
* /components/ example of global header


## Installation

Just run
```
yarn
```

## Commands

### Local development
```
yarn dev
```

### Deploy to [Now](https://zeit.co) via CLI
```
npm i -g now
now
```

### Analyze code (*nix)
```
yarn analyze
```

### Lint
```
yarn lint
```
