let controller = new ScrollMagic.Controller();


// // Init Timelines

function headerScene() {

	const headerTimeline = gsap.timeline({})

	.to('.header--infos__titre', 3, {
		opacity: 0,
		y:'100px'
	})
	
	.to('.header--infos__en-images', 1.5, {
		opacity: 0,
		x:'-100px'
	},  "-=2")
	
	.to('.header--image__select', 3, {
		opacity: 0,
		y:'-50px'
	}, "-=1.5")
	
	.to('.header--infos__fleche', 3, {
		opacity: 0,
		y:'50px'
	}, "-=4.5")

	let headerScene = new ScrollMagic.Scene({
		triggerElement: "section--header",
		duration: "100%",
		triggerHook: 0.5
	})
	
	.setTween(headerTimeline)
	.addIndicators({
		name:"Header Scene",
		colorTrigger: 'red',
		indent: 100,
		colorStart: 'red'
	})
	.addTo(controller);


}



function preambuleScene() {
	const step1Timeline = gsap.timeline({})
	
	.fromTo('.intro-step1--infos', 4, {
		opacity: 0,
		y:'-100px'
	}, 
	{
		opacity: 1,
		y:'0px'
	})
	.fromTo('.Rectangle-Copy-3', 3, {
		opacity: 0,
		y:'20px'
	}, 
	{
		opacity: 1,
		y:'0px'
	})

let step1Scene = new ScrollMagic.Scene({
		triggerElement: ".section--intro__infos",
		duration: "80%",
		triggerHook: 0.9
		})

	.setTween(step1Timeline)
	.addIndicators({
		name:"Préambule",
		colorTrigger: 'blue',
		indent: 100,
		colorStart: 'blue'
	})
	.addTo(controller);


	const step2Timeline = gsap.timeline({})
	let step2Scene = new ScrollMagic.Scene({
		triggerElement: ".intro-step1--preambule",
		duration: "80%",
		})

	.setClassToggle(".intro-step1--preambule-text", "fade-in")
	.addIndicators({
		name:"Display Préambule Text",
		colorTrigger: 'maroon',
		indent: 100,
		colorStart: 'maroon'
	})
	.addTo(controller);

}

// 3 Scene pin sur intro 

function pinSurPreambule() {

	const pinSurPreambule = gsap.timeline({})
	
	
	
	let pinSurPreambuleScroll = new ScrollMagic.Scene({
			triggerElement: ".intro-step1--infos",
			duration: "300%",
			triggerHook: 0
			})
	
		.setPin('.intro-step1--infos')
		.setTween(pinSurPreambule)
		.addIndicators({
			name:"Pin sur preambule",
			colorTrigger: 'black',
			indent: 100,
			colorStart: 'black'
		})
		.addTo(controller);
		
}




// Init
headerScene();
preambuleScene();
pinSurPreambule();



// const pinSurImages = gsap.timeline({})


// let pinSurImagesScroll = new ScrollMagic.Scene({
// 	triggerElement: ".intro-step2-images",
// 	duration: "100%",
// 	triggerHook: 0.5
// 	})

// .addIndicators({
// 	name:"Scene Images",
// 	colorTrigger: 'purple',
// 	indent: 100,
// 	colorStart: 'purple'
// })
// .addTo(controller);





// Init Scenes
	// HeaderScene

	// Step 1 Scene 

