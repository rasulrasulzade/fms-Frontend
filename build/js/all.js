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

                  if (files.length == 1) {
                        extensions.append($('<div class="b-invoice__ext">' + files[0].name + '</div>'));
                  } else if (files.length > 1) {
                        extensions.append($('<div class="b-invoice__ext">' + files.length + ' Fayl se\xE7ildi</div>'));
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxtYWluXFxjb250YWN0LmpzIiwic3JjXFxqc1xcbWFpblxcY29ycG9yYXRpb24uanMiLCJzcmNcXGpzXFxtYWluXFxtYWluLmpzIiwic3JjXFxqc1xcbWFpblxcbmF2YmFyLmpzIiwic3JjXFxqc1xcbWFpblxcc2VydmljZXMuanMiLCJzcmNcXGpzXFxtYWluXFxzbGlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLEtBQU0sVUFBVSxTQUFWLE9BQVUsR0FBSztBQUNwQixJQUFBLFdBQUEsRUFBQSxLQUFBLENBQXFCLFVBQUEsQ0FBQSxFQUFZO0FBQ2hDLEtBQUEsY0FBQTtBQUNBLE9BQU0sT0FBTyxFQUFBLElBQUEsRUFBQSxJQUFBLENBQWIsTUFBYSxDQUFiO0FBQ0E7QUFDQTtBQUNBLEtBQUEsV0FBQSxFQUFBLE9BQUEsQ0FBdUIsRUFBRSxXQUFXLEVBQUEsSUFBQSxFQUFBLE1BQUEsR0FBQSxHQUFBLEdBQXFCLEVBQUEsTUFBQSxFQUFyQixTQUFxQixFQUFyQixHQUFwQyxHQUF1QixFQUF2QixFQUFBLElBQUE7O0FBRUE7QUFQRCxHQUFBO0FBREQsRUFBQTs7QUFZQSxLQUFNLHNCQUFzQixTQUF0QixtQkFBc0IsR0FBSztBQUNoQyxNQUFJLFFBQU0sRUFBQSxlQUFBLEVBQVYsTUFBQTs7QUFEZ0MsTUFBQSxRQUFBLFNBQUEsS0FBQSxDQUFBLENBQUEsRUFBQTtBQUd4QjtBQUNKLEtBQUUsc0JBQUEsQ0FBQSxHQUFGLEdBQUEsRUFBQSxLQUFBLENBQW1DLFlBQVU7QUFDdkMsTUFBRSwwQkFBQSxDQUFBLEdBQUYsR0FBQSxFQUFBLFFBQUEsQ0FBQSxZQUFBO0FBRE4sSUFBQTtBQUdBLEtBQUUsc0JBQUEsQ0FBQSxHQUFGLEdBQUEsRUFBQSxRQUFBLENBQXNDLFlBQVU7QUFDMUMsTUFBRSwwQkFBQSxDQUFB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c0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zdCBjb250YWN0ID0gKCk9PiB7XHJcblx0JChcIi5tYXAtbGlua1wiKS5jbGljayhmdW5jdGlvbihlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KClcclxuXHRcdGNvbnN0IGhyZWYgPSAkKHRoaXMpLmF0dHIoXCJocmVmXCIpXHJcblx0XHQvLyBjb25zb2xlLmxvZygkKGhyZWYpLm9mZnNldCgpLnRvcClcclxuXHRcdC8vIGNvbnNvbGUubG9nKGhyZWYpXHJcblx0XHQkKFwiaHRtbCxib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6ICQoaHJlZikub2Zmc2V0KCkudG9wKyQoJ2JvZHknKS5zY3JvbGxUb3AoKS0xMDB9LCAxMDAwKTtcclxuXHRcdFxyXG5cdFx0Ly8gd2luZG93LmxvY2F0aW9uLmhhc2ggPSBocmVmXHJcblx0fSk7XHJcbn1cclxuXHJcbmNvbnN0IGNvbnRhY3RfX09yYW5nZVRleHQgPSAoKT0+IHtcclxuXHRsZXQgY291bnQ9JCgnLmNvbnRhY3RJbnB1dCcpLmxlbmd0aDtcclxuXHQgIGZvciAobGV0IGk9MDsgaTxjb3VudDsgaSsrKSB7XHJcblx0ICAgICAgICAvLyBjb25zb2xlLmxvZyhpKTtcclxuXHQgICAgJCgnLmNvbnRhY3RJbnB1dDplcSgnK2krJyknKS5mb2N1cyhmdW5jdGlvbigpe1xyXG5cdCAgICAgICAgICAkKCcuY29udGFjdElucHV0VGV4dDplcSgnK2krJyknKS5hZGRDbGFzcygnb3JhbmdlVGV4dCcpO1xyXG5cdCAgICB9KTtcclxuXHQgICAgJCgnLmNvbnRhY3RJbnB1dDplcSgnK2krJyknKS5mb2N1c291dChmdW5jdGlvbigpe1xyXG5cdCAgICAgICAgICAkKCcuY29udGFjdElucHV0VGV4dDplcSgnK2krJyknKS5yZW1vdmVDbGFzcygnb3JhbmdlVGV4dCcpO1xyXG5cdCAgICB9KTsgICAgICAgXHJcblx0ICB9XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGNvbnRhY3RcclxuZXhwb3J0IHtjb250YWN0LCBjb250YWN0X19PcmFuZ2VUZXh0fVxyXG4iLCJjb25zdCBvcmFuZ2VUZXh0ID0gKCk9PiB7XHJcbiAgbGV0IGNvdW50PSQoJy5jb3Jwb3JhdGlvbi1pbnB1dCcpLmxlbmd0aDtcclxuICBmb3IgKGxldCBpPTA7IGk8Y291bnQ7IGkrKykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGkpO1xyXG4gICAgJCgnLmNvcnBvcmF0aW9uLWlucHV0OmVxKCcraSsnKScpLmZvY3VzKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAkKCcuY29ycG9yYXRpb24tZm9ybV9fdGV4dDplcSgnK2krJyknKS5hZGRDbGFzcygnb3JhbmdlVGV4dCcpO1xyXG4gICAgfSk7XHJcbiAgICAkKCcuY29ycG9yYXRpb24taW5wdXQ6ZXEoJytpKycpJykuZm9jdXNvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICQoJy5jb3Jwb3JhdGlvbi1mb3JtX190ZXh0OmVxKCcraSsnKScpLnJlbW92ZUNsYXNzKCdvcmFuZ2VUZXh0Jyk7XHJcbiAgICB9KTsgICAgICAgXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBhZGRGaWxlID0gKCk9PiB7XHJcbiAgICAkKCcuYi1pbnZvaWNlX19pbnB1dCcpLmNoYW5nZShmdW5jdGlvbigpe1xyXG4gICAgICBjb25zdCBmaWxlcyA9ICQoJy5iLWludm9pY2VfX2lucHV0JylbMF0uZmlsZXNcclxuICAgICAgY29uc3QgZXh0ZW5zaW9ucyA9ICQoJy5iLWludm9pY2VfX2V4dGVuc2lvbnMnKVxyXG4gICAgICBleHRlbnNpb25zLnRleHQoJycpXHJcblxyXG4gICAgIFxyXG5cdCAgICBpZihmaWxlcy5sZW5ndGggPT0gMSkge1xyXG5cdCAgICBcdGV4dGVuc2lvbnMuYXBwZW5kKCQoYDxkaXYgY2xhc3M9XCJiLWludm9pY2VfX2V4dFwiPiR7ZmlsZXNbMF0ubmFtZX08L2Rpdj5gKSlcclxuXHQgICAgfSBlbHNlIGlmIChmaWxlcy5sZW5ndGggPiAxKSB7XHJcblx0ICAgIFx0ZXh0ZW5zaW9ucy5hcHBlbmQoJChgPGRpdiBjbGFzcz1cImItaW52b2ljZV9fZXh0XCI+JHtmaWxlcy5sZW5ndGh9IEZheWwgc2XDp2lsZGk8L2Rpdj5gKSlcclxuXHQgICAgfVxyXG4gICAgfSlcclxufVxyXG5leHBvcnQge29yYW5nZVRleHQsIGFkZEZpbGV9IiwiJ3VzZSBzdHJpY3QnXHJcbmltcG9ydCB7bmF2YmFyLCBkb2N1bWVudExpc3RlbmVyfSBmcm9tICcuL25hdmJhcidcclxuaW1wb3J0IHNlcnZpY0Z1bmMgZnJvbSAnLi9zZXJ2aWNlcydcclxuaW1wb3J0IHtvcmFuZ2VUZXh0LCBhZGRGaWxlfSBmcm9tICcuL2NvcnBvcmF0aW9uJ1xyXG5pbXBvcnQgc2xpY2tTbGlkZXIgZnJvbSAnLi9zbGlkZXInXHJcbmltcG9ydCB7Y29udGFjdCwgY29udGFjdF9fT3JhbmdlVGV4dH0gZnJvbSAnLi9jb250YWN0J1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuIG5hdmJhcigpO1xyXG4gZG9jdW1lbnRMaXN0ZW5lcigpO1xyXG5cclxuIHNlcnZpY0Z1bmMoKTtcclxuXHJcbiBvcmFuZ2VUZXh0KCk7XHJcblxyXG4gYWRkRmlsZSgpO1xyXG5cclxuIHNsaWNrU2xpZGVyKCk7XHJcbiBcclxuIGNvbnRhY3QoKTtcclxuXHJcbiBjb250YWN0X19PcmFuZ2VUZXh0KCk7XHJcblxyXG59KTsiLCJjb25zdCBuYXZiYXIgPSAoKT0+IHtcclxuXHRcclxuXHQkKFwiLmNvbGxhcHNlLWJveF9fc2VhcmNoXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHQkKFwiaS5zZWFyY2hJY29uXCIpLnRvZ2dsZUNsYXNzKFwiZC1ub25lXCIpO1xyXG5cdFx0JChcImkudGltZXNJY29uXCIpLnRvZ2dsZUNsYXNzKFwiZC1ibG9ja1wiKTtcclxuXHJcblx0XHQkKFwiLnNlYXJjaEJveFwiKS5zbGlkZVRvZ2dsZShcImZhc3RcIik7XHJcblx0XHQkKFwiLnNlYXJjaElucHV0XCIpLmZvY3VzKCk7XHJcblx0fSk7XHJcblxyXG5cdGxldCB4PSQoJy5kcm9wZG93bicpLmNzcygnZGlzcGxheScpXHJcblx0aWYgKHg9PSdub25lJykge1xyXG5cdFx0JCgnLmRyb3AnKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0JCh0aGlzKS5maW5kKCcuZHJvcGRvd24nKS5zbGlkZVRvZ2dsZSgpO1xyXG5cdFx0JCh0aGlzKS5maW5kKCcubmF2YmFyTGluazpmaXJzdCcpLnRvZ2dsZUNsYXNzKCdhY3RpdmUtbGluaycpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBkb2N1bWVudExpc3RlbmVyID0gKGNiPW51bGwpID0+IHtcclxuXHQkKGRvY3VtZW50KS5vbignY2xpY2sgdG91Y2hzdGFydCcsIChlKT0+e1xyXG5cdFx0Y29uc3QgX3RoaXMgPSAkKGUudGFyZ2V0KVxyXG5cdFx0XHJcblxyXG5cdFx0Ly8gaWYgbm90IHNlbGYgY2xpY2tlZFxyXG5cdFx0aWYoIV90aGlzLmNsb3Nlc3QoJy5zZWFyY2hCb3gnKS5sZW5ndGggJiYgIV90aGlzLmNsb3Nlc3QoJy5jb2xsYXBzZS1ib3hfX3NlYXJjaCcpLmxlbmd0aCl7XHJcblx0XHRcdC8vIGNsb3NlTmF2KClcclxuXHRcdFx0JChcIi5zZWFyY2hCb3hcIikuZmFkZU91dCgpO1xyXG5cdFx0XHQkKFwiaS50aW1lc0ljb25cIikucmVtb3ZlQ2xhc3MoXCJkLWJsb2NrXCIpO1xyXG5cdFx0XHQkKFwiaS5zZWFyY2hJY29uXCIpLnJlbW92ZUNsYXNzKFwiZC1ub25lXCIpO1xyXG5cclxuXHRcdH1cclxuXHRcdC8vIGlmKCFfdGhpcy5jbG9zZXN0KCcuc2VhcmNoSW5wdXQnKS5sZW5ndGggJiYgIV90aGlzLmNsb3Nlc3QoJy5zZWFyY2hCb3gnKS5sZW5ndGgpe1xyXG5cdFx0Ly8gXHQkKCcuc2hvcHBpbmctY2FyZCcpLnJlbW92ZUNsYXNzKCdzaG9wcGluZy1jYXJkLS1hY3RpdmUnKVxyXG5cdFx0Ly8gXHQkKCcuc2VhcmNoQm94JykuaGlkZSgpXHJcblx0XHQvLyB9XHJcblx0XHRcclxuXHR9KVxyXG59XHRcclxuZXhwb3J0IHtuYXZiYXIsIGRvY3VtZW50TGlzdGVuZXJ9IiwiY29uc3Qgc2VydmljRnVuYyA9ICgpPT4ge1xyXG5cclxuXHQkKCcuY29sbGFwc2UnKS5vbignc2hvd24uYnMuY29sbGFwc2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnYWNjb3JkaW9uLWl0ZW0tLWFjdGl2ZScpOyAgICAgICBcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5jb2xsYXBzZScpLm9uKCdoaWRkZW4uYnMuY29sbGFwc2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnYWNjb3JkaW9uLWl0ZW0tLWFjdGl2ZScpOyAgXHJcbiAgICB9KTtcclxuXHJcbi8vIE9SQU5HRSBUSU1FUyBJQ09OXHJcblx0JCgnLmFjY29yZGlvbi1pdGVtX19oZWFkZXInKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0ICAgIFx0JCgnLmFjY29yZGlvbi1pdGVtX19oZWFkZXInKS5ub3QodGhpcykucmVtb3ZlQ2xhc3MoJ3BsdXNDaGFuZ2VDb2xvcicpO1xyXG5cdFx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdwbHVzQ2hhbmdlQ29sb3InKTsgICAgIFxyXG5cdCAgICB9KTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlcnZpY0Z1bmMiLCJjb25zdCBzbGlja1NsaWRlciA9ICgpPT4ge1xyXG5cclxuJCgnLnNsaWRlci1hcmVhJykuc2xpY2soe1xyXG4gICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICBzbGlkZXNUb1Nob3c6IHRydWUsXHJcbiAgICAgIHNsaWRlc1RvU2hvdzogNyxcclxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICBzcGVlZDogNjAwLFxyXG4gICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgIC8vIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAgIHByZXZBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGlkZS1hcnJvdyBwcmV2LWFycm93XCI+PGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWxlZnRcIj48L2k+PC9idXR0b24+JyxcclxuICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWRlLWFycm93IG5leHQtYXJyb3dcIj48aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+PC9idXR0b24+JyxcclxuICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcclxuICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBicmVha3BvaW50OiA0MDAsXHJcbiAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDFcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0pO1xyXG4gICAgJChcIi5zbGljay1kb3RzIGxpIGJ1dHRvblwiKS50ZXh0KFwiXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzbGlja1NsaWRlciJdfQ==
