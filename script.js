const hamburgerMenuIcon = document.querySelector(".hamburger-menu-icon");
const mobileMenuCloseIcon = document.querySelector(".mobile-menu-close-icon");
const mobileMenu = document.querySelector(".mobile-menu");

const heroImage = document.querySelector(".hero-img");

const creationsImages = document.querySelectorAll(".creations-img-gallery img");

// Mobile Menu
hamburgerMenuIcon.addEventListener("click", () => {
	mobileMenu.classList.add("show");
});

mobileMenuCloseIcon.addEventListener("click", () => {
	mobileMenu.classList.remove("show");
});

// Creations Resize Changes

mobileSources = [
	"./images/mobile/image-deep-earth.jpg",
	"./images/mobile/image-night-arcade.jpg",
	"./images/mobile/image-soccer-team.jpg",
	"./images/mobile/image-grid.jpg",
	"./images/mobile/image-from-above.jpg",
	"./images/mobile/image-pocket-borealis.jpg",
	"./images/mobile/image-curiosity.jpg",
	"./images/mobile/image-fisheye.jpg",
];

desktopSources = [
	"./images/desktop/image-deep-earth.jpg",
	"./images/desktop/image-night-arcade.jpg",
	"./images/desktop/image-soccer-team.jpg",
	"./images/desktop/image-grid.jpg",
	"./images/desktop/image-from-above.jpg",
	"./images/desktop/image-pocket-borealis.jpg",
	"./images/desktop/image-curiosity.jpg",
	"./images/desktop/image-fisheye.jpg",
];

if (window.innerWidth >= 1440) {
	creationsImages.forEach((image, index, array) => {
		array[index].src = desktopSources[index];
	});
} else {
	creationsImages.forEach((image, index, array) => {
		array[index].src = mobileSources[index];
	});
}

window.addEventListener("resize", () => {
	if (window.innerWidth >= 1440) {
		creationsImages.forEach((image, index, array) => {
			array[index].src = desktopSources[index];
		});
	} else {
		creationsImages.forEach((image, index, array) => {
			array[index].src = mobileSources[index];
		});
	}
});
