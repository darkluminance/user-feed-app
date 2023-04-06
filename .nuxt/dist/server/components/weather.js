exports.ids = [5];
exports.modules = {

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/weather.vue?vue&type=template&id=0d7c7588&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "weatherwidget mr-4 mb-4 border rounded-3xl inline-block p-6"
  }, [_vm._ssrNode("<div class=\"weather-temp flex items-center justify-center\"><img" + _vm._ssrAttr("src", _vm.weatherIcon(this.$store.getters.weatherData[1].condition.icon)) + " alt srcset> <h1 class=\"text-3xl\">" + _vm._ssrEscape(" " + _vm._s(parseInt(_vm.weatherData[1].temp_c)) + "° ") + "</h1></div> <div class=\"weather-location-time text-center\"><h1 class=\"text-xl\">" + _vm._ssrEscape(" " + _vm._s(_vm.weatherData[0].name) + " ") + "</h1> <p>" + _vm._ssrEscape(" " + _vm._s(_vm.weatherData[0].localtime.slice(11)) + " ") + "</p></div> <div class=\"weather-condition text-center\"><p>" + _vm._ssrEscape(" " + _vm._s(_vm.weatherData[1].condition.text) + " ") + "</p></div> <div class=\"weather-forecast flex\">" + _vm._ssrList(_vm.weatherData[2].forecastday, function (data) {
    return "<div class=\"weather-day m-4 text-sm text-center\"><h1>" + _vm._ssrEscape(_vm._s(data.date)) + "</h1> <div class=\"flex justify-center\"><img" + _vm._ssrAttr("src", _vm.weatherIcon(data.day.condition.icon)) + " alt srcset></div> <div class=\"weather-temp text-sm flex justify-center\"><h1>" + _vm._ssrEscape(" " + _vm._s(parseInt(data.day.maxtemp_c)) + "°  ") + "</h1> <h1>" + _vm._ssrEscape(" " + _vm._s(parseInt(data.day.mintemp_c)) + "° ") + "</h1></div></div>";
  }) + "</div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/weather.vue?vue&type=template&id=0d7c7588&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/weather.vue?vue&type=script&lang=js&
/* harmony default export */ var weathervue_type_script_lang_js_ = ({
  computed: {
    weatherData() {
      if (false) {}
      return this.$store.getters.weatherData;
    }
  },
  methods: {
    weatherIcon(icon) {
      // console.log( this.$store.getters.weatherData[ 2 ].forecastday )
      return 'https://' + icon;
    }
  }
});
// CONCATENATED MODULE: ./components/weather.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_weathervue_type_script_lang_js_ = (weathervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/weather.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_weathervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "496a289d"
  
)

/* harmony default export */ var weather = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=weather.js.map