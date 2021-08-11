(this["webpackJsonpreact-app-starterkit"]=this["webpackJsonpreact-app-starterkit"]||[]).push([[0],{1121:function(t,e,n){},1129:function(t,e,n){"use strict";n.r(e);var o=n(1),c=n.n(o),r=n(326),i=n(323),a=n.n(i),s=n(5),u=function(t){return window.location.search.substr(1).split("&").forEach((function(e){t[e.split("=")[0]]=e.split("=")[1]&&decodeURIComponent(e.split("=")[1])})),t}({}),l={projectUrl:u.projectUrl||"https://tgbtohcsdunxdpv.form.io",apiUrl:u.apiUrl||"https://api.form.io"};s.Formio.setProjectUrl(l.projectUrl),s.Formio.setBaseUrl(l.apiUrl);var p=n(81),b=n(91),f=n(2),m=c.a.createContext(),d={init:!1,isActive:!1,user:null,authenticated:!1,submissionAccess:{},formAccess:{},projectAccess:{},roles:{},is:{},error:""},x=Object(s.auth)();function h(t){var e=c.a.useReducer(x,d),n=Object(b.a)(e,2),o=n[0],r=n[1],i=c.a.useMemo((function(){return[o,r]}),[o]);return Object(f.jsx)(m.Provider,Object(p.a)({value:i},t))}function j(){var t=c.a.useContext(m);if(!t)throw new Error("useAuth must be used within a AuthProvider");var e=Object(b.a)(t,2);return{state:e[0],dispatch:e[1]}}var O=function(t){var e=t.style,n=void 0===e?{width:"60px",height:"60px",marginLeft:"calc(50% - 60px)",marginTop:"40px"}:e,o=t.textClass;return Object(f.jsx)("div",{className:"spinner-border ".concat(o||"text-primary"),style:n,role:"status",children:Object(f.jsx)("span",{className:"sr-only",children:"Loading..."})})},y=function(t){var e=t.width,n=t.height,o=t.className,c=t.children,r={position:"absolute",top:"50%",width:e||"180px",height:n||"100px",left:"50%",transform:"translate(-50%, -50%)",boxShadow:"0px 0px 22px rgba(0, 0, 0, 0.4)",zIndex:"1001",fontSize:"16px"};return Object(f.jsx)("div",{className:"overlay",style:{height:"100vh",width:"100%",position:"absolute",zIndex:"1000",backgroundColor:"rgba(0, 0, 0, 0.5)"},children:Object(f.jsx)("div",{className:o,style:r,children:c})})};n(1121);var v=function(){var t=j(),e=t.dispatch,n=t.state.isActive;return Object(o.useEffect)((function(){Object(s.initAuth)()(e)}),[e]),Object(f.jsxs)(f.Fragment,{children:[n?Object(f.jsx)(y,{className:"alert alert-info",children:Object(f.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[Object(f.jsx)(O,{style:{marginBottom:" 10px"}}),"Logging In..."]})}):null,Object(f.jsxs)("div",{className:"App utrecht-document",children:[Object(f.jsx)("link",{rel:"stylesheet",href:"https://unpkg.com/@nl-design-system-unstable/amsterdam-design-tokens/dist/theme/index.css"}),Object(f.jsx)("link",{rel:"stylesheet",href:"https://unpkg.com/@nl-design-system-unstable/rijkshuisstijl-design-tokens/dist/theme/index.css"}),Object(f.jsx)("link",{rel:"stylesheet",href:"https://unpkg.com/@nl-design-system-unstable/duo-design-tokens/dist/theme/index.css"}),Object(f.jsx)("link",{rel:"stylesheet",type:"text/css",href:"https://unpkg.com/@utrecht/design-tokens/dist/theme/index.css"}),Object(f.jsxs)("div",{className:"theme-switcher",children:[Object(f.jsx)("label",{htmlFor:"theme",children:"Theme:"}),Object(f.jsxs)("select",{id:"theme",onChange:function(t){return document.documentElement.className=t.target.value},children:[Object(f.jsx)("option",{value:"duo-theme",children:"DUO"}),Object(f.jsx)("option",{value:"amsterdam-theme",children:"Gemeente Amsterdam"}),Object(f.jsx)("option",{value:"utrecht-theme",selected:!0,children:"Gemeente Utrecht"})]})]}),Object(f.jsx)(s.Form,{src:"".concat(l.projectUrl,"/test")})]})]})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,1132)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),o(t),c(t),r(t),i(t)}))},k=n(17),I=n(18),C=n(20),N=n(12),F=n(21),w=n(19),P=function(t){Object(F.a)(n,t);var e=Object(w.a)(n);function n(){return Object(k.a)(this,n),e.apply(this,arguments)}return Object(I.a)(n,[{key:"inputInfo",get:function(){var t=Object(C.a)(Object(N.a)(n.prototype),"inputInfo",this);return t.attr.class="utrecht-button",t}}]),n}(s.Formio.Components.components.button),U=function(t){Object(F.a)(n,t);var e=Object(w.a)(n);function n(){return Object(k.a)(this,n),e.apply(this,arguments)}return Object(I.a)(n,[{key:"className",get:function(){return"utrecht-form-field-textbox utrecht-form-field-textbox--distanced"}},{key:"inputInfo",get:function(){var t=Object(C.a)(Object(N.a)(n.prototype),"inputInfo",this);return t.attr.class="utrecht-checkbox",t}}]),n}(s.Formio.Components.components.checkbox),L=function(t){Object(F.a)(n,t);var e=Object(w.a)(n);function n(){return Object(k.a)(this,n),e.apply(this,arguments)}return Object(I.a)(n,[{key:"className",get:function(){return"utrecht-form-field-textbox utrecht-form-field-textbox--distanced"}},{key:"inputInfo",get:function(){var t=Object(C.a)(Object(N.a)(n.prototype),"inputInfo",this);return t.attr.class="utrecht-textbox",t}}]),n}(s.Formio.Components.components.currency),A=function(t){Object(F.a)(n,t);var e=Object(w.a)(n);function n(){return Object(k.a)(this,n),e.apply(this,arguments)}return Object(I.a)(n,[{key:"className",get:function(){return"utrecht-form-field-textbox utrecht-form-field-textbox--distanced"}},{key:"inputInfo",get:function(){var t=Object(C.a)(Object(N.a)(n.prototype),"inputInfo",this);return t.attr.class="utrecht-textbox",t}}]),n}(s.Formio.Components.components.datetime),q=function(t){Object(F.a)(n,t);var e=Object(w.a)(n);function n(){return Object(k.a)(this,n),e.apply(this,arguments)}return Object(I.a)(n,[{key:"className",get:function(){return"utrecht-form-field-textbox utrecht-form-field-textbox--distanced"}},{key:"inputInfo",get:function(){var t=Object(C.a)(Object(N.a)(n.prototype),"inputInfo",this);return t.attr.class="utrecht-textbox",t}}]),n}(s.Formio.Components.components.email),E={button:P,checkbox:U,content:function(t){Object(F.a)(n,t);var e=Object(w.a)(n);function n(){return Object(k.a)(this,n),e.apply(this,arguments)}return Object(I.a)(n,[{key:"init",value:function(){Object(C.a)(Object(N.a)(n.prototype),"init",this).call(this),this.component.customClass="utrecht-html"}}]),n}(s.Formio.Components.components.content),currency:L,datetime:A,email:q,number:function(t){Object(F.a)(n,t);var e=Object(w.a)(n);function n(){return Object(k.a)(this,n),e.apply(this,arguments)}return Object(I.a)(n,[{key:"className",get:function(){return"utrecht-form-field-textbox utrecht-form-field-textbox--distanced"}},{key:"inputInfo",get:function(){var t=Object(C.a)(Object(N.a)(n.prototype),"inputInfo",this);return t.attr.class="utrecht-textbox",t}}]),n}(s.Formio.Components.components.number),password:function(t){Object(F.a)(n,t);var e=Object(w.a)(n);function n(){return Object(k.a)(this,n),e.apply(this,arguments)}return Object(I.a)(n,[{key:"className",get:function(){return"utrecht-form-field-textbox utrecht-form-field-textbox--distanced"}},{key:"inputInfo",get:function(){var t=Object(C.a)(Object(N.a)(n.prototype),"inputInfo",this);return t.attr.class="utrecht-textbox",t}}]),n}(s.Formio.Components.components.password),phoneNumber:function(t){Object(F.a)(n,t);var e=Object(w.a)(n);function n(){return Object(k.a)(this,n),e.apply(this,arguments)}return Object(I.a)(n,[{key:"className",get:function(){return"utrecht-form-field-textbox utrecht-form-field-textbox--distanced"}},{key:"inputInfo",get:function(){var t=Object(C.a)(Object(N.a)(n.prototype),"inputInfo",this);return t.attr.class="utrecht-textbox",t}}]),n}(s.Formio.Components.components.phoneNumber),radio:function(t){Object(F.a)(n,t);var e=Object(w.a)(n);function n(){return Object(k.a)(this,n),e.apply(this,arguments)}return Object(I.a)(n,[{key:"className",get:function(){return"utrecht-form-field-textbox utrecht-form-field-textbox--distanced"}},{key:"inputInfo",get:function(){var t=Object(C.a)(Object(N.a)(n.prototype),"inputInfo",this);return t.attr.class="utrecht-radio-button",t}}]),n}(s.Formio.Components.components.radio),textarea:function(t){Object(F.a)(n,t);var e=Object(w.a)(n);function n(){return Object(k.a)(this,n),e.apply(this,arguments)}return Object(I.a)(n,[{key:"className",get:function(){return"utrecht-form-field-textbox utrecht-form-field-textbox--distanced"}},{key:"inputInfo",get:function(){var t=Object(C.a)(Object(N.a)(n.prototype),"inputInfo",this);return t.attr.class="utrecht-textarea",t}}]),n}(s.Formio.Components.components.textarea),textfield:function(t){Object(F.a)(n,t);var e=Object(w.a)(n);function n(){return Object(k.a)(this,n),e.apply(this,arguments)}return Object(I.a)(n,[{key:"className",get:function(){return"utrecht-form-field-textbox utrecht-form-field-textbox--distanced"}},{key:"inputInfo",get:function(){var t=Object(C.a)(Object(N.a)(n.prototype),"inputInfo",this);return t.attr.class="utrecht-textbox",t}}]),n}(s.Formio.Components.components.textfield),time:function(t){Object(F.a)(n,t);var e=Object(w.a)(n);function n(){return Object(k.a)(this,n),e.apply(this,arguments)}return Object(I.a)(n,[{key:"className",get:function(){return"utrecht-form-field-textbox utrecht-form-field-textbox--distanced"}},{key:"inputInfo",get:function(){var t=Object(C.a)(Object(N.a)(n.prototype),"inputInfo",this);return t.attr.class="utrecht-textbox",t}}]),n}(s.Formio.Components.components.time),url:function(t){Object(F.a)(n,t);var e=Object(w.a)(n);function n(){return Object(k.a)(this,n),e.apply(this,arguments)}return Object(I.a)(n,[{key:"className",get:function(){return"utrecht-form-field-textbox utrecht-form-field-textbox--distanced"}},{key:"inputInfo",get:function(){var t=Object(C.a)(Object(N.a)(n.prototype),"inputInfo",this);return t.attr.class="utrecht-textbox",t}}]),n}(s.Formio.Components.components.url)},_={checkbox:{form:'<div class="utrecht-form-field" data-class="form-check checkbox">\n  <label data-class="{{ctx.input.labelClass}} form-check-label">\n    <{{ctx.input.type}}\n      ref="input"\n      {% for (var attr in ctx.input.attr) { %}\n      {{attr}}="{{ctx.input.attr[attr]}}"\n      {% } %}\n      {% if (ctx.checked) { %}checked=true{% } %}\n      aria-required="{{ctx.component.validate.required}}"\n      {% if (ctx.component.description) { %}\n      aria-describedby="d-{{ctx.instance.id}}-{{ctx.component.key}}"\n      {% } %}\n      >\n    {% if (!ctx.self.labelIsHidden()) { %}<span class="utrecht-form-label utrecht-form-label--checkbox">{{ctx.input.label}}</span>{% } %}\n    {% if (ctx.component.tooltip) { %}\n      <i ref="tooltip" tabindex="0" class="{{ctx.iconClass(\'question-sign\')}} text-muted" data-tooltip="{{ctx.component.tooltip}}"></i>\n    {% } %}\n    {{ctx.input.content}}\n    </{{ctx.input.type}}>\n  </label>\n</div>'},fieldset:{form:'<fieldset class="utrecht-form-fieldset">\n  {% if (ctx.component.legend) { %}\n  <legend ref="header" class="utrecht-form-fieldset__legend" data-class="{{ctx.component.collapsible ? \'formio-clickable\' : \'\'}}">\n    {{ctx.t(ctx.component.legend, { _userInput: true })}}\n    {% if (ctx.component.tooltip) { %}\n      <i ref="tooltip" tabindex="0" class="{{ctx.iconClass(\'question-sign\')}} text-muted" data-tooltip="{{ctx.component.tooltip}}"></i>\n    {% } %}\n  </legend>\n  {% } %}\n  {% if (!ctx.collapsed) { %}\n  <div class="fieldset-body" ref="{{ctx.nestedKey}}">\n    {{ctx.children}}\n  </div>\n  {% } %}\n</fieldset>'},label:{form:'\n<label\n  ref="label"\n  class="utrecht-form-label"\n  data-class="col-form-label {{ctx.label.className}}"\n  for="{{ctx.instance.id}}-{{ctx.component.key}}"\n  id="l-{{ctx.instance.id}}-{{ctx.component.key}}"\n>\n  {{ ctx.t(ctx.component.label, { _userInput: true }) }}\n  {% if (ctx.component.type === \'number\' || ctx.component.type === \'phoneNumber\' || ctx.component.type === \'currency\') { %}\n    <span class=\'sr-only\'>, {{ctx.t(\'numeric only\')}},</span>\n  {% } %}\n  {% if (ctx.component.tooltip) { %}\n    <i ref="tooltip" tabindex="0" class="{{ctx.iconClass(\'question-sign\')}} text-muted" data-tooltip="{{ctx.component.tooltip}}"></i>\n  {% } %}\n</label>\n'},radio:{form:'<div\n  class="utrecht-form-field-radio utrecht-form-field-radio--distanced"\n  data-class="form-radio radio"\n  ref="radioGroup"\n  role="{{ctx.component.type === \'selectboxes\' ? \'group\' : \'radiogroup\'}}"\n  aria-required="{{ctx.input.component.validate.required}}"\n  aria-labelledby="l-{{ctx.instance.id}}-{{ctx.component.key}}"\n  {% if (ctx.component.description) { %}\n    aria-describedby="d-{{ctx.instance.id}}-{{ctx.component.key}}"\n  {% } %}\n>\n  {% ctx.values.forEach(function(item) { %}\n  <div class="form-check{{ctx.inline ? \'-inline\' : \'\'}}" ref="wrapper">\n    <label class="utrecht-form-label utrecht-form-label--radio" data-class="form-check-label label-position-{{ ctx.component.optionsLabelPosition }}" for="{{ctx.id}}{{ctx.row}}-{{item.value}}">\n      {% if (ctx.component.optionsLabelPosition === \'left\' || ctx.component.optionsLabelPosition === \'top\') { %}\n      <span>{{ctx.t(item.label, { _userInput: true })}}</span>\n      {% } %}\n      <{{ctx.input.type}}\n        ref="input"\n        {% for (var attr in ctx.input.attr) { %}\n        {{attr}}="{{ctx.input.attr[attr]}}"\n        {% } %}\n        value="{{item.value}}"\n        {% if (ctx.value && (ctx.value === item.value || (typeof ctx.value === \'object\' && ctx.value.hasOwnProperty(item.value) && ctx.value[item.value]))) { %}\n          checked=true\n        {% } %}\n        {% if (item.disabled) { %}\n          disabled=true\n        {% } %}\n        id="{{ctx.id}}{{ctx.row}}-{{item.value}}"\n        role="{{ctx.component.type === \'selectboxes\' ? \'checkbox\' : \'radio\'}}"\n      >\n      {% if (!ctx.component.optionsLabelPosition || ctx.component.optionsLabelPosition === \'right\' || ctx.component.optionsLabelPosition === \'bottom\') { %}\n      <span>{{ctx.t(item.label, { _userInput: true })}}</span>\n      {% } %}\n    </label>\n  </div>\n  {% }) %}\n</div>'}};n(1122),n(1123);s.Formio.use({components:E}),s.Templates.current=_,a.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(h,{children:Object(f.jsx)(r.a,{children:Object(f.jsx)(v,{})})})}),document.getElementById("root")),g(console.log)}},[[1129,1,2]]]);
//# sourceMappingURL=main.0aa7719e.chunk.js.map