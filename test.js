gsap.to(".imagecontainer", {
    width:"100%",
  ease:Power2.easeOut,
  duration: 2,
  stagger: 2
})
gsap.to(".text h1",{
    ease:Power2.easeOut,
    stagger:2,
    top:0
})
gsap.to(".text h1",{
    ease:Power2.easeOut,
    stagger:2,
    top:0,
    delay:2,
    top:"-200%"
})
gsap.from(".arrow i",{
  opacity:0,
  duration:1,
  repeat:4,
  
})
gsap.to(".arrow i", {
    
    duration: 1,
    ease:Power1.easeOut,
    x:50,
    repeat:2,
    repeatDelay:1
  });
  gsap.from(".arrow h3",{
    opacity:0,
    duration:1,
    repeat:4,
    
  })
  gsap.to(".arrow h3", {
      
      duration: 1,
      ease:Power1.easeOut,
      x:10,
      repeat:2,
      repeatDelay:1
    });