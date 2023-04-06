exports.ids = [8];
exports.modules = {

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("57305f74", content, true, context)
};

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_884f15b8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_884f15b8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_884f15b8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_884f15b8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_884f15b8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".input-item[data-v-884f15b8]{margin:.5em 1em}input[data-v-884f15b8]{height:2rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/post/create.vue?vue&type=template&id=884f15b8&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"border-b pb-4\" data-v-884f15b8><h1 class=\"font-bold text-4xl\" data-v-884f15b8>Create a Blog Post</h1> <p class=\"text-base my-4\" data-v-884f15b8>Fill up the informations for your post</p></div> <form action=\"#\" method=\"post\" data-v-884f15b8><div data-v-884f15b8><div class=\"flex flex-col my-4\" data-v-884f15b8><div class=\"input-item\" data-v-884f15b8><label for=\"title\" class=\"text-xl font-semibold\" data-v-884f15b8>Post Title</label></div> <div class=\"input-item\" data-v-884f15b8><input type=\"text\" name=\"title\" id=\"title\"" + _vm._ssrAttr("value", _vm.title) + " class=\"w-full border-2\" data-v-884f15b8></div></div> <div class=\"flex flex-col my-4\" data-v-884f15b8><div class=\"input-item\" data-v-884f15b8><label for=\"author\" class=\"text-xl font-semibold\" data-v-884f15b8>Post Author</label></div> <div class=\"input-item\" data-v-884f15b8><input type=\"text\" name=\"author\" id=\"author\"" + _vm._ssrAttr("value", _vm.author) + " class=\"w-full border-2\" data-v-884f15b8></div></div> <div class=\"flex flex-col my-4\" data-v-884f15b8><div class=\"input-item\" data-v-884f15b8><label for=\"url\" class=\"text-xl font-semibold\" data-v-884f15b8>Post Image Link</label></div> <div class=\"input-item\" data-v-884f15b8><input type=\"text\" name=\"url\" id=\"url\"" + _vm._ssrAttr("value", _vm.url) + " class=\"w-full border-2\" data-v-884f15b8></div></div> <div class=\"flex flex-col my-4\" data-v-884f15b8><div class=\"input-item\" data-v-884f15b8><label for=\"content\" class=\"text-xl font-semibold\" data-v-884f15b8>Post Content</label></div> <div class=\"input-item\" data-v-884f15b8><textarea name=\"content\" id cols=\"30\" rows=\"10\" class=\"w-full border-2\" data-v-884f15b8>" + _vm._ssrEscape(_vm._s(_vm.content)) + "</textarea></div></div></div> <div class=\"blog-create-post m-4\" data-v-884f15b8><button type=\"submit\" class=\"py-2 px-8 border-2 rounded bg-gray-800 text-gray-200 hover:bg-gray-200 hover:text-gray-800\" data-v-884f15b8>\n                Post\n            </button> <button type=\"reset\" class=\"py-2 mx-8 px-8 border-2 rounded hover:bg-gray-800 hover:text-gray-200 bg-gray-200 text-gray-800\" data-v-884f15b8>\n                Go Back\n            </button></div></form>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/post/create.vue?vue&type=template&id=884f15b8&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/post/create.vue?vue&type=script&lang=js&

/* harmony default export */ var createvue_type_script_lang_js_ = ({
  data() {
    return {
      title: '',
      author: '',
      url: '',
      content: ''
    };
  },
  methods: {
    goBack() {
      window.location.href = '/';
    },
    post() {
      if (this.title == '' || this.author == '' || this.content == '') {
        alert('Please fill up all the information');
        return;
      }
      let preview = this.content.split(' ').slice(0, 10).join(' ') + '...';
      let date = new Date();
      if (this.url == '') {
        this.url = 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80';
      }
      let blogdata = {
        author: this.author,
        content: this.content.trim(),
        img: this.url,
        preview: preview,
        publishedAt: date,
        title: this.title
      };
      let res = external_axios_default.a.post('https://user-feed-6041f-default-rtdb.asia-southeast1.firebasedatabase.app/user-posts.json', blogdata).then(res => {
        if (res.status == 200) {
          window.location.href = '/post/success';
        } else {
          window.location.href = '/post/error';
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/post/create.vue?vue&type=script&lang=js&
 /* harmony default export */ var post_createvue_type_script_lang_js_ = (createvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/post/create.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(43)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  post_createvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "884f15b8",
  "0422eb81"
  
)

/* harmony default export */ var create = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=create.js.map