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
				// $('.list-item__plus:eq('+i+')').toggleClass('None');
				// $('.list-item__times:eq('+i+')').toggleClass('Block');
				$('.list-item__plus:eq(' + i + ')').toggleClass('plus-times');
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxtYWluXFxtYWluLmpzIiwic3JjXFxqc1xcbWFpblxcbmF2YmFyLmpzIiwic3JjXFxqc1xcbWFpblxcc2VydmljZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNHQSxJQUFBLFFBQUEsRUFBQSxLQUFBLENBQWtCLFlBQVU7QUFBQSxRQUFBLFFBQUE7O0FBRTNCLEtBQUEsR0FBQSxTQUFBLE9BQUE7O0FBRUEsS0FBQSxHQUFBLFdBQUEsT0FBQTs7QUFFQyxNQUFBLGNBQUEsRUFBQSxLQUFBLEVBQUEsV0FBQTtBQUNJLFlBREosSUFBQTtBQUVJLG9CQUZvQjtBQUF4QixLQUFBLEVBQUEsZ0JBQUEsUUFBQSxFQUFBLGNBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxnQkFBQSxRQUFBLEVBQUEsZ0JBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxnQkFBQSxRQUFBLEVBQUEsVUFBQSxFQUFBLElBQUEsQ0FBQSxFQUFBLGdCQUFBLFFBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxDQUFBLEVBQUEsZ0JBQUEsUUFBQSxFQUFBLFFBQUEsRUFBQSxJQUFBLENBQUEsRUFBQSxnQkFBQSxRQUFBLEVBQUEsV0FBQSxFQUFBLG9GQUFBLENBQUEsRUFBQSxnQkFBQSxRQUFBLEVBQUEsV0FBQSxFQUFBLHFGQUFBLENBQUEsRUFBQSxnQkFBQSxRQUFBLEVBQUEsWUFBQSxFQVdnQixDQUNWO0FBQ0Usa0JBREYsR0FBQTtBQUVFLGdCQUFVO0FBQ1Isc0JBQWM7QUFETjtBQUZaLEtBRFUsRUFPVjtBQUNFLGtCQURGLEdBQUE7QUFFRSxnQkFBVTtBQUNSLHNCQUFjO0FBRE47QUFGWixLQVBVLEVBYVY7QUFDRSxrQkFERixHQUFBO0FBRUUsZ0JBQVU7QUFDUixzQkFBYztBQUROO0FBRlosS0FiVSxDQVhoQixDQUFBLEVBQUEsUUFBQTtBQWdDRSxNQUFBLHVCQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUE7QUF0Q0osR0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEEsS0FBTSxTQUFTLFNBQVQsTUFBUyxHQUFLOztBQUVuQixJQUFBLHVCQUFBLEVBQUEsS0FBQSxDQUFpQyxZQUFVO0FBQzFDLEtBQUEsY0FBQSxFQUFBLFdBQUEsQ0FBQSxNQUFBO0FBQ0EsS0FBQSxhQUFBLEVBQUEsV0FBQSxDQUFBLE9BQUE7O0FBRUEsS0FBQSxZQUFBLEVBQUEsV0FBQSxDQUFBLE1BQUE7QUFDQSxLQUFBLGNBQUEsRUFBQSxLQUFBO0FBTEQsR0FBQTtBQUZELEVBQUE7QUFVQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBLEtBQU0sbUJBQW1CLFNBQW5CLGdCQUFtQixHQUFhO0FBQUEsTUFBWixLQUFZLFVBQUEsTUFBQSxHQUFBLENBQUEsSUFBQSxVQUFBLENBQUEsTUFBQSxTQUFBLEdBQUEsVUFBQSxDQUFBLENBQUEsR0FBYixJQUFhOztBQUNyQyxJQUFBLFFBQUEsRUFBQSxFQUFBLENBQUEsa0JBQUEsRUFBbUMsVUFBQSxDQUFBLEVBQUs7QUFDdkMsT0FBTSxRQUFRLEVBQUUsRUFBaEIsTUFBYyxDQUFkOztBQUdBO0FBQ0EsT0FBRyxDQUFDLE1BQUEsT0FBQSxDQUFBLFlBQUEsRUFBRCxNQUFBLElBQXVDLENBQUMsTUFBQSxPQUFBLENBQUEsdUJBQUEsRUFBM0MsTUFBQSxFQUF5RjtBQUN4RjtBQUNBLE1BQUEsWUFBQSxFQUFBLE9BQUE7QUFDQSxNQUFBLGFBQUEsRUFBQSxXQUFBLENBQUEsT0FBQTtBQUNBLE1BQUEsY0FBQSxFQUFBLFdBQUEsQ0FBQSxNQUFBO0FBRUE7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQWZELEdBQUE7QUFERCxFQUFBO0FBb0JBOzttQkFFQSxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBLEtBQU0sYUFBYSxTQUFiLFVBQWEsR0FBSzs7QUFFdkIsTUFBSSxlQUFhLEVBQUEsb0JBQUEsRUFBakIsTUFBQTs7QUFGdUIsTUFBQSxRQUFBLFNBQUEsS0FBQSxDQUFBLENBQUEsRUFBQTtBQUl0QjtBQUNBLEtBQUUsMkJBQUEsQ0FBQSxHQUFGLEdBQUEsRUFBQSxLQUFBLENBQXdDLFlBQVU7QUFDakQsTUFBRSx5QkFBQSxDQUFBLEdBQUYsR0FBQSxFQUFBLFdBQUEsQ0FBQSxPQUFBO0FBQ0EsTUFBRSxtQkFBQSxDQUFBLEdBQUYsR0FBQSxFQUFBLFdBQUEsQ0FBQSxtQkFBQTtBQUNBO0FBQ0E7QUFDQSxNQUFFLHlCQUFBLENBQUEsR0FBRixHQUFBLEVBQUEsV0FBQSxDQUFBLFlBQUE7QUFMRCxJQUFBO0FBTHNCLEdBQUE7O0FBR3ZCLE9BQUssSUFBSSxJQUFULENBQUEsRUFBYyxJQUFkLFlBQUEsRUFBQSxHQUFBLEVBQW1DO0FBQUEsU0FBMUIsQ0FBMEI7QUFVbEM7QUFDRDtBQUNBO0FBZkQsRUFBQTs7bUJBa0JBLFUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnXHJcbmltcG9ydCBuYXZiYXIgZnJvbSAnLi9uYXZiYXInXHJcbmltcG9ydCBzZXJ2aWNGdW5jIGZyb20gJy4vc2VydmljZXMnXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblxyXG4gbmF2YmFyKCk7XHJcblxyXG4gc2VydmljRnVuYygpO1xyXG5cclxuICAkKCcuc2xpZGVyLWFyZWEnKS5zbGljayh7XHJcbiAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgIHNsaWRlc1RvU2hvdzogdHJ1ZSxcclxuICAgICAgc2xpZGVzVG9TaG93OiA3LFxyXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgIHNwZWVkOiA2MDAsXHJcbiAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgLy8gY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWRlLWFycm93IHByZXYtYXJyb3dcIj48aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tbGVmdFwiPjwvaT48L2J1dHRvbj4nLFxyXG4gICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpZGUtYXJyb3cgbmV4dC1hcnJvd1wiPjxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48L2J1dHRvbj4nLFxyXG4gICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYnJlYWtwb2ludDogOTkyLFxyXG4gICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDQwMCxcclxuICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSk7XHJcbiAgICAkKFwiLnNsaWNrLWRvdHMgbGkgYnV0dG9uXCIpLnRleHQoXCJcIik7XHJcbn0pOyIsImNvbnN0IG5hdmJhciA9ICgpPT4ge1xyXG5cdFxyXG5cdCQoXCIuY29sbGFwc2UtYm94X19zZWFyY2hcIikuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdCQoXCJpLnNlYXJjaEljb25cIikudG9nZ2xlQ2xhc3MoXCJOb25lXCIpO1xyXG5cdFx0JChcImkudGltZXNJY29uXCIpLnRvZ2dsZUNsYXNzKFwiQmxvY2tcIik7XHJcblxyXG5cdFx0JChcIi5zZWFyY2hCb3hcIikuc2xpZGVUb2dnbGUoXCJmYXN0XCIpO1xyXG5cdFx0JChcIi5zZWFyY2hJbnB1dFwiKS5mb2N1cygpO1xyXG5cdH0pO1xyXG59XHJcbi8vIGNvbnN0IGNsb3NlTmF2ID0gKCk9PiB7XHJcblxyXG5cdFxyXG4vLyBcdGNvbnN0IG5hdiA9ICQoJy5iLW5hdicpXHJcbi8vIFx0bmF2LnJlbW92ZUNsYXNzKCdiLW5hdi0tYWN0aXZlJylcclxuXHRcclxuLy8gfVxyXG5jb25zdCBkb2N1bWVudExpc3RlbmVyID0gKGNiPW51bGwpID0+IHtcclxuXHQkKGRvY3VtZW50KS5vbignY2xpY2sgdG91Y2hzdGFydCcsIChlKT0+e1xyXG5cdFx0Y29uc3QgX3RoaXMgPSAkKGUudGFyZ2V0KVxyXG5cdFx0XHJcblxyXG5cdFx0Ly8gaWYgbm90IHNlbGYgY2xpY2tlZFxyXG5cdFx0aWYoIV90aGlzLmNsb3Nlc3QoJy5zZWFyY2hCb3gnKS5sZW5ndGggJiYgIV90aGlzLmNsb3Nlc3QoJy5jb2xsYXBzZS1ib3hfX3NlYXJjaCcpLmxlbmd0aCl7XHJcblx0XHRcdC8vIGNsb3NlTmF2KClcclxuXHRcdFx0JChcIi5zZWFyY2hCb3hcIikuZmFkZU91dCgpO1xyXG5cdFx0XHQkKFwiaS50aW1lc0ljb25cIikucmVtb3ZlQ2xhc3MoXCJCbG9ja1wiKTtcclxuXHRcdFx0JChcImkuc2VhcmNoSWNvblwiKS5yZW1vdmVDbGFzcyhcIk5vbmVcIik7XHJcblxyXG5cdFx0fVxyXG5cdFx0Ly8gaWYoIV90aGlzLmNsb3Nlc3QoJy5zZWFyY2hJbnB1dCcpLmxlbmd0aCAmJiAhX3RoaXMuY2xvc2VzdCgnLnNlYXJjaEJveCcpLmxlbmd0aCl7XHJcblx0XHQvLyBcdCQoJy5zaG9wcGluZy1jYXJkJykucmVtb3ZlQ2xhc3MoJ3Nob3BwaW5nLWNhcmQtLWFjdGl2ZScpXHJcblx0XHQvLyBcdCQoJy5zZWFyY2hCb3gnKS5oaWRlKClcclxuXHRcdC8vIH1cclxuXHRcdFxyXG5cdH0pXHJcbn1cclxuZG9jdW1lbnRMaXN0ZW5lcigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmF2YmFyXHJcbiIsImNvbnN0IHNlcnZpY0Z1bmMgPSAoKT0+IHtcclxuXHJcblx0bGV0IGhlYWRlckxlbmd0aD0kKCcubGlzdC1pdGVtX19oZWFkZXInKS5sZW5ndGg7XHJcblx0Zm9yIChsZXQgaT0wOyBpPGhlYWRlckxlbmd0aDsgaSsrKSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhpKTtcclxuXHRcdCQoJy5saXN0LWl0ZW1fX2hlYWRlcjplcSgnK2krJyknKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0XHQkKCcubGlzdC1pdGVtX190ZXh0OmVxKCcraSsnKScpLnNsaWRlVG9nZ2xlKCdCbG9jaycpO1xyXG5cdFx0XHQkKCcubGlzdC1pdGVtOmVxKCcraSsnKScpLnRvZ2dsZUNsYXNzKCdsaXN0LWl0ZW0tLWFjdGl2ZScpO1xyXG5cdFx0XHQvLyAkKCcubGlzdC1pdGVtX19wbHVzOmVxKCcraSsnKScpLnRvZ2dsZUNsYXNzKCdOb25lJyk7XHJcblx0XHRcdC8vICQoJy5saXN0LWl0ZW1fX3RpbWVzOmVxKCcraSsnKScpLnRvZ2dsZUNsYXNzKCdCbG9jaycpO1xyXG5cdFx0XHQkKCcubGlzdC1pdGVtX19wbHVzOmVxKCcraSsnKScpLnRvZ2dsZUNsYXNzKCdwbHVzLXRpbWVzJylcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0fVxyXG5cdC8vIGxldCBsaXN0SXRlbUxlbmd0aD0kKCcubGlzdC1pdGVtJykubGVuZ3RoO1xyXG5cdC8vIGNvbnNvbGUubG9nKGxpc3RJdGVtTGVuZ3RoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VydmljRnVuYyJdfQ==
