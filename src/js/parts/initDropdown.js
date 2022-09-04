import { $, debounceResize, wndW } from './_utility';

/*------------------------------------------------------------------

  Init Dropdown

-------------------------------------------------------------------*/
function initDropdown() {
    debounceResize(() => {
        $('.dx-dropdown').each(function () {
            const $this = $(this);
            const $container = $('.dx-main .container');
            const dropMenu = $this.find('.dropdown-menu');

            const containerRight = wndW - ($container.innerWidth() + $container.offset().left - parseInt($container.css('padding-right'), 10));
            const dropMenuRight = wndW - (dropMenu.innerWidth() + dropMenu.offset().left);
            const dropMenuNegative = containerRight - dropMenuRight;

            if (containerRight > dropMenuRight) {
                $this.on('show.bs.dropdown', () => {
                    dropMenu.css({ display: 'block', 'margin-left': -dropMenuNegative });
                });
            }
            $this.on('hidden.bs.dropdown', () => {
                dropMenu.css({ display: 'none' });
            });
        });
    });
}

export { initDropdown };
