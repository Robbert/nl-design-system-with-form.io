(this["webpackJsonpreact-app-starterkit"]=this["webpackJsonpreact-app-starterkit"]||[]).push([[0],{1121:function(t,e,n){},1129:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),r=n(326),i=n(323),a=n.n(i),s=n(5),u=function(t){return window.location.search.substr(1).split("&").forEach((function(e){t[e.split("=")[0]]=e.split("=")[1]&&decodeURIComponent(e.split("=")[1])})),t}({}),l={projectUrl:u.projectUrl||"https://tgbtohcsdunxdpv.form.io",apiUrl:u.apiUrl||"https://api.form.io"},p=["utrecht-article","utrecht-badge-counter","utrecht-badge-data","utrecht-badge-status","utrecht-breadcrumb","utrecht-button","utrecht-checkbox","utrecht-document","utrecht-form-field-checkbox","utrecht-form-field-textbox","utrecht-heading","utrecht-heading-1","utrecht-heading-2","utrecht-heading-3","utrecht-heading-4","utrecht-heading-5","utrecht-heading-6","utrecht-html-content","utrecht-icon-facebook","utrecht-icon-instagram","utrecht-icon-linkedin","utrecht-icon-twitter","utrecht-icon-whatsapp","utrecht-logo","utrecht-page-footer","utrecht-pagination","utrecht-paragraph","utrecht-separator","utrecht-sidenav","utrecht-textbox"];s.Formio.setProjectUrl(l.projectUrl),s.Formio.setBaseUrl(l.apiUrl);var b=n(81),d=n(91),h=n(2),m=o.a.createContext(),f={init:!1,isActive:!1,user:null,authenticated:!1,submissionAccess:{},formAccess:{},projectAccess:{},roles:{},is:{},error:""},x=Object(s.auth)();function j(t){var e=o.a.useReducer(x,f),n=Object(d.a)(e,2),c=n[0],r=n[1],i=o.a.useMemo((function(){return[c,r]}),[c]);return Object(h.jsx)(m.Provider,Object(b.a)({value:i},t))}function O(){var t=o.a.useContext(m);if(!t)throw new Error("useAuth must be used within a AuthProvider");var e=Object(d.a)(t,2);return{state:e[0],dispatch:e[1]}}var y=function(t){var e=t.style,n=void 0===e?{width:"60px",height:"60px",marginLeft:"calc(50% - 60px)",marginTop:"40px"}:e,c=t.textClass;return Object(h.jsx)("div",{className:"spinner-border ".concat(c||"text-primary"),style:n,role:"status",children:Object(h.jsx)("span",{className:"sr-only",children:"Loading..."})})},g=function(t){var e=t.width,n=t.height,c=t.className,o=t.children,r={position:"absolute",top:"50%",width:e||"180px",height:n||"100px",left:"50%",transform:"translate(-50%, -50%)",boxShadow:"0px 0px 22px rgba(0, 0, 0, 0.4)",zIndex:"1001",fontSize:"16px"};return Object(h.jsx)("div",{className:"overlay",style:{height:"100vh",width:"100%",position:"absolute",zIndex:"1000",backgroundColor:"rgba(0, 0, 0, 0.5)"},children:Object(h.jsx)("div",{className:c,style:r,children:o})})},v=n(1134);n(1121);var k=function(){var t=O(),e=t.dispatch,n=t.state.isActive;return Object(c.useEffect)((function(){Object(s.initAuth)()(e)}),[e]),Object(c.useEffect)((function(){var t=document.createElement("script");t.src="https://unpkg.com/@utrecht/web-component-library-stencil@latest/dist/utrecht/utrecht.esm.js",t.type="module",document.body.appendChild(t)}),[]),Object(h.jsxs)(h.Fragment,{children:[n?Object(h.jsx)(g,{className:"alert alert-info",children:Object(h.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[Object(h.jsx)(y,{style:{marginBottom:" 10px"}}),"Logging In..."]})}):null,Object(h.jsxs)(v.a,{children:[Object(h.jsx)(v.b,{children:"NL Design System with form.io"}),Object(h.jsx)("link",{rel:"stylesheet",href:"https://unpkg.com/@nl-design-system-unstable/amsterdam-design-tokens/dist/theme/index.css"}),Object(h.jsx)("link",{rel:"stylesheet",href:"https://unpkg.com/@nl-design-system-unstable/rijkshuisstijl-design-tokens/dist/theme/index.css"}),Object(h.jsx)("link",{rel:"stylesheet",href:"https://unpkg.com/@nl-design-system-unstable/duo-design-tokens/dist/theme/index.css"}),Object(h.jsx)("link",{rel:"stylesheet",type:"text/css",href:"https://unpkg.com/@utrecht/design-tokens/dist/theme/index.css"}),Object(h.jsxs)("div",{className:"theme-switcher",children:[Object(h.jsx)("label",{htmlFor:"theme",children:"Theme:"}),Object(h.jsxs)("select",{id:"theme",onChange:function(t){return document.documentElement.className=t.target.value},children:[Object(h.jsx)("option",{value:"duo-theme",children:"DUO"}),Object(h.jsx)("option",{value:"amsterdam-theme",children:"Gemeente Amsterdam"}),Object(h.jsx)("option",{value:"utrecht-theme",selected:!0,children:"Gemeente Utrecht"})]})]}),Object(h.jsx)(s.Form,{src:"".concat(l.projectUrl,"/test"),options:{sanitizeConfig:{addTags:p}}}),Object(h.jsx)(v.c,{children:"\xa9 2021 Robbert Broersma"})]})]})},I=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,1135)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),o(t),r(t),i(t)}))},C=n(15),N=n(17),F=n(16),w=function(t){Object(N.a)(n,t);var e=Object(F.a)(n);function n(){return Object(C.a)(this,n),e.apply(this,arguments)}return n}(s.Formio.Components.components.button),L=n(20),P=n(22),U=n(14),A=function(t){Object(N.a)(n,t);var e=Object(F.a)(n);function n(){return Object(C.a)(this,n),e.apply(this,arguments)}return Object(L.a)(n,[{key:"className",get:function(){return"utrecht-form-field-textbox utrecht-form-field-textbox--distanced"}},{key:"inputInfo",get:function(){var t=Object(P.a)(Object(U.a)(n.prototype),"inputInfo",this);return t.attr.class="utrecht-checkbox",t}}]),n}(s.Formio.Components.components.checkbox),q=function(t){Object(N.a)(n,t);var e=Object(F.a)(n);function n(){return Object(C.a)(this,n),e.apply(this,arguments)}return Object(L.a)(n,[{key:"className",get:function(){return"utrecht-form-field-textbox utrecht-form-field-textbox--distanced"}},{key:"inputInfo",get:function(){var t=Object(P.a)(Object(U.a)(n.prototype),"inputInfo",this);return t.attr.class="utrecht-textbox",t}}]),n}(s.Formio.Components.components.currency),E=function(t){Object(N.a)(n,t);var e=Object(F.a)(n);function n(){return Object(C.a)(this,n),e.apply(this,arguments)}return Object(L.a)(n,[{key:"className",get:function(){return"utrecht-form-field-textbox utrecht-form-field-textbox--distanced"}},{key:"inputInfo",get:function(){var t=Object(P.a)(Object(U.a)(n.prototype),"inputInfo",this);return t.attr.class="utrecht-textbox",t}}]),n}(s.Formio.Components.components.datetime),T=function(t){Object(N.a)(n,t);var e=Object(F.a)(n);function n(){return Object(C.a)(this,n),e.apply(this,arguments)}return Object(L.a)(n,[{key:"className",get:function(){return"utrecht-form-field-textbox utrecht-form-field-textbox--distanced"}},{key:"inputInfo",get:function(){var t=Object(P.a)(Object(U.a)(n.prototype),"inputInfo",this);return t.attr.class="utrecht-textbox",t}}]),n}(s.Formio.Components.components.email),_={button:w,checkbox:A,content:function(t){Object(N.a)(n,t);var e=Object(F.a)(n);function n(){return Object(C.a)(this,n),e.apply(this,arguments)}return Object(L.a)(n,[{key:"init",value:function(){Object(P.a)(Object(U.a)(n.prototype),"init",this).call(this),this.component.customClass="utrecht-html"}}]),n}(s.Formio.Components.components.content),currency:q,datetime:E,email:T,number:function(t){Object(N.a)(n,t);var e=Object(F.a)(n);function n(){return Object(C.a)(this,n),e.apply(this,arguments)}return Object(L.a)(n,[{key:"className",get:function(){return"utrecht-form-field-textbox utrecht-form-field-textbox--distanced"}},{key:"inputInfo",get:function(){var t=Object(P.a)(Object(U.a)(n.prototype),"inputInfo",this);return t.attr.class="utrecht-textbox",t}}]),n}(s.Formio.Components.components.number),password:function(t){Object(N.a)(n,t);var e=Object(F.a)(n);function n(){return Object(C.a)(this,n),e.apply(this,arguments)}return Object(L.a)(n,[{key:"className",get:function(){return"utrecht-form-field-textbox utrecht-form-field-textbox--distanced"}},{key:"inputInfo",get:function(){var t=Object(P.a)(Object(U.a)(n.prototype),"inputInfo",this);return t.attr.class="utrecht-textbox",t}}]),n}(s.Formio.Components.components.password),phoneNumber:function(t){Object(N.a)(n,t);var e=Object(F.a)(n);function n(){return Object(C.a)(this,n),e.apply(this,arguments)}return Object(L.a)(n,[{key:"className",get:function(){return"utrecht-form-field-textbox utrecht-form-field-textbox--distanced"}},{key:"inputInfo",get:function(){var t=Object(P.a)(Object(U.a)(n.prototype),"inputInfo",this);return t.attr.class="utrecht-textbox",t}}]),n}(s.Formio.Components.components.phoneNumber),radio:function(t){Object(N.a)(n,t);var e=Object(F.a)(n);function n(){return Object(C.a)(this,n),e.apply(this,arguments)}return Object(L.a)(n,[{key:"className",get:function(){return"utrecht-form-field-textbox utrecht-form-field-textbox--distanced"}},{key:"inputInfo",get:function(){var t=Object(P.a)(Object(U.a)(n.prototype),"inputInfo",this);return t.attr.class="utrecht-radio-button",t}}]),n}(s.Formio.Components.components.radio),textarea:function(t){Object(N.a)(n,t);var e=Object(F.a)(n);function n(){return Object(C.a)(this,n),e.apply(this,arguments)}return Object(L.a)(n,[{key:"className",get:function(){return"utrecht-form-field-textbox utrecht-form-field-textbox--distanced"}},{key:"inputInfo",get:function(){var t=Object(P.a)(Object(U.a)(n.prototype),"inputInfo",this);return t.attr.class="utrecht-textarea",t}}]),n}(s.Formio.Components.components.textarea),textfield:function(t){Object(N.a)(n,t);var e=Object(F.a)(n);function n(){return Object(C.a)(this,n),e.apply(this,arguments)}return Object(L.a)(n,[{key:"className",get:function(){return"utrecht-form-field-textbox utrecht-form-field-textbox--distanced"}},{key:"inputInfo",get:function(){var t=Object(P.a)(Object(U.a)(n.prototype),"inputInfo",this);return t.attr.class="utrecht-textbox",t}}]),n}(s.Formio.Components.components.textfield),time:function(t){Object(N.a)(n,t);var e=Object(F.a)(n);function n(){return Object(C.a)(this,n),e.apply(this,arguments)}return Object(L.a)(n,[{key:"className",get:function(){return"utrecht-form-field-textbox utrecht-form-field-textbox--distanced"}},{key:"inputInfo",get:function(){var t=Object(P.a)(Object(U.a)(n.prototype),"inputInfo",this);return t.attr.class="utrecht-textbox",t}}]),n}(s.Formio.Components.components.time),url:function(t){Object(N.a)(n,t);var e=Object(F.a)(n);function n(){return Object(C.a)(this,n),e.apply(this,arguments)}return Object(L.a)(n,[{key:"className",get:function(){return"utrecht-form-field-textbox utrecht-form-field-textbox--distanced"}},{key:"inputInfo",get:function(){var t=Object(P.a)(Object(U.a)(n.prototype),"inputInfo",this);return t.attr.class="utrecht-textbox",t}}]),n}(s.Formio.Components.components.url)},B={button:{form:'<utrecht-button\n  ref="button"\n  {% for (var attr in ctx.input.attr) { %}\n  {{attr}}="{{ctx.input.attr[attr]}}"\n  {% } %}\n  {% if (ctx.component.description) { %}\n    aria-describedby="d-{{ctx.instance.id}}-{{ctx.component.key}}"\n  {% } %}\n>\n{% if (ctx.component.leftIcon) { %}<span class="{{ctx.component.leftIcon}}"></span>&nbsp;{% } %}\n{{ctx.input.content}}\n{% if (ctx.component.tooltip) { %}\n  <i ref="tooltip" class="{{ctx.iconClass(\'question-sign\')}} text-muted" data-tooltip="{{ctx.component.tooltip}}"></i>\n{% } %}\n{% if (ctx.component.rightIcon) { %}&nbsp;<span class="{{ctx.component.rightIcon}}"></span>{% } %}\n</utrecht-button>\n<div ref="buttonMessageContainer">\n  <span class="help-block" ref="buttonMessage"></span>\n</div>'},checkbox:{form:'<div class="utrecht-form-field" data-class="form-check checkbox">\n  <label data-class="{{ctx.input.labelClass}} form-check-label">\n    <{{ctx.input.type}}\n      ref="input"\n      {% for (var attr in ctx.input.attr) { %}\n      {{attr}}="{{ctx.input.attr[attr]}}"\n      {% } %}\n      {% if (ctx.checked) { %}checked=true{% } %}\n      aria-required="{{ctx.component.validate.required}}"\n      {% if (ctx.component.description) { %}\n      aria-describedby="d-{{ctx.instance.id}}-{{ctx.component.key}}"\n      {% } %}\n      >\n    {% if (!ctx.self.labelIsHidden()) { %}<span class="utrecht-form-label utrecht-form-label--checkbox">{{ctx.input.label}}</span>{% } %}\n    {% if (ctx.component.tooltip) { %}\n      <i ref="tooltip" tabindex="0" class="{{ctx.iconClass(\'question-sign\')}} text-muted" data-tooltip="{{ctx.component.tooltip}}"></i>\n    {% } %}\n    {{ctx.input.content}}\n    </{{ctx.input.type}}>\n  </label>\n</div>'},fieldset:{form:'<fieldset class="utrecht-form-fieldset">\n  {% if (ctx.component.legend) { %}\n  <legend ref="header" class="utrecht-form-fieldset__legend" data-class="{{ctx.component.collapsible ? \'formio-clickable\' : \'\'}}">\n    {{ctx.t(ctx.component.legend, { _userInput: true })}}\n    {% if (ctx.component.tooltip) { %}\n      <i ref="tooltip" tabindex="0" class="{{ctx.iconClass(\'question-sign\')}} text-muted" data-tooltip="{{ctx.component.tooltip}}"></i>\n    {% } %}\n  </legend>\n  {% } %}\n  {% if (!ctx.collapsed) { %}\n  <div class="fieldset-body" ref="{{ctx.nestedKey}}">\n    {{ctx.children}}\n  </div>\n  {% } %}\n</fieldset>'},label:{form:'\n<label\n  ref="label"\n  class="utrecht-form-label"\n  data-class="col-form-label {{ctx.label.className}}"\n  for="{{ctx.instance.id}}-{{ctx.component.key}}"\n  id="l-{{ctx.instance.id}}-{{ctx.component.key}}"\n>\n  {{ ctx.t(ctx.component.label, { _userInput: true }) }}\n  {% if (ctx.component.type === \'number\' || ctx.component.type === \'phoneNumber\' || ctx.component.type === \'currency\') { %}\n    <span class=\'sr-only\'>, {{ctx.t(\'numeric only\')}},</span>\n  {% } %}\n  {% if (ctx.component.tooltip) { %}\n    <i ref="tooltip" tabindex="0" class="{{ctx.iconClass(\'question-sign\')}} text-muted" data-tooltip="{{ctx.component.tooltip}}"></i>\n  {% } %}\n</label>\n'},radio:{form:'<div\n  class="utrecht-form-field-radio utrecht-form-field-radio--distanced"\n  data-class="form-radio radio"\n  ref="radioGroup"\n  role="{{ctx.component.type === \'selectboxes\' ? \'group\' : \'radiogroup\'}}"\n  aria-required="{{ctx.input.component.validate.required}}"\n  aria-labelledby="l-{{ctx.instance.id}}-{{ctx.component.key}}"\n  {% if (ctx.component.description) { %}\n    aria-describedby="d-{{ctx.instance.id}}-{{ctx.component.key}}"\n  {% } %}\n>\n  {% ctx.values.forEach(function(item) { %}\n  <div class="form-check{{ctx.inline ? \'-inline\' : \'\'}}" ref="wrapper">\n    <label class="utrecht-form-label utrecht-form-label--radio" data-class="form-check-label label-position-{{ ctx.component.optionsLabelPosition }}" for="{{ctx.id}}{{ctx.row}}-{{item.value}}">\n      {% if (ctx.component.optionsLabelPosition === \'left\' || ctx.component.optionsLabelPosition === \'top\') { %}\n      <span>{{ctx.t(item.label, { _userInput: true })}}</span>\n      {% } %}\n      <{{ctx.input.type}}\n        ref="input"\n        {% for (var attr in ctx.input.attr) { %}\n        {{attr}}="{{ctx.input.attr[attr]}}"\n        {% } %}\n        value="{{item.value}}"\n        {% if (ctx.value && (ctx.value === item.value || (typeof ctx.value === \'object\' && ctx.value.hasOwnProperty(item.value) && ctx.value[item.value]))) { %}\n          checked=true\n        {% } %}\n        {% if (item.disabled) { %}\n          disabled=true\n        {% } %}\n        id="{{ctx.id}}{{ctx.row}}-{{item.value}}"\n        role="{{ctx.component.type === \'selectboxes\' ? \'checkbox\' : \'radio\'}}"\n      >\n      {% if (!ctx.component.optionsLabelPosition || ctx.component.optionsLabelPosition === \'right\' || ctx.component.optionsLabelPosition === \'bottom\') { %}\n      <span>{{ctx.t(item.label, { _userInput: true })}}</span>\n      {% } %}\n    </label>\n  </div>\n  {% }) %}\n</div>'}};n(1122),n(1123);s.Formio.use({components:_}),s.Templates.current=B,a.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(j,{children:Object(h.jsx)(r.a,{children:Object(h.jsx)(k,{})})})}),document.getElementById("root")),I(console.log)}},[[1129,1,2]]]);
//# sourceMappingURL=main.e9b09e1d.chunk.js.map