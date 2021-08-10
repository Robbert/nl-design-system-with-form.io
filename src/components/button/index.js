import { Formio } from 'react-formio';

export default class FormioButton extends Formio.Components.components.button {
  get inputInfo() {
    const info = super.inputInfo;
    info.attr.class = 'utrecht-button';
    return info;
  }
}
