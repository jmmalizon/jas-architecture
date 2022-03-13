gsap.registerPlugin();
const scrMagic = () => {
	const landing = document.querySelector('.landing');
	const video = landing.querySelector('video');
	const landCont = landing.querySelector('.container');
	const landItem = landCont.querySelector('.landing-cover') || querySelector('.landing-text');
	const design = document.querySelector('#design');
	const gallery = design.querySelectorAll('.gallery-img');
	//Scrollmagic
	const controller = new ScrollMagic.Controller();

	//Scenes
	let scene = new ScrollMagic.Scene({
		duration: 1200,
		triggerElement: landing,
		triggerHook: 0,
	})
		// .addIndicators()
		.setPin(landing)
		.addTo(controller);

	//Bg black animation
	const tm = new TimelineMax();

	tm.fromTo(landCont, 1, { opacity: 1 }, { opacity: 0 }, 0);

	let scene2 = new ScrollMagic.Scene({
		duration: 1000,
		triggerElement: landing,
		triggerHook: 0,
	})
		.setTween(tm)
		.addTo(controller);

	let accelamount = 0.5;
	let scrollpos = 0;
	let delay = 0;

	scene2.on('update', (e) => {
		scrollpos = e.scrollPos / 1000;
	});

	setInterval(() => {
		delay += (scrollpos - delay) * accelamount;
		// viddeo.currentTime = parseFloat(value).toPrecision(3);
		video.currentTime = delay;
	}, 60);

	const tm2 = new TimelineMax();
	tm2.fromTo(gallery, 1, { y: 200 }, { y: 0 });
	let scene3 = new ScrollMagic.Scene({
		duration: 500,
		triggerElement: design,
		triggerHook: 0.5,
	})
		.setTween(tm2)
		.addTo(controller);
};
// responsive navigation
const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
	// nav toggle

	console.log(navLinks);
	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');
		burger.classList.toggle('active');

		// animation navlinksf
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `Fade 0.5s ease forwards ${index / 7 + 0.5}s`;
			}
		});
	});
};
//sticky nav
const navStick = () => {
	const header = document.getElementsByTagName(header);
	let prevScrollpos = window.pageYOffset;
	window.addEventListener('scroll', () => {
		var currentScrollPos = window.pageYOffset;
		if (prevScrollpos > currentScrollPos) {
			header.style.top = '0';
		} else {
			header.style.top = '-50px';
		}
		prevScrollpos = currentScrollPos;
	});
};

const stickNav = () => {
	const headerTop = document.querySelector('#header');
	const design = document.querySelector('#design');

	let offset = window.pageYOffset;
	console.log(offset);
	window.addEventListener('scroll', () => {
		if (design === offset) {
			headerTop.style.position = ' fixed';
		} else {
		}
	});
};

const app = () => {
	stickNav();
	scrMagic();
	navSlide();
};

app();
