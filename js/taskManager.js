const createTaskHtml = (name,description,assignedTo,dueDate,status) => `<div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${assignedTo}</p>
      <p class="card-text">${description}</p>     
      <div><span>${dueDate}</span></div>
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
  </div>`


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
        const tasksHtmlList = ['Go shopping','pay rent','do laundry','get groceries'];
        const date = new Date(dueDate);
        const formattedDate = new Date(`the due date is ${date}`);
        
        console.log(formattedDate.toDateString());
        
        const html = '';
        tasksHtmlList.forEach(function (tasksHtmlList) {
            html += '<li>' + tasksHtmlList + '</li>';
        });
        html = '<ul>' + html + '</ul>';
        console.log(html);
        document.querySelector('#reusable_component').innerHTML = html;

    }

    
  }
  
  console.log(taskManager);

  
  
// const taskHtml = createTaskHtml({name,description,assignedTo,formattedDate,status})
        // tasksHtmlList.push(taskHtml);
        