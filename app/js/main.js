$(function () {

})


window.addEventListener('DOMContentLoaded', () => {


    const menu = document.querySelector(".menu");
    const mobile = document.querySelector(".nav-icon");
  
    if(mobile){
        mobile.addEventListener("click", function () {
            this.classList.toggle("nav-icon--active");
            menu.classList.toggle("nav--active");
          });
    }


    const modalBtn = document.querySelectorAll('.button-click');
    const modal = document.querySelector('.modal');
    const modalCloseBtn = document.querySelector('.modal__close');
    const test = calcScroll();


    if(modalBtn){
        modalBtn.forEach(btn =>{
            btn.addEventListener('click', ()=>{
                modal.classList.add('show');
                modal.classList.remove('hide');
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${test}px`;
            })
        });
    }
   

    if(modalCloseBtn){
        modalCloseBtn.addEventListener('click', ()=>{
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        });
    }
   

    if(modal){
        modal.addEventListener('click', (e)=>{
            if(e.target == modal){
                modal.classList.add('hide');
                modal.classList.remove('show');
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
            }
        });
    
    }
    
    document.addEventListener('keydown', (e)=>{
        if(e.code == 'Escape' && modal.classList.contains('show')){
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        }
    })

    // //УБИРАЕМ ДЁРГАНИЕ МОДАЛЬНОГО ОКНА ПРИ ПОЯВЛЕНИИ
    function calcScroll(){
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';
        
        document.body.append(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;
        
        div.remove();
        
        return scrollWidth;
        }

   
    //УБИРАЕМ ДЁРГАНИЕ МОДАЛЬНОГО ОКНА ПРИ ПОЯВЛЕНИИ

})