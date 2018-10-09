/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';

// ================================
// START YOUR APP HERE
// ===============================
import Slider from 'components/slider/slider'
import Rangeable from 'rangeable'
import addComment from 'components/addComent/addComment'

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


if (document.querySelector('.review')) {
    const comments = new addComment('.review__buttonsEditorial', '.review__textinput', '.review__text', '.review__date', '#usernameInput', '.review__username');
    comments.init();
}


