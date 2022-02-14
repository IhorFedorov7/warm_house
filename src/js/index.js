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
        },
        servis : ['telegram', 'google'],
        forms: [
            {
                'telegram': {
                    TOKIN: '5288793147:AAHBWe1abCXXvGZ1V1UgqvYH1m56OGd34VI',
                    chatID: '-631831970',
                    URLs: {
                        url: 'https://api.telegram.org/bot',
                        chat: '/sendMessage?chat_id=',
                        type: '&text='
                    }
                }
            },
            {
                'google': {
                    TOKIN: 'AKfycbwx6CceT2OQxKOGrlPFIuiwnWksY1GZ5NAc2vM0blW7eJYQTFZ8zfp5u8neq4eBAT7PAw',
                    URLs: {
                        url: 'https://script.google.com/macros/s/',
                        type: '/exec'
                    }
                }
            }
        ]
    })
    
    changeLang(objLang);
});



