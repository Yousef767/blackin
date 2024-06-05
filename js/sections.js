window.addEventListener("scroll", function () {
  var targetDiv = document.querySelectorAll("header");
  targetDiv.forEach((e) => {
    var windowHeight = window.innerHeight;
    if (
      e.getBoundingClientRect().top < windowHeight &&
      e.getBoundingClientRect().bottom > 0
    ) {
      e.classList.add('reached');
    }
    else{
      e.classList.remove('reached');
    }
    
  });
});
