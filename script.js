document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll(".fade-section");

    function fadeInSection(target) {
        sections.forEach(section => {
            section.classList.remove("fade-in");
            section.style.display = "none";
        });

        const activeSection = document.querySelector(target);
        if (activeSection) {
            activeSection.style.display = "block";
            setTimeout(() => activeSection.classList.add("fade-in"), 10);
        }
    }

    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const target = link.getAttribute("href");
            fadeInSection(target);
        });
    });

    // Initial fade-in for the home section
    fadeInSection("#home");
});
