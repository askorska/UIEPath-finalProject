/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';

// ================================
// START YOUR APP HERE
// ===============================
import Slider from 'components/slider/slider'
//
//
let slider = new Slider('.product__slider', 1);
slider.init();
