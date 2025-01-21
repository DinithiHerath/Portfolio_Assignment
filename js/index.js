const modal = document.querySelectorAll('.services__modal'),
      modalButton = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close')

let activeModal = (modalClick) => {
    modal[modalClick].classList.add('active-modal')
}

modalButton.forEach((modalButton, i) => {
    modalButton.addEventListener('click', () => {
        activeModal(i)
    })
})

modalClose.forEach((modalClose) =>{
    modalClose.addEventListener('click', () => {
        modal.forEach((modalRemove) => {
            modalRemove.classList.remove('active-modal')
        })
    })
})

const swiperTestimonial = new Swiper('.testimonial__swiper', {
   loop: true,
   spaceBetween: 32,
   grabCursor: true,

   pagination: {
     el: '.swiper-pagination',
     dynamicBullets: true,
     clickable: true,
   },
});

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)




var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}


document.addEventListener("DOMContentLoaded", function() {
  const homeContainer = document.querySelector('.home__container');
  homeContainer.classList.add('show');

  const webDeveloperSpan = document.querySelector('.home__profession span');
  webDeveloperSpan.classList.add('show');

  function stopAnimation() {
    const designerText = document.querySelector('.services__title::after');
    designerText.style.animation = 'none'; 
    setTimeout(function() {
      designerText.style.animation = ''; 
    }, 100);
  }

  window.addEventListener('resize', stopAnimation);
});


