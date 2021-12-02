const userInput = document.getElementById("userType");
const output = document.getElementById("tack");
const axios = require("axios");

//todo: random goal text generation
// const numWords = 30;
const getData = async () => {
  let req = await axios.get("http://localhost:3000/getText", {
    params: { amount: 15 }, //todo: un-hardcode
  });
  console.log(req.data.words);
  return { words: req.data.words };
};

let goalText = "";

function addText(words) {
  for (let i = 0; i < words.length; i++) {
    output.innerHTML += `<span class="unmarked">${words[i]}</span>`;
  }
}

window.addEventListener("load", async function () {
  let data = await getData();
  goalText = data.words.join(" ");
  addText(goalText);
});

// compare user input to target
// adjust span @ current position to reflect accuracy
function getDiff(target, input, index) {
  let spans = document.querySelectorAll("span"); //todo: see if i can do this by index instead of getting all
  if (index < target.length && input[index] === target[index]) {
    spans[index].className = "right";
    spans[index].innerText = input[index];
  } else if (index >= target.length || input[index] !== target[index]) {
    if (target[index] === " ") {
      spans[index].innerText = input[index]; //only reflect inaccuracy w/ color; letter would be too jolty
    } else {
      spans[index].innerText = target[index];
    }
    spans[index].className = "wrong";
  }
}

// return a span to gray to show deletion
function unmark(goal, index) {
  let spans = document.querySelectorAll("span");
  let lastMarked = spans[index - 1];
  lastMarked.className = "unmarked";
  lastMarked.innerText = goal[index - 1];
}

let position = 0;
function inputHandler(e) {
  if (e.target.value.length <= goalText.length) {
    switch (e.inputType) {
      case "insertText":
        getDiff(goalText, e.target.value, position);
        position++;
        break;

      case "deleteContentBackward":
        unmark(goalText, position);
        position = position > 0 ? position - 1 : 0;
        break;

      default:
        console.error("unexpected input in inputHandler");
        break;
    }
  } else {
    console.error("input reached maximum length");
    done = true;
  }
}

userInput.addEventListener("input", inputHandler);
