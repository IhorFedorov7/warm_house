const formFactory = {
    createNewForm: function (){
        const newForm = {
            inputs: null,
            btn: null,
            valid: null,

            start: function(e) {
                const form = this;
                this.inputs = document.querySelectorAll('[data-rule]');
                this.btn = document.querySelector('.form-button');

                for(let input of this.inputs) {
                    input.addEventListener('input', function(у){
                        let rule = this.dataset.rule;
                        let value = this.value;
                        let check;

                        switch(rule) {
                            case 'text': 
                                check = /^(([A-Za-z]|[А-Яа-я]){2,10})$/.test(value);
                            break;
                            case 'number': 
                                check = /^(([0-9]){7,12})$/.test(value);
                            break;
                            case 'email': 
                                check = /^([a-zA-Z0-9\_.-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})$/.test(value);
                            break;
                            case 'message': 
                                check = /^(([А-Яа-я0-9\.\,\s]|[a-zA-Z\.\,\s]){10,60})$/.test(value);
                            break;
                        }

                        if (check) {
                            this.classList.add('valid');
                            form.btnActive(e);
                        } else {
                            this.classList.remove('valid');
                            form.btnActive(e);
                        }  
                    });
                }
            },

            btnActive: function(e) {
                this.valid = document.querySelectorAll('.valid');

                if(this.valid.length < 3 ) {
                    this.btn.disabled = true;
                } else {
                    this.btn.disabled = false;
                }  
            }
        }
        return newForm;
    }
};

export default formFactory;