
function mudoutamanho(){
    if(window.innerWidth >= 900){
        itens.style.display = 'block'
    }
    }
function menushow() {
    let menumobile = document.querySelector('.nav-list-segunda') 
    if(menumobile.style.display =='block'){
        menumobile.style.display = 'none'
    }else{
        menumobile.style.display = 'block';
    }
}