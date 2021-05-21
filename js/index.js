const ourTaskManager = new TaskManager();


// ourTaskManager.addTask('Cook Dinner','Take out the trash','Nick','2020-09-20','TODO');
// const a = addEventListener('submit', e => {

//     alert('Tasks are Welcome');
// });

ourTaskManager.addTask('Cook Dinner','Take out the trash','Nick','2020-09-20','TODO', );


// const taskHtml = createTaskHtml();

let tasksHtmlList = ['Go shopping','pay rent','do laundry','get groceries'];



ourTaskManager.render();


const newTaskNameInput1 = document.querySelector('#validationTooltip01');
// 
// 
// Array.prototype.slice.call(document.querySelectorAll('input[id^="value_"]'));
const validFormFieldInput1 = (data) =>{
    console.log(newTaskNameInput1);
 const firstName = newTaskNameInput1.value;
 if (firstName == null || firstName === '') 
 {alert('Please input name.')
     return false;}
 else {
     {return true;}
 }
}

const newTaskNameInput2 = document.querySelector('#validationTooltip02');
const validFormFieldInput2 = (data) => {
    console.log(newTaskNameInput2);
 const lastName = newTaskNameInput2.value;
 if (lastName == null || lastName === '') 
 {alert('Please input name.')
     return false;}
 else {
     {return true;}
 }
}

const newTaskNameInput5 = document.querySelector('#validationTooltip05');
const validFormFieldInput5 = (data) =>{
    console.log(newTaskNameInput5);
 const description = newTaskNameInput5.value;
 if (description == null || description === '') 
 {alert('Please input task.')
     return false;}
 else {
     {return true;}
 }
}

const newTaskNameInput4 = document.querySelector('#validationTooltip03');
const validFormFieldInput3 = (data) =>{
    console.log(newTaskNameInput4);
 const assignedTo = newTaskNameInput4.value;
 if (assignedTo == null || assignedTo === '') 
 {alert('Please input name.')
     return false;}
 else {
     {return true;}
 }
}

// const newTaskNameInput5 = document.querySelector('#validationTooltip05');
// const validFormFieldInput5 = (data) =>{
//     console.log(newTaskNameInput5);
//  const assignedTo = newTaskNameInput5.value;
//  if (assignedTo == null || assignedTo === '') 
//  {alert('Please input name.')
//      return false;}
//  else {
//      {return true;}
//  }
// }


//Cleo's code
let form = document.getElementById('taskForm');

let toDoContainer = document.getElementById('toDoContainer');

let inputField = document.getElementById('inputField');



form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(e);
    // var paragraph = document.createElement('p')
    // paragraph.classList.add('paragraph-styling');
    // paragraph.innerText = inputField.value;
    // toDoContainer.appendChild(paragraph);
    if (validFormFieldInput1()&& validFormFieldInput2() && validFormFieldInput3()){
        ourTaskManager.addTask(newTaskNameInput1.value,newTaskNameInput5.value,newTaskNameInput4.value)
    }
    console.log();
})
// inputField.value = " ";

    
        
    


const taskListEl = document.querySelector('#taskList')

taskListEl.addEventListener("click", function(e) {
if(e.target.classList.contains('doneButton')){
    const parentTask = e.target.parentElement.parentElement;
    console.log(parentTask.dataset.taskId);
    const task = newTaskManager.getTaskById(parentTask.dataset.taskId);
    console.log(task);
    }

// "event" here is the event parameter
    // let taskValue = this.taskCard.value;
    // taskListEl.addEventListener("click", function(e) {
    //     const parentTask = document.getElementById("taskList").parentNode.nodeName;
        // if (e.target !== element && !element.contains(e.target)) {
        //   element.parentNode.removeChild(element);
        // }
    //   });
    
      console.log(e);

// taskCard.addEventListener('click', (e) => { // "event" here is the event parameter
// taskCard.addEvent
});



ourTaskManager.save();
ourTaskManager.load();
