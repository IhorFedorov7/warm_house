import changeLang from './setting/fun-change_lang.js';
import objLang from './lang/lang.js';
import createSlider from './components/slider/createSlider.js';
import infoSlide from './components/slider/obj.js';
import slider from './components/slider/slider.js';
import createAccordion from './components/accordion/createAccordion.js';
import infoAccordion from './components/accordion/obj.js';
import accordion from './components/accordion/accordion.js';
import form from './form/form.js';

document.addEventListener('DOMContentLoaded', () => {
    createSlider({
        arr: infoSlide,
        funSlider: () => {
            slider({
                act: [1,2,3]
            })
        }
    });

    createAccordion({
        arr: infoAccordion,
        funAccordion: () => {
            accordion();
        }
    });

    form({
        rules: {
            nume: /^(([A-Za-z]|[А-Яа-я]){2,10})$/,
            email: /^([a-zA-Z0-9\_.-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})$/, 
            number: /^(([0-9]){7,12})$/
        }
    })

    changeLang(objLang);
});



