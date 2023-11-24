gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".home-video-banner",
    markers:false,
    start: "top top",
    end: "+=800",
    pin: ".home-video-banner",
    scrub: 2,
  },

});
tl.from(".last-img-element", {
  duration: 1, // This does nothing in theory, because scrolltriggers is handling the duration
  // opacity:"1",
  // clipPath: "inset(0 0 0 0)",
  // zIndex:999,
});

tl.from(".gsap-video", {
    duration: 2, // This does nothing in theory, because scrolltriggers is handling the duration
    clipPath: "inset(34% 48px 37% 85%)",
      ease: "none", // better with scrub-ed scrolltrigger
   zIndex:99,
  });

  tl.to(".last-img-element", {
    duration: 0, // This does nothing in theory, because scrolltriggers is handling the duration
    // opacity:"0",
    zIndex:99,
    // clipPath: "inset(110%)",
  },"<-.2");

  tl.to(".gsap-video",{ 
    duration: 2, // This does nothing in theory, because scrolltriggers is handling the duration
     clipPath: "inset(0 0 0 0)",
      ease: "none", // better with scrub-ed scrolltriggers
     
      zIndex:999,
  });


  // gsap.registerPlugin(ScrollTrigger)
  // const headingSplitText = new SplitText(heading, {type:"chars"});
  const heading = document.querySelector(".heading");
  const results = Splitting({ target: heading, by: 'chars' });
  const headingChars = results[0].chars;
  // console.log(headingChars);
  
  
  
    
    // mark section gsap start
  
      gsap.set(".mark_section .line1",{yPercent:-95});
         gsap.set(".mark_section .msm_l2",{yPercent:-85,left:"45%"});
         gsap.set(".mark_section .item",{yPercent:-100});
         gsap.set(".mark_section .msmli2",{xPercent:90,width:"100%",height:"60%"});
         gsap.set(".mark_section .msmr_text",{xPercent:61,scale:.2});
         let t2 = gsap.timeline({
          scrollTrigger:{
            trigger:".mark_section",
            start:"top top",
            end:"400% bottom",
            pin:true,
            markers:false,
            scrub:1
          }
         })
         t2.to(".mark_section .msm_l2",{yPercent:-20},0)
         .to(".mark_section .line1",{yPercent:-20},"<")
         .to(".mark_section .msmli1",{yPercent:250,scale:1.2},"<")
         .to(".mark_section .msmli2",{yPercent:35},"<")
         .to(".mark_section .msmli3",{yPercent:10,scale:1.1},"+=1")
         .to(".mark_section .msmr_text",{xPercent:0,scale:1})
         .to(".mark_section .msmli2",{xPercent:87,width:"50%",height:"55%"},"<")
        //  .to(".mark_section .msmli3",{scale:1},"<")
        //  .to(".mark_section .msmli1",{scale:1},"<")
         .to(".mark_section .msm_l2",{left:"22%"},"<")
         .to(".mark_section .line1",{yPercent:40},"<")
        //  .to(".mark_section .line1",{yPercent:-100},"<")
        
        // mark section gsap ends
  
        // client section gsap start
  
         gsap.set(".client_section .ci_left",{xPercent:0})
         gsap.set(".client_section .ci_right",{xPercent:0})
  
         let t3 = gsap.timeline({
          scrollTrigger:{
            trigger:".client_section",
            start:"top top",
            ends:"500 bottom",
            pin:true,
            markers:false,
            scrub:1
          }
         })
  
         t3.to(".client_section .ci_right",{xPercent:-65},0)
         t3.to(".client_section .ci_left",{xPercent:-180},"<")
  
         // client section gsap ends
         
  
  
        //  blur section gsap start
         gsap.fromTo(headingChars, {
           filter: "blur(0.10)",},{  opacity: 1,
          color:"#35183D",
          stagger: {
            from: "left",
            each: .1
          },
          scrollTrigger:".heading",})
  
        //  blur section gsap ends
    
  
        //  team section gsap start
  
         gsap.set(".team_section .tmi2_text",{xPercent:80});
         gsap.set(".tmi2_box",{yPercent:100});
  
         let t4 = gsap.timeline({
          scrollTrigger:{
            trigger:".team_section",
            start:"top top",
            end:"400% bottom",
            pin:true,
            markers:false,
            scrub:1
          }
         })
         t4.to(".team_section .tmi2_text",{xPercent:0},0)
         .to(".tmi2_box",{yPercent:0},"after");
         
          //  team section gsap ends
        
          var s = Splitting();
