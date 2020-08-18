$(".proud-slider").slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // arrows: true,
  // appendArrows: $(".proud-slider__arrows"),
  // prevArrow: $(".proud-slider__arrow-left"),
  // nextArrow: $(".proud-slider__arrow-right"),
  nextArrow:
    '<button class="proud-slider__arrow proud-slider__arrow-right"> <svg width="12" height="20" viewBox="0 0 12 20" xmlns="http://www.w3.org/2000/svg"> <path d="M11.1618 10.5488L1.92659 19.784C1.62085 20.0792 1.13366 20.0708 0.838382 19.765C0.550323 19.4668 0.550323 18.994 0.838382 18.6958L9.52949 10.0047L0.838382 1.31358C0.537922 1.01307 0.537922 0.525877 0.838382 0.225372C1.13893 -0.0750866 1.62608 -0.0750866 1.92659 0.225372L11.1618 9.46057C11.4623 9.76112 11.4623 10.2483 11.1618 10.5488Z"/> </svg> </button>',
  prevArrow:
    '<button class="proud-slider__arrow proud-slider__arrow-left"> <svg width="12" height="20" viewBox="0 0 12 20" xmlns="http://www.w3.org/2000/svg"> <path d="M0.838209 9.45123L10.0734 0.216026C10.3792 -0.0792479 10.8663 -0.0707702 11.1616 0.234966C11.4497 0.533216 11.4497 1.00602 11.1616 1.30423L2.47051 9.99533L11.1616 18.6864C11.4621 18.9869 11.4621 19.4741 11.1616 19.7746C10.8611 20.0751 10.3739 20.0751 10.0734 19.7746L0.838209 10.5394C0.537749 10.2389 0.537749 9.75173 0.838209 9.45123Z"/> </svg> </button>',
});
