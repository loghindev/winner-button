const buttonsContainer = document.querySelector(".buttons-container");
const statusDisplay = document.getElementById("status");

function generateButtons() {
  clearOldButtons();
  setTimeout(() => {
    const myInput = document.getElementById("input");
    if (myInput.value === "" || typeof myInput.value === "string") {
      myInput.setAttribute("placeholder", "Please add a value");
      myInput.value = "";
      return;
    }
    for (let i = 0; i < Number(myInput.value); ++i) {
      createLoserButton(i + 1);
    }
    setLuckyWinnerButton(myInput.value);
  }, 300);
}

function clearOldButtons() {
  const buttons = document.querySelectorAll(".buttons-container > button");
  if (buttons.length) {
    buttons.forEach((btn) => btn.remove());
    statusDisplay.style.backgroundColor = "transparent";
    statusDisplay.textContent = "";
  }
}

function createLoserButton(index) {
  const loserBtn = document.createElement("button");
  loserBtn.id = "looser";
  loserBtn.textContent = `Button ${index}`;
  loserBtn.addEventListener("click", checkStatus);
  buttonsContainer.appendChild(loserBtn);
}

function setLuckyWinnerButton(length) {
  const random = Math.floor(Math.random() * length);
  const buttons = document.querySelectorAll("#looser");
  buttons[random].id = "winner";
}

function checkStatus(event) {
  if (event.target.id === "winner") {
    statusDisplay.textContent = `${event.target.textContent} is the winner 🥇`;
    statusDisplay.style.backgroundColor = "lightgreen";
  } else {
    statusDisplay.textContent = `${event.target.textContent} is looser 😢`;
    statusDisplay.style.backgroundColor = "hsl(0, 100.00%, 70.40%)";
  }
}
