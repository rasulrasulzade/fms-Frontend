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

  var _services2 = _interopRequireDefault(_services);

  var _slider2 = _interopRequireDefault(_slider);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  $(document).ready(function () {

    (0, _navbar.navbar)();
    (0, _navbar.documentListener)();

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
		define(["exports"], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports);
		global.navbar = mod.exports;
	}
})(undefined, function (exports) {
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

		var x = $('.dropdown').css('display');
		if (x == 'none') {
			$('.drop').click(function () {
				$(this).find('.dropdown').slideToggle();
				$(this).find('.navbarLink:first').toggleClass('active-link');
			});
		}
	};

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
	exports.navbar = navbar;
	exports.documentListener = documentListener;
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxtYWluXFxjb250YWN0LmpzIiwic3JjXFxqc1xcbWFpblxcY29ycG9yYXRpb24uanMiLCJzcmNcXGpzXFxtYWluXFxtYWluLmpzIiwic3JjXFxqc1xcbWFpblxcbmF2YmFyLmpzIiwic3JjXFxqc1xcbWFpblxcc2VydmljZXMuanMiLCJzcmNcXGpzXFxtYWluXFxzbGlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLEtBQU0sVUFBVSxTQUFWLE9BQVUsR0FBSztBQUNwQixJQUFBLFdBQUEsRUFBQSxLQUFBLENBQXFCLFVBQUEsQ0FBQSxFQUFZO0FBQ2hDLEtBQUEsY0FBQTtBQUNBLE9BQU0sT0FBTyxFQUFBLElBQUEsRUFBQSxJQUFBLENBQWIsTUFBYSxDQUFiO0FBQ0E7QUFDQTtBQUNBLEtBQUEsV0FBQSxFQUFBLE9BQUEsQ0FBdUIsRUFBRSxXQUFXLEVBQUEsSUFBQSxFQUFBLE1BQUEsR0FBQSxHQUFBLEdBQXFCLEVBQUEsTUFBQSxFQUFyQixTQUFxQixFQUFyQixHQUFwQyxHQUF1QixFQUF2QixFQUFBLElBQUE7O0FBRUE7QUFQRCxHQUFBO0FBREQsRUFBQTs7QUFZQSxLQUFNLHNCQUFzQixTQUF0QixtQkFBc0IsR0FBSztBQUNoQyxNQUFJLFFBQU0sRUFBQSxlQUFBLEVBQVYsTUFBQTs7QUFEZ0MsTUFBQSxRQUFBLFNBQUEsS0FBQSxDQUFBLENBQUEsRUFBQTtBQUd4QjtBQUNKLEtBQUUsc0JBQUEsQ0FBQSxHQUFGLEdBQUEsRUFBQSxLQUFBLENBQW1DLFlBQVU7QUFDdkMsTUFBRSwwQkFBQSxDQUFBLEdBQUYsR0FBQSxFQUFBLFFBQUEsQ0FBQSxZQUFBO0FBRE4sSUFBQTtBQUdBLEtBQUUsc0JBQUEsQ0FBQSxHQUFGLEdBQUEsRUFBQSxRQUFBLENBQXNDLFlBQVU7QUFDMUMsTUFBRSwwQkFBQSxDQUFB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RUFBQSxnQkFBQSxRQUFBLEVBQUEsUUFBQSxFQUFBLElBQUEsQ0FBQSxFQUFBLGdCQUFBLFFBQUEsRUFBQSxXQUFBLEVBQUEsb0ZBQUEsQ0FBQSxFQUFBLGdCQUFBLFFBQUEsRUFBQSxXQUFBLEVBQUEscUZBQUEsQ0FBQSxFQUFBLGdCQUFBLFFBQUEsRUFBQSxZQUFBLEVBV2tCLENBQ1Y7QUFDRSxrQkFERixHQUFBO0FBRUUsZ0JBQVU7QUFDUixzQkFBYztBQUROO0FBRlosS0FEVSxFQU9WO0FBQ0Usa0JBREYsR0FBQTtBQUVFLGdCQUFVO0FBQ1Isc0JBQWM7QUFETjtBQUZaLEtBUFUsRUFhVjtBQUNFLGtCQURGLEdBQUE7QUFFRSxnQkFBVTtBQUNSLHNCQUFjO0FBRE47QUFGWixLQWJVLENBWGxCLENBQUEsRUFBQSxRQUFBO0FBZ0NJLE1BQUEsdUJBQUEsRUFBQSxJQUFBLENBQUEsRUFBQTtBQWxDSixHQUFBOztvQkFxQ0EsVyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zdCBjb250YWN0ID0gKCk9PiB7XHJcblx0JChcIi5tYXAtbGlua1wiKS5jbGljayhmdW5jdGlvbihlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KClcclxuXHRcdGNvbnN0IGhyZWYgPSAkKHRoaXMpLmF0dHIoXCJocmVmXCIpXHJcblx0XHQvLyBjb25zb2xlLmxvZygkKGhyZWYpLm9mZnNldCgpLnRvcClcclxuXHRcdC8vIGNvbnNvbGUubG9nKGhyZWYpXHJcblx0XHQkKFwiaHRtbCxib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6ICQoaHJlZikub2Zmc2V0KCkudG9wKyQoJ2JvZHknKS5zY3JvbGxUb3AoKS0xMDB9LCAxMDAwKTtcclxuXHRcdFxyXG5cdFx0Ly8gd2luZG93LmxvY2F0aW9uLmhhc2ggPSBocmVmXHJcblx0fSk7XHJcbn1cclxuXHJcbmNvbnN0IGNvbnRhY3RfX09yYW5nZVRleHQgPSAoKT0+IHtcclxuXHRsZXQgY291bnQ9JCgnLmNvbnRhY3RJbnB1dCcpLmxlbmd0aDtcclxuXHQgIGZvciAobGV0IGk9MDsgaTxjb3VudDsgaSsrKSB7XHJcblx0ICAgICAgICAvLyBjb25zb2xlLmxvZyhpKTtcclxuXHQgICAgJCgnLmNvbnRhY3RJbnB1dDplcSgnK2krJyknKS5mb2N1cyhmdW5jdGlvbigpe1xyXG5cdCAgICAgICAgICAkKCcuY29udGFjdElucHV0VGV4dDplcSgnK2krJyknKS5hZGRDbGFzcygnb3JhbmdlVGV4dCcpO1xyXG5cdCAgICB9KTtcclxuXHQgICAgJCgnLmNvbnRhY3RJbnB1dDplcSgnK2krJyknKS5mb2N1c291dChmdW5jdGlvbigpe1xyXG5cdCAgICAgICAgICAkKCcuY29udGFjdElucHV0VGV4dDplcSgnK2krJyknKS5yZW1vdmVDbGFzcygnb3JhbmdlVGV4dCcpO1xyXG5cdCAgICB9KTsgICAgICAgXHJcblx0ICB9XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGNvbnRhY3RcclxuZXhwb3J0IHtjb250YWN0LCBjb250YWN0X19PcmFuZ2VUZXh0fVxyXG4iLCJjb25zdCBvcmFuZ2VUZXh0ID0gKCk9PiB7XHJcbiAgbGV0IGNvdW50PSQoJy5jb3Jwb3JhdGlvbi1pbnB1dCcpLmxlbmd0aDtcclxuICBmb3IgKGxldCBpPTA7IGk8Y291bnQ7IGkrKykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGkpO1xyXG4gICAgJCgnLmNvcnBvcmF0aW9uLWlucHV0OmVxKCcraSsnKScpLmZvY3VzKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAkKCcuY29ycG9yYXRpb24tZm9ybV9fdGV4dDplcSgnK2krJyknKS5hZGRDbGFzcygnb3JhbmdlVGV4dCcpO1xyXG4gICAgfSk7XHJcbiAgICAkKCcuY29ycG9yYXRpb24taW5wdXQ6ZXEoJytpKycpJykuZm9jdXNvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICQoJy5jb3Jwb3JhdGlvbi1mb3JtX190ZXh0OmVxKCcraSsnKScpLnJlbW92ZUNsYXNzKCdvcmFuZ2VUZXh0Jyk7XHJcbiAgICB9KTsgICAgICAgXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBhZGRGaWxlID0gKCk9PiB7XHJcbiAgICAkKCcuYi1pbnZvaWNlX19pbnB1dCcpLmNoYW5nZShmdW5jdGlvbigpe1xyXG4gICAgICBjb25zdCBmaWxlcyA9ICQoJy5iLWludm9pY2VfX2lucHV0JylbMF0uZmlsZXNcclxuICAgICAgY29uc3QgZXh0ZW5zaW9ucyA9ICQoJy5iLWludm9pY2VfX2V4dGVuc2lvbnMnKVxyXG4gICAgICBleHRlbnNpb25zLnRleHQoJycpXHJcblxyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBjb25zdCBleHQgPSBmaWxlc1tpXS5uYW1lLnNwbGl0KCcuJykucG9wKCkudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgIGV4dGVuc2lvbnMuYXBwZW5kKCQoYDxkaXYgY2xhc3M9XCJiLWludm9pY2VfX2V4dFwiPiR7ZXh0fTwvZGl2PmApKVxyXG4gICAgICB9XHJcblxyXG4gICAgfSlcclxufVxyXG5leHBvcnQge29yYW5nZVRleHQsIGFkZEZpbGV9IiwiJ3VzZSBzdHJpY3QnXHJcbmltcG9ydCB7bmF2YmFyLCBkb2N1bWVudExpc3RlbmVyfSBmcm9tICcuL25hdmJhcidcclxuaW1wb3J0IHNlcnZpY0Z1bmMgZnJvbSAnLi9zZXJ2aWNlcydcclxuaW1wb3J0IHtvcmFuZ2VUZXh0LCBhZGRGaWxlfSBmcm9tICcuL2NvcnBvcmF0aW9uJ1xyXG5pbXBvcnQgc2xpY2tTbGlkZXIgZnJvbSAnLi9zbGlkZXInXHJcbmltcG9ydCB7Y29udGFjdCwgY29udGFjdF9fT3JhbmdlVGV4dH0gZnJvbSAnLi9jb250YWN0J1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuIG5hdmJhcigpO1xyXG4gZG9jdW1lbnRMaXN0ZW5lcigpO1xyXG5cclxuIHNlcnZpY0Z1bmMoKTtcclxuXHJcbiBvcmFuZ2VUZXh0KCk7XHJcblxyXG4gYWRkRmlsZSgpO1xyXG5cclxuIHNsaWNrU2xpZGVyKCk7XHJcbiBcclxuIGNvbnRhY3QoKTtcclxuXHJcbiBjb250YWN0X19PcmFuZ2VUZXh0KCk7XHJcblxyXG55bWFwcy5yZWFkeShpbml0KTtcclxuICAgICAgICBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICAgICAgICAgIHZhciBteU1hcCA9IG5ldyB5bWFwcy5NYXAoXCJtYXBcIiwge1xyXG4gICAgICAgICAgICAgICAgY2VudGVyOiBbNDAuMzg3NjU5LCA0OS44MTU1ODldLFxyXG4gICAgICAgICAgICAgICAgem9vbTogMTcsXHJcbiAgICAgICAgICAgICAgICAvLyBjb250cm9sczogWyd6b29tQ29udHJvbCcsICdmdWxsc2NyZWVuQ29udHJvbCddXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBteUdlb09iamVjdCA9IG5ldyB5bWFwcy5HZW9PYmplY3Qoe1xyXG4gICAgICAgICAgICAvLyAgIGdlb21ldHJ5OiB7XHJcbiAgICAgICAgICAgIC8vICAgICB0eXBlOiBcIlBvaW50XCIsIC8vIGdlb21ldHJ5IHR5cGUgLSBwb2ludFxyXG4gICAgICAgICAgICAvLyAgICAgY29vcmRpbmF0ZXM6IFs1Mi41MjAwLCAxMy40MDUwXSAvLyDQutC+0L7RgNC00LjQvdCw0YLRiyDRgtC+0YfQutC4XHJcbiAgICAgICAgICAgIC8vICAgfVxyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgICAvLyBteU1hcC5nZW9PYmplY3RzLmFkZChteUdlb09iamVjdCk7IC8vIFBsYWNpbmcgYSBnZW8gb2JqZWN0IG9uIHRoZSBtYXAuXHJcblxyXG4gICAgICAgICAgICAgIC8vIGZyb20gRklaWkFcclxuICAgICAgICAgICAgICAgdmFyIG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhteU1hcC5nZXRDZW50ZXIoKSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxsb29uQ29udGVudDogJzxzdHJvbmc+Ymx1ZTwvc3Ryb25nPiBjb2xvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25DYXB0aW9uOiAnRml6emEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDQntC/0YbQuNC4LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDQndC10L7QsdGF0L7QtNC40LzQviDRg9C60LDQt9Cw0YLRjCDQtNCw0L3QvdGL0Lkg0YLQuNC/INC80LDQutC10YLQsC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDQodCy0L7RkSDQuNC30L7QsdGA0LDQttC10L3QuNC1INC40LrQvtC90LrQuCDQvNC10YLQutC4LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnaW1nL21hcHMtYW5kLWZsYWdzLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCg0LDQt9C80LXRgNGLINC80LXRgtC60LguXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFs0MCwgNTVdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDQodC80LXRidC10L3QuNC1INC70LXQstC+0LPQviDQstC10YDRhdC90LXQs9C+INGD0LPQu9CwINC40LrQvtC90LrQuCDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0LXRkSBcItC90L7QttC60LhcIiAo0YLQvtGH0LrQuCDQv9GA0LjQstGP0LfQutC4KS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWNvbkltYWdlT2Zmc2V0OiBbLTUsIC0zOF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKVxyXG4gICAgICAgICAgICAvLyB0aGUgZW5kXHJcbiAgICAgICAgIH1cclxuXHJcbn0pOyIsImNvbnN0IG5hdmJhciA9ICgpPT4ge1xyXG5cdFxyXG5cdCQoXCIuY29sbGFwc2UtYm94X19zZWFyY2hcIikuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdCQoXCJpLnNlYXJjaEljb25cIikudG9nZ2xlQ2xhc3MoXCJkLW5vbmVcIik7XHJcblx0XHQkKFwiaS50aW1lc0ljb25cIikudG9nZ2xlQ2xhc3MoXCJkLWJsb2NrXCIpO1xyXG5cclxuXHRcdCQoXCIuc2VhcmNoQm94XCIpLnNsaWRlVG9nZ2xlKFwiZmFzdFwiKTtcclxuXHRcdCQoXCIuc2VhcmNoSW5wdXRcIikuZm9jdXMoKTtcclxuXHR9KTtcclxuXHJcblx0bGV0IHg9JCgnLmRyb3Bkb3duJykuY3NzKCdkaXNwbGF5JylcclxuXHRpZiAoeD09J25vbmUnKSB7XHJcblx0XHQkKCcuZHJvcCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHQkKHRoaXMpLmZpbmQoJy5kcm9wZG93bicpLnNsaWRlVG9nZ2xlKCk7XHJcblx0XHQkKHRoaXMpLmZpbmQoJy5uYXZiYXJMaW5rOmZpcnN0JykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZS1saW5rJyk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IGRvY3VtZW50TGlzdGVuZXIgPSAoY2I9bnVsbCkgPT4ge1xyXG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgKGUpPT57XHJcblx0XHRjb25zdCBfdGhpcyA9ICQoZS50YXJnZXQpXHJcblx0XHRcclxuXHJcblx0XHQvLyBpZiBub3Qgc2VsZiBjbGlja2VkXHJcblx0XHRpZighX3RoaXMuY2xvc2VzdCgnLnNlYXJjaEJveCcpLmxlbmd0aCAmJiAhX3RoaXMuY2xvc2VzdCgnLmNvbGxhcHNlLWJveF9fc2VhcmNoJykubGVuZ3RoKXtcclxuXHRcdFx0Ly8gY2xvc2VOYXYoKVxyXG5cdFx0XHQkKFwiLnNlYXJjaEJveFwiKS5mYWRlT3V0KCk7XHJcblx0XHRcdCQoXCJpLnRpbWVzSWNvblwiKS5yZW1vdmVDbGFzcyhcImQtYmxvY2tcIik7XHJcblx0XHRcdCQoXCJpLnNlYXJjaEljb25cIikucmVtb3ZlQ2xhc3MoXCJkLW5vbmVcIik7XHJcblxyXG5cdFx0fVxyXG5cdFx0Ly8gaWYoIV90aGlzLmNsb3Nlc3QoJy5zZWFyY2hJbnB1dCcpLmxlbmd0aCAmJiAhX3RoaXMuY2xvc2VzdCgnLnNlYXJjaEJveCcpLmxlbmd0aCl7XHJcblx0XHQvLyBcdCQoJy5zaG9wcGluZy1jYXJkJykucmVtb3ZlQ2xhc3MoJ3Nob3BwaW5nLWNhcmQtLWFjdGl2ZScpXHJcblx0XHQvLyBcdCQoJy5zZWFyY2hCb3gnKS5oaWRlKClcclxuXHRcdC8vIH1cclxuXHRcdFxyXG5cdH0pXHJcbn1cdFxyXG5leHBvcnQge25hdmJhciwgZG9jdW1lbnRMaXN0ZW5lcn0iLCJjb25zdCBzZXJ2aWNGdW5jID0gKCk9PiB7XHJcblxyXG5cdCQoJy5jb2xsYXBzZScpLm9uKCdzaG93bi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdhY2NvcmRpb24taXRlbS0tYWN0aXZlJyk7ICAgICAgIFxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmNvbGxhcHNlJykub24oJ2hpZGRlbi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdhY2NvcmRpb24taXRlbS0tYWN0aXZlJyk7ICBcclxuICAgIH0pO1xyXG5cclxuLy8gT1JBTkdFIFRJTUVTIElDT05cclxuXHQkKCcuYWNjb3JkaW9uLWl0ZW1fX2hlYWRlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHQgICAgXHQkKCcuYWNjb3JkaW9uLWl0ZW1fX2hlYWRlcicpLm5vdCh0aGlzKS5yZW1vdmVDbGFzcygncGx1c0NoYW5nZUNvbG9yJyk7XHJcblx0XHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoJ3BsdXNDaGFuZ2VDb2xvcicpOyAgICAgXHJcblx0ICAgIH0pO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VydmljRnVuYyIsImNvbnN0IHNsaWNrU2xpZGVyID0gKCk9PiB7XHJcblxyXG4kKCcuc2xpZGVyLWFyZWEnKS5zbGljayh7XHJcbiAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgIHNsaWRlc1RvU2hvdzogdHJ1ZSxcclxuICAgICAgc2xpZGVzVG9TaG93OiA3LFxyXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgIHNwZWVkOiA2MDAsXHJcbiAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgLy8gY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWRlLWFycm93IHByZXYtYXJyb3dcIj48aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tbGVmdFwiPjwvaT48L2J1dHRvbj4nLFxyXG4gICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpZGUtYXJyb3cgbmV4dC1hcnJvd1wiPjxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48L2J1dHRvbj4nLFxyXG4gICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYnJlYWtwb2ludDogOTkyLFxyXG4gICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDQwMCxcclxuICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSk7XHJcbiAgICAkKFwiLnNsaWNrLWRvdHMgbGkgYnV0dG9uXCIpLnRleHQoXCJcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNsaWNrU2xpZGVyIl19
