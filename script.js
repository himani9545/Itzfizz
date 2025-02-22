// Letter by Letter Animation
gsap.to(".hero-section h1 span", {
    opacity: 1,
    y: 0,
    stagger: 0.05,
    duration: 0.8,
    ease: "power3.out"
});

// Text Glow Effect
gsap.to(".hero-section h1", {
    opacity: 1,
    duration: 1.5,
    ease: "power3.out",
    onComplete: function() {
        document.getElementById("animatedText").classList.add("neon-glow");
    }
});

// Hover Glow Effect
document.querySelector(".hero-section h1").addEventListener("mouseover", function() {
    gsap.to(".hero-section h1", {
        scale: 1.05,
        duration: 0.3,
        ease: "power1.inOut"
    });
});

document.querySelector(".hero-section h1").addEventListener("mouseout", function() {
    gsap.to(".hero-section h1", {
        scale: 1,
        duration: 0.3,
        ease: "power1.inOut"
    });
});

// Image Animation
gsap.from(".images-container img", { 
    duration: 1.5, 
    opacity: 0, 
    scale: 0.8, 
    stagger: 0.2, 
    ease: "power3.out" 
});

// Hover Effect on Images
document.querySelectorAll('.images-container img').forEach(img => {
    img.addEventListener('mouseover', () => {
        gsap.to(img, { opacity: 1, scale: 1.05 });
        gsap.to('.images-container img:not(:hover)', { opacity: 0.2, scale: 0.95 });
    });
    img.addEventListener('mouseout', () => {
        gsap.to('.images-container img', { opacity: 0.5, scale: 1 });
    });
});
