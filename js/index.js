const ourTaskManager = new taskManager();

ourTaskManager.addTask('Cook Dinner','Take out the trash','Nick','2020-09-20','TODO');
const submit.addEventListner('click');
console.log(ourTaskManager.tasks);
const taskHtml = createTaskHtml('Cook Dinner','Take out the trash','Nick','2020-09-20','TODO');
console.log(taskHtml);

ourTaskManager.render();
//<button class="btn btn-primary " type="submit">Submit form</button