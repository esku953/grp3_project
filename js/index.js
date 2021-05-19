const ourTaskManager = new taskManager();


// ourTaskManager.addTask('Cook Dinner','Take out the trash','Nick','2020-09-20','TODO');
// const a = addEventListener('submit', e => {

//     alert('Tasks are Welcome');
// });

ourTaskManager.addTask('Cook Dinner','Take out the trash','Nick','2020-09-20','TODO', );


console.log(ourTaskManager.tasks);

const taskHtml = createTaskHtml();

let tasksHtmlList = ['Go shopping','pay rent','do laundry','get groceries'];


console.log(taskHtml); 
console.log(taskHtml);


ourTaskManager.render();


const newTaskNameInput = document.querySelector('#validationTooltip01');
// const newTaskNameInput = document.querySelector('#validationTooltip02');
// const newTaskNameInput = document.querySelector('#validationTooltip03');
// const newTaskNameInput = document.querySelector('#validationTooltip04');
// const newTaskNameInput = document.querySelector('#validationTooltip05');
const validFormFieldInput = (data) =>{
    
    console.log(newTaskNameInput);
 const name = newTaskNameInput.value;
 if (name == null || name === '') 
 
 {alert('Please input name.')
     return false;}
 else {
     {return true;}
 }


}
//Cleo's code
let form = document.getElementById('taskForm');

let toDoContainer = document.getElementById('toDoContainer');

let inputField = document.getElementById('inputField');



// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     console.log(e);
//     var paragraph = document.createElement('p')
//     paragraph.classList.add('paragraph-styling');
//     paragraph.innerText = inputField.value;
//     toDoContainer.appendChild(paragraph);
//     if (validFormFieldInput())
//     inputField.value = "";
// {
//     ourTaskManager.addTask({
//         name: newTaskNameInput.value,
//         // ...
//     })
// }
// console.log();
// })

// cleo's code
//<button class = "btn btn-primary" type ="submit">Submit Form</button>
taskListHtml.addEventListener('click', (event) => { // "event" here is the event parameter
    let taskValue = this.taskCard.value;
    
    });
taskCard.addEventListener('click', (event) => { // "event" here is the event parameter
taskCard.addEvent

});

taskListHtml.

ourTaskManager.save();
ourTaskManager.load();


















