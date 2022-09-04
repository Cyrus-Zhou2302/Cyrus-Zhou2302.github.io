import { $ } from './_utility';

/*------------------------------------------------------------------

  Init Plugin Swiper

-------------------------------------------------------------------*/
function initPluginSwiper() {
    if (typeof Swiper === 'undefined') {
        return;
    }
    $('.swiper-container').each(function () {
        const $this = $(this);
        let swiperSlides = parseInt($this.attr('data-swiper-slides'), 10);
        const swiperSpeed = parseInt($this.attr('data-swiper-speed'), 10);
        const swiperPlay = parseInt($this.attr('data-swiper-autoPlay'), 10);
        const swiperSpace = parseInt($this.attr('data-swiper-space'), 10);
        const swiperSlidesAuto = $this.attr('data-swiper-slidesAuto');
        const swiperArrowsClone = $this.attr('data-swiper-arrows-clone');
        const swiperGrabCursor = $this.attr('data-swiper-grabCursor');
        const swiperLazy = $this.attr('data-swiper-lazy');
        const swiperBreakpoints = $this.attr('data-swiper-breakpoints');
        const swiperArrows = $this.attr('data-swiper-arrows');
        const swiperPagination = $this.attr('data-swiper-pagination');
        const swiperPaginationDynamic = $this.attr('data-swiper-pagination-dynamic');
        const swiperPaginationScrollbar = $this.attr('data-swiper-pagination-scrollbar');
        const swiperHeight = $this.attr('data-swiper-autoHeight');
        const swiperFree = $this.attr('data-swiper-freeMode');
        const swiperLoop = $this.attr('data-swiper-loop');
        const conf = {};

        if (swiperSpeed) {
            conf.speed = swiperSpeed;
        }
        if (swiperSpace) {
            conf.spaceBetween = swiperSpace;
        }
        if (swiperPlay) {
            conf.autoplay = { delay: swiperPlay, disableOnInteraction: false };
        }
        if (swiperSlides) {
            conf.slidesPerView = swiperSlides;
        }
        if (swiperSlidesAuto === 'true') {
            conf.slidesPerView = 'auto';
            conf.centeredSlides = true;
        }
        if (swiperArrows === 'true') {
            conf.navigation = { prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' };
        }
        if (swiperGrabCursor === 'true') {
            conf.grabCursor = true;
        }
        if (swiperLazy === 'true') {
            conf.lazy = true;
        }
        if (swiperPagination === 'true') {
            conf.pagination = { el: '.swiper-pagination', type: 'bullets', clickable: true };
        }
        if (swiperPaginationDynamic === 'true') {
            conf.pagination = { el: '.swiper-pagination', dynamicBullets: true, clickable: true };
        }
        if (swiperPaginationScrollbar === 'true') {
            conf.scrollbar = { el: '.swiper-scrollbar', hide: true };
        }
        if (swiperHeight === 'true') {
            conf.autoHeight = swiperHeight;
        }
        if (swiperFree === 'true') {
            conf.freeMode = swiperFree;
        }
        if (swiperLoop) {
            conf.loop = swiperLoop;
        }
        if (swiperArrowsClone === 'true') {
            const $prev = $this.find('.swiper-button-prev');
            const $next = $this.find('.swiper-button-next');
            const $arrowsClone = $this.closest('.dx-box, .dx-box-1, .dx-box-2, .dx-box-3, .dx-box-4, .dx-box-5').find('.dx-slider-arrows-clone');

            $prev.add($next).clone().appendTo($arrowsClone);

            $arrowsClone.find('.swiper-button-prev').on('click', () => {
                $prev.click();
            });
            $arrowsClone.find('.swiper-button-next').on('click', () => {
                $next.click();
            });
        }
        if (swiperBreakpoints === 'true' && swiperSlides) {
            if (swiperSlides === 2) {
                const points = [768, 992, 1200];
                const breaks = {};
                let numberOfPoints = points.length;

                while (swiperSlides > 0 && numberOfPoints > 0) {
                    breaks[points[numberOfPoints - 1]] = { slidesPerView: swiperSlides };

                    swiperSlides--;
                    numberOfPoints--;
                }
                conf.breakpoints = breaks;
            } else {
                const points = [576, 768, 992, 1200, 1920];
                const breaks = {};
                let numberOfPoints = points.length;

                while (swiperSlides > 0 && numberOfPoints > 0) {
                    breaks[points[numberOfPoints - 1]] = { slidesPerView: swiperSlides };

                    swiperSlides--;
                    numberOfPoints--;
                }
                conf.breakpoints = breaks;
            }

            conf.slidesPerView = swiperSlides || 1;

            // Since Swiper 5.0 this option is removed and it is `true` by default, but in older versions it was `false`.
            // So we need to keep it as a fallback.
            conf.breakpointsInverse = true;
        }

        // eslint-disable-next-line
        new window.Swiper(this, conf);
    });
}

export { initPluginSwiper };
