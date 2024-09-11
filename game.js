const qube = document.querySelector(".qube");

let left = 1;
let ttop = 1;
const step = 10;
let isDragging = false;

document.body.addEventListener("keydown", (e) => {
  const bodyWidth = document.body.clientWidth;
  const bodyHeight = document.body.clientHeight;
  const qubeWidth = qube.offsetWidth;
  const qubeHeight = qube.offsetHeight;

  switch (e.keyCode) {
    case 37:
      left = Math.max(0, left - step);
      break;
    case 38:
      ttop = Math.max(0, ttop - step);
      break;
    case 39:
      left = Math.min(bodyWidth - qubeWidth, left + step);
      break;
    case 40:
      ttop = Math.min(bodyHeight - qubeHeight, ttop + step);
      break;
    default:
      break;
  }

  updateQubePosition();
});

qube.addEventListener("mousedown", () => {
  isDragging = true;
});

document.body.addEventListener("mousemove", (e) => {
  if (isDragging) {
    const bodyWidth = document.body.clientWidth;
    const bodyHeight = document.body.clientHeight;
    const qubeWidth = qube.offsetWidth;
    const qubeHeight = qube.offsetHeight;

    left = Math.max(0, Math.min(bodyWidth - qubeWidth, e.clientX - qubeWidth));
    ttop = Math.max(
      0,
      Math.min(bodyHeight - qubeHeight, e.clientY - qubeHeight)
    );

    updateQubePosition();
  }
});

function updateQubePosition() {
  const bodyWidth = document.body.clientWidth;
  const bodyHeight = document.body.clientHeight;
  const qubeWidth = qube.offsetWidth;
  const qubeHeight = qube.offsetHeight;

  if (
    left === 0 ||
    left === bodyWidth - qubeWidth ||
    ttop === 0 ||
    ttop === bodyHeight - qubeHeight
  ) {
    qube.style.backgroundColor = "red";
  } else {
    qube.style.backgroundColor = "blue";
  }

  qube.style.left = left + "px";
  qube.style.top = ttop + "px";
  const nove = document.createComment("h1");
}
