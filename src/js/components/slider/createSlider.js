const createSlider = ( oprion ) => {
    const arr = oprion.arr;
    const fun = oprion.funSlider;
    const hash = window.location.hash.substr(1);
    
    arr.forEach( (key, index) => {
        let imgEl = '';
        let infoEl = '';

        (() => {
            const img = key.imges.img;
            const alt = key.imges.alt;
            
            img.forEach(arr => {

                return  imgEl += `
                    <img src="${arr}" alt="${alt[hash]}" width="100%" height="100%">
                `;
            }); 
            
        })();

        (() => {
            const info = hash === 'uk' ? key.info_uk : key.info_ru;
            
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
                        <h3 class="lng-slide_info-title-${index}">${key.type[hash]}</h3>
                    </div>
                    <div class="blosk-info_description">
                        <ul>
                           ${infoEl}  
                        </ul>
                    </div>
                    <div class="blosk-info_btn">
                        <a href="/#form">
                            <button class="btn_calculate lng-btn_calculate">${key.btn}</button>
                        </a>
                    </div>
                </div>
            </div>
        `;
    });

    fun();
};

export default createSlider;