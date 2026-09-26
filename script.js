const texts = ["Full Stack Developer", 
  "Software Developer"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
  const currentText = texts[textIndex];
  const typedTextElement = document.getElementById("typed-text");

  if (!typedTextElement) return;

  if (!isDeleting) {
    typedTextElement.textContent = currentText.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      isDeleting = true;
      typingSpeed = 2000; // Pause at full word
    } else {
      typingSpeed = 100;
    }
  } else {
    typedTextElement.textContent = currentText.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      typingSpeed = 500; // Pause before typing next word
    } else {
      typingSpeed = 50; // Faster deletion speed
    }
  }

  setTimeout(typeEffect, typingSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
  
  // Dynamic Year in Footer
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});