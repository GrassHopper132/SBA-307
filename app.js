document.addEventListener("DOMContentLoaded", () => {
    console.log("Page successfully loaded.");

    // 1. The Welcome Message
    // Checking for the 'multi-bg-page' ID which exists on your index.html
    if (document.getElementById("multi-bg-page")) {
        // Swapped the blocking alert for a clean console log
        console.log("Welcome to the Crime Drama Fan Page! Choose your era.");
    }

    // 2. Hero Button
    const heroBtn = document.getElementById("hero-btn");
    if (heroBtn) {
        heroBtn.addEventListener("click", () => {
            // For now, an alert is okay here, but consider a custom modal later
            alert("The streets are watching. Proceed to Power or The Wire using the navigation.");
        });
    }

    // 3. Hidden Fact Toggle
    const factBtn = document.getElementById("fact-btn");
    const hiddenFact = document.getElementById("hidden-fact");

    if (factBtn && hiddenFact) {
        factBtn.addEventListener("click", () => {
            if (hiddenFact.style.display === "none") {
                hiddenFact.style.display = "block";
                factBtn.textContent = "Hide Fun Fact";
            } else {
                hiddenFact.style.display = "none";
                factBtn.textContent = "Reveal Hidden Fact";
            }
        });
    }

    // 4. Theme Toggle (Sharpened)
    const themeBtn = document.getElementById("theme-btn");
    const mainBody = document.getElementById("main-body");

    if (themeBtn && mainBody) {
        themeBtn.addEventListener("click", () => {
            // Instead of injecting raw inline styles, we simply toggle the CSS class.
            // This keeps your code perfectly clean and respects the cascade.
            mainBody.classList.toggle("dark-theme");
             });
    }
});

