import { $ } from './_utility';

/*------------------------------------------------------------------

  Init Plugin Selectize

-------------------------------------------------------------------*/
function initPluginSelectize() {
    if (typeof $.fn.selectpicker !== 'undefined' && $('.dx-select-ticket').length) {
        $('.dx-select-ticket').selectpicker();
    }
}

export { initPluginSelectize };
