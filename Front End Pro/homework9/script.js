const button = document.querySelector('#button-addon1');
button.addEventListener('click', makeToDoList); 

function makeToDoList(){
    
    const el = document.createElement('li'); 
    el.className = 'list-group-item';   
    el.innerHTML = document.getElementById("todoList").value;
    document.getElementById('MyUl').appendChild(el);
    document.getElementById('todoList').value = ''
}


