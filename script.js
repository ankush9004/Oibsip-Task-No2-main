// script.js

// Scroll-to-top button functionality
const scrollToTopButton = document.createElement("button");
scrollToTopButton.className = "scroll-to-top";
scrollToTopButton.innerText = "⬆️ Top";
document.body.appendChild(scrollToTopButton);

// Show button when user scrolls down
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

// Scroll to the top when button is clicked
scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Interactive timeline functionality
const timelineItems = document.querySelectorAll(".timeline li");
timelineItems.forEach((item) => {
  item.addEventListener("click", () => {
    alert(`You clicked on: ${item.textContent}`);
  });
});

// Dynamic footer greeting
const footer = document.querySelector(".footer p");
const currentHour = new Date().getHours();
let greeting = "";

if (currentHour < 12) {
  greeting = "Good Morning!";
} else if (currentHour < 18) {
  greeting = "Good Afternoon!";
} else {
  greeting = "Good Evening!";
}

footer.innerText += ` | ${greeting}`;
