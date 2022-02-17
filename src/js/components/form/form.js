const form = function( option ) {
    let formInputs = document.querySelectorAll('[data-rule]'),
        btn = document.querySelector('.btn_form'),
        valid;

    const RULES =  option.rules,
        param = option.forms,
        service = option.servis,
        forms = document.getElementById('form');

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
        const formDataMesseng = options.text;
        const formDataArr = options.arr;
        const param = Object.entries(options.param);

        param.forEach( key => {
            let services = Object.entries(key[1]);

            if (
                services.length !== 0 && 
                service.includes(services[0][0]) 
            ) {

                let { TOKIN, chatID, URLs } = services[0][1];
                
                fetch(`${URLs.url}${TOKIN}${URLs.chat === undefined ? '' : URLs.chat}${chatID === undefined ? '' : chatID}${URLs.type}${chatID === undefined && URLs.chat === undefined ? '' : formDataMesseng}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin' : '*', 
                        'Access-Control-Allow-Credentials' : true 
                    },
                    body: formDataArr
                })
                .then((request) => {
        
                    if ( !request.ok ) {
        
                        return;
                    }

                    return request.json();
                }).catch((err) => {
        
                    console.error('Error!', err.message);
                });
            } 
        });
    };

    const serializeForm = ( formNode ) => {
        const { elements } = formNode;
        let textForm = `Resutl is: ${document.location.host}`; 
        let arrForm = {};

        const data = Array.from(elements)
            .filter((item) => !!item.name && !!item.value)
            .map((element) => {

                const { name, value } = element;
                return { name, value };
            }); 
        
        data.forEach(i => {

            textForm += `%0A - ${i.name} : ${i.value}`;
            return arrForm[i.name] = i.value;
        });
        
        fetchPOST({
            param,
            text: textForm,
            arr: arrForm
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