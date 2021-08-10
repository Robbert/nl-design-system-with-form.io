import { Formio } from 'react-formio';

export default class FormioNumber extends Formio.Components.components.number {
  get inputInfo() {
    const info = super.inputInfo;
    info.attr.class = 'utrecht-textbox';
    return info;
  }
}
