// for lazy load in images
const images = document.querySelectorAll('img');
images.forEach(img => {
  img.setAttribute('loading', 'lazy');
});
let accordionButtons = document.querySelectorAll('.accordion-button');
let accordionItems = document.querySelectorAll('.accordion-item');

accordionButtons.forEach(accordionButton => {
  accordionButton.addEventListener('click', () => {
    // Find the parent accordion item of the clicked button
    let parentAccordionItem = accordionButton.closest('.accordion-item');
    
    // If the clicked accordion is already active, remove 'active' class from all items
    if (parentAccordionItem.classList.contains('active')) {
      parentAccordionItem.classList.remove('active');
    } else {
      // Remove 'active' class from all accordion items
      accordionItems.forEach(accordionItem => {
        accordionItem.classList.remove('active');
      });
      
      // Add 'active' class only to the clicked accordion's parent item
      parentAccordionItem.classList.add('active');
    }
  });
});
$('.show-case-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '.showcase-sec .arrow-left',
  nextArrow: '.showcase-sec .arrow-right'
  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 3,
  //       infinite: true,
  //       dots: true
  //     }
  //   },
  //   {
  //     breakpoint: 600,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2
  //     }
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1
  //     }
  //   }
  //   // You can unslick at a given breakpoint now by adding:
  //   // settings: "unslick"
  //   // instead of a settings object
  // ]
});
$('.testimonials-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '.testimonials .arrow-left',
  nextArrow: '.testimonials .arrow-right',
  // centerMode: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});