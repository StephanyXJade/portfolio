window.addEventListener('DOMContentLoaded', () => {
    openImginfo ()
})

let openImginfo = () => {
    let metaBtns = document.querySelectorAll('.img-toggle')
    metaBtns.forEach(metaBtn => {
        metaBtn.addEventListener('click', () => {
            document.body.classList.toggle('active')
        })
    })
}





//CARRUSEL
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});



// NAV BURGUER


