// Function to toggle menu
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");
    menuBtn.classList.toggle("responsive");
}

// Function to close menu when a link is clicked
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(n => n.addEventListener("click", () => {
    var menuBtn = document.getElementById("myNavMenu");
    menuBtn.classList.remove("responsive");
}));

/* ----- DARK MODE TOGGLE & STORAGE ----- */
const body = document.querySelector("body");
const toggleSwitch = document.getElementById("toggle-switch");

// Check for saved user preference on page load
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
}

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    
    // Save the preference
    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

 var typingEffect = new Typed(".typedText",{
    strings: ["Designer","Coder","Developer"],

    loop:true,
    typeSpeed:60,
    backSpeed:40,
    backDelay:1500,
 })

 const sr = ScrollReveal({
    origin:"top",
    distance: "80px",
    duration: 2000,
    reset: true,
 });

 sr.reveal(".featured-name", {delay : 100});
 sr.reveal(".text-info",{delay : 200});
 sr.reveal(".text-btn",{delay : 200});
 sr.reveal(".social-icons",{delay : 200});
 sr.reveal(".featured-image",{delay : 320});

 sr.reveal(".project-box", { interval: 200});

 sr.reveal(".top-header", {})


 const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
 });

 srLeft.reveal(".about-info", {delay:100});
 srLeft.reveal(".contact-info", {delay:100});

 const srRight = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
 });

  srRight.reveal(".skill", {delay:100});
 srRight.reveal(".skill-box", {delay:100});


 const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        // The 58 is usually to account for a fixed header height
        const sectionTop = current.offsetTop - 58; 
        const sectionId = current.getAttribute('id');
        
        // Target the specific link in the nav menu
        const navLink = document.querySelector('.nav__menu渲染 a[href*=' + sectionId + ']');
        if(navLink){
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.classList.add('active-link');
        } else {
            navLink.classList.remove('active-link');
        }
    }
    });
}

window.addEventListener('scroll', scrollActive);