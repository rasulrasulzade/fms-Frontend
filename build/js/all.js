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
		$(".contact-item__link").click(function (e) {
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
        zoom: 22
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxtYWluXFxjb250YWN0LmpzIiwic3JjXFxqc1xcbWFpblxcY29ycG9yYXRpb24uanMiLCJzcmNcXGpzXFxtYWluXFxtYWluLmpzIiwic3JjXFxqc1xcbWFpblxcbmF2YmFyLmpzIiwic3JjXFxqc1xcbWFpblxcc2VydmljZXMuanMiLCJzcmNcXGpzXFxtYWluXFxzbGlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLEtBQU0sVUFBVSxTQUFWLE9BQVUsR0FBSztBQUNwQixJQUFBLHFCQUFBLEVBQUEsS0FBQSxDQUErQixVQUFBLENBQUEsRUFBWTtBQUMxQyxLQUFBLGNBQUE7QUFDQSxPQUFNLE9BQU8sRUFBQSxJQUFBLEVBQUEsSUFBQSxDQUFiLE1BQWEsQ0FBYjtBQUNBO0FBQ0E7QUFDQSxLQUFBLFdBQUEsRUFBQSxPQUFBLENBQXVCLEVBQUUsV0FBVyxFQUFBLElBQUEsRUFBQSxNQUFBLEdBQUEsR0FBQSxHQUFxQixFQUFBLE1BQUEsRUFBckIsU0FBcUIsRUFBckIsR0FBcEMsR0FBdUIsRUFBdkIsRUFBQSxJQUFBOztBQUVBO0FBUEQsR0FBQTtBQURELEVBQUE7O0FBWUEsS0FBTSxzQkFBc0IsU0FBdEIsbUJBQXNCLEdBQUs7QUFDaEMsTUFBSSxRQUFNLEVBQUEsZUFBQSxFQUFWLE1BQUE7O0FBRGdDLE1BQUEsUUFBQSxTQUFBLEtBQUEsQ0FBQSxDQUFBLEVBQUE7QUFHeEI7QUFDSixLQUFFLHNCQUFBLENBQUEsR0FBRixHQUFBLEVBQUEsS0FBQSxDQUFtQyxZQUFVO0FBQ3ZDLE1BQUUsMEJBQUEsQ0FBQSxHQUFGLEdBQUEsRUFBQSxRQUFBLENBQUEsWUFBQTtBQUROLElBQUE7QUFHQSxLQUFFLHNCQUFBLENBQUEsR0FBRixHQUFBLEVBQUEsUUFBQSxDQUFzQyxZQUFVO0FBQzFDLE1BQUUsMEJBQUEsQ0FB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QUFLO0FBQUEsUUFBQSxRQUFBOztBQUV6QixNQUFBLGNBQUEsRUFBQSxLQUFBLEVBQUEsV0FBQTtBQUNNLFlBRE4sSUFBQTtBQUVNLG9CQUZrQjtBQUF4QixLQUFBLEVBQUEsZ0JBQUEsUUFBQSxFQUFBLGNBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxnQkFBQSxRQUFBLEVBQUEsZ0JBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxnQkFBQSxRQUFBLEVBQUEsVUFBQSxFQUFBLElBQUEsQ0FBQSxFQUFBLGdCQUFBLFFBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxDQUFBLEVBQUEsZ0JBQUEsUUFBQSxFQUFBLFFBQUEsRUFBQSxJQUFBLENBQUEsRUFBQSxnQkFBQSxRQUFBLEVBQUEsV0FBQSxFQUFBLG9GQUFBLENBQUEsRUFBQSxnQkFBQSxRQUFBLEVBQUEsV0FBQSxFQUFBLHFGQUFBLENBQUEsRUFBQSxnQkFBQSxRQUFBLEVBQUEsWUFBQSxFQVdrQixDQUNWO0FBQ0Usa0JBREYsR0FBQTtBQUVFLGdCQUFVO0FBQ1Isc0JBQWM7QUFETjtBQUZaLEtBRFUsRUFPVjtBQUNFLGtCQURGLEdBQUE7QUFFRSxnQkFBVTtBQUNSLHNCQUFjO0FBRE47QUFGWixLQVBVLEVBYVY7QUFDRSxrQkFERixHQUFBO0FBRUUsZ0JBQVU7QUFDUixzQkFBYztBQUROO0FBRlosS0FiVSxDQVhsQixDQUFBLEVBQUEsUUFBQTtBQWdDSSxNQUFBLHVCQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUE7QUFsQ0osR0FBQTs7b0JBcUNBLFciLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY29uc3QgY29udGFjdCA9ICgpPT4ge1xyXG5cdCQoXCIuY29udGFjdC1pdGVtX19saW5rXCIpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKVxyXG5cdFx0Y29uc3QgaHJlZiA9ICQodGhpcykuYXR0cihcImhyZWZcIilcclxuXHRcdC8vIGNvbnNvbGUubG9nKCQoaHJlZikub2Zmc2V0KCkudG9wKVxyXG5cdFx0Ly8gY29uc29sZS5sb2coaHJlZilcclxuXHRcdCQoXCJodG1sLGJvZHlcIikuYW5pbWF0ZSh7IHNjcm9sbFRvcDogJChocmVmKS5vZmZzZXQoKS50b3ArJCgnYm9keScpLnNjcm9sbFRvcCgpLTEwMH0sIDEwMDApO1xyXG5cdFx0XHJcblx0XHQvLyB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhyZWZcclxuXHR9KTtcclxufVxyXG5cclxuY29uc3QgY29udGFjdF9fT3JhbmdlVGV4dCA9ICgpPT4ge1xyXG5cdGxldCBjb3VudD0kKCcuY29udGFjdElucHV0JykubGVuZ3RoO1xyXG5cdCAgZm9yIChsZXQgaT0wOyBpPGNvdW50OyBpKyspIHtcclxuXHQgICAgICAgIC8vIGNvbnNvbGUubG9nKGkpO1xyXG5cdCAgICAkKCcuY29udGFjdElucHV0OmVxKCcraSsnKScpLmZvY3VzKGZ1bmN0aW9uKCl7XHJcblx0ICAgICAgICAgICQoJy5jb250YWN0SW5wdXRUZXh0OmVxKCcraSsnKScpLmFkZENsYXNzKCdvcmFuZ2VUZXh0Jyk7XHJcblx0ICAgIH0pO1xyXG5cdCAgICAkKCcuY29udGFjdElucHV0OmVxKCcraSsnKScpLmZvY3Vzb3V0KGZ1bmN0aW9uKCl7XHJcblx0ICAgICAgICAgICQoJy5jb250YWN0SW5wdXRUZXh0OmVxKCcraSsnKScpLnJlbW92ZUNsYXNzKCdvcmFuZ2VUZXh0Jyk7XHJcblx0ICAgIH0pOyAgICAgICBcclxuXHQgIH1cclxufVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgY29udGFjdFxyXG5leHBvcnQge2NvbnRhY3QsIGNvbnRhY3RfX09yYW5nZVRleHR9XHJcbiIsImNvbnN0IG9yYW5nZVRleHQgPSAoKT0+IHtcclxuICBsZXQgY291bnQ9JCgnLmNvcnBvcmF0aW9uLWlucHV0JykubGVuZ3RoO1xyXG4gIGZvciAobGV0IGk9MDsgaTxjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coaSk7XHJcbiAgICAkKCcuY29ycG9yYXRpb24taW5wdXQ6ZXEoJytpKycpJykuZm9jdXMoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICQoJy5jb3Jwb3JhdGlvbi1mb3JtX190ZXh0OmVxKCcraSsnKScpLmFkZENsYXNzKCdvcmFuZ2VUZXh0Jyk7XHJcbiAgICB9KTtcclxuICAgICQoJy5jb3Jwb3JhdGlvbi1pbnB1dDplcSgnK2krJyknKS5mb2N1c291dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgJCgnLmNvcnBvcmF0aW9uLWZvcm1fX3RleHQ6ZXEoJytpKycpJykucmVtb3ZlQ2xhc3MoJ29yYW5nZVRleHQnKTtcclxuICAgIH0pOyAgICAgICBcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgb3JhbmdlVGV4dCIsIid1c2Ugc3RyaWN0J1xyXG5pbXBvcnQgbmF2YmFyIGZyb20gJy4vbmF2YmFyJ1xyXG5pbXBvcnQgc2VydmljRnVuYyBmcm9tICcuL3NlcnZpY2VzJ1xyXG5pbXBvcnQgb3JhbmdlVGV4dCBmcm9tICcuL2NvcnBvcmF0aW9uJ1xyXG5pbXBvcnQgc2xpY2tTbGlkZXIgZnJvbSAnLi9zbGlkZXInXHJcbi8vIGltcG9ydCBjb250YWN0IGZyb20gJy4vY29udGFjdCdcclxuLy8gaW1wb3J0IGNvbnRhY3RfX09yYW5nZVRleHQgZnJvbSAnLi9jb250YWN0J1xyXG5pbXBvcnQge2NvbnRhY3QsIGNvbnRhY3RfX09yYW5nZVRleHR9IGZyb20gJy4vY29udGFjdCdcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcbiBuYXZiYXIoKTtcclxuXHJcbiBzZXJ2aWNGdW5jKCk7XHJcblxyXG4gb3JhbmdlVGV4dCgpO1xyXG5cclxuIHNsaWNrU2xpZGVyKCk7XHJcbiBcclxuIGNvbnRhY3QoKTtcclxuXHJcbiBjb250YWN0X19PcmFuZ2VUZXh0KCk7XHJcblxyXG55bWFwcy5yZWFkeShpbml0KTtcclxuICAgICAgICBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICAgICAgICAgIHZhciBteU1hcCA9IG5ldyB5bWFwcy5NYXAoXCJtYXBcIiwge1xyXG4gICAgICAgICAgICAgICAgY2VudGVyOiBbNDAuMzg3NjU5LCA0OS44MTU1ODldLFxyXG4gICAgICAgICAgICAgICAgem9vbTogMjIsXHJcbiAgICAgICAgICAgICAgICAvLyBjb250cm9sczogWyd6b29tQ29udHJvbCcsICdmdWxsc2NyZWVuQ29udHJvbCddXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBteUdlb09iamVjdCA9IG5ldyB5bWFwcy5HZW9PYmplY3Qoe1xyXG4gICAgICAgICAgICAvLyAgIGdlb21ldHJ5OiB7XHJcbiAgICAgICAgICAgIC8vICAgICB0eXBlOiBcIlBvaW50XCIsIC8vIGdlb21ldHJ5IHR5cGUgLSBwb2ludFxyXG4gICAgICAgICAgICAvLyAgICAgY29vcmRpbmF0ZXM6IFs1Mi41MjAwLCAxMy40MDUwXSAvLyDQutC+0L7RgNC00LjQvdCw0YLRiyDRgtC+0YfQutC4XHJcbiAgICAgICAgICAgIC8vICAgfVxyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgICAvLyBteU1hcC5nZW9PYmplY3RzLmFkZChteUdlb09iamVjdCk7IC8vIFBsYWNpbmcgYSBnZW8gb2JqZWN0IG9uIHRoZSBtYXAuXHJcblxyXG4gICAgICAgICAgICAgIC8vIGZyb20gRklaWkFcclxuICAgICAgICAgICAgICAgdmFyIG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhteU1hcC5nZXRDZW50ZXIoKSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxsb29uQ29udGVudDogJzxzdHJvbmc+Ymx1ZTwvc3Ryb25nPiBjb2xvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25DYXB0aW9uOiAnRml6emEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDQntC/0YbQuNC4LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDQndC10L7QsdGF0L7QtNC40LzQviDRg9C60LDQt9Cw0YLRjCDQtNCw0L3QvdGL0Lkg0YLQuNC/INC80LDQutC10YLQsC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDQodCy0L7RkSDQuNC30L7QsdGA0LDQttC10L3QuNC1INC40LrQvtC90LrQuCDQvNC10YLQutC4LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnaW1nL21hcHMtYW5kLWZsYWdzLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCg0LDQt9C80LXRgNGLINC80LXRgtC60LguXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFs0MCwgNTVdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDQodC80LXRidC10L3QuNC1INC70LXQstC+0LPQviDQstC10YDRhdC90LXQs9C+INGD0LPQu9CwINC40LrQvtC90LrQuCDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0LXRkSBcItC90L7QttC60LhcIiAo0YLQvtGH0LrQuCDQv9GA0LjQstGP0LfQutC4KS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWNvbkltYWdlT2Zmc2V0OiBbLTUsIC0zOF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKVxyXG4gICAgICAgICAgICAvLyB0aGUgZW5kXHJcbiAgICAgICAgIH1cclxuXHJcbn0pOyIsImNvbnN0IG5hdmJhciA9ICgpPT4ge1xyXG5cdFxyXG5cdCQoXCIuY29sbGFwc2UtYm94X19zZWFyY2hcIikuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdCQoXCJpLnNlYXJjaEljb25cIikudG9nZ2xlQ2xhc3MoXCJkLW5vbmVcIik7XHJcblx0XHQkKFwiaS50aW1lc0ljb25cIikudG9nZ2xlQ2xhc3MoXCJkLWJsb2NrXCIpO1xyXG5cclxuXHRcdCQoXCIuc2VhcmNoQm94XCIpLnNsaWRlVG9nZ2xlKFwiZmFzdFwiKTtcclxuXHRcdCQoXCIuc2VhcmNoSW5wdXRcIikuZm9jdXMoKTtcclxuXHR9KTtcclxufVxyXG4vLyBjb25zdCBjbG9zZU5hdiA9ICgpPT4ge1xyXG5cclxuXHRcclxuLy8gXHRjb25zdCBuYXYgPSAkKCcuYi1uYXYnKVxyXG4vLyBcdG5hdi5yZW1vdmVDbGFzcygnYi1uYXYtLWFjdGl2ZScpXHJcblx0XHJcbi8vIH1cclxuY29uc3QgZG9jdW1lbnRMaXN0ZW5lciA9IChjYj1udWxsKSA9PiB7XHJcblx0JChkb2N1bWVudCkub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCAoZSk9PntcclxuXHRcdGNvbnN0IF90aGlzID0gJChlLnRhcmdldClcclxuXHRcdFxyXG5cclxuXHRcdC8vIGlmIG5vdCBzZWxmIGNsaWNrZWRcclxuXHRcdGlmKCFfdGhpcy5jbG9zZXN0KCcuc2VhcmNoQm94JykubGVuZ3RoICYmICFfdGhpcy5jbG9zZXN0KCcuY29sbGFwc2UtYm94X19zZWFyY2gnKS5sZW5ndGgpe1xyXG5cdFx0XHQvLyBjbG9zZU5hdigpXHJcblx0XHRcdCQoXCIuc2VhcmNoQm94XCIpLmZhZGVPdXQoKTtcclxuXHRcdFx0JChcImkudGltZXNJY29uXCIpLnJlbW92ZUNsYXNzKFwiZC1ibG9ja1wiKTtcclxuXHRcdFx0JChcImkuc2VhcmNoSWNvblwiKS5yZW1vdmVDbGFzcyhcImQtbm9uZVwiKTtcclxuXHJcblx0XHR9XHJcblx0XHQvLyBpZighX3RoaXMuY2xvc2VzdCgnLnNlYXJjaElucHV0JykubGVuZ3RoICYmICFfdGhpcy5jbG9zZXN0KCcuc2VhcmNoQm94JykubGVuZ3RoKXtcclxuXHRcdC8vIFx0JCgnLnNob3BwaW5nLWNhcmQnKS5yZW1vdmVDbGFzcygnc2hvcHBpbmctY2FyZC0tYWN0aXZlJylcclxuXHRcdC8vIFx0JCgnLnNlYXJjaEJveCcpLmhpZGUoKVxyXG5cdFx0Ly8gfVxyXG5cdFx0XHJcblx0fSlcclxufVxyXG5kb2N1bWVudExpc3RlbmVyKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuYXZiYXJcclxuIiwiY29uc3Qgc2VydmljRnVuYyA9ICgpPT4ge1xyXG5cclxuXHRsZXQgaGVhZGVyTGVuZ3RoPSQoJy5saXN0LWl0ZW1fX2hlYWRlcicpLmxlbmd0aDtcclxuXHRmb3IgKGxldCBpPTA7IGk8aGVhZGVyTGVuZ3RoOyBpKyspIHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKGkpO1xyXG5cdFx0JCgnLmxpc3QtaXRlbV9faGVhZGVyOmVxKCcraSsnKScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHRcdCQoJy5saXN0LWl0ZW1fX3RleHQ6ZXEoJytpKycpJykuc2xpZGVUb2dnbGUoJ0Jsb2NrJyk7XHJcblx0XHRcdCQoJy5saXN0LWl0ZW06ZXEoJytpKycpJykudG9nZ2xlQ2xhc3MoJ2xpc3QtaXRlbS0tYWN0aXZlJyk7XHJcblx0XHRcdC8vICQoJy5saXN0LWl0ZW1fX3BsdXM6ZXEoJytpKycpJykudG9nZ2xlQ2xhc3MoJ05vbmUnKTtcclxuXHRcdFx0Ly8gJCgnLmxpc3QtaXRlbV9fdGltZXM6ZXEoJytpKycpJykudG9nZ2xlQ2xhc3MoJ0Jsb2NrJyk7XHJcblx0XHRcdCQoJy5saXN0LWl0ZW1fX3BsdXM6ZXEoJytpKycpJykudG9nZ2xlQ2xhc3MoJ3BsdXMtdGltZXMnKVxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHR9XHJcblx0Ly8gbGV0IGxpc3RJdGVtTGVuZ3RoPSQoJy5saXN0LWl0ZW0nKS5sZW5ndGg7XHJcblx0Ly8gY29uc29sZS5sb2cobGlzdEl0ZW1MZW5ndGgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZXJ2aWNGdW5jIiwiY29uc3Qgc2xpY2tTbGlkZXIgPSAoKT0+IHtcclxuXHJcbiQoJy5zbGlkZXItYXJlYScpLnNsaWNrKHtcclxuICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgc2xpZGVzVG9TaG93OiB0cnVlLFxyXG4gICAgICBzbGlkZXNUb1Nob3c6IDcsXHJcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgc3BlZWQ6IDYwMCxcclxuICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAvLyBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpZGUtYXJyb3cgcHJldi1hcnJvd1wiPjxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPjwvYnV0dG9uPicsXHJcbiAgICAgIG5leHRBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGlkZS1hcnJvdyBuZXh0LWFycm93XCI+PGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPjwvYnV0dG9uPicsXHJcbiAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBicmVha3BvaW50OiA5OTIsXHJcbiAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogM1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYnJlYWtwb2ludDogNDAwLFxyXG4gICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9KTtcclxuICAgICQoXCIuc2xpY2stZG90cyBsaSBidXR0b25cIikudGV4dChcIlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2xpY2tTbGlkZXIiXX0=
