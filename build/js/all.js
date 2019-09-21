(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['./navbar'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('./navbar'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.navbar);
    global.main = mod.exports;
  }
})(undefined, function (_navbar) {
  'use strict';

  var _navbar2 = _interopRequireDefault(_navbar);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  $(document).ready(function () {

    (0, _navbar2.default)();

    // $(".grp--control").click(function(){
    //   $(".grp--control").removeClass("grp--control--active");
    //   $(this).addClass("grp--control--active");
    // });
  });
});

},{"./navbar":2}],2:[function(require,module,exports){
"use strict";

(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(["module", "exports"], factory);
	} else if (typeof exports !== "undefined") {
		factory(module, exports);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod, mod.exports);
		global.navbar = mod.exports;
	}
})(undefined, function (module, exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var navbar = function navbar() {
		var logoWidth = function logoWidth() {
			console.log("HELLO");
		};

		// let searchInput=document.querySelector(".b-search-input");
		// let inputWidth=$(".b-search-input").attr("width");

		// searchInput.focus(logoWidth());

		// if (inputWidth=="100px") {
		// 	console.log("it is working!!!");
		// }
	};
	exports.default = navbar;
	module.exports = exports["default"];
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxtYWluXFxtYWluLmpzIiwic3JjXFxqc1xcbWFpblxcbmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0VBLElBQUEsUUFBQSxFQUFBLEtBQUEsQ0FBa0IsWUFBVTs7QUFFM0IsS0FBQSxHQUFBLFNBQUEsT0FBQTs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQVBBLEdBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBLEtBQU0sU0FBUyxTQUFULE1BQVMsR0FBSztBQUNuQixNQUFJLFlBQVcsU0FBWCxTQUFXLEdBQU07QUFDcEIsV0FBQSxHQUFBLENBQUEsT0FBQTtBQURELEdBQUE7O0FBSUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFaRCxFQUFBO21CQW1CQSxNIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0J1xyXG5pbXBvcnQgbmF2YmFyIGZyb20gJy4vbmF2YmFyJ1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuIG5hdmJhcigpO1xyXG5cclxuLy8gJChcIi5ncnAtLWNvbnRyb2xcIikuY2xpY2soZnVuY3Rpb24oKXtcclxuLy8gICAkKFwiLmdycC0tY29udHJvbFwiKS5yZW1vdmVDbGFzcyhcImdycC0tY29udHJvbC0tYWN0aXZlXCIpO1xyXG4vLyAgICQodGhpcykuYWRkQ2xhc3MoXCJncnAtLWNvbnRyb2wtLWFjdGl2ZVwiKTtcclxuLy8gfSk7XHJcblxyXG59KTsiLCJjb25zdCBuYXZiYXIgPSAoKT0+IHtcclxuXHRsZXQgbG9nb1dpZHRoID0oKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhcIkhFTExPXCIpO1xyXG5cdH1cclxuXHJcblx0Ly8gbGV0IHNlYXJjaElucHV0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYi1zZWFyY2gtaW5wdXRcIik7XHJcblx0Ly8gbGV0IGlucHV0V2lkdGg9JChcIi5iLXNlYXJjaC1pbnB1dFwiKS5hdHRyKFwid2lkdGhcIik7XHJcblx0XHJcblx0Ly8gc2VhcmNoSW5wdXQuZm9jdXMobG9nb1dpZHRoKCkpO1xyXG5cclxuXHQvLyBpZiAoaW5wdXRXaWR0aD09XCIxMDBweFwiKSB7XHJcblx0Ly8gXHRjb25zb2xlLmxvZyhcIml0IGlzIHdvcmtpbmchISFcIik7XHJcblx0Ly8gfVxyXG5cdFxyXG5cclxuXHRcclxuXHRcclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmF2YmFyXHJcbiJdfQ==
