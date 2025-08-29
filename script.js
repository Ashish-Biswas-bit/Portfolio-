// script.js

//subtitle typing effect
const text = "I'm a Software Developer";
let i = 0;

function typeWriter() {
  if(i < text.length) {
    document.getElementById("subtitle").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
window.onload = typeWriter;


//avatar typing effect
const avatar = document.querySelector('.avatar img');

document.addEventListener('mousemove', (e) => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  // mouse distance from center
  const moveX = (e.clientX - centerX) / 10; // horizontal sensitivity
  const moveY = (e.clientY - centerY) / 10; // vertical sensitivity

  // combine translate + rotate for 3D effect
  avatar.style.transform = `
    translate(${moveX}px, ${moveY}px)
    rotateX(${-moveY}deg)
    rotateY(${moveX}deg)
  `;
});



// Highlight active link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
      section.classList.add("show"); // add animation when visible
    }
  });

  navLinks.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});

// Smooth scroll for sidebar links
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 20,
        behavior: 'smooth'
      });
    }
  });
});


// magic effect: spawn sparkles and add pulsing symbol
// Falling symbols animation on page load

window.addEventListener("load", () => {
  const symbols = ["⭐", "❄", "❤", "●", "✦", "✧","✨","💫","🌟","?","@","*","^","%","$","!","`","~","#"];

  for (let i = 0; i < 30; i++) {
    const span = document.createElement("span");
    span.classList.add("fall-symbol");
    span.innerText = symbols[Math.floor(Math.random() * symbols.length)];

    // random X position, size, duration
    span.style.left = Math.random() * 100 + "vw";
    span.style.fontSize = Math.random() * 20 + 15 + "px";
    span.style.animationDuration = (2 + Math.random() * 1.5) + "s";

    // random delay
    span.style.animationDelay = (Math.random() * 2) + "s";

    document.body.appendChild(span);

    // remove after animation ends
    setTimeout(() => {
      span.remove();
    }, 8000); // duration + delay cover
  }
});

