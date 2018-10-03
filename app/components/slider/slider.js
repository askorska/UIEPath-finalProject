import Zoom from 'components/zoom'
class Slider {

    constructor(containerSelector, startAt = 0) {
        this.parent = document.querySelector(containerSelector);
        this.container = this.parent.children[0];
        this.parent.classList.add('slider__parent');
        this.currentSlideIndex = startAt;

    }

    makeSlides() {
        this.slides = this.container.children;
        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].classList.add("slide");

        }

    }

    addZoom() {
        this.zoom = new Zoom(this.slides[this.currentSlideIndex], 75, this.parent);
        this.zoom.init();
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

        if (this.currentSlideIndex >= this.slides.length - 1) {
            this.currentSlideIndex = 0;
        }

        else if (this.currentSlideIndex < 0) {
            this.currentSlideIndex = this.slides.length - 2
        }
        this.setCurrSlide(this.currentSlideIndex);
        this.zoom.updateImg(this.slides[this.currentSlideIndex]);


    }

    makeControl(tagName, className, step) {
        const element = document.createElement(tagName);
        element.classList.add(className);
        this.parent.appendChild(element);
        element.addEventListener('click', () => {
            this.changeCurrSlide(step);
        });
    }

    init() {
        this.makeSlides();
        this.setCurrSlide(this.currentSlideIndex);
        this.makeControl("a", "slider__next", 1);
        this.makeControl("a", "slider__prev", -1);
        this.addZoom();
    }

}

export default Slider;
