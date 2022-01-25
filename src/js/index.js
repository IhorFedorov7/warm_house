import changeLang from './setting/fun-change_lang.js';
import objLang from './lang/lang.js';
import createSlider from './components/createSlider.js';
import infoSlide from './components/obj';
import slider from './components/slider.js';

createSlider({
    arr: infoSlide,
    funSlider: null
});



changeLang(objLang);

slider();

