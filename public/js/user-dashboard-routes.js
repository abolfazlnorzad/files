(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/user-dashboard-routes"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/DashboardRoutes.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard/DashboardRoutes.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_errors_NotFound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/views/errors/NotFound */ "./resources/js/views/errors/NotFound.vue");
/* harmony import */ var _Membership__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Membership */ "./resources/js/views/Dashboard/Membership.vue");
/* harmony import */ var _MyFiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyFiles */ "./resources/js/views/Dashboard/MyFiles.vue");
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "DashboardRoutes",
  components: {
    NotFound: _views_errors_NotFound__WEBPACK_IMPORTED_MODULE_0__["default"],
    Membership: _Membership__WEBPACK_IMPORTED_MODULE_1__["default"],
    MyFiles: _MyFiles__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: ['url'],
  computed: {
    componentName: function componentName() {
      return ['membership', 'my-files'].includes(this.url) ? this.url : 'not-found';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/File.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard/File.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: "File",
  props: ['file']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/MyFiles.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard/MyFiles.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _File__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./File */ "./resources/js/views/Dashboard/File.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  name: "MyFiles",
  components: {
    File: _File__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  metaInfo: {
    title: 'فایل های من'
  },
  data: function data() {
    return {
      files: {}
    };
  },
  methods: {
    getFiles: function getFiles() {
      var _arguments = arguments,
          _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var page, _yield$axios$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                page = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 1;
                _context.next = 3;
                return axios.get('/api/dashboard/my-files?page=' + page);

              case 3:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                _this.files = data;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  created: function created() {
    this.getFiles();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/DashboardRoutes.vue?vue&type=template&id=4b143bd4&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard/DashboardRoutes.vue?vue&type=template&id=4b143bd4&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _c(_vm.componentName, { tag: "component" })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/File.vue?vue&type=template&id=0ca5db96&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard/File.vue?vue&type=template&id=0ca5db96&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("tr", [
    _c("td", [
      _c("img", {
        attrs: {
          src: "/" + _vm.file.image_src,
          alt: _vm.file.name,
          width: "77"
        }
      })
    ]),
    _vm._v(" "),
    _c("td", [_vm._v("\n        " + _vm._s(_vm.file.name) + "\n    ")]),
    _vm._v(" "),
    _c("td", [_vm._v("\n        " + _vm._s(_vm.file.price_toman) + "\n    ")]),
    _vm._v(" "),
    _vm._m(0)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("button", { staticClass: "btn btn-info" }, [_vm._v("دانلود")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/MyFiles.vue?vue&type=template&id=7fcd3481&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard/MyFiles.vue?vue&type=template&id=7fcd3481&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "col-md-12" }, [
    _c("div", { staticClass: "card card-plain" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c(
          "div",
          { staticClass: "table-responsive" },
          [
            _c("table", { staticClass: "table table-hover" }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.files.data, function(file) {
                  return _c("File", { key: file.id, attrs: { file: file } })
                }),
                1
              )
            ]),
            _vm._v(" "),
            _c("pagination", {
              attrs: { data: _vm.files },
              on: { "pagination-change-page": _vm.getFiles }
            })
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header card-header-primary" }, [
      _c("h4", { staticClass: "card-title mt-0" }, [_vm._v("فایل های من")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", {}, [
      _c("tr", [
        _c("th", [
          _vm._v("\n                            #\n                        ")
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v("\n                            نام\n                        ")
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v("\n                            قیمت\n                        ")
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v(
            "\n                            دانلود\n                        "
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Dashboard/DashboardRoutes.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/Dashboard/DashboardRoutes.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardRoutes_vue_vue_type_template_id_4b143bd4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardRoutes.vue?vue&type=template&id=4b143bd4&scoped=true& */ "./resources/js/views/Dashboard/DashboardRoutes.vue?vue&type=template&id=4b143bd4&scoped=true&");
/* harmony import */ var _DashboardRoutes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardRoutes.vue?vue&type=script&lang=js& */ "./resources/js/views/Dashboard/DashboardRoutes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashboardRoutes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardRoutes_vue_vue_type_template_id_4b143bd4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboardRoutes_vue_vue_type_template_id_4b143bd4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4b143bd4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Dashboard/DashboardRoutes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Dashboard/DashboardRoutes.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/Dashboard/DashboardRoutes.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardRoutes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardRoutes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/DashboardRoutes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardRoutes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Dashboard/DashboardRoutes.vue?vue&type=template&id=4b143bd4&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/Dashboard/DashboardRoutes.vue?vue&type=template&id=4b143bd4&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardRoutes_vue_vue_type_template_id_4b143bd4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardRoutes.vue?vue&type=template&id=4b143bd4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/DashboardRoutes.vue?vue&type=template&id=4b143bd4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardRoutes_vue_vue_type_template_id_4b143bd4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardRoutes_vue_vue_type_template_id_4b143bd4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Dashboard/File.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/Dashboard/File.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _File_vue_vue_type_template_id_0ca5db96_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./File.vue?vue&type=template&id=0ca5db96&scoped=true& */ "./resources/js/views/Dashboard/File.vue?vue&type=template&id=0ca5db96&scoped=true&");
/* harmony import */ var _File_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./File.vue?vue&type=script&lang=js& */ "./resources/js/views/Dashboard/File.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _File_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _File_vue_vue_type_template_id_0ca5db96_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _File_vue_vue_type_template_id_0ca5db96_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0ca5db96",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Dashboard/File.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Dashboard/File.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Dashboard/File.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./File.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/File.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Dashboard/File.vue?vue&type=template&id=0ca5db96&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/Dashboard/File.vue?vue&type=template&id=0ca5db96&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_template_id_0ca5db96_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./File.vue?vue&type=template&id=0ca5db96&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/File.vue?vue&type=template&id=0ca5db96&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_template_id_0ca5db96_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_template_id_0ca5db96_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Dashboard/MyFiles.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/Dashboard/MyFiles.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyFiles_vue_vue_type_template_id_7fcd3481_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyFiles.vue?vue&type=template&id=7fcd3481&scoped=true& */ "./resources/js/views/Dashboard/MyFiles.vue?vue&type=template&id=7fcd3481&scoped=true&");
/* harmony import */ var _MyFiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyFiles.vue?vue&type=script&lang=js& */ "./resources/js/views/Dashboard/MyFiles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MyFiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyFiles_vue_vue_type_template_id_7fcd3481_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MyFiles_vue_vue_type_template_id_7fcd3481_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7fcd3481",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Dashboard/MyFiles.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Dashboard/MyFiles.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Dashboard/MyFiles.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyFiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MyFiles.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/MyFiles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyFiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Dashboard/MyFiles.vue?vue&type=template&id=7fcd3481&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/Dashboard/MyFiles.vue?vue&type=template&id=7fcd3481&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyFiles_vue_vue_type_template_id_7fcd3481_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MyFiles.vue?vue&type=template&id=7fcd3481&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/MyFiles.vue?vue&type=template&id=7fcd3481&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyFiles_vue_vue_type_template_id_7fcd3481_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyFiles_vue_vue_type_template_id_7fcd3481_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);