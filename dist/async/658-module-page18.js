(self.webpackChunkmy_react_ts=self.webpackChunkmy_react_ts||[]).push([[658,998],{8886:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var r=n(3804),s=n(8362),a=n.n(s),o=n(5575);class l extends r.Component{constructor(e){var t,n;super(e),n=e=>{var t=new WebSocket("ws://127.0.0.1:8022");this.log("连接服务器..."),t.onopen=e=>{this.log("服务器已连接...")},t.onerror=e=>{this.log("连接失败！")},t.onmessage=e=>{this.log("服务器: "+e.data)}},(t="connect")in this?Object.defineProperty(this,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):this[t]=n,this.state={msg:"服务器未连接"}}log(e){this.setState({msg:e})}render(){return React.createElement("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -50%)"}},React.createElement("div",{style:{textAlign:"center",fontSize:"28px",paddingBottom:"20px"}},this.state.msg),React.createElement(o.Z,{onClick:this.connect},"连接服务器"))}}const i=()=>React.createElement("div",{className:a().body},React.createElement(l,null))},893:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var r=n(3645),s=n.n(r)()(!1);s.push([e.id,"._3epzCuGumuiXAjFHnYONN4 {\r\n    position: relative;\r\n    height: 100%;\r\n    overflow: auto;\r\n}\r\n._1GwMZULarkSvJV6wJcDGlF {\r\n    position: absolute;\r\n    top: 40%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n._3g2ZKhQcY4iDnOEdh8kGZ7 {\r\n    font-size: larger;\r\n}",""]),s.locals={body:"_3epzCuGumuiXAjFHnYONN4",center:"_1GwMZULarkSvJV6wJcDGlF",data:"_3g2ZKhQcY4iDnOEdh8kGZ7"};const a=s},8362:(e,t,n)=>{var r=n(3379),s=n(893);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.id,s,""]]);r(s,{insert:"head",singleton:!1}),e.exports=s.locals||{}}}]);