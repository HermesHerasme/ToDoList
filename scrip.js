const addTask = document.querySelector('.text');
const submit = document.querySelector('.submit');
const taskContainer = document.querySelector('.taskContainer');
const deleteTask = document.querySelector('.btn')
//variable que almacena gran bloque de codigo para luego ser llamado al momento de una accion
const taskManagerTemplate = (taskValue) => `
<div class="taskManager">
    <input class="radiobtn" type="radio">  
    <div class="task1">${taskValue}</div>           
    <button class="btn">X</button>
</div>
<br>
`;
//variable que determina el maximo de tareas por crear
const MAX_TASKS = 11


submit.addEventListener('click', () => {
    //variable que almacena el contenido del input mediante el metodo value.trim
    let valorinput = addTask.value.trim(); 
    //condicion que regula la cantidad de caracteres que se puedan ingrsar
    if(valorinput.length > 21){
        alert('characters excess')
        addTask.value = '';
        return
    }
    //condicion que anula la creacion de tareas vacias
    if (valorinput === "") {
        alert('Please add a task');
    } else {

        const currentTasks = taskContainer.querySelectorAll('.taskManager').length;
        //evalua si la cantidad de tareas es mayor o igual que maximo establecido
        if (currentTasks >= MAX_TASKS) {
            alert('maximum tasks!');
            addTask.value = '';
            return;
        }

        // llama la funcion taskManagerTemplate agregando asi un nuevo bloque de codigo en el html
        taskContainer.insertAdjacentHTML('beforeend', taskManagerTemplate(valorinput));

        addTask.value = '';
        //eventlistener que al hacer click borra el bloque html anteriormente creado
        taskContainer.addEventListener('click', (event) => {
            if (event.target.classList.contains('btn')) {
                const taskManager = event.target.closest('.taskManager');
                //mensaje para confirmar la eliminacion
                if (confirm('Are you sure to delete?')) {
                    taskContainer.removeChild(taskManager);
                }
            }
        });

   
 





        
       
    }






});

