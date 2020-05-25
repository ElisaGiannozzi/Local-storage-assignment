$('#task-form').submit(function(e) {
    const task = $('#task').val(); 

    let tasks; 

    if(localStorage.getItem('tasks') === null) {
        tasks = []; 
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks')); 
    }

    tasks.push(task); 

    localStorage.setItem('tasks', JSON.stringify(tasks)); 
})



// const tasks = JSON.parse(localStorage.getItem('tasks')); 

// // tasks.forEach(function(task){
// //     $('tasks-container').append('task'); 
// // }); 

// $('tasks-container').append('blablabla'); 
