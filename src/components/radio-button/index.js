import { Formio } from 'react-formio';

export default class FormioRadioButton extends Formio.Components.components.radio {
  get inputInfo() {
    const info = super.inputInfo;
    info.attr.class = 'utrecht-radio-button';
    return info;
  }
}
