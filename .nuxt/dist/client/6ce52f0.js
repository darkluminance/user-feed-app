(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2,4,5,6],{299:function(t,e,n){var content=n(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(83).default)("de48e836",content,!0,{sourceMap:!1})},300:function(t,e,n){var content=n(305);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(83).default)("133ea2f0",content,!0,{sourceMap:!1})},301:function(t,e,n){var content=n(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(83).default)("3abab28f",content,!0,{sourceMap:!1})},302:function(t,e,n){"use strict";n(299)},303:function(t,e,n){var r=n(82)((function(i){return i[1]}));r.push([t.i,".tech-news:hover{background-color:#d3d3d3;opacity:.8;padding:2%;-webkit-user-select:none;-moz-user-select:none;user-select:none}",""]),r.locals={},t.exports=r},304:function(t,e,n){"use strict";n(300)},305:function(t,e,n){var r=n(82)((function(i){return i[1]}));r.push([t.i,".top-news:hover{background-color:#d3d3d3;opacity:.8;padding:2%;-webkit-user-select:none;-moz-user-select:none;user-select:none}",""]),r.locals={},t.exports=r},306:function(t,e,n){"use strict";n(301)},307:function(t,e,n){var r=n(82)((function(i){return i[1]}));r.push([t.i,".blog[data-v-eb0e2906]{width:44rem}.blogs[data-v-eb0e2906]:hover{background-color:#d3d3d3;opacity:.8;padding:2%}button[data-v-eb0e2906]{font-weight:600}",""]),r.locals={},t.exports=r},308:function(t,e,n){"use strict";n.r(e);n(44),n(50);var r={computed:{weatherData:function(){return console.log(this.$store.getters.weatherData),this.$store.getters.weatherData}},methods:{weatherIcon:function(t){return"https://"+t}}},o=n(48),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"weatherwidget mr-4 mb-4 border rounded-3xl inline-block p-6"},[e("div",{staticClass:"weather-temp flex items-center justify-center"},[e("img",{attrs:{src:t.weatherIcon(this.$store.getters.weatherData[1].condition.icon),alt:"",srcset:""}}),t._v(" "),e("h1",{staticClass:"text-3xl"},[t._v(" "+t._s(parseInt(t.weatherData[1].temp_c))+"° ")])]),t._v(" "),e("div",{staticClass:"weather-location-time text-center"},[e("h1",{staticClass:"text-xl"},[t._v(" "+t._s(t.weatherData[0].name)+" ")]),t._v(" "),e("p",[t._v(" "+t._s(t.weatherData[0].localtime.slice(11))+" ")])]),t._v(" "),e("div",{staticClass:"weather-condition text-center"},[e("p",[t._v(" "+t._s(t.weatherData[1].condition.text)+" ")])]),t._v(" "),e("div",{staticClass:"weather-forecast flex"},t._l(t.weatherData[2].forecastday,(function(data){return e("div",{staticClass:"weather-day m-4 text-sm text-center"},[e("h1",[t._v(t._s(data.date))]),t._v(" "),e("div",{staticClass:"flex justify-center"},[e("img",{attrs:{src:t.weatherIcon(data.day.condition.icon),alt:"",srcset:""}})]),t._v(" "),e("div",{staticClass:"weather-temp text-sm flex justify-center"},[e("h1",[t._v(" "+t._s(parseInt(data.day.maxtemp_c))+"°  ")]),t._v(" "),e("h1",[t._v(" "+t._s(parseInt(data.day.mintemp_c))+"° ")])])])})),0)])}),[],!1,null,null,null);e.default=component.exports},309:function(t,e,n){"use strict";n.r(e);n(29),n(49);var r={computed:{technews:function(){return this.$store.getters.technewsData}},methods:{formatDate:function(t){return new Date(t).toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",hour12:!0})},gotoURL:function(t){window.location.href=t}}},o=(n(302),n(48)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"technews mr-4 mt-4 mb-4 border rounded-3xl inline-block p-6 h-max"},[e("h1",{staticClass:"text-xl text-center mb-4"},[t._v("Latest Tech News")]),t._v(" "),t._l(t.technews[2],(function(n){return"articles"!=n?e("div",{staticClass:"tech-news my-8 border-b",on:{click:function(e){return t.gotoURL(n.url)}}},[e("img",{attrs:{src:n.urlToImage,alt:""}}),t._v(" "),e("h1",{staticClass:"font-bold text-xl py-2"},[t._v(" "+t._s(n.title)+" ")]),t._v(" "),e("div",{staticClass:"font-light text-sm"},[e("p",{staticClass:"inline-block font-normal"},[t._v(" "+t._s(n.author)+",  ")]),t._v(" "),e("p",{staticClass:"inline-block"},[t._v(" "+t._s(t.formatDate(n.publishedAt))+" ")])]),t._v(" "),e("p",{staticClass:"my-4"},[t._v(" "+t._s(n.description)+"... ")])]):t._e()}))],2)}),[],!1,null,null,null);e.default=component.exports},310:function(t,e,n){"use strict";n.r(e);n(29),n(49);var r={computed:{topnews:function(){return this.$store.getters.topnewsData}},methods:{formatDate:function(t){return new Date(t).toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",hour12:!0})},gotoURL:function(t){window.location.href=t}}},o=(n(304),n(48)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"topnews w-1/4 ml-auto mb-4 border rounded-3xl inline-block p-6 h-max"},[e("h1",{staticClass:"text-xl text-center mb-4"},[t._v("Latest Top News")]),t._v(" "),t._l(t.topnews[2],(function(n){return"articles"!=n?e("div",{staticClass:"top-news my-8 border-b",on:{click:function(e){return t.gotoURL(n.url)}}},[e("img",{attrs:{src:n.urlToImage,alt:""}}),t._v(" "),e("h1",{staticClass:"font-bold text-xl py-2"},[t._v(" "+t._s(n.title)+" ")]),t._v(" "),e("div",{staticClass:"font-light text-sm"},[e("p",{staticClass:"inline-block font-normal"},[t._v(" "+t._s(n.author)+",   ")]),t._v(" "),e("p",{staticClass:"inline-block"},[t._v(" "+t._s(t.formatDate(n.publishedAt))+" ")])]),t._v(" "),e("p",{staticClass:"my-4"},[t._v(" "+t._s(n.description)+"... ")])]):t._e()}))],2)}),[],!1,null,null,null);e.default=component.exports},311:function(t,e,n){"use strict";n.r(e);var r={computed:{blogs:function(){return this.$store.getters.blogData}},methods:{formatDate:function(t){return new Date(t).toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",hour12:!0})},setType:function(){localStorage.setItem("type","blog")}}},o=(n(306),n(48)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"blog mr-4 border rounded-3xl inline-block p-6 h-max"},[t._m(0),t._v(" "),e("div",{staticClass:"blog-create py-4 flex justify-center"},[e("button",{staticClass:"py-2 px-8 border-2 rounded hover:bg-gray-800 hover:text-gray-200"},[e("NuxtLink",{attrs:{to:"/post/create"}},[t._v("\n                Create Post\n            ")])],1)]),t._v(" "),t._l(t.blogs,(function(n,r){return e("NuxtLink",{key:r,attrs:{to:"/post/"+r}},[e("div",{staticClass:"blogs border-b my-8"},[e("img",{attrs:{src:n.img,alt:""}}),t._v(" "),e("h1",{staticClass:"font-bold text-xl py-2"},[t._v(" "+t._s(n.title)+" ")]),t._v(" "),e("div",{staticClass:"font-light text-sm"},[e("p",{staticClass:"inline-block font-normal"},[t._v(" "+t._s(n.author)+",  ")]),t._v(" "),e("p",{staticClass:"inline-block"},[t._v(" "+t._s(t.formatDate(n.publishedAt))+" ")])]),t._v(" "),e("p",{staticClass:"my-4"},[t._v(" "+t._s(n.preview))])])])}))],2)}),[function(){var t=this._self._c;return t("div",{staticClass:"blog-title"},[t("h1",{staticClass:"text-center text-xl mb-8"},[this._v("Blog Posts")])])}],!1,null,"eb0e2906",null);e.default=component.exports},325:function(t,e,n){"use strict";n.r(e);var r=n(308),o=n(309),l=n(310),c=n(311),d={name:"IndexPage",components:{weather:r.default,technews:o.default,topnews:l.default,blog:c.default}},f=n(48),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{staticClass:"items flex"},[e("div",{staticClass:"flex w-1/4 flex-wrap"},[e("weather"),t._v(" "),e("technews")],1),t._v(" "),e("blog"),t._v(" "),e("topnews")],1)])}),[function(){var t=this._self._c;return t("div",{staticClass:"title text-center text-4xl font-light tracking-wider p-8 m-12 mt-4 border-b"},[t("h1",[this._v("WELCOME")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Weather:n(308).default,Technews:n(309).default,Blog:n(311).default,Topnews:n(310).default})}}]);