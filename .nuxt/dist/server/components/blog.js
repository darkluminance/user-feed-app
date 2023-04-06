exports.ids = [1];
exports.modules = {

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("3abab28f", content, true, context)
};

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_style_index_0_id_eb0e2906_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_style_index_0_id_eb0e2906_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_style_index_0_id_eb0e2906_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_style_index_0_id_eb0e2906_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_style_index_0_id_eb0e2906_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".blog[data-v-eb0e2906]{width:44rem}.blogs[data-v-eb0e2906]:hover{background-color:#d3d3d3;opacity:.8;padding:2%}button[data-v-eb0e2906]{font-weight:600}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blog.vue?vue&type=template&id=eb0e2906&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "blog mr-4 border rounded-3xl inline-block p-6 h-max"
  }, [_vm._ssrNode("<div class=\"blog-title\" data-v-eb0e2906><h1 class=\"text-center text-xl mb-8\" data-v-eb0e2906>Blog Posts</h1></div> "), _vm._ssrNode("<div class=\"blog-create py-4 flex justify-center\" data-v-eb0e2906>", "</div>", [_vm._ssrNode("<button class=\"py-2 px-8 border-2 rounded hover:bg-gray-800 hover:text-gray-200\" data-v-eb0e2906>", "</button>", [_c('NuxtLink', {
    attrs: {
      "to": "/post/create"
    }
  }, [_vm._v("\n                Create Post\n            ")])], 1)]), _vm._ssrNode(" "), _vm._l(_vm.blogs, function (blog, index) {
    return _c('NuxtLink', {
      key: index,
      attrs: {
        "to": '/post/' + index
      }
    }, [_c('div', {
      staticClass: "blogs border-b my-8"
    }, [_c('img', {
      attrs: {
        "src": blog.img,
        "alt": ""
      }
    }), _vm._v(" "), _c('h1', {
      staticClass: "font-bold text-xl py-2"
    }, [_vm._v(" " + _vm._s(blog.title) + " ")]), _vm._v(" "), _c('div', {
      staticClass: "font-light text-sm"
    }, [_c('p', {
      staticClass: "inline-block font-normal"
    }, [_vm._v(" " + _vm._s(blog.author) + ",  ")]), _vm._v(" "), _c('p', {
      staticClass: "inline-block"
    }, [_vm._v(" " + _vm._s(_vm.formatDate(blog.publishedAt)) + " ")])]), _vm._v(" "), _c('p', {
      staticClass: "my-4"
    }, [_vm._v(" " + _vm._s(blog.preview))])])]);
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/blog.vue?vue&type=template&id=eb0e2906&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blog.vue?vue&type=script&lang=js&
/* harmony default export */ var blogvue_type_script_lang_js_ = ({
  computed: {
    blogs() {
      // console.log( this.$store.getters.blogData );
      return this.$store.getters.blogData;
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
    },
    setType() {
      localStorage.setItem('type', 'blog');
    }
  }
});
// CONCATENATED MODULE: ./components/blog.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_blogvue_type_script_lang_js_ = (blogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/blog.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(35)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_blogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "eb0e2906",
  "b9276a6e"
  
)

/* harmony default export */ var blog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=blog.js.map