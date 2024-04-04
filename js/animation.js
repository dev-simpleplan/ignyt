// cursor script
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
if(!document.querySelector('.applyScrollSmootherToThisPage')){
  
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
}

setTimeout(function() {
  $('.loader').addClass('active');
    $('body').removeClass('stay');
}, 4000);
setTimeout(function() {
  $('.loader svg').addClass('active');
}, 1000);

window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  if (window.scrollY > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});

gsap.to(".cursor-wrap-svg img", { rotation: 540, duration: 3, repeat: -1, ease: "none" });
const cursorRounded = document.querySelector('.cursor');
    const moveCursor = (e) => {
      const mouseY = e.clientY;
      const mouseX = e.clientX;
      gsap.to(cursorRounded, { 
        x: mouseX,
        y: mouseY,
        duration: 0.3, 
        ease: 'power2.out'
      });
    }

window.addEventListener('mousemove', moveCursor);

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
document.querySelector('.navbar_main').addEventListener("click", ()=>{
  document.querySelector('body').classList.add("active");
  document.querySelector('.main-navbar').classList.add('active');
  let t = gsap.timeline();
   t.set('.main-navbar-bottom-logo', {y:400});
   t.set('.main-navbar-top-right', {opacity:0});
   t.to('.navbar_main',{
    opacity:0
   })
   t.to(".main-navbar",{
      y: 0,
      duration: 1,
      ease: "power4.in",
      onComplete: function() {
                      document.querySelector('.main-navbar').classList.add('active');
                  }
   },"=-0.8");
   t.to('.main-navbar-top-left img',{
    opacity:1
   })
   t.to(".main-navbar-bottom-logo",{
     y:0,
     duration:.5,
    
   },"=-0.8")
   t.to(".main-navbar-top-right",{
     opacity:1,
     duration:.6,
    
   },"=-0.2");

})

document.querySelector('.main-navbar-top-left img').addEventListener("click", ()=>{
  document.querySelector('body').classList.remove("active");
  document.querySelector('.main-navbar').classList.remove('active');
  let e = gsap.timeline();
  e.to('.main-navbar-top-left img',{
    opacity:0
  })
  e.to('.main-navbar-top-right',{
    duration:.6,
    opacity:0,
  },"=-0.4")
  e.to(".main-navbar-bottom-logo",{
    y: 400,
    duration: .5,
    delay: .2,
    ease: "power4.in"
  },"-=0.6")
  e.to(".main-navbar",{
    y:"100%",                             
    duration: 1,                                
    ease: "power4.in"
    }, "=-0.9")
    e.to('.navbar_main',{
    opacity:1
   },"=-0.4")  
  })


  document.querySelectorAll('.main-navbar-top-menu-head').forEach((element) => {
    element.addEventListener("click", () => {
      var isActive = element.classList.contains('active');
        document.querySelectorAll('.main-navbar-top-menu-head').forEach((el) => {
            el.classList.remove('active');
            var nextSibling = el.nextElementSibling;
            if (nextSibling) {
                nextSibling.classList.remove('active');
            }
        });
        if (!isActive) {
        element.classList.add('active');
        var nextSibling = element.nextElementSibling;
        if (nextSibling) {
            nextSibling.classList.add('active');
        }
      }
      else{
        element.classList.remove('active');
        var nextSibling = element.nextElementSibling;
        if (nextSibling) {
            nextSibling.classList.remove('active');
        }
      }
    });
});
document.querySelectorAll('.footer_top .ftm_item:not(:first-child) .ftm_heading').forEach((element) => {
    element.addEventListener("click", () => {
      var isActive = element.classList.contains('active');
        document.querySelectorAll('.footer_top .ftm_item:not(:first-child) .ftm_heading').forEach((el) => {
            el.classList.remove('active');
            var nextSibling = el.nextElementSibling;
            if (nextSibling) {
                nextSibling.classList.remove('active');
            }
        });
        if (!isActive) {
        element.classList.add('active');
        var nextSibling = element.nextElementSibling;
        if (nextSibling) {
            nextSibling.classList.add('active');
        }
      }
      else{
        element.classList.remove('active');
        var nextSibling = element.nextElementSibling;
        if (nextSibling) {
            nextSibling.classList.remove('active');
        }
      }
    });
});

// Function to add active class on hover
function addActiveClassOnHover() {
    const menuLinks = document.querySelectorAll('.main-navbar-top-menu');

    menuLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            const attributeValue = this.getAttribute('data-video-index');
            console.log(attributeValue);
            const videos = document.querySelectorAll('.navbar-videos-video');
            document.querySelector('.main-navbar-container').classList.add('active');

            // Remove active class from all videos
            videos.forEach(video => {
                video.classList.remove('active');
            });

            // Add active class to the corresponding video
            const targetVideo = document.querySelector(`.navbar-videos-video[data-video-index="${attributeValue}"]`);
            console.log(targetVideo);
            if (targetVideo) {
                targetVideo.classList.add('active');
            }
        });
    });
    menuLinks.forEach(link => {
        link.addEventListener('mouseout', function() {
            const attributeValue = this.getAttribute('data-video-index');
            const videos = document.querySelectorAll('.navbar-videos-video');
            document.querySelector('.main-navbar-container').classList.remove('active');

            // Remove active class from all videos
            videos.forEach(video => {
                video.classList.remove('active');
            });

            // Add active class to the corresponding video
            const targetVideo = document.querySelector(`.navbar-videos-video[data-video-index="${attributeValue}"]`);
            if (targetVideo) {
                targetVideo.classList.remove('active');
            }
        });
    });
}

function myFunction(x) {
  if (x.matches) { // If media query matches
    document.addEventListener('DOMContentLoaded', addActiveClassOnHover);
  } else {
   
  }
}

// Create a MediaQueryList object
var x = window.matchMedia("(min-width: 991px)")

// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function() {
  myFunction(x);
});

const spanR = gsap.utils.toArray(".animate-text");
spanR.forEach((target) => {
  
 gsap.to(target,{
    opacity:1,
    y:0,
    scrollTrigger:{
    trigger: target,
    start: "top 80%",
    markers:false
  }
  });
});  

document.querySelectorAll('a, button, .navbar_main, .main-navbar-top-left, .main-navbar-top-left, .fQcUw-left-question').forEach((e)=>{
    e.addEventListener("mouseover", ()=>{
      document.querySelector('.cursor .cursor-wrap').classList.add('active');
    })
    e.addEventListener("mouseout", ()=>{
      document.querySelector('.cursor .cursor-wrap').classList.remove('active');
    })
})