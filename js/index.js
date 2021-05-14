// const ourTaskManager = new taskManager();
// ourTaskManager.addTask('Cook Dinner','Take out the trash','Nick','2020-09-20','TODO');
// console.log(ourTaskManager.tasks);
// var string = document.location + '';
// let tasksHtmlList = ['Go shopping','pay rent','do laundry','get groceries'];
// tasksHtmlList = tasksHtmlList.split(",");

// for (let i = 0; i < tasksHtmlList.length; i++) {
//   tasksHtmlList[i] = " " + tasksHtmlList[i] + "\n";
// }
// console.log(tasksHtmlList); 
// tasksHtmlList = tasksHtmlList.join("");
// console.log(tasksHtmlList);
// document.getElementById("ovde").innerHTML = customItems;
// const taskHtml = createTaskHtml('Cook Dinner','Take out the trash','Nick','2020-09-20','TODO');
// console.log(taskHtml);





const ourTaskManager = new taskManager();

ourTaskManager.addTask('Cook Dinner','Take out the trash','Nick','2020-09-20','TODO');

console.log(ourTaskManager.tasks);
const taskHtml = createTaskHtml('Cook Dinner','Take out the trash','Nick','2020-09-20','TODO');
console.log(taskHtml); 
console.log(taskHtml);

ourTaskManager.render();


