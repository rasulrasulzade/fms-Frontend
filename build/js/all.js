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

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  $(document).ready(function () {
    var _$$slick;

    (0, _navbar2.default)();

    $('.slider-area').slick((_$$slick = {
      dots: true,
      slidesToShow: true
    }, _defineProperty(_$$slick, 'slidesToShow', 7), _defineProperty(_$$slick, 'slidesToScroll', 1), _defineProperty(_$$slick, 'autoplay', true), _defineProperty(_$$slick, 'speed', 600), _defineProperty(_$$slick, 'arrows', true), _defineProperty(_$$slick, 'centerMode', true), _defineProperty(_$$slick, 'prevArrow', '<button class="slide-arrow prev-arrow"><i class="fa fa-chevron-left"></i></button>'), _defineProperty(_$$slick, 'nextArrow', '<button class="slide-arrow next-arrow"><i class="fa fa-chevron-right"></i></button>'), _$$slick));
    $(".slick-dots li button").text("");
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
		// let addWidth = () => {
		// 	document.querySelector(".navbar--logo").classList.add("navLogoSmall");
		// }
		// let delWidth = () => {
		// 	document.querySelector(".navbar--logo").classList.remove("navLogoSmall");
		// }

		// let searchInput=document.querySelector(".b-search-input");

		// searchInput.onfocus=function() {addWidth();}
		// searchInput.onfocusout=function() {delWidth();}  
		$(".collapse--box__search").click(function () {
			$("i.searchIcon").toggleClass("iconNone");
			$("i.timesIcon").toggleClass("iconBlock");

			$(".searchBox").slideToggle("fast");
		});
	};
	exports.default = navbar;
	module.exports = exports["default"];
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxtYWluXFxtYWluLmpzIiwic3JjXFxqc1xcbWFpblxcbmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0VBLElBQUEsUUFBQSxFQUFBLEtBQUEsQ0FBa0IsWUFBVTtBQUFBLFFBQUEsUUFBQTs7QUFFM0IsS0FBQSxHQUFBLFNBQUEsT0FBQTs7QUFFQyxNQUFBLGNBQUEsRUFBQSxLQUFBLEVBQUEsV0FBQTtBQUNJLFlBREosSUFBQTtBQUVJLG9CQUZvQjtBQUF4QixLQUFBLEVBQUEsZ0JBQUEsUUFBQSxFQUFBLGNBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxnQkFBQSxRQUFBLEVBQUEsZ0JBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxnQkFBQSxRQUFBLEVBQUEsVUFBQSxFQUFBLElBQUEsQ0FBQSxFQUFBLGdCQUFBLFFBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxDQUFBLEVBQUEsZ0JBQUEsUUFBQSxFQUFBLFFBQUEsRUFBQSxJQUFBLENBQUEsRUFBQSxnQkFBQSxRQUFBLEVBQUEsWUFBQSxFQUFBLElBQUEsQ0FBQSxFQUFBLGdCQUFBLFFBQUEsRUFBQSxXQUFBLEVBQUEsb0ZBQUEsQ0FBQSxFQUFBLGdCQUFBLFFBQUEsRUFBQSxXQUFBLEVBQUEscUZBQUEsQ0FBQSxFQUFBLFFBQUE7QUFZRSxNQUFBLHVCQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUE7QUFoQkosR0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkEsS0FBTSxTQUFTLFNBQVQsTUFBUyxHQUFLO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBQSx3QkFBQSxFQUFBLEtBQUEsQ0FBa0MsWUFBVTtBQUMzQyxLQUFBLGNBQUEsRUFBQSxXQUFBLENBQUEsVUFBQTtBQUNBLEtBQUEsYUFBQSxFQUFBLFdBQUEsQ0FBQSxXQUFBOztBQUVBLEtBQUEsWUFBQSxFQUFBLFdBQUEsQ0FBQSxNQUFBO0FBSkQsR0FBQTtBQVpELEVBQUE7bUJBbUJBLE0iLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnXHJcbmltcG9ydCBuYXZiYXIgZnJvbSAnLi9uYXZiYXInXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblxyXG4gbmF2YmFyKCk7XHJcblxyXG4gICQoJy5zbGlkZXItYXJlYScpLnNsaWNrKHtcclxuICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgc2xpZGVzVG9TaG93OiB0cnVlLFxyXG4gICAgICBzbGlkZXNUb1Nob3c6IDcsXHJcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgc3BlZWQ6IDYwMCxcclxuICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWRlLWFycm93IHByZXYtYXJyb3dcIj48aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tbGVmdFwiPjwvaT48L2J1dHRvbj4nLFxyXG4gICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWRlLWFycm93IG5leHQtYXJyb3dcIj48aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+PC9idXR0b24+J1xyXG4gICAgfSk7XHJcbiAgICAkKFwiLnNsaWNrLWRvdHMgbGkgYnV0dG9uXCIpLnRleHQoXCJcIik7XHJcbn0pOyIsImNvbnN0IG5hdmJhciA9ICgpPT4ge1xyXG5cdC8vIGxldCBhZGRXaWR0aCA9ICgpID0+IHtcclxuXHQvLyBcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyLS1sb2dvXCIpLmNsYXNzTGlzdC5hZGQoXCJuYXZMb2dvU21hbGxcIik7XHJcblx0Ly8gfVxyXG5cdC8vIGxldCBkZWxXaWR0aCA9ICgpID0+IHtcclxuXHQvLyBcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyLS1sb2dvXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZMb2dvU21hbGxcIik7XHJcblx0Ly8gfVxyXG5cclxuXHQvLyBsZXQgc2VhcmNoSW5wdXQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iLXNlYXJjaC1pbnB1dFwiKTtcclxuXHRcdFxyXG5cdC8vIHNlYXJjaElucHV0Lm9uZm9jdXM9ZnVuY3Rpb24oKSB7YWRkV2lkdGgoKTt9XHJcblx0Ly8gc2VhcmNoSW5wdXQub25mb2N1c291dD1mdW5jdGlvbigpIHtkZWxXaWR0aCgpO30gIFxyXG5cdCQoXCIuY29sbGFwc2UtLWJveF9fc2VhcmNoXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHQkKFwiaS5zZWFyY2hJY29uXCIpLnRvZ2dsZUNsYXNzKFwiaWNvbk5vbmVcIik7XHJcblx0XHQkKFwiaS50aW1lc0ljb25cIikudG9nZ2xlQ2xhc3MoXCJpY29uQmxvY2tcIik7XHJcblxyXG5cdFx0JChcIi5zZWFyY2hCb3hcIikuc2xpZGVUb2dnbGUoXCJmYXN0XCIpO1xyXG5cdH0pO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5hdmJhclxyXG4iXX0=
