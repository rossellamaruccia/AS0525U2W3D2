const nameInput = document.getElementById("name")
const form = document.getElementById("form")
const savedName = document.getElementById("savedName")

const saveButton = document.getElementById("save")
const deleteButton = document.getElementById("delete")

const KEY = "memory"

saveName = function (e) {
  e.preventDefault()
  const name = nameInput.value
  localStorage.setItem(KEY, name)
  savedName.innerHTML = `<h3>You have inserted the name: ${name}</h3>`

  return form.reset()
}

deleteName = function (e) {
  e.preventDefault()
  savedName.innerHTML = `<h3>You haven't inserted a name yet</h3>`
  return localStorage.removeItem(KEY)
}

// Crea un contatore che tenga conto del tempo che passa, utilizzando sessionStorage.
// Aggiornando la pagina il valore prosegue, chiudendo la pagina - ovviamente - ricomincia.
// Il valore del contatore deve aggiornarsi ad ogni secondo.
const display = document.getElementById("display")
let seconds = 0
const TIME = "memory"
let timer 

let startTimer = function (e) {
  e.preventDefault()
  timer = setInterval(function () {
    display.innerHTML = seconds++
    let value = seconds
    sessionStorage.setItem(TIME, value)
  }, 1000)
}

let pauseTimer = function (e) {
  e.preventDefault()
  let timeValue = sessionStorage.getItem(TIME)
  display.innerHTML = timeValue
}

let resetTimer = (e) => {
  e.preventDefault()
  display.innerHTML = 0
  sessionStorage.clear()
  clearInterval(timer)
}
