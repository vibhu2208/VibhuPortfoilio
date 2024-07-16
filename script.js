function valuesetters(){
    gsap.set("#nav a",{ y:"-100%", opacity:0})
    gsap.set("#home span .child",{y:"-100%"})
}

function revealToSpan(){
    document.querySelectorAll(".reveal")
    .forEach(function(elem){
      var Parent = document.createElement("span");
      var child = document.createElement("span");
  
      Parent.classList.add("parent");
      child.classList.add("child");
  
      child.innerHTML=elem.innerHTML;
      Parent.appendChild(child);
  
      elem.innerHTML="";
      elem.appendChild(Parent);
    })
  }
  

function loaderanimation(){
    const tl = gsap.timeline({ defaults: { ease: Circ.out, duration: 1 } })
  tl.from(" #loader .child span",{
    x:110,
    duration:1,
    stagger:.2,
    
})
    tl.to("#loader .parent .child",{
        y:"-100%",
        duration:1,
})
tl.to("#loader",{
    height:0
})

tl.to("#green",{
    height:"100%",
    top:0,
    ease:"expo.out",
    delay:-.5
})
tl.to("#green",{
    height:"0%",
    delay:-.3,
       
    onComplete:function(){
        animateHomepage();
    }
})
}

function animateHomepage(){

    var tl = gsap.timeline();
    tl.to("#nav a",{
        y:0,
        opacity:1,
        stagger:.05,
        ease: Circ.out
        })
    tl.to("#home span .child",{
        y:0,
        opacity:1,
        stagger:.05,
        ease: Circ.out,
        duration:1
    })
}
revealToSpan();
valuesetters();
loaderanimation(); 