import { $ } from './_utility';

/*------------------------------------------------------------------

  Init Plugin Dropzone

-------------------------------------------------------------------*/
function initPluginDropzone() {
    if (typeof Dropzone === 'undefined') {
        return;
    }
    $('.dx-dropzone').each(function () {
        const $this = $(this);
        const attachment = $this.next('.dx-dropzone-attachment').find('.dx-dropzone-attachment-add');
        const dropzoneAction = $this.attr('data-dropzone-action');
        const dropzoneMaxFiles = parseInt($this.attr('data-dropzone-maxFiles'), 10);
        const dropzoneMaxMB = parseInt($this.attr('data-dropzone-maxMB'), 10);

        // eslint-disable-next-line
        const myDropzone = new Dropzone('.dx-dropzone', {
            url: dropzoneAction,
            maxFiles: dropzoneMaxFiles,
            maxFilesize: dropzoneMaxMB,
            addRemoveLinks: true,
        });

        attachment.on('click', () => {
            $this.click();
        });
        if ($this.add(':not(.active)')) {
            $(document).on('dragover', () => {
                $this.addClass('active');
            });
        }
        myDropzone.on('removedfile', () => {
            $this.removeClass('active');
        });
    });
}

export { initPluginDropzone };
