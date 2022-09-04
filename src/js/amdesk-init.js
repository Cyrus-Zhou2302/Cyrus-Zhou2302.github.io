import { options } from './parts/_options';

if (typeof window.Amdesk !== 'undefined') {
    window.Amdesk.setOptions(options);
    window.Amdesk.init();
}
