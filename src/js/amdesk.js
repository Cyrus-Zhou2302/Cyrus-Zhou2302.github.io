import { options } from './parts/_options';
import {
    debounceResize, throttleScroll, bodyOverflow, isInViewport, scrollTo,
} from './parts/_utility';
import { setOptions } from './parts/setOptions';
import { initNavbar } from './parts/initNavbar';
import { initDropdown } from './parts/initDropdown';
import { initBtnLoad } from './parts/initBtnLoad';
import { initForm } from './parts/initForm';
import { initTwitter } from './parts/initTwitter';

/* Plugins */
import { initPluginStickySidebar } from './parts/initPluginStickySidebar';
import { initPluginCleave } from './parts/initPluginCleave';
import { initPluginImagesLoaded } from './parts/initPluginImagesLoaded';
import { initPluginIsotope } from './parts/initPluginIsotope';
import { initPluginJarallax } from './parts/initPluginJarallax';
import { initPluginSwiper } from './parts/initPluginSwiper';
import { initPluginOFI } from './parts/initPluginOFI';
import { initPluginSelectize } from './parts/initPluginSelectize';
import { initPluginQuill } from './parts/initPluginQuill';
import { initPluginDropzone } from './parts/initPluginDropzone';

/*------------------------------------------------------------------

  Amdesk Class

-------------------------------------------------------------------*/
class AMDESK {
    constructor() {
        this.options = options;
    }

    init() {
        // prt:sc:dm
        this.initNavbar();
        this.initDropdown();
        this.initBtnLoad();
        this.initForm();
        this.initTwitter();
        this.initPluginJarallax();
        this.initPluginStickySidebar();
        this.initPluginCleave();
        this.initPluginImagesLoaded();
        this.initPluginIsotope();
        this.initPluginSwiper();
        this.initPluginOFI();
        this.initPluginSelectize();
        this.initPluginQuill();
        this.initPluginDropzone();

        return this;
    }

    setOptions(newOpts) {
        return setOptions.call(this, newOpts);
    }

    debounceResize(func) {
        return debounceResize.call(this, func);
    }

    throttleScroll(callback) {
        return throttleScroll.call(this, callback);
    }

    bodyOverflow(type) {
        return bodyOverflow.call(this, type);
    }

    isInViewport($item, returnRect) {
        return isInViewport.call(this, $item, returnRect);
    }

    scrollTo($to, callback) {
        return scrollTo.call(this, $to, callback);
    }

    initNavbar() {
        return initNavbar.call(this);
    }

    initDropdown() {
        return initDropdown.call(this);
    }

    initBtnLoad() {
        return initBtnLoad.call(this);
    }

    initForm() {
        return initForm.call(this);
    }

    initTwitter() {
        return initTwitter.call(this);
    }

    initPluginStickySidebar() {
        return initPluginStickySidebar.call(this);
    }

    initPluginCleave() {
        return initPluginCleave.call(this);
    }

    initPluginImagesLoaded() {
        return initPluginImagesLoaded.call(this);
    }

    initPluginIsotope() {
        return initPluginIsotope.call(this);
    }

    initPluginJarallax($context) {
        return initPluginJarallax.call(this, $context);
    }

    initPluginSwiper() {
        return initPluginSwiper.call(this);
    }

    initPluginOFI() {
        return initPluginOFI.call(this);
    }

    initPluginSelectize() {
        return initPluginSelectize.call(this);
    }

    initPluginQuill() {
        return initPluginQuill.call(this);
    }

    initPluginDropzone() {
        return initPluginDropzone.call(this);
    }
}

/*------------------------------------------------------------------

  Init Amdesk

-------------------------------------------------------------------*/
window.Amdesk = new AMDESK();
