import visibility from 'components/visibilityToggler/visibilityToggler'
import Rating from "./rating";

class AddComment {

    constructor(element) {
        this.container = document.querySelector(element);
        this.inputContainer = this.container.querySelector('.review__textinput');
        this.outputContainer = this.container.querySelector('.review__text');
        this.usernameInput = this.container.querySelector('.review_nameinput');
        this.usernameOutput = this.container.querySelector('.review__username');
        this.avatarInput = this.container.querySelector('.review__avatarInput');
        this.avatarOutput = this.container.querySelector('.review__avatarOutput');
    }

    addEvents() {
        let buttons = this.container.querySelector('.review__buttonsEditorial').children;
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', () => {
                this.btnOnClick(buttons[i]);
            });
        }
        this.inputContainer.addEventListener('keyup', () => {
            this.updatePreview()
        });
        this.inputContainer.addEventListener('paste', (e) => {
            e.preventDefault();
            let text = e.clipboardData.getData('text/plain');
            document.execCommand('insertHTML', false, text);

        });
        this.usernameInput.addEventListener('keyup', (e) => {
            this.usernameOutput.innerHTML = e.target.value;
        });
        this.avatarInput.addEventListener('change', (e) => {
            this.updateImg(e);
        });
        document.querySelector('.review__cancel').addEventListener('click', () => {
            visibility.hide(this.container);
            visibility.show(document.querySelector('.review__toggler').parentElement);

        });

    }

    addRating() {
        let reviewRating = new Rating('.review__rate > .starRating');
        let reviewRatingOutput = this.container.querySelector('.review__ratingOutput');
        reviewRating.makeClickable();
        reviewRating.rating.addEventListener('rateChange', function () {
           reviewRatingOutput.innerHTML = reviewRating.rating.innerHTML;
        }, false);
    }

    addDate() {
        let date = new Date();
        let locale = 'en-us';
        let dateEl = this.container.querySelector('.review__date');
        date = date.toLocaleString(locale, {month: 'long', day: '2-digit', year: 'numeric'});
        dateEl.innerHTML = date;

    }

    updatePreview() {

        this.outputContainer.innerHTML = this.inputContainer.innerHTML;

    }

    updateImg(e) {
        let inputImg = this.container.querySelector('.review__inputImg');
        let inputLabel = inputImg.parentElement;
        if (e.target.files && e.target.files[0]) {
            let uploadedSrc = URL.createObjectURL(e.target.files[0]);
            inputImg.src = uploadedSrc;
            inputImg.classList.remove('is-empty');
            inputLabel.childNodes[0].textContent = 'Image selected';
            this.avatarOutput.src = uploadedSrc;
        }
    }

    btnOnClick(e) {

        if (e.dataset.command === 'blockquote') {
            document.execCommand('formatBlock', false, e.dataset.command);
        }

        else {
            document.execCommand(e.dataset.command, false, null);
        }

        this.updatePreview();
    }

    init() {
        this.addEvents();
        this.addDate();
        this.addRating();
    }

}

export default AddComment;
