# pageany-app

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


### Notes

```
"@material/ripple": "^0.34.1",
```

^^^ is added explicitly to npm dep instead of just relying on `material-components-vue` to pull version since `material-components-vue` currently pulls 0.33, which has a broken ripple due to a sass change on [$variable standards](https://github.com/material-components/material-components-web/pull/2459) (particularly $opacity).  When `material-components-vue` updates to version ^0.34.1, then we no longer need it.

```
"node-sass": "^4.8.3",
"sass-loader": "^6.0.7",
```

^^^ can both probably be dev dependencies