export const Blog = () => import('../..\\components\\blog.vue' /* webpackChunkName: "components/blog" */).then(c => wrapFunctional(c.default || c))
export const NuxtLogo = () => import('../..\\components\\NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const Technews = () => import('../..\\components\\technews.vue' /* webpackChunkName: "components/technews" */).then(c => wrapFunctional(c.default || c))
export const Topnews = () => import('../..\\components\\topnews.vue' /* webpackChunkName: "components/topnews" */).then(c => wrapFunctional(c.default || c))
export const Weather = () => import('../..\\components\\weather.vue' /* webpackChunkName: "components/weather" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
