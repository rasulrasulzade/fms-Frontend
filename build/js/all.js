(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
            global.cooperation = mod.exports;
      }
})(undefined, function (module, exports) {
      'use strict';

      Object.defineProperty(exports, "__esModule", {
            value: true
      });
      var orangeText = function orangeText() {
            var count = $('.cooperation-input').length;

            var _loop = function _loop(i) {
                  // console.log(i);
                  $('.cooperation-input:eq(' + i + ')').focus(function () {
                        $('.cooperation-form__text:eq(' + i + ')').addClass('orangeText');
                  });
                  $('.cooperation-input:eq(' + i + ')').focusout(function () {
                        $('.cooperation-form__text:eq(' + i + ')').removeClass('orangeText');
                  });
            };

            for (var i = 0; i < count; i++) {
                  _loop(i);
            }
      };
      exports.default = orangeText;
      module.exports = exports['default'];
});

},{}],2:[function(require,module,exports){
'use strict';

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['./navbar', './services', './cooperation'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('./navbar'), require('./services'), require('./cooperation'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.navbar, global.services, global.cooperation);
    global.main = mod.exports;
  }
})(undefined, function (_navbar, _services, _cooperation) {
  'use strict';

  var _navbar2 = _interopRequireDefault(_navbar);

  var _services2 = _interopRequireDefault(_services);

  var _cooperation2 = _interopRequireDefault(_cooperation);

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

    (0, _cooperation2.default)();

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

},{"./cooperation":1,"./navbar":3,"./services":4}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxtYWluXFxjb29wZXJhdGlvbi5qcyIsInNyY1xcanNcXG1haW5cXG1haW4uanMiLCJzcmNcXGpzXFxtYWluXFxuYXZiYXIuanMiLCJzcmNcXGpzXFxtYWluXFxzZXJ2aWNlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsVUFBTSxhQUFhLFNBQWIsVUFBYSxHQUFLO0FBQ3RCLGdCQUFJLFFBQU0sRUFBQSxvQkFBQSxFQUFWLE1BQUE7O0FBRHNCLGdCQUFBLFFBQUEsU0FBQSxLQUFBLENBQUEsQ0FBQSxFQUFBO0FBR2hCO0FBQ0osb0JBQUUsMkJBQUEsQ0FBQSxHQUFGLEdBQUEsRUFBQSxLQUFBLENBQXdDLFlBQVU7QUFDNUMsMEJBQUUsZ0NBQUEsQ0FBQSxHQUFGLEdBQUEsRUFBQSxRQUFBLENBQUEsWUFBQTtBQUROLG1CQUFBO0FBR0Esb0JBQUUsMkJBQUEsQ0FBQSxHQUFGLEdBQUEsRUFBQSxRQUFBLENBQTJDLFlBQVU7QUFDL0MsMEJBQUUsZ0NBQUEsQ0FBQSxHQUFGLEdBQUEsRUFBQSxXQUFBLENBQUEsWUFBQTtBQUROLG1CQUFBO0FBUG9CLGFBQUE7O0FBRXRCLGlCQUFLLElBQUksSUFBVCxDQUFBLEVBQWMsSUFBZCxLQUFBLEVBQUEsR0FBQSxFQUE0QjtBQUFBLHdCQUFuQixDQUFtQjtBQVEzQjtBQVZILE9BQUE7d0JBWUEsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBLElBQUEsUUFBQSxFQUFBLEtBQUEsQ0FBa0IsWUFBVTtBQUFBLFFBQUEsUUFBQTs7QUFFM0IsS0FBQSxHQUFBLFNBQUEsT0FBQTs7QUFFQSxLQUFBLEdBQUEsV0FBQSxPQUFBOztBQUVBLEtBQUEsR0FBQSxjQUFBLE9BQUE7O0FBRUMsTUFBQSxjQUFBLEVBQUEsS0FBQSxFQUFBLFdB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QTFCLENBQTBCO0FBVWxDO0FBQ0Q7QUFDQTtBQWZELEVBQUE7O21CQWtCQSxVIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNvbnN0IG9yYW5nZVRleHQgPSAoKT0+IHtcclxuICBsZXQgY291bnQ9JCgnLmNvb3BlcmF0aW9uLWlucHV0JykubGVuZ3RoO1xyXG4gIGZvciAobGV0IGk9MDsgaTxjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coaSk7XHJcbiAgICAkKCcuY29vcGVyYXRpb24taW5wdXQ6ZXEoJytpKycpJykuZm9jdXMoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICQoJy5jb29wZXJhdGlvbi1mb3JtX190ZXh0OmVxKCcraSsnKScpLmFkZENsYXNzKCdvcmFuZ2VUZXh0Jyk7XHJcbiAgICB9KTtcclxuICAgICQoJy5jb29wZXJhdGlvbi1pbnB1dDplcSgnK2krJyknKS5mb2N1c291dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgJCgnLmNvb3BlcmF0aW9uLWZvcm1fX3RleHQ6ZXEoJytpKycpJykucmVtb3ZlQ2xhc3MoJ29yYW5nZVRleHQnKTtcclxuICAgIH0pOyAgICAgICBcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgb3JhbmdlVGV4dCIsIid1c2Ugc3RyaWN0J1xyXG5pbXBvcnQgbmF2YmFyIGZyb20gJy4vbmF2YmFyJ1xyXG5pbXBvcnQgc2VydmljRnVuYyBmcm9tICcuL3NlcnZpY2VzJ1xyXG5pbXBvcnQgb3JhbmdlVGV4dCBmcm9tICcuL2Nvb3BlcmF0aW9uJ1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuIG5hdmJhcigpO1xyXG5cclxuIHNlcnZpY0Z1bmMoKTtcclxuXHJcbiBvcmFuZ2VUZXh0KCk7XHJcblxyXG4gICQoJy5zbGlkZXItYXJlYScpLnNsaWNrKHtcclxuICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgc2xpZGVzVG9TaG93OiB0cnVlLFxyXG4gICAgICBzbGlkZXNUb1Nob3c6IDcsXHJcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgc3BlZWQ6IDYwMCxcclxuICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAvLyBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpZGUtYXJyb3cgcHJldi1hcnJvd1wiPjxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPjwvYnV0dG9uPicsXHJcbiAgICAgIG5leHRBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGlkZS1hcnJvdyBuZXh0LWFycm93XCI+PGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPjwvYnV0dG9uPicsXHJcbiAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBicmVha3BvaW50OiA5OTIsXHJcbiAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogM1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYnJlYWtwb2ludDogNDAwLFxyXG4gICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9KTtcclxuICAgICQoXCIuc2xpY2stZG90cyBsaSBidXR0b25cIikudGV4dChcIlwiKTtcclxufSk7IiwiY29uc3QgbmF2YmFyID0gKCk9PiB7XHJcblx0XHJcblx0JChcIi5jb2xsYXBzZS1ib3hfX3NlYXJjaFwiKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0JChcImkuc2VhcmNoSWNvblwiKS50b2dnbGVDbGFzcyhcIk5vbmVcIik7XHJcblx0XHQkKFwiaS50aW1lc0ljb25cIikudG9nZ2xlQ2xhc3MoXCJCbG9ja1wiKTtcclxuXHJcblx0XHQkKFwiLnNlYXJjaEJveFwiKS5zbGlkZVRvZ2dsZShcImZhc3RcIik7XHJcblx0XHQkKFwiLnNlYXJjaElucHV0XCIpLmZvY3VzKCk7XHJcblx0fSk7XHJcbn1cclxuLy8gY29uc3QgY2xvc2VOYXYgPSAoKT0+IHtcclxuXHJcblx0XHJcbi8vIFx0Y29uc3QgbmF2ID0gJCgnLmItbmF2JylcclxuLy8gXHRuYXYucmVtb3ZlQ2xhc3MoJ2ItbmF2LS1hY3RpdmUnKVxyXG5cdFxyXG4vLyB9XHJcbmNvbnN0IGRvY3VtZW50TGlzdGVuZXIgPSAoY2I9bnVsbCkgPT4ge1xyXG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgKGUpPT57XHJcblx0XHRjb25zdCBfdGhpcyA9ICQoZS50YXJnZXQpXHJcblx0XHRcclxuXHJcblx0XHQvLyBpZiBub3Qgc2VsZiBjbGlja2VkXHJcblx0XHRpZighX3RoaXMuY2xvc2VzdCgnLnNlYXJjaEJveCcpLmxlbmd0aCAmJiAhX3RoaXMuY2xvc2VzdCgnLmNvbGxhcHNlLWJveF9fc2VhcmNoJykubGVuZ3RoKXtcclxuXHRcdFx0Ly8gY2xvc2VOYXYoKVxyXG5cdFx0XHQkKFwiLnNlYXJjaEJveFwiKS5mYWRlT3V0KCk7XHJcblx0XHRcdCQoXCJpLnRpbWVzSWNvblwiKS5yZW1vdmVDbGFzcyhcIkJsb2NrXCIpO1xyXG5cdFx0XHQkKFwiaS5zZWFyY2hJY29uXCIpLnJlbW92ZUNsYXNzKFwiTm9uZVwiKTtcclxuXHJcblx0XHR9XHJcblx0XHQvLyBpZighX3RoaXMuY2xvc2VzdCgnLnNlYXJjaElucHV0JykubGVuZ3RoICYmICFfdGhpcy5jbG9zZXN0KCcuc2VhcmNoQm94JykubGVuZ3RoKXtcclxuXHRcdC8vIFx0JCgnLnNob3BwaW5nLWNhcmQnKS5yZW1vdmVDbGFzcygnc2hvcHBpbmctY2FyZC0tYWN0aXZlJylcclxuXHRcdC8vIFx0JCgnLnNlYXJjaEJveCcpLmhpZGUoKVxyXG5cdFx0Ly8gfVxyXG5cdFx0XHJcblx0fSlcclxufVxyXG5kb2N1bWVudExpc3RlbmVyKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuYXZiYXJcclxuIiwiY29uc3Qgc2VydmljRnVuYyA9ICgpPT4ge1xyXG5cclxuXHRsZXQgaGVhZGVyTGVuZ3RoPSQoJy5saXN0LWl0ZW1fX2hlYWRlcicpLmxlbmd0aDtcclxuXHRmb3IgKGxldCBpPTA7IGk8aGVhZGVyTGVuZ3RoOyBpKyspIHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKGkpO1xyXG5cdFx0JCgnLmxpc3QtaXRlbV9faGVhZGVyOmVxKCcraSsnKScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHRcdCQoJy5saXN0LWl0ZW1fX3RleHQ6ZXEoJytpKycpJykuc2xpZGVUb2dnbGUoJ0Jsb2NrJyk7XHJcblx0XHRcdCQoJy5saXN0LWl0ZW06ZXEoJytpKycpJykudG9nZ2xlQ2xhc3MoJ2xpc3QtaXRlbS0tYWN0aXZlJyk7XHJcblx0XHRcdC8vICQoJy5saXN0LWl0ZW1fX3BsdXM6ZXEoJytpKycpJykudG9nZ2xlQ2xhc3MoJ05vbmUnKTtcclxuXHRcdFx0Ly8gJCgnLmxpc3QtaXRlbV9fdGltZXM6ZXEoJytpKycpJykudG9nZ2xlQ2xhc3MoJ0Jsb2NrJyk7XHJcblx0XHRcdCQoJy5saXN0LWl0ZW1fX3BsdXM6ZXEoJytpKycpJykudG9nZ2xlQ2xhc3MoJ3BsdXMtdGltZXMnKVxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHR9XHJcblx0Ly8gbGV0IGxpc3RJdGVtTGVuZ3RoPSQoJy5saXN0LWl0ZW0nKS5sZW5ndGg7XHJcblx0Ly8gY29uc29sZS5sb2cobGlzdEl0ZW1MZW5ndGgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZXJ2aWNGdW5jIl19
