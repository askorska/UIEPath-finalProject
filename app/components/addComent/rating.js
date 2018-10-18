class Rating {
    constructor(selector) {
        this.rating = document.querySelector(selector);
        this.stars = this.rating.children;
    }

    makeClickable() {
        this.rating.classList.add('starRating--clickable');
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
            this.stars[i].classList.remove('starRating__star--filled');
            if (i < rate) {
                this.stars[i].classList.add('starRating__star--filled');
            }
        }
        this.rating.dispatchEvent(event);
    }
}

export default Rating;
