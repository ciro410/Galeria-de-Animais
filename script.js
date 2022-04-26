const header = document.querySelector('header')
const activeHeader= document.querySelector('.active')
const openMenu = document.querySelector('#open-menu')
const closeMenu = document.querySelector('#close-menu')
const imagensGaleria = document.querySelectorAll('.galeria-imagem')
const imagemModal = document.querySelector('.imagem-modal')
const modal = document.querySelector('.modal')
const modalLike = document.querySelector('.galeria-like-modal');
const galeriaLike = document.querySelectorAll('.galeria-like')
const modalClose = document.querySelector('.modal-close');
const nextBtn =document.querySelector('.next-btn');
const prevBtn =document.querySelector('.prev-btn');



let currentImage = 0;
let likedImages = [];



openMenu.addEventListener('click', () => {
    header.style.display = 'none'
    activeHeader.style.display = 'flex'

})

closeMenu.addEventListener('click', () =>{
    activeHeader.style.display = 'none'
    header.style.display = 'flex'
})

imagensGaleria.forEach((imagem,index) => {
    imagem.addEventListener('click',(event)=>{
        abrirModal(event.target.src, event.target.id)
        currentImage = index;
        atualizarModal(event.target.src)
        atualizarBtnsModal();
        atualizarLikeModal();
        
    })
})

modalClose.addEventListener('click', ()=>{
    modal.style.display = 'none';
    
})



imagemModal.addEventListener('clcik', (event) =>{
    event.stopPropagation
})


imagemModal.addEventListener('dblclick' ,() => {
    const itemLike = imagensGaleria[currentImage].previousElementSibling;
    console.log(itemLike)
    console.log (currentImage)
    console.log(likedImages)
    
    if (likedImages.includes(currentImage)) {
        likedImages = likedImages.filter(function (likedImage) {
            return likedImage !== currentImage;
        });
        modalLike.classList.add('hidden');
        itemLike.classList.add('hidden');
    } else {
        likedImages.push(currentImage);
        modalLike.classList.remove('hidden');
        itemLike.classList.remove('hidden');
    }

} )


nextBtn.addEventListener('click', (event) =>{
    event.stopPropagation();

    if( currentImage === imagensGaleria.length - 1){
        return;
        
    }
    currentImage++;
    atualizarModal(imagensGaleria[currentImage].src)
    atualizarBtnsModal();
    atualizarLikeModal();
})

prevBtn.addEventListener('click', (event) =>{
    event.stopPropagation();
    
    if(currentImage === 0){
        return;
    }
    currentImage --;
    atualizarModal(imagensGaleria[currentImage].src);
    atualizarBtnsModal();
    atualizarLikeModal();
})



function abrirModal(src, id){
    
    imagemModal.id = id;
    imagemModal.src = src;
    imagemModal.style.width = '555px';
    modal.style.display = 'flex';
    console.log(imagemModal.id)
}

function atualizarModal(novaImg){
    imagemModal.src = novaImg
}

    function atualizarBtnsModal(){
        if (currentImage === 0){
            prevBtn.classList.add('hidden')
        } else{
            prevBtn.classList.remove('hidden')
        }

        if(currentImage === imagensGaleria.length - 1){
            nextBtn.classList.add('hidden')
        }else{
            nextBtn.classList.remove('hidden')
        }
    }


    function atualizarLikeModal() {
        if (likedImages.includes(currentImage)) {
          modalLike.classList.remove('hidden');
        } else {
          modalLike.classList.add('hidden');
        }
      }
