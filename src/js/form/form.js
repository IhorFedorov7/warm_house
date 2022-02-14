const form = function( option ) {
    let formInputs = document.querySelectorAll('[data-rule]'),
        btn = document.querySelector('.btn_form'),
        valid;

    const RULES =  option.rules;
    const forms = document.getElementById('form');
    const bot = {
        TOKIN: '5288793147:AAHBWe1abCXXvGZ1V1UgqvYH1m56OGd34VI',
        chatID: '-631831970'
    }

    forms.addEventListener('submit', formSend);

    const btnActiv = () => {
        valid = document.querySelectorAll('.valid');

        if(valid.length < 2 ) {

            btn.disabled = true;
        } else {

            btn.disabled = false;
        }  
    };

    // const fetchPOST = ( options ) => {
    //     const formData = options.fromText;
    //     const bot = options.bot;

    //     fetch(`https://api.telegram.org/bot${bot.TOKIN}/sendMessage?chat_id=${bot.chatID}&text=${formData}`, {
    //         method: 'POST'
    //     })
    //     .then((result) => {

    //         console.log(result);
    //     }).catch((err) => {
            
    //     });

    // };

    const serializeForm = ( formNode ) => {
        const { elements } = formNode;

        const data = Array.from(elements)
            .filter((item) => !!item.name && !!item.value)
            .map((element) => {

                const { name, value } = element;
                return { name, value };
            }); 

        console.log(data);
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
        // let formData = new FormData(forms);
        // console.log(formData.values());

        // await fetchPOST({
        //     bot: bot,
        //     fromText: formData
        // });
    };
}

export default form;