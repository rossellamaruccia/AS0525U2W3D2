const nameInput = document.getElementById("name")
const form = document.getElementById("form")
const savedName = document.getElementById("savedName")

const saveButton = document.getElementById("save")
const deleteButton = document.getElementById("delete")

const KEY = 'memory'

saveName = function (e) {
  e.preventDefault()
  const name = nameInput.value
    localStorage.setItem(KEY, name)
    savedName.innerHTML = `<h3>You have inserted the name: ${name}</h3>`
  // uno salverà il valore in localStorage, uno rimuoverà il valore precedentemente salvato (se presente).
  return form.reset()
}

deleteName = function (e) {
    e.preventDefault()
    savedName.innerHTML = `<h3>You haven't inserted a name yet</h3>`
  return localStorage.removeItem(KEY)
}
