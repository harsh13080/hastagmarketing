// inspect

// document.addEventListener("contextmenu", function(e){
//     e.preventDefault
// },false)



// header scroll
let navl = document.querySelector(".navbar");
window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
        navl.classList.add("header-scrolled");
    } else {
        navl.classList.remove("header-scrolled");
    }
}


// nav hide 

 let navBar = document.querySelectorAll(".nav-link");
 let navllapes = document.querySelector(".navbar-collapse.collapse");
 navBar.forEach(function(a){
    a.addEventListener("click" ,function(){
     navllapes.classList.remove("show") ;  
    })
        
    
 })



// owl carousel

$(document).ready(function(){
    $(".client-slider-section").owlCarousel({
        items: 4,
        loop:true,
        nav:false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
        
    });
});


// gsap ====>

var tl = gsap.timeline()

tl.from (".navbar-brand img",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5

})
tl.from (".nav-item a",{
    y:-30,
    opacity:0,
    duration:1,
    stagger:0.3


});

// gsap end  ====>

    var Path =`M 10 100 Q 500 100 990 100`

    var finalPath = `M 10 100 Q 500 100 990 100`
    
    var String1 = document.querySelector("#string1")
    
    String1.addEventListener("mousemove" , function(data){
        
        Path =`M 10 100 Q ${data.x} ${data.y} 990 100`
    
        gsap.to("svg path",{
    
    
            attr:{d: Path},
            duration:0.3,
            ease:"power3.out"
            
        })
    
    
         
    }) 
    String1.addEventListener("mouseleave" , function(){
          gsap.to("svg path",{
            attr:{d:finalPath},
            duration:1.5,
            ease:"elastic.out(1,0.2)"
          })
    
    })

    //  =====>
    var tl = gsap.timeline()

tl.from("#raja",{
    x:90,
    opacity:0,
    duration:1.9,
    delay:1.5

})

// loder

var loder = document.getElementsByClassName("ring-of-stars");
window.addEventListener("load" , function(){
    this.setTimeout(function(){
        loder.style.display = "none"
    } , 2000);
});





//  progess js

let calcScrollValue = () =>{
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;

    let calcHeight = 
    document.documentElement.scrollHeight- document.documentElement.clientHeight;

    let ScrollValue = Math.round((pos * 100) / calcHeight);
    if(pos>100){
        scrollProgress.style.display ="grid";
    }
    else{
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click",() =>{
        document.documentElement.scrollTop = 0;
    });

    scrollProgress.style.background = `conic-gradient(#0e9d80 ${ScrollValue}% , #d7d7d7 ${ScrollValue}%)`;
};


window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// ====>
//     var tl = gsap.timeline()

// tl.from("#try #trust",{
//     y:-60,
//     opacity:0,
//     duration:1,
//     delay:0.5
//     scrollTrigger:{
//         trigger:"#try #trust",
//         scroller: "body",
//         markers:true,


// })
