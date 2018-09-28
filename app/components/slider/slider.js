class Slider {

    constructor(containerSelector, startAt = 0) {
        this.container = document.querySelector(containerSelector);
        this.container.classList.add('slider');
        this.currentSlideIndex = startAt;


    }

    makeSlides() {
        this.slides = this.container.children;
        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].classList.add("slide");

        }

    }

    setCurrSlide(index) {
        if (this.currentSlide) {
            this.currentSlide.classList.remove("slide--curr");
        }
        this.currentSlide = this.slides[index];
        this.currentSlide.classList.add("slide--curr");
    }

    changeCurrSlide(num) {
        this.currentSlideIndex += num;

        if (this.currentSlideIndex >= this.slides.length - 2) {
            this.currentSlideIndex = 0;
        }

        else if (this.currentSlideIndex < 0) {
            this.currentSlideIndex = this.slides.length - 3
        }
        this.setCurrSlide(this.currentSlideIndex);


    }

    makeControl(tagName, className, step) {
        const element = document.createElement(tagName);
        element.classList.add(className);
        this.container.appendChild(element);
        element.addEventListener('click', () => {
            this.changeCurrSlide(step);
        });
    }

    init() {
        this.makeSlides();
        this.setCurrSlide(this.currentSlideIndex);
        this.makeControl("a", "slider__next", 1);
        this.makeControl("a", "slider__prev", -1);
    }

}

export default Slider;
