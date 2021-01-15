// set initial count
let count = 0;

// select value and buttons
const value = document.getElementById("value");
btns = document.querySelectorAll(".btn");

btns.forEach((btn) => btn.addEventListener("click", changeCount));

function changeCount(e) {
  const styles = e.currentTarget.classList;
  if (styles.contains("decrease")) {
    count--;
  } else if (styles.contains("increase")) {
    count++;
  } else {
    count = 0;
  }
  value.textContent = count;
  changeColor(count);
}

function changeColor(count) {
  if (count < 0) {
    value.style.color = "blue";
  } else if (count > 0) {
    value.style.color = "red";
  } else {
    value.style.color = "black";
  }
}
