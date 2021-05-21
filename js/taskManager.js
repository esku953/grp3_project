// var tasksArr = [
//   {
//     id: 1,
//     name: 'Take out the trash',
//     description: 'Take out the trash to the front of the house',
//     assignedTo: 'Nick',
//     dueDate: '2020-09-20',
//     status: 'COMPLETED'
// },
// {
//   id: 2,
//   name: 'Cook Dinner',
//   description: 'Prepare a healthy serving of pancakes for the family tonight',
//   assignedTo: 'Nick',
//   dueDate: '2020-09-20',
//   status: 'TODO'
// },
// {
//   id: 3,
//   name: 'Take out the trash',
//   description: 'Take out the trash to the front of the house',
//   assignedTo: 'Nick',
//   dueDate: '2020-09-20',
//   status: 'IN PROGRESS'
// },
// {
//   id: 4,
//   name: 'Cook Dinner',
//   description: 'Prepare a heal',
//   assignedTo: 'Nick',
//   dueDate: '2020-09-20',
//   status: 'TODO'
// }
// ];

//const { oldlace } = require("color-name");

const createTaskHtml = (name,description,assignedTo,dueDate,status,id) => {
//<div class="deleteButton"><button type="button" class="btn btn-dark">Delete</button></div>
  const date = new Date(dueDate);
        const formattedDate = new Date(`the due date is ${date}`);
  // const doneButton = document.getElementsByClassName("btn btn-secondary");
  // const submitButton = document.getElementsByClassName("btn btn-primary");
  return `<div class="card text-white bg-secondary mb-3" style="max-width: 18rem;" data-task-id="${id}">
        <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${assignedTo}</p>
      <p class="card-text">${description}</p>     
      <div><span>${formattedDate}</span></div>
      <button type="button" class="btn btn-secondary doneButton">Mark As Done</button>
          ${status}
        
      </div>
      
      </div>
      <br>
      <br>
        `}

  //trying to delete tasks button
class TaskManager {
    constructor(tasks) {
            this.tasks = []
            this.currentId = 0
            this.taskCard = document.getElementById("taskCard");
            this.deleteTasks = document.createElement('deleteTasks');

// const deleteTasks(taskId) = [];
            }
      addTask (name,description,assignedTo,dueDate,status)  {
        this.currentId++
        const newTask = {
              id:this.currentId,
             name,
             description,
             assignedTo,
             dueDate,
             status

        }
        this.tasks.push(newTask)
    }
    getTaskById(taskId){
      let foundTask;
      this.tasks.forEach(function (task){
        if (task.id == taskId){
          foundTask = task;
        }
      })
      return foundTask
    }
    


    render() {
        const tasksHtmlList = [];

        //const date = new Date(dueDate);
        //const formattedDate = new Date(`the due date is ${date}`);
        // const taskHtml = createTaskHtml('Cook Dinner','Take out the trash','Nick','2020-09-20','TODO',1);
        //console.log(formattedDate.toDateString());
      
        let html = '';
        this.tasks.forEach(function (task) {
           html += '<li>' + createTaskHtml(task.name, task.description, task.duedate, task.assignedTo, task.status, task.id) + '</li>';
        });
        html = '<ul>' + html + '</ul>';
        console.log(html);
        document.querySelector('#taskList').innerHTML = html;

        
        
        // console.log(formattedDate.toDateString());
        
      

    }

    save() {
// get data from input box
// new_data = " " + document.getElementsById(input).value;
      const tasksJason = JSON.stringify(this.tasks);
      console.log(tasksJason);
      localStorage.setItem('tasks', tasksJason);
      localStorage.setItem('currentId', this.currentId);
      console.log(localStorage);
    }

    load() {
      const tasksJason = localStorage.getItem('tasks');
      if(tasksJason){
        this.tasks = JSON.parse(tasksJason);
      }
      
      const currentId = localStorage.getItem('currentId');
      if (currentId){
        this.currentId = Number(currentId);
      }
      
    }

  removeTask() {
    var span = document.createElement('span');
    span.innerHTML = '<button id="but' + inc +'" onclick="callJavascriptFunction()" />';
  }
  
  // deleteTasks(taskId) {
  //   const newTask =[''];
  //   while (task = newTask);
  //   if (task.id!== (taskId)) 
  //   .then{task.id.push}
  //    [newTask]
  //     taskId! === task.id 
    
  //   while{

  //   }
  // };
    
  // }
  
  // console.log(taskManager);


  

  // const taskHtml = createTaskHtml({name,description,assignedTo,formattedDate,status})
  //       tasksHtmlList.push(taskHtml);

  
// const taskHtml = createTaskHtml({name,description,assignedTo,formattedDate,status})
//         tasksHtmlList.push(taskHtml);

        

        

// cleo doing stuff
//       let addToDoButton = document.getElementById('addToDo');
// let toDoContainer = document.getElementById('toDoContainer');
// let inputField = document.getElementById('inputField');

// addToDoButton.addEventListener('click', function(){
//     var paragraph = document.createElement('p');
//     paragraph.classList.add('paragraph-styling');
//     paragraph.innerText = inputField.value;
//     toDoContainer.appendChild(paragraph);
//     inputField.value = "";
//     paragraph.addEventListener('click', function(){
//         
//     paragraph.addEventListener('dblclick', function(){
//         toDoContainer.removeChild(paragraph);
//     })
// })
// add local storage Cleo
// save() {
//   //data from input box
//   var new_data = document.getElementById('input').value;
//   // if there is nothing saved at the start then save an empty array
// if (localStorage.getItem('data') == null){
//   localStorage.setItem('data', '[]' );


// }

// // get old data and stores it to the new data
// const oldData = JSON.parse(localStorage.getItem('data'));
// oldData.push(newData);

// localStorage.setItem('data', JSON.stingify(oldData) );

// view () {
// //if there is data then continue
//   if(localStorage.getItem('data') !== null) {
// Document.getElementsById('output').innerHTML = JSON.parse(localStorage.getItem('data'));
    
//   }
// }
}