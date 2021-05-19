var tasksArr = [
  {
    id: 1,
    name: 'Take out the trash',
    description: 'Take out the trash to the front of the house',
    assignedTo: 'Nick',
    dueDate: '2020-09-20',
    status: 'COMPLETED'
},
{
  id: 2,
  name: 'Cook Dinner',
  description: 'Prepare a healthy serving of pancakes for the family tonight',
  assignedTo: 'Nick',
  dueDate: '2020-09-20',
  status: 'TODO'
},
{
  id: 3,
  name: 'Take out the trash',
  description: 'Take out the trash to the front of the house',
  assignedTo: 'Nick',
  dueDate: '2020-09-20',
  status: 'IN PROGRESS'
},
{
  id: 4,
  name: 'Cook Dinner',
  description: 'Prepare a heal',
  assignedTo: 'Nick',
  dueDate: '2020-09-20',
  status: 'TODO'
}
];

const createTaskHtml = (name,description,assignedTo,dueDate,status) => {

  const date = new Date(dueDate);
        const formattedDate = new Date(`the due date is ${date}`);
  const doneButton = document.getElementsByClassName("btn btn-secondary");
  const submitButton = document.getElementsByClassName("btn btn-primary");
  return `<div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">

    
    const date = new Date(dueDate);
    const formattedDate = new Date(`the due date is ${date}`);
    
    return `<div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">

        <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${assignedTo}</p>
      <p class="card-text">${description}</p>     
      <div><span>${formattedDate}</span></div>
      <br>
      
      <br>
      <button class="btn btn-primary" type="submit">Delete</button>
      
    </div>
  </div>
  <div class="done-button">
  <button type="button" class="btn btn-primary btn-sm">Mark As Done</button>
  </div>
  `}

  
class taskManager {
    constructor(tasks) {
            this.tasks = []
            this.currentId = 0
            this.taskCard = document.getElementsById("taskCard");

            
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
    render() {
        const tasksHtmlList = [];

        //const date = new Date(dueDate);
        //const formattedDate = new Date(`the due date is ${date}`);
        const taskHtml = createTaskHtml('Cook Dinner','Take out the trash','Nick','2020-09-20','TODO');
        //console.log(formattedDate.toDateString());
        console.log(taskHtml);
        let html = '';
        this.tasks.forEach(function (task) {
           html += '<li>' + createTaskHtml('task.name', 'task.description', 'task.duedate', 'task.assignedTo', 'task.status') + '</li>';
        });
        html = '<ul>' + html + '</ul>';
        console.log(html);
        document.querySelector('#taskCard').innerHTML = html;

        
        
        // console.log(formattedDate.toDateString());
        
        let html = '';
        this.tasks.forEach(function (task) {
            html += '<li>' + createTaskHtml(task.name,task.description,task.assignedTo,task.dueDate,task.status) + '</li>';
        });
        html = '<ul>' + html + '</ul>';
        console.log(html);
        document.querySelector('.card-body').innerHTML = html;

    }

    save() {


      const tasksJason = JSON.stringify(tasksArr);
      console.log(tasksJason);
      localStorage.setItem('dueDate', '2020-09-20');
      localStorage.setItem('currentId', '0');
      console.log(localStorage);
    }

    load() {
      const tasksJason = localStorage.getItem('dueDate', '2020-09-20');
      this.tasks = JSON.parse(tasksJason);
      const currentId = localStorage.getItem('currentId','0');
      this.tasks = JSON.parse(currentId);
    }

  removeTask() {
    var span = document.createElement('span');
    span.innerHTML = '<button id="but' + inc +'" onclick="callJavascriptFunction()" />';
  }

    
  }
  
  console.log(taskManager);


  
  
// const taskHtml = createTaskHtml({name,description,assignedTo,formattedDate,status})
        // tasksHtmlList.push(taskHtml);
        

        // <div class="doneButton">
      // <button type="button" class="btn btn-secondary">Mark As Done</button>
      //     ${status}
      //   </button>
        
      //</div>



