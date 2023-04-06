exports.ids = [7];
exports.modules = {

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/post/_id.vue?vue&type=template&id=75e9ab2f&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container"
  }, [_vm._ssrNode("<div class=\"title tracking-wider p-8 m-12 mt-4 border-b\" data-v-75e9ab2f><h1 class=\"text-4xl py-4\" data-v-75e9ab2f>" + _vm._ssrEscape(_vm._s(_vm.post.title)) + "</h1> <p class=\"text-2xl font-light\" data-v-75e9ab2f>" + _vm._ssrEscape(_vm._s(_vm.post.author)) + "</p> <p class=\"text-xl font-extralight\" data-v-75e9ab2f>" + _vm._ssrEscape(" " + _vm._s(_vm.formatDate(_vm.post.publishedAt))) + "</p></div> <div class=\"content w-4/5 p-8 m-12 mt-4\" data-v-75e9ab2f><img" + _vm._ssrAttr("src", _vm.post.img) + " alt data-v-75e9ab2f> <p class=\"my-8 text-base\" data-v-75e9ab2f>" + _vm._ssrEscape(_vm._s(_vm.post.content)) + "</p></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/post/_id.vue?vue&type=template&id=75e9ab2f&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/post/_id.vue?vue&type=script&lang=js&
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  computed: {
    post() {
      let Data = this.$store.getters.blogData;
      return Data[this.$route.params.id];
    }
  },
  methods: {
    formatDate(dateString) {
      const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      };
      const dateObj = new Date(dateString);
      return dateObj.toLocaleString('en-US', options);
    }
  }
});
// CONCATENATED MODULE: ./pages/post/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var post_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/post/_id.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  post_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "75e9ab2f",
  "841c5ef6"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map