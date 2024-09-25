const addTask = document.querySelector('.text')
const fialtask = document.querySelector('.task1')
const submit = document.querySelector('.submit')
const taskContainer = document.querySelector('.taskContainer')
const taskManager =`
<div class="taskManager">

    <input class="radiobtn" type="radio">  
    <div class="task1"></div>           
    <button class="btn">X</button>
                
</div>
`;


submit.addEventListener('click', () =>{

    if(addTask.value.trim() === " "){
        alert('pleace add a task')

    }else{
    taskContainer.insertAdjacentHTML('beforeend',taskManager)
    const newFinaltask = document.querySelector('.taskManager:last-child .task1')

    
       fialtask.textContent = addTask.textContent
    


    }
    




})
