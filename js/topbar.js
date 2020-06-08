const topbar = document.querySelector(".topbar__container");
let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  if (topbar) {
    if (scroll_pos > 100) {
      if (topbar.style.background !== "white") {
        topbar.style.background = "white";
      }
    } else {
      if (topbar.style.background !== "transparent") {
        topbar.style.background = "transparent";
      }
    }
  }
}

window.addEventListener("scroll", function (e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});
