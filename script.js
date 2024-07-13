const hamburgerMenuIcon = document.querySelector(".hamburger-menu-icon");
const mobileMenuCloseIcon = document.querySelector(".mobile-menu-close-icon");
const mobileMenu = document.querySelector(".mobile-menu");

const creationsImages = document.querySelectorAll(".creations-img-gallery img");

// Mobile Menu
hamburgerMenuIcon.addEventListener("click", () => {
	mobileMenu.classList.add("show");
});

mobileMenuCloseIcon.addEventListener("click", () => {
	mobileMenu.classList.remove("show");
});

// Creations Resize Changes

const imagesNames = [
	"deep-earth",
	"night-arcade",
	"soccer-team",
	"grid",
	"from-above",
	"pocket-borealis",
	"curiosity",
	"fisheye",
];

const mobileSources = [];

imagesNames.forEach((imageName) => {
	mobileSources.push(`./images/mobile/image-${imageName}.jpg`);
});

const desktopSources = [];

imagesNames.forEach((imageName) => {
	desktopSources.push(`./images/desktop/image-${imageName}.jpg`);
});

if (window.innerWidth >= 1440) {
	creationsImages.forEach((image, index) => {
		image.src = desktopSources[index];
	});
} else {
	creationsImages.forEach((image, index) => {
		image.src = mobileSources[index];
	});
}

window.addEventListener("resize", () => {
	if (window.innerWidth >= 1440) {
		creationsImages.forEach((image, index) => {
			image.src = desktopSources[index];
		});
	} else {
		creationsImages.forEach((image, index) => {
			image.src = mobileSources[index];
		});
	}
});
