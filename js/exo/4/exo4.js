const slide = {
    image : document.querySelector('.slide__img'),
    imagePath : '../image/letter_',
    list : ['A' , 'B' , 'C', 'D'],
    left : document.querySelector('#ctaSlideLeft'),
    right : document.querySelector('#ctaSlideRight'),
    current : 0,
    update : function() {
        slide.image.src = `${slide.imagePath}${slide.list[slide.current]}.png`;
        slide.image.alt = `thumbnail image ${slide.list[slide.current]}`;
    },
    forward : function() {
        if ((slide.current+1) === slide.list.length) {
            slide.current = 0;
        } else {
            slide.current++;
        }
        slide.update();
    },

    backward : function() {
        if ((slide.current) === 0) {
            slide.current = 3;
        } else {
            slide.current--;
        }
        slide.update();
    },

    init: function() {
        slide.left.addEventListener('click', slide.backward);
        slide.right.addEventListener('click', slide.forward);
    },
}

