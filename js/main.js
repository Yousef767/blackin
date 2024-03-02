let links = document.querySelectorAll('.link')

links.forEach((e)=>{
  e.addEventListener('click',()=>{
    links.forEach((e)=>{e.classList.remove('active')})
    e.classList.add('active')
  })
})


let nav = document.querySelector('nav');
let menu = document.querySelector('.menu');

menu.addEventListener('click',()=>{
  nav.classList.toggle('activeMenu');
})

window.addEventListener('scroll',()=>{
  if(window.scrollY >= 100){
    nav.classList.add('color');
  }else{
    nav.classList.remove('color');
  }
})

let goTop = document.querySelector('.goTop');
goTop.addEventListener('click',()=>{
  window.scrollTo(0,0)
})

window.addEventListener('scroll',()=>{
  if(window.scrollY >= 400){
    goTop.style.display='block'
  }else{
    goTop.style.display='none'
  }
})

let video = document.querySelector('video');
if(video){
  video.play();
}


