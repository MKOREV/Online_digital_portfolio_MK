// // Typewriting Effect
// function initTypewritingEffect() {
//   const words = ["Geospatial Analyst.", "Data Visualist.", "Metropolitan Innovator."];
//   let i = 0;
//   let timer;

//   function typingEffect() {
//     let word = words[i].split("");
//     var loopTyping = function () {
//       if (word.length > 0) {
//         document.getElementById("word").innerHTML += word.shift();
//       } else {
//         deletingEffect();
//         return false;
//       }
//       timer = setTimeout(loopTyping, 200);
//     };
//     loopTyping();
//   }

//   function deletingEffect() {
//     let word = words[i].split("");
//     var loopDeleting = function () {
//       if (word.length > 0) {
//         word.pop();
//         document.getElementById("word").innerHTML = word.join("");
//       } else {
//         if (words.length > i + 1) {
//           i++;
//         } else {
//           i = 0;
//         }
//         typingEffect();
//         return false;
//       }
//       timer = setTimeout(loopDeleting, 100);
//     };
//     loopDeleting();
//   }

//   typingEffect();
// }

// // Call the typewriting effect only if the element exists
// if (document.getElementById("word")) {
//   initTypewritingEffect();
// }

// // Project Filtering
// function initProjectFiltering() {
//   document.addEventListener("DOMContentLoaded", () => {
//     const buttons = document.querySelectorAll(".button");
//     const gridItems = document.querySelectorAll(".grid-item");

//     buttons.forEach((button) => {
//       button.addEventListener("click", () => {
//         // Remove 'active' class from all buttons
//         buttons.forEach((btn) => btn.classList.remove("active"));
//         // Add 'active' class to the clicked button
//         button.classList.add("active");

//         const filter = button.getAttribute("data-filter");

//         gridItems.forEach((item) => {
//           // If filter is "*" or the item has the matching class, show it
//           if (filter === "*" || item.classList.contains(filter.substring(1))) {
//             item.style.display = "block"; // Show matching items
//           } else {
//             item.style.display = "none"; // Hide non-matching items
//           }
//         });
//       });
//     });
//   });
// }

// // Always initialize project filtering
// initProjectFiltering();

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



