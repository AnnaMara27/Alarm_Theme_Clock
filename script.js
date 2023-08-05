const toggleModeBtn = document.getElementById("modeToggle");

//Light or Dark Mode Switching
toggleModeBtn.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    toggleModeBtn.innerText = "Dark mode";
  } else {
    html.classList.add("dark");
    toggleModeBtn.innerText = "Light mode";
  }
});

// TIME DISPLAY
