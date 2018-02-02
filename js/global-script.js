// Если на проекте jQuery
$(document).ready(function() {

  $(function() {
    $('nav#mobile-menu').mmenu({
      navbar: {
        title: 'Меню'
      }
    });
  });

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

  // $(".thumbnails-additional").owlCarousel({
  //   items: 3,
  //   nav: true,
  //   dots: false,
  //   margin: 10,
  //   loop: true,
  //   center: false,
  //   navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
  //   responsive: {
  //     0: {
  //       items: 3,
  //       nav: true,
  //       loop: true,
  //       center: false,
  //     },
  //     480: {
  //       items: 3,
  //     },
  //     768: {
  //       items: 3,
  //     },
  //     992: {
  //       items: 3,
  //     },
  //     1200: {
  //       items: 4,
  //     },
  //     1800: {
  //       items: 4,
  //     }
  //   }
  // });


  var thumbnails_owl = $('#product-product .thumbnails-additional');
  thumbnails_owl.on('initialize.owl.carousel initialized.owl.carousel ' +
    'initialize.owl.carousel initialize.owl.carousel ',
    function(e) {
      $("#product-product #gallery_01 .thumbnail").show();
    });
  thumbnails_owl.owlCarousel({
    items: 4,
    loop: true,
    nav: true,
    dots: false,
    navSpeed: 1000,
    margin: 20,
    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    responsive: {
      0: {
        items: 3,
      },
      480: {
        items: 4,
      },
    },
  });
  var thumbnails_additional = $('#product-product .thumbnails-additional .thumbnail');
  thumbnails_additional.each(function() {
    $(this).click(function() {
      thumbnails_additional.removeClass('current-additional');
      $(this).addClass('current-additional');
    });
  });

  // noUiSlider
  var handlesSlider = document.getElementById('sort-slider');

  if (handlesSlider) {

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
      document.getElementById('lower-value'),
      document.getElementById('upper-value')
    ];

    handlesSlider.noUiSlider.on('update', function ( values, handle, unencoded, isTap, positions ) {
      nodes[handle].innerHTML = values[handle];
    });

  }


  // Product slider
  $('#vertical').lightSlider({
    gallery:true,
    item:1,
    vertical:true,
    verticalHeight:295,
    currentPagerPosition:'right',
    vThumbWidth:150,
    thumbItem:4,
    thumbMargin:14,
    slideMargin:0
  });


});

// Выезжающий поиск
function searchToggle(obj, evt){
  var container = $(obj).closest('.search-wrapper');
  if(!container.hasClass('active')){
    container.addClass('active');
    evt.preventDefault();
  }
  else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
    container.removeClass('active');
    // clear input
    container.find('.search-input').val('');
  }
}

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
