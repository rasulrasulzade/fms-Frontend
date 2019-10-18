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
"use strict";

(function (global, factory) {
      if (typeof define === "function" && define.amd) {
            define(['exports'], factory);
      } else if (typeof exports !== "undefined") {
            factory(exports);
      } else {
            var mod = {
                  exports: {}
            };
            factory(mod.exports);
            global.corporation = mod.exports;
      }
})(undefined, function (exports) {
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

      var addFile = function addFile() {
            $('.b-invoice__input').change(function () {
                  var files = $('.b-invoice__input')[0].files;
                  var extensions = $('.b-invoice__extensions');
                  extensions.text('');

                  for (var i = 0; i < files.length; i++) {
                        var ext = files[i].name.split('.').pop().toLowerCase();
                        extensions.append($('<div class="b-invoice__ext">' + ext + '</div>'));
                  }
            });
      };
      exports.orangeText = orangeText;
      exports.addFile = addFile;
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

  var _slider2 = _interopRequireDefault(_slider);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  $(document).ready(function () {

    (0, _navbar2.default)();

    (0, _services2.default)();

    (0, _corporation.orangeText)();

    (0, _corporation.addFile)();

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

        $('.collapse').on('shown.bs.collapse', function () {
            $(this).parent().addClass('accordion-item--active');
        });

        $('.collapse').on('hidden.bs.collapse', function () {
            $(this).parent().removeClass('accordion-item--active');
        });

        // ORANGE TIMES ICON
        $('.accordion-item__header').on('click', function () {
            $('.accordion-item__header').not(this).removeClass('plusChangeColor');
            $(this).toggleClass('plusChangeColor');
        });
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxtYWluXFxjb250YWN0LmpzIiwic3JjXFxqc1xcbWFpblxcY29ycG9yYXRpb24uanMiLCJzcmNcXGpzXFxtYWluXFxtYWluLmpzIiwic3JjXFxqc1xcbWFpblxcbmF2YmFyLmpzIiwic3JjXFxqc1xcbWFpblxcc2VydmljZXMuanMiLCJzcmNcXGpzXFxtYWluXFxzbGlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLEtBQU0sVUFBVSxTQUFWLE9BQVUsR0FBSztBQUNwQixJQUFBLFdBQUEsRUFBQSxLQUFBLENBQXFCLFVBQUEsQ0FBQSxFQUFZO0FBQ2hDLEtBQUEsY0FBQTtBQUNBLE9BQU0sT0FBTyxFQUFBLElBQUEsRUFBQSxJQUFBLENBQWIsTUFBYSxDQUFiO0FBQ0E7QUFDQTtBQUNBLEtBQUEsV0FBQSxFQUFBLE9BQUEsQ0FBdUIsRUFBRSxXQUFXLEVBQUEsSUFBQSxFQUFBLE1BQUEsR0FBQSxHQUFBLEdBQXFCLEVBQUEsTUFBQSxFQUFyQixTQUFxQixFQUFyQixHQUFwQyxHQUF1QixFQUF2QixFQUFBLElBQUE7O0FBRUE7QUFQRCxHQUFBO0FBREQsRUFBQTs7QUFZQSxLQUFNLHNCQUFzQixTQUF0QixtQkFBc0IsR0FBSztBQUNoQyxNQUFJLFFBQU0sRUFBQSxlQUFBLEVBQVYsTUFBQTs7QUFEZ0MsTUFBQSxRQUFBLFNBQUEsS0FBQSxDQUFBLENBQUEsRUFBQTtBQUd4QjtBQUNKLEtBQUUsc0JBQUEsQ0FBQSxHQUFGLEdBQUEsRUFBQSxLQUFBLENBQW1DLFlBQVU7QUFDdkMsTUFBRSwwQkFBQSxDQUFBLEdBQUYsR0FBQSxFQUFBLFFBQUEsQ0FBQSxZQUFBO0FBRE4sSUFBQTtBQUdBLEtBQUUsc0JBQUEsQ0FBQSxHQUFGLEdBQUEsRUFBQSxRQUFBLENBQXNDLFlBQVU7QUFDMUMsTUFBRSwwQkFBQSxDQUFB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QUNSLHNCQUFjO0FBRE47QUFGWixLQVBVLEVBYVY7QUFDRSxrQkFERixHQUFBO0FBRUUsZ0JBQVU7QUFDUixzQkFBYztBQUROO0FBRlosS0FiVSxDQVhsQixDQUFBLEVBQUEsUUFBQTtBQWdDSSxNQUFBLHVCQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUE7QUFsQ0osR0FBQTs7b0JBcUNBLFciLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY29uc3QgY29udGFjdCA9ICgpPT4ge1xyXG5cdCQoXCIubWFwLWxpbmtcIikuY2xpY2soZnVuY3Rpb24oZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXHJcblx0XHRjb25zdCBocmVmID0gJCh0aGlzKS5hdHRyKFwiaHJlZlwiKVxyXG5cdFx0Ly8gY29uc29sZS5sb2coJChocmVmKS5vZmZzZXQoKS50b3ApXHJcblx0XHQvLyBjb25zb2xlLmxvZyhocmVmKVxyXG5cdFx0JChcImh0bWwsYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAkKGhyZWYpLm9mZnNldCgpLnRvcCskKCdib2R5Jykuc2Nyb2xsVG9wKCktMTAwfSwgMTAwMCk7XHJcblx0XHRcclxuXHRcdC8vIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaHJlZlxyXG5cdH0pO1xyXG59XHJcblxyXG5jb25zdCBjb250YWN0X19PcmFuZ2VUZXh0ID0gKCk9PiB7XHJcblx0bGV0IGNvdW50PSQoJy5jb250YWN0SW5wdXQnKS5sZW5ndGg7XHJcblx0ICBmb3IgKGxldCBpPTA7IGk8Y291bnQ7IGkrKykge1xyXG5cdCAgICAgICAgLy8gY29uc29sZS5sb2coaSk7XHJcblx0ICAgICQoJy5jb250YWN0SW5wdXQ6ZXEoJytpKycpJykuZm9jdXMoZnVuY3Rpb24oKXtcclxuXHQgICAgICAgICAgJCgnLmNvbnRhY3RJbnB1dFRleHQ6ZXEoJytpKycpJykuYWRkQ2xhc3MoJ29yYW5nZVRleHQnKTtcclxuXHQgICAgfSk7XHJcblx0ICAgICQoJy5jb250YWN0SW5wdXQ6ZXEoJytpKycpJykuZm9jdXNvdXQoZnVuY3Rpb24oKXtcclxuXHQgICAgICAgICAgJCgnLmNvbnRhY3RJbnB1dFRleHQ6ZXEoJytpKycpJykucmVtb3ZlQ2xhc3MoJ29yYW5nZVRleHQnKTtcclxuXHQgICAgfSk7ICAgICAgIFxyXG5cdCAgfVxyXG59XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBjb250YWN0XHJcbmV4cG9ydCB7Y29udGFjdCwgY29udGFjdF9fT3JhbmdlVGV4dH1cclxuIiwiY29uc3Qgb3JhbmdlVGV4dCA9ICgpPT4ge1xyXG4gIGxldCBjb3VudD0kKCcuY29ycG9yYXRpb24taW5wdXQnKS5sZW5ndGg7XHJcbiAgZm9yIChsZXQgaT0wOyBpPGNvdW50OyBpKyspIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhpKTtcclxuICAgICQoJy5jb3Jwb3JhdGlvbi1pbnB1dDplcSgnK2krJyknKS5mb2N1cyhmdW5jdGlvbigpe1xyXG4gICAgICAgICAgJCgnLmNvcnBvcmF0aW9uLWZvcm1fX3RleHQ6ZXEoJytpKycpJykuYWRkQ2xhc3MoJ29yYW5nZVRleHQnKTtcclxuICAgIH0pO1xyXG4gICAgJCgnLmNvcnBvcmF0aW9uLWlucHV0OmVxKCcraSsnKScpLmZvY3Vzb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAkKCcuY29ycG9yYXRpb24tZm9ybV9fdGV4dDplcSgnK2krJyknKS5yZW1vdmVDbGFzcygnb3JhbmdlVGV4dCcpO1xyXG4gICAgfSk7ICAgICAgIFxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgYWRkRmlsZSA9ICgpPT4ge1xyXG4gICAgJCgnLmItaW52b2ljZV9faW5wdXQnKS5jaGFuZ2UoZnVuY3Rpb24oKXtcclxuICAgICAgY29uc3QgZmlsZXMgPSAkKCcuYi1pbnZvaWNlX19pbnB1dCcpWzBdLmZpbGVzXHJcbiAgICAgIGNvbnN0IGV4dGVuc2lvbnMgPSAkKCcuYi1pbnZvaWNlX19leHRlbnNpb25zJylcclxuICAgICAgZXh0ZW5zaW9ucy50ZXh0KCcnKVxyXG5cclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgY29uc3QgZXh0ID0gZmlsZXNbaV0ubmFtZS5zcGxpdCgnLicpLnBvcCgpLnRvTG93ZXJDYXNlKClcclxuICAgICAgICBleHRlbnNpb25zLmFwcGVuZCgkKGA8ZGl2IGNsYXNzPVwiYi1pbnZvaWNlX19leHRcIj4ke2V4dH08L2Rpdj5gKSlcclxuICAgICAgfVxyXG5cclxuICAgIH0pXHJcbn1cclxuZXhwb3J0IHtvcmFuZ2VUZXh0LCBhZGRGaWxlfSIsIid1c2Ugc3RyaWN0J1xyXG5pbXBvcnQgbmF2YmFyIGZyb20gJy4vbmF2YmFyJ1xyXG5pbXBvcnQgc2VydmljRnVuYyBmcm9tICcuL3NlcnZpY2VzJ1xyXG5pbXBvcnQge29yYW5nZVRleHQsIGFkZEZpbGV9IGZyb20gJy4vY29ycG9yYXRpb24nXHJcbmltcG9ydCBzbGlja1NsaWRlciBmcm9tICcuL3NsaWRlcidcclxuaW1wb3J0IHtjb250YWN0LCBjb250YWN0X19PcmFuZ2VUZXh0fSBmcm9tICcuL2NvbnRhY3QnXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblxyXG4gbmF2YmFyKCk7XHJcblxyXG4gc2VydmljRnVuYygpO1xyXG5cclxuIG9yYW5nZVRleHQoKTtcclxuXHJcbiBhZGRGaWxlKCk7XHJcblxyXG4gc2xpY2tTbGlkZXIoKTtcclxuIFxyXG4gY29udGFjdCgpO1xyXG5cclxuIGNvbnRhY3RfX09yYW5nZVRleHQoKTtcclxuXHJcbnltYXBzLnJlYWR5KGluaXQpO1xyXG4gICAgICAgIGZ1bmN0aW9uIGluaXQoKXtcclxuICAgICAgICAgICAgdmFyIG15TWFwID0gbmV3IHltYXBzLk1hcChcIm1hcFwiLCB7XHJcbiAgICAgICAgICAgICAgICBjZW50ZXI6IFs0MC4zODc2NTksIDQ5LjgxNTU4OV0sXHJcbiAgICAgICAgICAgICAgICB6b29tOiAxNyxcclxuICAgICAgICAgICAgICAgIC8vIGNvbnRyb2xzOiBbJ3pvb21Db250cm9sJywgJ2Z1bGxzY3JlZW5Db250cm9sJ11cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIG15R2VvT2JqZWN0ID0gbmV3IHltYXBzLkdlb09iamVjdCh7XHJcbiAgICAgICAgICAgIC8vICAgZ2VvbWV0cnk6IHtcclxuICAgICAgICAgICAgLy8gICAgIHR5cGU6IFwiUG9pbnRcIiwgLy8gZ2VvbWV0cnkgdHlwZSAtIHBvaW50XHJcbiAgICAgICAgICAgIC8vICAgICBjb29yZGluYXRlczogWzUyLjUyMDAsIDEzLjQwNTBdIC8vINC60L7QvtGA0LTQuNC90LDRgtGLINGC0L7Rh9C60LhcclxuICAgICAgICAgICAgLy8gICB9XHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICAgIC8vIG15TWFwLmdlb09iamVjdHMuYWRkKG15R2VvT2JqZWN0KTsgLy8gUGxhY2luZyBhIGdlbyBvYmplY3Qgb24gdGhlIG1hcC5cclxuXHJcbiAgICAgICAgICAgICAgLy8gZnJvbSBGSVpaQVxyXG4gICAgICAgICAgICAgICB2YXIgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKG15TWFwLmdldENlbnRlcigpLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGxvb25Db250ZW50OiAnPHN0cm9uZz5ibHVlPC9zdHJvbmc+IGNvbG9yJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNhcHRpb246ICdGaXp6YSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCe0L/RhtC40LguXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCd0LXQvtCx0YXQvtC00LjQvNC+INGD0LrQsNC30LDRgtGMINC00LDQvdC90YvQuSDRgtC40L8g0LzQsNC60LXRgtCwLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uTGF5b3V0OiAnZGVmYXVsdCNpbWFnZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCh0LLQvtGRINC40LfQvtCx0YDQsNC20LXQvdC40LUg0LjQutC+0L3QutC4INC80LXRgtC60LguXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZUhyZWY6ICdpbWcvbWFwcy1hbmQtZmxhZ3MucG5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0KDQsNC30LzQtdGA0Ysg0LzQtdGC0LrQuC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzQwLCA1NV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCh0LzQtdGJ0LXQvdC40LUg0LvQtdCy0L7Qs9C+INCy0LXRgNGF0L3QtdCz0L4g0YPQs9C70LAg0LjQutC+0L3QutC4INC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QvlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDQtdGRIFwi0L3QvtC20LrQuFwiICjRgtC+0YfQutC4INC/0YDQuNCy0Y/Qt9C60LgpLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpY29uSW1hZ2VPZmZzZXQ6IFstNSwgLTM4XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspXHJcbiAgICAgICAgICAgIC8vIHRoZSBlbmRcclxuICAgICAgICAgfVxyXG5cclxufSk7IiwiY29uc3QgbmF2YmFyID0gKCk9PiB7XHJcblx0XHJcblx0JChcIi5jb2xsYXBzZS1ib3hfX3NlYXJjaFwiKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0JChcImkuc2VhcmNoSWNvblwiKS50b2dnbGVDbGFzcyhcImQtbm9uZVwiKTtcclxuXHRcdCQoXCJpLnRpbWVzSWNvblwiKS50b2dnbGVDbGFzcyhcImQtYmxvY2tcIik7XHJcblxyXG5cdFx0JChcIi5zZWFyY2hCb3hcIikuc2xpZGVUb2dnbGUoXCJmYXN0XCIpO1xyXG5cdFx0JChcIi5zZWFyY2hJbnB1dFwiKS5mb2N1cygpO1xyXG5cdH0pO1xyXG59XHJcbi8vIGNvbnN0IGNsb3NlTmF2ID0gKCk9PiB7XHJcblxyXG5cdFxyXG4vLyBcdGNvbnN0IG5hdiA9ICQoJy5iLW5hdicpXHJcbi8vIFx0bmF2LnJlbW92ZUNsYXNzKCdiLW5hdi0tYWN0aXZlJylcclxuXHRcclxuLy8gfVxyXG5jb25zdCBkb2N1bWVudExpc3RlbmVyID0gKGNiPW51bGwpID0+IHtcclxuXHQkKGRvY3VtZW50KS5vbignY2xpY2sgdG91Y2hzdGFydCcsIChlKT0+e1xyXG5cdFx0Y29uc3QgX3RoaXMgPSAkKGUudGFyZ2V0KVxyXG5cdFx0XHJcblxyXG5cdFx0Ly8gaWYgbm90IHNlbGYgY2xpY2tlZFxyXG5cdFx0aWYoIV90aGlzLmNsb3Nlc3QoJy5zZWFyY2hCb3gnKS5sZW5ndGggJiYgIV90aGlzLmNsb3Nlc3QoJy5jb2xsYXBzZS1ib3hfX3NlYXJjaCcpLmxlbmd0aCl7XHJcblx0XHRcdC8vIGNsb3NlTmF2KClcclxuXHRcdFx0JChcIi5zZWFyY2hCb3hcIikuZmFkZU91dCgpO1xyXG5cdFx0XHQkKFwiaS50aW1lc0ljb25cIikucmVtb3ZlQ2xhc3MoXCJkLWJsb2NrXCIpO1xyXG5cdFx0XHQkKFwiaS5zZWFyY2hJY29uXCIpLnJlbW92ZUNsYXNzKFwiZC1ub25lXCIpO1xyXG5cclxuXHRcdH1cclxuXHRcdC8vIGlmKCFfdGhpcy5jbG9zZXN0KCcuc2VhcmNoSW5wdXQnKS5sZW5ndGggJiYgIV90aGlzLmNsb3Nlc3QoJy5zZWFyY2hCb3gnKS5sZW5ndGgpe1xyXG5cdFx0Ly8gXHQkKCcuc2hvcHBpbmctY2FyZCcpLnJlbW92ZUNsYXNzKCdzaG9wcGluZy1jYXJkLS1hY3RpdmUnKVxyXG5cdFx0Ly8gXHQkKCcuc2VhcmNoQm94JykuaGlkZSgpXHJcblx0XHQvLyB9XHJcblx0XHRcclxuXHR9KVxyXG59XHJcbmRvY3VtZW50TGlzdGVuZXIoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5hdmJhclxyXG4iLCJjb25zdCBzZXJ2aWNGdW5jID0gKCk9PiB7XHJcblxyXG5cdCQoJy5jb2xsYXBzZScpLm9uKCdzaG93bi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdhY2NvcmRpb24taXRlbS0tYWN0aXZlJyk7ICAgICAgIFxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmNvbGxhcHNlJykub24oJ2hpZGRlbi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdhY2NvcmRpb24taXRlbS0tYWN0aXZlJyk7ICBcclxuICAgIH0pO1xyXG5cclxuLy8gT1JBTkdFIFRJTUVTIElDT05cclxuXHQkKCcuYWNjb3JkaW9uLWl0ZW1fX2hlYWRlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHQgICAgXHQkKCcuYWNjb3JkaW9uLWl0ZW1fX2hlYWRlcicpLm5vdCh0aGlzKS5yZW1vdmVDbGFzcygncGx1c0NoYW5nZUNvbG9yJyk7XHJcblx0XHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoJ3BsdXNDaGFuZ2VDb2xvcicpOyAgICAgXHJcblx0ICAgIH0pO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VydmljRnVuYyIsImNvbnN0IHNsaWNrU2xpZGVyID0gKCk9PiB7XHJcblxyXG4kKCcuc2xpZGVyLWFyZWEnKS5zbGljayh7XHJcbiAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgIHNsaWRlc1RvU2hvdzogdHJ1ZSxcclxuICAgICAgc2xpZGVzVG9TaG93OiA3LFxyXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgIHNwZWVkOiA2MDAsXHJcbiAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgLy8gY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWRlLWFycm93IHByZXYtYXJyb3dcIj48aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tbGVmdFwiPjwvaT48L2J1dHRvbj4nLFxyXG4gICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpZGUtYXJyb3cgbmV4dC1hcnJvd1wiPjxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48L2J1dHRvbj4nLFxyXG4gICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYnJlYWtwb2ludDogOTkyLFxyXG4gICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDQwMCxcclxuICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSk7XHJcbiAgICAkKFwiLnNsaWNrLWRvdHMgbGkgYnV0dG9uXCIpLnRleHQoXCJcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNsaWNrU2xpZGVyIl19
