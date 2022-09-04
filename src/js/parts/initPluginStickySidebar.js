import { $ } from './_utility';

/*------------------------------------------------------------------

  Init Plugin Sticky Sidebar

-------------------------------------------------------------------*/
function initPluginStickySidebar() {
    if (typeof $.fn.stick_in_parent === 'undefined') {
        return;
    }
    $('.dx-sticky').each(function () {
        const $this = $(this);
        const row = $this.closest('.row');
        const offsetTop = parseInt($this.attr('data-sticky-offsetTop'), 10);
        const offsetBot = parseInt($this.attr('data-sticky-offsetBot'), 10);

        if (offsetBot) {
            $this.parent().css({ 'margin-bottom': -offsetBot });
            $this.css({ 'margin-bottom': offsetBot });
        }

        if (row.find('img').length) {
            row.imagesLoaded().progress(() => {
                $this.stick_in_parent({
                    offset_top: offsetTop,
                });
            });
        } else {
            $this.stick_in_parent({
                offset_top: offsetTop,
            });
        }

        $(document).on('shown.bs.collapse hidden.bs.collapse', () => {
            $(document.body).trigger('sticky_kit:recalc');
        });
    });
}

export { initPluginStickySidebar };
