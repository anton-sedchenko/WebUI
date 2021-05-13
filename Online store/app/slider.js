export default class Slider {
    constructor (sliderCards) {
        this.sliderCards = sliderCards;
        this.direction = -1;
        this.slidesDataArr = [];
        this.sliderWindowWidth = 560;
        this.slidesNum = sliderCards.length;
        this.shift = this.sliderWindowWidth / (this.sliderWindowWidth * this.slidesNum) * 100 + '%';
    }

    init() {
        const leftBtnEl = document.querySelector('.arrow-left-container');
        const rightBtnEl = document.querySelector('.arrow-right-container');
        let slideLine = document.querySelector('.slide-line');
        let slideItem = document.querySelector('.slider-item');
        
        for (let i = 1; i < this.slidesNum; i++) {
            let slide = document.createElement('div');

            slide.classList.add('slider-item');
            slide.innerHTML = `<div class="slide-photo-container">
                <img class="slide-picture" src="#" alt="products picture" />
            </div>`;

            slideLine.appendChild(slide);
        }

        let slideItemArr = slideLine.querySelectorAll('.slider-item');

        this.slidesDataArr = this.sliderCards.concat();
        leftBtnEl.addEventListener('click', this.left.bind(this), false);
        rightBtnEl.addEventListener('click', this.right.bind(this), false);
        slideLine.addEventListener('transitionend', this.slideTransfer.bind(this), false);

        for (let i = 0; i < this.slidesDataArr.length; i++) {
            let img = slideItemArr[i].querySelector('.slide-picture');

            img.src = this.slidesDataArr[i].slidePicture;
        }

        this.infinite();
    }

    slideTransfer() {
        let slideLine = document.querySelector('.slide-line');

        if (this.direction === -1) {

            slideLine.appendChild(slideLine.firstElementChild);
        } else if (this.direction === 1) {

            slideLine.prepend(slideLine.lastElementChild);
        }

        slideLine.style.transition = 'none';
        slideLine.style.transform = 'translate(0)';
        setTimeout(function() {
            slideLine.style.transition = 'all 0.5s';
        });
    }

    infinite() {
        const leftArrowEl = document.querySelector('.arrow-left-container');
        const righttArrowEl = document.querySelector('.arrow-right-container');
        const sliderWindowEl = document.querySelector('.slider-window');
        let self = this;
        let intervalID = (setInterval(function() {
            self.right();
        }, 5000));

        leftArrowEl.addEventListener('mouseleave', function(event) {
            intervalID = (setInterval(function() {
                self.right();
            }, 5000));
        });

        leftArrowEl.addEventListener('mouseenter', function(event) {
            clearInterval(intervalID);
        });

        righttArrowEl.addEventListener('mouseleave', function(event) {
            intervalID = (setInterval(function() {
                self.right();
            }, 5000));
        });

        righttArrowEl.addEventListener('mouseenter', function(event) {
            clearInterval(intervalID);
        });

        sliderWindowEl.addEventListener('mouseleave', function(event) {
            intervalID = (setInterval(function() {
                self.right();
            }, 5000));
        });

        sliderWindowEl.addEventListener('mouseenter', function(event) {
            clearInterval(intervalID);
        });
    }

    left() {
        let slideLine = document.querySelector('.slide-line');
        let slideWindow = document.querySelector('.slider-window');

        if (this.direction === -1) {

            slideLine.appendChild(slideLine.firstElementChild); 
            this.direction = 1;
        }

        this.direction = 1;
        slideWindow.style.justifyContent = 'flex-end';
        slideLine.style.transform = `translate(${this.shift})`;  
    }

    right() {
        let slideLine = document.querySelector('.slide-line');
        let slideWindow = document.querySelector('.slider-window');

        if (this.direction === 1) {

            slideLine.prepend(slideLine.lastElementChild);
            this.direction = -1;
        }

        this.direction = -1;
        slideWindow.style.justifyContent = 'flex-start';
        slideLine.style.transform = `translate(-${this.shift})`;  
    }
}
