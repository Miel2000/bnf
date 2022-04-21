document.addEventListener('mousemove', sectionParallax);



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
	}, "-=2.5")

	let headerSceneScroll = new ScrollMagic.Scene({
		triggerElement: "section--header",
		duration: "100%",
		triggerHook: 0.5
	})
	
	.setTween(headerTimeline)
	// .addIndicators({
	// 	name:"Header Scene",
	// 	colorTrigger: 'red',
	// 	indent: 100,
	// 	colorStart: 'red'
	// })
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
	// .addIndicators({
	// 	name:"Préambule",
	// 	colorTrigger: 'blue',
	// 	indent: 100,
	// 	colorStart: 'blue'
	// })
	.addTo(controller);


	const step2Timeline = gsap.timeline({})
	let step2Scene = new ScrollMagic.Scene({
		triggerElement: ".intro-step1--infos",
		duration: "245%",
		})

	.setClassToggle(".intro-step1--preambule-text", "fade-in")
	// .addIndicators({
	// 	name:"Display Préambule Text",
	// 	colorTrigger: 'maroon',
	// 	indent: 100,
	// 	colorStart: 'maroon'
	// })
	.addTo(controller);

}

// 3 Scene pin sur intro 

function pinSurPreambuleScene() {

	const pinSurPreambule = gsap.timeline({})
	
	
	
	let pinSurPreambuleScroll = new ScrollMagic.Scene({
			triggerElement: ".intro-step1--infos",
			duration: "260%",
			triggerHook: 0
			})
	
		.setPin('.intro-step1--infos')
		.setTween(pinSurPreambule)
		// .addIndicators({
		// 	name:"Pin sur Infos Top",
		// 	colorTrigger: 'black',
		// 	indent: 200,
		// 	colorStart: 'black'
		// })
		.addTo(controller);
		
}


function imagesFadingScene() {

	$('.image-to-fade').each(function(index) {

		const fixedIndex = index + 1
	
		const imagesFadeTimeline = gsap.timeline({})
	
		if ( fixedIndex % 2 == 0 ) {
	
			// Paire
		
			imagesFadeTimeline.from($(this), 3, {
				autoAlpha: 0,
				x:'100px',
				ease: Linear.easeNoNe
			})
			
		} else {
	
			// Impaire
			imagesFadeTimeline.from($(this), 3, {
				autoAlpha: 0,
				x:'-100px',
				ease: Linear.easeNoNe
			})
	
		}
	
	
	
		let imagesFadeScene = new ScrollMagic.Scene({
			triggerElement: this,
		
		})
		.reverse(false)
		.setTween(imagesFadeTimeline)
		.addTo(controller)
		
	
	})
	
}


function pinArticleTextScene() {

	const pinArticle = gsap.timeline({})

	let pinSurArticleTextscroll = new ScrollMagic.Scene({

			triggerElement: ".article--informations",
			duration: "120%",
			triggerHook: 0

		})
	
		.setPin('.article--informations')
		.setTween(pinArticle)
		// .addIndicators({
		// 	name:"Pin sur Article",
		// 	colorTrigger: 'red',
		// 	indent: 200,
		// 	colorStart: 'red'
		// })
		.addTo(controller);
		
}

function displayArticleImagesScene() {

	$('.figure-image').each(function(index) {

		const displayArticleImages = gsap.timeline({})
					
		displayArticleImages.from($(this), 3, {
			autoAlpha: 0,
			x:'100px',
			ease: Linear.easeNoNe
		})

		let displayArticleImagesscroll = new ScrollMagic.Scene({

			triggerElement: this,
			duration: "120%",
			triggerHook: 0.8

		})
		.reverse(false)
		.setTween(displayArticleImages)
		// .addIndicators({
		// 	name:"Pin sur IMAGE Article",
		// 	colorTrigger: 'green',
		// 	indent: 200,
		// 	colorStart: 'green'
		// })
		.addTo(controller);


		console.log(this);
	
	}
)}

function displayFullScreenImage() {

	const fullScreenImage = gsap.timeline({})

	let fullScreenImagesScroll = new ScrollMagic.Scene({

			triggerElement: ".full-screen",
			duration: "200%",
			triggerHook: 1

		})
		.setClassToggle(".full-screen", "fade-in")
		// .addIndicators({
		// 	name:"Full Screen Image",
		// 	colorTrigger: 'purple',
		// 	indent: 200,
		// 	colorStart: 'purple'
		// })
		.addTo(controller);
		
}




// Parallax

function imagesParallax(e) {

	document.querySelectorAll(".p-image").forEach(function(move){
		let moving_value = move.getAttribute("data-value");

		let x = (e.clientX * moving_value) / 250 ;
		let y = (e.clientY * moving_value)  / 250 ;

		move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";

	})

}

function figcaptionParallax(e) {

	document.querySelectorAll(".p-figcaption").forEach(function(move){
		let moving_value = move.getAttribute("data-value");

		let x = (e.clientX * moving_value) / 250 ;
		let y = (e.clientY * moving_value)  / 250 ;

		move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";

	})

}

function doubleFlecheParallax(e) {

	document.querySelectorAll(".doubleFleche").forEach(function(move){
		let moving_value = move.getAttribute("data-value");

		let x = (e.clientX * moving_value) / 250 ;
		let y = (e.clientY * moving_value)  / 250 ;

		move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";

	})

}

// Init Parallax callback
function sectionParallax(e) {
	imagesParallax(e);
	figcaptionParallax(e);
	doubleFlecheParallax(e);
}

// var Scrollbar = window.Scrollbar;

// let options = {
// 	'damping': 0.03,
// 	'alwaysShowTracks': true,
// }


// Scrollbar.init(document.querySelector('#scrollArea'), options);


function initAllScenes() {
	headerScene();
	preambuleScene();
	pinSurPreambuleScene();
	imagesFadingScene();
	pinArticleTextScene();
	displayArticleImagesScene();
	displayFullScreenImage();
	
}

// Init Scroll Scenes

initAllScenes();



