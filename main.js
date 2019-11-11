/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/keyboard */ \"./src/app/keyboard.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/app/keyboard.js":
/*!*****************************!*\
  !*** ./src/app/keyboard.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table */ \"./src/app/table.js\");\n\r\n\r\nconst output = document.createElement('textarea');\r\nconst keyboard = document.createElement('div');\r\nconst body = document.querySelector('body');\r\n\r\nfunction createKey(keyClass) {\r\n    const key = document.createElement('div');\r\n    key.classList.add(keyClass);\r\n    return key;\r\n}\r\n\r\nfunction createSpan(firstClass, secClass) {\r\n    const span = document.createElement('span');\r\n    span.classList.add(firstClass);\r\n    span.classList.add(secClass);\r\n    return span;\r\n}\r\n\r\nfunction appendChildren(parent, children) {\r\n    children.forEach(el => {\r\n        parent.append(el);\r\n    });\r\n}\r\n\r\n\r\noutput.classList.add('output');\r\nkeyboard.classList.add('keyboard');\r\n\r\nconst keys = [];\r\n\r\nfor (let i = 0; i < 60; i += 1) {\r\n    keys.push(createKey('key'));\r\n}\r\n\r\nkeys.forEach((key, i) => {\r\n    if ([13, 14, 27, 28, 40, 52, 53, 54, 55, 57, 58, 59].includes(i)) {\r\n        key.classList.add('key-functional');\r\n    }\r\n});\r\n\r\nappendChildren(keyboard, keys);\r\n\r\nkeys.forEach((key, i) => {\r\n    key.append(createSpan(`${_table__WEBPACK_IMPORTED_MODULE_0__[\"default\"].keyCodes[i]}`, 'secondLang'));\r\n    key.append(createSpan(`${_table__WEBPACK_IMPORTED_MODULE_0__[\"default\"].keyCodes[i]}`, 'currentLang'));\r\n\r\n    Array.from(key.children).forEach(span => {\r\n        span.append(createSpan('case', 'on'));\r\n        span.append(createSpan('case', 'off'));\r\n    });\r\n});\r\n\r\ndocument.body.append(output, keyboard);\r\n\r\nconst uniqueKeys = [\r\n    keys[13],\r\n    keys[27],\r\n    keys[28],\r\n    keys[40],\r\n    keys[52],\r\n    keys[56],\r\n    keys[58]\r\n];\r\nconst [\r\n    backspace,\r\n    enter,\r\n    capslock,\r\n    leftShift,\r\n    rightShift,\r\n    space,\r\n    fn\r\n] = uniqueKeys;\r\nbackspace.classList.add('key-backspace');\r\nenter.classList.add('key-enter');\r\n\r\nArray.from(enter.children).forEach(el => {\r\n    Array.from(el.children).forEach(span => {\r\n        span.classList.add('enter-centered');\r\n    });\r\n});\r\n\r\ncapslock.classList.add('key-capslock');\r\nleftShift.classList.add('key-leftShift');\r\nrightShift.classList.add('key-rightShift');\r\nspace.classList.add('key-space');\r\nfn.classList.add('key-lang');\r\n\r\nfunction createLettersArray(selector, arrOfTable) {\r\n    const array = Array.from(document.querySelectorAll(selector));\r\n\r\n    array.forEach((e, i) => {\r\n        e.textContent = _table__WEBPACK_IMPORTED_MODULE_0__[\"default\"][arrOfTable][i];\r\n    });\r\n\r\n    return array;\r\n}\r\n\r\ncreateLettersArray('.currentLang .case.off', 'engLower');\r\ncreateLettersArray('.currentLang .case.on', 'engUpper');\r\ncreateLettersArray('.secondLang .case.off', 'ruLower');\r\ncreateLettersArray('.secondLang .case.on', 'ruUpper');\r\n\r\nfunction checkCase(currentCase) {\r\n    return currentCase !== true;\r\n}\r\n\r\nfunction changeCase() {\r\n    const caseOff = document.querySelectorAll('.case.off');\r\n    const caseOn = document.querySelectorAll('.case.on');\r\n\r\n    caseOn.forEach(el => {\r\n        el.classList.add('off');\r\n        el.classList.remove('on');\r\n    });\r\n\r\n    caseOff.forEach(el => {\r\n        el.classList.add('on');\r\n        el.classList.remove('off');\r\n    });\r\n}\r\n\r\nfunction changeLang() {\r\n    const langKey = document.querySelector('.key-lang');\r\n\r\n    if (\r\n        localStorage.getItem('lang') === null ||\r\n        localStorage.getItem('lang') === 'eng'\r\n    ) {\r\n        localStorage.setItem('lang', 'ru');\r\n        langKey.textContent = 'Ru';\r\n    } else {\r\n        localStorage.setItem('lang', 'eng');\r\n        langKey.textContent = 'Eng';\r\n    }\r\n\r\n    const langEng = document.querySelectorAll('.currentLang');\r\n    const LangRu = document.querySelectorAll('.secondLang');\r\n\r\n    langEng.forEach(el => {\r\n        el.classList.add('secondLang');\r\n        el.classList.remove('currentLang');\r\n    });\r\n\r\n    LangRu.forEach(el => {\r\n        el.classList.add('currentLang');\r\n        el.classList.remove('secondLang');\r\n    });\r\n}\r\n\r\nif (localStorage.getItem('lang') === 'ru') {\r\n    changeLang();\r\n    localStorage.setItem('lang', 'ru');\r\n    document.querySelector('.key-lang').textContent = 'Ru';\r\n}\r\n\r\n\r\nlet upperCase = false;\r\n\r\nbody.addEventListener('keydown', e => {\r\n    e.preventDefault();\r\n\r\n    if (!_table__WEBPACK_IMPORTED_MODULE_0__[\"default\"].keyCodes.includes(e.code)) {\r\n        return;\r\n    }\r\n\r\n    const pressedKey = document.querySelector(`.${e.code}`).parentNode;\r\n\r\n    if (e.key !== 'CapsLock') {\r\n        pressedKey.classList.add('active');\r\n    }\r\n\r\n    switch (e.key) {\r\n        case 'Shift':\r\n            if (\r\n                leftShift.classList.contains('active-mobile') ||\r\n                rightShift.classList.contains('active-mobile')\r\n            ) {\r\n                break;\r\n            }\r\n\r\n            if (e.repeat === false) {\r\n                upperCase = checkCase(upperCase);\r\n                changeCase();\r\n            }\r\n            break;\r\n\r\n        case 'CapsLock':\r\n            if (e.repeat === false) {\r\n                upperCase = checkCase(upperCase);\r\n                changeCase();\r\n                pressedKey.classList.toggle('active');\r\n            }\r\n            break;\r\n\r\n        case 'Enter':\r\n            output.value += '\\n';\r\n            break;\r\n\r\n        case 'Tab':\r\n            output.value += '\\t';\r\n            break;\r\n\r\n        case 'Backspace':\r\n            output.value = output.value.slice(0, -1);\r\n            break;\r\n\r\n        case 'Control':\r\n        case 'Alt':\r\n        case 'Meta':\r\n            break;\r\n\r\n        default:\r\n            if (\r\n                rightShift.classList.contains('active-mobile') ||\r\n                leftShift.classList.contains('active-mobile')\r\n            ) {\r\n                if (localStorage.getItem('lang') === 'ru' && upperCase) {\r\n                    output.value +=\r\n                        _table__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ruUpper[_table__WEBPACK_IMPORTED_MODULE_0__[\"default\"].keyCodes.indexOf(e.code)];\r\n                } else if (\r\n                    localStorage.getItem('lang') === 'ru' &&\r\n                    !upperCase\r\n                ) {\r\n                    output.value +=\r\n                        _table__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ruLower[_table__WEBPACK_IMPORTED_MODULE_0__[\"default\"].keyCodes.indexOf(e.code)];\r\n                } else if (upperCase) {\r\n                    output.value +=\r\n                        _table__WEBPACK_IMPORTED_MODULE_0__[\"default\"].engUpper[_table__WEBPACK_IMPORTED_MODULE_0__[\"default\"].keyCodes.indexOf(e.code)];\r\n                } else {\r\n                    output.value +=\r\n                        _table__WEBPACK_IMPORTED_MODULE_0__[\"default\"].engLower[_table__WEBPACK_IMPORTED_MODULE_0__[\"default\"].keyCodes.indexOf(e.code)];\r\n                }\r\n\r\n                upperCase = checkCase(upperCase);\r\n                changeCase();\r\n                leftShift.classList.remove('active-mobile');\r\n                rightShift.classList.remove('active-mobile');\r\n                break;\r\n            }\r\n\r\n            if (localStorage.getItem('lang') === 'ru' && upperCase) {\r\n                output.value += _table__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ruUpper[_table__WEBPACK_IMPORTED_MODULE_0__[\"default\"].keyCodes.indexOf(e.code)];\r\n            } else if (localStorage.getItem('lang') === 'ru' && !upperCase) {\r\n                output.value += _table__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ruLower[_table__WEBPACK_IMPORTED_MODULE_0__[\"default\"].keyCodes.indexOf(e.code)];\r\n            } else if (upperCase) {\r\n                output.value += _table__WEBPACK_IMPORTED_MODULE_0__[\"default\"].engUpper[_table__WEBPACK_IMPORTED_MODULE_0__[\"default\"].keyCodes.indexOf(e.code)];\r\n            } else {\r\n                output.value += _table__WEBPACK_IMPORTED_MODULE_0__[\"default\"].engLower[_table__WEBPACK_IMPORTED_MODULE_0__[\"default\"].keyCodes.indexOf(e.code)];\r\n            }\r\n    }\r\n});\r\n\r\nbody.addEventListener('keyup', e => {\r\n    e.preventDefault();\r\n\r\n    if (!_table__WEBPACK_IMPORTED_MODULE_0__[\"default\"].keyCodes.includes(e.code)) {\r\n        return;\r\n    }\r\n\r\n    const pressedKey = document.querySelector(`.${e.code}`).parentNode;\r\n\r\n    if (e.key !== 'CapsLock') {\r\n        pressedKey.classList.remove('active');\r\n    }\r\n\r\n    if (e.key === 'Shift') {\r\n        if (leftShift.classList.contains('active-mobile')) {\r\n            leftShift.classList.remove('active-mobile');\r\n            upperCase = checkCase(upperCase);\r\n            changeCase();\r\n        } else if (rightShift.classList.contains('active-mobile')) {\r\n            rightShift.classList.remove('active-mobile');\r\n            upperCase = checkCase(upperCase);\r\n            changeCase();\r\n        } else {\r\n            upperCase = checkCase(upperCase);\r\n            changeCase();\r\n        }\r\n    }\r\n});\r\n\r\nfunction pressMultipleKeys(func, element, ...requiredKeys) {\r\n    const pressedKeys = new Set();\r\n\r\n    element.addEventListener('keydown', e => {\r\n        pressedKeys.add(e.key);\r\n\r\n        for (let i = 0; i < requiredKeys.length; i += 1) {\r\n            if (!pressedKeys.has(requiredKeys[i])) {\r\n                return;\r\n            }\r\n        }\r\n\r\n        pressedKeys.clear();\r\n\r\n        func();\r\n    });\r\n\r\n    element.addEventListener('keyup', e => {\r\n        pressedKeys.delete(e.key);\r\n    });\r\n}\r\n\r\npressMultipleKeys(changeLang, body, 'Alt', 'Control');\r\n\r\nkeyboard.addEventListener('click', e => {\r\n    if (e.target.classList.contains('keyboard')) {\r\n        return;\r\n    }\r\n\r\n    switch (e.target.textContent) {\r\n        case 'Shift':\r\n            if (\r\n                leftShift.classList.contains('active') ||\r\n                rightShift.classList.contains('active')\r\n            ) {\r\n                break;\r\n            }\r\n\r\n            if (e.target.parentNode.classList.contains('ShiftLeft')) {\r\n                leftShift.classList.toggle('active-mobile');\r\n            } else if (e.target.parentNode.classList.contains('ShiftRight')) {\r\n                rightShift.classList.toggle('active-mobile');\r\n            }\r\n\r\n            if (\r\n                leftShift.classList.contains('active-mobile') &&\r\n                e.target.parentNode.classList.contains('ShiftRight')\r\n            ) {\r\n                leftShift.classList.remove('active-mobile');\r\n                break;\r\n            } else if (\r\n                rightShift.classList.contains('active-mobile') &&\r\n                e.target.parentNode.classList.contains('ShiftLeft')\r\n            ) {\r\n                rightShift.classList.remove('active-mobile');\r\n                break;\r\n            }\r\n\r\n            upperCase = checkCase(upperCase);\r\n            changeCase();\r\n            break;\r\n\r\n        case 'CapsLock':\r\n            upperCase = checkCase(upperCase);\r\n            changeCase();\r\n            capslock.classList.toggle('active');\r\n            break;\r\n\r\n        case 'Enter':\r\n            output.value += '\\n';\r\n            break;\r\n\r\n        case 'Tab':\r\n            output.value += '\\t';\r\n            break;\r\n\r\n        case 'Backspace':\r\n            output.value = output.value.slice(0, -1);\r\n            break;\r\n\r\n        case 'Ctrl':\r\n        case 'Alt':\r\n        case 'Win':\r\n            break;\r\n        case 'Eng':\r\n        case 'Ru':\r\n            changeLang();\r\n            break;\r\n        default:\r\n            output.value += e.target.textContent;\r\n            if (\r\n                rightShift.classList.contains('active-mobile') ||\r\n                leftShift.classList.contains('active-mobile')\r\n            ) {\r\n                changeCase();\r\n                leftShift.classList.remove('active-mobile');\r\n                rightShift.classList.remove('active-mobile');\r\n            }\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/app/keyboard.js?");

/***/ }),

/***/ "./src/app/table.js":
/*!**************************!*\
  !*** ./src/app/table.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst table = {\r\n    engLower: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',\r\n        'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Enter',\r\n        'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', \"'\",\r\n        'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '\\\\', 'Shift',\r\n        'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Eng', 'Ctrl',\r\n    ],\r\n    engUpper: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',\r\n        'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', 'Enter',\r\n        'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '\"',\r\n        'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '|', 'Shift',\r\n        'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Eng', 'Ctrl',\r\n    ],\r\n    ruLower: ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',\r\n        'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'Enter',\r\n        'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э',\r\n        'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '\\\\', 'Shift',\r\n        'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Eng', 'Ctrl',\r\n    ],\r\n    ruUpper: ['Ё', '!', '\"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',\r\n        'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'Enter',\r\n        'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э',\r\n        'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '/', 'Shift',\r\n        'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Eng', 'Ctrl',\r\n    ],\r\n    keyCodes: ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6',\r\n        'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',\r\n        'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY',\r\n        'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Enter',\r\n        'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH',\r\n        'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote',\r\n        'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN',\r\n        'KeyM', 'Comma', 'Period', 'Slash', 'Backslash', 'ShiftRight',\r\n        'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'Eng', 'ControlRight',\r\n    ],\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (table);\r\n\n\n//# sourceURL=webpack:///./src/app/table.js?");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/index.scss?");

/***/ })

/******/ });