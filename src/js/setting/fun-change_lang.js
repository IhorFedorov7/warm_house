const changeLang = ( option ) => {
    const select = document.querySelector('select');
    const allLang = option.lng;
    const text = option.obj.text;
    const html = option.obj.html;
    const attr = option.obj.attr;

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

            location.href = `${window.location.pathname}#uk`;

            location.reload();
        }

        select.value = hash;
        
        document.all[0].setAttribute('lang', hash);
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

        for ( let key in attr ) {

            const objAttr = attr[key];

            for ( let j in objAttr ) { 

                let el = document.querySelectorAll(`.lng-${j}`);
        
                if ( el ) {
                                
                    el.forEach( i => {
                        if (key === 'src') {
                            i.setAttribute('src', objAttr[j][hash]);
                        }                
                        
                        if (key === 'alt') {
                            i.setAttribute('alt', objAttr[j][hash]);
                        }  
                    });
                } 
            };
        };
    };

    changeLanguage();
};

export default changeLang;