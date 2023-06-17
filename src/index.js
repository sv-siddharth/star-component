let container = document.getElementById("star-container");
let star = document.querySelectorAll(".star");
let filled = 0;

container.addEventListener("click", function (e) {
  let currentClicked = e.target.dataset.index;

  for (let i = 0; i < filled; i++) {
    star[i].classList.remove("star-filled");
  }

  for (let i = 0; i < currentClicked; i++) {
    star[i].classList.add("star-filled");
  }

  document.getElementById(
    "count"
  ).innerText = `Rating Count: ${currentClicked}`;

  filled = currentClicked;
});

container.addEventListener("mouseover", function (e) {
  let currentClicked = e.target.dataset.index;

  for (let i = 0; i < 5; i++) {
    star[i].classList.remove("star-filled");
  }

  for (let i = 0; i < currentClicked; i++) {
    star[i].classList.add("star-filled");
  }
});

container.addEventListener("mouseleave", function (e) {
  for (let i = 0; i < 5; i++) {
    star[i].classList.remove("star-filled");
  }

  for (let i = 0; i < filled; i++) {
    star[i].classList.add("star-filled");
  }
});
