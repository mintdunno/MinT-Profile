/**
 * Animation utility functions
 */

export const initCounterAnimations = (): void => {
  const counters = document.querySelectorAll(".animate-count");

  // Use IntersectionObserver to trigger animations when elements are in view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(
            counter.getAttribute("data-target") || "0",
            10
          );
          let current = 0;
          const duration = 2000; // 2 seconds for the animation
          const increment = target / (duration / 16); // Update roughly every 16ms for 60fps

          const updateCounter = (): void => {
            current += increment;
            counter.textContent = Math.floor(current).toString();

            if (current < target) {
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target.toString();
            }
          };

          updateCounter();
          observer.unobserve(counter); // Stop observing once animation starts
        }
      });
    },
    {
      threshold: 0.1, // Trigger when at least 10% of the element is visible
    }
  );

  // Observe all counter elements
  counters.forEach((counter) => {
    observer.observe(counter);
  });
};

export const initPageAnimations = (): void => {
  // Add staggered entrance animations to elements with the animate-entrance class
  const animatedElements = document.querySelectorAll(".animate-entrance");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add a slight delay for each element to create a staggered effect
          setTimeout(() => {
            entry.target.classList.add("animated");
          }, index * 150);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px", // Trigger slightly before elements enter the viewport
    }
  );

  animatedElements.forEach((element) => {
    observer.observe(element);
  });

  console.log("Page animations initialized");
};

/**
 * Implements premium staggered animations for page elements
 */
export const initPremiumAnimations = (): void => {
  // Stagger animation for elements with stagger-item class
  const staggerItems = document.querySelectorAll(".stagger-item");

  const staggerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Simplified animation without delays to reduce jerking
          entry.target.classList.add("stagger-fade-in");
          staggerObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
  );

  staggerItems.forEach((item) => staggerObserver.observe(item));

  // Reveal animations with direction
  const revealElements = document.querySelectorAll(
    ".reveal-bottom, .reveal-left, .reveal-right, .reveal-scale, .reveal-rotate"
  );

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-active");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -15% 0px" }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
};

// Simple function stubs to prevent errors from removed code
export const enhanceTransitionEffects = (): void => {
  // Empty function to avoid errors
};

export const enhancePremiumTransitions = (): void => {
  // Empty function to avoid errors
};

// Smooth scroll function to enhance page navigation
export const enableSmoothScroll = (): void => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (this: any, e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: (target as HTMLElement).offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
};
