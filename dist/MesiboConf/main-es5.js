function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\t<head>\r\n\t\t<meta charset=\"utf-8\">\r\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>\r\n\t\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\r\n\t\t<title>Mesibo Group Video Calling Demo</title>\r\n\r\n\t\t<!-- Bootstrap-->\r\n\t\t<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" crossorigin=\"anonymous\">\r\n\t\t<script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" crossorigin=\"anonymous\"></script>\r\n\t\t<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\" crossorigin=\"anonymous\"></script>\r\n\t\t<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\" crossorigin=\"anonymous\"></script>\r\n\t\t<!-- <script type=\"text/javascript\" src=\"https://webrtc.github.io/adapter/adapter-latest.js\"></script>\r\n\t\t\r\n\t\t<script type=\"text/javascript\" src=\"https://api.mesibo.com/mesibo2.js\"></script> \r\n\t\t<script type=\"text/javascript\" src=\"demo.js\" ></script> -->\r\n\t\t<!--SCRIPTINCLUDEEND-->\r\n\t</head>\r\n\r\n\t<body>\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"form-block light-gray-bg p-30 border-clear mx-auto\">\r\n\t\t\t\t\t<h2 class=\"title\">Mesibo Live</h2>\r\n\t\t\t\t</div>\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-danger\" id=\"cstatus\">Offline</button>                                  \r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group has-feedback row\" id=\"login-options\">\r\n        <span class=\"col-1\">Select User to login</span>\t\t\t\t\r\n        <div class=\"col-2\">                    \t\r\n          <button type=\"button\" class=\"btn btn-info my-1\" (click)=\"login(0);\">Rohan</button>\r\n          <br>\r\n          <button type=\"button\" class=\"btn btn-info my-1\" (click)=\"login(1);\">Jay\r\n          </button>\r\n          <br>\r\n          <button type=\"button\" class=\"btn btn-info my-1\" (click)=\"login(2);\">Doctor\r\n          </button>\r\n          <br>\r\n          <button type=\"button\" class=\"btn btn-info my-1\" (click)=\"login(3);\">User-3\r\n          </button>\r\n          <br>\r\n          <button type=\"button\" class=\"btn btn-info my-1\" (click)=\"login(4);\">User-4\r\n          </button>\r\n        </div>\r\n      </div>\r\n\t\t\t<br>\r\n\t\t\t<!-- Publish your own stream-->\r\n\t\t\t<div class=\"row\" style=\"display: none;\" id=\"conference-area\">\r\n\t\t\t\t<div class=\"col-4\" style=\"border-style: groove;\">\r\n\t\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t<h3 class=\"panel-title\" id=\"publisher\">\r\n                <span>Your Stream</span>\r\n\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"panel-body\" id=\"videolocal\" style=\"width: 320px; height:320px;\">\r\n\t\t\t\t\t\t\t<video class=\"rounded centered\" id=\"video-publisher\" width= \"100%\" height=\"100%\"  autoplay playsinline muted></video>\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div class=\"btn-group\" role=\"group\" aria-label=\"video controls\">\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" style=\"font-size: 15px\" (click)=\"streamFromCamera()\">Stream Camera</button>\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" style=\"font-size: 15px\" (click)=\"toggleSelfVideo()\">Toggle Video</button>\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" style=\"font-size: 15px\" (click)=\"toggleSelfAudio()\">Toggle Audio</button>\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" style=\"font-size: 15px\" (click)=\"streamFromScreen()\">Share Screen</button>\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" style=\"font-size: 15px\" (click)=\"selfHangup()\" >Hangup</button>\r\n\t\t\t\t\t\t</div>\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"col-8\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t    <div class=\"col-6\" style=\"border-style: groove;\">\r\n\t\t\t\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t<h5 class=\"panel-title\" id=\"remote-stream-name-0\">\r\n                    <span>0</span>\r\n\t\t\t\t\t\t\t\t\t</h5>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t\t\t<video class=\"rounded centered\" id=\"video-remote-0\" width= \"100%\" height=\"100%\" autoplay playsinline></video>\r\n\t\t\t\t\t\t\t\t\t<div class=\"btn-group\" role=\"group\" aria-label=\"video controls\" >\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" style=\"font-size: 15px\" (click)=\"toggleRemoteVideo(0)\">Toggle Video</button>\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" style=\"font-size: 15px\" (click)=\"toggleRemoteAudio(0)\">Toggle Audio</button>\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" style=\"font-size: 15px\" (click)=\"hangup(0)\" >Hangup</button>\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" style=\"font-size: 15px\" (click)=\"redial(0)\" >Redial</button>\r\n\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-6\" style=\"border-style: groove;\">\r\n\t\t\t\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t<h5 class=\"panel-title\" id=\"remote-stream-name-1\">\r\n                    <span>1</span>\r\n\t\t\t\t\t\t\t\t\t</h5>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t\t\t<video class=\"rounded centered\" id=\"video-remote-1\" width= \"100%\" height=\"100%\" autoplay playsinline muted=\"muted\"></video>\r\n\t\t\t\t\t\t\t\t\t<div class=\"btn-group\" role=\"group\" aria-label=\"video controls\" >\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" style=\"font-size: 15px\" (click)=\"toggleRemoteVideo(1)\">Toggle Video</button>\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" style=\"font-size: 15px\" (click)=\"toggleRemoteAudio(1)\">Toggle Audio</button>\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" style=\"font-size: 15px\" (click)=\"hangup(1)\" >Hangup</button>\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" style=\"font-size: 15px\" (click)=\"redial(1)\" >Redial</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-6\" style=\"border-style: groove;\">\r\n\t\t\t\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t<h5 class=\"panel-title\" id=\"remote-stream-name-2\">\r\n                    <span>2</span>\r\n\t\t\t\t\t\t\t\t\t</h5>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t\t\t<video class=\"rounded centered\" id=\"video-remote-3\" width= \"100%\" height=\"100%\" autoplay playsinline muted=\"muted\"></video>\r\n\t\t\t\t\t\t\t\t\t<div class=\"btn-group\" role=\"group\" aria-label=\"video controls\" >\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" style=\"font-size: 15px\" (click)=\"toggleRemoteVideo(2)\">Toggle Video</button>\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" style=\"font-size: 15px\" (click)=\"toggleRemoteAudio(2)\">Toggle Audio</button>\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" style=\"font-size: 15px\" (click)=\"hangup(2)\" >Hangup</button>\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" style=\"font-size: 15px\" (click)=\"redial(2)\" >Redial</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-6\" style=\"border-style: groove;\">\r\n\t\t\t\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t<h5 class=\"panel-title\" id=\"remote-stream-name-3\">\r\n                    <span>3</span>\r\n\t\t\t\t\t\t\t\t\t</h5>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\" >\r\n\t\t\t\t\t\t\t\t\t<video class=\"rounded centered\" id=\"video-remote-3\" width= \"100%\" height=\"100%\" autoplay playsinline muted=\"muted\"></video>\r\n\t\t\t\t\t\t\t\t\t<div class=\"btn-group\" role=\"group\" aria-label=\"video controls\" >\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" style=\"font-size: 15px\" (click)=\"toggleRemoteVideo(3)\">Toggle Video</button>\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" style=\"font-size: 15px\" (click)=\"toggleRemoteAudio(3)\">Toggle Audio</button>\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" style=\"font-size: 15px\" (click)=\"hangup(3)\" >Hangup</button>\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" style=\"font-size: 15px\" (click)=\"redial(3)\" >Redial</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- Load s dynamically -->\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</body>\r\n</html>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: MesiboNotify, AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MesiboNotify", function () {
      return MesiboNotify;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MESIBO_STATUS_ONLINE = 1;
    var MESIBO_STATUS_CONNECTING = 6;
    var MESIBO_STATUS_CONNECTFAILURE = 7;
    var MESIBO_STATUS_SIGNOUT = 3;
    var MESIBO_STATUS_AUTHFAIL = 4;
    var MESIBO_CALLSTATUS_CHANNELUP = 0x30;
    var MESIBO_CALLSTATUS_COMPLETE = 0x40;
    var publisher;
    var streams = [];
    var MAX_STREAMS_COUNT = 4;

    var MesiboNotify = /*#__PURE__*/function () {
      function MesiboNotify() {
        _classCallCheck(this, MesiboNotify);

        // api: any;
        this.DEMO_GROUP_ID = 96760;
        this.DEMO_GROUP_NAME = 'group1';
        this.MESIBO_APP_ID = '8367';
        this.STREAM_SCREEN = 2;
        this.STREAM_CAMERA = 1; // this.api = api;

        this.Mesibo_OnParticipants = this.Mesibo_OnParticipants.bind(this);
        this.on_hangup = this.on_hangup.bind(this);
      }

      _createClass(MesiboNotify, [{
        key: "Mesibo_OnPermission",
        value: function Mesibo_OnPermission(on) {
          console.log('Mesibo_onPermission: ' + on); // show permission prompt
        }
      }, {
        key: "Mesibo_OnParticipantUpdated",
        value: function Mesibo_OnParticipantUpdated(allParticiapnts, participant) {
          console.log('------Mesibo_OnParticipantUpdated--------');
          console.log(participant);
        }
      }, {
        key: "Mesibo_OnConnectionStatus",
        value: function Mesibo_OnConnectionStatus(status) {
          console.log('Mesibo_OnConnectionStatus: ' + status);
          var s = document.getElementById('cstatus');

          if (!s) {
            return;
          }

          if (MESIBO_STATUS_ONLINE === status) {
            s.classList.replace('btn-danger', 'btn-success');
            s.innerText = publisher.getName() + ' is online';
            this.streamFromCamera();
            return;
          }

          s.classList.replace('btn-success', 'btn-danger');

          switch (status) {
            case MESIBO_STATUS_CONNECTING:
              s.innerText = 'Connecting';
              break;

            case MESIBO_STATUS_CONNECTFAILURE:
              s.innerText = 'Connection Failed';
              break;

            case MESIBO_STATUS_SIGNOUT:
              s.innerText = 'Signed out';
              break;

            case MESIBO_STATUS_AUTHFAIL:
              s.innerText = 'Disconnected: Bad Token or App ID';
              break;

            default:
              s.innerText = 'You are offline';
              break;
          }
        }
      }, {
        key: "Mesibo_OnParticipants",
        value: function Mesibo_OnParticipants(all, latest) {
          console.log('Mesibo_Onparticipants --- ');
          console.log(this);

          for (var i in latest) {
            if (i) {
              console.log('Mesibo_Onparticipants: ' + latest[i].getId());
              var p = latest[i];
              this.connectStream(p);
            }
          }
        }
      }, {
        key: "initStreams",
        value: function initStreams() {
          for (var i = 0; i < MAX_STREAMS_COUNT; i++) {
            streams[i] = null;
          }
        }
      }, {
        key: "connectStream",
        value: function connectStream(stream) {
          console.log('------connected streams--------');
          console.log(streams);

          for (var i = 0; i < streams.length; i++) {
            if (streams[i] == null) {
              streams[i] = stream;
              streams[i].element_id = 'video-remote-' + i;
              this.subscribe(streams[i]);
              return;
            }
          }
        }
      }, {
        key: "subscribe",
        value: function subscribe(p) {
          console.log('====> subscribe', p.getId(), p.element_id);
          p.call(null, p.element_id, this.on_stream, this.on_status);
        }
      }, {
        key: "streamFromCamera",
        value: function streamFromCamera() {
          console.log('streamFromCamera');
          var o = {};
          o.name = this.DEMO_GROUP_NAME;
          o.groupid = this.DEMO_GROUP_ID;
          o.source = this.STREAM_CAMERA;
          o.video = true;
          o.audio = true;
          console.log('local publisher', o, publisher, publisher.getName(), publisher.getId());
          publisher.call(o, 'video-publisher', this.on_stream, this.on_status);
        }
      }, {
        key: "streamFromScreen",
        value: function streamFromScreen() {
          console.log('streamFromScreen');
          var o = {};
          o.peer = 0;
          o.name = this.DEMO_GROUP_NAME;
          o.groupid = this.DEMO_GROUP_ID;
          o.source = this.STREAM_SCREEN;
          console.log('local publisher', o);
          publisher.call(o, 'video-publisher', this.on_stream, this.on_status);
        }
      }, {
        key: "on_stream",
        value: function on_stream(p) {
          console.log('on_stream');
          console.log('--------------------on_stream--------------------------');
          console.log(streams);
          console.log('-------------------------------------------------------'); // Local Stream

          if (p.isLocal()) {
            p.attach('video-publisher');
            return;
          } // Remote Stream


          console.log('===> on_stream', p.element_id, 'attach');
          p.attach(p.element_id);
        }
      }, {
        key: "on_status",
        value: function on_status(p, status, video) {
          console.log('---onStatus-----');
          console.log(status);
          console.log('on_status', p.getId(), p.getName(), 'local?', p.isLocal(), ' status: 0x' + status.toString(16), video);

          if (MESIBO_CALLSTATUS_CHANNELUP === status) {
            console.log(p.getName() + ' is connected');
          }

          if (MESIBO_CALLSTATUS_COMPLETE === status) {
            console.log(p.getName() + ' has disconnected');
            console.log(this); // this.on_hangup(p);
            // Hangup Code

            if (p.isLocal()) {
              return;
            }

            for (var i = 0; i < streams.length; i++) {
              if (streams[i].getId() === p.getId()) {
                streams[i] = null; // Free up slot

                return;
              }
            }
          }
        }
      }, {
        key: "on_hangup",
        value: function on_hangup(p) {
          console.log('on_hangup');

          if (p.isLocal()) {
            return;
          }

          for (var i = 0; i < streams.length; i++) {
            if (streams[i].getId() === p.getId()) {
              streams[i] = null; // Free up slot

              return;
            }
          }
        }
      }]);

      return MesiboNotify;
    }();

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'MesiboConf';
        this.DEMO_GROUP_ID = 96760;
        this.DEMO_GROUP_NAME = 'group1';
        this.MESIBO_APP_ID = '8367';
        this.demoUsers = [{
          token: 'ed463970cec2f712144b9b0b707d1a253a0603535925edd13ad49',
          address: '2306202001',
          name: 'Rohan'
        }, {
          token: '529194e2cad857b607081d2b48cefd99cf92a595e26acf0edd13ad4c',
          address: '2306202002',
          name: 'Jay'
        }, {
          token: 'd20fdf47aeb23c44b3e0ade0ca4abbce0a71b8942316eee13af73',
          address: 'doctor1',
          name: 'Doctor'
        }, {
          token: 'TOKEN_USER_3',
          address: 'ADDRESS_USER_3',
          name: 'User-3'
        }, {
          token: 'TOKEN_USER_4',
          address: 'ADDRESS_USER_4',
          name: 'User-4'
        }];
        this.live = null;
        this.publisher = null;
        this.streams = [];
        this.MAX_STREAMS_COUNT = 4;
        this.STREAM_CAMERA = 1;
        this.STREAM_SCREEN = 2;
      }

      _createClass(AppComponent, [{
        key: "login",
        value: function login(userIndex) {
          var selectedUser = this.demoUsers[userIndex];
          this.api = window['mesibo'];
          this.mesiboListener = new MesiboNotify();
          this.api.setAppName(this.MESIBO_APP_ID);
          this.api.setListener(this.mesiboListener);
          this.api.setCredentials(selectedUser.token);
          this.api.setDatabase('mesibo');
          this.api.start();
          this.mesiboListener.initStreams(); // Create group call object

          this.live = this.api.initGroupCall();
          console.log(this.live);
          this.live.setRoom(this.DEMO_GROUP_ID); // Create a local participant, Set Publisher name and address

          console.log('====>create participant', selectedUser.name, selectedUser.address);
          publisher = this.live.getLocalParticipant(selectedUser.name, selectedUser.address);
          document.getElementById('conference-area').style.display = 'flex';
          document.getElementById('login-options').style.display = 'none';
        }
      }, {
        key: "streamFromCamera",
        value: function streamFromCamera() {
          this.mesiboListener.streamFromCamera();
        }
      }, {
        key: "streamFromScreen",
        value: function streamFromScreen() {
          this.mesiboListener.streamFromScreen();
        }
      }, {
        key: "selfHangup",
        value: function selfHangup() {
          publisher.hangup();
        }
      }, {
        key: "toggleSelfVideo",
        value: function toggleSelfVideo() {
          publisher.toggleMute(true, false);
        }
      }, {
        key: "toggleSelfAudio",
        value: function toggleSelfAudio() {
          publisher.toggleMute(false, false);
        }
      }, {
        key: "toggleRemoteVideo",
        value: function toggleRemoteVideo(i) {
          var s = streams[i];

          if (s) {
            s.toggleMute(true, true);
          }
        }
      }, {
        key: "toggleRemoteAudio",
        value: function toggleRemoteAudio(i) {
          var s = streams[i];

          if (s) {
            s.toggleMute(false, true);
          }
        }
      }, {
        key: "hangup",
        value: function hangup(i) {
          var s = streams[i];

          if (s) {
            s.hangup();
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\RohanThakare\Work\MesiboConf\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map