const slider = ( arr ) => {
    
    arr.forEach(key => {
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
            const info = key.info;
            
            info.forEach(i => {
                return  infoEl += `
                    <li>${i}</li>
                `;
            });
        })();

        document.querySelector('.show-content_slider-block').innerHTML += `
            <div class="slider-block_content">
                <div class="block_slider">
                    <div class="block_slider-left"><</div>
                    <div class="block_slider-line">
                        ${imgEl}
                    </div>
                    <div class="block_slider-right">></div>
                </div>
                <div class="block_info">
                    <div class="block-info_title">
                        <h3 class="lng-slide_info-title">${key.type}</h3>
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
};

export default slider;