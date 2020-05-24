// function storeData (){
//     let input = document.getElementById('task'); 
//     localStorage.setItem('myTask', input.value); 
//     let storedValue = localStorage.getItem('myTask'); 
// }

function storeData (){
    let input = document.getElementById('task'); 
    localStorage.setItem('myTask', input.value); 
    let storedValue = JSON.parse(localStorage.getItem('myTask'));
}

