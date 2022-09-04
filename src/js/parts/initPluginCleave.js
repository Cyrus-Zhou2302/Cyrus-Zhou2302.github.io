import { $ } from './_utility';

/*------------------------------------------------------------------

  Init Plugin Cleave

-------------------------------------------------------------------*/
function initPluginCleave() {
    if (typeof Cleave === 'undefined') {
        return;
    }
    if ($('.dx-card-number').length) {
        // eslint-disable-next-line
        const cleave = new Cleave('.dx-card-number', {
            creditCard: true,
        });
    }
}

export { initPluginCleave };
