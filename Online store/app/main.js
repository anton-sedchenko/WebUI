import ControllerProducts from './products/controllerProducts.js';
import ControllerCart from './cart/controllerCart.js';
import ControllerOrder from './order/controllerOrder.js';
import ControllerProductDetails from './product_details/controllerProductDetails.js';
import ControllerFilter from './filter/controllerFilter.js';
import Publisher from './helpers/publisher.js';
import sliderCards from './slider-cards.js';
import Slider from './slider.js';

const slider = new Slider(sliderCards);
const publisher = new Publisher();
const products = new ControllerProducts(publisher);
const productDetails = new ControllerProductDetails(publisher);
const cart = new ControllerCart(publisher);
const order = new ControllerOrder(publisher);
const filter = new ControllerFilter(publisher);

slider.init();
