// Typewriting Effect
function initTypewritingEffect() {
  const words = ["Geospatial Analyst.", "Data Visualist.", "Metropolitan Innovator."];
  let i = 0;
  let timer;

  function typingEffect() {
    let word = words[i].split("");
    const loopTyping = function () {
      if (word.length > 0) {
        document.getElementById("word").innerHTML += word.shift();
      } else {
        deletingEffect();
        return false;
      }
      timer = setTimeout(loopTyping, 200);
    };
    loopTyping();
  }

  function deletingEffect() {
    let word = words[i].split("");
    const loopDeleting = function () {
      if (word.length > 0) {
        word.pop();
        document.getElementById("word").innerHTML = word.join("");
      } else {
        i = (i + 1) % words.length; // Loop back to the first word
        typingEffect();
        return false;
      }
      timer = setTimeout(loopDeleting, 100);
    };
    loopDeleting();
  }

  typingEffect();
}

// Initialize the typewriting effect only if the element exists
if (document.getElementById("word")) {
  initTypewritingEffect();
}

// Project Filtering
function initProjectFiltering() {
  document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".button");
    const gridItems = document.querySelectorAll(".grid-item");
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");
  
        // Remove 'active' class from all buttons
        buttons.forEach((btn) => btn.classList.remove("active"));
        // Add 'active' class to the clicked button
        button.classList.add("active");
  
        // Show or hide grid items based on the filter
        gridItems.forEach((item) => {
          if (filter === "*" || item.classList.contains(filter.substring(1))) {
            item.classList.add("show"); // Show matching items
          } else {
            item.classList.remove("show"); // Hide non-matching items
          }
        });
      });
    });
  
    // Trigger the "All" filter by default on page load
    document.querySelector('.button[data-filter="*"]').click();
  });
}

// Always initialize project filtering
initProjectFiltering();


// // Hamburger Menu
// document.addEventListener("DOMContentLoaded", () => {
//   const hamburger = document.querySelector(".hamburger");
//   const navLinksOverlay = document.querySelector(".nav-links-overlay");

//   // Ensure the hamburger and overlay exist before adding event listeners
//   if (hamburger && navLinksOverlay) {
//     // Toggle the navigation overlay
//     hamburger.addEventListener("click", () => {
//       navLinksOverlay.classList.toggle("active");
//       hamburger.classList.toggle("open");
//     });
//   }
// });


document.addEventListener("DOMContentLoaded", () => {
  /*==================== ACCORDION SKILLS ====================*/
  const skillsSection = document.querySelector(".skills"); // Select the skills section
  const skillsContent = document.getElementsByClassName("skills__content");
  const skillsHeader = document.querySelectorAll(".skills__header");

  // Function to toggle skills accordion
  function toggleSkills() {
    let itemClass = this.parentNode.className;

    // Close all other skill categories
    for (let i = 0; i < skillsContent.length; i++) {
      skillsContent[i].className = "skills__content skills__close";
      const progressBars = skillsContent[i].querySelectorAll(".skill__progress");
      progressBars.forEach((bar) => {
        bar.style.width = "0%"; // Reset progress bars when closed
      });
    }

    // Open the clicked category and animate progress bars
    if (itemClass === "skills__content skills__close") {
      this.parentNode.className = "skills__content skills__open";
      const progressBars = this.parentNode.querySelectorAll(".skill__progress");
      progressBars.forEach((bar) => {
        const percentage = bar.getAttribute("data-percentage");
        setTimeout(() => {
          bar.style.width = `${percentage}%`; // Animate to the percentage
        }, 100); // Add a slight delay for smoother animation
      });
    }
  }

  // Add click event listeners to all skill headers
  skillsHeader.forEach((el) => {
    el.addEventListener("click", toggleSkills);
  });

  // Intersection Observer to trigger animation when the skills section is visible
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the 'skills__open' class to the first skills content (GIS skills)
          const firstSkill = skillsContent[0];
          if (firstSkill) {
            firstSkill.className = "skills__content skills__open";
            const progressBars = firstSkill.querySelectorAll(".skill__progress");
            progressBars.forEach((bar) => {
              const percentage = bar.getAttribute("data-percentage");
              bar.style.width = `${percentage}%`; // Animate to the percentage
            });
          }
          observer.unobserve(entry.target); // Stop observing once the animation is triggered
        }
      });
    },
    { threshold: 0.5 } // Trigger when 50% of the section is visible
  );

  observer.observe(skillsSection); // Observe the skills section

  /*==================== QUALIFICATION TABS ====================*/
  const tabs = document.querySelectorAll("[data-target]");
  const tabContents = document.querySelectorAll("[data-content]");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = document.querySelector(tab.dataset.target);

      tabContents.forEach((tabContent) => {
        tabContent.classList.remove("qualification__active");
      });
      target.classList.add("qualification__active");

      tabs.forEach((tab) => {
        tab.classList.remove("qualification__active");
      });
      tab.classList.add("qualification__active");
    });
  });

  /*==================== QUALIFICATION SCROLL ANIMATION ====================*/
  const qualifications = document.querySelectorAll(".qualification__data");

  const qualificationObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active"); // Add the active class
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    },
    { threshold: 0.5 } // Trigger when 50% of the element is visible
  );

  qualifications.forEach((qualification) => {
    qualificationObserver.observe(qualification);
  });
});


