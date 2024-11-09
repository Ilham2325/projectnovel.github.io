const navMenu = document.getElementById("menu-nav");
const hamburgerMenu = document.getElementById("menu-open");
const closeMenu = document.getElementById("menu-close");
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

// Toggle navigation menu for mobile
hamburgerMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

// Function to toggle dark mode
function toggleDarkMode() {
  const isDarkMode = body.classList.toggle("dark-theme");
  localStorage.setItem("darkMode", isDarkMode); // Save the mode to localStorage
  updateDarkModeIcon(isDarkMode);
}

// Function to update the dark mode icon
function updateDarkModeIcon(isDarkMode) {
  const icon = darkModeToggle.querySelector("i");
  icon.classList.toggle("fa-sun", !isDarkMode);
  icon.classList.toggle("fa-moon", isDarkMode);
}

// Load the saved dark mode preference on page load
function loadDarkMode() {
  const savedMode = localStorage.getItem("darkMode") === "true";
  body.classList.toggle("dark-theme", savedMode);
  updateDarkModeIcon(savedMode);
}

// Event listener for dark mode toggle button
darkModeToggle.addEventListener("click", toggleDarkMode);

// Initial load of dark mode preference
loadDarkMode();
