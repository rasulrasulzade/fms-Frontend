(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
		global.contact = mod.exports;
	}
})(undefined, function (module, exports) {
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

	exports.default = contact;
	module.exports = exports["default"];
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

  var _contact2 = _interopRequireDefault(_contact);

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

    (0, _contact2.default)();

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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxtYWluXFxjb250YWN0LmpzIiwic3JjXFxqc1xcbWFpblxcY29ycG9yYXRpb24uanMiLCJzcmNcXGpzXFxtYWluXFxtYWluLmpzIiwic3JjXFxqc1xcbWFpblxcbmF2YmFyLmpzIiwic3JjXFxqc1xcbWFpblxcc2VydmljZXMuanMiLCJzcmNcXGpzXFxtYWluXFxzbGlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLEtBQU0sVUFBVSxTQUFWLE9BQVUsR0FBSztBQUNwQixJQUFBLHFCQUFBLEVBQUEsS0FBQSxDQUErQixVQUFBLENBQUEsRUFBWTtBQUMxQyxLQUFBLGNBQUE7QUFDQSxPQUFNLE9BQU8sRUFBQSxJQUFBLEVBQUEsSUFBQSxDQUFiLE1BQWEsQ0FBYjtBQUNBO0FBQ0E7QUFDQSxLQUFBLFdBQUEsRUFBQSxPQUFBLENBQXVCLEVBQUUsV0FBVyxFQUFBLElBQUEsRUFBQSxNQUFBLEdBQUEsR0FBQSxHQUFxQixFQUFBLE1BQUEsRUFBckIsU0FBcUIsRUFBckIsR0FBcEMsR0FBdUIsRUFBdkIsRUFBQSxJQUFBOztBQUVBO0FBUEQsR0FBQTtBQURELEVBQUE7O21CQVlBLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQSxVQUFNLGFBQWEsU0FBYixVQUFhLEdBQUs7QUFDdEIsZ0JBQUksUUFBTSxFQUFBLG9CQUFBLEVBQVYsTUFBQTs7QUFEc0IsZ0JBQUEsUUFBQSxTQUFBLEtBQUEsQ0FBQSxDQUFBLEVBQUE7QUFHaEI7QUFDSixvQkFBRSwyQkFBQSxDQUFBLEdBQUYsR0FBQSxFQUFBLEtBQUEsQ0FBd0MsWUFBVTtBQUM1QywwQkFBRSxnQ0FBQSxDQUFBLEdBQUYsR0FBQSxFQUFBLFFBQUEsQ0FBQSxZQUFBO0FBRE4sbUJBQUE7QUFHQSxvQkFBRSwyQkFBQSxDQUFBLEdBQUYsR0FBQSxFQUFBLFFB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QkFBYztBQUROO0FBRlosS0FQVSxFQWFWO0FBQ0Usa0JBREYsR0FBQTtBQUVFLGdCQUFVO0FBQ1Isc0JBQWM7QUFETjtBQUZaLEtBYlUsQ0FYbEIsQ0FBQSxFQUFBLFFBQUE7QUFnQ0ksTUFBQSx1QkFBQSxFQUFBLElBQUEsQ0FBQSxFQUFBO0FBbENKLEdBQUE7O29CQXFDQSxXIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNvbnN0IGNvbnRhY3QgPSAoKT0+IHtcclxuXHQkKFwiLmNvbnRhY3QtaXRlbV9fbGlua1wiKS5jbGljayhmdW5jdGlvbihlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KClcclxuXHRcdGNvbnN0IGhyZWYgPSAkKHRoaXMpLmF0dHIoXCJocmVmXCIpXHJcblx0XHQvLyBjb25zb2xlLmxvZygkKGhyZWYpLm9mZnNldCgpLnRvcClcclxuXHRcdC8vIGNvbnNvbGUubG9nKGhyZWYpXHJcblx0XHQkKFwiaHRtbCxib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6ICQoaHJlZikub2Zmc2V0KCkudG9wKyQoJ2JvZHknKS5zY3JvbGxUb3AoKS0xMDB9LCAxMDAwKTtcclxuXHRcdFxyXG5cdFx0Ly8gd2luZG93LmxvY2F0aW9uLmhhc2ggPSBocmVmXHJcblx0fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3QiLCJjb25zdCBvcmFuZ2VUZXh0ID0gKCk9PiB7XHJcbiAgbGV0IGNvdW50PSQoJy5jb3Jwb3JhdGlvbi1pbnB1dCcpLmxlbmd0aDtcclxuICBmb3IgKGxldCBpPTA7IGk8Y291bnQ7IGkrKykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGkpO1xyXG4gICAgJCgnLmNvcnBvcmF0aW9uLWlucHV0OmVxKCcraSsnKScpLmZvY3VzKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAkKCcuY29ycG9yYXRpb24tZm9ybV9fdGV4dDplcSgnK2krJyknKS5hZGRDbGFzcygnb3JhbmdlVGV4dCcpO1xyXG4gICAgfSk7XHJcbiAgICAkKCcuY29ycG9yYXRpb24taW5wdXQ6ZXEoJytpKycpJykuZm9jdXNvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICQoJy5jb3Jwb3JhdGlvbi1mb3JtX190ZXh0OmVxKCcraSsnKScpLnJlbW92ZUNsYXNzKCdvcmFuZ2VUZXh0Jyk7XHJcbiAgICB9KTsgICAgICAgXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG9yYW5nZVRleHQiLCIndXNlIHN0cmljdCdcclxuaW1wb3J0IG5hdmJhciBmcm9tICcuL25hdmJhcidcclxuaW1wb3J0IHNlcnZpY0Z1bmMgZnJvbSAnLi9zZXJ2aWNlcydcclxuaW1wb3J0IG9yYW5nZVRleHQgZnJvbSAnLi9jb3Jwb3JhdGlvbidcclxuaW1wb3J0IHNsaWNrU2xpZGVyIGZyb20gJy4vc2xpZGVyJ1xyXG5pbXBvcnQgY29udGFjdCBmcm9tICcuL2NvbnRhY3QnXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblxyXG4gbmF2YmFyKCk7XHJcblxyXG4gc2VydmljRnVuYygpO1xyXG5cclxuIG9yYW5nZVRleHQoKTtcclxuXHJcbiBzbGlja1NsaWRlcigpO1xyXG4gXHJcbiBjb250YWN0KCk7XHJcblxyXG55bWFwcy5yZWFkeShpbml0KTtcclxuICAgICAgICBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICAgICAgICAgIHZhciBteU1hcCA9IG5ldyB5bWFwcy5NYXAoXCJtYXBcIiwge1xyXG4gICAgICAgICAgICAgICAgY2VudGVyOiBbNTIuNTIwMCwgMTMuNDA1MF0sXHJcbiAgICAgICAgICAgICAgICB6b29tOiAyMixcclxuICAgICAgICAgICAgICAgIC8vIGNvbnRyb2xzOiBbJ3pvb21Db250cm9sJywgJ2Z1bGxzY3JlZW5Db250cm9sJ11cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIG15R2VvT2JqZWN0ID0gbmV3IHltYXBzLkdlb09iamVjdCh7XHJcbiAgICAgICAgICAgIC8vICAgZ2VvbWV0cnk6IHtcclxuICAgICAgICAgICAgLy8gICAgIHR5cGU6IFwiUG9pbnRcIiwgLy8gZ2VvbWV0cnkgdHlwZSAtIHBvaW50XHJcbiAgICAgICAgICAgIC8vICAgICBjb29yZGluYXRlczogWzUyLjUyMDAsIDEzLjQwNTBdIC8vINC60L7QvtGA0LTQuNC90LDRgtGLINGC0L7Rh9C60LhcclxuICAgICAgICAgICAgLy8gICB9XHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICAgIC8vIG15TWFwLmdlb09iamVjdHMuYWRkKG15R2VvT2JqZWN0KTsgLy8gUGxhY2luZyBhIGdlbyBvYmplY3Qgb24gdGhlIG1hcC5cclxuXHJcbiAgICAgICAgICAgICAgLy8gZnJvbSBGSVpaQVxyXG4gICAgICAgICAgICAgICB2YXIgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKG15TWFwLmdldENlbnRlcigpLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGxvb25Db250ZW50OiAnPHN0cm9uZz5ibHVlPC9zdHJvbmc+IGNvbG9yJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNhcHRpb246ICdGaXp6YSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCe0L/RhtC40LguXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCd0LXQvtCx0YXQvtC00LjQvNC+INGD0LrQsNC30LDRgtGMINC00LDQvdC90YvQuSDRgtC40L8g0LzQsNC60LXRgtCwLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uTGF5b3V0OiAnZGVmYXVsdCNpbWFnZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCh0LLQvtGRINC40LfQvtCx0YDQsNC20LXQvdC40LUg0LjQutC+0L3QutC4INC80LXRgtC60LguXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZUhyZWY6ICdpbWcvbWFwcy1hbmQtZmxhZ3MucG5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0KDQsNC30LzQtdGA0Ysg0LzQtdGC0LrQuC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzQwLCA1NV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCh0LzQtdGJ0LXQvdC40LUg0LvQtdCy0L7Qs9C+INCy0LXRgNGF0L3QtdCz0L4g0YPQs9C70LAg0LjQutC+0L3QutC4INC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QvlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDQtdGRIFwi0L3QvtC20LrQuFwiICjRgtC+0YfQutC4INC/0YDQuNCy0Y/Qt9C60LgpLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpY29uSW1hZ2VPZmZzZXQ6IFstNSwgLTM4XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspXHJcbiAgICAgICAgICAgIC8vIHRoZSBlbmRcclxuICAgICAgICAgfVxyXG5cclxufSk7IiwiY29uc3QgbmF2YmFyID0gKCk9PiB7XHJcblx0XHJcblx0JChcIi5jb2xsYXBzZS1ib3hfX3NlYXJjaFwiKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0JChcImkuc2VhcmNoSWNvblwiKS50b2dnbGVDbGFzcyhcImQtbm9uZVwiKTtcclxuXHRcdCQoXCJpLnRpbWVzSWNvblwiKS50b2dnbGVDbGFzcyhcImQtYmxvY2tcIik7XHJcblxyXG5cdFx0JChcIi5zZWFyY2hCb3hcIikuc2xpZGVUb2dnbGUoXCJmYXN0XCIpO1xyXG5cdFx0JChcIi5zZWFyY2hJbnB1dFwiKS5mb2N1cygpO1xyXG5cdH0pO1xyXG59XHJcbi8vIGNvbnN0IGNsb3NlTmF2ID0gKCk9PiB7XHJcblxyXG5cdFxyXG4vLyBcdGNvbnN0IG5hdiA9ICQoJy5iLW5hdicpXHJcbi8vIFx0bmF2LnJlbW92ZUNsYXNzKCdiLW5hdi0tYWN0aXZlJylcclxuXHRcclxuLy8gfVxyXG5jb25zdCBkb2N1bWVudExpc3RlbmVyID0gKGNiPW51bGwpID0+IHtcclxuXHQkKGRvY3VtZW50KS5vbignY2xpY2sgdG91Y2hzdGFydCcsIChlKT0+e1xyXG5cdFx0Y29uc3QgX3RoaXMgPSAkKGUudGFyZ2V0KVxyXG5cdFx0XHJcblxyXG5cdFx0Ly8gaWYgbm90IHNlbGYgY2xpY2tlZFxyXG5cdFx0aWYoIV90aGlzLmNsb3Nlc3QoJy5zZWFyY2hCb3gnKS5sZW5ndGggJiYgIV90aGlzLmNsb3Nlc3QoJy5jb2xsYXBzZS1ib3hfX3NlYXJjaCcpLmxlbmd0aCl7XHJcblx0XHRcdC8vIGNsb3NlTmF2KClcclxuXHRcdFx0JChcIi5zZWFyY2hCb3hcIikuZmFkZU91dCgpO1xyXG5cdFx0XHQkKFwiaS50aW1lc0ljb25cIikucmVtb3ZlQ2xhc3MoXCJkLWJsb2NrXCIpO1xyXG5cdFx0XHQkKFwiaS5zZWFyY2hJY29uXCIpLnJlbW92ZUNsYXNzKFwiZC1ub25lXCIpO1xyXG5cclxuXHRcdH1cclxuXHRcdC8vIGlmKCFfdGhpcy5jbG9zZXN0KCcuc2VhcmNoSW5wdXQnKS5sZW5ndGggJiYgIV90aGlzLmNsb3Nlc3QoJy5zZWFyY2hCb3gnKS5sZW5ndGgpe1xyXG5cdFx0Ly8gXHQkKCcuc2hvcHBpbmctY2FyZCcpLnJlbW92ZUNsYXNzKCdzaG9wcGluZy1jYXJkLS1hY3RpdmUnKVxyXG5cdFx0Ly8gXHQkKCcuc2VhcmNoQm94JykuaGlkZSgpXHJcblx0XHQvLyB9XHJcblx0XHRcclxuXHR9KVxyXG59XHJcbmRvY3VtZW50TGlzdGVuZXIoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5hdmJhclxyXG4iLCJjb25zdCBzZXJ2aWNGdW5jID0gKCk9PiB7XHJcblxyXG5cdGxldCBoZWFkZXJMZW5ndGg9JCgnLmxpc3QtaXRlbV9faGVhZGVyJykubGVuZ3RoO1xyXG5cdGZvciAobGV0IGk9MDsgaTxoZWFkZXJMZW5ndGg7IGkrKykge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coaSk7XHJcblx0XHQkKCcubGlzdC1pdGVtX19oZWFkZXI6ZXEoJytpKycpJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdFx0JCgnLmxpc3QtaXRlbV9fdGV4dDplcSgnK2krJyknKS5zbGlkZVRvZ2dsZSgnQmxvY2snKTtcclxuXHRcdFx0JCgnLmxpc3QtaXRlbTplcSgnK2krJyknKS50b2dnbGVDbGFzcygnbGlzdC1pdGVtLS1hY3RpdmUnKTtcclxuXHRcdFx0Ly8gJCgnLmxpc3QtaXRlbV9fcGx1czplcSgnK2krJyknKS50b2dnbGVDbGFzcygnTm9uZScpO1xyXG5cdFx0XHQvLyAkKCcubGlzdC1pdGVtX190aW1lczplcSgnK2krJyknKS50b2dnbGVDbGFzcygnQmxvY2snKTtcclxuXHRcdFx0JCgnLmxpc3QtaXRlbV9fcGx1czplcSgnK2krJyknKS50b2dnbGVDbGFzcygncGx1cy10aW1lcycpXHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdH1cclxuXHQvLyBsZXQgbGlzdEl0ZW1MZW5ndGg9JCgnLmxpc3QtaXRlbScpLmxlbmd0aDtcclxuXHQvLyBjb25zb2xlLmxvZyhsaXN0SXRlbUxlbmd0aCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlcnZpY0Z1bmMiLCJjb25zdCBzbGlja1NsaWRlciA9ICgpPT4ge1xyXG5cclxuJCgnLnNsaWRlci1hcmVhJykuc2xpY2soe1xyXG4gICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICBzbGlkZXNUb1Nob3c6IHRydWUsXHJcbiAgICAgIHNsaWRlc1RvU2hvdzogNyxcclxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICBzcGVlZDogNjAwLFxyXG4gICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgIC8vIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAgIHByZXZBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGlkZS1hcnJvdyBwcmV2LWFycm93XCI+PGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWxlZnRcIj48L2k+PC9idXR0b24+JyxcclxuICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWRlLWFycm93IG5leHQtYXJyb3dcIj48aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+PC9idXR0b24+JyxcclxuICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcclxuICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBicmVha3BvaW50OiA0MDAsXHJcbiAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDFcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0pO1xyXG4gICAgJChcIi5zbGljay1kb3RzIGxpIGJ1dHRvblwiKS50ZXh0KFwiXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzbGlja1NsaWRlciJdfQ==
