// Function to initialize the go to top button
function initGoToTopButton() {
    console.log("Initializing Go to Top button");

    // Create the button element if it doesn't exist
    let goTopButton = document.getElementById("goTopBtn");
    
    if (!goTopButton) {
        goTopButton = document.createElement("button");
        goTopButton.id = "goTopBtn";
        goTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
        goTopButton.setAttribute("aria-label", "Go to top");
        goTopButton.setAttribute("title", "Go to top");
        
        // Append to body
        document.body.appendChild(goTopButton);
        console.log("Button created:", goTopButton);
    }

    // Show/hide button based on scroll position
    function handleScroll() {
        if (window.pageYOffset > 100) {
            goTopButton.classList.add("show");
        } else {
            goTopButton.classList.remove("show");
        }
    }
    
    // Handle initial scroll position
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    // Smooth scroll to top when button is clicked
    goTopButton.addEventListener("click", function() {
        console.log("Button clicked, scrolling to top");
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// Try multiple initialization approaches to ensure it works in all environments
document.addEventListener("DOMContentLoaded", initGoToTopButton);

// Backup initialization in case DOMContentLoaded doesn't fire as expected in Cloudflare
if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(initGoToTopButton, 1000);
}

// Additional backup for Cloudflare's Rocket Loader
window.addEventListener("load", initGoToTopButton);
