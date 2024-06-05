let text1 = document.querySelector("#text1");
let text2 = document.querySelector("#text2");
let totalScroll = 0;
let check = 0;

if(window.innerWidth >= 976){
window.addEventListener("wheel", function (event) {
  check += event.deltaY;
  if (event.deltaY > 0) {
    if (totalScroll <= 800) {
      totalScroll += event.deltaY;
      let opacity = 1 - totalScroll / 500;
      let opacity2 = 0.5 - opacity;
      text1.style.transform = `translateY(${totalScroll - event.deltaY}px)`;
      text1.style.opacity = opacity < 0 ? 0 : opacity;
      text2.style.opacity = opacity2 < 0 ? 0 : opacity2;
    }
    if(totalScroll >= 800){
      document.body.style.overflowY='scroll';
    }
  } else if (event.deltaY < 0) {
    if (totalScroll >= 200) {
      totalScroll += event.deltaY;
      let opacity = 1 - totalScroll / 1000;
      let opacity2 = 0.5 - opacity;
      text1.style.opacity = opacity < 0 ? 0 : opacity;
      text2.style.opacity = opacity2 < 0 ? 0 : opacity2;
      text1.style.transform = `translateY(${totalScroll + event.deltaY}px)`;
    }
  }
  if (check <= 800) {
    document.body.style.overflowY='hidden';
  }
  
});

}