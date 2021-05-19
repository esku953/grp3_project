const ourTaskManager = new taskManager();

ourTaskManager.addTask('Cook Dinner','Take out the trash','Nick','2020-09-20','TODO');
const submit.addEventListner('click');

console.log(ourTaskManager.tasks);
const taskHtml = createTaskHtml('Cook Dinner','Take out the trash','Nick','2020-09-20','TODO');
console.log(taskHtml);

ourTaskManager.render();

let buttonToDo = document.getElementById(buttonToDo);

let toDoContainer = document.getElementById(toDoContainer);

let inputField = document.getElementById(inputField);

buttonToDo.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild('paragraph');
})
//<button class="btn btn-primary " type="submit">Submit form</button