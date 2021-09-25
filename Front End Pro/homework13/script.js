
class Accordion {

    constructor() {
    
    this.createEventListener();
    this.addClassDiv();

    }

    addClassDiv() {
        const divNoClass = document.querySelectorAll('div:not([class])');
        
    
        let i;
        for (i = 0; i < divNoClass.length; i++) {
            divNoClass[i].className ='accordionItem close'; 
        
       
    }}



    
    createEventListener() {
        
        const accItem = document.getElementsByClassName('accordionItem');
        const accHD = document.getElementsByClassName('title');
        
        

        let i;
        for (i = 0; i < accHD.length; i++) {
            accHD[i].addEventListener('click', toggleItem, false);
        }
        
        function toggleItem() {
            const itemClass = this.parentNode.className;
            let i;
            for (i = 0; i < accItem.length; i++) {
                accItem[i].className = 'accordionItem close';
            }
            if (itemClass == 'accordionItem close') {
                this.parentNode.className = 'accordionItem open';
            }
        }
        
    
    }
   
    
};

