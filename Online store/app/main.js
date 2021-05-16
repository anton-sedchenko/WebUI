import ControllerProducts from './products/controllerProducts.js';
import ControllerCart from './cart/controllerCart.js';
import Publisher from './helpers/publisher.js';
import sliderCards from './slider-cards.js';
import Slider from './slider.js';

const slider = new Slider(sliderCards);
const publisher = new Publisher();
const products = new ControllerProducts(publisher);
const cart = new ControllerCart(publisher);

slider.init();
