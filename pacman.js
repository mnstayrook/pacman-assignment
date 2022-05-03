var pos = 0;
let pageWidth = window.innerWidth;

const pacArray = [
  ['./images/PacMan1.png', './images/PacMan2.png'],
  ['./images/PacMan3.png', './images/PacMan4.png'],
];

// this variable defines what direction should PacMan go into:
// 0 = left to right
// 1 = right to left (reverse)
var direction = 0;

/* This variable helps determine which PacMan image should be displayed.
It flips between values 0 and 1 */

var focus = 0;

/* This function is called on mouse click. Every time it is called,
it updates the PacMan image, position and direction on the screen. */
function Run() {
  let img = document.getElementById('PacMan');
  let imgWidth = img.width;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
  img.src = pacArray[direction][focus];
  if (direction) {
    pos -= 20;
    img.style.left = pos + 'px';
  } else {
    pos += 20;
    img.style.left = pos + 'px';
  }
}

var runPacMan = setInterval(Run, 200)

console.log(runPacMan);

function checkPageBounds(direction, imgWidth, pos, pageWidth) {
    if (direction == 0, pos + imgWidth > pageWidth) {
        direction = 1;
      };
      if (direction == 1, pos < 1) {
        direction = 0;
    };
  
    return direction;
  }

// copy this into console to stop PacMan movement:   clearInterval(runPacMan)