import { $ } from './_utility';

/*------------------------------------------------------------------

  Init Btn Load

-------------------------------------------------------------------*/
function initBtnLoad() {
    const self = this;
    $('.dx-btn-load').on('click', function (e) {
        const $this = $(this);
        const $btnAttr = $this.attr('data-btn-loaded');

        e.preventDefault();
        $this.addClass('dx-btn-loading');

        setTimeout(() => {
            $this.removeClass('dx-btn-loading');

            if ($btnAttr) {
                $this.text($btnAttr);
            } else {
                $this.text(self.options.templates.btnLoaded);
            }
            $this.addClass('dx-btn-loaded');
        }, 2000);
    });
}

export { initBtnLoad };
