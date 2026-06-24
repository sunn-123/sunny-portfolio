// =====================
// Typing Animation
// =====================

const texts = [
  "MCA Student",
  "Web Developer",
  "Python Developer",
  "Machine Learning Enthusiast",
  "Software Developer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

  if (count === texts.length) {
    count = 0;
  }

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typing").textContent = letter;

  if (letter.length === currentText.length) {

    count++;

    setTimeout(type, 1500);

  } else {

    setTimeout(type, 100);

  }

})();


// =====================
// Scroll To Top Button
// =====================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }

});

topBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


// =====================
// Navbar Background
// =====================

window.addEventListener("scroll", () => {

  const header = document.querySelector("header");

  if (window.scrollY > 100) {

    header.style.background =
      "rgba(0,0,0,0.6)";

    header.style.backdropFilter =
      "blur(20px)";

  } else {

    header.style.background =
      "rgba(0,0,0,0.15)";

  }

});


// =====================
// Mobile Menu
// =====================

const menuBtn =
document.querySelector(".menu-btn");

const navLinks =
document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

  if (
    navLinks.style.display === "flex"
  ) {

    navLinks.style.display = "none";

  } else {

    navLinks.style.display = "flex";
    navLinks.style.flexDirection = "column";
    navLinks.style.position = "absolute";
    navLinks.style.top = "80px";
    navLinks.style.right = "20px";
    navLinks.style.padding = "20px";
    navLinks.style.borderRadius = "15px";
    navLinks.style.background =
      "rgba(0,0,0,0.9)";
  }

});


// =====================
// Active Navigation
// =====================

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop =
      section.offsetTop;

    if (
      pageYOffset >=
      sectionTop - 150
    ) {

      current =
        section.getAttribute("id");

    }

  });

  navItems.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href")
      .includes(current)
    ) {

      link.classList.add("active");

    }

  });

});


// =====================
// Scroll Reveal Animation
// =====================

const observer =
new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add(
"show"
);

}

});

},

{
threshold:0.2
}

);

const hiddenElements =
document.querySelectorAll(
".glass-card,.project-card,.skill-box"
);

hiddenElements.forEach(el => {

el.classList.add("hidden");

observer.observe(el);

});


// =====================
// Contact Form
// =====================

const form =
document.querySelector(".contact-form");

form.addEventListener(
"submit",
function(e){

e.preventDefault();

alert(
"Thank You! Your message has been sent."
);

form.reset();

}
);


// =====================
// Dynamic Year
// =====================

const footer =
document.querySelector("footer p");

const year =
new Date().getFullYear();

footer.innerHTML =
`© ${year} Sunny Kumar | Web Developer Portfolio`;


// =====================
// Smooth Navigation
// =====================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener(
"click",
function(e){

e.preventDefault();

document
.querySelector(
this.getAttribute("href")
)
.scrollIntoView({

behavior:"smooth"

});

});

});