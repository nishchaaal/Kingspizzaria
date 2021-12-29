/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contactRender = (mainContent) => {\r\n  console.log(\"works i guess\");\r\n  mainContent.innerHTML = \"\";\r\n  mainContent.className = \"container\";\r\n\r\n  const contactDiv = document.createElement(\"div\");\r\n  const contactTitle = document.createElement(\"h1\");\r\n  const phone = document.createElement(\"p\");\r\n  const openInfo = document.createElement(\"h1\");\r\n  const openHours = document.createElement(\"p\");\r\n\r\n  contactDiv.classList.add(\"contact\");\r\n  contactTitle.classList.add(\"contact-title\");\r\n\r\n  contactTitle.textContent = \"Phone Number:\";\r\n  phone.textContent = \"123-456-7890\";\r\n  openInfo.textContent = \"Open Hours:\";\r\n  openHours.textContent = \"Monday to Thursday: 11:30am – last table 10:45pm\";\r\n\r\n  contactDiv.appendChild(contactTitle);\r\n  contactDiv.appendChild(phone);\r\n  contactDiv.appendChild(openInfo);\r\n  contactDiv.appendChild(openHours);\r\n  mainContent.appendChild(contactDiv);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactRender);\r\n\n\n//# sourceURL=webpack://9-restro/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst homeRender = (mainContent) => {\r\n  mainContent.innerHTML = \"\";\r\n  mainContent.className = \"container\";\r\n\r\n  const homeDiv = document.createElement(\"div\");\r\n  const title = document.createElement(\"h1\");\r\n  const subTitle = document.createElement(\"p\");\r\n\r\n  title.classList.add(\"title\");\r\n  subTitle.classList.add(\"sub-title\");\r\n\r\n  title.textContent = \"King's Pizzaria\";\r\n  subTitle.textContent = \"Eat . Drink . Enjoy\";\r\n\r\n  homeDiv.style.fontFamily = \"Rye,cursive\";\r\n\r\n  homeDiv.appendChild(title);\r\n  homeDiv.appendChild(subTitle);\r\n  mainContent.appendChild(homeDiv);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeRender);\r\n\n\n//# sourceURL=webpack://9-restro/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\r\n\r\n\r\n\r\nconst content = document.querySelector(\".content\");\r\nconst main = document.createElement(\"main\");\r\n\r\nconst header = document.createElement(\"header\");\r\nconst nav = document.createElement(\"nav\");\r\nconst navItems = document.createElement(\"ul\");\r\nconst home = document.createElement(\"li\");\r\nconst menu = document.createElement(\"li\");\r\nconst contact = document.createElement(\"li\");\r\n\r\nmain.classList.add(\"container\");\r\nnav.classList.add(\"container\");\r\nnavItems.classList.add(\"nav-items\");\r\nhome.classList.add(\"active\");\r\n\r\nhome.textContent = \"HOME\";\r\nmenu.textContent = \"MENU\";\r\ncontact.textContent = \"CONTACT\";\r\n\r\ncontent.appendChild(header);\r\nheader.appendChild(nav);\r\nnav.appendChild(navItems);\r\nnavItems.appendChild(home);\r\nnavItems.appendChild(menu);\r\nnavItems.appendChild(contact);\r\ncontent.appendChild(main);\r\n\r\nconst footer = document.createElement(\"footer\");\r\nconst footerP = document.createElement(\"p\");\r\n\r\nfooterP.textContent = \"Made by Nishchal\";\r\nfooter.appendChild(footerP);\r\ncontent.appendChild(footer);\r\n\r\n(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(main);\r\n\r\nhome.addEventListener(\"click\", () => {\r\n  menu.classList.remove(\"active\");\r\n  contact.classList.remove(\"active\");\r\n  home.classList.add(\"active\");\r\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(main);\r\n});\r\n\r\ncontact.addEventListener(\"click\", () => {\r\n  menu.classList.remove(\"active\");\r\n  home.classList.remove(\"active\");\r\n  contact.classList.add(\"active\");\r\n  (0,_contact__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(main);\r\n});\r\n\r\nmenu.addEventListener(\"click\", () => {\r\n  home.classList.remove(\"active\");\r\n  contact.classList.remove(\"active\");\r\n  menu.classList.add(\"active\");\r\n  (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(main);\r\n});\r\n\n\n//# sourceURL=webpack://9-restro/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menuRender = (mainContent) => {\r\n  mainContent.innerHTML = \"\";\r\n  mainContent.className = \"container\";\r\n\r\n  const menuDiv = document.createElement(\"div\");\r\n  const menuTitle = document.createElement(\"h1\");\r\n  const menuFlex = document.createElement(\"div\");\r\n  menuDiv.classList.add(\"menu-div\");\r\n  menuFlex.classList.add(\"menu-flex\");\r\n\r\n  menuTitle.textContent = \"MENU\";\r\n\r\n  menuDiv.appendChild(menuTitle);\r\n  menuDiv.appendChild(menuFlex);\r\n  menuFlex.appendChild(createMenuItem(\"Chicken\"));\r\n  menuFlex.appendChild(createMenuItem(\"Veg\"));\r\n  menuFlex.appendChild(createMenuItem(\"Pepperoni\"));\r\n  menuFlex.appendChild(createMenuItem(\"Mixed\"));\r\n\r\n  mainContent.classList.add(\"menu-main\");\r\n  mainContent.appendChild(menuDiv);\r\n};\r\n\r\nconst createMenuItem = (name) => {\r\n  const menuItem = document.createElement(\"div\");\r\n  menuItem.classList.add(\"menu-item\");\r\n\r\n  const pizzaName = document.createElement(\"p\");\r\n  pizzaName.textContent = name;\r\n\r\n  const pizzaImage = document.createElement(\"img\");\r\n  pizzaImage.src = `./img/${name}.jpg`;\r\n  pizzaImage.alt = `${name}`;\r\n\r\n  menuItem.appendChild(pizzaImage);\r\n  menuItem.appendChild(pizzaName);\r\n\r\n  return menuItem;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuRender);\r\n\n\n//# sourceURL=webpack://9-restro/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;