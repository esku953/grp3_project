const task1 = {
    id: 1,
    name: 'Take out the trash',
    description: 'Take out the trash to the front of the house',
    assignedTo: 'Nick',
    dueDate: '2020-09-20',
    status: 'COMPLETED'
};

const task2 = {
    id: 2,
    name: 'Cook Dinner',
    description: 'Prepare a healthy serving of pancakes for the family tonight',
    assignedTo: 'Nick',
    dueDate: '2020-09-20',
    status: 'TODO'
};
const task3 = {
    id: 3,
    name: 'Take out the trash',
    description: 'Take out the trash to the front of the house',
    assignedTo: 'Nick',
    dueDate: '2020-09-20',
    status: 'IN PROGRESS'
};

const task4 = {
    id: 4,
    name: 'Cook Dinner',
    description: 'Prepare a heal',
    assignedTo: 'Nick',
    dueDate: '2020-09-20',
    status: 'TODO'
};


const createTaskHtml = (name,description,assignedTo,dueDate,status) => {
    
    const date = new Date(dueDate);
    const formattedDate = new Date(`the due date is ${date}`);
    
    return `<div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${assignedTo}</p>
      <p class="card-text">${description}</p>     
      <div><span>${formattedDate}</span></div>
      <br>
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          ${status}
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
          <button class="dropdown-item" type="button">Done</button>
          <button class="dropdown-item" type="button">Pending</button>
          <button class="dropdown-item" type="button">In Progress</button>
        </div>
      </div>
      <br>
      <button class="btn btn-primary" type="submit">Delete</button>
      
    </div>
  </div>`}


class taskManager {
    constructor(tasks) {
            this.tasks = []
            this.currentId = 0
            
    }
      addTask ({name,description,assignedTo,dueDate,status})  {
        this.currentId++
        const newTask = {
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
        
        
        // console.log(formattedDate.toDateString());
        
        let html = '';
        this.tasks.forEach(function (task) {
            html += '<li>' + createTaskHtml(task.name,task.description,task.assignedTo,task.dueDate,task.status) + '</li>';
        });
        html = '<ul>' + html + '</ul>';
        console.log(html);
        document.querySelector('.card-body').innerHTML = html;

    }

    
  }
  
  console.log(taskManager);

  
  
// const taskHtml = createTaskHtml({name,description,assignedTo,formattedDate,status})
        // tasksHtmlList.push(taskHtml);
        