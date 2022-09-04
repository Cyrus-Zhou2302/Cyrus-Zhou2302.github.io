import { $ } from './_utility';

/*------------------------------------------------------------------

  Set Custom Options

-------------------------------------------------------------------*/
function setOptions(newOpts) {
    const self = this;

    const optsTemplates = $.extend({}, this.options.templates, newOpts && newOpts.templates || {});

    self.options = $.extend({}, self.options, newOpts);
    self.options.templates = optsTemplates;
}

export { setOptions };
