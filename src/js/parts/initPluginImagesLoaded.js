import { $ } from './_utility';

/*------------------------------------------------------------------

  Init Plugin ImagesLoaded

-------------------------------------------------------------------*/
function initPluginImagesLoaded() {
    if (typeof $.fn.imagesLoaded === 'undefined') {
        return;
    }
    $('.dx-isotope-grid').imagesLoaded().progress(() => {
        $('.dx-isotope-grid').isotope('layout');
    });
}

export { initPluginImagesLoaded };
