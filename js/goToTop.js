// Wait for DOM content to load
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM loaded, creating Go to Top button");

    // Create the button element
    const goTopButton = document.createElement("button");
    goTopButton.id = "goTopBtn";
    goTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    goTopButton.setAttribute("aria-label", "Go to top");
    goTopButton.setAttribute("title", "Go to top");

    // Append to body (ensure it's outside the root div)
    document.body.appendChild(goTopButton);
    console.log("Button created:", goTopButton);

    // Add the show class initially to test visibility
    setTimeout(() => {
        goTopButton.classList.add("show");
        console.log("Added show class to button");
    }, 1000);

    // Show/hide button based on scroll position
    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 100) { // Lowered threshold to make button appear sooner
            goTopButton.classList.add("show");
        } else {
            goTopButton.classList.remove("show");
        }
    });

    // Smooth scroll to top when button is clicked
    goTopButton.addEventListener("click", function () {
        console.log("Button clicked, scrolling to top");
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
