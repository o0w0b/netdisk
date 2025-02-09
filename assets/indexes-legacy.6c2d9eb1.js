!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(E){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return C()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=k(a,r);if(u){if(u===h)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=f(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(E){return{type:"throw",arg:E}}}r.wrap=l;var h={};function d(){}function p(){}function v(){}var g={};s(g,a,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(S([])));m&&m!==n&&o.call(m,a)&&(g=m);var w=v.prototype=d.prototype=Object.create(g);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function b(e,r){function n(i,a,u,c){var s=f(e[i],e,a);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==t(h)&&o.call(h,"__await")?r.resolve(h.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):r.resolve(h).then((function(t){l.value=t,u(l)}),(function(t){return n("throw",t,u,c)}))}c(s.arg)}var i;this._invoke=function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}}function k(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function S(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:C}}function C(){return{value:void 0,done:!0}}return p.prototype=v,s(w,"constructor",v),s(v,"constructor",p),p.displayName=s(v,c,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},r.awrap=function(t){return{__await:t}},x(b.prototype),s(b.prototype,u,(function(){return this})),r.AsyncIterator=b,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new b(l(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),s(w,c,"Generator"),s(w,a,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},r.values=S,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},r}function r(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void r(s)}u.done?e(c):Promise.resolve(c).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function u(t){r(a,o,i,u,c,"next",t)}function c(t){r(a,o,i,u,c,"throw",t)}u(void 0)}))}}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,u=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}System.register(["./index-legacy.d83c43d7.js","./index-legacy.62b5cf41.js","./Common-legacy.ef5ac309.js","./useTitle-legacy.63f34cfa.js","./index-legacy.b8cd8e7e.js","./index-legacy.182652ad.js","./SettingItem-legacy.34e45e38.js","./item_type-legacy.4bd28ded.js","./ResponsiveGrid-legacy.4fec529b.js"],(function(t){"use strict";var r,i,a,u,c,s,l,f,h,d,p,v,g,y,m,w,x,b,k,L,_,j,S,C,E,$,N,O,I,A,G,T,P,z,M;return{setters:[function(t){r=t.c$,i=t.an,a=t.a,u=t.m,c=t.a$,s=t.be,l=t.e,f=t.dA,h=t.dB,d=t.aP,p=t.h,v=t.bQ,g=t.S,y=t.aj,m=t.Y,w=t.aC,x=t.a7,b=t.a6,k=t.aE,L=t.cm,_=t.d2,j=t.C,S=t.D,C=t.M,E=t.y,$=t.bi,N=t.z,O=t.A,I=t.T,A=t.I,G=t.B,T=t.bf,P=t.b2},function(t){z=t.G},function(t){M=t.default},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var B=i('<svg width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" stroke-opacity=".3" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.3s" values="60;0"></animate></path><path stroke-dasharray="15" stroke-dashoffset="15" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"></animate><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></path></g></svg>'),F=i('<svg width="1em" height="1em" viewBox="0 0 24 24"><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path fill="currentColor" fill-opacity="0" stroke-dasharray="60" stroke-dashoffset="60" d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"></animate><animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.15s" values="0;0.3"></animate></path><path fill="none" stroke-dasharray="14" stroke-dashoffset="14" d="M8 12L11 15L16 10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;0"></animate></path></g></svg>');function Y(t){return e=B.cloneNode(!0),r(e,t,!0,!0),e;var e}function D(t){return e=F.cloneNode(!0),r(e,t,!0,!0),e;var e}t("default",(function(){var t=a(),r=o(u(),2),i=r[0],B=r[1],F=o(c((function(){return s.get("/admin/index/progress")})),2),Z=F[0],Q=F[1],R=function(){var t=n(e().mark((function t(){var r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Q();case 2:r=t.sent,T(r,(function(t){B(t)}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),U=setInterval(R,5e3);l((function(){return clearInterval(U)})),R();var X,q,H=o(c(f),2),J=H[0],K=H[1],V=function(){var t=n(e().mark((function t(){var r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,K();case 2:r=t.sent,P(r),R();case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),W=o(c((function(){return s.post("/admin/index/clear")})),2),tt=W[0],et=W[1],rt=function(){var t=n(e().mark((function t(){var r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,et();case 2:r=t.sent,P(r),R();case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),nt=o(c((function(){return s.post("/admin/index/stop")})),2),ot=nt[0],it=nt[1],at=function(){var t=n(e().mark((function t(){var r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,it();case 2:r=t.sent,P(r),R();case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),ut=o(c(h),2),ct=ut[0],st=ut[1],lt=function(){var t=n(e().mark((function t(){var r,n,o;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],X.value&&(r=X.value.split("\n")),n=20,q.value&&(n=parseInt(q.value)),t.next=6,st(r,n);case 6:o=t.sent,P(o),R();case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),ft=d(),ht=ft.isOpen,dt=ft.onOpen,pt=ft.onClose;return p(x,{spacing:"$2",w:"$full",alignItems:"start",get children(){return[p(v,{get children(){return t("manage.sidemenu.settings")}}),p(M,{get group(){return z.INDEX}}),p(v,{get children(){return t("indexes.current")}}),p(g,{get when(){return i()},get children(){return p(y,{spacing:"$2",w:"fit-content",shadow:"$md",rounded:"$lg",get bg(){return m("","$neutral3")()},get children(){return[p(w,{boxSize:"$28",color:"$accent9",p:"$2",get as(){var t;return null!==(t=i())&&void 0!==t&&t.is_done?D:Y}}),p(x,{spacing:"$2",flex:"1",alignItems:"start",mr:"$2",get children(){return[p(b,{get children(){return[k((function(){return t("indexes.obj_count")})),":",p(L,{colorScheme:"info",ml:"$2",get children(){var t;return null===(t=i())||void 0===t?void 0:t.obj_count}})]}}),p(b,{get children(){return[k((function(){return t("indexes.last_done_time")})),":",p(L,{colorScheme:"accent",ml:"$2",get children(){return k((function(){return!!i().last_done_time}),!0)()?_(i().last_done_time):t("indexes.unknown")}})]}}),p(g,{get when(){var t;return null===(t=i())||void 0===t?void 0:t.error},get children(){return p(b,{css:{wordBreak:"break-all"},get children(){return[k((function(){return t("indexes.error")})),":",p(L,{colorScheme:"danger",ml:"$2",get children(){return i().error}})]}})}})]}})]}})}}),p(y,{spacing:"$2",get children(){return[p(j,{colorScheme:"accent",onClick:[R,void 0],get loading(){return Z()},get children(){return t("global.refresh")}}),p(j,{colorScheme:"danger",onClick:[rt,void 0],get loading(){return tt()},get children(){return t("indexes.clear")}}),p(j,{colorScheme:"warning",onClick:[at,void 0],get loading(){return ot()},get children(){return t("indexes.stop")}}),p(j,{onClick:[V,void 0],get loading(){return J()},get children(){var e;return t("indexes.".concat(null!==(e=i())&&void 0!==e&&e.is_done?"rebuild":"build"))}})]}}),p(j,{onClick:dt,get children(){return t("indexes.update")}}),p(S,{get opened(){return ht()},onClose:pt,get children(){return[p(C,{}),p(E,{get children(){return[p($,{}),p(N,{get children(){return t("indexes.update")}}),p(O,{get children(){return[p(v,{get children(){return t("indexes.paths_to_update")}}),p(I,{ref:function(t){"function"==typeof X?X(t):X=t}}),p(v,{get children(){return t("indexes.max_depth")}}),p(A,{value:20,type:"number",ref:function(t){"function"==typeof q?q(t):q=t}})]}}),p(G,{get children(){return p(j,{onClick:[lt,void 0],get loading(){return ct()},get children(){return t("indexes.update")}})}})]}})]}})]}})}))}}}))}();
