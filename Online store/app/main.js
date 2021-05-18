import ControllerProducts from './products/controllerProducts.js';
import ControllerCart from './cart/controllerCart.js';
import ControllerFilter from './filter/controllerFilter.js';
import Publisher from './helpers/publisher.js';
import sliderCards from './slider-cards.js';
import Slider from './slider.js';

const slider = new Slider(sliderCards);
const publisher = new Publisher();
const products = new ControllerProducts(publisher);
const cart = new ControllerCart(publisher);
const filter = new ControllerFilter(publisher);

slider.init();

// done x. сверстать форму для фильтрации и поиска
// done x. сделать адаптивной

// 3. сделать выборку данных в модели продуктов нужных введенных в фильтр данных.
// 4. сделать передачу запроса фильтра от модели продуктов в модель продуктов где они отбираются, через паблишер.
// 5. вызывать рендер продуктов и 
