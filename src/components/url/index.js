import { Formio } from 'react-formio';

export default class FormioUrl extends Formio.Components.components.url {
  get inputInfo() {
    const info = super.inputInfo;
    info.attr.class = 'utrecht-textbox';
    return info;
  }
}
