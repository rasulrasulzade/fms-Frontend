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

    // ymaps.ready(initMap);
    //         function initMap(){
    //             var myMap = new ymaps.Map("map", {
    //                 // center: [x, y],
    //                 // center: [40.387659, 49.815589],
    //                 zoom: 17,
    //                 // controls: ['zoomControl', 'fullscreenControl']
    //             });
    //               // from FMS
    //                var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    //                                           balloonContent: '<strong>blue</strong> color',
    //                                           iconCaption: 'FMS'
    //                                       }, {
    //                                           iconLayout: 'default#image',
    //                                           iconImageHref: 'img/maps-and-flags.png',
    //                                           iconImageSize: [40, 55],
    //                                           // iconImageOffset: [-5, -38]
    //                                       })
    //                                       myMap.geoObjects.add(myPlacemark)
    //             // the end
    //          }
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxtYWluXFxjb250YWN0LmpzIiwic3JjXFxqc1xcbWFpblxcY29ycG9yYXRpb24uanMiLCJzcmNcXGpzXFxtYWluXFxtYWluLmpzIiwic3JjXFxqc1xcbWFpblxcbmF2YmFyLmpzIiwic3JjXFxqc1xcbWFpblxcc2VydmljZXMuanMiLCJzcmNcXGpzXFxtYWluXFxzbGlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLEtBQU0sVUFBVSxTQUFWLE9BQVUsR0FBSztBQUNwQixJQUFBLFdBQUEsRUFBQSxLQUFBLENBQXFCLFVBQUEsQ0FBQSxFQUFZO0FBQ2hDLEtBQUEsY0FBQTtBQUNBLE9BQU0sT0FBTyxFQUFBLElBQUEsRUFBQSxJQUFBLENBQWIsTUFBYSxDQUFiO0FBQ0E7QUFDQTtBQUNBLEtBQUEsV0FBQSxFQUFBLE9BQUEsQ0FBdUIsRUFBRSxXQUFXLEVBQUEsSUFBQSxFQUFBLE1BQUEsR0FBQSxHQUFBLEdBQXFCLEVBQUEsTUFBQSxFQUFyQixTQUFxQixFQUFyQixHQUFwQyxHQUF1QixFQUF2QixFQUFBLElBQUE7O0FBRUE7QUFQRCxHQUFBO0FBREQsRUFBQTs7QUFZQSxLQUFNLHNCQUFzQixTQUF0QixtQkFBc0IsR0FBSztBQUNoQyxNQUFJLFFBQU0sRUFBQSxlQUFBLEVBQVYsTUFBQTs7QUFEZ0MsTUFBQSxRQUFBLFNBQUEsS0FBQSxDQUFBLENBQUEsRUFBQTtBQUd4QjtBQUNKLEtBQUUsc0JBQUEsQ0FBQSxHQUFGLEdBQUEsRUFBQSxLQUFBLENBQW1DLFlBQVU7QUFDdkMsTUFBRSwwQkFBQSxDQUFBLEdBQUYsR0FBQSxFQUFBLFFBQUEsQ0FBQSxZQUFBO0FBRE4sSUFBQTtBQUdBLEtBQUUsc0JBQUEsQ0FBQSxHQUFGLEdBQUEsRUFBQSxRQUFBLENBQXNDLFlBQVU7QUFDMUMsTUFBRSwwQkFBQSxDQUFBLEdBQUYsR0FBQSxFQUFBLFdBQUEsQ0FBQSxZQUFBO0FBRE4sSUFBQTtBQVA0QixHQUFBOztBQUU5QixPQUFLLElBQUksSUFBVCxDQUFBLEVBQWMsSUFBZCxLQUFBLEVBQUEsR0FBQSxFQUE0QjtBQUFBLFNBQW5CLENBQW1CO0FBUTNCO0FBVkosRUFBQTs7QUFhQTtTQUNBLE8sR0FBQSxPO1NBQUEsbUIsR0FBQSxtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBLFVBQU0sYUFBYSxTQUFiLFVBQWEsR0FBSztBQUN0QixnQkFBSSxRQUFNLEVBQUEsb0JBQUEsRUFBVixNQUFBOztBQURzQixnQkFBQSxRQUFBLFNBQUEsS0FBQSxDQUFBLENBQUEsRUFBQTtBQUdoQjtBQUNKLG9CQUFFLDJCQUFBLENBQUEsR0FBRixHQUFBLEVBQUEsS0FBQSxDQUF3QyxZQUFVO0FBQzVDLDBCQUFFLGdDQUFBLENBQUEsR0FBRixHQUFBLEVBQUEsUUFBQSxDQUFBLFlBQUE7QUFETixtQkFBQTtBQUdBLG9CQUFFLDJCQUFBLENBQUEsR0FBRixHQUFBLEVBQUEsUUFBQSxDQUEyQyxZQUFVO0FBQy9DLDBCQUFFLGdDQUFBLENBQUEsR0FBRixHQUFBLEVBQUEsV0FBQSxDQUFBLFlBQUE7QUFETixtQkFBQTtBQVBvQixhQUFBOztBQUV0QixpQkFBSyxJQUFJLElBQVQsQ0FBQSxFQUFjLElBQWQsS0FBQSxFQUFBLEdBQUEsRUFBNEI7QUFBQSx3QkFBbkIsQ0FBbUI7QUFRM0I7QUFWSCxPQUFBOztBQWFBLFVBQU0sVUFBVSxTQUFWLE9BQVUsR0FBSztBQUNqQixjQUFBLG1CQUFBLEVBQUEsTUFBQSxDQUE4QixZQUFVO0FBQ3RDLHNCQUFNLFFBQVEsRUFBQSxtQkFBQSxFQUFBLENBQUEsRUFBZCxLQUFBO0FBQ0Esc0JBQU0sYUFBYSxFQUFuQix3QkFBbUIsQ0FBbkI7QUFDQSw2QkFBQSxJQUFBLENBQUEsRUFBQTs7QUFFQSx1QkFBSyxJQUFJLElBQVQsQ0FBQSxFQUFnQixJQUFJLE1BQXBCLE1BQUEsRUFBQSxHQUFBLEVBQXNDO0FBQ3BDLDRCQUFNLE1BQU0sTUFBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLEtBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxHQUFaLFdBQVksRUFBWjtBQUNBLG1DQUFBLE1BQUEsQ0FBa0IsRUFBQSxpQ0FBbEIsR0FBa0IsR0FBbEIsUUFBa0IsQ0FBbEI7QUFDRDtBQVJILGFBQUE7QUFESixPQUFBO2NBYUEsVSxHQUFBLFU7Y0FBQSxPLEdBQUEsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxJQUFBLFFBQUEsRUFBQSxLQUFBLENBQWtCLFlBQVU7O0FBRTNCLEtBQUEsR0FBQSxRQUFBLE1BQUE7QUFDQSxLQUFBLEdBQUEsUUFBQSxnQkFBQTs7QUFFQSxLQUFBLEdBQUEsV0FBQSxPQUFBOztBQUVBLEtBQUEsR0FBQSxhQUFBLFVBQUE7O0FBRUEsS0FBQSxHQUFBLGFBQUEsT0FBQTs7QUFFQSxLQUFBLEdBQUEsU0FBQSxPQUFBOztBQUVBLEtBQUEsR0FBQSxTQUFBLE9BQUE7O0FBRUEsS0FBQSxHQUFBLFNBQUEsbUJBQUE7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckNBLEdBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BLEtBQU0sU0FBUyxTQUFULE1BQVMsR0FBSzs7QUFFbkIsSUFBQSx1QkFBQSxFQUFBLEtBQUEsQ0FBaUMsWUFBVTtBQUMxQyxLQUFBLGNBQUEsRUFBQSxXQUFBLENBQUEsUUFBQTtBQUNBLEtBQUEsYUFBQSxFQUFBLFdBQUEsQ0FBQSxTQUFBOztBQUVBLEtBQUEsWUFBQSxFQUFBLFdBQUEsQ0FBQSxNQUFBO0FBQ0EsS0FBQSxjQUFBLEVBQUEsS0FBQTtBQUxELEdBQUE7O0FBUUEsTUFBSSxJQUFFLEVBQUEsV0FBQSxFQUFBLEdBQUEsQ0FBTixTQUFNLENBQU47QUFDQSxNQUFJLEtBQUosTUFBQSxFQUFlO0FBQ2QsS0FBQSxPQUFBLEVBQUEsS0FBQSxDQUFpQixZQUFVO0FBQzNCLE1BQUEsSUFBQSxFQUFBLElBQUEsQ0FBQSxXQUFBLEVBQUEsV0FBQTtBQUNBLE1BQUEsSUFBQSxFQUFBLElBQUEsQ0FBQSxtQkFBQSxFQUFBLFdBQUEsQ0FBQSxhQUFBO0FBRkEsSUFBQTtBQUlBO0FBaEJGLEVBQUE7O0FBbUJBLEtBQU0sbUJBQW1CLFNBQW5CLGdCQUFtQixHQUFhO0FBQUEsTUFBWixLQUFZLFVBQUEsTUFBQSxHQUFBLENBQUEsSUFBQSxVQUFBLENBQUEsTUFBQSxTQUFBLEdBQUEsVUFBQSxDQUFBLENBQUEsR0FBYixJQUFhOztBQUNyQyxJQUFBLFFBQUEsRUFBQSxFQUFBLENBQUEsa0JBQUEsRUFBbUMsVUFBQSxDQUFBLEVBQUs7QUFDdkMsT0FBTSxRQUFRLEVBQUUsRUFBaEIsTUFBYyxDQUFkOztBQUdBO0FBQ0EsT0FBRyxDQUFDLE1BQUEsT0FBQSxDQUFBLFlBQUEsRUFBRCxNQUFBLElBQXVDLENBQUMsTUFBQSxPQUFBLENBQUEsdUJBQUEsRUFBM0MsTUFBQSxFQUF5RjtBQUN4RjtBQUNBLE1BQUEsWUFBQSxFQUFBLE9BQUE7QUFDQSxNQUFBLGFBQUEsRUFBQSxXQUFBLENBQUEsU0FBQTtBQUNBLE1BQUEsY0FBQSxFQUFBLFdBQUEsQ0FBQSxRQUFBO0FBRUE7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQWZELEdBQUE7QUFERCxFQUFBO1NBb0JBLE0sR0FBQSxNO1NBQUEsZ0IsR0FBQSxnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBLFFBQU0sYUFBYSxTQUFiLFVBQWEsR0FBSzs7QUFFdkIsVUFBQSxXQUFBLEVBQUEsRUFBQSxDQUFBLG1CQUFBLEVBQXVDLFlBQVk7QUFDNUMsY0FBQSxJQUFBLEVBQUEsTUFBQSxHQUFBLFFBQUEsQ0FBQSx3QkFBQTtBQURQLFNBQUE7O0FBSUcsVUFBQSxXQUFBLEVBQUEsRUFBQSxDQUFBLG9CQUFBLEVBQXdDLFlBQVk7QUFDaEQsY0FBQSxJQUFBLEVBQUEsTUFBQSxHQUFBLFdBQUEsQ0FBQSx3QkFBQTtBQURKLFNBQUE7O0FBSUo7QUFDQyxVQUFBLHlCQUFBLEVBQUEsRUFBQSxDQUFBLE9BQUEsRUFBeUMsWUFBWTtBQUNoRCxjQUFBLHlCQUFBLEVBQUEsR0FBQSxDQUFBLElBQUEsRUFBQSxXQUFBLENBQUEsaUJBQUE7QUFDSCxjQUFBLElBQUEsRUFBQSxXQUFBLENBQUEsaUJBQUE7QUFGRixTQUFBO0FBWEQsS0FBQTs7c0JBa0JBLFU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBLE1BQU0sY0FBYyxTQUFkLFdBQWMsR0FBSztBQUFBLFFBQUEsUUFBQTs7QUFFekIsTUFBQSxjQUFBLEVBQUEsS0FBQSxFQUFBLFdBQUE7QUFDTSxZQUROLElBQUE7QUFFTSxvQkFGa0I7QUFBeEIsS0FBQSxFQUFBLGdCQUFBLFFBQUEsRUFBQSxjQUFBLEVBQUEsQ0FBQSxDQUFBLEVBQUEsZ0JBQUEsUUFBQSxFQUFBLGdCQUFBLEVBQUEsQ0FBQSxDQUFBLEVBQUEsZ0JBQUEsUUFBQSxFQUFBLFVBQUEsRUFBQSxJQUFBLENBQUEsRUFBQSxnQkFBQSxRQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsQ0FBQSxFQUFBLGdCQUFBLFFBQUEsRUFBQSxRQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUEsZ0JBQUEsUUFBQSxFQUFBLFdBQUEsRUFBQSxvRkFBQSxDQUFBLEVBQUEsZ0JBQUEsUUFBQSxFQUFBLFdBQUEsRUFBQSxxRkFBQSxDQUFBLEVBQUEsZ0JBQUEsUUFBQSxFQUFBLFlBQUEsRUFXa0IsQ0FDVjtBQUNFLGtCQURGLEdBQUE7QUFFRSxnQkFBVTtBQUNSLHNCQUFjO0FBRE47QUFGWixLQURVLEVBT1Y7QUFDRSxrQkFERixHQUFBO0FBRUUsZ0JBQVU7QUFDUixzQkFBYztBQUROO0FBRlosS0FQVSxFQWFWO0FBQ0Usa0JBREYsR0FBQTtBQUVFLGdCQUFVO0FBQ1Isc0JBQWM7QUFETjtBQUZaLEtBYlUsQ0FYbEIsQ0FBQSxFQUFBLFFBQUE7QUFnQ0ksTUFBQSx1QkFBQSxFQUFBLElBQUEsQ0FBQSxFQUFBO0FBbENKLEdBQUE7O29CQXFDQSxXIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNvbnN0IGNvbnRhY3QgPSAoKT0+IHtcclxuXHQkKFwiLm1hcC1saW5rXCIpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKVxyXG5cdFx0Y29uc3QgaHJlZiA9ICQodGhpcykuYXR0cihcImhyZWZcIilcclxuXHRcdC8vIGNvbnNvbGUubG9nKCQoaHJlZikub2Zmc2V0KCkudG9wKVxyXG5cdFx0Ly8gY29uc29sZS5sb2coaHJlZilcclxuXHRcdCQoXCJodG1sLGJvZHlcIikuYW5pbWF0ZSh7IHNjcm9sbFRvcDogJChocmVmKS5vZmZzZXQoKS50b3ArJCgnYm9keScpLnNjcm9sbFRvcCgpLTEwMH0sIDEwMDApO1xyXG5cdFx0XHJcblx0XHQvLyB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhyZWZcclxuXHR9KTtcclxufVxyXG5cclxuY29uc3QgY29udGFjdF9fT3JhbmdlVGV4dCA9ICgpPT4ge1xyXG5cdGxldCBjb3VudD0kKCcuY29udGFjdElucHV0JykubGVuZ3RoO1xyXG5cdCAgZm9yIChsZXQgaT0wOyBpPGNvdW50OyBpKyspIHtcclxuXHQgICAgICAgIC8vIGNvbnNvbGUubG9nKGkpO1xyXG5cdCAgICAkKCcuY29udGFjdElucHV0OmVxKCcraSsnKScpLmZvY3VzKGZ1bmN0aW9uKCl7XHJcblx0ICAgICAgICAgICQoJy5jb250YWN0SW5wdXRUZXh0OmVxKCcraSsnKScpLmFkZENsYXNzKCdvcmFuZ2VUZXh0Jyk7XHJcblx0ICAgIH0pO1xyXG5cdCAgICAkKCcuY29udGFjdElucHV0OmVxKCcraSsnKScpLmZvY3Vzb3V0KGZ1bmN0aW9uKCl7XHJcblx0ICAgICAgICAgICQoJy5jb250YWN0SW5wdXRUZXh0OmVxKCcraSsnKScpLnJlbW92ZUNsYXNzKCdvcmFuZ2VUZXh0Jyk7XHJcblx0ICAgIH0pOyAgICAgICBcclxuXHQgIH1cclxufVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgY29udGFjdFxyXG5leHBvcnQge2NvbnRhY3QsIGNvbnRhY3RfX09yYW5nZVRleHR9XHJcbiIsImNvbnN0IG9yYW5nZVRleHQgPSAoKT0+IHtcclxuICBsZXQgY291bnQ9JCgnLmNvcnBvcmF0aW9uLWlucHV0JykubGVuZ3RoO1xyXG4gIGZvciAobGV0IGk9MDsgaTxjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coaSk7XHJcbiAgICAkKCcuY29ycG9yYXRpb24taW5wdXQ6ZXEoJytpKycpJykuZm9jdXMoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICQoJy5jb3Jwb3JhdGlvbi1mb3JtX190ZXh0OmVxKCcraSsnKScpLmFkZENsYXNzKCdvcmFuZ2VUZXh0Jyk7XHJcbiAgICB9KTtcclxuICAgICQoJy5jb3Jwb3JhdGlvbi1pbnB1dDplcSgnK2krJyknKS5mb2N1c291dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgJCgnLmNvcnBvcmF0aW9uLWZvcm1fX3RleHQ6ZXEoJytpKycpJykucmVtb3ZlQ2xhc3MoJ29yYW5nZVRleHQnKTtcclxuICAgIH0pOyAgICAgICBcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGFkZEZpbGUgPSAoKT0+IHtcclxuICAgICQoJy5iLWludm9pY2VfX2lucHV0JykuY2hhbmdlKGZ1bmN0aW9uKCl7XHJcbiAgICAgIGNvbnN0IGZpbGVzID0gJCgnLmItaW52b2ljZV9faW5wdXQnKVswXS5maWxlc1xyXG4gICAgICBjb25zdCBleHRlbnNpb25zID0gJCgnLmItaW52b2ljZV9fZXh0ZW5zaW9ucycpXHJcbiAgICAgIGV4dGVuc2lvbnMudGV4dCgnJylcclxuXHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGNvbnN0IGV4dCA9IGZpbGVzW2ldLm5hbWUuc3BsaXQoJy4nKS5wb3AoKS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgZXh0ZW5zaW9ucy5hcHBlbmQoJChgPGRpdiBjbGFzcz1cImItaW52b2ljZV9fZXh0XCI+JHtleHR9PC9kaXY+YCkpXHJcbiAgICAgIH1cclxuXHJcbiAgICB9KVxyXG59XHJcbmV4cG9ydCB7b3JhbmdlVGV4dCwgYWRkRmlsZX0iLCIndXNlIHN0cmljdCdcclxuaW1wb3J0IHtuYXZiYXIsIGRvY3VtZW50TGlzdGVuZXJ9IGZyb20gJy4vbmF2YmFyJ1xyXG5pbXBvcnQgc2VydmljRnVuYyBmcm9tICcuL3NlcnZpY2VzJ1xyXG5pbXBvcnQge29yYW5nZVRleHQsIGFkZEZpbGV9IGZyb20gJy4vY29ycG9yYXRpb24nXHJcbmltcG9ydCBzbGlja1NsaWRlciBmcm9tICcuL3NsaWRlcidcclxuaW1wb3J0IHtjb250YWN0LCBjb250YWN0X19PcmFuZ2VUZXh0fSBmcm9tICcuL2NvbnRhY3QnXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblxyXG4gbmF2YmFyKCk7XHJcbiBkb2N1bWVudExpc3RlbmVyKCk7XHJcblxyXG4gc2VydmljRnVuYygpO1xyXG5cclxuIG9yYW5nZVRleHQoKTtcclxuXHJcbiBhZGRGaWxlKCk7XHJcblxyXG4gc2xpY2tTbGlkZXIoKTtcclxuIFxyXG4gY29udGFjdCgpO1xyXG5cclxuIGNvbnRhY3RfX09yYW5nZVRleHQoKTtcclxuXHJcbi8vIHltYXBzLnJlYWR5KGluaXRNYXApO1xyXG4vLyAgICAgICAgIGZ1bmN0aW9uIGluaXRNYXAoKXtcclxuLy8gICAgICAgICAgICAgdmFyIG15TWFwID0gbmV3IHltYXBzLk1hcChcIm1hcFwiLCB7XHJcbi8vICAgICAgICAgICAgICAgICAvLyBjZW50ZXI6IFt4LCB5XSxcclxuLy8gICAgICAgICAgICAgICAgIC8vIGNlbnRlcjogWzQwLjM4NzY1OSwgNDkuODE1NTg5XSxcclxuLy8gICAgICAgICAgICAgICAgIHpvb206IDE3LFxyXG4vLyAgICAgICAgICAgICAgICAgLy8gY29udHJvbHM6IFsnem9vbUNvbnRyb2wnLCAnZnVsbHNjcmVlbkNvbnRyb2wnXVxyXG4vLyAgICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICAgICAgICAvLyBmcm9tIEZNU1xyXG4vLyAgICAgICAgICAgICAgICB2YXIgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKG15TWFwLmdldENlbnRlcigpLCB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGxvb25Db250ZW50OiAnPHN0cm9uZz5ibHVlPC9zdHJvbmc+IGNvbG9yJyxcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNhcHRpb246ICdGTVMnXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uTGF5b3V0OiAnZGVmYXVsdCNpbWFnZScsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZUhyZWY6ICdpbWcvbWFwcy1hbmQtZmxhZ3MucG5nJyxcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzQwLCA1NV0sXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGljb25JbWFnZU9mZnNldDogWy01LCAtMzhdXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyaylcclxuLy8gICAgICAgICAgICAgLy8gdGhlIGVuZFxyXG4vLyAgICAgICAgICB9XHJcbn0pOyIsImNvbnN0IG5hdmJhciA9ICgpPT4ge1xyXG5cdFxyXG5cdCQoXCIuY29sbGFwc2UtYm94X19zZWFyY2hcIikuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdCQoXCJpLnNlYXJjaEljb25cIikudG9nZ2xlQ2xhc3MoXCJkLW5vbmVcIik7XHJcblx0XHQkKFwiaS50aW1lc0ljb25cIikudG9nZ2xlQ2xhc3MoXCJkLWJsb2NrXCIpO1xyXG5cclxuXHRcdCQoXCIuc2VhcmNoQm94XCIpLnNsaWRlVG9nZ2xlKFwiZmFzdFwiKTtcclxuXHRcdCQoXCIuc2VhcmNoSW5wdXRcIikuZm9jdXMoKTtcclxuXHR9KTtcclxuXHJcblx0bGV0IHg9JCgnLmRyb3Bkb3duJykuY3NzKCdkaXNwbGF5JylcclxuXHRpZiAoeD09J25vbmUnKSB7XHJcblx0XHQkKCcuZHJvcCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHQkKHRoaXMpLmZpbmQoJy5kcm9wZG93bicpLnNsaWRlVG9nZ2xlKCk7XHJcblx0XHQkKHRoaXMpLmZpbmQoJy5uYXZiYXJMaW5rOmZpcnN0JykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZS1saW5rJyk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IGRvY3VtZW50TGlzdGVuZXIgPSAoY2I9bnVsbCkgPT4ge1xyXG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgKGUpPT57XHJcblx0XHRjb25zdCBfdGhpcyA9ICQoZS50YXJnZXQpXHJcblx0XHRcclxuXHJcblx0XHQvLyBpZiBub3Qgc2VsZiBjbGlja2VkXHJcblx0XHRpZighX3RoaXMuY2xvc2VzdCgnLnNlYXJjaEJveCcpLmxlbmd0aCAmJiAhX3RoaXMuY2xvc2VzdCgnLmNvbGxhcHNlLWJveF9fc2VhcmNoJykubGVuZ3RoKXtcclxuXHRcdFx0Ly8gY2xvc2VOYXYoKVxyXG5cdFx0XHQkKFwiLnNlYXJjaEJveFwiKS5mYWRlT3V0KCk7XHJcblx0XHRcdCQoXCJpLnRpbWVzSWNvblwiKS5yZW1vdmVDbGFzcyhcImQtYmxvY2tcIik7XHJcblx0XHRcdCQoXCJpLnNlYXJjaEljb25cIikucmVtb3ZlQ2xhc3MoXCJkLW5vbmVcIik7XHJcblxyXG5cdFx0fVxyXG5cdFx0Ly8gaWYoIV90aGlzLmNsb3Nlc3QoJy5zZWFyY2hJbnB1dCcpLmxlbmd0aCAmJiAhX3RoaXMuY2xvc2VzdCgnLnNlYXJjaEJveCcpLmxlbmd0aCl7XHJcblx0XHQvLyBcdCQoJy5zaG9wcGluZy1jYXJkJykucmVtb3ZlQ2xhc3MoJ3Nob3BwaW5nLWNhcmQtLWFjdGl2ZScpXHJcblx0XHQvLyBcdCQoJy5zZWFyY2hCb3gnKS5oaWRlKClcclxuXHRcdC8vIH1cclxuXHRcdFxyXG5cdH0pXHJcbn1cdFxyXG5leHBvcnQge25hdmJhciwgZG9jdW1lbnRMaXN0ZW5lcn0iLCJjb25zdCBzZXJ2aWNGdW5jID0gKCk9PiB7XHJcblxyXG5cdCQoJy5jb2xsYXBzZScpLm9uKCdzaG93bi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdhY2NvcmRpb24taXRlbS0tYWN0aXZlJyk7ICAgICAgIFxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmNvbGxhcHNlJykub24oJ2hpZGRlbi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdhY2NvcmRpb24taXRlbS0tYWN0aXZlJyk7ICBcclxuICAgIH0pO1xyXG5cclxuLy8gT1JBTkdFIFRJTUVTIElDT05cclxuXHQkKCcuYWNjb3JkaW9uLWl0ZW1fX2hlYWRlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHQgICAgXHQkKCcuYWNjb3JkaW9uLWl0ZW1fX2hlYWRlcicpLm5vdCh0aGlzKS5yZW1vdmVDbGFzcygncGx1c0NoYW5nZUNvbG9yJyk7XHJcblx0XHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoJ3BsdXNDaGFuZ2VDb2xvcicpOyAgICAgXHJcblx0ICAgIH0pO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VydmljRnVuYyIsImNvbnN0IHNsaWNrU2xpZGVyID0gKCk9PiB7XHJcblxyXG4kKCcuc2xpZGVyLWFyZWEnKS5zbGljayh7XHJcbiAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgIHNsaWRlc1RvU2hvdzogdHJ1ZSxcclxuICAgICAgc2xpZGVzVG9TaG93OiA3LFxyXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgIHNwZWVkOiA2MDAsXHJcbiAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgLy8gY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWRlLWFycm93IHByZXYtYXJyb3dcIj48aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tbGVmdFwiPjwvaT48L2J1dHRvbj4nLFxyXG4gICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpZGUtYXJyb3cgbmV4dC1hcnJvd1wiPjxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48L2J1dHRvbj4nLFxyXG4gICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYnJlYWtwb2ludDogOTkyLFxyXG4gICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDQwMCxcclxuICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSk7XHJcbiAgICAkKFwiLnNsaWNrLWRvdHMgbGkgYnV0dG9uXCIpLnRleHQoXCJcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNsaWNrU2xpZGVyIl19
