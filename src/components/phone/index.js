import { Formio } from 'react-formio';

export default class FormioPhone extends Formio.Components.components.phoneNumber {
  get inputInfo() {
    const info = super.inputInfo;
    info.attr.class = 'utrecht-textbox';
    return info;
  }
}
