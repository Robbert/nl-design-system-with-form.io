import { Formio } from 'react-formio';

export default class FormioPassword extends Formio.Components.components.password {
  get inputInfo() {
    const info = super.inputInfo;
    info.attr.class = 'utrecht-textbox';
    return info;
  }
}
