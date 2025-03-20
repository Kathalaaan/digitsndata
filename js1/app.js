window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // Button effect on hover
    const button = document.querySelector(".animated-button");
    const stars = document.querySelectorAll(".star");

    button.addEventListener("mouseenter", () => {
        gsap.to(button, {
            scale: 1.1,
            duration: 0.3,
            boxShadow: "0px 12px 20px rgba(255, 165, 0, 0.6)"
        });
    });

    button.addEventListener("mouseleave", () => {
        gsap.to(button, {
            scale: 1,
            duration: 0.3,
            boxShadow: "0px 8px #f7f759"
        });
    });

    // Click effect - star burst animation
    button.addEventListener("click", () => {
        stars.forEach((star) => {
            gsap.fromTo(
                star,
                { opacity: 1, scale: 0, x: 0, y: 0 },
                {
                    opacity: 0,
                    scale: 1.5,
                    x: (Math.random() - 0.5) * 200,
                    y: (Math.random() - 0.5) * 200,
                    duration: 1,
                    ease: "power2.out"
                }
            );
        });
    });

    // Parallax effect on stars
    gsap.to(".star", {
        y: "-=5vh",
        ease: "none",
        scrollTrigger: {
            trigger: ".main-article",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });
});
