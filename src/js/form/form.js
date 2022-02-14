const form = function( option ) {
    let formInputs = document.querySelectorAll('[data-rule]'),
        btn = document.querySelector('.btn_form'),
        valid;

    const RULES =  option.rules;
    const param = option.forms;
    const service = option.servis;
    const forms = document.getElementById('form');

    forms.addEventListener('submit', formSend);

    const btnActiv = () => {
        valid = document.querySelectorAll('.valid');

        if(valid.length < 2 ) {

            btn.disabled = true;
        } else {

            btn.disabled = false;
        }  
    };

    const fetchPOST = ( options ) => {
        const formData = options.fromText;
        const param = Object.entries(options.param);

        param.forEach( key => {

            let services = Object.entries(key[1]);

            if ( service.includes(services[0][0]) ) {

                let { TOKIN, chatID, URLs } = services[0][1];
                
                console.log(`${URLs.url}${TOKIN}${URLs.chat === undefined ? '' : URLs.chat}${chatID === undefined ? '' : chatID}${URLs.type}${chatID === undefined && URLs.chat === undefined ? '' : formData}`);
                //`https://script.google.com/macros/s/AKfycbwx6CceT2OQxKOGrlPFIuiwnWksY1GZ5NAc2vM0blW7eJYQTFZ8zfp5u8neq4eBAT7PAw/exec`
                fetch(`${URLs.url}${TOKIN}${URLs.chat === undefined ? '' : URLs.chat}${chatID === undefined ? '' : chatID}${URLs.type}${chatID === undefined && URLs.chat === undefined ? '' : formData}`, {
                    method: 'POST',
                    body: formData
                    // headers: {
                    //     'Content-Type': 'application/json',
                    //     'Access-Control-Allow-Origin' : '*', 
                    //     'Access-Control-Allow-Credentials' : true 
                    // }
                })
                .then((result) => {
        
                    if ( !result.ok ) {
        
                        console.log('Ошибка!');
                    }

                    console.log('Success!', result);
        
                }).catch((err) => {
        
                    console.error('Error!', err.message);
                });
            }
            
        });
    };

    const serializeForm = ( formNode ) => {
        const { elements } = formNode;
        let text = `Resutl is: ${document.location.host}`; 

        const data = Array.from(elements)
            .filter((item) => !!item.name && !!item.value)
            .map((element) => {

                const { name, value } = element;
                return { name, value };
            }); 
        
        data.forEach(i => {

            text += `%0A - ${i.name} : ${i.value}`
        })

        fetchPOST({
            param,
            fromText: text
        });
    };
    
    for ( let input of formInputs ) {

        input.addEventListener('input', (e) => {
            let rule = input.dataset.rule;
            let value = input.value;
            let check;
            
            (() => { 
                
                check =  RULES[rule].test(value); 
            })();

            if (check) {

                input.classList.add('valid');
                btnActiv(e);
            } else {

                input.classList.remove('valid');
                btnActiv(e);
            }  
        });
    };

    async function formSend (e) {

        e.preventDefault();
        serializeForm(forms);

        forms.reset();
    };
}

export default form;