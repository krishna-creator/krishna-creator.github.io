function norefresh() {}
window.onscroll = function (e) {
  h = window.innerHeight;
  sh = window.scrollY;
  var nav = document.getElementById("a");
  if (sh > 200 && sh < h + 200) {
    nav.style.background = "white";
    nav.style.boxShadow = "0 0 5px #666";
  } else if (sh > h + 200 && sh < h * 2 + 200) {
    nav.style.background = "#54a0ff";
    nav.style.boxShadow = "0 0 5px #666";
  } else if (sh > h * 2 + 200 && sh < h * 3 + 200) {
    nav.style.background = "#fff";
    nav.style.boxShadow = "0 0 5px #666";
  } else if (sh > h * 3 + 200) {
    nav.style.background = "#95afc0";
    nav.style.boxShadow = "0 0 5px #666";
  } else {
    nav.style.background = "transparent";
    nav.style.boxShadow = "none";
  }
};
