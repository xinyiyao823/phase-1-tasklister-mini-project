

document.addEventListener("DOMContentLoaded", () => {
  //your code here
  
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const input = document.getElementById('new-task-description').value; // 'Feed Moose'
    const list = document.getElementById('tasks');
    createToDo(input)
  })

});

// 1.) Grab form with inputs for adding things to list


function createToDo(text) {
  let l = document.createElement('li') //creating list with bullets
  l.textContent = text; // setting content of list to the input of form
  let btn = document.createElement('button')
  btn.textContent = 'x'
  btn.addEventListener('click', handleDelete)
  document.querySelector('ul').appendChild(l); //append list to unordered list already on page
  l.appendChild(btn)
}

function handleDelete() {
  const input = document.getElementById('new-task-description').value; // 'Feed Moose'
  const list = document.getElementById('tasks');
  document.querySelector('li').remove()
}