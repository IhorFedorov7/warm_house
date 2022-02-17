const changeLang = ( option ) => {
    const select = document.querySelector('select');
    const allLang = option.lng;
    const text = option.obj.text;
    const html = option.obj.html;
    const src = option.obj.src;

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

        document.querySelector('title').textContent = text['title'][hash];

        for ( let key in text ) {
            
            let el = document.querySelectorAll(`.lng-${key}`);
            
            if ( el ) {
                
                el.forEach( i => {

                    i.textContent = text[key][hash];
                });
            }
        };

        for ( let key in html ) {
            
            let el = document.querySelectorAll(`.lng-${key}`);
            
            if ( el ) {
                
                el.forEach( i => {

                    i.innerHTML = html[key][hash];
                });
            }
        };

        for ( let key in src ) {
            
            let el = document.querySelectorAll(`.lng-${key}`);
            
            if ( el ) {
                
                el.forEach( i => {
                    
                    i.setAttribute('src', src[key][hash]);
                });
            }
        };
    };

    changeLanguage();
};

export default changeLang;