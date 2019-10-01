import {MDCRipple} from '@material/ripple/index';
import {MDCTextField} from '@material/textfield';
const ripples = new MDCRipple(document.querySelector('.foo-button'));

const textFields = [].map.call(document.querySelectorAll('.mdc-text-field'), function(el) {
    const textField = new MDCTextField(el);
    textField.useNativeValidation = false;
    textField.valid = false;

    return textField;
});

console.log('hello world');