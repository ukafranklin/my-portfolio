"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/works",{

/***/ "./src/common/initIsotope.js":
/*!***********************************!*\
  !*** ./src/common/initIsotope.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar initIsotope = function() {\n    var grid = document.querySelectorAll(\".gallery\");\n    var iso;\n    if (grid.length >= 1) {\n        grid.forEach(function(item1) {\n            iso = new Isotope(item1, {\n                itemSelector: \".items\",\n                layoutMode: \"fitRows\",\n                fitRows: {\n                    gutter: 20\n                },\n                filter: \":nth-child(-n+8)\"\n            });\n            // Apply additional CSS to fix styling issues\n            var items = item1.querySelectorAll(\".items\");\n            items.forEach(function(item, index) {\n                if (index >= 8) {\n                    item.style.display = \"none\"; // Hide items beyond the first 8\n                } else {\n                    item.style.height = \"auto\"; // Reset height\n                    item.style.overflow = \"hidden\"; // Hide overflowed content\n                }\n            });\n        });\n    }\n    var gridMons = document.querySelectorAll(\".gallery-mons\");\n    if (gridMons.length >= 1) {\n        gridMons.forEach(function(item2) {\n            iso = new Isotope(item2, {\n                itemSelector: \".items\",\n                masonry: {\n                    columnWidth: \".width2\"\n                },\n                filter: \":nth-child(-n+8)\"\n            });\n            // Apply additional CSS to fix styling issues\n            var items = item2.querySelectorAll(\".items\");\n            items.forEach(function(item, index) {\n                if (index >= 8) {\n                    item.style.display = \"none\"; // Hide items beyond the first 8\n                } else {\n                    item.style.height = \"auto\"; // Reset height\n                    item.style.overflow = \"hidden\"; // Hide overflowed content\n                }\n            });\n        });\n    }\n    var filtersElem = document.querySelector(\".filtering\");\n    if (filtersElem) {\n        var radioButtonGroup = function radioButtonGroup(buttonGroup) {\n            buttonGroup.addEventListener(\"click\", function(event) {\n                if (!matchesSelector(event.target, \"span\")) {\n                    return;\n                }\n                buttonGroup.querySelector(\".active\").classList.remove(\"active\");\n                event.target.classList.add(\"active\");\n            });\n        };\n        filtersElem.addEventListener(\"click\", function(event) {\n            if (!matchesSelector(event.target, \"span\")) {\n                return;\n            }\n            var filterValue = event.target.getAttribute(\"data-filter\");\n            filterValue = filterValue;\n            iso.arrange({\n                filter: filterValue\n            });\n        });\n        var buttonGroups = document.querySelectorAll(\".filtering\");\n        for(var i = 0, len = buttonGroups.length; i < len; i++){\n            var buttonGroup1 = buttonGroups[i];\n            radioButtonGroup(buttonGroup1);\n        }\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (initIsotope);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWNrOi8vX05fRS8uL3NyYy9jb21tb24vaW5pdElzb3RvcGUuanM/NGFlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbml0SXNvdG9wZSA9ICgpID0+IHtcclxuICB2YXIgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ2FsbGVyeVwiKTtcclxuICB2YXIgaXNvO1xyXG4gIGlmIChncmlkLmxlbmd0aCA+PSAxKSB7XHJcbiAgICBncmlkLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgaXNvID0gbmV3IElzb3RvcGUoaXRlbSwge1xyXG4gICAgICAgIGl0ZW1TZWxlY3RvcjogXCIuaXRlbXNcIixcclxuICAgICAgICBsYXlvdXRNb2RlOiBcImZpdFJvd3NcIixcclxuICAgICAgICBmaXRSb3dzOiB7XHJcbiAgICAgICAgICBndXR0ZXI6IDIwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmlsdGVyOiBcIjpudGgtY2hpbGQoLW4rOClcIixcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBBcHBseSBhZGRpdGlvbmFsIENTUyB0byBmaXggc3R5bGluZyBpc3N1ZXNcclxuICAgICAgdmFyIGl0ZW1zID0gaXRlbS5xdWVyeVNlbGVjdG9yQWxsKFwiLml0ZW1zXCIpO1xyXG4gICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChpbmRleCA+PSA4KSB7XHJcbiAgICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgLy8gSGlkZSBpdGVtcyBiZXlvbmQgdGhlIGZpcnN0IDhcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbS5zdHlsZS5oZWlnaHQgPSBcImF1dG9cIjsgLy8gUmVzZXQgaGVpZ2h0XHJcbiAgICAgICAgICBpdGVtLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjsgLy8gSGlkZSBvdmVyZmxvd2VkIGNvbnRlbnRcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB2YXIgZ3JpZE1vbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdhbGxlcnktbW9uc1wiKTtcclxuICBpZiAoZ3JpZE1vbnMubGVuZ3RoID49IDEpIHtcclxuICAgIGdyaWRNb25zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgaXNvID0gbmV3IElzb3RvcGUoaXRlbSwge1xyXG4gICAgICAgIGl0ZW1TZWxlY3RvcjogXCIuaXRlbXNcIixcclxuICAgICAgICBtYXNvbnJ5OiB7XHJcbiAgICAgICAgICBjb2x1bW5XaWR0aDogXCIud2lkdGgyXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaWx0ZXI6IFwiOm50aC1jaGlsZCgtbis4KVwiLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIEFwcGx5IGFkZGl0aW9uYWwgQ1NTIHRvIGZpeCBzdHlsaW5nIGlzc3Vlc1xyXG4gICAgICB2YXIgaXRlbXMgPSBpdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXRlbXNcIik7XHJcbiAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKGluZGV4ID49IDgpIHtcclxuICAgICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyAvLyBIaWRlIGl0ZW1zIGJleW9uZCB0aGUgZmlyc3QgOFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtLnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiOyAvLyBSZXNldCBoZWlnaHRcclxuICAgICAgICAgIGl0ZW0uc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiOyAvLyBIaWRlIG92ZXJmbG93ZWQgY29udGVudFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHZhciBmaWx0ZXJzRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyaW5nXCIpO1xyXG4gIGlmIChmaWx0ZXJzRWxlbSkge1xyXG4gICAgZmlsdGVyc0VsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICBpZiAoIW1hdGNoZXNTZWxlY3RvcihldmVudC50YXJnZXQsIFwic3BhblwiKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB2YXIgZmlsdGVyVmFsdWUgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1maWx0ZXJcIik7XHJcbiAgICAgIGZpbHRlclZhbHVlID0gZmlsdGVyVmFsdWU7XHJcbiAgICAgIGlzby5hcnJhbmdlKHsgZmlsdGVyOiBmaWx0ZXJWYWx1ZSB9KTtcclxuICAgIH0pO1xyXG4gICAgdmFyIGJ1dHRvbkdyb3VwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmlsdGVyaW5nXCIpO1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGJ1dHRvbkdyb3Vwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICB2YXIgYnV0dG9uR3JvdXAgPSBidXR0b25Hcm91cHNbaV07XHJcbiAgICAgIHJhZGlvQnV0dG9uR3JvdXAoYnV0dG9uR3JvdXApO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmFkaW9CdXR0b25Hcm91cChidXR0b25Hcm91cCkge1xyXG4gICAgICBidXR0b25Hcm91cC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKCFtYXRjaGVzU2VsZWN0b3IoZXZlbnQudGFyZ2V0LCBcInNwYW5cIikpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uR3JvdXAucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdElzb3RvcGU7XHJcbiJdLCJuYW1lcyI6WyJpbml0SXNvdG9wZSIsImdyaWQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpc28iLCJsZW5ndGgiLCJmb3JFYWNoIiwiaXRlbSIsIklzb3RvcGUiLCJpdGVtU2VsZWN0b3IiLCJsYXlvdXRNb2RlIiwiZml0Um93cyIsImd1dHRlciIsImZpbHRlciIsIml0ZW1zIiwiaW5kZXgiLCJzdHlsZSIsImRpc3BsYXkiLCJoZWlnaHQiLCJvdmVyZmxvdyIsImdyaWRNb25zIiwibWFzb25yeSIsImNvbHVtbldpZHRoIiwiZmlsdGVyc0VsZW0iLCJxdWVyeVNlbGVjdG9yIiwicmFkaW9CdXR0b25Hcm91cCIsImJ1dHRvbkdyb3VwIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwibWF0Y2hlc1NlbGVjdG9yIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiZmlsdGVyVmFsdWUiLCJnZXRBdHRyaWJ1dGUiLCJhcnJhbmdlIiwiYnV0dG9uR3JvdXBzIiwiaSIsImxlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/common/initIsotope.js\n");

/***/ })

});