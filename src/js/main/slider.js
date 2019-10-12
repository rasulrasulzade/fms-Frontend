const slickSlider = ()=> {

$('.slider-area').slick({
      dots: true,
      slidesToShow: true,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      speed: 600,
      arrows: true,
      // centerMode: true,
      prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa fa-chevron-left"></i></button>',
      nextArrow: '<button class="slide-arrow next-arrow"><i class="fa fa-chevron-right"></i></button>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
    $(".slick-dots li button").text("");
}

export default slickSlider