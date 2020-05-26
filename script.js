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



const tasks = JSON.parse(localStorage.getItem('tasks')); 

$(function() {
    let list = $('<ul></ul>'); 
    $.each(tasks, function(key, value) {
        list.append(`<li>${value}</li>`);
    });

    $('.tasks-container').append(list);
}); 

