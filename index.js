// Your code here
function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    let left = parseInt(dodger.style.left);
    left -= 10; // Adjust the amount you want to move the DODGER to the left.
    dodger.style.left = `${left}px`;
  }
  
  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    let left = parseInt(dodger.style.left);
    left += 10; // Adjust the amount you want to move the DODGER to the right.
    dodger.style.left = `${left}px`;
  }