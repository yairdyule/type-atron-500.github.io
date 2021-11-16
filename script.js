const form =      document.getElementById('form')
const userInput = document.getElementById('userType')
const goal =      document.getElementById('goal')
const output =    document.getElementById('tack')

//todo: random goal text generation
const goalText = 'what so and if not then and upon person people pardon padron roam arstneio'

//initialize text on page
function addText(goal) {
  for (let i = 0; i < goalText.length; i++) {
    output.innerHTML += `<span class="unmarked">${goal[i]}</span>`
  }
}
addText(goalText)


// compare user input to target
// adjust span @ current position to reflect accuracy
function getDiff(target,input, index) {
  let spans = document.querySelectorAll('span') //todo: see if i can do this by index instead of getting all
  if (index >= target.length || input[index] !== target[index]) { //incorrect
    spans[index].className = 'wrong'
    spans[index].innerText = target[index] //only reflect inaccuracy w/ color; letter would be too jolty
  } else if (index < target.length && input[index] === target[index]){ //correct
    spans[index].className = 'right'
    spans[index].innerText = input[index] 
  }
}

// return a span to gray to show deletion
function unmark(goal, index) {
  let spans = document.querySelectorAll('span')
  let lastMarked = spans[index-1]
  lastMarked.className = 'unmarked'
  lastMarked.innerText = goal[index-1]
}

let position = 0
function inputHandler(e) {
  switch (e.inputType) {
    case 'insertText':
      getDiff(goalText, e.target.value, position) 
      position++
      break;

    case 'deleteContentBackward':
      unmark(goalText, position)
      position = (position > 0 ? position-1 : 0);
      break;

    default:
      console.error('unexpected input in inputHandler')
      break;
  }
}

userInput.addEventListener('input', inputHandler)
