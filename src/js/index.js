import changeLang from './setting/fun-change_lang.js';
import objLang from './lang/lang.js';
import createSlider from './components/slider/createSlider.js';
import infoSlide from './components/slider/obj.js';
import slider from './components/slider/slider.js';

createSlider({
    arr: infoSlide,
    funSlider: () => {
        slider({
            act: [1,2,3]
        })
    }
});



changeLang(objLang);



