document.addEventListener("DOMContentLoaded", function () {
    const sun = document.getElementById("sun");
    sun.style.display = "none";
});
  
  const themeToggle = document.getElementById("themeToggle");
  const moon = document.getElementById("moon");
  const sun = document.getElementById("sun");
  
themeToggle.onclick = function () {
    document.body.classList.toggle("dark-theme");
  
    if (document.body.classList.contains("dark-theme")) {
       moon.style.display = "none";
       sun.style.display = "flex";
    } else {
       sun.style.display = "none";
       moon.style.display = "flex";
    }
};