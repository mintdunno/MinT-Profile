/**
 * Simple and maintainable "Go to Top" button implementation
 */

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Create button element
    const goTopBtn = document.createElement("button");
    goTopBtn.id = "goTopBtn";
    goTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    goTopBtn.setAttribute("aria-label", "Go to top");
    goTopBtn.setAttribute("title", "Go to top");

    // Add to DOM
    document.body.appendChild(goTopBtn);

    // Handle scroll events
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            goTopBtn.classList.add("show");
        } else {
            goTopBtn.classList.remove("show");
        }
    });

    // Scroll to top on click
    goTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

// Fallback for Cloudflare - make sure script runs after window load
window.addEventListener("load", function () {
    // Check if button doesn't exist yet (might happen if DOMContentLoaded didn't fire)
    if (!document.getElementById("goTopBtn")) {
        const goTopBtn = document.createElement("button");
        goTopBtn.id = "goTopBtn";
        goTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        goTopBtn.setAttribute("aria-label", "Go to top");
        goTopBtn.setAttribute("title", "Go to top");

        document.body.appendChild(goTopBtn);

        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                goTopBtn.classList.add("show");
            } else {
                goTopBtn.classList.remove("show");
            }
        });

        goTopBtn.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });

        // Trigger initial check
        if (window.scrollY > 300) {
            goTopBtn.classList.add("show");
        }
    }
});
