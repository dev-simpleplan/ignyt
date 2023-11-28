// cursor script

// Get the center coordinates of the window
const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;

// Set the initial position of the cursor to the center
$(".ring").css(
  "transform",
  `translateX(calc(${centerX}px - 1.25rem)) translateY(calc(${centerY}px - 1.25rem))`
);

// Update the cursor position on mousemove
$(window).mousemove(function (e) {
  $(".ring").css(
    "transform",
    `translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`
  );
});

// console.log(window.innerWidth);

let mm = gsap.matchMedia();
mm.add("(min-width: 992px)", () => {
  // if (window.innerWidth >4000) {
  gsap.registerPlugin(ScrollTrigger);
  
  // gsap for banner
  
  gsap.set(".br_second .brs_img", {
    opacity: 1,
    height: "29%",
    width: "12%",
    left: "85%",
    top: "34%",
  });
  // Function to set the height of the banner div
  function setBannerHeight() {
    var container = document.querySelector(".container-100");
    var containerHeight = container.offsetHeight;
    // console.log(containerHeight);
    var brsImg = document.getElementById("brs_img");
    brsImg.style.height = containerHeight + "px";
  }
  
  // Initial setting of banner height
  setBannerHeight();
  
  // Listen for window resize events to update the banner height
  window.addEventListener("resize", setBannerHeight);
  
  gsap.set(".vid_con video", {
    height: "12%",
    width: "10%",
    left: "87%",
    top: "41%",
  });
  
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".banner",
      start: "top top",
      end: "200% bottom",
      pin: true,
      markers: false,
      scrub: 2,
    },
  });
  tl.to(
    ".vid_con video",
    { zIndex: 1, height: "100%", width: "100%", left: "0%", top: "0%" },
    0
  )
    .to(
      ".br_second .brs_img",
      {
        opacity: 0,
        height: "40%",
        width: "100%",
        left: "0%",
        top: "20%",
        position: "absolute",
        overwrite: "all",
      },
      "<"
    )
    .to(".banner_left div", { opacity: 0 }, "<")
    .to(".brs_img img", { opacity: 0 }, "<");
  
  // gsap.registerPlugin(ScrollTrigger)
  // const headingSplitText = new SplitText(heading, {type:"chars"});
  const heading = document.querySelector(".heading");
  const results = Splitting({ target: heading, by: "chars" });
  const headingChars = results[0].chars;
  // console.log(headingChars);
  
  // mark section gsap start
  
  gsap.set(".mark_section .line1", { yPercent: -95 });
  gsap.set(".mark_section .msm_l2", { yPercent: -85, left: "45%" });
  gsap.set(".mark_section .item", { yPercent: -100 });
  gsap.set(".mark_section .msmli2", {
    xPercent: 90,
    width: "100%",
    height: "60%",
  });
  gsap.set(".mark_section .msmr_text", { xPercent: 61, scale: 0.2 });
  let t2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".mark_section",
      start: "top top",
      end: "400% bottom",
      pin: true,
      markers: false,
      scrub: 1,
    },
  });
  t2.to(".mark_section .msm_l2", { yPercent: -20 }, 0)
    .to(".mark_section .line1", { yPercent: -20 }, "<")
    .to(".mark_section .msmli1", { yPercent: 250, scale: 1.2 }, "<")
    .to(".mark_section .msmli2", { yPercent: 35 }, "<")
    .to(".mark_section .msmli3", { yPercent: 10, scale: 1.1 }, "-=.25")
    .to(".mark_section .msmr_text", { xPercent: 0, scale: 1 })
    .to(
      ".mark_section .msmli2",
      { xPercent: 87, width: "50%", height: "55%" },
      "<"
    )
    //  .to(".mark_section .msmli3",{scale:1},"<")
    .to(".mark_section .msmli1", { scale: 1.1 }, "<")
    .to(".mark_section .msm_l2", { left: "22%" }, "<")
    .to(".mark_section .line1", { yPercent: 40 }, "<");
  //  .to(".mark_section .line1",{yPercent:-100},"<")
  
  // mark section gsap ends
  
  // client section gsap start
  
  gsap.set(".client_section .ci_left", { xPercent: 0 });
  gsap.set(".client_section .ci_right", { xPercent: 0 });
  
  let t3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".client_section",
      start: "top top",
      ends: "2000% bottom",
      pin: true,
      markers: false,
      scrub: 1,
    },
  });
  t3.to(".client_section .ci_right", { xPercent: -75 }, 0);
  t3.to(".client_section .ci_left", { xPercent: -170 }, "<").to(
    ".c_inner .line1",
    { opacity: 0 },
    "<"
  );
  
  // client section gsap ends
  
  //  blur section gsap start
  gsap.fromTo(
    headingChars,
    {
      filter: "blur(0.10)",
    },
    {
      opacity: 1,
      color: "#35183D",
      stagger: {
        from: "left",
        amount: 1,
      },
      scrollTrigger: ".heading",
    }
  );
  
  //  blur section gsap ends
  
  //  team section gsap start
  
  gsap.set(".team_section .tmi2_text", { xPercent: 80 });
  gsap.set(".tmi2_box", { yPercent: 100 });
  
  let t4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".team_section",
      start: "top top",
      end: "250% bottom",
      pin: true,
      markers: false,
      scrub: 1,
    },
  });
  t4.to(".team_section .tmi2_text", { xPercent: 0 }, 0).to(
    ".tmi2_box",
    { yPercent: 0 },
    "after"
  );

})

// mm.revert();


var s = Splitting();

//  team section gsap ends
// }

$(document).ready(function () {
  
});



    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
          stagePadding:0,
        },
        1100: {
          items: 1,
          stagePadding:180,
        },
      },
    });


setTimeout(function () {
  $(".loader").addClass("active");
  $("body").removeClass("stay");
}, 2000);

$(function () {
  $(".slider_main2").infiniteslide({
    speed: 100,
    direction: "left",
    clone: 10,
  });
});
//
