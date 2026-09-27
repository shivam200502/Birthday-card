// Typing effect
const text = "You are one of the best Buddy I have ❤️ Stay blessed always!";
let i = 0;

function typeWriter() {
  const typeTextElement = document.getElementById("typeText");
  if (typeTextElement && i < text.length) {
    typeTextElement.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

// Show cake section with smooth scroll
function showCake() {
  const cakeSection = document.getElementById("cakeSection");
  if (cakeSection) {
    cakeSection.classList.remove("hidden");
    cakeSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// 🎈 Generate Left & Right Floating Balloons
function createBalloons() {
  const colors = ["red", "blue", "yellow", "green", "pink", "orange", "purple"];

  for (let j = 0; j < 10; j++) {
    let b = document.createElement("div");
    b.className = "balloon";

    // Position strictly on left or right sides
    let side = Math.random() < 0.5 ? "left" : "right";
    b.style[side] = Math.random() * 20 + "px";

    // Randomize color, speed, and launch delay for continuous flow
    b.style.background = colors[Math.floor(Math.random() * colors.length)];
    b.style.animationDuration = (5 + Math.random() * 5) + "s";
    b.style.animationDelay = (Math.random() * 4) + "s";

    document.body.appendChild(b);
  }
}

// Initialize scripts once DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  typeWriter();
  createBalloons();
});