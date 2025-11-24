// script.js
// Keeps Marvel slider and welcome message working, and adds Fanta GSAP animation.
// Make sure lightslider, jquery, gsap, and ScrollTrigger are loaded in this order in HTML.

// Toggle nav (mobile)
function toggleMenu() {
  document.querySelector('.navigation').classList.toggle('active');
}

// jQuery document ready for lightSlider and character clicks
$(document).ready(function () {
  // LightSlider init
  $('#autoWidth').lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function () {
      $('#autoWidth').removeClass('cs-hidden');
    }
  });

  // character click => welcome message
  $('.model').on('click', function () {
    const charName = $(this).attr('alt') || $(this).closest('.box').find('h3').text() || 'Hero';
    $('#welcomeMsg').hide().text('👑 Welcome, ' + charName + '!').fadeIn(500);
    // optional: scroll to Fanta section when clicked (commented)
    // document.querySelector('#fanta-section').scrollIntoView({ behavior: 'smooth' });
  });
});

// GSAP scroll animation for Fanta section
gsap.registerPlugin(ScrollTrigger);

// ensure DOM elements exist before creating timelines
window.addEventListener('load', function () {
  // only create timeline if fanta-section exists
  if (document.querySelector('#fanta-section .two')) {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#fanta-section .two",
        start: "0% 95%",
        end: "70% 50%",
        scrub: true,
      }
    });

    tl.to("#fanta-section #fanta", {
      top: "120%",
      left: "0%"
    }, 'orange');

    tl.to("#fanta-section #orange-cut", {
      top: "160%",
      left: "23%"
    }, 'orange');

    tl.to("#fanta-section #orange", {
      width: "15%",
      top: "160%",
      right: "10%"
    }, 'orange');

    tl.to("#fanta-section #leaf", {
      top: "110%",
      rotate: "130deg",
      left: "70%"
    }, 'orange');

    tl.to("#fanta-section #leaf2", {
      top: "110%",
      rotate: "130deg",
      left: "0%"
    }, 'orange');
  }
});
