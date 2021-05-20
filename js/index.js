const ourTaskManager = new TaskManager();


// ourTaskManager.addTask('Cook Dinner','Take out the trash','Nick','2020-09-20','TODO');
// const a = addEventListener('submit', e => {

//     alert('Tasks are Welcome');
// });

ourTaskManager.addTask('Cook Dinner','Take out the trash','Nick','2020-09-20','TODO', );


console.log(ourTaskManager.tasks);

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

const newTaskNameInput3 = document.querySelector('#validationTooltip03');
const validFormFieldInput3 = (data) =>{
    console.log(newTaskNameInput3);
 const assignedTo = newTaskNameInput3.value;
 if (assignedTo == null || assignedTo === '') 
 {alert('Please input name.')
     return false;}
 else {
     {return true;}
 }
}

const newTaskNameInput4 = document.querySelector('#validationTooltip04');
const validFormFieldInput4 = (data) =>{
    console.log(newTaskNameInput4);
 const assignedTo = newTaskNameInput4.value;
 if (assignedTo == null || assignedTo === '') 
 {alert('Please input name.')
     return false;}
 else {
     {return true;}
 }
}

const newTaskNameInput5 = document.querySelector('#validationTooltip05');
const validFormFieldInput5 = (data) =>{
    console.log(newTaskNameInput5);
 const assignedTo = newTaskNameInput5.value;
 if (assignedTo == null || assignedTo === '') 
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



form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(e);
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    if (validFormFieldInput1()&& validFormFieldInput2() && validFormFieldInput3()){
        ourTaskManager.addTask({
            name: newTaskNameInput.value,
    })
}

    inputField.value = "";

    
        
    

console.log();
})
const taskListEl = document.querySelector('#taskList')

taskListEl.addEventListener('click', (e) => { // "event" here is the event parameter
    // let taskValue = this.taskCard.value;
    console.log(e);
    });

    // $('#list').on('click', '.complete-button', function(event) {
    //     var item = $(event.target).parent()
    //     var isItemCompleted = item.hasClass('completed')
    //     var itemId = item.attr('data-id')
    //     var updateRequest = $.ajax({
    //       type: 'PUT',
    //       url: "https://listalous.herokuapp.com/lists/YOUR-LIST-NAME-HERE/items/" + itemId,
    //       data: { completed: !isItemCompleted }
    //     })
    //     updateRequest.done(function(itemData) {
    //       if (itemData.completed) {
    //         item.addClass('completed')
    //       } else {
    //         item.removeClass('completed')
    //       }
    //     })
    //   })

taskCard.addEventListener('click', (event) => { // "event" here is the event parameter
taskCard.addEvent

});



ourTaskManager.save();
ourTaskManager.load();




// cleo's code
//<button class = "btn btn-primary" type ="submit">Submit Form</button>
















