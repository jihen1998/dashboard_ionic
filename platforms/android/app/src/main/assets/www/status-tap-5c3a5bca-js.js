(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["status-tap-5c3a5bca-js"],{

/***/ "dP+9":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/status-tap-5c3a5bca.js ***!
  \******************************************************************/
/*! exports provided: startStatusTap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startStatusTap", function() { return startStatusTap; });
/* harmony import */ var D_zizoe_Documents_ionic_github_restaurant_dashboard_main_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "o0o1");
/* harmony import */ var D_zizoe_Documents_ionic_github_restaurant_dashboard_main_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_zizoe_Documents_ionic_github_restaurant_dashboard_main_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_zizoe_Documents_ionic_github_restaurant_dashboard_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "HaE+");
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "1vRN");





var startStatusTap = function startStatusTap() {
  var win = window;
  win.addEventListener('statusTap', function () {
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_2__["f"])(function () {
      var width = win.innerWidth;
      var height = win.innerHeight;
      var el = document.elementFromPoint(width / 2, height / 2);

      if (!el) {
        return;
      }

      var contentEl = el.closest('ion-content');

      if (contentEl) {
        new Promise(function (resolve) {
          return Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__["c"])(contentEl, resolve);
        }).then(function () {
          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_2__["c"])( /*#__PURE__*/Object(D_zizoe_Documents_ionic_github_restaurant_dashboard_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_zizoe_Documents_ionic_github_restaurant_dashboard_main_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
            return D_zizoe_Documents_ionic_github_restaurant_dashboard_main_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    /**
                     * If scrolling and user taps status bar,
                     * only calling scrollToTop is not enough
                     * as engines like WebKit will jump the
                     * scroll position back down and complete
                     * any in-progress momentum scrolling.
                     */
                    contentEl.style.setProperty('--overflow', 'hidden');
                    _context.next = 3;
                    return contentEl.scrollToTop(300);

                  case 3:
                    contentEl.style.removeProperty('--overflow');

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          })));
        });
      }
    });
  });
};



/***/ })

}]);
//# sourceMappingURL=status-tap-5c3a5bca-js.js.map