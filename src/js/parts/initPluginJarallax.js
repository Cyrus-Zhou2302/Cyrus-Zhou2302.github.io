import { $ } from './_utility';

/*------------------------------------------------------------------

  Init Jarallax

-------------------------------------------------------------------*/
function initPluginJarallax() {
    if (typeof $.fn.jarallax === 'undefined') {
        return;
    }

    // primary parallax
    $('.bg-image-parallax').jarallax({
        speed: this.options.parallaxSpeed,
    });
}

export { initPluginJarallax };
