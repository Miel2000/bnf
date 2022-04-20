
// // let doParallax = {
	
// // 	init : () => {
		
// // 	 console.log('YEEET');
// // 	  this.myTargets = [];
	  
// // 	  this.targets = document.body.querySelectorAll('.parallax');
  
// // 	  this.targets.forEach((target, index) => {
  
// // 		myTargets.push({
// // 		  "targetParent" : target,
// // 		  "targetChildren" : []
// // 		});
  
// // 		const family = Array.from(target.children);
  
// // 		family.forEach( child => {
// // 		  const initDecay = parseInt(window.getComputedStyle(child).getPropertyValue('top').replace('px', ''));
// // 		  this.myTargets[index].targetChildren.push({"element" : child, initDecay});
// // 		});
  
// // 	  });
  
// // 	  window.addEventListener('scroll',  doParallax.handleScroll)
// // 	},
  
	
// // 	handleScroll : e => {
// // 	  this.myTargets.forEach(target => {
  
// // 		const decay = window.scrollY - target.targetParent.offsetTop;
  
// // 		this.doParallax.actionParent(target.targetParent, decay);
// // 		this.doParallax.actionChildren(target.targetChildren, decay);
  
// // 	  });
// // 	},
  
// // 	actionParent : (element, decay) => {
  
// // 	  let relativeDecayBg = 50 - (decay * 0.8);
// // 	  element.style.cssText = `background-position: 50% ${relativeDecayBg}%;`
  
// // 	},
  
// // 	actionChildren : (children, decay) => {
  
// // 	  children.forEach(child => {
  
// // 		let relativeDecay = (child.initDecay + decay / 1.5);
// // 		child.element.style.cssText = `top: ${relativeDecay}px;`;
  
// // 	  });
  
// // 	}
// //   };

// //   doParallax.init();
  
// // /test
// // Init ScrollMagic Controller

// let firstController = new ScrollMagic.Controller();

// // Init Timeline
// const tl = gsap.timeline({})

// 	.to('.rock', 3, {y: -300})
// 	.to('.girl', 3, {y: -400}, "-=3")
// 	.fromTo('.bg1', 3, { y: -20 }, { y: 0}, "-=3")
// 	.to('.content', 3, {top:'0%'}, '-=3');



// // Init Scene
// let scene = new ScrollMagic.Scene({
// 		triggerElement: "section",
// 		duration: "200%",
// 		triggerHook: 0
// 	})
	
// 	.setTween(tl)
// 	.setPin('section')
// 	.addIndicators()
// 	.addTo(firstController);
  

// let imgScene = new ScrollMagic.Scene({
// 		triggerElement:".content-images",
// 		duration:"50%",
// 		triggerHook: 0.5
// 	})

// 	.setClassToggle('.content-images','fade-in')
// 	.addIndicators({
// 		name:"fade scene image",
// 		colorTrigger: 'black',
// 		indent: 100,
// 		colorStart: '#75C695'
// 	})
// 	.addTo(firstController);
  

// 	console.log('tl : ', tl)

//   timeline.fromTo('.text', 5, { opacity: 0 }, { opacity: 1 } )


// // /second
// function splitScroll() {
// 	const controller = new ScrollMagic.Controller();

// 	new ScrollMagic.Scene({
// 		triggerElement: '.section--wrapper__about',
// 		duration: '200%',
// 		triggerHook: 0
// 	})
// 	.setPin('.section--wrapper__about')
// 	.addIndicators()
// 	.addTo(controller);
// }


// splitScroll();