import {MDCRipple} from '@material/ripple/index';
import {MDCTextField} from '@material/textfield';
const ripples = new MDCRipple(document.querySelector('.foo-button'));

const textFields = [].map.call(document.querySelectorAll('.mdc-text-field'), function(el) {
    if ($(el).hasClass('field--is-invalid')) {
        const textField = new MDCTextField(el);
        textField.useNativeValidation = false;
        textField.valid = false;

        return textField;
    } else {
        const textField = new MDCTextField(el);
        textField.useNativeValidation = false;

        return textField;
    }
});

console.log('hello world');