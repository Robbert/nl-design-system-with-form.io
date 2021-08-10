import { Formio } from 'react-formio';

export default class FormioCheckbox extends Formio.Components.components.checkbox {
  get inputInfo() {
    const info = super.inputInfo;
    info.attr.class = 'utrecht-checkbox';
    return info;
  }
}
