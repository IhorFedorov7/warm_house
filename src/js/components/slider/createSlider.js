const createSlider = ( oprion ) => {
    const arr = oprion.arr;
    const fun = oprion.funSlider;
    let hash = window.location.hash;

    arr.forEach( (key, index) => {
        let imgEl = '';
        let infoEl = '';

        (() => {
            const img = key.img;
            
            img.forEach(images => {
                return  imgEl += `
                    <img src="${images}" alt="">
                `;
            }); 
            
        })();

        (() => {
            const info = hash === '#ua' ? key.info_ua : key.info_ru;
            
            info.forEach(i => {
                return  infoEl += `
                    <li>${i}</li>
                `;
            });
        })();

        document.querySelector('.show-content_slider-block').innerHTML += `
            <div class="slider-block_content" data-order="${key.order}">
                <div class="block_slider">
                    <div class="block_slider-left"><h3><</h3></div>
                    <div class="block_slider-line">
                        ${imgEl}
                    </div>
                    <div class="block_slider-right">
                    <h3>></h3></div>
                </div>
                <div class="block_info">
                    <div class="block-info_title">
                        <h3 class="lng-slide_info-title-${index}">${key.type}</h3>
                    </div>
                    <div class="blosk-info_description">
                        <ul>
                           ${infoEl}  
                        </ul>
                    </div>
                    <div class="blosk-info_btn">
                        <button class="btn_calculate lng-btn_calculate">${key.btn}</button>
                    </div>
                </div>
            </div>
        `;
    });

    fun();
};

export default createSlider;