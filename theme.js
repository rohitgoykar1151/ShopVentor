const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});