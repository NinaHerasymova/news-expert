"use strict";

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
  /******/
})(
/************************************************************************/

/******/
{
  /***/
  "./src/js/index.js":
  /*!*************************!*\
    !*** ./src/js/index.js ***!
    \*************************/

  /*! no static exports found */

  /***/
  function srcJsIndexJs(module, exports) {
    var block = document.getElementById('block');
    var sidebar = document.getElementById('sidebar-news');
    var showMore = document.getElementById('showMore');
    var showMoreValue = document.getElementById('showMoreValue');
    var pageCounter = 2;

    var showNews = function showNews(data, root) {
      var _iterator = _createForOfIteratorHelper(data),
          _step;

      try {
        var _loop = function _loop() {
          var i = _step.value;
          var item = document.createElement('div');
          var description = document.createElement('div');
          var title = document.createElement('h4');
          var link = document.createElement('a');
          var subData = document.createElement('div');
          var date = document.createElement('span');
          var author = document.createElement('span');
          var arrow = document.createElement('p');
          var category = document.createElement('span');

          if (root === block) {
            fetch("https://renemorozowich.com/wp-json/wp/v2/media/".concat(i.featured_media)).then(function (response) {
              return response.json();
            }).then(function (data) {
              item.style.backgroundImage = "url(".concat(data.guid.rendered, ")");
            });
          }

          fetch("https://renemorozowich.com/wp-json/wp/v2/categories/".concat(i.categories[0])).then(function (response) {
            return response.json();
          }).then(function (data) {
            category.className = 'category';
            category.innerText = data.name;
          });
          item.className = 'item';
          link.href = i.link;
          link.innerText = i.title.rendered;
          title.appendChild(link);
          subData.className = "subData";
          arrow.className = 'arrow';
          date.innerText = i.date.substring(0, 10);
          author.innerText = 'Evgeny Tretyak';
          description.className = 'description';
          subData.appendChild(date);
          subData.appendChild(arrow);
          subData.appendChild(author);
          description.appendChild(title);
          description.appendChild(subData);
          item.appendChild(category);
          item.appendChild(description);
          root.appendChild(item);
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    };

    fetch('https://renemorozowich.com/wp-json/wp/v2/posts').then(function (response) {
      return response.json();
    }).then(function (data) {
      showNews(data, block);
    });
    fetch('https://renemorozowich.com/wp-json/wp/v2/posts?categories=33').then(function (response) {
      return response.json();
    }).then(function (data) {
      showNews(data, sidebar);
    });

    var loadPosts = function loadPosts() {
      showMoreValue.innerText = "Loading";
      fetch("https://renemorozowich.com/wp-json/wp/v2/posts?page=".concat(pageCounter)).then(function (response) {
        if (response.status === 200) {
          return response.json();
        } else {
          alert('It is the last page!');
        }
      }).then(function (data) {
        showNews(data, block);
        showMoreValue.innerText = "Show more";
      });
      pageCounter++;
    };

    showMore.addEventListener('click', loadPosts);
    /***/
  }
  /******/

});
//# sourceMappingURL=index.js.map
