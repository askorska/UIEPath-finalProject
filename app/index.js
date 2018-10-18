/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';

// ================================
// START YOUR APP HERE
// ===============================
import Slider from 'components/slider/slider';
import Rangeable from 'rangeable';
import addComment from 'components/addComent/addComment';
import visibility from 'components/visibilityToggler/visibilityToggler';

if (document.querySelector('#range1')) {
    const rangeable = new Rangeable('#range1', {
        type: "double",
        multiple: true,
        step: "1",
        min: 0,
        max: 100,
        value: [10, 35],
        tooltips: "always"

    });
}

if (document.querySelector('.product__gallery')) {
    const slider = new Slider('.product__gallery', 1);
    slider.init();
}

let review = document.querySelector('.review');
if (review) {
    let comments;
    review.querySelector('.review__toggler').addEventListener('click' , (e) => {
        if (!comments) {
            comments = new addComment('.review__container');
            comments.init();
        }
        visibility.show(review.querySelector('.review__container'));
        visibility.hide(e.target.parentNode);
    });

}
