const slider = function( option ) {
    // const elImg = option.img;
    const el = document.querySelector('.slider-block_content');
    if ( el.dataset.order === 1 ) {

    }
    const images = el.querySelectorAll('.block_slider .block_slider-line img');
    const sliderLine = el.querySelector('.block_slider-line');
    let count = 0;
    let width;

    function init () {

        if ( width == 0 || width == undefined ) {
            width = el.querySelector('.block_slider').offsetWidth;
    
            setTimeout(init, 50);
        } else {    
            sliderLine.style.width = `${width * images.length}px`;
            
            images.forEach( item => {

                item.style.width = `${width}px`;
                item.style.height = 'auto';
            });
        } 
        
        rollSlider();
    };

    window.addEventListener('resize', init);
    init();

    el.querySelector('.block_slider-right').addEventListener('click', () => {
        count++;
        if ( count >= images.length ) {

            count = 0;
        }

        rollSlider();
    });

    el.querySelector('.block_slider-left').addEventListener('click', () => {
        count--;
        if ( count < 0 ) {

            count = images.length - 1;
        }

        rollSlider();
    });


    function rollSlider() {

        sliderLine.style.transform = `translate(-${+count * width}px)`;
    };
};

export default slider;