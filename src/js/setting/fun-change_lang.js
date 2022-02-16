const changeLang = ( objLang ) => {
    const select = document.querySelector('select');
    const allLang = ['ru', 'ua'];

    select.addEventListener('change', changeURLLanguage);

    function changeURLLanguage () {
        let lang = select.value;

        location.href = `${window.location.pathname}#${lang}`;
        location.reload();
    };

    function changeLanguage() {
        let hash = window.location.hash;

        hash = hash.substr(1);

        if ( !allLang.includes(hash) ) {

            location.href = `${window.location.pathname}#ua`;

            location.reload();
        }

        select.value = hash;

        document.querySelector('title').textContent = objLang['title'][hash];

        for ( let key in objLang ) {
            
            let el = document.querySelectorAll(`.lng-${key}`);
            
            if ( el ) {
                
                el.forEach( i => {

                    i.textContent = objLang[key][hash];
                });
            }
        };
    };

    changeLanguage();
};

export default changeLang;