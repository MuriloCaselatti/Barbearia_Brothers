AOS.init();

//Botao de agendamento
document.addEventListener("DOMContentLoaded", function () {
  const agendarBtn = document.getElementById("agendarBtn");
  const opcoesAgendamento = document.getElementById("opcoesAgendamento");

  agendarBtn.addEventListener("click", function () {
      if (opcoesAgendamento.style.display === "none" || opcoesAgendamento.style.display === "") {
          opcoesAgendamento.style.display = "block";
      } else {
          opcoesAgendamento.style.display = "none";
      }
  });
});





//Carrossel
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    gragCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0:{
            slidesPerView:1,
        },
        520:{
            slidesPerView: 2,
        },
        950:{
            slidesPerView: 3,
        },
    },

  });