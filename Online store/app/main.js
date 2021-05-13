import ControllerProducts from './products/controllerProducts.js';
import sliderCards from './slider-cards.js';
import Slider from './slider.js';

const slider = new Slider(sliderCards);
const products = new ControllerProducts();

window.onload = function() {
    slider.init();
};
