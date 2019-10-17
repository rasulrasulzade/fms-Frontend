(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(["exports"], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports);
		global.contact = mod.exports;
	}
})(undefined, function (exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var contact = function contact() {
		$(".map-link").click(function (e) {
			e.preventDefault();
			var href = $(this).attr("href");
			// console.log($(href).offset().top)
			// console.log(href)
			$("html,body").animate({ scrollTop: $(href).offset().top + $('body').scrollTop() - 100 }, 1000);

			// window.location.hash = href
		});
	};

	var contact__OrangeText = function contact__OrangeText() {
		var count = $('.contactInput').length;

		var _loop = function _loop(i) {
			// console.log(i);
			$('.contactInput:eq(' + i + ')').focus(function () {
				$('.contactInputText:eq(' + i + ')').addClass('orangeText');
			});
			$('.contactInput:eq(' + i + ')').focusout(function () {
				$('.contactInputText:eq(' + i + ')').removeClass('orangeText');
			});
		};

		for (var i = 0; i < count; i++) {
			_loop(i);
		}
	};

	// export default contact
	exports.contact = contact;
	exports.contact__OrangeText = contact__OrangeText;
});

},{}],2:[function(require,module,exports){
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
            global.corporation = mod.exports;
      }
})(undefined, function (module, exports) {
      'use strict';

      Object.defineProperty(exports, "__esModule", {
            value: true
      });
      var orangeText = function orangeText() {
            var count = $('.corporation-input').length;

            var _loop = function _loop(i) {
                  // console.log(i);
                  $('.corporation-input:eq(' + i + ')').focus(function () {
                        $('.corporation-form__text:eq(' + i + ')').addClass('orangeText');
                  });
                  $('.corporation-input:eq(' + i + ')').focusout(function () {
                        $('.corporation-form__text:eq(' + i + ')').removeClass('orangeText');
                  });
            };

            for (var i = 0; i < count; i++) {
                  _loop(i);
            }
      };
      exports.default = orangeText;
      module.exports = exports['default'];
});

},{}],3:[function(require,module,exports){
'use strict';

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['./navbar', './services', './corporation', './slider', './contact'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('./navbar'), require('./services'), require('./corporation'), require('./slider'), require('./contact'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.navbar, global.services, global.corporation, global.slider, global.contact);
    global.main = mod.exports;
  }
})(undefined, function (_navbar, _services, _corporation, _slider, _contact) {
  'use strict';

  var _navbar2 = _interopRequireDefault(_navbar);

  var _services2 = _interopRequireDefault(_services);

  var _corporation2 = _interopRequireDefault(_corporation);

  var _slider2 = _interopRequireDefault(_slider);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  $(document).ready(function () {

    (0, _navbar2.default)();

    (0, _services2.default)();

    (0, _corporation2.default)();

    (0, _slider2.default)();

    (0, _contact.contact)();

    (0, _contact.contact__OrangeText)();

    ymaps.ready(init);
    function init() {
      var myMap = new ymaps.Map("map", {
        center: [40.387659, 49.815589],
        zoom: 17
        // controls: ['zoomControl', 'fullscreenControl']
      });
      // myGeoObject = new ymaps.GeoObject({
      //   geometry: {
      //     type: "Point", // geometry type - point
      //     coordinates: [52.5200, 13.4050] // координаты точки
      //   }
      // });
      // myMap.geoObjects.add(myGeoObject); // Placing a geo object on the map.

      // from FIZZA
      var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        balloonContent: '<strong>blue</strong> color',
        iconCaption: 'Fizza'
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/maps-and-flags.png',
        // Размеры метки.
        iconImageSize: [40, 55]
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        // iconImageOffset: [-5, -38]
      });
      myMap.geoObjects.add(myPlacemark);
      // the end
    }
  });
  // import contact from './contact'
  // import contact__OrangeText from './contact'
});

},{"./contact":1,"./corporation":2,"./navbar":4,"./services":5,"./slider":6}],4:[function(require,module,exports){
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
			$("i.searchIcon").toggleClass("d-none");
			$("i.timesIcon").toggleClass("d-block");

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
				$("i.timesIcon").removeClass("d-block");
				$("i.searchIcon").removeClass("d-none");
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

},{}],5:[function(require,module,exports){
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

		// let headerLength=$('.accordion-item__header').length;
		// 	// alert(headerLength);
		// for (let i=0; i<headerLength; i++) {
		// 	// console.log(i);
		// 	$('.accordion-item__header:eq('+i+')').click(function(){
		// 		// alert(i);
		// 		$('.accordion-item__text:gt('+i+')').slideUp();
		// 		$('.accordion-item:gt('+i+')').removeClass('accordion-item--active');
		// 		$('.accordion-item:gt('+i+')').removeClass('h-auto');
		// 		$('.accordion-item__plus:gt('+i+')').removeClass('plus-times');

		// 		$('.accordion-item__text:eq('+i+')').slideToggle();
		// 		$('.accordion-item:eq('+i+')').toggleClass('accordion-item--active');
		// 		$('.accordion-item:eq('+i+')').toggleClass('h-auto');
		// 		$('.accordion-item__plus:eq('+i+')').toggleClass('plus-times');
		// 	});

		// }
		$('.collapse').on('shown.bs.collapse', function () {
			$(this).parent().addClass('accordion-item--active');
		});

		$('.collapse').on('hidden.bs.collapse', function () {
			$(this).parent().removeClass('accordion-item--active');
		});

		//    let headerLength=$('.accordion-item__header').length;
		// for (let i=0; i<headerLength; i++) {
		//     $('.accordion-item__header:eq('+i+')').on('click', function () {
		//     	$('.accordion-item__header:gt('+i+')').removeClass('plusChangeColor');
		// 		$(this).toggleClass('plusChangeColor');     
		//     });
		// }
		$('.accordion-item__header').on('click', function () {
			$('.accordion-item__header').not(this).removeClass('plusChangeColor');
			$(this).toggleClass('plusChangeColor');
		});

		// $('.accardionHeader').on('hidden.bs.collapsing', function () {
		// 	$(this).removeClass('plusChangeColor'); 
		// });
	};

	exports.default = servicFunc;
	module.exports = exports['default'];
});

},{}],6:[function(require,module,exports){
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
    global.slider = mod.exports;
  }
})(undefined, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

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

  var slickSlider = function slickSlider() {
    var _$$slick;

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
  };

  exports.default = slickSlider;
  module.exports = exports['default'];
});

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxtYWluXFxjb250YWN0LmpzIiwic3JjXFxqc1xcbWFpblxcY29ycG9yYXRpb24uanMiLCJzcmNcXGpzXFxtYWluXFxtYWluLmpzIiwic3JjXFxqc1xcbWFpblxcbmF2YmFyLmpzIiwic3JjXFxqc1xcbWFpblxcc2VydmljZXMuanMiLCJzcmNcXGpzXFxtYWluXFxzbGlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLEtBQU0sVUFBVSxTQUFWLE9BQVUsR0FBSztBQUNwQixJQUFBLFdBQUEsRUFBQSxLQUFBLENBQXFCLFVBQUEsQ0FBQSxFQUFZO0FBQ2hDLEtBQUEsY0FBQTtBQUNBLE9BQU0sT0FBTyxFQUFBLElBQUEsRUFBQSxJQUFBLENBQWIsTUFBYSxDQUFiO0FBQ0E7QUFDQTtBQUNBLEtBQUEsV0FBQSxFQUFBLE9BQUEsQ0FBdUIsRUFBRSxXQUFXLEVBQUEsSUFBQSxFQUFBLE1BQUEsR0FBQSxHQUFBLEdBQXFCLEVBQUEsTUFBQSxFQUFyQixTQUFxQixFQUFyQixHQUFwQyxHQUF1QixFQUF2QixFQUFBLElBQUE7O0FBRUE7QUFQRCxHQUFBO0FBREQsRUFBQTs7QUFZQSxLQUFNLHNCQUFzQixTQUF0QixtQkFBc0IsR0FBSztBQUNoQyxNQUFJLFFBQU0sRUFBQSxlQUFBLEVBQVYsTUFBQTs7QUFEZ0MsTUFBQSxRQUFBLFNBQUEsS0FBQSxDQUFBLENBQUEsRUFBQTtBQUd4QjtBQUNKLEtBQUUsc0JBQUEsQ0FBQSxHQUFGLEdBQUEsRUFBQSxLQUFBLENBQW1DLFlBQVU7QUFDdkMsTUFBRSwwQkFBQSxDQUFBLEdBQUYsR0FBQSxFQUFBLFFBQUEsQ0FBQSxZQUFBO0FBRE4sSUFBQTtBQUdBLEtBQUUsc0JBQUEsQ0FBQSxHQUFGLEdBQUEsRUFBQSxRQUFBLENBQXNDLFlBQVU7QUFDMUMsTUFBRSwwQkFBQSxDQUFB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QUE7O21CQStDQSxVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DQSxNQUFNLGNBQWMsU0FBZCxXQUFjLEdBQUs7QUFBQSxRQUFBLFFBQUE7O0FBRXpCLE1BQUEsY0FBQSxFQUFBLEtBQUEsRUFBQSxXQUFBO0FBQ00sWUFETixJQUFBO0FBRU0sb0JBRmtCO0FBQXhCLEtBQUEsRUFBQSxnQkFBQSxRQUFBLEVBQUEsY0FBQSxFQUFBLENBQUEsQ0FBQSxFQUFBLGdCQUFBLFFBQUEsRUFBQSxnQkFBQSxFQUFBLENBQUEsQ0FBQSxFQUFBLGdCQUFBLFFBQUEsRUFBQSxVQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUEsZ0JBQUEsUUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLENBQUEsRUFBQSxnQkFBQSxRQUFBLEVBQUEsUUFBQSxFQUFBLElBQUEsQ0FBQSxFQUFBLGdCQUFBLFFBQUEsRUFBQSxXQUFBLEVBQUEsb0ZBQUEsQ0FBQSxFQUFBLGdCQUFBLFFBQUEsRUFBQSxXQUFBLEVBQUEscUZBQUEsQ0FBQSxFQUFBLGdCQUFBLFFBQUEsRUFBQSxZQUFBLEVBV2tCLENBQ1Y7QUFDRSxrQkFERixHQUFBO0FBRUUsZ0JBQVU7QUFDUixzQkFBYztBQUROO0FBRlosS0FEVSxFQU9WO0FBQ0Usa0JBREYsR0FBQTtBQUVFLGdCQUFVO0FBQ1Isc0JBQWM7QUFETjtBQUZaLEtBUFUsRUFhVjtBQUNFLGtCQURGLEdBQUE7QUFFRSxnQkFBVTtBQUNSLHNCQUFjO0FBRE47QUFGWixLQWJVLENBWGxCLENBQUEsRUFBQSxRQUFBO0FBZ0NJLE1BQUEsdUJBQUEsRUFBQSxJQUFBLENBQUEsRUFBQTtBQWxDSixHQUFBOztvQkFxQ0EsVyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zdCBjb250YWN0ID0gKCk9PiB7XHJcblx0JChcIi5tYXAtbGlua1wiKS5jbGljayhmdW5jdGlvbihlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KClcclxuXHRcdGNvbnN0IGhyZWYgPSAkKHRoaXMpLmF0dHIoXCJocmVmXCIpXHJcblx0XHQvLyBjb25zb2xlLmxvZygkKGhyZWYpLm9mZnNldCgpLnRvcClcclxuXHRcdC8vIGNvbnNvbGUubG9nKGhyZWYpXHJcblx0XHQkKFwiaHRtbCxib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6ICQoaHJlZikub2Zmc2V0KCkudG9wKyQoJ2JvZHknKS5zY3JvbGxUb3AoKS0xMDB9LCAxMDAwKTtcclxuXHRcdFxyXG5cdFx0Ly8gd2luZG93LmxvY2F0aW9uLmhhc2ggPSBocmVmXHJcblx0fSk7XHJcbn1cclxuXHJcbmNvbnN0IGNvbnRhY3RfX09yYW5nZVRleHQgPSAoKT0+IHtcclxuXHRsZXQgY291bnQ9JCgnLmNvbnRhY3RJbnB1dCcpLmxlbmd0aDtcclxuXHQgIGZvciAobGV0IGk9MDsgaTxjb3VudDsgaSsrKSB7XHJcblx0ICAgICAgICAvLyBjb25zb2xlLmxvZyhpKTtcclxuXHQgICAgJCgnLmNvbnRhY3RJbnB1dDplcSgnK2krJyknKS5mb2N1cyhmdW5jdGlvbigpe1xyXG5cdCAgICAgICAgICAkKCcuY29udGFjdElucHV0VGV4dDplcSgnK2krJyknKS5hZGRDbGFzcygnb3JhbmdlVGV4dCcpO1xyXG5cdCAgICB9KTtcclxuXHQgICAgJCgnLmNvbnRhY3RJbnB1dDplcSgnK2krJyknKS5mb2N1c291dChmdW5jdGlvbigpe1xyXG5cdCAgICAgICAgICAkKCcuY29udGFjdElucHV0VGV4dDplcSgnK2krJyknKS5yZW1vdmVDbGFzcygnb3JhbmdlVGV4dCcpO1xyXG5cdCAgICB9KTsgICAgICAgXHJcblx0ICB9XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGNvbnRhY3RcclxuZXhwb3J0IHtjb250YWN0LCBjb250YWN0X19PcmFuZ2VUZXh0fVxyXG4iLCJjb25zdCBvcmFuZ2VUZXh0ID0gKCk9PiB7XHJcbiAgbGV0IGNvdW50PSQoJy5jb3Jwb3JhdGlvbi1pbnB1dCcpLmxlbmd0aDtcclxuICBmb3IgKGxldCBpPTA7IGk8Y291bnQ7IGkrKykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGkpO1xyXG4gICAgJCgnLmNvcnBvcmF0aW9uLWlucHV0OmVxKCcraSsnKScpLmZvY3VzKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAkKCcuY29ycG9yYXRpb24tZm9ybV9fdGV4dDplcSgnK2krJyknKS5hZGRDbGFzcygnb3JhbmdlVGV4dCcpO1xyXG4gICAgfSk7XHJcbiAgICAkKCcuY29ycG9yYXRpb24taW5wdXQ6ZXEoJytpKycpJykuZm9jdXNvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICQoJy5jb3Jwb3JhdGlvbi1mb3JtX190ZXh0OmVxKCcraSsnKScpLnJlbW92ZUNsYXNzKCdvcmFuZ2VUZXh0Jyk7XHJcbiAgICB9KTsgICAgICAgXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG9yYW5nZVRleHQiLCIndXNlIHN0cmljdCdcclxuaW1wb3J0IG5hdmJhciBmcm9tICcuL25hdmJhcidcclxuaW1wb3J0IHNlcnZpY0Z1bmMgZnJvbSAnLi9zZXJ2aWNlcydcclxuaW1wb3J0IG9yYW5nZVRleHQgZnJvbSAnLi9jb3Jwb3JhdGlvbidcclxuaW1wb3J0IHNsaWNrU2xpZGVyIGZyb20gJy4vc2xpZGVyJ1xyXG4vLyBpbXBvcnQgY29udGFjdCBmcm9tICcuL2NvbnRhY3QnXHJcbi8vIGltcG9ydCBjb250YWN0X19PcmFuZ2VUZXh0IGZyb20gJy4vY29udGFjdCdcclxuaW1wb3J0IHtjb250YWN0LCBjb250YWN0X19PcmFuZ2VUZXh0fSBmcm9tICcuL2NvbnRhY3QnXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblxyXG4gbmF2YmFyKCk7XHJcblxyXG4gc2VydmljRnVuYygpO1xyXG5cclxuIG9yYW5nZVRleHQoKTtcclxuXHJcbiBzbGlja1NsaWRlcigpO1xyXG4gXHJcbiBjb250YWN0KCk7XHJcblxyXG4gY29udGFjdF9fT3JhbmdlVGV4dCgpO1xyXG5cclxueW1hcHMucmVhZHkoaW5pdCk7XHJcbiAgICAgICAgZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgICAgICAgICB2YXIgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKFwibWFwXCIsIHtcclxuICAgICAgICAgICAgICAgIGNlbnRlcjogWzQwLjM4NzY1OSwgNDkuODE1NTg5XSxcclxuICAgICAgICAgICAgICAgIHpvb206IDE3LFxyXG4gICAgICAgICAgICAgICAgLy8gY29udHJvbHM6IFsnem9vbUNvbnRyb2wnLCAnZnVsbHNjcmVlbkNvbnRyb2wnXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gbXlHZW9PYmplY3QgPSBuZXcgeW1hcHMuR2VvT2JqZWN0KHtcclxuICAgICAgICAgICAgLy8gICBnZW9tZXRyeToge1xyXG4gICAgICAgICAgICAvLyAgICAgdHlwZTogXCJQb2ludFwiLCAvLyBnZW9tZXRyeSB0eXBlIC0gcG9pbnRcclxuICAgICAgICAgICAgLy8gICAgIGNvb3JkaW5hdGVzOiBbNTIuNTIwMCwgMTMuNDA1MF0gLy8g0LrQvtC+0YDQtNC40L3QsNGC0Ysg0YLQvtGH0LrQuFxyXG4gICAgICAgICAgICAvLyAgIH1cclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgICAgLy8gbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlHZW9PYmplY3QpOyAvLyBQbGFjaW5nIGEgZ2VvIG9iamVjdCBvbiB0aGUgbWFwLlxyXG5cclxuICAgICAgICAgICAgICAvLyBmcm9tIEZJWlpBXHJcbiAgICAgICAgICAgICAgIHZhciBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsobXlNYXAuZ2V0Q2VudGVyKCksIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsbG9vbkNvbnRlbnQ6ICc8c3Ryb25nPmJsdWU8L3N0cm9uZz4gY29sb3InLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uQ2FwdGlvbjogJ0ZpenphJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0J7Qv9GG0LjQuC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0J3QtdC+0LHRhdC+0LTQuNC80L4g0YPQutCw0LfQsNGC0Ywg0LTQsNC90L3Ri9C5INGC0LjQvyDQvNCw0LrQtdGC0LAuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0KHQstC+0ZEg0LjQt9C+0LHRgNCw0LbQtdC90LjQtSDQuNC60L7QvdC60Lgg0LzQtdGC0LrQuC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogJ2ltZy9tYXBzLWFuZC1mbGFncy5wbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDQoNCw0LfQvNC10YDRiyDQvNC10YLQutC4LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VTaXplOiBbNDAsIDU1XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0KHQvNC10YnQtdC90LjQtSDQu9C10LLQvtCz0L4g0LLQtdGA0YXQvdC10LPQviDRg9Cz0LvQsCDQuNC60L7QvdC60Lgg0L7RgtC90L7RgdC40YLQtdC70YzQvdC+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINC10ZEgXCLQvdC+0LbQutC4XCIgKNGC0L7Rh9C60Lgg0L/RgNC40LLRj9C30LrQuCkuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGljb25JbWFnZU9mZnNldDogWy01LCAtMzhdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyaylcclxuICAgICAgICAgICAgLy8gdGhlIGVuZFxyXG4gICAgICAgICB9XHJcblxyXG59KTsiLCJjb25zdCBuYXZiYXIgPSAoKT0+IHtcclxuXHRcclxuXHQkKFwiLmNvbGxhcHNlLWJveF9fc2VhcmNoXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHQkKFwiaS5zZWFyY2hJY29uXCIpLnRvZ2dsZUNsYXNzKFwiZC1ub25lXCIpO1xyXG5cdFx0JChcImkudGltZXNJY29uXCIpLnRvZ2dsZUNsYXNzKFwiZC1ibG9ja1wiKTtcclxuXHJcblx0XHQkKFwiLnNlYXJjaEJveFwiKS5zbGlkZVRvZ2dsZShcImZhc3RcIik7XHJcblx0XHQkKFwiLnNlYXJjaElucHV0XCIpLmZvY3VzKCk7XHJcblx0fSk7XHJcbn1cclxuLy8gY29uc3QgY2xvc2VOYXYgPSAoKT0+IHtcclxuXHJcblx0XHJcbi8vIFx0Y29uc3QgbmF2ID0gJCgnLmItbmF2JylcclxuLy8gXHRuYXYucmVtb3ZlQ2xhc3MoJ2ItbmF2LS1hY3RpdmUnKVxyXG5cdFxyXG4vLyB9XHJcbmNvbnN0IGRvY3VtZW50TGlzdGVuZXIgPSAoY2I9bnVsbCkgPT4ge1xyXG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgKGUpPT57XHJcblx0XHRjb25zdCBfdGhpcyA9ICQoZS50YXJnZXQpXHJcblx0XHRcclxuXHJcblx0XHQvLyBpZiBub3Qgc2VsZiBjbGlja2VkXHJcblx0XHRpZighX3RoaXMuY2xvc2VzdCgnLnNlYXJjaEJveCcpLmxlbmd0aCAmJiAhX3RoaXMuY2xvc2VzdCgnLmNvbGxhcHNlLWJveF9fc2VhcmNoJykubGVuZ3RoKXtcclxuXHRcdFx0Ly8gY2xvc2VOYXYoKVxyXG5cdFx0XHQkKFwiLnNlYXJjaEJveFwiKS5mYWRlT3V0KCk7XHJcblx0XHRcdCQoXCJpLnRpbWVzSWNvblwiKS5yZW1vdmVDbGFzcyhcImQtYmxvY2tcIik7XHJcblx0XHRcdCQoXCJpLnNlYXJjaEljb25cIikucmVtb3ZlQ2xhc3MoXCJkLW5vbmVcIik7XHJcblxyXG5cdFx0fVxyXG5cdFx0Ly8gaWYoIV90aGlzLmNsb3Nlc3QoJy5zZWFyY2hJbnB1dCcpLmxlbmd0aCAmJiAhX3RoaXMuY2xvc2VzdCgnLnNlYXJjaEJveCcpLmxlbmd0aCl7XHJcblx0XHQvLyBcdCQoJy5zaG9wcGluZy1jYXJkJykucmVtb3ZlQ2xhc3MoJ3Nob3BwaW5nLWNhcmQtLWFjdGl2ZScpXHJcblx0XHQvLyBcdCQoJy5zZWFyY2hCb3gnKS5oaWRlKClcclxuXHRcdC8vIH1cclxuXHRcdFxyXG5cdH0pXHJcbn1cclxuZG9jdW1lbnRMaXN0ZW5lcigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmF2YmFyXHJcbiIsImNvbnN0IHNlcnZpY0Z1bmMgPSAoKT0+IHtcclxuXHJcblx0Ly8gbGV0IGhlYWRlckxlbmd0aD0kKCcuYWNjb3JkaW9uLWl0ZW1fX2hlYWRlcicpLmxlbmd0aDtcclxuXHQvLyBcdC8vIGFsZXJ0KGhlYWRlckxlbmd0aCk7XHJcblx0Ly8gZm9yIChsZXQgaT0wOyBpPGhlYWRlckxlbmd0aDsgaSsrKSB7XHJcblx0Ly8gXHQvLyBjb25zb2xlLmxvZyhpKTtcclxuXHQvLyBcdCQoJy5hY2NvcmRpb24taXRlbV9faGVhZGVyOmVxKCcraSsnKScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0Ly8gXHRcdC8vIGFsZXJ0KGkpO1xyXG5cdC8vIFx0XHQkKCcuYWNjb3JkaW9uLWl0ZW1fX3RleHQ6Z3QoJytpKycpJykuc2xpZGVVcCgpO1xyXG5cdC8vIFx0XHQkKCcuYWNjb3JkaW9uLWl0ZW06Z3QoJytpKycpJykucmVtb3ZlQ2xhc3MoJ2FjY29yZGlvbi1pdGVtLS1hY3RpdmUnKTtcclxuXHQvLyBcdFx0JCgnLmFjY29yZGlvbi1pdGVtOmd0KCcraSsnKScpLnJlbW92ZUNsYXNzKCdoLWF1dG8nKTtcclxuXHQvLyBcdFx0JCgnLmFjY29yZGlvbi1pdGVtX19wbHVzOmd0KCcraSsnKScpLnJlbW92ZUNsYXNzKCdwbHVzLXRpbWVzJyk7XHJcblxyXG5cdC8vIFx0XHQkKCcuYWNjb3JkaW9uLWl0ZW1fX3RleHQ6ZXEoJytpKycpJykuc2xpZGVUb2dnbGUoKTtcclxuXHQvLyBcdFx0JCgnLmFjY29yZGlvbi1pdGVtOmVxKCcraSsnKScpLnRvZ2dsZUNsYXNzKCdhY2NvcmRpb24taXRlbS0tYWN0aXZlJyk7XHJcblx0Ly8gXHRcdCQoJy5hY2NvcmRpb24taXRlbTplcSgnK2krJyknKS50b2dnbGVDbGFzcygnaC1hdXRvJyk7XHJcblx0Ly8gXHRcdCQoJy5hY2NvcmRpb24taXRlbV9fcGx1czplcSgnK2krJyknKS50b2dnbGVDbGFzcygncGx1cy10aW1lcycpO1xyXG5cdC8vIFx0fSk7XHJcblx0XHRcclxuXHQvLyB9XHJcblx0JCgnLmNvbGxhcHNlJykub24oJ3Nob3duLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2FjY29yZGlvbi1pdGVtLS1hY3RpdmUnKTsgICAgICAgXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuY29sbGFwc2UnKS5vbignaGlkZGVuLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjY29yZGlvbi1pdGVtLS1hY3RpdmUnKTsgIFxyXG4gICAgfSk7XHJcblxyXG4gLy8gICAgbGV0IGhlYWRlckxlbmd0aD0kKCcuYWNjb3JkaW9uLWl0ZW1fX2hlYWRlcicpLmxlbmd0aDtcclxuXHQvLyBmb3IgKGxldCBpPTA7IGk8aGVhZGVyTGVuZ3RoOyBpKyspIHtcclxuXHQvLyAgICAgJCgnLmFjY29yZGlvbi1pdGVtX19oZWFkZXI6ZXEoJytpKycpJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdC8vICAgICBcdCQoJy5hY2NvcmRpb24taXRlbV9faGVhZGVyOmd0KCcraSsnKScpLnJlbW92ZUNsYXNzKCdwbHVzQ2hhbmdlQ29sb3InKTtcclxuXHQvLyBcdFx0JCh0aGlzKS50b2dnbGVDbGFzcygncGx1c0NoYW5nZUNvbG9yJyk7ICAgICBcclxuXHQvLyAgICAgfSk7XHJcblx0Ly8gfVxyXG5cdCQoJy5hY2NvcmRpb24taXRlbV9faGVhZGVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdCAgICBcdCQoJy5hY2NvcmRpb24taXRlbV9faGVhZGVyJykubm90KHRoaXMpLnJlbW92ZUNsYXNzKCdwbHVzQ2hhbmdlQ29sb3InKTtcclxuXHRcdFx0JCh0aGlzKS50b2dnbGVDbGFzcygncGx1c0NoYW5nZUNvbG9yJyk7ICAgICBcclxuXHQgICAgfSk7XHJcblxyXG4gICAgLy8gJCgnLmFjY2FyZGlvbkhlYWRlcicpLm9uKCdoaWRkZW4uYnMuY29sbGFwc2luZycsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFx0JCh0aGlzKS5yZW1vdmVDbGFzcygncGx1c0NoYW5nZUNvbG9yJyk7IFxyXG4gICAgLy8gfSk7XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VydmljRnVuYyIsImNvbnN0IHNsaWNrU2xpZGVyID0gKCk9PiB7XHJcblxyXG4kKCcuc2xpZGVyLWFyZWEnKS5zbGljayh7XHJcbiAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgIHNsaWRlc1RvU2hvdzogdHJ1ZSxcclxuICAgICAgc2xpZGVzVG9TaG93OiA3LFxyXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgIHNwZWVkOiA2MDAsXHJcbiAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgLy8gY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWRlLWFycm93IHByZXYtYXJyb3dcIj48aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tbGVmdFwiPjwvaT48L2J1dHRvbj4nLFxyXG4gICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpZGUtYXJyb3cgbmV4dC1hcnJvd1wiPjxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48L2J1dHRvbj4nLFxyXG4gICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYnJlYWtwb2ludDogOTkyLFxyXG4gICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDQwMCxcclxuICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSk7XHJcbiAgICAkKFwiLnNsaWNrLWRvdHMgbGkgYnV0dG9uXCIpLnRleHQoXCJcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNsaWNrU2xpZGVyIl19
