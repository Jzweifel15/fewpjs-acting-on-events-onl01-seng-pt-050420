// Your code here
let dodger = document.getElementById("dodger");

document.addEventListener("keydown", function(event) {
  if (event.key == "ArrowLeft")
  {
    moveDodgerLeft();
  }
});

function moveDodgerLeft()
{
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
  
  if (left > 0)
  {
    dodger.style.left = `${left - 1}px`;
  }
}
