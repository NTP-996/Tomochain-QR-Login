!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("axios"),require("@chenfengyuan/vue-qrcode")):"function"==typeof define&&define.amd?define(["exports","axios","@chenfengyuan/vue-qrcode"],t):t((e=e||self).TomoQrLogin={},e.axios,e.VueQrcode)}(this,function(e,t,n){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var i={name:"TomoQrLogin",components:{VueQrcode:n=n&&n.hasOwnProperty("default")?n.default:n},data:function(){return{qrCode:"text"}},props:{address:{type:String,required:!0},app:{type:String,required:!0}},created:async function(){var e=this,t=this.loginByQRCode();await t&&(this.interval=setInterval(async function(){await e.getLoginResult()},3e3))},mounted:function(){},methods:{loginByQRCode:async function(){var e=(await t.get("http://9b77992e.ngrok.io/api/auth/generateLoginQR")).data;return this.id=e.id,this.message=this.app+e.message,this.qrCode=encodeURI("tomochain:login?message="+this.message+"&submitURL="+e.url),!0},getLoginResult:async function(){var e=(await t.get("http://9b77992e.ngrok.io/api/auth/getLoginResult?id="+this.id)).data;!e.error&&e&&(this.address=e.user,this.$emit("success",this.address))}}};var o=function(e,t,n,i,o,a,s,r,d,l){"boolean"!=typeof s&&(d=r,r=s,s=!1);var u,c="function"==typeof n?n.options:n;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,o&&(c.functional=!0)),i&&(c._scopeId=i),a?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,d(e)),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=u):t&&(u=s?function(){t.call(this,l(this.$root.$options.shadowRoot))}:function(e){t.call(this,r(e))}),u)if(c.functional){var p=c.render;c.render=function(e,t){return u.call(t),p(e,t)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,u):[u]}return n},a="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var s=document.head||document.getElementsByTagName("head")[0],r={};var d=o({render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tomo-qr-login"},[t("div",{staticClass:"container"},[t("vue-qrcode",{staticClass:"img-fluid text-center text-lg-right",staticStyle:{height:"220px",width:"220px"},attrs:{options:{width:250},value:this.qrCode}})],1)])},staticRenderFns:[]},function(e){e&&e("data-v-459de381_0",{source:".tomo-qr-login[data-v-459de381]{display:block;width:400px;margin:25px auto;border:1px solid #ccc;background:#eaeaea;text-align:center;padding:25px}.tomo-qr-login p[data-v-459de381]{margin:0 0 1em}",map:void 0,media:void 0})},i,"data-v-459de381",!1,void 0,function(e){return function(e,t){return function(e,t){var n=a?t.media||"default":e,i=r[n]||(r[n]={ids:new Set,styles:[]});if(!i.ids.has(e)){i.ids.add(e);var o=t.source;if(t.map&&(o+="\n/*# sourceURL="+t.map.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),i.element||(i.element=document.createElement("style"),i.element.type="text/css",t.media&&i.element.setAttribute("media",t.media),s.appendChild(i.element)),"styleSheet"in i.element)i.styles.push(o),i.element.styleSheet.cssText=i.styles.filter(Boolean).join("\n");else{var d=i.ids.size-1,l=document.createTextNode(o),u=i.element.childNodes;u[d]&&i.element.removeChild(u[d]),u.length?i.element.insertBefore(l,u[d]):i.element.appendChild(l)}}}(e,t)}},void 0);function l(e){l.installed||(l.installed=!0,e.component("TomoQrLogin",d))}var u={install:l},c=null;"undefined"!=typeof window?c=window.Vue:"undefined"!=typeof global&&(c=global.Vue),c&&c.use(u),d.install=l,e.default=d,Object.defineProperty(e,"__esModule",{value:!0})});