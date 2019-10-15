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
        center: [52.5200, 13.4050],
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxtYWluXFxjb250YWN0LmpzIiwic3JjXFxqc1xcbWFpblxcY29ycG9yYXRpb24uanMiLCJzcmNcXGpzXFxtYWluXFxtYWluLmpzIiwic3JjXFxqc1xcbWFpblxcbmF2YmFyLmpzIiwic3JjXFxqc1xcbWFpblxcc2VydmljZXMuanMiLCJzcmNcXGpzXFxtYWluXFxzbGlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLEtBQU0sVUFBVSxTQUFWLE9BQVUsR0FBSztBQUNwQixJQUFBLHFCQUFBLEVBQUEsS0FBQSxDQUErQixVQUFBLENBQUEsRUFBWTtBQUMxQyxLQUFBLGNBQUE7QUFDQSxPQUFNLE9BQU8sRUFBQSxJQUFBLEVBQUEsSUFBQSxDQUFiLE1BQWEsQ0FBYjtBQUNBO0FBQ0E7QUFDQSxLQUFBLFdBQUEsRUFBQSxPQUFBLENBQXVCLEVBQUUsV0FBVyxFQUFBLElBQUEsRUFBQSxNQUFBLEdBQUEsR0FBQSxHQUFxQixFQUFBLE1BQUEsRUFBckIsU0FBcUIsRUFBckIsR0FBcEMsR0FBdUIsRUFBdkIsRUFBQSxJQUFBOztBQUVBO0FBUEQsR0FBQTtBQURELEVBQUE7O0FBWUEsS0FBTSxzQkFBc0IsU0FBdEIsbUJBQXNCLEdBQUs7QUFDaEMsTUFBSSxRQUFNLEVBQUEsZUFBQSxFQUFWLE1BQUE7O0FBRGdDLE1BQUEsUUFBQSxTQUFBLEtBQUEsQ0FBQSxDQUFBLEVBQUE7QUFHeEI7QUFDSixLQUFFLHNCQUFBLENBQUEsR0FBRixHQUFBLEVBQUEsS0FBQSxDQUFtQyxZQUFVO0FBQ3ZDLE1BQUUsMEJBQUEsQ0FBQSxHQUFGLEdBQUEsRUFBQSxRQUFBLENBQUEsWUFBQTtBQUROLElBQUE7QUFHQSxLQUFFLHNCQUFBLENBQUEsR0FBRixHQUFBLEVBQUEsUUFBQSxDQUFzQyxZQUFVO0FBQzFDLE1BQUUsMEJBQUEsQ0FB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QUFLO0FBQUEsUUFBQSxRQUFBOztBQUV6QixNQUFBLGNBQUEsRUFBQSxLQUFBLEVBQUEsV0FBQTtBQUNNLFlBRE4sSUFBQTtBQUVNLG9CQUZrQjtBQUF4QixLQUFBLEVBQUEsZ0JBQUEsUUFBQSxFQUFBLGNBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxnQkFBQSxRQUFBLEVBQUEsZ0JBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxnQkFBQSxRQUFBLEVBQUEsVUFBQSxFQUFBLElBQUEsQ0FBQSxFQUFBLGdCQUFBLFFBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxDQUFBLEVBQUEsZ0JBQUEsUUFBQSxFQUFBLFFBQUEsRUFBQSxJQUFBLENBQUEsRUFBQSxnQkFBQSxRQUFBLEVBQUEsV0FBQSxFQUFBLG9GQUFBLENBQUEsRUFBQSxnQkFBQSxRQUFBLEVBQUEsV0FBQSxFQUFBLHFGQUFBLENBQUEsRUFBQSxnQkFBQSxRQUFBLEVBQUEsWUFBQSxFQVdrQixDQUNWO0FBQ0Usa0JBREYsR0FBQTtBQUVFLGdCQUFVO0FBQ1Isc0JBQWM7QUFETjtBQUZaLEtBRFUsRUFPVjtBQUNFLGtCQURGLEdBQUE7QUFFRSxnQkFBVTtBQUNSLHNCQUFjO0FBRE47QUFGWixLQVBVLEVBYVY7QUFDRSxrQkFERixHQUFBO0FBRUUsZ0JBQVU7QUFDUixzQkFBYztBQUROO0FBRlosS0FiVSxDQVhsQixDQUFBLEVBQUEsUUFBQTtBQWdDSSxNQUFBLHVCQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUE7QUFsQ0osR0FBQTs7b0JBcUNBLFciLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY29uc3QgY29udGFjdCA9ICgpPT4ge1xyXG5cdCQoXCIuY29udGFjdC1pdGVtX19saW5rXCIpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKVxyXG5cdFx0Y29uc3QgaHJlZiA9ICQodGhpcykuYXR0cihcImhyZWZcIilcclxuXHRcdC8vIGNvbnNvbGUubG9nKCQoaHJlZikub2Zmc2V0KCkudG9wKVxyXG5cdFx0Ly8gY29uc29sZS5sb2coaHJlZilcclxuXHRcdCQoXCJodG1sLGJvZHlcIikuYW5pbWF0ZSh7IHNjcm9sbFRvcDogJChocmVmKS5vZmZzZXQoKS50b3ArJCgnYm9keScpLnNjcm9sbFRvcCgpLTEwMH0sIDEwMDApO1xyXG5cdFx0XHJcblx0XHQvLyB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhyZWZcclxuXHR9KTtcclxufVxyXG5cclxuY29uc3QgY29udGFjdF9fT3JhbmdlVGV4dCA9ICgpPT4ge1xyXG5cdGxldCBjb3VudD0kKCcuY29udGFjdElucHV0JykubGVuZ3RoO1xyXG5cdCAgZm9yIChsZXQgaT0wOyBpPGNvdW50OyBpKyspIHtcclxuXHQgICAgICAgIC8vIGNvbnNvbGUubG9nKGkpO1xyXG5cdCAgICAkKCcuY29udGFjdElucHV0OmVxKCcraSsnKScpLmZvY3VzKGZ1bmN0aW9uKCl7XHJcblx0ICAgICAgICAgICQoJy5jb250YWN0SW5wdXRUZXh0OmVxKCcraSsnKScpLmFkZENsYXNzKCdvcmFuZ2VUZXh0Jyk7XHJcblx0ICAgIH0pO1xyXG5cdCAgICAkKCcuY29udGFjdElucHV0OmVxKCcraSsnKScpLmZvY3Vzb3V0KGZ1bmN0aW9uKCl7XHJcblx0ICAgICAgICAgICQoJy5jb250YWN0SW5wdXRUZXh0OmVxKCcraSsnKScpLnJlbW92ZUNsYXNzKCdvcmFuZ2VUZXh0Jyk7XHJcblx0ICAgIH0pOyAgICAgICBcclxuXHQgIH1cclxufVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgY29udGFjdFxyXG5leHBvcnQge2NvbnRhY3QsIGNvbnRhY3RfX09yYW5nZVRleHR9XHJcbiIsImNvbnN0IG9yYW5nZVRleHQgPSAoKT0+IHtcclxuICBsZXQgY291bnQ9JCgnLmNvcnBvcmF0aW9uLWlucHV0JykubGVuZ3RoO1xyXG4gIGZvciAobGV0IGk9MDsgaTxjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coaSk7XHJcbiAgICAkKCcuY29ycG9yYXRpb24taW5wdXQ6ZXEoJytpKycpJykuZm9jdXMoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICQoJy5jb3Jwb3JhdGlvbi1mb3JtX190ZXh0OmVxKCcraSsnKScpLmFkZENsYXNzKCdvcmFuZ2VUZXh0Jyk7XHJcbiAgICB9KTtcclxuICAgICQoJy5jb3Jwb3JhdGlvbi1pbnB1dDplcSgnK2krJyknKS5mb2N1c291dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgJCgnLmNvcnBvcmF0aW9uLWZvcm1fX3RleHQ6ZXEoJytpKycpJykucmVtb3ZlQ2xhc3MoJ29yYW5nZVRleHQnKTtcclxuICAgIH0pOyAgICAgICBcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgb3JhbmdlVGV4dCIsIid1c2Ugc3RyaWN0J1xyXG5pbXBvcnQgbmF2YmFyIGZyb20gJy4vbmF2YmFyJ1xyXG5pbXBvcnQgc2VydmljRnVuYyBmcm9tICcuL3NlcnZpY2VzJ1xyXG5pbXBvcnQgb3JhbmdlVGV4dCBmcm9tICcuL2NvcnBvcmF0aW9uJ1xyXG5pbXBvcnQgc2xpY2tTbGlkZXIgZnJvbSAnLi9zbGlkZXInXHJcbi8vIGltcG9ydCBjb250YWN0IGZyb20gJy4vY29udGFjdCdcclxuLy8gaW1wb3J0IGNvbnRhY3RfX09yYW5nZVRleHQgZnJvbSAnLi9jb250YWN0J1xyXG5pbXBvcnQge2NvbnRhY3QsIGNvbnRhY3RfX09yYW5nZVRleHR9IGZyb20gJy4vY29udGFjdCdcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcbiBuYXZiYXIoKTtcclxuXHJcbiBzZXJ2aWNGdW5jKCk7XHJcblxyXG4gb3JhbmdlVGV4dCgpO1xyXG5cclxuIHNsaWNrU2xpZGVyKCk7XHJcbiBcclxuIGNvbnRhY3QoKTtcclxuXHJcbiBjb250YWN0X19PcmFuZ2VUZXh0KCk7XHJcblxyXG55bWFwcy5yZWFkeShpbml0KTtcclxuICAgICAgICBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICAgICAgICAgIHZhciBteU1hcCA9IG5ldyB5bWFwcy5NYXAoXCJtYXBcIiwge1xyXG4gICAgICAgICAgICAgICAgY2VudGVyOiBbNTIuNTIwMCwgMTMuNDA1MF0sXHJcbiAgICAgICAgICAgICAgICB6b29tOiAyMixcclxuICAgICAgICAgICAgICAgIC8vIGNvbnRyb2xzOiBbJ3pvb21Db250cm9sJywgJ2Z1bGxzY3JlZW5Db250cm9sJ11cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIG15R2VvT2JqZWN0ID0gbmV3IHltYXBzLkdlb09iamVjdCh7XHJcbiAgICAgICAgICAgIC8vICAgZ2VvbWV0cnk6IHtcclxuICAgICAgICAgICAgLy8gICAgIHR5cGU6IFwiUG9pbnRcIiwgLy8gZ2VvbWV0cnkgdHlwZSAtIHBvaW50XHJcbiAgICAgICAgICAgIC8vICAgICBjb29yZGluYXRlczogWzUyLjUyMDAsIDEzLjQwNTBdIC8vINC60L7QvtGA0LTQuNC90LDRgtGLINGC0L7Rh9C60LhcclxuICAgICAgICAgICAgLy8gICB9XHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICAgIC8vIG15TWFwLmdlb09iamVjdHMuYWRkKG15R2VvT2JqZWN0KTsgLy8gUGxhY2luZyBhIGdlbyBvYmplY3Qgb24gdGhlIG1hcC5cclxuXHJcbiAgICAgICAgICAgICAgLy8gZnJvbSBGSVpaQVxyXG4gICAgICAgICAgICAgICB2YXIgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKG15TWFwLmdldENlbnRlcigpLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGxvb25Db250ZW50OiAnPHN0cm9uZz5ibHVlPC9zdHJvbmc+IGNvbG9yJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNhcHRpb246ICdGaXp6YSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCe0L/RhtC40LguXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCd0LXQvtCx0YXQvtC00LjQvNC+INGD0LrQsNC30LDRgtGMINC00LDQvdC90YvQuSDRgtC40L8g0LzQsNC60LXRgtCwLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uTGF5b3V0OiAnZGVmYXVsdCNpbWFnZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCh0LLQvtGRINC40LfQvtCx0YDQsNC20LXQvdC40LUg0LjQutC+0L3QutC4INC80LXRgtC60LguXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZUhyZWY6ICdpbWcvbWFwcy1hbmQtZmxhZ3MucG5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0KDQsNC30LzQtdGA0Ysg0LzQtdGC0LrQuC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzQwLCA1NV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCh0LzQtdGJ0LXQvdC40LUg0LvQtdCy0L7Qs9C+INCy0LXRgNGF0L3QtdCz0L4g0YPQs9C70LAg0LjQutC+0L3QutC4INC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QvlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDQtdGRIFwi0L3QvtC20LrQuFwiICjRgtC+0YfQutC4INC/0YDQuNCy0Y/Qt9C60LgpLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpY29uSW1hZ2VPZmZzZXQ6IFstNSwgLTM4XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspXHJcbiAgICAgICAgICAgIC8vIHRoZSBlbmRcclxuICAgICAgICAgfVxyXG5cclxufSk7IiwiY29uc3QgbmF2YmFyID0gKCk9PiB7XHJcblx0XHJcblx0JChcIi5jb2xsYXBzZS1ib3hfX3NlYXJjaFwiKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0JChcImkuc2VhcmNoSWNvblwiKS50b2dnbGVDbGFzcyhcImQtbm9uZVwiKTtcclxuXHRcdCQoXCJpLnRpbWVzSWNvblwiKS50b2dnbGVDbGFzcyhcImQtYmxvY2tcIik7XHJcblxyXG5cdFx0JChcIi5zZWFyY2hCb3hcIikuc2xpZGVUb2dnbGUoXCJmYXN0XCIpO1xyXG5cdFx0JChcIi5zZWFyY2hJbnB1dFwiKS5mb2N1cygpO1xyXG5cdH0pO1xyXG59XHJcbi8vIGNvbnN0IGNsb3NlTmF2ID0gKCk9PiB7XHJcblxyXG5cdFxyXG4vLyBcdGNvbnN0IG5hdiA9ICQoJy5iLW5hdicpXHJcbi8vIFx0bmF2LnJlbW92ZUNsYXNzKCdiLW5hdi0tYWN0aXZlJylcclxuXHRcclxuLy8gfVxyXG5jb25zdCBkb2N1bWVudExpc3RlbmVyID0gKGNiPW51bGwpID0+IHtcclxuXHQkKGRvY3VtZW50KS5vbignY2xpY2sgdG91Y2hzdGFydCcsIChlKT0+e1xyXG5cdFx0Y29uc3QgX3RoaXMgPSAkKGUudGFyZ2V0KVxyXG5cdFx0XHJcblxyXG5cdFx0Ly8gaWYgbm90IHNlbGYgY2xpY2tlZFxyXG5cdFx0aWYoIV90aGlzLmNsb3Nlc3QoJy5zZWFyY2hCb3gnKS5sZW5ndGggJiYgIV90aGlzLmNsb3Nlc3QoJy5jb2xsYXBzZS1ib3hfX3NlYXJjaCcpLmxlbmd0aCl7XHJcblx0XHRcdC8vIGNsb3NlTmF2KClcclxuXHRcdFx0JChcIi5zZWFyY2hCb3hcIikuZmFkZU91dCgpO1xyXG5cdFx0XHQkKFwiaS50aW1lc0ljb25cIikucmVtb3ZlQ2xhc3MoXCJkLWJsb2NrXCIpO1xyXG5cdFx0XHQkKFwiaS5zZWFyY2hJY29uXCIpLnJlbW92ZUNsYXNzKFwiZC1ub25lXCIpO1xyXG5cclxuXHRcdH1cclxuXHRcdC8vIGlmKCFfdGhpcy5jbG9zZXN0KCcuc2VhcmNoSW5wdXQnKS5sZW5ndGggJiYgIV90aGlzLmNsb3Nlc3QoJy5zZWFyY2hCb3gnKS5sZW5ndGgpe1xyXG5cdFx0Ly8gXHQkKCcuc2hvcHBpbmctY2FyZCcpLnJlbW92ZUNsYXNzKCdzaG9wcGluZy1jYXJkLS1hY3RpdmUnKVxyXG5cdFx0Ly8gXHQkKCcuc2VhcmNoQm94JykuaGlkZSgpXHJcblx0XHQvLyB9XHJcblx0XHRcclxuXHR9KVxyXG59XHJcbmRvY3VtZW50TGlzdGVuZXIoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5hdmJhclxyXG4iLCJjb25zdCBzZXJ2aWNGdW5jID0gKCk9PiB7XHJcblxyXG5cdGxldCBoZWFkZXJMZW5ndGg9JCgnLmxpc3QtaXRlbV9faGVhZGVyJykubGVuZ3RoO1xyXG5cdGZvciAobGV0IGk9MDsgaTxoZWFkZXJMZW5ndGg7IGkrKykge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coaSk7XHJcblx0XHQkKCcubGlzdC1pdGVtX19oZWFkZXI6ZXEoJytpKycpJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdFx0JCgnLmxpc3QtaXRlbV9fdGV4dDplcSgnK2krJyknKS5zbGlkZVRvZ2dsZSgnQmxvY2snKTtcclxuXHRcdFx0JCgnLmxpc3QtaXRlbTplcSgnK2krJyknKS50b2dnbGVDbGFzcygnbGlzdC1pdGVtLS1hY3RpdmUnKTtcclxuXHRcdFx0Ly8gJCgnLmxpc3QtaXRlbV9fcGx1czplcSgnK2krJyknKS50b2dnbGVDbGFzcygnTm9uZScpO1xyXG5cdFx0XHQvLyAkKCcubGlzdC1pdGVtX190aW1lczplcSgnK2krJyknKS50b2dnbGVDbGFzcygnQmxvY2snKTtcclxuXHRcdFx0JCgnLmxpc3QtaXRlbV9fcGx1czplcSgnK2krJyknKS50b2dnbGVDbGFzcygncGx1cy10aW1lcycpXHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdH1cclxuXHQvLyBsZXQgbGlzdEl0ZW1MZW5ndGg9JCgnLmxpc3QtaXRlbScpLmxlbmd0aDtcclxuXHQvLyBjb25zb2xlLmxvZyhsaXN0SXRlbUxlbmd0aCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlcnZpY0Z1bmMiLCJjb25zdCBzbGlja1NsaWRlciA9ICgpPT4ge1xyXG5cclxuJCgnLnNsaWRlci1hcmVhJykuc2xpY2soe1xyXG4gICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICBzbGlkZXNUb1Nob3c6IHRydWUsXHJcbiAgICAgIHNsaWRlc1RvU2hvdzogNyxcclxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICBzcGVlZDogNjAwLFxyXG4gICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgIC8vIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAgIHByZXZBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGlkZS1hcnJvdyBwcmV2LWFycm93XCI+PGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWxlZnRcIj48L2k+PC9idXR0b24+JyxcclxuICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWRlLWFycm93IG5leHQtYXJyb3dcIj48aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+PC9idXR0b24+JyxcclxuICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcclxuICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBicmVha3BvaW50OiA0MDAsXHJcbiAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDFcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0pO1xyXG4gICAgJChcIi5zbGljay1kb3RzIGxpIGJ1dHRvblwiKS50ZXh0KFwiXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzbGlja1NsaWRlciJdfQ==
