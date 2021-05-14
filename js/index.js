const ourTaskManager = new taskManager();
ourTaskManager.addTask('Cook Dinner','Take out the trash','Nick','2020-09-20','TODO');
console.log(ourTaskManager.tasks);
const taskHtml = createTaskHtml('Cook Dinner','Take out the trash','Nick','2020-09-20','TODO');
console.log(taskHtml);