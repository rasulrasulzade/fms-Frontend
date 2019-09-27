(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['./navbar'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('./navbar'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.navbar);
    global.main = mod.exports;
  }
})(undefined, function (_navbar) {
  'use strict';

  var _navbar2 = _interopRequireDefault(_navbar);

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

    $('.slider-area').slick((_$$slick = {
      dots: true,
      slidesToShow: true
    }, _defineProperty(_$$slick, 'slidesToShow', 7), _defineProperty(_$$slick, 'slidesToScroll', 1), _defineProperty(_$$slick, 'autoplay', true), _defineProperty(_$$slick, 'speed', 600), _defineProperty(_$$slick, 'arrows', true), _defineProperty(_$$slick, 'centerMode', true), _defineProperty(_$$slick, 'prevArrow', '<button class="slide-arrow prev-arrow"><i class="fa fa-chevron-left"></i></button>'), _defineProperty(_$$slick, 'nextArrow', '<button class="slide-arrow next-arrow"><i class="fa fa-chevron-right"></i></button>'), _defineProperty(_$$slick, 'responsive', [{
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

},{"./navbar":2}],2:[function(require,module,exports){
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
		// let addWidth = () => {
		// 	document.querySelector(".navbar--logo").classList.add("navLogoSmall");
		// }
		// let delWidth = () => {
		// 	document.querySelector(".navbar--logo").classList.remove("navLogoSmall");
		// }

		// let searchInput=document.querySelector(".b-search-input");

		// searchInput.onfocus=function() {addWidth();}
		// searchInput.onfocusout=function() {delWidth();}  
		$(".collapse--box__search").click(function () {
			$("i.searchIcon").toggleClass("iconNone");
			$("i.timesIcon").toggleClass("iconBlock");

			$(".searchBox").slideToggle("fast");
			$(".searchInput").focus();
		});

		// let $navBar = $('.navbarr');
		//  	let navPos = $navBar.offset().top;
		// let scrollPos = $(window).scrollTop();


		// $(window).scroll(function() {
		//       let scrollPos = $(this).scrollTop();

		//      if (scrollPos >= navPos+40) {
		//          $navBar.addClass('sticky');
		//      } else {
		//          $navBar.removeClass('sticky');
		//      }
		//    });
	};
	exports.default = navbar;
	module.exports = exports["default"];
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxtYWluXFxtYWluLmpzIiwic3JjXFxqc1xcbWFpblxcbmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0VBLElBQUEsUUFBQSxFQUFBLEtBQUEsQ0FBa0IsWUFBVTtBQUFBLFFBQUEsUUFBQTs7QUFFM0IsS0FBQSxHQUFBLFNBQUEsT0FBQTs7QUFFQyxNQUFBLGNBQUEsRUFBQSxLQUFBLEVBQUEsV0FBQTtBQUNJLFlBREosSUFBQTtBQUVJLG9CQUZvQjtBQUF4QixLQUFBLEVBQUEsZ0JBQUEsUUFBQSxFQUFBLGNBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxnQkFBQSxRQUFBLEVBQUEsZ0JBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxnQkFBQSxRQUFBLEVBQUEsVUFBQSxFQUFBLElBQUEsQ0FBQSxFQUFBLGdCQUFBLFFBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxDQUFBLEVBQUEsZ0JBQUEsUUFBQSxFQUFBLFFBQUEsRUFBQSxJQUFBLENBQUEsRUFBQSxnQkFBQSxRQUFBLEVBQUEsWUFBQSxFQUFBLElBQUEsQ0FBQSxFQUFBLGdCQUFBLFFBQUEsRUFBQSxXQUFBLEVBQUEsb0ZBQUEsQ0FBQSxFQUFBLGdCQUFBLFFBQUEsRUFBQSxXQUFBLEVBQUEscUZBQUEsQ0FBQSxFQUFBLGdCQUFBLFFBQUEsRUFBQSxZQUFBLEVBV2dCLENBQ1Y7QUFDRSxrQkFERixHQUFBO0FBRUUsZ0JBQVU7QUFDUixzQkFBYztBQUROO0FBRlosS0FEVSxFQU9WO0FBQ0Usa0JBREYsR0FBQTtBQUVFLGdCQUFVO0FBQ1Isc0JBQWM7QUFETjtBQUZaLEtBUFUsRUFhVjtBQUNFLGtCQURGLEdBQUE7QUFFRSxnQkFBVTtBQUNSLHNCQUFjO0FBRE47QUFGWixLQWJVLENBWGhCLENBQUEsRUFBQSxRQUFBO0FBZ0NFLE1BQUEsdUJBQUEsRUFBQSxJQUFBLENBQUEsRUFBQTtBQXBDSixHQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQSxLQUFNLFNBQVMsU0FBVCxNQUFTLEdBQUs7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFBLHdCQUFBLEVBQUEsS0FBQSxDQUFrQyxZQUFVO0FBQzNDLEtBQUEsY0FBQSxFQUFBLFdBQUEsQ0FBQSxVQUFBO0FBQ0EsS0FBQSxhQUFBLEVBQUEsV0FBQSxDQUFBLFdBQUE7O0FBRUEsS0FBQSxZQUFBLEVBQUEsV0FBQSxDQUFBLE1BQUE7QUFDQSxLQUFBLGNBQUEsRUFBQSxLQUFBO0FBTEQsR0FBQTs7QUFRQTtBQUNBO0FBQ0U7OztBQUdGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakNELEVBQUE7bUJBbUNBLE0iLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnXHJcbmltcG9ydCBuYXZiYXIgZnJvbSAnLi9uYXZiYXInXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblxyXG4gbmF2YmFyKCk7XHJcblxyXG4gICQoJy5zbGlkZXItYXJlYScpLnNsaWNrKHtcclxuICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgc2xpZGVzVG9TaG93OiB0cnVlLFxyXG4gICAgICBzbGlkZXNUb1Nob3c6IDcsXHJcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgc3BlZWQ6IDYwMCxcclxuICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpZGUtYXJyb3cgcHJldi1hcnJvd1wiPjxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPjwvYnV0dG9uPicsXHJcbiAgICAgIG5leHRBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGlkZS1hcnJvdyBuZXh0LWFycm93XCI+PGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPjwvYnV0dG9uPicsXHJcbiAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBicmVha3BvaW50OiA5OTIsXHJcbiAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogM1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYnJlYWtwb2ludDogNDAwLFxyXG4gICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9KTtcclxuICAgICQoXCIuc2xpY2stZG90cyBsaSBidXR0b25cIikudGV4dChcIlwiKTtcclxufSk7IiwiY29uc3QgbmF2YmFyID0gKCk9PiB7XHJcblx0Ly8gbGV0IGFkZFdpZHRoID0gKCkgPT4ge1xyXG5cdC8vIFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXItLWxvZ29cIikuY2xhc3NMaXN0LmFkZChcIm5hdkxvZ29TbWFsbFwiKTtcclxuXHQvLyB9XHJcblx0Ly8gbGV0IGRlbFdpZHRoID0gKCkgPT4ge1xyXG5cdC8vIFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXItLWxvZ29cIikuY2xhc3NMaXN0LnJlbW92ZShcIm5hdkxvZ29TbWFsbFwiKTtcclxuXHQvLyB9XHJcblxyXG5cdC8vIGxldCBzZWFyY2hJbnB1dD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmItc2VhcmNoLWlucHV0XCIpO1xyXG5cdFx0XHJcblx0Ly8gc2VhcmNoSW5wdXQub25mb2N1cz1mdW5jdGlvbigpIHthZGRXaWR0aCgpO31cclxuXHQvLyBzZWFyY2hJbnB1dC5vbmZvY3Vzb3V0PWZ1bmN0aW9uKCkge2RlbFdpZHRoKCk7fSAgXHJcblx0JChcIi5jb2xsYXBzZS0tYm94X19zZWFyY2hcIikuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdCQoXCJpLnNlYXJjaEljb25cIikudG9nZ2xlQ2xhc3MoXCJpY29uTm9uZVwiKTtcclxuXHRcdCQoXCJpLnRpbWVzSWNvblwiKS50b2dnbGVDbGFzcyhcImljb25CbG9ja1wiKTtcclxuXHJcblx0XHQkKFwiLnNlYXJjaEJveFwiKS5zbGlkZVRvZ2dsZShcImZhc3RcIik7XHJcblx0XHQkKFwiLnNlYXJjaElucHV0XCIpLmZvY3VzKCk7XHJcblx0fSk7XHJcblxyXG5cdC8vIGxldCAkbmF2QmFyID0gJCgnLm5hdmJhcnInKTtcclxuIC8vICBcdGxldCBuYXZQb3MgPSAkbmF2QmFyLm9mZnNldCgpLnRvcDtcclxuICBcdC8vIGxldCBzY3JvbGxQb3MgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG5cclxuXHQvLyAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gLy8gICAgICAgbGV0IHNjcm9sbFBvcyA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gLy8gICAgICBpZiAoc2Nyb2xsUG9zID49IG5hdlBvcys0MCkge1xyXG4gLy8gICAgICAgICAgJG5hdkJhci5hZGRDbGFzcygnc3RpY2t5Jyk7XHJcbiAvLyAgICAgIH0gZWxzZSB7XHJcbiAvLyAgICAgICAgICAkbmF2QmFyLnJlbW92ZUNsYXNzKCdzdGlja3knKTtcclxuIC8vICAgICAgfVxyXG4gLy8gICAgfSk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmF2YmFyXHJcbiJdfQ==
