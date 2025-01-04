$(function () {
    $('.footer-center__item-title').on('click', function(){
        $(this).next().slideToggle(500); 
     });
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
    const scroll = calcScroll();


    if(modalBtn){
        modalBtn.forEach(btn =>{
            btn.addEventListener('click', ()=>{
                modal.classList.add('show');
                modal.classList.remove('hide');
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
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



        const footerTitle = document.querySelectorAll('.footer-center__item-title');
    
        footerTitle.forEach(item => {
            item.addEventListener('click', () => {
               item.classList.toggle('open');
              
            })
        })


        const btn = document.querySelector('.btnUp');

        btn.addEventListener('click', ()=>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth' 

            });
        });
        function up() {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 690){
            btn.classList.add('btnUp-visible');
            }else{
            btn.classList.remove('btnUp-visible');
            }
        })
        }
        up();





        var element = document.getElementById('input-mask');
        var element2 = document.getElementById('input-mask2');
        var maskOptions = {
            mask: '+{7}(000)000-00-00'
        };

        var mask = IMask(element, maskOptions);
        var mask2 = IMask(element2, maskOptions);


})//