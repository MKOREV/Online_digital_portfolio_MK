
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


// Hamburger Menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinksOverlay = document.querySelector(".nav-links-overlay");

  // Ensure the hamburger and overlay exist before adding event listeners
  if (hamburger && navLinksOverlay) {
    // Toggle the navigation overlay
    hamburger.addEventListener("click", () => {
      navLinksOverlay.classList.toggle("active");
      hamburger.classList.toggle("open");
    });
  }
});




/*==================== ACCORDION SKILLS ====================*/
document.addEventListener("DOMContentLoaded", () => {
  const skillsContent = document.getElementsByClassName('skills__content'),
        skillsHeader = document.querySelectorAll('.skills__header');

  function toggleSkills() {
    let itemClass = this.parentNode.className;

    // Close all other skill categories
    for (let i = 0; i < skillsContent.length; i++) {
      skillsContent[i].className = 'skills__content skills__close';
      const progressBars = skillsContent[i].querySelectorAll('.skill__progress');
      progressBars.forEach((bar) => {
        bar.style.width = '0%'; // Reset progress bars when closed
      });
    }

    // Open the clicked category and animate progress bars
    if (itemClass === 'skills__content skills__close') {
      this.parentNode.className = 'skills__content skills__open';
      const progressBars = this.parentNode.querySelectorAll('.skill__progress');
      progressBars.forEach((bar) => {
        const percentage = bar.getAttribute('data-percentage');
        setTimeout(() => {
          bar.style.width = `${percentage}%`; // Animate to the percentage
        }, 100); // Add a slight delay for smoother animation
      });
    }
  }

  // Add click event listeners to all skill headers
  skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
  });
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)
        
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')
        
        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

