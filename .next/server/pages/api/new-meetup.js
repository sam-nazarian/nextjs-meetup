"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\n// /api/new-meetup\n// POST /api/new-meetup\n// the name of the function can be anything but it must be exported as default\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const data = req.body;\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://Sam:Q0tqIcdQL6tMw3dS@cluster0.lmjhspc.mongodb.net/meetups?retryWrites=true&w=majority\");\n        const db = client.db();\n        const meetupsCollection = db.collection(\"meetups\");\n        const result = await meetupsCollection.insertOne(data);\n        console.log(result);\n        client.close(); //close the database connection\n        res.status(201).json({\n            message: \"Meetup inserted!\"\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsa0JBQWtCO0FBQ2xCLHVCQUF1QjtBQUV2Qiw4RUFBOEU7QUFDOUUsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDL0IsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsTUFBTUMsT0FBT0gsSUFBSUksSUFBSTtRQUVyQixNQUFNQyxTQUFTLE1BQU1QLHdEQUFtQixDQUFDO1FBRXpDLE1BQU1TLEtBQUtGLE9BQU9FLEVBQUU7UUFFcEIsTUFBTUMsb0JBQW9CRCxHQUFHRSxVQUFVLENBQUM7UUFFeEMsTUFBTUMsU0FBUyxNQUFNRixrQkFBa0JHLFNBQVMsQ0FBQ1I7UUFFakRTLFFBQVFDLEdBQUcsQ0FBQ0g7UUFFWkwsT0FBT1MsS0FBSyxJQUFJLCtCQUErQjtRQUUvQ2IsSUFBSWMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQW1CO0lBQ3JELENBQUM7QUFDSDtBQUVBLGlFQUFlbEIsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcz83Mzk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XG5cbi8vIC9hcGkvbmV3LW1lZXR1cFxuLy8gUE9TVCAvYXBpL25ldy1tZWV0dXBcblxuLy8gdGhlIG5hbWUgb2YgdGhlIGZ1bmN0aW9uIGNhbiBiZSBhbnl0aGluZyBidXQgaXQgbXVzdCBiZSBleHBvcnRlZCBhcyBkZWZhdWx0XG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XG5cbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KCdtb25nb2RiK3NydjovL1NhbTpRMHRxSWNkUUw2dE13M2RTQGNsdXN0ZXIwLmxtamhzcGMubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknKTtcblxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmluc2VydE9uZShkYXRhKTtcblxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cbiAgICBjbGllbnQuY2xvc2UoKTsgLy9jbG9zZSB0aGUgZGF0YWJhc2UgY29ubmVjdGlvblxuXG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiAnTWVldHVwIGluc2VydGVkIScgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsImNsaWVudCIsImNvbm5lY3QiLCJkYiIsIm1lZXR1cHNDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsInJlc3VsdCIsImluc2VydE9uZSIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();