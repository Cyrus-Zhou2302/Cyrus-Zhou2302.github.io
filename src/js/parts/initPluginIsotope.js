import { $ } from './_utility';

/*------------------------------------------------------------------

  Init Plugin Isotope

-------------------------------------------------------------------*/
function initPluginIsotope() {
    if (typeof $.fn.isotope === 'undefined') {
        return;
    }

    $('.dx-isotope-grid').isotope({
        itemSelector: '.dx-isotope-grid-item',
        layoutMode: 'masonry',
    });

    $('.dx-isotope-filter').on('click', 'li', function () {
        const $this = $(this);
        // bind filter button click
        const $filterValue = $this.attr('data-filter');

        $this.closest('.dx-isotope-container').find('.dx-isotope-grid').isotope({ filter: $filterValue });

        // change is-checked class on buttons
        $this.siblings('.active').removeClass('active');
        $this.addClass('active');
    });
}

export { initPluginIsotope };
