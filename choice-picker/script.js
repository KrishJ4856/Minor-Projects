const textInput = document.querySelector("#textInput");
const choicesDiv = document.querySelector("#choices");
const isEnter = false;
textInput.focus();

textInput.addEventListener("keyup", createTags);

function createTags(e) {
  if (textInput.value == "") {
    if (isEnter == false) {
      clearChoiceDiv();
    }
  }
  if (e.key == "Enter") {
    textInput.value = "";
    generateRandomTags();
  } else {
    const tagArr = textInput.value.split(",");
    choicesDiv.innerHTML = "";
    tagArr.forEach((tag) => {
      const newTag = document.createElement("button");
      newTag.className = "btn";
      newTag.innerHTML = tag;
      choicesDiv.appendChild(newTag);
    });
  }
}

function clearChoiceDiv() {
  setTimeout(() => {
    choicesDiv.innerHTML = "";
  }, 700);
}

function generateRandomTags() {
  let changeColor = 0;
  console.log("generateRandomTags() called");
  const interval = setInterval(() => {
    const currentRandomTag =
      choicesDiv.children[
        Math.floor(Math.random() * choicesDiv.children.length)
      ];
    currentRandomTag.classList = "btn-black";
    if (changeColor == 30) {
      clearInterval(interval);
    }
    setTimeout(() => {
      if (changeColor == 30) {
        currentRandomTag.classList = "btn-black";
      } else {
        currentRandomTag.className = "btn";
        changeColor++;
      }
    }, 100);
  }, 200);
  //   for (let i = 0; i < 50; i++) {
  //     const currentRandomTag = choicesDiv.children[Math.floor(Math.random() * choicesDiv.children.length)];
  //     setTimeout(() => {
  //       if (i == 49) {
  //         currentRandomTag.style.backgroundColor = "black";
  //       } else {
  //         currentRandomTag.style.backgroundColor = "black";
  //         currentRandomTag.style.backgroundColor = "orange";
  //       }
  //     }, 1000);
  //   }
}
