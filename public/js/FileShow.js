(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/FileShow"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Front/File/Show.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Front/File/Show.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Show",
  metaInfo: function metaInfo() {
    return {
      title: 'فایل ' + this.slug
    };
  },
  data: function data() {
    return {
      form: new vform__WEBPACK_IMPORTED_MODULE_0__["Form"]({
        discount: null,
        price: null
      }),
      file: {},
      slug: this.$route.params.slug,
      item: {
        price: null,
        discount_id: null,
        file_id: null
      }
    };
  },
  computed: {
    csrf: function csrf() {
      return window.csrf;
    }
  },
  methods: {
    applyDiscount: function applyDiscount() {
      var _this = this;

      axios.post('/api/discount', this.form).then(function (_ref) {
        var data = _ref.data;
        _this.form = {};
        _this.item.discount_id = data.id;
        _this.item.price = data.price + '000';
      });
    }
  },
  created: function created() {
    var _this2 = this;

    axios.get("/api/file/".concat(this.$route.params.slug)).then(function (_ref2) {
      var data = _ref2.data;
      _this2.file = data;
      _this2.form.price = data.price;
      _this2.item.price = data.price + '000';
      _this2.item.file_id = data.id;
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Front/File/Show.vue?vue&type=style&index=0&id=55705d0a&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Front/File/Show.vue?vue&type=style&index=0&id=55705d0a&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.card-footer[data-v-55705d0a] {\n    border-top: 1px solid #eee;\n}\n#related_files[data-v-55705d0a] {\n    border-top: 1px solid #d1d1d1;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Front/File/Show.vue?vue&type=style&index=0&id=55705d0a&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Front/File/Show.vue?vue&type=style&index=0&id=55705d0a&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=style&index=0&id=55705d0a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Front/File/Show.vue?vue&type=style&index=0&id=55705d0a&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Front/File/Show.vue?vue&type=template&id=55705d0a&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Front/File/Show.vue?vue&type=template&id=55705d0a&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row d-flex justify-content-center mt-5" }, [
      _c("div", { staticClass: "col-md-8" }, [
        _c("div", { staticClass: "card card-profile" }, [
          _c("div", { staticClass: "card-avatar" }, [
            _c("a", { attrs: { href: "#pablo" } }, [
              _c("img", {
                staticClass: "img",
                attrs: { src: "/" + _vm.file.image_src }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("h6", { staticClass: "card-category text-gray" }, [
              _vm._v(
                "\n                        قیمت: " +
                  _vm._s(_vm.file.price_toman) +
                  " /\n                        اشتراک ویژه: " +
                  _vm._s(_vm.file.membership_name) +
                  "\n                    "
              )
            ]),
            _vm._v(" "),
            _c("h4", { staticClass: "card-title" }, [
              _vm._v(_vm._s(_vm.file.name))
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "card-description mb-3" }, [
              _vm._v(
                "\n                        " +
                  _vm._s(_vm.file.description) +
                  "\n                    "
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-footer" },
              [
                _c("form", { attrs: { action: "/buy", method: "POST" } }, [
                  _c("input", {
                    attrs: { type: "hidden", name: "_token" },
                    domProps: { value: _vm.csrf }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    attrs: { type: "hidden", name: "file_id" },
                    domProps: { value: _vm.item.file_id }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    attrs: { type: "hidden", name: "discount_id" },
                    domProps: { value: _vm.item.discount_id }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    attrs: { type: "hidden", name: "access_token" },
                    domProps: { value: _vm.$store.state.auth.token }
                  }),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !_vm.form.discount,
                          expression: "! form.discount"
                        }
                      ],
                      staticClass: "btn btn-primary btn-round"
                    },
                    [_vm._v("خرید")]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "base-btn",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.form.discount,
                        expression: "form.discount"
                      }
                    ],
                    attrs: { btn: "info" },
                    on: { click: _vm.applyDiscount }
                  },
                  [_vm._v("اعمال کد تخفیف\n                        ")]
                ),
                _vm._v(" "),
                _c("p", [_vm._v("قیمت تمام شده : " + _vm._s(_vm.item.price))]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-md-3" },
                  [
                    _vm.file.price && !_vm.item.discount_id
                      ? _c("base-input", {
                          attrs: { label: "کد تخفیف", name: "discount" },
                          model: {
                            value: _vm.form.discount,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "discount", $$v)
                            },
                            expression: "form.discount"
                          }
                        })
                      : _vm._e()
                  ],
                  1
                )
              ],
              1
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("h4", [_vm._v("فایل های مربوطه")]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "row mt-5", attrs: { id: "related_files" } },
      _vm._l(_vm.file.related_files, function(item) {
        return _c("div", { key: item.id, staticClass: "col-md-4 mt-5" }, [
          _c("div", { staticClass: "card card-profile" }, [
            _c("div", { staticClass: "card-avatar" }, [
              _c("a", { attrs: { href: "#" } }, [
                _c("img", {
                  staticClass: "img",
                  attrs: { src: "/" + item.image_src }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("h6", { staticClass: "card-category text-gray" }, [
                _vm._v(
                  "\n                        قیمت: " +
                    _vm._s(item.price_toman) +
                    "/\n                        اشتراک ویژه: " +
                    _vm._s(item.membership_name) +
                    "\n                    "
                )
              ]),
              _vm._v(" "),
              _c("h4", { staticClass: "card-title" }, [
                _vm._v(_vm._s(item.name))
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "card-description mb-3" }, [
                _vm._v(
                  "\n                        " +
                    _vm._s(item.description) +
                    "\n                    "
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-footer d-flex justify-content-center" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-primary btn-round",
                      attrs: {
                        to: {
                          name: "file-show",
                          params: { url: "show", slug: item.slug }
                        }
                      }
                    },
                    [_vm._v("خرید\n                        ")]
                  )
                ],
                1
              )
            ])
          ])
        ])
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Front/File/Show.vue":
/*!************************************************!*\
  !*** ./resources/js/views/Front/File/Show.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_55705d0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=55705d0a&scoped=true& */ "./resources/js/views/Front/File/Show.vue?vue&type=template&id=55705d0a&scoped=true&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/views/Front/File/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Show_vue_vue_type_style_index_0_id_55705d0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Show.vue?vue&type=style&index=0&id=55705d0a&scoped=true&lang=css& */ "./resources/js/views/Front/File/Show.vue?vue&type=style&index=0&id=55705d0a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_55705d0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_55705d0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "55705d0a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Front/File/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Front/File/Show.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Front/File/Show.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Front/File/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Front/File/Show.vue?vue&type=style&index=0&id=55705d0a&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/views/Front/File/Show.vue?vue&type=style&index=0&id=55705d0a&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_style_index_0_id_55705d0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=style&index=0&id=55705d0a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Front/File/Show.vue?vue&type=style&index=0&id=55705d0a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_style_index_0_id_55705d0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_style_index_0_id_55705d0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_style_index_0_id_55705d0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_style_index_0_id_55705d0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/Front/File/Show.vue?vue&type=template&id=55705d0a&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/Front/File/Show.vue?vue&type=template&id=55705d0a&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_55705d0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=55705d0a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Front/File/Show.vue?vue&type=template&id=55705d0a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_55705d0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_55705d0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);