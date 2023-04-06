export { default as Blog } from '../..\\components\\blog.vue'
export { default as NuxtLogo } from '../..\\components\\NuxtLogo.vue'
export { default as Technews } from '../..\\components\\technews.vue'
export { default as Topnews } from '../..\\components\\topnews.vue'
export { default as Weather } from '../..\\components\\weather.vue'

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
