/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';

// ================================
// START YOUR APP HERE
// ===============================
//import Slider from 'components/slider/slider'
//
//
//let slider = new Slider('.product__gallery', 1);
//slider.init();
import Rangeable from 'rangeable'


const rangeable = new Rangeable('#range1', {
    type: "double",
    multiple:true,
    step: "1",
    min: 0,
    max: 100,
    value: [10, 35],
    tooltips: "always"

});

rangeable.reset();

