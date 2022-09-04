import { $ } from './_utility';

/*------------------------------------------------------------------

  Init Plugin Quill

-------------------------------------------------------------------*/
function initPluginQuill() {
    if (typeof Quill === 'undefined') {
        return;
    }
    const editorQuill = $('.dx-editor');
    if (editorQuill.length) {
        editorQuill.each(function () {
            const $this = $(this);
            $this.css({ 'min-height': parseInt($this.attr('data-editor-height'), 10), 'max-height': parseInt($this.attr('data-editor-maxHeight'), 10) });
        });
        const toolbarOptions = [
            ['bold', 'italic', 'underline', 'strike'],
            ['clean'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link'],
        ];
        // eslint-disable-next-line
        const quill = new Quill('.dx-editor', {
            modules: {
                toolbar: toolbarOptions,
            },
            theme: 'snow',
        });
    }
}

export { initPluginQuill };
