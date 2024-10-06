document.addEventListener("DOMContentLoaded", function () {
    const modeToggle = document.getElementById("mode-toggle");

    modeToggle.addEventListener("click", function () {
        document.body.classList.toggle("light");
        if (document.body.classList.contains("light")) {
            modeToggle.textContent = "Dark Mode";
        } else {
            modeToggle.textContent = "Light Mode";
        }
    });
});
