// Typewriting effect bio landing page
const words = ["Geospatial Analyst.", "Data Visualist.", "Metropolitan Innovation."];
let i = 0;
let timer;

function typingEffect() {
  if (!document.getElementById('word')) return; // Ensure element exists
  let word = words[i].split("");
  var loopTyping = function () {
    if (word.length > 0) {
      document.getElementById('word').innerHTML += word.shift();
    } else {
      deletingEffect();
      return false;
    }
    timer = setTimeout(loopTyping, 200);
  };
  loopTyping();
}

function deletingEffect() {
  if (!document.getElementById('word')) return; // Ensure element exists
  let word = words[i].split("");
  var loopDeleting = function () {
    if (word.length > 0) {
      word.pop();
      document.getElementById('word').innerHTML = word.join("");
    } else {
      if (words.length > i + 1) {
        i++;
      } else {
        i = 0;
      }
      typingEffect();
      return false;
    }
    timer = setTimeout(loopDeleting, 100);
  };
  loopDeleting();
}

if (document.getElementById('word')) {
  typingEffect();
}

// Javascript for project filtering
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".button");
  const gridItems = document.querySelectorAll(".grid-item");

  if (buttons.length > 0 && gridItems.length > 0) {
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        console.log(`Button clicked: ${button.textContent}`);
        buttons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        gridItems.forEach((item) => {
          console.log(`Filter: ${filter}, Item classes: ${item.className}`);
          if (filter === "*" || item.classList.contains(filter.substring(1))) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  }
});

