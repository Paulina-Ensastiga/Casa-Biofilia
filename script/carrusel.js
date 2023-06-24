


document.addEventListener("DOMContentLoaded", function () {
    const carruselImg = document.querySelectorAll('.carrusel img');
    let currentIndex = 0;



    setInterval(function () {
        carruselImg[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % carruselImg.length;
        carruselImg[currentIndex].classList.add("active");
    }, 2000);
});
