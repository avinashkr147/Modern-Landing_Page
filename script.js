var tl = gsap.timeline()

tl.from("nav",{
    x:100,
    delay:0.5,
    yoyo:true,
    duration:1,
    stagger:0.3,
    repeat:0,
                       // Stagger is a delay timing property in each element coming one by one.
    opacity:0,
                   //Opaciaty is a blinking type
                   // when we give value is 0 it's intial position when come with slow 
 })
 tl.from(".left-side-nav>h4,#nav-center-area>h4,#right-side-nav>h4",{
    x:-100,
    delay:1.6,
    duration:1,
    stagger:0.3,
    opacity:0,
   color:"red",
  
  })
 tl.from("#center>.center-div",{
    y:-50,
    delay:0.7,
    duration:1,
    yoyo:true,
   repeat:-1,
   scale:1,
    
    opacity:0,
   color:"red",
  
  })
 
tl.from("main>#left,#left>p",{
    x:100,
    delay:0.7,
    duration:1,
    stagger:0.3,
    opacity:0,
   color:"red",
  
  })
  
  tl.from(".button-container-heart>button",{
 
    delay:0.5,
    duration:1,
    stagger:0.3,
    opacity:0,
   color:"red",
  
  })

  tl.from("#right>div,h3",{
    x:-100,
    delay:1.6,
    duration:1,
    stagger:0.3,
    opacity:0,
   color:"red",
  
  })


  tl.from("#right>div p",{
    x:-100,
    delay:1.5,
    duration:1,
    stagger:0.3,
   
    opacity:0,
   color:"red",
  })
  




