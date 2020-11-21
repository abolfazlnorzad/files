(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk/home"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/File.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/File.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment_jalaali__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment-jalaali */ "./node_modules/moment-jalaali/index.js");
/* harmony import */ var moment_jalaali__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_jalaali__WEBPACK_IMPORTED_MODULE_0__);
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
  name: "File",
  props: {
    file: Object
  },
  data: function data() {
    return {
      moment: moment_jalaali__WEBPACK_IMPORTED_MODULE_0___default.a
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/svg/MainSvg.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/svg/MainSvg.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MainSvg"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Home.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_svg_MainSvg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/svg/MainSvg */ "./resources/js/components/svg/MainSvg.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var moment_jalaali__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment-jalaali */ "./node_modules/moment-jalaali/index.js");
/* harmony import */ var moment_jalaali__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_jalaali__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_File_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/File.vue */ "./resources/js/components/File.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  name: "Home",
  metaInfo: {
    title: 'وب آموز'
  },
  data: function data() {
    return {
      moment: moment_jalaali__WEBPACK_IMPORTED_MODULE_2___default.a
    };
  },
  components: {
    MainSvg: _components_svg_MainSvg__WEBPACK_IMPORTED_MODULE_0__["default"],
    File: _components_File_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])('file', ['files'])),
  created: function created() {
    this.fetchFiles(this.$route.query.page);
  },
  methods: {
    fetchFiles: function fetchFiles() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var queries = this.$route.query;
      queries.page = page;
      this.$store.dispatch('file/getPublicFiles', queries);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.vh-80[data-v-63cd6604] {\n    height: 80vh;\n}\n.mt-r5[data-v-63cd6604] {\n    margin-top: 5rem;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/File.vue?vue&type=template&id=77c84e67&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/File.vue?vue&type=template&id=77c84e67&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card card-stats" }, [
    _c(
      "div",
      { staticClass: "card-header card-header-success card-header-icon" },
      [
        _vm._m(0),
        _vm._v(" "),
        _vm.file.name
          ? _c("p", { staticClass: "card-category" }, [
              _vm._v(_vm._s(_vm.file.price_toman))
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("p", { staticClass: "card-category" }, [
          _vm._v(_vm._s(_vm.file.membership_name))
        ]),
        _vm._v(" "),
        _c("h3", { staticClass: "card-title mt-2" }, [
          _vm._v(_vm._s(_vm.file.name))
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "card-category mt-4" }, [_vm._v("دسته بندی ها")])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "card-footer" }, [
      _c(
        "div",
        { staticClass: "stats w-100 d-flex justify-content-between" },
        [
          _c("p", { staticClass: "my-auto" }, [
            _c("i", { staticClass: "fa fa-clock" }),
            _vm._v(
              " " +
                _vm._s(_vm.moment(_vm.file.created_at).format("jYYYY/jM")) +
                " "
            )
          ]),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "btn btn-info",
              attrs: {
                to: {
                  name: "file-show",
                  params: { url: "show", slug: _vm.file.slug }
                }
              }
            },
            [_vm._v("خرید")]
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-icon" }, [
      _c("i", { staticClass: "fa fa-file" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/svg/MainSvg.vue?vue&type=template&id=7d2447b6&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/svg/MainSvg.vue?vue&type=template&id=7d2447b6&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "svg",
    {
      attrs: {
        id: "f7e01b52-fe13-4534-b7fc-d479bcd2a427",
        "data-name": "Layer 1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "100%",
        height: "100%",
        viewBox: "0 0 982.89 803.03"
      }
    },
    [
      _c("title", [_vm._v("ازمون")]),
      _c("path", {
        attrs: {
          d:
            "M1067.54,514c0,.61,0,1.22,0,1.82q-.16,15.78-1.87,31.48a1.11,1.11,0,0,1,0,.19c-.09.87-.19,1.73-.29,2.6-.17,1.47-.35,2.93-.55,4.4a316.48,316.48,0,0,1-11.53,52.79h0a284.68,284.68,0,0,1-30.1,66.28q-5.92,9.5-12.61,18.39h0c-2.38,3.14-4.81,6.21-7.32,9.23q-2.64,3.17-5.38,6.24l-1.14,1.26a296.69,296.69,0,0,1-31,29.46c-18,14.92-37.38,27.9-57.07,39.94-1.12.69-2.25,1.37-3.38,2a1.65,1.65,0,0,1-.25.15c-26.76,16.18-54.51,30.78-83.1,42.47-31.3,12.83-63.62,22.16-96.78,26.24-46.22,5.68-93,1.06-138.94-6.88a902.93,902.93,0,0,1-113-27l-6.1-1.91q-4.74-1.51-9.47-3.08-28.57-9.45-56.5-21a742.68,742.68,0,0,1-133.33-71.59q-8-5.38-15.77-11-10.86-7.82-21.46-16.1L226.24,687a448.26,448.26,0,0,1-51.82-47.59c-21.52-23.42-39.91-49.84-52-80q-2.86-7.11-5.24-14.49l-.15-.49c-.8-2.5-1.54-5-2.22-7.6q-1.5-5.58-2.63-11.3c-.16-.73-.3-1.46-.43-2.2a189.21,189.21,0,0,1-3.15-38.93,180,180,0,0,1,4-34h0a153.38,153.38,0,0,1,11.33-33.57l0,0a121,121,0,0,1,17.33-26.73h0a102.23,102.23,0,0,1,16.33-15.26c10.85-8.08,22.88-13.71,35.35-18.16h0c5.86-2.1,11.8-3.94,17.77-5.65,4.23-1.22,8.48-2.38,12.71-3.52l12.48-3.37c8-2.18,16-4.42,23.88-6.84,21.48-6.56,42.53-14.5,62-26.34,3.08-1.87,6.22-3.92,9.36-6.12,4-2.78,7.94-5.8,11.84-9.06h0c3.94-3.3,7.8-6.83,11.48-10.57.57-.58,1.13-1.16,1.69-1.75,3-3.16,5.91-6.47,8.61-9.91,1.32-1.68,2.6-3.39,3.82-5.13,1.69-2.41,3.29-4.86,4.77-7.38h0c7.42-12.6,12-26.5,11.46-41.15a63.3,63.3,0,0,0-.65-7.21c-1.3-8.83-2.55-17.45-3.47-25.88-3.86-34.87-2.23-66.49,23.94-96.2,32.54-36.93,83.61-44.46,130.1-41.51,134.41,8.5,256.77,85.24,364.3,176.6q13.95,11.84,27.56,24,3.43,3.06,6.87,6.16c17,15.31,33.74,31.19,49.33,48.2,1.26,1.38,2.52,2.76,3.76,4.15.76.86,1.53,1.71,2.28,2.58q7.29,8.25,14.15,16.9a320.16,320.16,0,0,1,32.32,49,278.17,278.17,0,0,1,28.38,86.67h0a308.82,308.82,0,0,1,3.43,33.17c.17,3.27.28,6.55.34,9.82,0,1.05,0,2.09,0,3.14C1067.55,511,1067.55,512.48,1067.54,514Z",
          transform: "translate(-108.55 -48.49)",
          fill: "#38d39f",
          opacity: "0.1"
        }
      }),
      _c("polygon", {
        attrs: {
          points:
            "393.98 448.74 377.98 733.53 393.98 733.74 406.98 444.74 393.98 448.74",
          fill: "#3f3d56"
        }
      }),
      _c("rect", {
        attrs: {
          x: "136.98",
          y: "593.03",
          width: "198",
          height: "43",
          fill: "#38d39f"
        }
      }),
      _c("path", {
        attrs: {
          d: "M456.53,679.51v27H252q-10.86-7.82-21.46-16.1v-10.9Z",
          transform: "translate(-108.55 -48.49)",
          fill: "#3f3d56"
        }
      }),
      _c("path", {
        attrs: {
          d:
            "M497.37,618.06c-.56,2.59-1.29,5.15-2.06,7.7-2.27,7.37-5,14.64-5.53,22.3-.71,10.12,2,21.89-5,29.24-1.8,1.9-4.15,3.32-5.76,5.35a9.37,9.37,0,0,0-.68,1c-1.44,2.38-1.61,5.28-1.63,8A140,140,0,0,0,477.84,709c2.37,19.8,7.05,39.64.9,58.33a89.92,89.92,0,0,1-3.89,9.51c-3,6.6-6.27,13.11-7.25,20.26-.72,5.3-.5,10.76-.54,16.15q-4.74-1.51-9.47-3.08-28.57-9.45-56.5-21c.05-.27.1-.55.14-.82,1.43-8.9-.53-18-2.91-26.68-5-18.39-12.08-36.6-16.27-55.12a139.48,139.48,0,0,1-3.31-22c-.12-1.66-.19-3.33-.2-5-.05-2.18,0-4.36.09-6.56.21-4.39.4-9.6-3.11-12.27-1.93-1.45-4.48-1.7-6.73-2.58-4.34-1.69-7.31-5.61-10.75-8.75a14.09,14.09,0,0,0-12.59-3.7c-22.48,5.15-39,24.22-59.92,33.86-.81.38-1.62.74-2.44,1.08a35.55,35.55,0,0,0-7.67,3.92,8.74,8.74,0,0,0-3.44,4.85c-.53,2.12-.07,4.34.19,6.52a33.29,33.29,0,0,1-.45,10.63,32.45,32.45,0,0,1-1.07,4c-.8,2.37-1.87,4.69-2.89,7q-8-5.38-15.77-11-10.86-7.82-21.46-16.1L226.24,687a448.26,448.26,0,0,1-51.82-47.59c2.13-6,5.21-11.58,6.69-17.73.84-3.53,1.15-7.2,2.31-10.63a38.22,38.22,0,0,1,5.52-9.9,134,134,0,0,1,30.74-30.76c12.39-8.88,26.7-16,37.85-26.08A59.73,59.73,0,0,0,269.1,530.6c.19-.31.37-.64.53-1a20.75,20.75,0,0,0,1.79-5.72c.8-4.48.68-9.4,1.08-13.7a146.13,146.13,0,0,0,41.13,1.24c15.95-1.79,31.55-6.22,47.5-7.94,1.2-.14,2.41-.25,3.62-.35,5.11-.41,10.23-.5,15.36-.44,4.29,0,8.58.19,12.87.33l47.23,1.6c5.23.18,10.57.38,15.44,2.29,5.78,2.27,10.41,6.79,14.12,11.76.47.64.94,1.28,1.38,1.94A61,61,0,0,1,478.43,535c.19.52.37,1,.54,1.57.45,1.39.84,2.79,1.19,4.21.27,1.11.51,2.22.73,3.34,1.1,5.54,1.75,11.2,3.49,16.55.12.39.25.78.39,1.16,2.09,5.86,5.56,11.11,8.18,16.74a62.17,62.17,0,0,1,4.3,12.73A62.91,62.91,0,0,1,497.37,618.06Z",
          transform: "translate(-108.55 -48.49)",
          fill: "#35323e"
        }
      }),
      _c("path", {
        attrs: {
          d:
            "M353.81,260.19c-4.22-3.36-10.34-.9-15.28,1.27a98.09,98.09,0,0,1-12.76,4.61,5.39,5.39,0,0,1-2.8.29c-2-.48-2.84-2.85-4.33-4.29-2.59-2.49-6.83-1.9-10.17-.55s-6.64,3.3-10.22,3c-3.82-.3-7.14-3.12-11-3.21-6.8-.16-12.51,8.22-18.94,6-3.92-1.35-7-6.45-10.86-5-3,1.14-3.27,5.29-5.08,8-2.13,3.16-6.28,4.05-9.83,5.45-11.19,4.42-18.6,16.89-17.14,28.83.81,6.59,4,12.63,6.11,18.92,6.26,18.29,4.11,38.92,12,56.56,1-.94,1.56-1.29,2.53-2.22a23.14,23.14,0,0,0-1.35,16.6c.83,2.77,2.18,5.35,3.2,8.06a72.24,72.24,0,0,1,2.56,9.3l8.7,38.38c3.4,15,6.81,30,7.4,45.36a132.38,132.38,0,0,1-2.28,29.8c15.76-2.61,30.18-9.6,46.15-9.51,5.86,0,11.67,1,17.48,1.8a359.84,359.84,0,0,0,51.13,3.47,20.3,20.3,0,0,0,7.84-1.1c2.2-.94,4-2.61,6.08-3.82,4.07-2.4,9-3,13.69-3,21.39-.39,42,7.44,63.25,10.2,8.39-17.61,8.89-38.71,2.45-57.12-1.91-5.47-4.48-10.8-5.24-16.55a83.72,83.72,0,0,1-.24-10.63,77.11,77.11,0,0,0-4.83-26.58c-1.24-3.33-2.73-6.72-2.6-10.27s1.88-6.86,3.6-10c3.49-6.4,7-12.86,11.93-18.26,5.05-5.58,11.37-9.83,17.62-14l15.43-10.36c-2.11-13.33-4.83-27.37-10.48-39.63S483.43,286.46,472,279.29a84.36,84.36,0,0,0-12.06-6c-5.84-2.46-11.92-4.63-18.25-5-7.2-.41-14.29,1.52-21.4,2.72C397.91,274.78,371.57,274.32,353.81,260.19Z",
          transform: "translate(-108.55 -48.49)",
          fill: "#38d39f"
        }
      }),
      _c("path", {
        attrs: {
          d:
            "M522.53,491.51l-7.34,9.27-13.84,17.47-16,20.19-4.47,5.64h-8.67l-214.69.25-134.45.15h-6c-.8-2.5-1.54-5-2.22-7.6q-1.5-5.58-2.63-11.3c-.16-.73-.3-1.46-.43-2.2l48.78-31.89,18.34-.1h0l56.1-.32h0l31.33-.18,5.72,0,3.59,0h0l20.88-.11h0l159.14-.91h0l8.14-.05h0l3.53,0,9.35-.05,34.79-.2,6.68-2.54.49.52Z",
          transform: "translate(-108.55 -48.49)",
          fill: "#3f3d56"
        }
      }),
      _c("path", {
        attrs: {
          d:
            "M519.53,486.51l-.83,1-5.46,6.43L502,507.21,478.43,535l-208.8-5.33-157.45-4c-.16-.73-.3-1.46-.43-2.2a189.21,189.21,0,0,1-3.15-38.93l17.46-8.94,4-2.06,31.13-16,27.32-14,71.26,9.26,15.78,2.05,7.14.92,10.45,1.36.88.12L457.89,478.5,476,480.85l10.63,1.38,32.76,4.26Z",
          transform: "translate(-108.55 -48.49)",
          fill: "#504f60"
        }
      }),
      _c("path", {
        attrs: {
          d:
            "M485.53,534.51l-.17,3.93-1,22.19-5.38,122L477.84,709l-3,67.84-1.69,38.32-6.1-1.91q-4.74-1.51-9.47-3.08l14.63-266,.31-5.58,6.44-2Z",
          transform: "translate(-108.55 -48.49)",
          fill: "#3f3d56"
        }
      }),
      _c("path", {
        attrs: {
          d:
            "M123.53,534.22l-.45,10.27-.66,15q-2.86-7.11-5.24-14.49l-.15-.49c-.8-2.5-1.54-5-2.22-7.6Z",
          transform: "translate(-108.55 -48.49)",
          fill: "#3f3d56"
        }
      }),
      _c("ellipse", {
        attrs: {
          cx: "276.48",
          cy: "272.53",
          rx: "46",
          ry: "62",
          fill: "#a1616a"
        }
      }),
      _c("ellipse", {
        attrs: {
          cx: "276.48",
          cy: "272.53",
          rx: "46",
          ry: "62",
          opacity: "0.1"
        }
      }),
      _c("circle", {
        attrs: { cx: "282.98", cy: "235.03", r: "64", fill: "#a1616a" }
      }),
      _c("path", {
        attrs: {
          d:
            "M392.8,184.88a81.94,81.94,0,0,0-11.61,1.77c-10.12,2.46-18.87,7.92-27.39,13.28-3.82,2.41-7.75,4.92-10.12,8.46-4.26,6.35-2.61,14.43-5,21.48-1.24,3.62-3.52,6.87-5.45,10.24-5.31,9.24-8.09,19.39-10.82,29.44-.56,2.08-.72,4.9,1.55,5.7a6.25,6.25,0,0,0,3.88-.44c7.17-2.37,16.28-3.05,21.6,1.76s4.87,13.34,11.2,17c7.25,4.23,18.57-.88,25.15,4.11,2.82,2.14,3.84,5.57,6.15,8.15,5.38,6,15.73,5.71,24.34,4.5,4.94-.7,11-1.17,14,2.3,1.44,1.64,1.85,3.89,3.52,5.37,3,2.68,8.49,1.32,11.42-1.43s4.33-6.47,6.77-9.56c4.75-6,13.1-9.27,18-15.2,4.1-5,5.34-11.26,6.46-17.3l4.17-22.39c1.69-9.08,3.23-19-1.88-27-1.82-2.88-4.43-5.36-6-8.34-1.05-2-1.64-4.11-2.86-6a24.91,24.91,0,0,0-5.13-5.18l-9.87-8.17a83,83,0,0,0-10.79-8C430,181.22,408.9,183.38,392.8,184.88Z",
          transform: "translate(-108.55 -48.49)",
          fill: "#464353"
        }
      }),
      _c("path", {
        attrs: {
          d:
            "M182,349.74c-2.37,2.52-4.56,5.24-7.1,7.6a86,86,0,0,1-7,5.6q-5.88,4.4-11.5,9.11a64.41,64.41,0,0,0-10.54,10.53c-5.34,7.17-7.87,16.09-12.87,23.5-4.42,6.57-10.65,11.76-15.14,18.28a28.28,28.28,0,0,0-4.32,9.07,42.14,42.14,0,0,0-.89,9.59c-.09,5.28-.17,10.62.91,15.79s3.45,10.25,7.51,13.64c3.77,3.15,8.64,4.6,13.41,5.8,2.46.61,5.12,1.18,7.46.21a12.3,12.3,0,0,0,4.34-3.66l12.17-14c8.14-9.4,16.6-19,27.77-24.5,3.5-1.71,7.19-3,10.7-4.66,14.88-7.17,25.4-21.85,29.48-37.85,1-3.91,1.64-7.9,2.29-11.89l1.76-10.94a3.49,3.49,0,0,0,0-1.67,3.6,3.6,0,0,0-1.28-1.52,212.12,212.12,0,0,1-23.74-22.4c-1.74-1.92-3.37-4.55-5.38-6.16-2.52-2-2.33-1.85-5.36,0A64.27,64.27,0,0,0,182,349.74Z",
          transform: "translate(-108.55 -48.49)",
          fill: "#a1616a"
        }
      }),
      _c("path", {
        attrs: {
          d:
            "M265.25,422.54a1.88,1.88,0,1,0-3.38,1.64l-1,.49,29.82,61.12,5.39-2.63L266.26,422Z",
          transform: "translate(-108.55 -48.49)",
          fill: "#3f3d56"
        }
      }),
      _c("path", {
        attrs: {
          d:
            "M182,349.74c-2.37,2.52-4.56,5.24-7.1,7.6a86,86,0,0,1-7,5.6q-5.88,4.4-11.5,9.11a64.41,64.41,0,0,0-10.54,10.53c-5.34,7.17-7.87,16.09-12.87,23.5-4.42,6.57-10.65,11.76-15.14,18.28a28.28,28.28,0,0,0-4.32,9.07,42.14,42.14,0,0,0-.89,9.59c-.09,5.28-.17,10.62.91,15.79s3.45,10.25,7.51,13.64c3.77,3.15,8.64,4.6,13.41,5.8,2.46.61,5.12,1.18,7.46.21a12.3,12.3,0,0,0,4.34-3.66l12.17-14c8.14-9.4,16.6-19,27.77-24.5,3.5-1.71,7.19-3,10.7-4.66,14.88-7.17,25.4-21.85,29.48-37.85,1-3.91,1.64-7.9,2.29-11.89l1.76-10.94a3.49,3.49,0,0,0,0-1.67,3.6,3.6,0,0,0-1.28-1.52,212.12,212.12,0,0,1-23.74-22.4c-1.74-1.92-3.37-4.55-5.38-6.16-2.52-2-2.33-1.85-5.36,0A64.27,64.27,0,0,0,182,349.74Z",
          transform: "translate(-108.55 -48.49)",
          opacity: "0.04"
        }
      }),
      _c("path", {
        attrs: {
          d:
            "M526.74,462.38c-.1,6.38-.35,12.95-3,18.77-1.14,2.52-2.91,5-5.56,5.83a12.94,12.94,0,0,1-4.89.18,176.67,176.67,0,0,0-58.49,4.64c5.1-10.2,2.17-22.43,3.58-33.75.39-3.09,1.1-6.13,1.37-9.23,1-11-3.71-21.68-5.87-32.54a72.8,72.8,0,0,1,0-28.48,19,19,0,0,1,2.45-6.85,16.08,16.08,0,0,1,5.62-4.89c8.1-4.61,17.65-5.14,26.75-4.53,6.13.41,18.42-.17,23.53,3.6,5.59,4.13,7.36,18,8.87,24.41a206.48,206.48,0,0,1,4.6,29.87C526.68,440.37,526.89,451.38,526.74,462.38Z",
          transform: "translate(-108.55 -48.49)",
          fill: "#a1616a"
        }
      }),
      _c("polygon", {
        attrs: {
          points:
            "59.98 436.03 95.98 460.03 257.98 454.03 150.98 436.03 59.98 436.03",
          fill: "#fff"
        }
      }),
      _c("path", {
        attrs: {
          d:
            "M216,293.83c-5.91,5.21-10.92,11.35-16.52,16.9-7.68,7.62-16.41,14.1-25.1,20.55a18.68,18.68,0,0,1,13,13.1c.38,1.47.57,3,1,4.44,1,3.41,3.2,6.35,5.56,9,10.14,11.43,24.33,19.89,30.31,34a3.14,3.14,0,0,0,1.2,1.7,2.63,2.63,0,0,0,1.55.18c5.41-.57,9.55-4.93,13-9.17,7.2-9,13.45-18.94,17-29.92s4.12-23.12.25-34c-1.93-5.42-4.91-10.4-7.87-15.33q-3.89-6.47-7.76-12.92c-1.35-2.27-3.07-6.88-5.72-8C230.18,281.9,219.67,290.16,216,293.83Z",
          transform: "translate(-108.55 -48.49)",
          fill: "#38d39f"
        }
      }),
      _c("path", {
        attrs: {
          d:
            "M510.54,358.46l8.51,20a61.83,61.83,0,0,0-55.9,7.75c-4.85,3.47-9.3,7.83-11.49,13.37a5.84,5.84,0,0,1-5.79-2.27,11.61,11.61,0,0,1-2.14-6.12c-.79-7.68,2.12-15.21,5-22.39,1.34-3.36,2.72-6.79,5.1-9.52s5.54-4.53,8.7-6.23a193.74,193.74,0,0,1,31.55-13.94c4.6-1.49,9.42-1.46,12,2.84C509.07,347.08,508.2,353,510.54,358.46Z",
          transform: "translate(-108.55 -48.49)",
          fill: "#38d39f"
        }
      }),
      _c("path", {
        attrs: {
          d:
            "M168.74,418.47c2.13,1.7,4,3.71,6.19,5.33a44.22,44.22,0,0,0,7.36,4.13l9.86,4.74a55.25,55.25,0,0,0,9.55,3.88c4.22,1.13,8.65,1.24,12.89,2.29,5.35,1.32,10.24,4.07,15.51,5.66s11.44,1.85,15.84-1.46c2.75-2.07,4.83-5.49,8.24-6,2.2-.29,4.32.77,6.28,1.8l25.66,13.49c3.46,1.82,7.12,3.84,8.93,7.31s.59,8.74-3.22,9.64a35.18,35.18,0,0,1-4,.23c-1.32.16-2.76.94-2.94,2.27a4.56,4.56,0,0,0,.63,2.35c1.15,2.64,1.49,5.8.15,8.36s-4.63,4.15-7.26,3c.45,3.87-3.76,6.58-7.51,7.61-9.46,2.59-19.49,1-29.16-.64-3.8-.64-7.66-1.3-11.12-3-1.66-.81-3.2-1.85-4.88-2.6-4.61-2.05-9.85-1.78-14.89-1.69-23.31.41-46.42-3.91-69.34-8.21-4.25-.8-8.62-1.65-12.25-4-7-4.56-9.6-13.92-8.45-22.2s5.35-15.78,9.48-23.06l5.35-9.43a12.14,12.14,0,0,1,2.88-3.8C146.39,408.46,162,413.05,168.74,418.47Z",
          transform: "translate(-108.55 -48.49)",
          fill: "#a1616a"
        }
      }),
      _c("path", {
        attrs: {
          d:
            "M168.74,418.47c2.13,1.7,4,3.71,6.19,5.33a44.22,44.22,0,0,0,7.36,4.13l9.86,4.74a55.25,55.25,0,0,0,9.55,3.88c4.22,1.13,8.65,1.24,12.89,2.29,5.35,1.32,10.24,4.07,15.51,5.66s11.44,1.85,15.84-1.46c2.75-2.07,4.83-5.49,8.24-6,2.2-.29,4.32.77,6.28,1.8l25.66,13.49c3.46,1.82,7.12,3.84,8.93,7.31s.59,8.74-3.22,9.64a35.18,35.18,0,0,1-4,.23c-1.32.16-2.76.94-2.94,2.27a4.56,4.56,0,0,0,.63,2.35c1.15,2.64,1.49,5.8.15,8.36s-4.63,4.15-7.26,3c.45,3.87-3.76,6.58-7.51,7.61-9.46,2.59-19.49,1-29.16-.64-3.8-.64-7.66-1.3-11.12-3-1.66-.81-3.2-1.85-4.88-2.6-4.61-2.05-9.85-1.78-14.89-1.69-23.31.41-46.42-3.91-69.34-8.21-4.25-.8-8.62-1.65-12.25-4-7-4.56-9.6-13.92-8.45-22.2s5.35-15.78,9.48-23.06l5.35-9.43a12.14,12.14,0,0,1,2.88-3.8C146.39,408.46,162,413.05,168.74,418.47Z",
          transform: "translate(-108.55 -48.49)",
          opacity: "0.04"
        }
      }),
      _c("path", {
        attrs: {
          d:
            "M474,435.75c-5.21,2.46-11.19,2.7-16.63,4.59s-10.06,5.29-15.05,8.06c-13,7.26-28,10-42.73,12.61-8.93,1.6-18,3.2-27,2.82-12.18-.52-23.88-4.58-35.68-7.64s-24.39-5.12-36.08-1.68a40.61,40.61,0,0,0-26.5,25.43c-2.45,7.19-2.79,14.94-2.32,22.52,2.46,1.81,5.9-.7,7.24-3.45s2.07-6.12,4.67-7.72c4.51,1.53,5.61,7.54,9.33,10.51,2.32,1.86,5.42,2.35,8.37,2.77l15.2,2.16c3.66.52,7.91.87,10.56-1.71,1.29-1.25,2-3,3.18-4.34,2.42-2.68,6.46-3.14,10.06-2.78,11.24,1.12,21.78,8.41,32.94,6.68,3.84-.59,7.41-2.23,11.07-3.52,21.69-7.66,45.79-3,68.36-7.39,8.61-1.67,16.9-4.63,25.09-7.75,4.45-1.69,8.95-3.46,12.75-6.32a26.84,26.84,0,0,0,10.36-23.81,27.22,27.22,0,0,0-9.61-17.64c-1.76-1.5-4.07-4.37-6.18-5.31C481.37,431.07,477.42,434.14,474,435.75Z",
          transform: "translate(-108.55 -48.49)",
          fill: "#a1616a"
        }
      }),
      _c("g", { attrs: { opacity: "0.1" } }, [
        _c("path", {
          attrs: {
            d:
              "M444.78,308c-1.67-1.48-2.08-3.73-3.52-5.37-3-3.47-9.06-3-14-2.3-8.61,1.21-19,1.49-24.34-4.5-2.31-2.58-3.33-6-6.15-8.15-6.58-5-17.9.12-25.15-4.11-6.33-3.69-5.92-12.25-11.2-17s-14.43-4.13-21.6-1.76a6.25,6.25,0,0,1-3.88.44c-2.27-.8-2.11-3.62-1.55-5.7,2.73-10.05,5.51-20.2,10.82-29.44,1.93-3.37,4.21-6.62,5.45-10.24,2.17-6.34,1.06-13.51,3.91-19.51-3.06,2-6,4.18-7.89,7-4.26,6.35-2.61,14.43-5,21.48-1.24,3.62-3.52,6.87-5.45,10.24-5.31,9.24-8.09,19.39-10.82,29.44-.56,2.08-.72,4.9,1.55,5.7a6.25,6.25,0,0,0,3.88-.44c7.17-2.37,16.28-3.05,21.6,1.76s4.87,13.34,11.2,17c7.25,4.23,18.57-.88,25.15,4.11,2.82,2.14,3.84,5.57,6.15,8.15,5.38,6,15.73,5.71,24.34,4.5,4.94-.7,11-1.17,14,2.3,1.44,1.64,1.85,3.89,3.52,5.37,3,2.68,8.49,1.32,11.42-1.43A30.32,30.32,0,0,0,452,309C449.4,309.79,446.63,309.67,444.78,308Z",
            transform: "translate(-108.55 -48.49)"
          }
        }),
        _c("path", {
          attrs: {
            d:
              "M463,297a28.41,28.41,0,0,0-1.79,2.59c3.84-2.74,7.91-5.3,10.78-8.79a21.22,21.22,0,0,0,2-2.88C470,290.78,465.84,293.41,463,297Z",
            transform: "translate(-108.55 -48.49)"
          }
        })
      ]),
      _c("polygon", {
        attrs: {
          points:
            "556.48 446.53 559.48 733.53 573.48 731.53 570.48 446.53 556.48 446.53",
          fill: "#3f3d56"
        }
      }),
      _c("polygon", {
        attrs: {
          points:
            "640.48 498.53 643.48 785.53 657.48 783.53 654.48 498.53 640.48 498.53",
          fill: "#3f3d56"
        }
      }),
      _c("path", {
        attrs: {
          d:
            "M1010.56,692h0l-.06-5.51,0-3.28-.53-50.48-.83-78.92L1009,547H995l.07,6.56.44,42.27.19,18.3h0l.16,14.82.26,25.62.16,15.11h0l0,1.6.21,19.86.18,17.51,1.14-1.26q2.75-3.07,5.38-6.24Z",
          transform: "translate(-108.55 -48.49)",
          fill: "#3f3d56"
        }
      }),
      _c("polygon", {
        attrs: {
          points:
            "624.98 545.03 616.98 556.99 624.98 611.48 692.98 630.09 802.98 630.09 868.98 634.08 900.42 612.56 894.98 575.6 870.98 545.03 624.98 545.03",
          fill: "#38d39f"
        }
      }),
      _c("path", {
        attrs: {
          d:
            "M725.53,605.48l-4,33.22s-21,65.13,148,61.14,140-17.28,140-17.28l-1-38.54s5.89,18.24-80,15.77-166-10.45-166-10.45S732.53,654.65,725.53,605.48Z",
          transform: "translate(-108.55 -48.49)",
          fill: "#3f3d56"
        }
      }),
      _c("path", {
        attrs: {
          d:
            "M866.33,307.72c-9.64,4.39-16.94,12.9-21.83,22.31s-7.64,19.74-10.35,30c-2.86,10.82-5.73,21.67-7.21,32.76-2.64,19.72-.66,40.45,8.4,58.16s25.8,32,45.4,35.41c7.57,1.33,15.35,1.06,23,.27a187,187,0,0,0,40.61-8.95c13.75-4.65,28.06-11.81,34.18-25,3.55-7.65,3.85-16.37,3.68-24.79a263.72,263.72,0,0,0-10.31-67.79c-1.85-6.4-4-12.85-7.92-18.24s-9.28-9.34-14.75-13C925.84,313.11,895.1,294.64,866.33,307.72Z",
          transform: "translate(-108.55 -48.49)",
          fill: "#fbbebe"
        }
      }),
      _c("path", {
        attrs: {
          d:
            "M866.33,307.72c-9.64,4.39-16.94,12.9-21.83,22.31s-7.64,19.74-10.35,30c-2.86,10.82-5.73,21.67-7.21,32.76-2.64,19.72-.66,40.45,8.4,58.16s25.8,32,45.4,35.41c7.57,1.33,15.35,1.06,23,.27a187,187,0,0,0,40.61-8.95c13.75-4.65,28.06-11.81,34.18-25,3.55-7.65,3.85-16.37,3.68-24.79a263.72,263.72,0,0,0-10.31-67.79c-1.85-6.4-4-12.85-7.92-18.24s-9.28-9.34-14.75-13C925.84,313.11,895.1,294.64,866.33,307.72Z",
          transform: "translate(-108.55 -48.49)",
          opacity: "0.05"
        }
      }),
      _c("path", {
        attrs: {
          d:
            "M855.5,433.59a45.39,45.39,0,0,0,10,10c9.52,6.58,21.74,7.47,33.3,7.83,9.28.28,19.92-.25,25.74-7.49,2.62-3.26,3.8-7.42,4.86-11.47a508.79,508.79,0,0,0,13.9-75.77l26.48.09c11.46,49.07,10.52,100.08,9.52,150.47l-1.45,73.48-17.06-1.81c-40.51-4.29-81.08-8.58-121.81-9.32a696.78,696.78,0,0,0-71.52,2.36L804.61,461.5c4.82-14.36,9.69-28.91,10.82-44,1.63-21.89-4.51-45,4-65.25.68-1.63,1.54-3.32,3.09-4.17s3.51-.64,5.29-.41c3.36.45,13.63,0,16.07,2.15,3.6,3.12,1.22,3.59-.05,8.62-2.27,9-4.42,17.33-4.39,26.71C839.47,402.18,844.75,420.16,855.5,433.59Z",
          transform: "translate(-108.55 -48.49)",
          fill: "#38d39f"
        }
      }),
      _c("path", {
        attrs: {
          d:
            "M1010.56,692h0q6.69-8.88,12.61-18.39c-2-4.28-4.2-8.46-5.95-12.83-2.68-6.7-4.22-13.8-5.74-20.85q-.78-3.6-1.55-7.2c-5.6-26.11-10.86-52.59-11.95-79.06q-.15-3.3-.19-6.6c0-.32,0-.63,0-1,0-2.41,0-4.82,0-7.22.12-6,.5-12.05,1.19-18.07.13-1.18.28-2.36.44-3.54,0-.26.06-.51.1-.77l68-2.48h0l5.72-.21c3.93-.14,8.09-.36,11.33-2.59,5.45-3.74,6.09-11.41,6-18a267.16,267.16,0,0,0-5.64-49.55c-2.58-12.26-6.26-24.79-14.52-34.21-6.78-7.74-16.6-13.37-20.13-23-1.31-3.58-1.64-7.51-3.34-10.93s-4.51-5.93-7.16-8.57a119.33,119.33,0,0,1-22.9-31.72c-4.05-8.16-8.44-17.16-13.73-22.8-.26-.29-.52-.56-.79-.82-4.5-4.45-9.65-6.4-15.75-3.37a20.17,20.17,0,0,0-3.12,1.94h0a38,38,0,0,0-5.93,5.64,135,135,0,0,0-16.13,23,127.83,127.83,0,0,0-8.24,18,124.1,124.1,0,0,0-4.45,15c-.86,3.77-1.54,7.58-2.08,11.4-2,14.36-2,29-1.72,43.54.3,13.36.89,26.75,2.1,40.06q.45,4.83,1,9.65,1.1,9.53,2.72,19c.43,2.41.87,4.82,1.36,7.22.12.64.25,1.28.38,1.91l.06.27a162.47,162.47,0,0,1,3.07,16.91q.12,1.07.18,2.13a82.33,82.33,0,0,1-.08,9.81c-.23,3.86-.59,7.71-.77,11.57,0,.68,0,1.35-.07,2-.05,1.95,0,3.9,0,5.85a92.72,92.72,0,0,0,1.66,13.89,89.85,89.85,0,0,0,8.65,24.44c.38.72.77,1.43,1.16,2.13,5.07,9.06,11.47,17.37,16.16,26.64a115,115,0,0,1,9,26.21q1,4.49,1.9,9c.93,4.8,1.76,9.64,2.61,14.48.08.48.17,1,.26,1.44,1.13,6.42,2.32,12.81,3.85,19.08.89,3.65,1.89,7.25,3.06,10.79Z",
          transform: "translate(-108.55 -48.49)",
          fill: "#464353"
        }
      }),
      _c("path", {
        attrs: {
          d:
            "M997.2,613.18c0,.9-.06,1.8-.1,2.71A128.18,128.18,0,0,1,995.89,629a85.29,85.29,0,0,1-4.33,17.39A58.64,58.64,0,0,1,986.4,657a48.92,48.92,0,0,1-6.42,8.27c-6,6.24-14.64,8.23-23,10.86a56.62,56.62,0,0,0-11.09,4.53c-.63.35-1.25.73-1.85,1.13l-10.46,6.93c-3.26,2.15-6.59,4.38-8.83,7.57a16.3,16.3,0,0,0-1,1.69,38.32,38.32,0,0,0-3.08,9.24c-5.44,22.66-10.89,45.34-14.62,68.34-.25,1.52-.49,3.05-.75,4.58l-.09.48a2.49,2.49,0,0,0-.16-.33c-26.76,16.18-54.51,30.78-83.1,42.47l-6.21-52a62.9,62.9,0,0,1-.64-12.78c.59-6.73,3.33-13.11,4.07-19.82a33.77,33.77,0,0,0-3.57-19.07c-1.18-2.28-2.66-4.52-2.93-7.07s1.2-4.88,3.76-5.14c2-2.22,2.16-5.25,1.57-8.25a24,24,0,0,0-1.4-4.57c-1.7-4.18-3.85-8.73-2.39-13a4.86,4.86,0,0,0,.5-2.5.41.41,0,0,0,0-.16c-.34-1.12-1.67-1.61-2.36-2.56-1.3-1.77,0-4.18.8-6.22a23.73,23.73,0,0,0,1.34-6.81c.11-1.29.19-2.59.33-3.87a39,39,0,0,1,.93-5.14,40.57,40.57,0,0,1,16.43-23.52c3.89-2.62,8.22-4.53,12.19-7a111.66,111.66,0,0,0,11.62-9q13.21-11,27.47-20.74a347,347,0,0,1,31.72-19.26q3.5-1.89,7-3.68,3.81-2,7.67-3.79c8.24-3.93,17.59-2.46,26.7.16,3.82,1.09,7.59,2.39,11.23,3.57a52,52,0,0,1,10.2,4.58c8.07,4.74,14.74,11.74,17.51,20.58a1.09,1.09,0,0,1,0,.17C997.25,601.41,997.36,607.35,997.2,613.18Z",
          transform: "translate(-108.55 -48.49)",
          fill: "#f86d70"
        }
      }),
      _c("path", {
        attrs: {
          d:
            "M997.2,613.18c0,.9-.06,1.8-.1,2.71A128.18,128.18,0,0,1,995.89,629a85.29,85.29,0,0,1-4.33,17.39A58.64,58.64,0,0,1,986.4,657a48.92,48.92,0,0,1-6.42,8.27c-6,6.24-14.64,8.23-23,10.86a56.62,56.62,0,0,0-11.09,4.53c-.63.35-1.25.73-1.85,1.13l-10.46,6.93c-3.26,2.15-6.59,4.38-8.83,7.57a16.3,16.3,0,0,0-1,1.69,38.32,38.32,0,0,0-3.08,9.24c-5.44,22.66-10.89,45.34-14.62,68.34-.25,1.52-.49,3.05-.75,4.58l-.09.48a2.49,2.49,0,0,0-.16-.33c-26.76,16.18-54.51,30.78-83.1,42.47l-6.21-52a62.9,62.9,0,0,1-.64-12.78c.59-6.73,3.33-13.11,4.07-19.82a33.77,33.77,0,0,0-3.57-19.07c-1.18-2.28-2.66-4.52-2.93-7.07s1.2-4.88,3.76-5.14c2-2.22,2.16-5.25,1.57-8.25a24,24,0,0,0-1.4-4.57c-1.7-4.18-3.85-8.73-2.39-13a4.86,4.86,0,0,0,.5-2.5.41.41,0,0,0,0-.16c-.34-1.12-1.67-1.61-2.36-2.56-1.3-1.77,0-4.18.8-6.22a23.73,23.73,0,0,0,1.34-6.81c.11-1.29.19-2.59.33-3.87a39,39,0,0,1,.93-5.14,40.57,40.57,0,0,1,16.43-23.52c3.89-2.62,8.22-4.53,12.19-7a111.66,111.66,0,0,0,11.62-9q13.21-11,27.47-20.74a347,347,0,0,1,31.72-19.26q3.5-1.89,7-3.68,3.81-2,7.67-3.79c8.24-3.93,17.59-2.46,26.7.16,3.82,1.09,7.59,2.39,11.23,3.57a52,52,0,0,1,10.2,4.58c8.07,4.74,14.74,11.74,17.51,20.58a1.09,1.09,0,0,1,0,.17C997.25,601.41,997.36,607.35,997.2,613.18Z",
          transform: "translate(-108.55 -48.49)",
          opacity: "0.1"
        }
      }),
      _c("path", {
        attrs: {
          d:
            "M902.25,447.54a1.88,1.88,0,1,0-3.38,1.64l-1,.49,29.82,61.12,5.39-2.63L903.26,447Z",
          transform: "translate(-108.55 -48.49)",
          fill: "#3f3d56"
        }
      }),
      _c("circle", {
        attrs: { cx: "830.98", cy: "271.03", r: "64", fill: "#fbbebe" }
      }),
      _c("path", {
        attrs: {
          d:
            "M1024,279.9a85,85,0,0,0-2.26-15.09c-3.76-16.17-10.63-32.09-22.46-43.7a87.56,87.56,0,0,0-2.61-8.39,1.59,1.59,0,0,0-.07-.2,93.9,93.9,0,0,0-15.1-26.77c-3.75-4.66-8.61-9.26-14.59-9.44-1.68-.06-3.46.23-5-.54a9,9,0,0,1-2.79-2.86,26.19,26.19,0,0,0-25.36-9.49l-.62.13c-.35.07-.7.15-1,.24s-.84.24-1.26.37q.69,1.14,1.35,2.31,1.78,3.17,3.3,6.48,1.26,2.76,2.33,5.61c-10.24,1.17-18.58,8.44-26.2,15.36L893.72,210.2a.76.76,0,0,0-.09.09l-.52.5c-.13.13-.26.26-.38.4a.86.86,0,0,0-.13.14c-.15.16-.29.33-.43.5a7.54,7.54,0,0,0-.67,1,3.67,3.67,0,0,0-.26.47,1,1,0,0,0-.07.15,3.69,3.69,0,0,0-.17.42.14.14,0,0,0,0,.06,2.33,2.33,0,0,0-.07.25,3,3,0,0,0,.17,2.12l11.83.13,1.39,0c.06,1.58.11,3.17.17,4.75a67.39,67.39,0,0,0-5.4,4.5,58.64,58.64,0,0,0-5.27,5.56c-10.67,12.89-16.24,29.54-16.8,46.3,0,.52,0,1,0,1.54,0,1.53,0,3.06,0,4.58,0,1,.09,2,.17,3a7.49,7.49,0,0,0,1,3.71,3.44,3.44,0,0,0,.28.36,6.9,6.9,0,0,0,2.12,1.56l.86.42h0c.43.21.84.41,1.24.64,3.77,2.13,6,6.24,9.43,8.88.2.15.4.3.6.43l.45.3.28.18.38.22a8.14,8.14,0,0,0,.77.41h0a0,0,0,0,1,0,0l.48.24.08,0h0c.4.18.8.35,1.21.5l.57.2.17.06c.16.05.33.11.5.15q.51.15,1,.27l1,.22c.39.07.79.14,1.19.19l.59.08.6.06q1.43.13,2.88.15h0a72,72,0,0,0,9.07-.63l25.52-3c5.79-.67,11.7-1.34,17.41-.16,4.84,1,9.3,3.3,14,4.93,1.06.37,2.12.71,3.19,1,.39.11.79.23,1.19.33l.55.14,1.28.31c.46.11.92.22,1.38.31.65.14,1.29.26,1.94.38.44.09.89.16,1.34.24h.09l1.28.2.31,0h0l.95.13c.46.07.92.13,1.39.18q1.53.19,3.06.33c1.65.16,3.31.28,5,.38l1.66.1,1.66.08,5,.22h.22l.7,0a25.8,25.8,0,0,0,6.22-.32c.36-.07.71-.15,1.06-.25s.64-.2,1-.32c3.75-1.44,6.49-4.75,8.39-8.29.4-.75.77-1.5,1.11-2.27s.65-1.55.93-2.33c.35-1,.65-1.95.91-2.95.08-.27.15-.54.21-.82s.2-.83.28-1.25c.25-1.15.44-2.31.58-3.48,0-.37.09-.75.13-1.12.09-1,.16-1.93.2-2.91,0-.74,0-1.49,0-2.24C1024.07,282,1024,280.93,1024,279.9Zm-25.64-59.7c-.81-.76-1.64-1.49-2.48-2.18A10.33,10.33,0,0,1,998.35,220.2Z",
          transform: "translate(-108.55 -48.49)",
          fill: "#464353"
        }
      }),
      _c("path", {
        attrs: {
          d:
            "M816.7,316c-7.53-.93-15-4.23-22.43-2.61-4.65,1-8.65,3.89-12.37,6.86A150.41,150.41,0,0,0,747.13,360a21,21,0,0,0-3.21,7.52c-.48,3.12.37,6.29,1.38,9.28,6.84,20.21,21.47,37.09,28.13,57.36,7,21.32,4.57,44.62-.59,66.46A277.75,277.75,0,0,1,742,577.32a43.74,43.74,0,0,1-7.1,9.72c-3.64,3.5-8.53,6-10.69,10.58-1,2-1.29,4.28-2,6.42-2,6-6.84,11.14-7.31,17.47-.35,4.83,1.94,9.4,3.33,14a38.58,38.58,0,0,1-.71,24.1c-5.07,13.9-18.33,26.54-14.48,40.83,8.59-2.47,18.11-5.68,22.16-13.65,1.43-2.82,2.14-6.18,4.55-8.24,4.81-4.09,13-.39,18.11-4.15,3.86-2.86,4-8.72,2.28-13.22s-4.68-8.46-6-13.09c-2.3-8.35,1.38-17.18.7-25.81-.32-4-1.55-7.83-1.64-11.81-.17-7.73,4.11-15,9.8-20.25s12.72-8.73,19.64-12.16l26.16-13c9.49-4.7,19.89-10.43,23-20.55,1.18-3.79,1.19-7.83,1.25-11.79.89-60.51,16.05-119.8,31.12-178.41,2.34-9.08,4.72-18.2,8.2-26.92s10.29-15.72,13.76-23.82C856,301.21,837.61,318.62,816.7,316Z",
          transform: "translate(-108.55 -48.49)",
          fill: "#464353"
        }
      }),
      _c("path", {
        attrs: {
          d:
            "M960.91,695.61c2.31,14,3.72,28.3,4.82,42.53-18,14.92-37.38,27.9-57.07,39.94-1.12.69-2.25,1.37-3.38,2l-.09.48a2.49,2.49,0,0,0-.16-.33,15.05,15.05,0,0,0-7.52-7.42q-11.07-23.25-22.12-46.5c-4-8.37-8-16.82-10-25.85,0-.19-.09-.39-.12-.58-1.52-7-1.87-14.27-2.88-21.36a61.7,61.7,0,0,0-2.73-11.94c-1.2-3.45-2.85-6.8-4.31-10.17-1.8-4.16-3.31-8.37-3.38-12.86,0-1.43.09-3-.61-4.2a10.89,10.89,0,0,0-2.73-2.64,10.41,10.41,0,0,1-3.36-9.51c-6,.31-9.38,6.76-11.79,12.23a66.68,66.68,0,0,1-8.56,15,28.45,28.45,0,0,1-9.48,7.89c-.33.16-.66.32-1,.46-8.35,3.68-18.1,2.38-27.15.72-7.91-1.45-16.09-3.25-22.45-8.17l-.68-.54a29.37,29.37,0,0,1-5-5.34c-5.33-7.28-7.69-16.87-9-26-.12-.86-.24-1.72-.35-2.58a96.17,96.17,0,0,1-.75-19.48c.12-1.6.29-3.2.5-4.79.14-1,.29-2.08.46-3.12a.28.28,0,0,1,0-.09c.26-1.65.54-3.31.82-5,1-5.67,2-11.49,5-16.37a31,31,0,0,1,7.36-7.88c1.08-.85,2.19-1.66,3.31-2.44,1.82-1.26,3.69-2.46,5.59-3.59a96.62,96.62,0,0,1,15-7.3c1.24-.48,2.5-.93,3.76-1.36a29.51,29.51,0,0,1,15.28-1.21,80.41,80.41,0,0,0,13.68.8c11.73-.23,23.51-2.47,35.22-3.92,16.26-2,33.73-2.24,47.91,6,.68.39,1.34.8,2,1.23,7,4.58,12.64,11,17.19,18.17,1,1.51,1.87,3.06,2.73,4.63a117.93,117.93,0,0,1,5.37,11.1,13.8,13.8,0,0,1,1.49,6,7.79,7.79,0,0,1-.16,1.18c-.27,1.42-.81,2.8-1,4.24-.63,5.45,4,10,5.73,15.19,1.12,3.38,1,7,1.63,10.56.91,5,3.36,9.5,5.56,14a175.06,175.06,0,0,1,8.9,22.37c1.74,5.33,3.23,10.74,4.54,16.2q.64,2.63,1.21,5.27C959.23,686.1,960.12,690.84,960.91,695.61Z",
          transform: "translate(-108.55 -48.49)",
          fill: "#f86d70"
        }
      }),
      _c("polygon", {
        attrs: {
          points:
            "958.98 499.03 958.98 506.03 957.69 506.01 956.25 505.99 940.17 505.79 900.55 505.27 889.43 505.13 886.55 505.09 869.86 504.88 846.34 504.57 796.44 503.92 709.85 502.8 678.6 502.4 666.06 502.24 654.52 502.09 647.33 501.99 640.52 501.9 590.03 501.25 576.03 501.07 572.98 501.03 571 495.92 556.61 458.81 553.98 452.03 555.98 444.03 564.98 450.03 570.52 450.72 661.73 462.06 678.85 464.19 715.15 468.71 750.71 473.13 764.65 474.86 847.14 485.12 870.19 487.99 889.27 490.36 957.11 498.8 958.98 499.03",
          fill: "#3f3d56"
        }
      }),
      _c("polygon", {
        attrs: {
          points:
            "555.98 444.03 573.98 491.03 958.98 499.03 958.98 448.03 555.98 444.03",
          fill: "#504f60"
        }
      }),
      _c("polygon", {
        attrs: {
          points:
            "575.98 496.03 578.98 783.03 592.98 781.03 589.98 496.03 575.98 496.03",
          fill: "#3f3d56"
        }
      }),
      _c("path", {
        attrs: {
          d:
            "M1066.24,554.49l-1.44,0a316.48,316.48,0,0,1-11.53,52.79l-4.55-53-.19-2.26,16.82-1.94.56-.06Z",
          transform: "translate(-108.55 -48.49)",
          fill: "#3f3d56"
        }
      }),
      _c("polygon", {
        attrs: {
          points:
            "902.98 472.03 756.48 475.03 710.98 460.03 832.98 453.03 902.98 472.03",
          fill: "#fff"
        }
      }),
      _c("path", {
        attrs: {
          d:
            "M827.76,462.2a9.82,9.82,0,0,0-4,2.85,10.56,10.56,0,0,0-1.49,4.54l-2.46,14.67a6.49,6.49,0,0,0,.19,4.07c.64,1.23,2.5,1.87,3.43.85-.12,2.87.13,5.93,1.8,8.27s5.17,3.57,7.53,1.94a4.88,4.88,0,0,0,7.35,1.14c-1.42.48-1.52,2.65-.51,3.75a6.53,6.53,0,0,0,4.08,1.63,99.79,99.79,0,0,0,51.9-6.53c1.55-.64-2.53-19.75-2.94-21.71-1-4.61-1.5-10.24-5.39-13.34-9.3-7.42-25.82-8.88-37.15-8A64,64,0,0,0,827.76,462.2Z",
          transform: "translate(-108.55 -48.49)",
          fill: "#fbbebe"
        }
      }),
      _c("path", {
        attrs: {
          d:
            "M976.82,464.42c-36.17.69-73.09,1.28-107.61-9.55a73,73,0,0,1-.66,38.87l169.12,14c7.17.59,36.9,3.95,43.89,2.26s-58.65-23.31-56-30c7.29-18.43,31.71-29.23,14.12-29.92C1017.48,449.2,999.19,464,976.82,464.42Z",
          transform: "translate(-108.55 -48.49)",
          opacity: "0.1"
        }
      }),
      _c("path", {
        attrs: {
          d:
            "M977.82,466.42c-36.17.69-73.09,1.28-107.61-9.55a73,73,0,0,1-.66,38.87l169.12,14c7.17.59,36.9,4,43.89,2.26s5.35-10.31,8-17c7.29-18.43-32.29-42.23-49.88-42.92C1018.48,451.2,1000.19,466,977.82,466.42Z",
          transform: "translate(-108.55 -48.49)",
          fill: "#464353"
        }
      }),
      _c("path", {
        attrs: {
          d:
            "M920.31,469.2a9.79,9.79,0,0,1,4,2.85,10.71,10.71,0,0,1,1.5,4.54l2.46,14.67a6.56,6.56,0,0,1-.19,4.07c-.64,1.23-2.51,1.87-3.43.85.11,2.87-.13,5.93-1.8,8.27s-5.17,3.57-7.54,1.94a4.88,4.88,0,0,1-7.35,1.14c1.42.48,1.53,2.65.52,3.75a6.56,6.56,0,0,1-4.09,1.63,99.75,99.75,0,0,1-51.89-6.53c-1.55-.64,2.52-19.75,2.94-21.71,1-4.61,1.5-10.24,5.39-13.34,9.29-7.42,25.82-8.88,37.15-8A64,64,0,0,1,920.31,469.2Z",
          transform: "translate(-108.55 -48.49)",
          fill: "#fbbebe"
        }
      }),
      _c("path", {
        attrs: {
          d:
            "M681.31,437.35c-3.32,4.28-6.65,8.65-8.79,13.64-4.09,9.52-3.49,20.3-2.81,30.64.19,3,.43,6.06,2,8.55a14.44,14.44,0,0,0,5.22,4.45c8.66,4.92,18.8,6.39,28.7,7.49q22.74,2.52,45.64,3.07c37.82.92,76.22-2.17,113.06,6.4-4.56-6.93-4.55-16.1-2-24s7.46-14.78,12.27-21.55c-16.86-5.34-34.94,3-52.6,2.17-18.13-.85-34.91-11.33-53.06-11.32-3.9,0-7.87.49-11.66-.45s-7.46-3.8-7.81-7.69c4.84,1.09,9.43-3.05,11.43-7.59s2.36-9.67,4.3-14.24c4.83-11.37,17.88-16.64,26-26,1.28-1.48,2.49-3.23,2.45-5.19a8.12,8.12,0,0,0-2-4.47c-6.75-9-16.92-14-25.37-21-2.94-2.44-8.87-11.64-12.17-12.49-6.12-1.57-11.31,7.27-15.29,11.58Q708.68,402.1,681.31,437.35Z",
          transform: "translate(-108.55 -48.49)",
          fill: "#464353"
        }
      }),
      _c("path", {
        attrs: {
          d:
            "M882.39,434.81a33.1,33.1,0,0,1,6.69,6.63,11.42,11.42,0,0,1,2.09,8.94,13.36,13.36,0,0,1,8.33-13.83Z",
          transform: "translate(-108.55 -48.49)",
          opacity: "0.07"
        }
      }),
      _c("g", { attrs: { opacity: "0.1" } }, [
        _c("path", {
          attrs: {
            d:
              "M937.85,172.57a86.87,86.87,0,0,0-4.06-9.15,24.52,24.52,0,0,0-2.92.75A84.57,84.57,0,0,1,935.5,173C936.27,172.8,937.05,172.66,937.85,172.57Z",
            transform: "translate(-108.55 -48.49)"
          }
        }),
        _c("path", {
          attrs: {
            d:
              "M995.87,212c.27.22.53.47.79.7a1.46,1.46,0,0,0-.07-.19Q996.25,212.26,995.87,212Z",
            transform: "translate(-108.55 -48.49)"
          }
        }),
        _c("path", {
          attrs: {
            d:
              "M902.91,216.4c.52-.41,1-.84,1.56-1.24l-.16-4.75-10.68-.11c-1.73,1.59-3.57,3.87-2.55,6Z",
            transform: "translate(-108.55 -48.49)"
          }
        }),
        _c("path", {
          attrs: {
            d:
              "M1019.67,296.36c-1.9,3.54-4.64,6.86-8.39,8.29-2.89,1.1-6.07,1-9.16.86-10.54-.43-21.26-.9-31.22-4.39-4.66-1.64-9.12-3.93-14-4.94-5.71-1.18-11.62-.51-17.41.17l-25.52,3c-7.53.88-15.92,1.54-21.93-3.08-3.44-2.64-5.66-6.75-9.43-8.87-1.59-.9-3.48-1.48-4.51-3a7.49,7.49,0,0,1-1-3.71c-.08-1.05-.13-2.1-.17-3.15a84.63,84.63,0,0,0,.17,9.15,7.49,7.49,0,0,0,1,3.71c1,1.51,2.92,2.09,4.51,3,3.77,2.12,6,6.23,9.43,8.87,6,4.62,14.4,4,21.93,3.08l25.52-3c5.79-.68,11.7-1.35,17.41-.17,4.84,1,9.3,3.3,14,4.94,10,3.49,20.68,4,31.22,4.39,3.09.13,6.27.24,9.16-.86,3.75-1.43,6.49-4.75,8.39-8.29,3.68-6.85,4.71-14.62,4.32-22.45A39.06,39.06,0,0,1,1019.67,296.36Z",
            transform: "translate(-108.55 -48.49)"
          }
        })
      ]),
      _c("path", {
        attrs: {
          d: "M937.56,179l14,13S939.56,187,937.56,179Z",
          transform: "translate(-108.55 -48.49)",
          opacity: "0.1"
        }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container mt-5" }, [
    _c(
      "div",
      { staticClass: "row vh-80" },
      [_vm._m(0), _vm._v(" "), _c("main-svg", { staticClass: "col-9" })],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "row" },
      _vm._l(_vm.files.data, function(file, index) {
        return _c(
          "div",
          { staticClass: "col-lg-6 col-md-12 col-sm-12" },
          [_c("file", { attrs: { file: file } })],
          1
        )
      }),
      0
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "row" },
      [
        _c("pagination", {
          attrs: { data: _vm.files, limit: 5 },
          on: { "pagination-change-page": _vm.fetchFiles }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 mt-r5" }, [
      _c("p", [_vm._v("به سایت ما خوش آمدید :)")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/File.vue":
/*!******************************************!*\
  !*** ./resources/js/components/File.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _File_vue_vue_type_template_id_77c84e67_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./File.vue?vue&type=template&id=77c84e67&scoped=true& */ "./resources/js/components/File.vue?vue&type=template&id=77c84e67&scoped=true&");
/* harmony import */ var _File_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./File.vue?vue&type=script&lang=js& */ "./resources/js/components/File.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _File_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _File_vue_vue_type_template_id_77c84e67_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _File_vue_vue_type_template_id_77c84e67_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "77c84e67",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/File.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/File.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/File.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./File.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/File.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/File.vue?vue&type=template&id=77c84e67&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/File.vue?vue&type=template&id=77c84e67&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_template_id_77c84e67_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./File.vue?vue&type=template&id=77c84e67&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/File.vue?vue&type=template&id=77c84e67&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_template_id_77c84e67_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_template_id_77c84e67_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/svg/MainSvg.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/svg/MainSvg.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainSvg_vue_vue_type_template_id_7d2447b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainSvg.vue?vue&type=template&id=7d2447b6&scoped=true& */ "./resources/js/components/svg/MainSvg.vue?vue&type=template&id=7d2447b6&scoped=true&");
/* harmony import */ var _MainSvg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainSvg.vue?vue&type=script&lang=js& */ "./resources/js/components/svg/MainSvg.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MainSvg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MainSvg_vue_vue_type_template_id_7d2447b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MainSvg_vue_vue_type_template_id_7d2447b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7d2447b6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/svg/MainSvg.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/svg/MainSvg.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/svg/MainSvg.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainSvg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MainSvg.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/svg/MainSvg.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainSvg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/svg/MainSvg.vue?vue&type=template&id=7d2447b6&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/svg/MainSvg.vue?vue&type=template&id=7d2447b6&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainSvg_vue_vue_type_template_id_7d2447b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MainSvg.vue?vue&type=template&id=7d2447b6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/svg/MainSvg.vue?vue&type=template&id=7d2447b6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainSvg_vue_vue_type_template_id_7d2447b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainSvg_vue_vue_type_template_id_7d2447b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/views/Home.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_63cd6604_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=63cd6604&scoped=true& */ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_id_63cd6604_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css& */ "./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_63cd6604_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_63cd6604_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "63cd6604",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_63cd6604_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_63cd6604_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_63cd6604_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_63cd6604_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_63cd6604_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=63cd6604&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);