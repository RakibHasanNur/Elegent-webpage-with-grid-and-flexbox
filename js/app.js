let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".hamburger-menu");
let links = document.querySelectorAll(".hamburger-menu li, .hamburger-menu button");
hamburger.addEventListener("click", function(){
	// menu show and not-show
	menu.classList.toggle('menu-show');
	// animating humbergurs span
	hamburger.classList.toggle('animate-hamburger');
	// animating button and links
	links.forEach((link,index,button)=>{
		if (link.style.animation) {
			link.style.animation = '';
		}
		else {
			link.style.animation = `navLinkFade .5s ease forwards ${index/5 + .5}s`;
		}
});
});

