(function () {
    "use strict";

    function Carousel(setting) {
        if (document.querySelector(setting.wrap) === null) {
            console.error(`Carousel not fount selector ${setting.wrap}`);
            return;
        }

        /* Scope privates methods and properties */
        let privates = {};


        /* Public methods */
        // Prev slide
        this.prev_slide = () => {
            --privates.opt.position;

            if (privates.opt.position < 0) {
                privates.sel.wrap.classList.add('s-notransition');
                privates.opt.position = privates.opt.max_position - 1;
            }

            privates.sel.wrap.style["transform"] = `translateX(-${privates.opt.position}00%)`;
        };


        // Next slide
        this.next_slide = () => {
            ++privates.opt.position;

            if (privates.opt.position >= privates.opt.max_position) {
                privates.opt.position = 0;
            }

            privates.sel.wrap.style["transform"] = `translateX(-${privates.opt.position}00%)`;
        };



        /* Privates properties */
        privates.setting = setting;

        privates.sel = {
            "main": document.querySelector(privates.setting.main),
            "wrap": document.querySelector(privates.setting.wrap),
            "children": document.querySelector(privates.setting.wrap).children,
            "prev": document.querySelector(privates.setting.prev),
            "next": document.querySelector(privates.setting.next)
        };

        privates.opt = {
            "position": 0,
            "max_position": document.querySelector(privates.setting.wrap).children.length
        };

        // Control
        if (privates.sel.prev !== null) {
            privates.sel.prev.addEventListener('click', () => {
                this.prev_slide();
            });
        }

        if (privates.sel.next !== null) {
            privates.sel.next.addEventListener('click', () => {
                this.next_slide();
            });
        }

    }


    let a = new Carousel({
        "main": ".js-carousel",
        "wrap": ".js-carousel__wrap",
        "prev": ".js-carousel__prev",
        "next": ".js-carousel__next"
    });

})();

const next = document.querySelector('.b-carousel__next');
const prev = document.querySelector('.b-carousel__prev');
const numberPage = document.getElementById('number-page');
const quantityPage = document.getElementById('quantity-page');
let click = 1;

next.addEventListener('click', (() => {
    if(click < quantityPage.innerHTML ){
        ++click
        numberPage.innerHTML = click;
    } else {
        window.history.back();
    }
}))

prev.addEventListener('click', (() => {
    if(numberPage.innerHTML == 1){
        
        click = quantityPage.innerHTML;
        numberPage.innerHTML = click;
    } else {
        --click
        numberPage.innerHTML = click;
    }
}))

const div = document.querySelector('.b-carousel__wrap');
let start;
let end;
let up;
let down;

div.addEventListener('touchstart', (e => {
    console.log('up', e.targetTouches[0].screenY)
    start = e.targetTouches[0].screenX;
    up = e.targetTouches[0].screenY;
}), false)

div.addEventListener('touchend', (e => {
    console.log(up - down);
    if((up - down) < 100 && (up - down) > -100){
        if((start - end) > 50 && end != 0){
            next.click()
        } else if((start-end) < 50 && end != 0 ){
            prev.click()
        }
    }
    start = 0;
    end = 0;
    up = 0;
    down = 0;
}), false)

div.addEventListener('touchmove', (e => {
    console.log('down', e.targetTouches[0].screenY)
    end = e.targetTouches[0].screenX;
    down = e.targetTouches[0].screenY;
}), false)

document.addEventListener('keydown', (event) => {
    if (event.code == 'ArrowLeft') {
        prev.click()
    } else if(event.code == 'ArrowRight'){
        next.click()
    }
})