import { Formio } from 'react-formio';

export default class FormioCurrency extends Formio.Components.components.currency {
  get inputInfo() {
    const info = super.inputInfo;
    info.attr.class = 'utrecht-textbox';
    return info;
  }
}
