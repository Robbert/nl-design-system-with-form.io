import { Formio } from 'react-formio';

export default class FormioEmail extends Formio.Components.components.email {
  get inputInfo() {
    const info = super.inputInfo;
    info.attr.class = 'utrecht-textbox';
    return info;
  }
}
