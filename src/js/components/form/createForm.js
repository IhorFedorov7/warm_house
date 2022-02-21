const createForm = ( oprion ) => {
    const arr = oprion.arr;
    const fun = oprion.funForm;
    const hash = window.location.hash.substr(1);

    arr.forEach( (key, index) => {
        let infoEl = '';
        
        (() => {
            const info = hash === 'uk' ? key.info_uk : key.info_ru;
            const type = key.type;
            const name = key.name;
            
            info.forEach( (i, index) => {
                return  infoEl += `
                    <div class="form-${name[index]}">
                        <input type="${type[index]}" class="${name[index]}" name="${name[index]}" data-rule="${name[index]}" placeholder="${i}">
                    </div>
                `;
            });
        })();

        document.querySelector('.js-form').innerHTML += `
            ${infoEl}
            <div class="form-btn_block">
                <p class="btn_block-info lng-content-form_intro-warning">
                    Отправляя запрос вы соглашаетесь с политикой конфиденциальности
                </p>
                <button class="btn_form lng-content-form_intro-btn" type="submit" disabled>Отправить</button>
            </div>
        `
    });

    fun();
}

export default createForm;