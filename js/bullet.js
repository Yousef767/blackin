let bullet = document.getElementById("bullet");
let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;
let speed = 0.5;

function moveBullet() {
  const dx = (targetX - currentX) * speed;
  const dy = (targetY - currentY) * speed;
  currentX += dx;
  currentY += dy;
  bullet.style.left = currentX + "px";
  bullet.style.top = currentY + "px";
  requestAnimationFrame(moveBullet);
}

document.addEventListener("mousemove", function (e) {
  targetX = e.clientX - 10;
  targetY = e.clientY - 10;
});

moveBullet();