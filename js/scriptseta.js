function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.addEventListener("DOMContentLoaded", function() {
  let botaoscroll = document.getElementById("botaoseta");

  window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      botaoscroll.style.display = "block";
    } else {
      botaoscroll.style.display = "none";
    }
  };
});