// cursor script
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  smooth: 1,
  smoothTouch:0,
  effects: ( document.documentElement.clientWidth >= 1024 ? true : false ),
  ignoreMobileResize: false,
  preventDefault: true,
  normalizeScroll: {
    allowNestedScroll: true
  }
   // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});

setTimeout(function () {
  $(".loader").addClass("active");
  $("body").removeClass("stay");
}, 2000);

// // Get the center coordinates of the window
// const centerX = window.innerWidth / 2;
// const centerY = window.innerHeight / 2;

// // Set the initial position of the cursor to the center
// $(".ring").css(
//   "transform",
//   `translateX(calc(${centerX}px - 1.25rem)) translateY(calc(${centerY}px - 1.25rem))`
// );

// // Update the cursor position on mousemove
// $(window).mousemove(function (e) {
//   $(".ring").css(
//     "transform",
//     `translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`
//   );
// });