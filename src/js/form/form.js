const form = function( option ) {
    let formInputs = document.querySelectorAll('[data-rule]'),
        btn = document.querySelector('.btn_form'),
        valid;
    const RULES =  option.rules;

    const btnActiv = () => {
        valid = document.querySelectorAll('.valid');

        if(valid.length < 2 ) {
            btn.disabled = true;
        } else {
            btn.disabled = false;
        }  
    }
    
    for(let input of formInputs) {
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
    }
}

export default form;