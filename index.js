console.log("JAMES EFIENEMOKWU")

gsap.registerPlugin(ScrollTrigger);

gsap.to(".whatido1",{
    y: 10,
    duration:3,
    toggleActions: "restart none none none",
    scrollTrigger: {
      trigger: ".whatido1",
      start: "top center",
      toggleActions: "restart none none none",
    }
})

gsap.to(".whatido2",{
    y: 10,
    duration:3,
    scrollTrigger: {
      trigger: ".whatido2",
      start: "top center",
      toggleActions: "restart none none none",
    }
})
gsap.to(".whatido3",{
    y: -10,
    duration:3,
    scrollTrigger: {
      trigger: ".whatido3",
      start: "top center",
      toggleActions: "restart none none none",
    }
})
gsap.to(".project1",{
    y: -10,
    duration:3,
 
    scrollTrigger: {
      trigger: ".project1",
      start: "top center",
      toggleActions: "restart none none none",
    }
})
gsap.to(".project2",{
    x: -10,
    duration:3,
    scrollTrigger: {
      trigger: ".project2",
      start: "top center",
      toggleActions: "restart none none none",
    }
})
gsap.to(".project3",{
    x: 11,
    duration:3,
    scrollTrigger: {
      trigger: ".project3",
      start: "top center",
      toggleActions: "restart none none none",
    }
})

const words = ["Front end engineer", "Mobile Web developer"]
let cursor = gsap.to('.cursor', {
    opacity: 0,
    ease: "power2.inOut",
    repeat: -1
})

let masterTl = gsap.timeline({repeat: -1})
words.forEach(word => {
    let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1})
    tl.to(".text", {
        duration:1.5,
        text: word
    })
    masterTl.add(tl)
})

const hamburger = document.getElementById('hamburger')
const close = document.getElementById('close')
const nav = document.getElementById('nav-ul') 


function toggleMenu() {
    if (nav.classList.contains("show")) {
      nav.classList.remove("show");
      close.style.display = "none";
      hamburger.style.display = "block";
    } else {
      nav.classList.add("show");
      close.style.display = "block";
      hamburger.style.display = "none";
    }
  }