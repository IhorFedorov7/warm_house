const createDescription = ( oprion ) => {
    const arr = oprion.arr;
    let hash = window.location.hash;

    arr.forEach( (key, index) => {
        let infoEl = '';

        (() => {
            const info = hash === '#ua' ? key.info_ua : key.info_ru;
            
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