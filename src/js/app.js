import '../scss/app.scss';
import $ from 'jquery';
import 'slick-carousel';
import 'bootstrap';

window.jQuery = $;
$('#partners_carousel').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
      },
    },
  ],
});
