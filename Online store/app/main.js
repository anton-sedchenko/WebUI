import ControllerProducts from './products/controllerProducts.js';
import ControllerCart from './cart/controllerCart.js';
import sliderCards from './slider-cards.js';
import Slider from './slider.js';

const slider = new Slider(sliderCards);
const products = new ControllerProducts();
const cart = new ControllerCart();

slider.init();
