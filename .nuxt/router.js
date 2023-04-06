import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _61df047f = () => interopDefault(import('..\\pages\\post\\index.vue' /* webpackChunkName: "pages/post/index" */))
const _01b5d61f = () => interopDefault(import('..\\pages\\post\\create.vue' /* webpackChunkName: "pages/post/create" */))
const _b4b5ba96 = () => interopDefault(import('..\\pages\\post\\error.vue' /* webpackChunkName: "pages/post/error" */))
const _0977e9f0 = () => interopDefault(import('..\\pages\\post\\success.vue' /* webpackChunkName: "pages/post/success" */))
const _6e121aa7 = () => interopDefault(import('..\\pages\\post\\_id.vue' /* webpackChunkName: "pages/post/_id" */))
const _4df7685f = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/post",
    component: _61df047f,
    name: "post"
  }, {
    path: "/post/create",
    component: _01b5d61f,
    name: "post-create"
  }, {
    path: "/post/error",
    component: _b4b5ba96,
    name: "post-error"
  }, {
    path: "/post/success",
    component: _0977e9f0,
    name: "post-success"
  }, {
    path: "/post/:id",
    component: _6e121aa7,
    name: "post-id"
  }, {
    path: "/",
    component: _4df7685f,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
