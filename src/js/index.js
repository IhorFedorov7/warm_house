import changeLang from './setting/fun-change_lang.js';
import objLang from './lang/lang.js';
import createSlider from './components/slider/createSlider.js';
import infoSlide from './components/slider/obj.js';
import slider from './components/slider/slider.js';
import createAccordion from './components/accordion/createAccordion.js';
import infoAccordion from './components/accordion/obj.js';
import accordion from './components/accordion/accordion.js';

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

    changeLang(objLang);
});



