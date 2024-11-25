let todoList = [
   {
    item : "Buy grocerry" , 
    dueDate : '11/23/2024'
  } ,

  {
    item : "Play", 
    dueDate : '11/23/2024'
  }

];


displayItems()



function addTodo(){
  let inputElement = document.querySelector('.input-box');
  let input_Date = document.querySelector('.date-box');

  let todoItem = inputElement.value;
  let tododate = input_Date.value;

  todoList.push({item : todoItem, dueDate : tododate});

  inputElement.value='';
  input_Date.value='';

  displayItems()
}


function displayItems(){
  let containerElement = document.querySelector('.todo-container');


  let newHtml = "";

  for(let i=0; i<todoList.length; i++){

    // let item = todoList[i].item;
    // let dueDate = todoList[i].dueDate;

    let {item, dueDate} = todoList[i];

    newHtml += `
    <span>${item}</span>
    <span>${dueDate}</span>
    <button onclick="
    
    todoList.splice(${i}, 1); 
    displayItems();

    " class="delButton">
    Delete</button>
    `;
  }
  containerElement.innerHTML = newHtml;
}