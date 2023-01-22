let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');
const taskCount = [];
let tskCounter = document.querySelector('.inside-span');


//add Btn disabled
input.addEventListener('keyup', () => {
    if(input.value.trim() != 0){
        addBtn.classList.add('active')
    }else{
        addBtn.classList.remove('active')
    }
})


//add new task to list
addBtn.addEventListener('click', () => {
    if(input.value.trim() != 0){
    let newItem = document.createElement('div')
    newItem.classList.add('item')
    newItem.innerHTML = `
    <div class="item">
                <p> ${input.value} </p>
                <div class="item-btn">
                    <i class="fa-sharp fa-solid fa-check-double"></i>
                    <i class="fa-solid fa-trash-can"></i>
                </div>
            </div>
    `
    tasks.appendChild(newItem)
    input.value = '';
    
    taskCount.push(newItem);
     
    }else{
        alert('Please enter a task')
    }
    tskCounter.innerHTML = taskCount.length;
})


//delete item from list
tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-trash-can')){
        e.target.parentElement.parentElement.remove();

        taskCount.pop(e.target.parentElement.parentElement)
        tskCounter.innerHTML = taskCount.length;
    }
})

//mark as complete
tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-check-double')){
        e.target.parentElement.parentElement.classList.toggle('completed')
    }
})