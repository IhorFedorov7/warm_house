const createAccordion = ( oprion ) => {
    const arr = oprion.arr;
    const fun = oprion.funAccordion;

    let hash = window.location.hash;

    arr.forEach(key => {
        let accordionEl = '';

        (() => {
            const FAQ = hash === '#ua' ? key.FAQ_ua : key.FAQ_ru;

            FAQ.forEach(i => {
    
                return  accordionEl += `
                    <li class="accordion">
                        <button class="accordion__control" aria-expanded="false">
                            <div class="accordion__block">
                                <div class="accordion__img"></div>
                                <span class="accordion__title">${i.title}</span>
                            </div>
                            <span class="accordion__icon">+</span>
                        </button>
                        <div class="accordion__content" aria-hidden="true">
                            ${i.info}
                        </div>
                    </li>
                `;
            });
        })();

        document.querySelector('.content_FAQ-questions').innerHTML += `
            <div class="FAQ-questions_block" data-order="${key.order}">
                <ul class="accordion__list">
                    ${accordionEl}
                </ul>
            </div>
        `;
    });

    fun();
};

export default createAccordion;
