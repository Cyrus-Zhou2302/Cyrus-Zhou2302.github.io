import { $ } from './_utility';

/* Portfolio */
function initForm() {
    // Quantity
    $('.dx-form-quantity-input').each(function () {
        const $this = $(this);
        const minus = $this.parent().find('.dx-form-quantity-minus');
        const plus = $this.parent().find('.dx-form-quantity-plus');
        const min = parseInt($this.attr('min'), 10);
        const max = parseInt($this.attr('max'), 10);

        $this.on('input', function () {
            let val = this.value;

            if (val !== '') {
                if (val > max) {
                    val = max;
                } else if (val < min) {
                    val = min;
                }
            }
            this.value = val;
        });

        minus.on('click', (e) => {
            e.preventDefault();
            let count = parseInt($this.val(), 10) - 1;
            count = count < min ? min : count;
            $this.val(count);
            $this.change();
        });
        plus.on('click', (e) => {
            e.preventDefault();
            let count = parseInt($this.val(), 10) + 1;
            count = count > max ? max : count;
            $this.val(count);
            $this.change();
        });
    });
}

export { initForm };
