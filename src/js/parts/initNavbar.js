import {
    $, throttleScroll, debounceResize, bodyOverflow, $wnd,
} from './_utility';

/*------------------------------------------------------------------

  Init Navbar

-------------------------------------------------------------------*/
function initNavbar() {
    const self = this;
    const $navbar = $('.dx-navbar-top');

    // Fixed open modal
    let navbarWidth = 0;

    debounceResize(() => {
        navbarWidth = $navbar.innerWidth();
    });
    $(document).on('beforeLoad.fb', () => {
        $navbar.width(navbarWidth);
    });
    $(document).on('afterClose.fb', () => {
        $navbar.width('');
    });

    // hide / show
    // add / remove solid color
    const $autohideNav = $navbar.filter('.dx-navbar-autohide');
    self.throttleScroll((type, scroll) => {
        const start = 400;
        const hideClass = 'dx-onscroll-hide';
        const showClass = 'dx-onscroll-show';

        // hide / show
        if (type === 'down' && scroll > start) {
            $autohideNav.removeClass(showClass).addClass(hideClass);
        } else if (type === 'up' || type === 'end' || type === 'start') {
            $autohideNav.removeClass(hideClass).addClass(showClass);
        }
    });

    // Scroll
    if ($navbar.hasClass('dx-navbar-fixed') || $navbar.hasClass('dx-navbar-sticky')) {
        throttleScroll((type, scroll) => {
            if (scroll > 200) {
                $navbar.addClass('dx-navbar-scroll');
            } else {
                $navbar.removeClass('dx-navbar-scroll');
            }
        });
    }

    // update position dropdown
    const $dropdownMenu = $('.dx-navbar-top .dx-navbar-dropdown');

    debounceResize(() => {
        $dropdownMenu.each(function () {
            const $thisDropdown = $(this);
            const rect = $thisDropdown[0].getBoundingClientRect();
            const rectLeft = rect.left;
            const rectRight = rect.right;
            const rectWidth = rect.width;
            const wndW = $wnd.width();

            if (wndW - rectRight < 0) {
                $thisDropdown.addClass('dx-navbar-dropdown-left');

                if (wndW - rectRight === rectWidth + 10) {
                    $thisDropdown.removeClass('dx-navbar-dropdown-left');
                }
            }

            if (rectLeft < 0) {
                $thisDropdown.addClass('dx-navbar-dropdown-right');

                if (rectLeft === rectWidth + 10) {
                    $thisDropdown.removeClass('dx-navbar-dropdown-right');
                }
            }
        });
    });

    // Fullscreen Navbar
    const $navbarFull = $('.dx-navbar-fullscreen');
    if ($navbarFull.length) {
        const burger = $navbar.find('.dx-navbar-burger');
        const burgerFull = $navbarFull.find('.dx-navbar-burger');
        const dropItem = $navbarFull.find('.dx-drop-item');

        // Position Burger (navbar-fullscreen)
        debounceResize(() => {
            burgerFull.css({ position: 'absolute', top: burger.offset().top - $navbar.offset().top, left: burger.offset().left });
        });

        // Click on burger navbar
        burger.on('click', () => {
            burger.add(burgerFull).addClass('active');
            $navbarFull.addClass('dx-navbar-fullscreen-open');
            $navbarFull.removeClass('dx-navbar-fullscreen-closed');
            $navbarFull.css({ 'z-index': 1000 });
            bodyOverflow(1);
        });

        // Click on burger navbar-fullscreen
        burgerFull.on('click', () => {
            burger.add(burgerFull).removeClass('active');
            $navbarFull.removeClass('dx-navbar-fullscreen-open');
            $navbarFull.addClass('dx-navbar-fullscreen-closed');
            $navbarFull.find('.show').removeClass('show').innerHeight('');
            $navbarFull.one('transitionend webkitTransitionEnd oTransitionEnd', () => {
                $navbarFull.css({ 'z-index': -1000 });
            });
            bodyOverflow(0);
        });

        // Click on Esc
        $(document).on('keydown', (e) => {
            if (e.keyCode === 27 && $navbarFull.hasClass('dx-navbar-fullscreen-open')) {
                burger.add(burgerFull).removeClass('active');
                $navbarFull.removeClass('dx-navbar-fullscreen-open');
                $navbarFull.addClass('dx-navbar-fullscreen-closed');
                bodyOverflow(0);
            }
        });

        // Dropdown Collapse
        dropItem.each(function () {
            const $thisItem = $(this);
            const dropItemLink = $thisItem.find('> a');
            $thisItem.find('.dx-navbar-dropdown').addClass('collapse');

            dropItemLink.on('click', function (e) {
                e.preventDefault();
                const $dropdown = $(this).next('.dx-navbar-dropdown');
                const dropdownChild = $dropdown.find('.dx-navbar-dropdown');
                const dropdownHeight = $dropdown.innerHeight();
                const dropdownSiblings = $thisItem.siblings().find('.show');
                const dropdownSiblingsHeight = dropdownSiblings.innerHeight();

                if (!$dropdown.hasClass('show')) {
                    $dropdown.removeClass('collapse').addClass('collapsing').innerHeight(dropdownHeight);

                    $dropdown.on('transitionend webkitTransitionEnd oTransitionEnd', () => {
                        $dropdown.addClass('show');
                        $dropdown.off('transitionend webkitTransitionEnd oTransitionEnd');
                    });
                } else {
                    $dropdown.innerHeight(dropdownHeight).addClass('collapsing').innerHeight(0);
                    $dropdown.removeClass('collapse').removeClass('show');
                    dropdownChild.innerHeight(dropdownHeight).addClass('collapsing').innerHeight(0);
                    dropdownChild.removeClass('collapse').removeClass('show');
                }
                if (dropdownSiblings.hasClass('show')) {
                    dropdownSiblings.innerHeight(dropdownSiblingsHeight).addClass('collapsing').innerHeight(0);
                    dropdownSiblings.removeClass('collapse').removeClass('show');
                }
                $dropdown.one('transitionend webkitTransitionEnd oTransitionEnd', () => {
                    $dropdown.removeClass('collapsing').addClass('collapse').innerHeight('');
                    dropdownChild.removeClass('collapsing').addClass('collapse').innerHeight('');
                    dropdownSiblings.removeClass('collapsing').addClass('collapse').innerHeight('');
                });
            });
        });
    }
}

export { initNavbar };
