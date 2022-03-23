document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('create-task-form');


taskForm.addEventListener('submit', (e)=>{
  e.preventDefault();

  const newTask = document.getElementById('new-task-description');

  if (newTask.value !== ''){
    //variables
  const taskList = document.getElementById('tasks');
  const taskItem = document.createElement('li')
  const spanText = document.createElement('span')
  spanText.innerHTML = newTask.value;
  
  taskItem.appendChild(spanText)
  taskList.appendChild(taskItem);

//Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = 'X'
  deleteBtn.style.marginLeft = '10px';
  deleteBtn.style.paddingTop = '3px';
  deleteBtn.style.color = 'red';
  taskItem.appendChild(deleteBtn);
  deleteBtn.addEventListener('click', ()=>{
    taskItem.remove()
  })

//Edit button
  const editBtn = document.createElement('button');
  editBtn.innerHTML = 'Edit';
  editBtn.style.marginLeft = '2px';
  editBtn.style.paddingTop = '3px';
  editBtn.style.color = 'green';
  taskItem.appendChild(editBtn);
  editBtn.addEventListener('click', ()=>{
  spanText.innerHTML = newTask.value;
  taskForm.reset();
  })
  }
  taskForm.reset();
});
});



