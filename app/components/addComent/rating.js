class Rating {
    constructor(element) {
        this.rating = document.querySelector(element);
        this.stars = this.rating.children;

    }

    makeClickable() {
        this.rating.classList.add('is-clickable');
        for (let i = 0; i < this.stars.length; i++) {
            this.stars[i].addEventListener('click', () => {
                let rate = i + 1;
                this.setRate(rate);
            });

        }

    }

    setRate(rate) {
        let event = new CustomEvent('rateChange');

        for (let i = 0; i < this.stars.length; i++) {
            this.stars[i].classList.remove('is-filled');
            if (i < rate) {
                this.stars[i].classList.add('is-filled');
            }
        }
        this.rating.dispatchEvent(event);


    }
}

export default Rating;
