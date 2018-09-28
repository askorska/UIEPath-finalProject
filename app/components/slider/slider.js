class Slider {

    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        this.container.classList.add('slider');
        this.slides;
        this.currentSlideIndex = 0;


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
        if (this.currentSlideIndex < this.slides.length - 2 && this.currentSlideIndex > 0) {
            this.setCurrSlide(this.currentSlideIndex)
        }
        else if (this.currentSlideIndex < 0) {
            this.currentSlideIndex = this.slides.length - 3;
            this.currentSlide.classList.remove("slide--curr");
            this.setCurrSlide(this.slides.length - 3);
        }
        else {
            this.currentSlideIndex = 0;
            this.currentSlide.classList.remove("slide--curr");
            this.setCurrSlide(0);
        }


    }

    makeControls() {
        const next = document.createElement('a');
        const prev = document.createElement('a');
        next.classList.add('slider__next');
        prev.classList.add('slider__prev');
        this.container.appendChild(next);
        this.container.appendChild(prev);
        next.addEventListener('click', () => {
            this.changeCurrSlide(1);
        });
        prev.addEventListener('click', () => {
            this.changeCurrSlide(-1);
        });


    }


    start() {
        this.makeSlides();
        this.setCurrSlide(0);
        this.makeControls();
    }

}

export default Slider;
