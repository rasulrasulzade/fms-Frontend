(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['./navbar', './services'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('./navbar'), require('./services'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.navbar, global.services);
    global.main = mod.exports;
  }
})(undefined, function (_navbar, _services) {
  'use strict';

  var _navbar2 = _interopRequireDefault(_navbar);

  var _services2 = _interopRequireDefault(_services);

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

    (0, _services2.default)();

    $('.slider-area').slick((_$$slick = {
      dots: true,
      slidesToShow: true
    }, _defineProperty(_$$slick, 'slidesToShow', 7), _defineProperty(_$$slick, 'slidesToScroll', 1), _defineProperty(_$$slick, 'autoplay', true), _defineProperty(_$$slick, 'speed', 600), _defineProperty(_$$slick, 'arrows', true), _defineProperty(_$$slick, 'prevArrow', '<button class="slide-arrow prev-arrow"><i class="fa fa-chevron-left"></i></button>'), _defineProperty(_$$slick, 'nextArrow', '<button class="slide-arrow next-arrow"><i class="fa fa-chevron-right"></i></button>'), _defineProperty(_$$slick, 'responsive', [{
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

},{"./navbar":2,"./services":3}],2:[function(require,module,exports){
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
			$("i.searchIcon").toggleClass("None");
			$("i.timesIcon").toggleClass("Block");

			$(".searchBox").slideToggle("fast");
			$(".searchInput").focus();
		});
	};
	// const closeNav = ()=> {


	// 	const nav = $('.b-nav')
	// 	nav.removeClass('b-nav--active')

	// }
	var documentListener = function documentListener() {
		var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		$(document).on('click touchstart', function (e) {
			var _this = $(e.target);

			// if not self clicked
			if (!_this.closest('.searchBox').length && !_this.closest('.collapse-box__search').length) {
				// closeNav()
				$(".searchBox").fadeOut();
				$("i.timesIcon").removeClass("Block");
				$("i.searchIcon").removeClass("None");
			}
			// if(!_this.closest('.searchInput').length && !_this.closest('.searchBox').length){
			// 	$('.shopping-card').removeClass('shopping-card--active')
			// 	$('.searchBox').hide()
			// }
		});
	};
	documentListener();

	exports.default = navbar;
	module.exports = exports["default"];
});

},{}],3:[function(require,module,exports){
'use strict';

(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['module', 'exports'], factory);
	} else if (typeof exports !== "undefined") {
		factory(module, exports);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod, mod.exports);
		global.services = mod.exports;
	}
})(undefined, function (module, exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var servicFunc = function servicFunc() {

		var headerLength = $('.list-item__header').length;

		var _loop = function _loop(i) {
			// console.log(i);
			$('.list-item__header:eq(' + i + ')').click(function () {
				$('.list-item__text:eq(' + i + ')').slideToggle('Block');
				$('.list-item:eq(' + i + ')').toggleClass('list-item--active');
				$('.list-item__plus:eq(' + i + ')').toggleClass('None');
				$('.list-item__times:eq(' + i + ')').toggleClass('Block');
			});
		};

		for (var i = 0; i < headerLength; i++) {
			_loop(i);
		}
		// let listItemLength=$('.list-item').length;
		// console.log(listItemLength);
	};

	exports.default = servicFunc;
	module.exports = exports['default'];
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxtYWluXFxtYWluLmpzIiwic3JjXFxqc1xcbWFpblxcbmF2YmFyLmpzIiwic3JjXFxqc1xcbWFpblxcc2VydmljZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNHQSxJQUFBLFFBQUEsRUFBQSxLQUFBLENBQWtCLFlBQVU7QUFBQSxRQUFBLFFBQUE7O0FBRTNCLEtBQUEsR0FBQSxTQUFBLE9BQUE7O0FBRUEsS0FBQSxHQUFBLFdBQUEsT0FBQTs7QUFFQyxNQUFBLGNBQUEsRUFBQSxLQUFBLEVBQUEsV0FBQTtBQUNJLFlBREosSUFBQTtBQUVJLG9CQUZvQjtBQUF4QixLQUFBLEVBQUEsZ0JBQUEsUUFBQSxFQUFBLGNBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxnQkFBQSxRQUFBLEVBQUEsZ0JBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxnQkFBQSxRQUFBLEVBQUEsVUFBQSxFQUFBLElBQUEsQ0FBQSxFQUFBLGdCQUFBLFFBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxDQUFBLEVBQUEsZ0JBQUEsUUFBQSxFQUFBLFFBQUEsRUFBQSxJQUFBLENBQUEsRUFBQSxnQkFBQSxRQUFBLEVBQUEsV0FBQSxFQUFBLG9GQUFBLENBQUEsRUFBQSxnQkFBQSxRQUFBLEVBQUEsV0FBQSxFQUFBLHFGQUFBLENBQUEsRUFBQSxnQkFBQSxRQUFBLEVBQUEsWUFBQSxFQVdnQixDQUNWO0FBQ0Usa0JBREYsR0FBQTtBQUVFLGdCQUFVO0FBQ1Isc0JBQWM7QUFETjtBQUZaLEtBRFUsRUFPVjtBQUNFLGtCQURGLEdBQUE7QUFFRSxnQkFBVTtBQUNSLHNCQUFjO0FBRE47QUFGWixLQVBVLEVBYVY7QUFDRSxrQkFERixHQUFBO0FBRUUsZ0JBQVU7QUFDUixzQkFBYztBQUROO0FBRlosS0FiVSxDQVhoQixDQUFBLEVBQUEsUUFBQTtBQWdDRSxNQUFBLHVCQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUE7QUF0Q0osR0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEEsS0FBTSxTQUFTLFNBQVQsTUFBUyxHQUFLOztBQUVuQixJQUFBLHVCQUFBLEVBQUEsS0FBQSxDQUFpQyxZQUFVO0FBQzFDLEtBQUEsY0FBQSxFQUFBLFdBQUEsQ0FBQSxNQUFBO0FBQ0EsS0FBQSxhQUFBLEVBQUEsV0FBQSxDQUFBLE9BQUE7O0FBRUEsS0FBQSxZQUFBLEVBQUEsV0FBQSxDQUFBLE1BQUE7QUFDQSxLQUFBLGNBQUEsRUFBQSxLQUFBO0FBTEQsR0FBQTtBQUZELEVBQUE7QUFVQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBLEtBQU0sbUJBQW1CLFNBQW5CLGdCQUFtQixHQUFhO0FBQUEsTUFBWixLQUFZLFVBQUEsTUFBQSxHQUFBLENBQUEsSUFBQSxVQUFBLENBQUEsTUFBQSxTQUFBLEdBQUEsVUFBQSxDQUFBLENBQUEsR0FBYixJQUFhOztBQUNyQyxJQUFBLFFBQUEsRUFBQSxFQUFBLENBQUEsa0JBQUEsRUFBbUMsVUFBQSxDQUFBLEVBQUs7QUFDdkMsT0FBTSxRQUFRLEVBQUUsRUFBaEIsTUFBYyxDQUFkOztBQUdBO0FBQ0EsT0FBRyxDQUFDLE1BQUEsT0FBQSxDQUFBLFlBQUEsRUFBRCxNQUFBLElBQXVDLENBQUMsTUFBQSxPQUFBLENBQUEsdUJBQUEsRUFBM0MsTUFBQSxFQUF5RjtBQUN4RjtBQUNBLE1BQUEsWUFBQSxFQUFBLE9BQUE7QUFDQSxNQUFBLGFBQUEsRUFBQSxXQUFBLENBQUEsT0FBQTtBQUNBLE1BQUEsY0FBQSxFQUFBLFdBQUEsQ0FBQSxNQUFBO0FBRUE7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQWZELEdBQUE7QUFERCxFQUFBO0FBb0JBOzttQkFFQSxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBLEtBQU0sYUFBYSxTQUFiLFVBQWEsR0FBSzs7QUFFdkIsTUFBSSxlQUFhLEVBQUEsb0JBQUEsRUFBakIsTUFBQTs7QUFGdUIsTUFBQSxRQUFBLFNBQUEsS0FBQSxDQUFBLENBQUEsRUFBQTtBQUl0QjtBQUNBLEtBQUUsMkJBQUEsQ0FBQSxHQUFGLEdBQUEsRUFBQSxLQUFBLENBQXdDLFlBQVU7QUFDakQsTUFBRSx5QkFBQSxDQUFBLEdBQUYsR0FBQSxFQUFBLFdBQUEsQ0FBQSxPQUFBO0FBQ0EsTUFBRSxtQkFBQSxDQUFBLEdBQUYsR0FBQSxFQUFBLFdBQUEsQ0FBQSxtQkFBQTtBQUNBLE1BQUUseUJBQUEsQ0FBQSxHQUFGLEdBQUEsRUFBQSxXQUFBLENBQUEsTUFBQTtBQUNBLE1BQUUsMEJBQUEsQ0FBQSxHQUFGLEdBQUEsRUFBQSxXQUFBLENBQUEsT0FBQTtBQUpELElBQUE7QUFMc0IsR0FBQTs7QUFHdkIsT0FBSyxJQUFJLElBQVQsQ0FBQSxFQUFjLElBQWQsWUFBQSxFQUFBLEdBQUEsRUFBbUM7QUFBQSxTQUExQixDQUEwQjtBQVNsQztBQUNEO0FBQ0E7QUFkRCxFQUFBOzttQkFpQkEsVSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCdcclxuaW1wb3J0IG5hdmJhciBmcm9tICcuL25hdmJhcidcclxuaW1wb3J0IHNlcnZpY0Z1bmMgZnJvbSAnLi9zZXJ2aWNlcydcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcbiBuYXZiYXIoKTtcclxuXHJcbiBzZXJ2aWNGdW5jKCk7XHJcblxyXG4gICQoJy5zbGlkZXItYXJlYScpLnNsaWNrKHtcclxuICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgc2xpZGVzVG9TaG93OiB0cnVlLFxyXG4gICAgICBzbGlkZXNUb1Nob3c6IDcsXHJcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgc3BlZWQ6IDYwMCxcclxuICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAvLyBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpZGUtYXJyb3cgcHJldi1hcnJvd1wiPjxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPjwvYnV0dG9uPicsXHJcbiAgICAgIG5leHRBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGlkZS1hcnJvdyBuZXh0LWFycm93XCI+PGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPjwvYnV0dG9uPicsXHJcbiAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBicmVha3BvaW50OiA5OTIsXHJcbiAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogM1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYnJlYWtwb2ludDogNDAwLFxyXG4gICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9KTtcclxuICAgICQoXCIuc2xpY2stZG90cyBsaSBidXR0b25cIikudGV4dChcIlwiKTtcclxufSk7IiwiY29uc3QgbmF2YmFyID0gKCk9PiB7XHJcblx0XHJcblx0JChcIi5jb2xsYXBzZS1ib3hfX3NlYXJjaFwiKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0JChcImkuc2VhcmNoSWNvblwiKS50b2dnbGVDbGFzcyhcIk5vbmVcIik7XHJcblx0XHQkKFwiaS50aW1lc0ljb25cIikudG9nZ2xlQ2xhc3MoXCJCbG9ja1wiKTtcclxuXHJcblx0XHQkKFwiLnNlYXJjaEJveFwiKS5zbGlkZVRvZ2dsZShcImZhc3RcIik7XHJcblx0XHQkKFwiLnNlYXJjaElucHV0XCIpLmZvY3VzKCk7XHJcblx0fSk7XHJcbn1cclxuLy8gY29uc3QgY2xvc2VOYXYgPSAoKT0+IHtcclxuXHJcblx0XHJcbi8vIFx0Y29uc3QgbmF2ID0gJCgnLmItbmF2JylcclxuLy8gXHRuYXYucmVtb3ZlQ2xhc3MoJ2ItbmF2LS1hY3RpdmUnKVxyXG5cdFxyXG4vLyB9XHJcbmNvbnN0IGRvY3VtZW50TGlzdGVuZXIgPSAoY2I9bnVsbCkgPT4ge1xyXG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgKGUpPT57XHJcblx0XHRjb25zdCBfdGhpcyA9ICQoZS50YXJnZXQpXHJcblx0XHRcclxuXHJcblx0XHQvLyBpZiBub3Qgc2VsZiBjbGlja2VkXHJcblx0XHRpZighX3RoaXMuY2xvc2VzdCgnLnNlYXJjaEJveCcpLmxlbmd0aCAmJiAhX3RoaXMuY2xvc2VzdCgnLmNvbGxhcHNlLWJveF9fc2VhcmNoJykubGVuZ3RoKXtcclxuXHRcdFx0Ly8gY2xvc2VOYXYoKVxyXG5cdFx0XHQkKFwiLnNlYXJjaEJveFwiKS5mYWRlT3V0KCk7XHJcblx0XHRcdCQoXCJpLnRpbWVzSWNvblwiKS5yZW1vdmVDbGFzcyhcIkJsb2NrXCIpO1xyXG5cdFx0XHQkKFwiaS5zZWFyY2hJY29uXCIpLnJlbW92ZUNsYXNzKFwiTm9uZVwiKTtcclxuXHJcblx0XHR9XHJcblx0XHQvLyBpZighX3RoaXMuY2xvc2VzdCgnLnNlYXJjaElucHV0JykubGVuZ3RoICYmICFfdGhpcy5jbG9zZXN0KCcuc2VhcmNoQm94JykubGVuZ3RoKXtcclxuXHRcdC8vIFx0JCgnLnNob3BwaW5nLWNhcmQnKS5yZW1vdmVDbGFzcygnc2hvcHBpbmctY2FyZC0tYWN0aXZlJylcclxuXHRcdC8vIFx0JCgnLnNlYXJjaEJveCcpLmhpZGUoKVxyXG5cdFx0Ly8gfVxyXG5cdFx0XHJcblx0fSlcclxufVxyXG5kb2N1bWVudExpc3RlbmVyKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuYXZiYXJcclxuIiwiY29uc3Qgc2VydmljRnVuYyA9ICgpPT4ge1xyXG5cclxuXHRsZXQgaGVhZGVyTGVuZ3RoPSQoJy5saXN0LWl0ZW1fX2hlYWRlcicpLmxlbmd0aDtcclxuXHRmb3IgKGxldCBpPTA7IGk8aGVhZGVyTGVuZ3RoOyBpKyspIHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKGkpO1xyXG5cdFx0JCgnLmxpc3QtaXRlbV9faGVhZGVyOmVxKCcraSsnKScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHRcdCQoJy5saXN0LWl0ZW1fX3RleHQ6ZXEoJytpKycpJykuc2xpZGVUb2dnbGUoJ0Jsb2NrJyk7XHJcblx0XHRcdCQoJy5saXN0LWl0ZW06ZXEoJytpKycpJykudG9nZ2xlQ2xhc3MoJ2xpc3QtaXRlbS0tYWN0aXZlJyk7XHJcblx0XHRcdCQoJy5saXN0LWl0ZW1fX3BsdXM6ZXEoJytpKycpJykudG9nZ2xlQ2xhc3MoJ05vbmUnKTtcclxuXHRcdFx0JCgnLmxpc3QtaXRlbV9fdGltZXM6ZXEoJytpKycpJykudG9nZ2xlQ2xhc3MoJ0Jsb2NrJyk7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdH1cclxuXHQvLyBsZXQgbGlzdEl0ZW1MZW5ndGg9JCgnLmxpc3QtaXRlbScpLmxlbmd0aDtcclxuXHQvLyBjb25zb2xlLmxvZyhsaXN0SXRlbUxlbmd0aCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlcnZpY0Z1bmMiXX0=
