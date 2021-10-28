console.log("script loaded");

//check shipping adress
const checkdButton = document.getElementById("dif-address");
const movable_div = document.getElementById("movable_div");

checkdButton.onclick = () => {
  let status = checkdButton.checked;
  if (status) {
    movable_div.style.height = `0%`;
  } else {
    movable_div.style.height = `100%`;
  }
};
