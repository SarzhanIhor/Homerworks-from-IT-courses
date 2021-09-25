const button = document.querySelector('#button-addon1');
button.addEventListener('click', makeToDoList); 
const myul = document.querySelector('#MyUl');  


function makeToDoList(){
    
    const el = document.createElement('li'); 
    el.className = 'list-group-item';      
    el.innerHTML = document.getElementById("todoList").value + `<button class = "btnli">delete</button>`;
    document.getElementById('MyUl').appendChild(el);    
    document.getElementById('todoList').value = ''       
}


myul.addEventListener('click',e => {
	if (e.target.classList.contains('list-group-item')) {
    	
        e.target.style.background = 'green';
        
    }   
});     



myul.addEventListener('click',e => {
    if(e.target && e.target.nodeName == "BUTTON") {
          
      e.target.parentNode.remove();  
          
      }
     
     if (myul.children.length == 0)  {        
     
        document.getElementById('todoList').value = 'The list is empty'    
  }}); 



  