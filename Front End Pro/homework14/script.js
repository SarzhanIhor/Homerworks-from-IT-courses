


 getTodos = function() {

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    xhr.send();


 xhr.onload = function () {

    const jsonTodos = xhr.response;        

    const todos = JSON.parse(jsonTodos);
    
    const ul = document.createElement('ul');
        ul.id = "MyUl";
        ul.innerHTML;
        document.body.prepend(ul);

    todos.map((todo) => {        
        

        const el = document.createElement('li');                
        document.getElementById('MyUl').appendChild(el);
        el.innerHTML = todo.title;
        const status = todo.completed;       
        
        

            if( status === true) {
                
                el.style.color = 'green';
            } 

            if( status === false) {
                
                el.style.color = 'red';
            }  
        
        
    });
    
    
}
} 

getTodos();

