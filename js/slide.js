function Slider() {
    this.slideIndex = 1;
    this.scrollSlide = function (n) {
        this.showSlides(this.slideIndex += n);
    }
    this.currentSlide = function (n) {
        this.showSlides (this.slideIndex = n)
    }
    this.showSlides = function (n) {
        let i;
        let slides = document.getElementsByClassName("slideshow-container__pic");
        let dots = document.getElementsByClassName("dot");
        if (n < 1) {
            this.slideIndex = slides.length;
        }
        if (n > slides.length) {
           this.slideIndex = 1;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[this.slideIndex - 1].style.display = "block";
    }
}
slider = new Slider();
slider.showSlides(1);