(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){"use strict";n.r(t);var r=n(44),a=n(23),i=n(0);function c(e,t,n,r,a,i,c){try{var o=e[i](c),l=o.value}catch(e){return void n(e)}o.done?t(l):Promise.resolve(l).then(r,a)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){c(i,r,a,o,l,"next",e)}function l(e){c(i,r,a,o,l,"throw",e)}o(void 0)}))}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class s extends i.Component{constructor(e){var t;super(e),t=this,l(this,"blob2Base64",()=>{var e=document.createElement("input");e.type="file",e.multiple=!0,e.onchange=function(){var e=o((function*(e){var n=e.target.files,a=yield r.encode.Blob2Base64(n[0]);t.setState({msg:a})}));return function(t){return e.apply(this,arguments)}}(),e.click()}),l(this,"saveAsFile",o((function*(){var e=t.state.msg;if(""!==e){var n="data: application/octet-stream; base64,".concat(e),r=yield(yield fetch(n)).blob(),a=URL.createObjectURL(r);t.setState({objectURL:a});var i=document.createElement("a");i.href=a,i.download="file.txt",i.click()}}))),l(this,"string2Base64",o((function*(){var e=t.input.current.value,n=yield r.encode.String2Base64(e);t.setState({msg:n})}))),l(this,"input",Object(i.createRef)()),this.state={msg:"",objectURL:""}}render(){return React.createElement("div",null,React.createElement("div",{style:{whiteSpace:"break-spaces",wordBreak:"break-all"}},this.state.msg),React.createElement("hr",null),React.createElement(a.a,{onClick:this.blob2Base64},"Blob2Base64"),React.createElement("div",{style:{padding:"20px 0"}},React.createElement("input",{placeholder:"要编码的字符串",ref:this.input,style:{fontSize:"28px",width:"50vw"}}),React.createElement("br",null),React.createElement(a.a,{onClick:this.string2Base64},"String2Base64")),React.createElement("div",null,this.state.objectURL," "),React.createElement("hr",null),React.createElement(a.a,{onClick:this.saveAsFile},"保存为文件"),React.createElement("br",null),React.createElement("a",{target:"_blank",href:"https://www.sojson.com/base64.html",style:{fontSize:"28px"}},"Base64验证"))}}t.default=()=>React.createElement("div",{style:{textAlign:"center"}},React.createElement(s,null))},44:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),a(n(45),t)},45:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.encode=void 0,t.encode=n(46)},46:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function c(e){try{l(r.next(e))}catch(e){i(e)}}function o(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,o)}l((r=r.apply(e,t||[])).next())}))};function a(e){for(var t="",n=new Uint8Array(e),r=n.byteLength,a=0;a<r;a++)t+=r-a>70?String.fromCharCode(n[a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a],n[++a]):r-a>5?String.fromCharCode(n[a],n[++a],n[++a],n[++a],n[++a]):String.fromCharCode(n[a]);return window.btoa(t)}function i(e){return r(this,void 0,void 0,(function*(){return a(yield e.arrayBuffer())}))}Object.defineProperty(t,"__esModule",{value:!0}),t.String2Base64=t.Blob2Base64=t.ArrayBuffer2Base64=void 0,t.ArrayBuffer2Base64=a,t.Blob2Base64=i,t.String2Base64=function(e){return r(this,void 0,void 0,(function*(){return i(new Blob([e]))}))}}}]);