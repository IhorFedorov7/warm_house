const createDescription = ( oprion ) => {
    const arr = oprion.arr;
    const hash = window.location.hash.substr(1);

    arr.forEach( (key, index) => {
        let infoEl = '';

        (() => {
            const info = hash === 'uk' ? key.info_uk : key.info_ru;
            
            info.forEach(i => {
                return  infoEl += `
                    <li>${i}</li>
                `;
            });
        })();

        document.querySelector('.content-info_description').innerHTML += `
            <ul class="lng-content-info_description">
                ${infoEl}
            </ul>
        `
    });
}

export default createDescription;