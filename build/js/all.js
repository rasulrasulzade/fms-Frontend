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
    }, _defineProperty(_$$slick, 'slidesToShow', 7), _defineProperty(_$$slick, 'slidesToScroll', 1), _defineProperty(_$$slick, 'autoplay', true), _defineProperty(_$$slick, 'speed', 600), _defineProperty(_$$slick, 'arrows', true), _defineProperty(_$$slick, 'centerMode', true), _defineProperty(_$$slick, 'prevArrow', '<button class="slide-arrow prev-arrow"><i class="fa fa-chevron-left"></i></button>'), _defineProperty(_$$slick, 'nextArrow', '<button class="slide-arrow next-arrow"><i class="fa fa-chevron-right"></i></button>'), _defineProperty(_$$slick, 'responsive', [{
      breakpoint: 992,
      settings: {
        slidesToShow: 5
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 400,
      settings: {
        slidesToShow: 1
      }
    }]), _$$slick));
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

		$(".collapse-box__search").click(function () {
			$("i.searchIcon").toggleClass("iconNone");
			$("i.timesIcon").toggleClass("iconBlock");

			$(".searchBox").slideToggle("fast");
			$(".searchInput").focus();
		});
	};
	exports.default = navbar;
	module.exports = exports["default"];
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxtYWluXFxtYWluLmpzIiwic3JjXFxqc1xcbWFpblxcbmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0VBLElBQUEsUUFBQSxFQUFBLEtBQUEsQ0FBa0IsWUFBVTtBQUFBLFFBQUEsUUFBQTs7QUFFM0IsS0FBQSxHQUFBLFNBQUEsT0FBQTs7QUFFQyxNQUFBLGNBQUEsRUFBQSxLQUFBLEVBQUEsV0FBQTtBQUNJLFlBREosSUFBQTtBQUVJLG9CQUZvQjtBQUF4QixLQUFBLEVBQUEsZ0JBQUEsUUFBQSxFQUFBLGNBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxnQkFBQSxRQUFBLEVBQUEsZ0JBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxnQkFBQSxRQUFBLEVBQUEsVUFBQSxFQUFBLElBQUEsQ0FBQSxFQUFBLGdCQUFBLFFBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxDQUFBLEVBQUEsZ0JBQUEsUUFBQSxFQUFBLFFBQUEsRUFBQSxJQUFBLENBQUEsRUFBQSxnQkFBQSxRQUFBLEVBQUEsWUFBQSxFQUFBLElBQUEsQ0FBQSxFQUFBLGdCQUFBLFFBQUEsRUFBQSxXQUFBLEVBQUEsb0ZBQUEsQ0FBQSxFQUFBLGdCQUFBLFFBQUEsRUFBQSxXQUFBLEVBQUEscUZBQUEsQ0FBQSxFQUFBLGdCQUFBLFFBQUEsRUFBQSxZQUFBLEVBV2dCLENBQ1Y7QUFDRSxrQkFERixHQUFBO0FBRUUsZ0JBQVU7QUFDUixzQkFBYztBQUROO0FBRlosS0FEVSxFQU9WO0FBQ0Usa0JBREYsR0FBQTtBQUVFLGdCQUFVO0FBQ1Isc0JBQWM7QUFETjtBQUZaLEtBUFUsRUFhVjtBQUNFLGtCQURGLEdBQUE7QUFFRSxnQkFBVTtBQUNSLHNCQUFjO0FBRE47QUFGWixLQWJVLENBWGhCLENBQUEsRUFBQSxRQUFBO0FBZ0NFLE1BQUEsdUJBQUEsRUFBQSxJQUFBLENBQUEsRUFBQTtBQXBDSixHQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQSxLQUFNLFNBQVMsU0FBVCxNQUFTLEdBQUs7O0FBRW5CLElBQUEsdUJBQUEsRUFBQSxLQUFBLENBQWlDLFlBQVU7QUFDMUMsS0FBQSxjQUFBLEVBQUEsV0FBQSxDQUFBLFVBQUE7QUFDQSxLQUFBLGFBQUEsRUFBQSxXQUFBLENBQUEsV0FBQTs7QUFFQSxLQUFBLFlBQUEsRUFBQSxXQUFBLENBQUEsTUFBQTtBQUNBLEtBQUEsY0FBQSxFQUFBLEtBQUE7QUFMRCxHQUFBO0FBRkQsRUFBQTttQkFXQSxNIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0J1xyXG5pbXBvcnQgbmF2YmFyIGZyb20gJy4vbmF2YmFyJ1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuIG5hdmJhcigpO1xyXG5cclxuICAkKCcuc2xpZGVyLWFyZWEnKS5zbGljayh7XHJcbiAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgIHNsaWRlc1RvU2hvdzogdHJ1ZSxcclxuICAgICAgc2xpZGVzVG9TaG93OiA3LFxyXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgIHNwZWVkOiA2MDAsXHJcbiAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWRlLWFycm93IHByZXYtYXJyb3dcIj48aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tbGVmdFwiPjwvaT48L2J1dHRvbj4nLFxyXG4gICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpZGUtYXJyb3cgbmV4dC1hcnJvd1wiPjxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48L2J1dHRvbj4nLFxyXG4gICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYnJlYWtwb2ludDogOTkyLFxyXG4gICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDQwMCxcclxuICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSk7XHJcbiAgICAkKFwiLnNsaWNrLWRvdHMgbGkgYnV0dG9uXCIpLnRleHQoXCJcIik7XHJcbn0pOyIsImNvbnN0IG5hdmJhciA9ICgpPT4ge1xyXG5cdFxyXG5cdCQoXCIuY29sbGFwc2UtYm94X19zZWFyY2hcIikuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdCQoXCJpLnNlYXJjaEljb25cIikudG9nZ2xlQ2xhc3MoXCJpY29uTm9uZVwiKTtcclxuXHRcdCQoXCJpLnRpbWVzSWNvblwiKS50b2dnbGVDbGFzcyhcImljb25CbG9ja1wiKTtcclxuXHJcblx0XHQkKFwiLnNlYXJjaEJveFwiKS5zbGlkZVRvZ2dsZShcImZhc3RcIik7XHJcblx0XHQkKFwiLnNlYXJjaElucHV0XCIpLmZvY3VzKCk7XHJcblx0fSk7XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5hdmJhclxyXG4iXX0=
