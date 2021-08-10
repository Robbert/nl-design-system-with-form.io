import { Formio } from 'react-formio';

export default class FormioTextbox extends Formio.Components.components.textfield {
  get inputInfo() {
    const info = super.inputInfo;
    info.attr.class = 'utrecht-textbox';
    return info;
  }
}
