
// ==== custome select =============
// const label = document.querySelector('.dropdown__filter-selected')
// const options = Array.from(document.querySelectorAll('.dropdown__select-option'))

// options.forEach((option) => {
// 	option.addEventListener('click', () => {
// 		label.textContent = option.textContent
// 	})
// })



// document.addEventListener('click', (e) => {
// 	const toggle = document.querySelector('.dropdown__switch')
// 	const element = e.target
// 	if (element == toggle) return;
// 	const isDropdownChild = element.closest('.dropdown__filter')	
// 	if (!isDropdownChild) {
// 		toggle.checked = false
// 	}
// });



// animate the about us gallery 
// const aboutGallery = gsap.utils.toArray(".animate-about-gallery");
// aboutGallery.forEach((imageItem, i) => {
//   const anim = gsap.from(
//     imageItem,
//     { opacity: 0, y: 30,  }
//   );
//   ScrollTrigger.create({
//     trigger: imageItem,
//     animation: anim,
//     toggleActions: "play",
//     once: true,
//     scroller:".body",
//     duration: 2.6,
//     delay:1,
//     stagger:0.2,
//     ease: Power3.easeInOut,
//   });
// });

// animation on images
// const images = gsap.utils.toArray(".animate-image-revel");
// images.forEach((image, i) => {
//   const animImage = gsap.from(image, {
//     y: 30,
//     opacity: 0.65,
//     duration: 1,
//   });
//   ScrollTrigger.create({
//     trigger: image,
//     animation: animImage,
//     toggleActions: "play",
//     once: true,
//     scroller:".body",
//     duration: 1,
//     ease: Power4.easeOut,
//   });
// });



// let lastScrollTop = 0;
// function handleScroll(){
//     const currentScrollY = scroller.scroll.instance.scroll.y || document.documentElement.scrollTop;
//     if(currentScrollY > lastScrollTop){
//       gsap.to(headerNew, {
//           autoAlpha: 0, 
//           duration : 0.5
//       }); 
//     }else{
//       gsap.to(headerNew, {
//           autoAlpha: 1 ,
//           duration : 0.5 
//       });
//     }
//     lastScrollTop = currentScrollY;
// }
