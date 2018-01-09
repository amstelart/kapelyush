// Если на проекте jQuery
$(document).ready(function() {
  // code
  $("#main-slider").owlCarousel({
    items: 1,
    nav: false,
    loop: true,
    center: true
  });

  $(".content-carousel").owlCarousel({
    items: 3,
    nav: true,
    dots: false,
    margin: 30,
    loop: true,
    center: false,
    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    responsive: {
      0: {
        items: 1,
        nav: true,
        loop: true,
        center: true,
      },
      480: {
        items: 3,
      },
      768: {
        items: 3,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
      1800: {
        items: 4,
      }
    }
  });

  // noUiSlider
  var handlesSlider = document.getElementById('sort-slider');

  noUiSlider.create(handlesSlider, {
    tooltips: false,
    start: [700, 5590],
    connect: true,
    range: {
      'min': [700],
      'max': [5590]
    }
  });

  var nodes = [
  	document.getElementById('lower-value'), // 0
  	document.getElementById('upper-value')  // 1
  ];

  // Display the slider value and how far the handle moved
  // from the left edge of the slider.
  handlesSlider.noUiSlider.on('update', function ( values, handle, unencoded, isTap, positions ) {
  	nodes[handle].innerHTML = values[handle];
  });



});

// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
