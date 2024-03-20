$(document).ready(function () {
  $(".loader__wrapper-one").addClass("active");
});

$(window).on("load", function () {
  $(".loader").addClass("end");
});

//====== Registerd ScrollTrigger Plugin ==========
gsap.registerPlugin(ScrollTrigger);


//====== Locomotive  Scroll ======
const scroller = new LocomotiveScroll({
  el:document.querySelector(".main"),
  smooth:true,
});


//====== Sticky Header start ==========
const headerNew = document.querySelector('.header');

function handleHeaderScroll(){
  const scrollY = scroller.scroll.instance.scroll.y;
  if(scrollY > 50) {
    headerNew.classList.add('sticky');
  }else{
    headerNew.classList.remove('sticky');
  }
}
//======= Sticky Header End ===========

scroller.on('scroll', handleHeaderScroll);
scroller.on('scroll', ScrollTrigger.update);

ScrollTrigger.scrollerProxy('.main', {
  scrollTop(value){
    return arguments.length ? scroller.scrollTo(value, 0, 0) :
    scroller.scroll.instance.scroll.y
  },
  getBoundingClientRect(){
    return {
      left:0, top:0,
      width:window.innerWidth, height:window.innerHeight
    }
  },
  pinType:document.querySelector('.main').style.transform ? "transform" : "fixed"
});


//====== Active Page Link start ======
const windowPathname = window.location.pathname;
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach(link =>{
  const navLinkPathname = new URL(link.href).pathname;
  if((windowPathname === navLinkPathname) || (windowPathname === "/index.html" && navLinkPathname === "/")){
    link.classList.add("active");
  }
});
//====== Active Page Link end ======


//========== sidebar navigation toggle Start  =========
var closeMenuBtn = document.getElementById("close-menu-btn");
var mobileMenu = document.getElementById("mobile-menu");
var navbarToggle = document.getElementById("navbar-toggle");
var mobileMenuOverlay = document.getElementById("mobile-menu-overlay");
var body = document.querySelector(".yh-body");

navbarToggle.onclick = function () {
  mobileMenu.classList.add("is-active");
  mobileMenuOverlay.classList.add("is-active");
  body.classList.add("disable-scroll");
};

closeMenuBtn.onclick = function () {
  mobileMenu.classList.remove("is-active");
  mobileMenuOverlay.classList.remove("is-active");
  body.classList.remove("disable-scroll");
};
//========== sidebar navigation toggle End  =========


//========== Video Play /Pause Button Start ============
const playBtns = document.querySelectorAll(".video-action-btn");
if(playBtns) {
  const videoContainer = document.querySelector(".video__popup-container");
  const videoOverlay = document.querySelector(".video__popup-overlay");
  const html = document.querySelector("html");
  const closeBtn = document.querySelector(".video__popup-close");
  let iframe = document.querySelector(".video__popup-iframe-container > iframe");

  playBtns.forEach((playBtn, index) => {
    playBtn.addEventListener("click",() => {
      const videoId = playBtn.dataset.id;
      iframe.src = `https://www.youtube.com/embed/${videoId}`;
      videoContainer.classList.add("show");
      videoOverlay.classList.add("overlay-show");
      html.classList.add("overflow-hidden");
    })
  });

  function hideVideo(){
    iframe.src ="";
    videoContainer.classList.remove("show");
    videoOverlay.classList.remove("overlay-show");
    html.classList.remove("overflow-hidden");
  }
  if(closeBtn){
    closeBtn.addEventListener("click", hideVideo);
    videoOverlay.addEventListener("click", hideVideo);
  }
}
//========== Video Play /Pause Button End ============


//========= cursor view case start ==============
const cursorBee = document.querySelector(".cursor-bee");
const cursorEye = document.querySelector(".cursor-eye");
let scale = 1;

function mousemoveHandler(e){
  const target = e.target;
  const tl = gsap.timeline({
    defaults: {
      x: e.clientX,
      y: e.clientY,
      ease: "power2.out",
    },
  });

  if(target.tagName.toLowerCase() === "img" && target.closest(".image-grid")) {
    tl.to(cursorBee, {
      opacity: 0,
    }).to(
      cursorEye,
      {
        opacity: 1,
        zIndex: 5,
      },
      "-=0.5"
    );
  }else {
    target.classList.contains("line-animation") ? scale = 4 : scale = 1;
    tl.to(cursorBee, {
      opacity: 1,
      scale: scale,
    }).to(
      cursorEye, {
        opacity: 0,
      },
      "-=0.5"
    );
  }
}

function mouseleaveHandler(){
  gsap.to(cursorBee, {
    opacity: 0,
  });
}

if(cursorBee && cursorEye){
  document.addEventListener("mousemove", mousemoveHandler);
  document.addEventListener("mouseleave", mouseleaveHandler);
}
//========= cursor view case end ==============


//========= faq (accordion) section Start ==========
const accordionBtns = document.querySelectorAll(".accordion");

accordionBtns.forEach((accordion) => {
  accordion.onclick = function (){
    this.classList.toggle("is-open");
    let content = this.nextElementSibling;
    if(content.style.maxHeight){
      //this is if the accordion is open
      content.style.maxHeight = null;
    }else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };
});
//========= faq (accordion) section End ==========


const tl = gsap.timeline();

//========== text and hero animation =========
window.addEventListener("load", () => {
  // hero area
  tl.from([".header__logo", ".navbar-toggle"], 1, {
    opacity: 0,
    y: -50,
    delay: 1,
    stagger:0.1,
    ease: Expo.easeInOut,
  });

  tl.from(".hero__header", {
    opacity: 0,
    duration: 1,
    y: 50,
    delay: -0.8,
    stagger:0.2,
    ease: Power3.easeInOut,
  });

  tl.from(".socials-link--hero", {
    opacity: 0,
    x: -20,
    duration:0.4,
    stagger: 0.1,
    // delay: -0.85,
    delay: -1.1,
    ease: Power3.easeInOut,
  });

  tl.from(".marque-container--hero", 1, {
    opacity: 0,
    y: 20,
    // delay: -0.05,
    delay: -0.99,
    ease: Power3.easeInOut,
  });

  tl.from(".animate-hero-image", 1, {
    opacity: 0,
    y: 30,
    duration: 1,
    // delay: -2.3,
    delay: -0.98,
    ease: Power3.easeInOut,
  });

  tl.from(".contact-form__social-media > .social-media-link", {
    opacity: 0,
    duration:1,
    stagger: 0.1,
    delay: -1.8,
    x: -20,
    ease: Power3.easeInOut,
  });

  tl.from(".animate--branding-hero-image", 1, {
    opacity: 0,
    duration: 2,
    y: 30,
    delay: -2.3,
    stagger: 0.1,
    ease: Power3.easeInOut,
  });

  tl.from(".filter__list-item > a", 1,{
    opacity: 0,
    x:-50,
    duration:1,
    delay:-1,
    stagger:0.1,
    ease:Power3.easeOut,
  })

  tl.from(".filter-spacer ",{
    scale:0,
    transformOrgin:"right",
    duration:1,
    delay:-0.8,
    ease:Power3.easeOut,
  });

  tl.from(".feature-project__card, .feature-project__heading ",{
    opacity:0,
    y:60,
    duration:1,
    delay:-1,
    stagger:0.1,
    ease:Power4.easeOut,
  });
});

// animation on text container
const textContainers = gsap.utils.toArray(".animate-fade-in-up");
textContainers.forEach((textContainer, i) => {
  const anim = gsap.fromTo(
    textContainer,
    { opacity: 0, y: 50 },
    { duration: 1, opacity: 1, y: 0 }
  );
  ScrollTrigger.create({
    trigger: textContainer,
    animation: anim,
    toggleActions: "play",
    once: true,
    scroller:".main",
    duration: 1,
    stagger:0.2,
    ease: Power4.easeOut,
  });
});

// animation of fade in for hero part
const fadeIn = gsap.utils.toArray(".animate-fade-in");
fadeIn.forEach((mainContent, i) => {
  const anim = gsap.fromTo(
    mainContent,
    { opacity: 0 },
    { opacity: 1, duration: 1}
  );
  ScrollTrigger.create({
    trigger: mainContent,
    animation: anim,
    toggleActions: "play",
    once: true,
    scroller:".main",
    duration: 1,
    ease: Power4.easeOut,
  });
});

// animation on image container
const imagesScale = gsap.utils.toArray(".scaleY");
imagesScale.forEach((imgContainer, i) => {
  const anim = gsap.fromTo(
    imgContainer,
    { opacity: 0, y: 50, scale:0.95, transformOrigin:"bottom"},
    { opacity: 1, y: 0, scale:1.0035, duration:1 }
  );
  ScrollTrigger.create({
    trigger:imgContainer,
    animation: anim,
    toggleActions: "play",
    once: true,
    scroller:".main",
    duration: 1,
    stagger:0.1,
    ease: Power4.easeOut,
  });
});


//========= javascript counter Start ===========
function visible(partial) {
  let $t = partial,
    $w = jQuery(window),
    viewTop = $w.scrollTop(),
    viewBottom = viewTop + $w.height(),
    _top = $t.offset().top,
    _bottom = _top + $t.height(),
    compareTop = partial === true ? _bottom : _top,
    compareBottom = partial === true ? _top : _bottom;

  return (
    compareBottom <= viewBottom && compareTop >= viewTop && $t.is(":visible")
  );
}
function updateCounter(){
  const myCounter = document.querySelector('.count-digit');
  if (myCounter){
    if (visible($(".count-digit"))){
      if ($(".count-digit").hasClass("counter-loaded")) return;
      $(".count-digit").addClass("counter-loaded");
  
      $(".count-digit").each(function () {
        if ($(this).html() == Math.floor($(this).html())) {
          var $this = $(this);
          jQuery({ Counter: 0 }).animate(
            { Counter: $this.text() },
            {
              duration: 1500,
              easing: "swing",
              step: function () {
                $this.text(Math.trunc(this.Counter) + 1);
              },
            }
          );
        } else {
          var $this = $(this);
          jQuery({ Counter: 0 }).animate(
            { Counter: $this.text() },
            {
              duration: 1500,
              easing: "swing",
              step: function () {
                $this.text(((this.Counter * 10) / 10).toFixed(1));
              },
            }
          );
        }
      });
    }
  }
}

scroller.on('scroll', updateCounter);
//========= javascript counter End ===========


ScrollTrigger.addEventListener("refresh", () => scroller.update());
ScrollTrigger.refresh();

//========= checkbox is checked Start =========
$("#agree-concent").click(function () {
  if (!$(this).is(":checked")) {
    $("#btncheck").attr("disabled", "disabled").removeClass("enable");
  } else $("#btncheck").removeAttr("disabled").addClass("enable");
});
//========= checkbox is checked End =========


//========= mobile menu animation start ==========
const navbarToggleItem = document.querySelector("#navbar-toggle");
const closeMenuBtnItem = document.querySelector("#close-menu-btn");
const mobileLinkList = document.querySelectorAll(".mobile-nav__list-item");
const mobileFooterLink = document.querySelectorAll(".mobile-menu__social-media-link");
const mobileNavTitle = document.querySelectorAll(".mobile-menu__nav-title");
const mobileLinkListArr  = Array.from(mobileLinkList);
const mobileNavLink = document.querySelectorAll(".mobile-nav__link");
const mobileNavLinkArr = Array.from(mobileNavLink);

navbarToggleItem.addEventListener("click", () => {
  tl.to(".mobile-menu", {
    opacity:1,
    y:0,
    duration:0.3,
    ease:Power4.easeInOut,
  })

  mobileNavTitle.forEach((title) => {
    gsap.fromTo(".mobile-menu__nav-title", {
      opacity:0,
    },
    {
      opacity:1,
      delay:0.3,
      duration:0.25,
      ease:Power4.easeInOut,
    })
  })

  mobileNavLinkArr.forEach((mobileLink) => {
    gsap.fromTo(".mobile-nav__link", {
      y:"100%",
      ease:Power4.easeInOut,
    }, 
    {
      y:0,
      duration:0.35,
      ease:Power4.easeInOut,
    })
  })

  mobileFooterLink.forEach((link) => {
    gsap.fromTo('.mobile-menu__social-media-link', {
      x:-20,
      opacity:0,
    },
    {
      x:0,
      opacity:1,
      stagger:0.1,
      ease:Power4.easeInOut,
    })
  })
})

closeMenuBtnItem.addEventListener("click", () => {
  mobileNavTitle.forEach((title) => {
    gsap.fromTo(".mobile-menu__nav-title", {
      opacity:1,
    },
    {
      opacity:0,
      duration:0.25,
      delay:0.3,
      ease:"power3.easeInOut",
    });
  })

  mobileNavLinkArr.forEach((mobileLink) => {
    gsap.fromTo(".mobile-nav__link",
    {
      y:0,
      ease:"power3.easeInOut",
    },
    {
      y:"100%",
      duration:0.65,
      ease:"power3.easeInOut",
    }
    )
  })

  mobileFooterLink.forEach((link) => {
    gsap.fromTo('.mobile-menu__social-media-link', {
      x:0,
      opacity:1,
      stagger:0.1,
    },
    {
      x:-20,
      opacity:0,
      delay:0.35,
      ease:"power3.easeInOut",
    })
  })

  tl.from(".mobile-menu", {
    opacity:0,
    duration:0.35,
    delay:0.5,
    ease:"power3.easeInOut",
  })
});
//========= mobile menu animation end ==========


//========= Filter Portfolio Start ============
const filterButtons = document.querySelectorAll(".filter__list-item");
// Update Button States
function updateButtonState(category){
  filterButtons.forEach((button) => {
    button.classList.remove('active');
  });

  let activeButton = document.querySelector(`.filter-btn[value="${category}"]`).parentNode;
  if(activeButton){
    activeButton.classList.add('active');
  }
}

// Filter cards based on category
function filterCards(category){
  const cards = document.querySelectorAll('.filter-projects');
  cards.forEach((card) => {
    let cardCategories = card.getAttribute('data-category').split(' ');
    if (category === "all" || cardCategories.includes(category)) {
      card.classList.add("show");
      gsap.from(card, { 
        duration: 0.5, 
        y:60,
        opacity: 0, 
        scaleY: 0,
        transformOrgin:"bottom", 
        ease: "power3.easeOut" 
      });
    }else{
      card.classList.remove("show");
      gsap.to(card, { 
        duration: 0.5, 
        y:0,
        opacity: 1, 
        scaleY: 1, 
        ease: "power3.easeOut" 
      });
    }
  });
  updateButtonState(category);
}

if(filterButtons){
  filterButtons.forEach((filterBtn) => {
    filterBtn.addEventListener("click", ()=>{
      const filterValue = filterBtn.children[0].getAttribute("value");
      filterCards(filterValue);
    });
  });
}

// Show all cards when page load
window.onload = function(){
  if(filterButtons){
    filterCards('all');
  }
};
//=========== Filter Portfolio End =============

// // Each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
// ScrollTrigger.addEventListener("refresh", () => scroller.update());

// // After everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();