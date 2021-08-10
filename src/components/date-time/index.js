import { Formio } from 'react-formio';

export default class FormioDateTime extends Formio.Components.components.datetime {
	constructor(a, b, c) {
		super(a,b,c);
		console.log(this);
	}
  get inputInfo() {
    const info = super.inputInfo;
    info.attr.class = 'utrecht-textbox';
    return info;
  }
}
