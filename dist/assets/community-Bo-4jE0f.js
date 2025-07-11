/* empty css              */(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const Rh=()=>{};var ua={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},bh=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],u=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Lc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,u=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,g=o>>2,I=(o&3)<<4|u>>4;let T=(u&15)<<2|d>>6,R=d&63;h||(R=64,a||(T=64)),r.push(e[g],e[I],e[T],e[R])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Oc(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):bh(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],u=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const I=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||u==null||d==null||I==null)throw new xh;const T=o<<2|u>>4;if(r.push(T),d!==64){const R=u<<4&240|d>>2;if(r.push(R),I!==64){const C=d<<6&192|I;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class xh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ch=function(n){const t=Oc(n);return Lc.encodeByteArray(t,!0)},Ar=function(n){return Ch(n).replace(/\./g,"")},Ph=function(n){try{return Lc.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh=()=>Dh().__FIREBASE_DEFAULTS__,kh=()=>{if(typeof process>"u"||typeof ua>"u")return;const n=ua.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Nh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Ph(n[1]);return t&&JSON.parse(t)},di=()=>{try{return Rh()||Vh()||kh()||Nh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Mh=n=>{var t,e;return(e=(t=di())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Oh=n=>{const t=Mh(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Fc=()=>{var n;return(n=di())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Fh(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ar(JSON.stringify(e)),Ar(JSON.stringify(a)),""].join(".")}const Sn={};function Uh(){const n={prod:[],emulator:[]};for(const t of Object.keys(Sn))Sn[t]?n.emulator.push(t):n.prod.push(t);return n}function jh(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let la=!1;function $h(n,t){if(typeof window>"u"||typeof document>"u"||!fi(window.location.host)||Sn[n]===t||Sn[n]||la)return;Sn[n]=t;function e(T){return`__firebase__banner__${T}`}const r="__firebase__banner",o=Uh().prod.length>0;function a(){const T=document.getElementById(r);T&&T.remove()}function u(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function h(T,R){T.setAttribute("width","24"),T.setAttribute("id",R),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function d(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{la=!0,a()},T}function g(T,R){T.setAttribute("id",R),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function I(){const T=jh(r),R=e("text"),C=document.getElementById(R)||document.createElement("span"),V=e("learnmore"),P=document.getElementById(V)||document.createElement("a"),j=e("preprendIcon"),L=document.getElementById(j)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const $=T.element;u($),g(P,V);const Y=d();h(L,j),$.append(L,C,P,Y),document.body.appendChild($)}o?(C.innerText="Preview backend disconnected.",L.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(L.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",I):I()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hh(){var n;const t=(n=di())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function zh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Gh(){return!Hh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Bc(){try{return typeof indexedDB=="object"}catch{return!1}}function Uc(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}function Wh(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh="FirebaseError";class ve extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Kh,Object.setPrototypeOf(this,ve.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Br.prototype.create)}}class Br{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?Qh(o,r):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new ve(s,u,r)}}function Qh(n,t){return n.replace(Jh,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Jh=/\{\$([^}]+)}/g;function Dn(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(ha(o)&&ha(a)){if(!Dn(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function ha(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh=1e3,Yh=2,Zh=4*60*60*1e3,td=.5;function da(n,t=Xh,e=Yh){const r=t*Math.pow(e,n),s=Math.round(td*r*(Math.random()-.5)*2);return Math.min(Zh,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(n){return n&&n._delegate?n._delegate:n}class Yt{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Lh;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t?.identifier),s=(e=t?.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(rd(t))try{this.getOrInitializeService({instanceIdentifier:xe})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=xe){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=xe){return this.instances.has(t)}getOptions(t=xe){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nd(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=xe){return this.component?this.component.multipleInstances?t:xe:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nd(n){return n===xe?void 0:n}function rd(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new ed(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(G||(G={}));const id={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},od=G.INFO,ad={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},cd=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=ad[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class mi{constructor(t){this.name=t,this._logLevel=od,this._logHandler=cd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in G))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?id[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...t),this._logHandler(this,G.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...t),this._logHandler(this,G.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,G.INFO,...t),this._logHandler(this,G.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,G.WARN,...t),this._logHandler(this,G.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...t),this._logHandler(this,G.ERROR,...t)}}const ud=(n,t)=>t.some(e=>n instanceof e);let fa,ma;function ld(){return fa||(fa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hd(){return ma||(ma=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jc=new WeakMap,$s=new WeakMap,$c=new WeakMap,Cs=new WeakMap,pi=new WeakMap;function dd(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(ae(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&jc.set(e,n)}).catch(()=>{}),pi.set(t,n),t}function fd(n){if($s.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});$s.set(n,t)}let qs={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return $s.get(n);if(t==="objectStoreNames")return n.objectStoreNames||$c.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ae(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function md(n){qs=n(qs)}function pd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Ps(this),t,...e);return $c.set(r,t.sort?t.sort():[t]),ae(r)}:hd().includes(n)?function(...t){return n.apply(Ps(this),t),ae(jc.get(this))}:function(...t){return ae(n.apply(Ps(this),t))}}function gd(n){return typeof n=="function"?pd(n):(n instanceof IDBTransaction&&fd(n),ud(n,ld())?new Proxy(n,qs):n)}function ae(n){if(n instanceof IDBRequest)return dd(n);if(Cs.has(n))return Cs.get(n);const t=gd(n);return t!==n&&(Cs.set(n,t),pi.set(t,n)),t}const Ps=n=>pi.get(n);function qc(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),u=ae(a);return r&&a.addEventListener("upgradeneeded",h=>{r(ae(a.result),h.oldVersion,h.newVersion,ae(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const yd=["get","getKey","getAll","getAllKeys","count"],_d=["put","add","delete","clear"],Ds=new Map;function pa(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Ds.get(t))return Ds.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=_d.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||yd.includes(e)))return;const o=async function(a,...u){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[e](...u),s&&h.done]))[0]};return Ds.set(t,o),o}md(n=>({...n,get:(t,e,r)=>pa(t,e)||n.get(t,e,r),has:(t,e)=>!!pa(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(vd(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function vd(n){const t=n.getComponent();return t?.type==="VERSION"}const Hs="@firebase/app",ga="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new mi("@firebase/app"),Id="@firebase/app-compat",Td="@firebase/analytics-compat",wd="@firebase/analytics",Ad="@firebase/app-check-compat",Sd="@firebase/app-check",Rd="@firebase/auth",bd="@firebase/auth-compat",xd="@firebase/database",Cd="@firebase/data-connect",Pd="@firebase/database-compat",Dd="@firebase/functions",Vd="@firebase/functions-compat",kd="@firebase/installations",Nd="@firebase/installations-compat",Md="@firebase/messaging",Od="@firebase/messaging-compat",Ld="@firebase/performance",Fd="@firebase/performance-compat",Bd="@firebase/remote-config",Ud="@firebase/remote-config-compat",jd="@firebase/storage",$d="@firebase/storage-compat",qd="@firebase/firestore",Hd="@firebase/ai",zd="@firebase/firestore-compat",Gd="firebase",Wd="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs="[DEFAULT]",Kd={[Hs]:"fire-core",[Id]:"fire-core-compat",[wd]:"fire-analytics",[Td]:"fire-analytics-compat",[Sd]:"fire-app-check",[Ad]:"fire-app-check-compat",[Rd]:"fire-auth",[bd]:"fire-auth-compat",[xd]:"fire-rtdb",[Cd]:"fire-data-connect",[Pd]:"fire-rtdb-compat",[Dd]:"fire-fn",[Vd]:"fire-fn-compat",[kd]:"fire-iid",[Nd]:"fire-iid-compat",[Md]:"fire-fcm",[Od]:"fire-fcm-compat",[Ld]:"fire-perf",[Fd]:"fire-perf-compat",[Bd]:"fire-rc",[Ud]:"fire-rc-compat",[jd]:"fire-gcs",[$d]:"fire-gcs-compat",[qd]:"fire-fst",[zd]:"fire-fst-compat",[Hd]:"fire-vertex","fire-js":"fire-js",[Gd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=new Map,Qd=new Map,Gs=new Map;function ya(n,t){try{n.container.addComponent(t)}catch(e){Zt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function he(n){const t=n.name;if(Gs.has(t))return Zt.debug(`There were multiple attempts to register component ${t}.`),!1;Gs.set(t,n);for(const e of Sr.values())ya(e,n);for(const e of Qd.values())ya(e,n);return!0}function jn(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Jd(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ce=new Br("app","Firebase",Xd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ce.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd=Wd;function Hc(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:zs,automaticDataCollectionEnabled:!0},t),s=r.name;if(typeof s!="string"||!s)throw ce.create("bad-app-name",{appName:String(s)});if(e||(e=Fc()),!e)throw ce.create("no-options");const o=Sr.get(s);if(o){if(Dn(e,o.options)&&Dn(r,o.config))return o;throw ce.create("duplicate-app",{appName:s})}const a=new sd(s);for(const h of Gs.values())a.addComponent(h);const u=new Yd(e,r,a);return Sr.set(s,u),u}function zc(n=zs){const t=Sr.get(n);if(!t&&n===zs&&Fc())return Hc();if(!t)throw ce.create("no-app",{appName:n});return t}function qt(n,t,e){var r;let s=(r=Kd[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const u=[`Unable to register library "${s}" with version "${t}":`];o&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Zt.warn(u.join(" "));return}he(new Yt(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf="firebase-heartbeat-database",ef=1,Vn="firebase-heartbeat-store";let Vs=null;function Gc(){return Vs||(Vs=qc(tf,ef,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Vn)}catch(e){console.warn(e)}}}}).catch(n=>{throw ce.create("idb-open",{originalErrorMessage:n.message})})),Vs}async function nf(n){try{const e=(await Gc()).transaction(Vn),r=await e.objectStore(Vn).get(Wc(n));return await e.done,r}catch(t){if(t instanceof ve)Zt.warn(t.message);else{const e=ce.create("idb-get",{originalErrorMessage:t?.message});Zt.warn(e.message)}}}async function _a(n,t){try{const r=(await Gc()).transaction(Vn,"readwrite");await r.objectStore(Vn).put(t,Wc(n)),await r.done}catch(e){if(e instanceof ve)Zt.warn(e.message);else{const r=ce.create("idb-set",{originalErrorMessage:e?.message});Zt.warn(r.message)}}}function Wc(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf=1024,sf=30;class of{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new cf(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ea();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>sf){const a=uf(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Zt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ea(),{heartbeatsToSend:r,unsentEntries:s}=af(this._heartbeatsCache.heartbeats),o=Ar(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Zt.warn(e),""}}}function Ea(){return new Date().toISOString().substring(0,10)}function af(n,t=rf){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),va(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),va(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class cf{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bc()?Uc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await nf(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return _a(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return _a(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function va(n){return Ar(JSON.stringify({version:2,heartbeats:n})).length}function uf(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(n){he(new Yt("platform-logger",t=>new Ed(t),"PRIVATE")),he(new Yt("heartbeat",t=>new of(t),"PRIVATE")),qt(Hs,ga,n),qt(Hs,ga,"esm2017"),qt("fire-js","")}lf("");var hf="firebase",df="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qt(hf,df,"app");const Kc="@firebase/installations",gi="0.6.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc=1e4,Jc=`w:${gi}`,Xc="FIS_v2",ff="https://firebaseinstallations.googleapis.com/v1",mf=60*60*1e3,pf="installations",gf="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ke=new Br(pf,gf,yf);function Yc(n){return n instanceof ve&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc({projectId:n}){return`${ff}/projects/${n}/installations`}function tu(n){return{token:n.token,requestStatus:2,expiresIn:Ef(n.expiresIn),creationTime:Date.now()}}async function eu(n,t){const r=(await t.json()).error;return ke.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function nu({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function _f(n,{refreshToken:t}){const e=nu(n);return e.append("Authorization",vf(t)),e}async function ru(n){const t=await n();return t.status>=500&&t.status<600?n():t}function Ef(n){return Number(n.replace("s","000"))}function vf(n){return`${Xc} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function If({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const r=Zc(n),s=nu(n),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={fid:e,authVersion:Xc,appId:n.appId,sdkVersion:Jc},u={method:"POST",headers:s,body:JSON.stringify(a)},h=await ru(()=>fetch(r,u));if(h.ok){const d=await h.json();return{fid:d.fid||e,registrationStatus:2,refreshToken:d.refreshToken,authToken:tu(d.authToken)}}else throw await eu("Create Installation",h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(n){return new Promise(t=>{setTimeout(t,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf=/^[cdef][\w-]{21}$/,Ws="";function Af(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=Sf(n);return wf.test(e)?e:Ws}catch{return Ws}}function Sf(n){return Tf(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu=new Map;function ou(n,t){const e=Ur(n);au(e,t),Rf(e,t)}function au(n,t){const e=iu.get(n);if(e)for(const r of e)r(t)}function Rf(n,t){const e=bf();e&&e.postMessage({key:n,fid:t}),xf()}let Ce=null;function bf(){return!Ce&&"BroadcastChannel"in self&&(Ce=new BroadcastChannel("[Firebase] FID Change"),Ce.onmessage=n=>{au(n.data.key,n.data.fid)}),Ce}function xf(){iu.size===0&&Ce&&(Ce.close(),Ce=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf="firebase-installations-database",Pf=1,Ne="firebase-installations-store";let ks=null;function yi(){return ks||(ks=qc(Cf,Pf,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(Ne)}}})),ks}async function Rr(n,t){const e=Ur(n),s=(await yi()).transaction(Ne,"readwrite"),o=s.objectStore(Ne),a=await o.get(e);return await o.put(t,e),await s.done,(!a||a.fid!==t.fid)&&ou(n,t.fid),t}async function cu(n){const t=Ur(n),r=(await yi()).transaction(Ne,"readwrite");await r.objectStore(Ne).delete(t),await r.done}async function jr(n,t){const e=Ur(n),s=(await yi()).transaction(Ne,"readwrite"),o=s.objectStore(Ne),a=await o.get(e),u=t(a);return u===void 0?await o.delete(e):await o.put(u,e),await s.done,u&&(!a||a.fid!==u.fid)&&ou(n,u.fid),u}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i(n){let t;const e=await jr(n.appConfig,r=>{const s=Df(r),o=Vf(n,s);return t=o.registrationPromise,o.installationEntry});return e.fid===Ws?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function Df(n){const t=n||{fid:Af(),registrationStatus:0};return uu(t)}function Vf(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(ke.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=kf(n,e);return{installationEntry:e,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Nf(n)}:{installationEntry:t}}async function kf(n,t){try{const e=await If(n,t);return Rr(n.appConfig,e)}catch(e){throw Yc(e)&&e.customData.serverCode===409?await cu(n.appConfig):await Rr(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function Nf(n){let t=await Ia(n.appConfig);for(;t.registrationStatus===1;)await su(100),t=await Ia(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:r}=await _i(n);return r||e}return t}function Ia(n){return jr(n,t=>{if(!t)throw ke.create("installation-not-found");return uu(t)})}function uu(n){return Mf(n)?{fid:n.fid,registrationStatus:0}:n}function Mf(n){return n.registrationStatus===1&&n.registrationTime+Qc<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Of({appConfig:n,heartbeatServiceProvider:t},e){const r=Lf(n,e),s=_f(n,e),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={installation:{sdkVersion:Jc,appId:n.appId}},u={method:"POST",headers:s,body:JSON.stringify(a)},h=await ru(()=>fetch(r,u));if(h.ok){const d=await h.json();return tu(d)}else throw await eu("Generate Auth Token",h)}function Lf(n,{fid:t}){return`${Zc(n)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ei(n,t=!1){let e;const r=await jr(n.appConfig,o=>{if(!lu(o))throw ke.create("not-registered");const a=o.authToken;if(!t&&Uf(a))return o;if(a.requestStatus===1)return e=Ff(n,t),o;{if(!navigator.onLine)throw ke.create("app-offline");const u=$f(o);return e=Bf(n,u),u}});return e?await e:r.authToken}async function Ff(n,t){let e=await Ta(n.appConfig);for(;e.authToken.requestStatus===1;)await su(100),e=await Ta(n.appConfig);const r=e.authToken;return r.requestStatus===0?Ei(n,t):r}function Ta(n){return jr(n,t=>{if(!lu(t))throw ke.create("not-registered");const e=t.authToken;return qf(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Bf(n,t){try{const e=await Of(n,t),r=Object.assign(Object.assign({},t),{authToken:e});return await Rr(n.appConfig,r),e}catch(e){if(Yc(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await cu(n.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Rr(n.appConfig,r)}throw e}}function lu(n){return n!==void 0&&n.registrationStatus===2}function Uf(n){return n.requestStatus===2&&!jf(n)}function jf(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+mf}function $f(n){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:t})}function qf(n){return n.requestStatus===1&&n.requestTime+Qc<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hf(n){const t=n,{installationEntry:e,registrationPromise:r}=await _i(t);return r?r.catch(console.error):Ei(t).catch(console.error),e.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zf(n,t=!1){const e=n;return await Gf(e),(await Ei(e,t)).token}async function Gf(n){const{registrationPromise:t}=await _i(n);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(n){if(!n||!n.options)throw Ns("App Configuration");if(!n.name)throw Ns("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw Ns(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Ns(n){return ke.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu="installations",Kf="installations-internal",Qf=n=>{const t=n.getProvider("app").getImmediate(),e=Wf(t),r=jn(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Jf=n=>{const t=n.getProvider("app").getImmediate(),e=jn(t,hu).getImmediate();return{getId:()=>Hf(e),getToken:s=>zf(e,s)}};function Xf(){he(new Yt(hu,Qf,"PUBLIC")),he(new Yt(Kf,Jf,"PRIVATE"))}Xf();qt(Kc,gi);qt(Kc,gi,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br="analytics",Yf="firebase_id",Zf="origin",tm=60*1e3,em="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",vi="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct=new mi("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Vt=new Br("analytics","Analytics",nm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(n){if(!n.startsWith(vi)){const t=Vt.create("invalid-gtag-resource",{gtagURL:n});return Ct.warn(t.message),""}return n}function du(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function sm(n,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(n,t)),e}function im(n,t){const e=sm("firebase-js-sdk-policy",{createScriptURL:rm}),r=document.createElement("script"),s=`${vi}?l=${n}&id=${t}`;r.src=e?e?.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function om(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function am(n,t,e,r,s,o){const a=r[s];try{if(a)await t[a];else{const h=(await du(e)).find(d=>d.measurementId===s);h&&await t[h.appId]}}catch(u){Ct.error(u)}n("config",s,o)}async function cm(n,t,e,r,s){try{let o=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const u=await du(e);for(const h of a){const d=u.find(I=>I.measurementId===h),g=d&&t[d.appId];if(g)o.push(g);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),n("event",r,s||{})}catch(o){Ct.error(o)}}function um(n,t,e,r){async function s(o,...a){try{if(o==="event"){const[u,h]=a;await cm(n,t,e,u,h)}else if(o==="config"){const[u,h]=a;await am(n,t,e,r,u,h)}else if(o==="consent"){const[u,h]=a;n("consent",u,h)}else if(o==="get"){const[u,h,d]=a;n("get",u,h,d)}else if(o==="set"){const[u]=a;n("set",u)}else n(o,...a)}catch(u){Ct.error(u)}}return s}function lm(n,t,e,r,s){let o=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=um(o,n,t,e),{gtagCore:o,wrappedGtag:window[s]}}function hm(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(vi)&&e.src.includes(n))return e;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm=30,fm=1e3;class mm{constructor(t={},e=fm){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const fu=new mm;function pm(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function gm(n){var t;const{appId:e,apiKey:r}=n,s={method:"GET",headers:pm(r)},o=em.replace("{app-id}",e),a=await fetch(o,s);if(a.status!==200&&a.status!==304){let u="";try{const h=await a.json();!((t=h.error)===null||t===void 0)&&t.message&&(u=h.error.message)}catch{}throw Vt.create("config-fetch-failed",{httpStatus:a.status,responseMessage:u})}return a.json()}async function ym(n,t=fu,e){const{appId:r,apiKey:s,measurementId:o}=n.options;if(!r)throw Vt.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:r};throw Vt.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new vm;return setTimeout(async()=>{u.abort()},tm),mu({appId:r,apiKey:s,measurementId:o},a,u,t)}async function mu(n,{throttleEndTimeMillis:t,backoffCount:e},r,s=fu){var o;const{appId:a,measurementId:u}=n;try{await _m(r,t)}catch(h){if(u)return Ct.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${h?.message}]`),{appId:a,measurementId:u};throw h}try{const h=await gm(n);return s.deleteThrottleMetadata(a),h}catch(h){const d=h;if(!Em(d)){if(s.deleteThrottleMetadata(a),u)return Ct.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${d?.message}]`),{appId:a,measurementId:u};throw h}const g=Number((o=d?.customData)===null||o===void 0?void 0:o.httpStatus)===503?da(e,s.intervalMillis,dm):da(e,s.intervalMillis),I={throttleEndTimeMillis:Date.now()+g,backoffCount:e+1};return s.setThrottleMetadata(a,I),Ct.debug(`Calling attemptFetch again in ${g} millis`),mu(n,I,r,s)}}function _m(n,t){return new Promise((e,r)=>{const s=Math.max(t-Date.now(),0),o=setTimeout(e,s);n.addEventListener(()=>{clearTimeout(o),r(Vt.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Em(n){if(!(n instanceof ve)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class vm{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Im(n,t,e,r,s){if(s&&s.global){n("event",e,r);return}else{const o=await t,a=Object.assign(Object.assign({},r),{send_to:o});n("event",e,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tm(){if(Bc())try{await Uc()}catch(n){return Ct.warn(Vt.create("indexeddb-unavailable",{errorInfo:n?.toString()}).message),!1}else return Ct.warn(Vt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function wm(n,t,e,r,s,o,a){var u;const h=ym(n);h.then(R=>{e[R.measurementId]=R.appId,n.options.measurementId&&R.measurementId!==n.options.measurementId&&Ct.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${R.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(R=>Ct.error(R)),t.push(h);const d=Tm().then(R=>{if(R)return r.getId()}),[g,I]=await Promise.all([h,d]);hm(o)||im(o,g.measurementId),s("js",new Date);const T=(u=a?.config)!==null&&u!==void 0?u:{};return T[Zf]="firebase",T.update=!0,I!=null&&(T[Yf]=I),s("config",g.measurementId,T),g.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(t){this.app=t}_delete(){return delete Rn[this.app.options.appId],Promise.resolve()}}let Rn={},wa=[];const Aa={};let Ms="dataLayer",Sm="gtag",Sa,pu,Ra=!1;function Rm(){const n=[];if(zh()&&n.push("This is a browser extension environment."),Wh()||n.push("Cookies are not available."),n.length>0){const t=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),e=Vt.create("invalid-analytics-context",{errorInfo:t});Ct.warn(e.message)}}function bm(n,t,e){Rm();const r=n.options.appId;if(!r)throw Vt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Ct.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Vt.create("no-api-key");if(Rn[r]!=null)throw Vt.create("already-exists",{id:r});if(!Ra){om(Ms);const{wrappedGtag:o,gtagCore:a}=lm(Rn,wa,Aa,Ms,Sm);pu=o,Sa=a,Ra=!0}return Rn[r]=wm(n,wa,Aa,t,Sa,Ms,e),new Am(n)}function xm(n=zc()){n=Ot(n);const t=jn(n,br);return t.isInitialized()?t.getImmediate():Cm(n)}function Cm(n,t={}){const e=jn(n,br);if(e.isInitialized()){const s=e.getImmediate();if(Dn(t,e.getOptions()))return s;throw Vt.create("already-initialized")}return e.initialize({options:t})}function Pm(n,t,e,r){n=Ot(n),Im(pu,Rn[n.app.options.appId],t,e,r).catch(s=>Ct.error(s))}const ba="@firebase/analytics",xa="0.10.17";function Dm(){he(new Yt(br,(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return bm(r,s,e)},"PUBLIC")),he(new Yt("analytics-internal",n,"PRIVATE")),qt(ba,xa),qt(ba,xa,"esm2017");function n(t){try{const e=t.getProvider(br).getImmediate();return{logEvent:(r,s,o)=>Pm(e,r,s,o)}}catch(e){throw Vt.create("interop-component-reg-failed",{reason:e})}}}Dm();var Ca=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ue,gu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,m){function p(){}p.prototype=m.prototype,E.D=m.prototype,E.prototype=new p,E.prototype.constructor=E,E.C=function(_,v,w){for(var y=Array(arguments.length-2),at=2;at<arguments.length;at++)y[at-2]=arguments[at];return m.prototype[v].apply(_,y)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,m,p){p||(p=0);var _=Array(16);if(typeof m=="string")for(var v=0;16>v;++v)_[v]=m.charCodeAt(p++)|m.charCodeAt(p++)<<8|m.charCodeAt(p++)<<16|m.charCodeAt(p++)<<24;else for(v=0;16>v;++v)_[v]=m[p++]|m[p++]<<8|m[p++]<<16|m[p++]<<24;m=E.g[0],p=E.g[1],v=E.g[2];var w=E.g[3],y=m+(w^p&(v^w))+_[0]+3614090360&4294967295;m=p+(y<<7&4294967295|y>>>25),y=w+(v^m&(p^v))+_[1]+3905402710&4294967295,w=m+(y<<12&4294967295|y>>>20),y=v+(p^w&(m^p))+_[2]+606105819&4294967295,v=w+(y<<17&4294967295|y>>>15),y=p+(m^v&(w^m))+_[3]+3250441966&4294967295,p=v+(y<<22&4294967295|y>>>10),y=m+(w^p&(v^w))+_[4]+4118548399&4294967295,m=p+(y<<7&4294967295|y>>>25),y=w+(v^m&(p^v))+_[5]+1200080426&4294967295,w=m+(y<<12&4294967295|y>>>20),y=v+(p^w&(m^p))+_[6]+2821735955&4294967295,v=w+(y<<17&4294967295|y>>>15),y=p+(m^v&(w^m))+_[7]+4249261313&4294967295,p=v+(y<<22&4294967295|y>>>10),y=m+(w^p&(v^w))+_[8]+1770035416&4294967295,m=p+(y<<7&4294967295|y>>>25),y=w+(v^m&(p^v))+_[9]+2336552879&4294967295,w=m+(y<<12&4294967295|y>>>20),y=v+(p^w&(m^p))+_[10]+4294925233&4294967295,v=w+(y<<17&4294967295|y>>>15),y=p+(m^v&(w^m))+_[11]+2304563134&4294967295,p=v+(y<<22&4294967295|y>>>10),y=m+(w^p&(v^w))+_[12]+1804603682&4294967295,m=p+(y<<7&4294967295|y>>>25),y=w+(v^m&(p^v))+_[13]+4254626195&4294967295,w=m+(y<<12&4294967295|y>>>20),y=v+(p^w&(m^p))+_[14]+2792965006&4294967295,v=w+(y<<17&4294967295|y>>>15),y=p+(m^v&(w^m))+_[15]+1236535329&4294967295,p=v+(y<<22&4294967295|y>>>10),y=m+(v^w&(p^v))+_[1]+4129170786&4294967295,m=p+(y<<5&4294967295|y>>>27),y=w+(p^v&(m^p))+_[6]+3225465664&4294967295,w=m+(y<<9&4294967295|y>>>23),y=v+(m^p&(w^m))+_[11]+643717713&4294967295,v=w+(y<<14&4294967295|y>>>18),y=p+(w^m&(v^w))+_[0]+3921069994&4294967295,p=v+(y<<20&4294967295|y>>>12),y=m+(v^w&(p^v))+_[5]+3593408605&4294967295,m=p+(y<<5&4294967295|y>>>27),y=w+(p^v&(m^p))+_[10]+38016083&4294967295,w=m+(y<<9&4294967295|y>>>23),y=v+(m^p&(w^m))+_[15]+3634488961&4294967295,v=w+(y<<14&4294967295|y>>>18),y=p+(w^m&(v^w))+_[4]+3889429448&4294967295,p=v+(y<<20&4294967295|y>>>12),y=m+(v^w&(p^v))+_[9]+568446438&4294967295,m=p+(y<<5&4294967295|y>>>27),y=w+(p^v&(m^p))+_[14]+3275163606&4294967295,w=m+(y<<9&4294967295|y>>>23),y=v+(m^p&(w^m))+_[3]+4107603335&4294967295,v=w+(y<<14&4294967295|y>>>18),y=p+(w^m&(v^w))+_[8]+1163531501&4294967295,p=v+(y<<20&4294967295|y>>>12),y=m+(v^w&(p^v))+_[13]+2850285829&4294967295,m=p+(y<<5&4294967295|y>>>27),y=w+(p^v&(m^p))+_[2]+4243563512&4294967295,w=m+(y<<9&4294967295|y>>>23),y=v+(m^p&(w^m))+_[7]+1735328473&4294967295,v=w+(y<<14&4294967295|y>>>18),y=p+(w^m&(v^w))+_[12]+2368359562&4294967295,p=v+(y<<20&4294967295|y>>>12),y=m+(p^v^w)+_[5]+4294588738&4294967295,m=p+(y<<4&4294967295|y>>>28),y=w+(m^p^v)+_[8]+2272392833&4294967295,w=m+(y<<11&4294967295|y>>>21),y=v+(w^m^p)+_[11]+1839030562&4294967295,v=w+(y<<16&4294967295|y>>>16),y=p+(v^w^m)+_[14]+4259657740&4294967295,p=v+(y<<23&4294967295|y>>>9),y=m+(p^v^w)+_[1]+2763975236&4294967295,m=p+(y<<4&4294967295|y>>>28),y=w+(m^p^v)+_[4]+1272893353&4294967295,w=m+(y<<11&4294967295|y>>>21),y=v+(w^m^p)+_[7]+4139469664&4294967295,v=w+(y<<16&4294967295|y>>>16),y=p+(v^w^m)+_[10]+3200236656&4294967295,p=v+(y<<23&4294967295|y>>>9),y=m+(p^v^w)+_[13]+681279174&4294967295,m=p+(y<<4&4294967295|y>>>28),y=w+(m^p^v)+_[0]+3936430074&4294967295,w=m+(y<<11&4294967295|y>>>21),y=v+(w^m^p)+_[3]+3572445317&4294967295,v=w+(y<<16&4294967295|y>>>16),y=p+(v^w^m)+_[6]+76029189&4294967295,p=v+(y<<23&4294967295|y>>>9),y=m+(p^v^w)+_[9]+3654602809&4294967295,m=p+(y<<4&4294967295|y>>>28),y=w+(m^p^v)+_[12]+3873151461&4294967295,w=m+(y<<11&4294967295|y>>>21),y=v+(w^m^p)+_[15]+530742520&4294967295,v=w+(y<<16&4294967295|y>>>16),y=p+(v^w^m)+_[2]+3299628645&4294967295,p=v+(y<<23&4294967295|y>>>9),y=m+(v^(p|~w))+_[0]+4096336452&4294967295,m=p+(y<<6&4294967295|y>>>26),y=w+(p^(m|~v))+_[7]+1126891415&4294967295,w=m+(y<<10&4294967295|y>>>22),y=v+(m^(w|~p))+_[14]+2878612391&4294967295,v=w+(y<<15&4294967295|y>>>17),y=p+(w^(v|~m))+_[5]+4237533241&4294967295,p=v+(y<<21&4294967295|y>>>11),y=m+(v^(p|~w))+_[12]+1700485571&4294967295,m=p+(y<<6&4294967295|y>>>26),y=w+(p^(m|~v))+_[3]+2399980690&4294967295,w=m+(y<<10&4294967295|y>>>22),y=v+(m^(w|~p))+_[10]+4293915773&4294967295,v=w+(y<<15&4294967295|y>>>17),y=p+(w^(v|~m))+_[1]+2240044497&4294967295,p=v+(y<<21&4294967295|y>>>11),y=m+(v^(p|~w))+_[8]+1873313359&4294967295,m=p+(y<<6&4294967295|y>>>26),y=w+(p^(m|~v))+_[15]+4264355552&4294967295,w=m+(y<<10&4294967295|y>>>22),y=v+(m^(w|~p))+_[6]+2734768916&4294967295,v=w+(y<<15&4294967295|y>>>17),y=p+(w^(v|~m))+_[13]+1309151649&4294967295,p=v+(y<<21&4294967295|y>>>11),y=m+(v^(p|~w))+_[4]+4149444226&4294967295,m=p+(y<<6&4294967295|y>>>26),y=w+(p^(m|~v))+_[11]+3174756917&4294967295,w=m+(y<<10&4294967295|y>>>22),y=v+(m^(w|~p))+_[2]+718787259&4294967295,v=w+(y<<15&4294967295|y>>>17),y=p+(w^(v|~m))+_[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(v+(y<<21&4294967295|y>>>11))&4294967295,E.g[2]=E.g[2]+v&4294967295,E.g[3]=E.g[3]+w&4294967295}r.prototype.u=function(E,m){m===void 0&&(m=E.length);for(var p=m-this.blockSize,_=this.B,v=this.h,w=0;w<m;){if(v==0)for(;w<=p;)s(this,E,w),w+=this.blockSize;if(typeof E=="string"){for(;w<m;)if(_[v++]=E.charCodeAt(w++),v==this.blockSize){s(this,_),v=0;break}}else for(;w<m;)if(_[v++]=E[w++],v==this.blockSize){s(this,_),v=0;break}}this.h=v,this.o+=m},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;var p=8*this.o;for(m=E.length-8;m<E.length;++m)E[m]=p&255,p/=256;for(this.u(E),E=Array(16),m=p=0;4>m;++m)for(var _=0;32>_;_+=8)E[p++]=this.g[m]>>>_&255;return E};function o(E,m){var p=u;return Object.prototype.hasOwnProperty.call(p,E)?p[E]:p[E]=m(E)}function a(E,m){this.h=m;for(var p=[],_=!0,v=E.length-1;0<=v;v--){var w=E[v]|0;_&&w==m||(p[v]=w,_=!1)}this.g=p}var u={};function h(E){return-128<=E&&128>E?o(E,function(m){return new a([m|0],0>m?-1:0)}):new a([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return I;if(0>E)return P(d(-E));for(var m=[],p=1,_=0;E>=p;_++)m[_]=E/p|0,p*=4294967296;return new a(m,0)}function g(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return P(g(E.substring(1),m));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var p=d(Math.pow(m,8)),_=I,v=0;v<E.length;v+=8){var w=Math.min(8,E.length-v),y=parseInt(E.substring(v,v+w),m);8>w?(w=d(Math.pow(m,w)),_=_.j(w).add(d(y))):(_=_.j(p),_=_.add(d(y)))}return _}var I=h(0),T=h(1),R=h(16777216);n=a.prototype,n.m=function(){if(V(this))return-P(this).m();for(var E=0,m=1,p=0;p<this.g.length;p++){var _=this.i(p);E+=(0<=_?_:4294967296+_)*m,m*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(C(this))return"0";if(V(this))return"-"+P(this).toString(E);for(var m=d(Math.pow(E,6)),p=this,_="";;){var v=Y(p,m).g;p=j(p,v.j(m));var w=((0<p.g.length?p.g[0]:p.h)>>>0).toString(E);if(p=v,C(p))return w+_;for(;6>w.length;)w="0"+w;_=w+_}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function C(E){if(E.h!=0)return!1;for(var m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function V(E){return E.h==-1}n.l=function(E){return E=j(this,E),V(E)?-1:C(E)?0:1};function P(E){for(var m=E.g.length,p=[],_=0;_<m;_++)p[_]=~E.g[_];return new a(p,~E.h).add(T)}n.abs=function(){return V(this)?P(this):this},n.add=function(E){for(var m=Math.max(this.g.length,E.g.length),p=[],_=0,v=0;v<=m;v++){var w=_+(this.i(v)&65535)+(E.i(v)&65535),y=(w>>>16)+(this.i(v)>>>16)+(E.i(v)>>>16);_=y>>>16,w&=65535,y&=65535,p[v]=y<<16|w}return new a(p,p[p.length-1]&-2147483648?-1:0)};function j(E,m){return E.add(P(m))}n.j=function(E){if(C(this)||C(E))return I;if(V(this))return V(E)?P(this).j(P(E)):P(P(this).j(E));if(V(E))return P(this.j(P(E)));if(0>this.l(R)&&0>E.l(R))return d(this.m()*E.m());for(var m=this.g.length+E.g.length,p=[],_=0;_<2*m;_++)p[_]=0;for(_=0;_<this.g.length;_++)for(var v=0;v<E.g.length;v++){var w=this.i(_)>>>16,y=this.i(_)&65535,at=E.i(v)>>>16,Z=E.i(v)&65535;p[2*_+2*v]+=y*Z,L(p,2*_+2*v),p[2*_+2*v+1]+=w*Z,L(p,2*_+2*v+1),p[2*_+2*v+1]+=y*at,L(p,2*_+2*v+1),p[2*_+2*v+2]+=w*at,L(p,2*_+2*v+2)}for(_=0;_<m;_++)p[_]=p[2*_+1]<<16|p[2*_];for(_=m;_<2*m;_++)p[_]=0;return new a(p,0)};function L(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function $(E,m){this.g=E,this.h=m}function Y(E,m){if(C(m))throw Error("division by zero");if(C(E))return new $(I,I);if(V(E))return m=Y(P(E),m),new $(P(m.g),P(m.h));if(V(m))return m=Y(E,P(m)),new $(P(m.g),m.h);if(30<E.g.length){if(V(E)||V(m))throw Error("slowDivide_ only works with positive integers.");for(var p=T,_=m;0>=_.l(E);)p=Rt(p),_=Rt(_);var v=U(p,1),w=U(_,1);for(_=U(_,2),p=U(p,2);!C(_);){var y=w.add(_);0>=y.l(E)&&(v=v.add(p),w=y),_=U(_,1),p=U(p,1)}return m=j(E,v.j(m)),new $(v,m)}for(v=I;0<=E.l(m);){for(p=Math.max(1,Math.floor(E.m()/m.m())),_=Math.ceil(Math.log(p)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),w=d(p),y=w.j(m);V(y)||0<y.l(E);)p-=_,w=d(p),y=w.j(m);C(w)&&(w=T),v=v.add(w),E=j(E,y)}return new $(v,E)}n.A=function(E){return Y(this,E).h},n.and=function(E){for(var m=Math.max(this.g.length,E.g.length),p=[],_=0;_<m;_++)p[_]=this.i(_)&E.i(_);return new a(p,this.h&E.h)},n.or=function(E){for(var m=Math.max(this.g.length,E.g.length),p=[],_=0;_<m;_++)p[_]=this.i(_)|E.i(_);return new a(p,this.h|E.h)},n.xor=function(E){for(var m=Math.max(this.g.length,E.g.length),p=[],_=0;_<m;_++)p[_]=this.i(_)^E.i(_);return new a(p,this.h^E.h)};function Rt(E){for(var m=E.g.length+1,p=[],_=0;_<m;_++)p[_]=E.i(_)<<1|E.i(_-1)>>>31;return new a(p,E.h)}function U(E,m){var p=m>>5;m%=32;for(var _=E.g.length-p,v=[],w=0;w<_;w++)v[w]=0<m?E.i(w+p)>>>m|E.i(w+p+1)<<32-m:E.i(w+p);return new a(v,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,gu=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=g,ue=a}).apply(typeof Ca<"u"?Ca:typeof self<"u"?self:typeof window<"u"?window:{});var fr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yu,In,_u,_r,Ks,Eu,vu,Iu;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,c,l){return i==Array.prototype||i==Object.prototype||(i[c]=l.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof fr=="object"&&fr];for(var c=0;c<i.length;++c){var l=i[c];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function s(i,c){if(c)t:{var l=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var A=i[f];if(!(A in l))break t;l=l[A]}i=i[i.length-1],f=l[i],c=c(f),c!=f&&c!=null&&t(l,i,{configurable:!0,writable:!0,value:c})}}function o(i,c){i instanceof String&&(i+="");var l=0,f=!1,A={next:function(){if(!f&&l<i.length){var S=l++;return{value:c(S,i[S]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(i){return i||function(){return o(this,function(c,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function h(i){var c=typeof i;return c=c!="object"?c:i?Array.isArray(i)?"array":c:"null",c=="array"||c=="object"&&typeof i.length=="number"}function d(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function g(i,c,l){return i.call.apply(i.bind,arguments)}function I(i,c,l){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),i.apply(c,A)}}return function(){return i.apply(c,arguments)}}function T(i,c,l){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:I,T.apply(null,arguments)}function R(i,c){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function C(i,c){function l(){}l.prototype=c.prototype,i.aa=c.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(f,A,S){for(var D=Array(arguments.length-2),J=2;J<arguments.length;J++)D[J-2]=arguments[J];return c.prototype[A].apply(f,D)}}function V(i){const c=i.length;if(0<c){const l=Array(c);for(let f=0;f<c;f++)l[f]=i[f];return l}return[]}function P(i,c){for(let l=1;l<arguments.length;l++){const f=arguments[l];if(h(f)){const A=i.length||0,S=f.length||0;i.length=A+S;for(let D=0;D<S;D++)i[A+D]=f[D]}else i.push(f)}}class j{constructor(c,l){this.i=c,this.j=l,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function L(i){return/^[\s\xa0]*$/.test(i)}function $(){var i=u.navigator;return i&&(i=i.userAgent)?i:""}function Y(i){return Y[" "](i),i}Y[" "]=function(){};var Rt=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function U(i,c,l){for(const f in i)c.call(l,i[f],f,i)}function E(i,c){for(const l in i)c.call(void 0,i[l],l,i)}function m(i){const c={};for(const l in i)c[l]=i[l];return c}const p="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(i,c){let l,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(l in f)i[l]=f[l];for(let S=0;S<p.length;S++)l=p[S],Object.prototype.hasOwnProperty.call(f,l)&&(i[l]=f[l])}}function v(i){var c=1;i=i.split(":");const l=[];for(;0<c&&i.length;)l.push(i.shift()),c--;return i.length&&l.push(i.join(":")),l}function w(i){u.setTimeout(()=>{throw i},0)}function y(){var i=sn;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class at{constructor(){this.h=this.g=null}add(c,l){const f=Z.get();f.set(c,l),this.h?this.h.next=f:this.g=f,this.h=f}}var Z=new j(()=>new Q,i=>i.reset());class Q{constructor(){this.next=this.g=this.h=null}set(c,l){this.h=c,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let rt,kt=!1,sn=new at,co=()=>{const i=u.Promise.resolve(void 0);rt=()=>{i.then(Gl)}};var Gl=()=>{for(var i;i=y();){try{i.h.call(i.g)}catch(l){w(l)}var c=Z;c.j(i),100>c.h&&(c.h++,i.next=c.g,c.g=i)}kt=!1};function ne(){this.s=this.s,this.C=this.C}ne.prototype.s=!1,ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function yt(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}yt.prototype.h=function(){this.defaultPrevented=!0};var Wl=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};u.addEventListener("test",l,c),u.removeEventListener("test",l,c)}catch{}return i}();function on(i,c){if(yt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget){if(Rt){t:{try{Y(c.nodeName);var A=!0;break t}catch{}A=!1}A||(c=null)}}else l=="mouseover"?c=i.fromElement:l=="mouseout"&&(c=i.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Kl[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&on.aa.h.call(this)}}C(on,yt);var Kl={2:"touch",3:"pen",4:"mouse"};on.prototype.h=function(){on.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Kn="closure_listenable_"+(1e6*Math.random()|0),Ql=0;function Jl(i,c,l,f,A){this.listener=i,this.proxy=null,this.src=c,this.type=l,this.capture=!!f,this.ha=A,this.key=++Ql,this.da=this.fa=!1}function Qn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Jn(i){this.src=i,this.g={},this.h=0}Jn.prototype.add=function(i,c,l,f,A){var S=i.toString();i=this.g[S],i||(i=this.g[S]=[],this.h++);var D=as(i,c,f,A);return-1<D?(c=i[D],l||(c.fa=!1)):(c=new Jl(c,this.src,S,!!f,A),c.fa=l,i.push(c)),c};function os(i,c){var l=c.type;if(l in i.g){var f=i.g[l],A=Array.prototype.indexOf.call(f,c,void 0),S;(S=0<=A)&&Array.prototype.splice.call(f,A,1),S&&(Qn(c),i.g[l].length==0&&(delete i.g[l],i.h--))}}function as(i,c,l,f){for(var A=0;A<i.length;++A){var S=i[A];if(!S.da&&S.listener==c&&S.capture==!!l&&S.ha==f)return A}return-1}var cs="closure_lm_"+(1e6*Math.random()|0),us={};function uo(i,c,l,f,A){if(Array.isArray(c)){for(var S=0;S<c.length;S++)uo(i,c[S],l,f,A);return null}return l=fo(l),i&&i[Kn]?i.K(c,l,d(f)?!!f.capture:!1,A):Xl(i,c,l,!1,f,A)}function Xl(i,c,l,f,A,S){if(!c)throw Error("Invalid event type");var D=d(A)?!!A.capture:!!A,J=hs(i);if(J||(i[cs]=J=new Jn(i)),l=J.add(c,l,f,D,S),l.proxy)return l;if(f=Yl(),l.proxy=f,f.src=i,f.listener=l,i.addEventListener)Wl||(A=D),A===void 0&&(A=!1),i.addEventListener(c.toString(),f,A);else if(i.attachEvent)i.attachEvent(ho(c.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Yl(){function i(l){return c.call(i.src,i.listener,l)}const c=Zl;return i}function lo(i,c,l,f,A){if(Array.isArray(c))for(var S=0;S<c.length;S++)lo(i,c[S],l,f,A);else f=d(f)?!!f.capture:!!f,l=fo(l),i&&i[Kn]?(i=i.i,c=String(c).toString(),c in i.g&&(S=i.g[c],l=as(S,l,f,A),-1<l&&(Qn(S[l]),Array.prototype.splice.call(S,l,1),S.length==0&&(delete i.g[c],i.h--)))):i&&(i=hs(i))&&(c=i.g[c.toString()],i=-1,c&&(i=as(c,l,f,A)),(l=-1<i?c[i]:null)&&ls(l))}function ls(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[Kn])os(c.i,i);else{var l=i.type,f=i.proxy;c.removeEventListener?c.removeEventListener(l,f,i.capture):c.detachEvent?c.detachEvent(ho(l),f):c.addListener&&c.removeListener&&c.removeListener(f),(l=hs(c))?(os(l,i),l.h==0&&(l.src=null,c[cs]=null)):Qn(i)}}}function ho(i){return i in us?us[i]:us[i]="on"+i}function Zl(i,c){if(i.da)i=!0;else{c=new on(c,this);var l=i.listener,f=i.ha||i.src;i.fa&&ls(i),i=l.call(f,c)}return i}function hs(i){return i=i[cs],i instanceof Jn?i:null}var ds="__closure_events_fn_"+(1e9*Math.random()>>>0);function fo(i){return typeof i=="function"?i:(i[ds]||(i[ds]=function(c){return i.handleEvent(c)}),i[ds])}function _t(){ne.call(this),this.i=new Jn(this),this.M=this,this.F=null}C(_t,ne),_t.prototype[Kn]=!0,_t.prototype.removeEventListener=function(i,c,l,f){lo(this,i,c,l,f)};function At(i,c){var l,f=i.F;if(f)for(l=[];f;f=f.F)l.push(f);if(i=i.M,f=c.type||c,typeof c=="string")c=new yt(c,i);else if(c instanceof yt)c.target=c.target||i;else{var A=c;c=new yt(f,i),_(c,A)}if(A=!0,l)for(var S=l.length-1;0<=S;S--){var D=c.g=l[S];A=Xn(D,f,!0,c)&&A}if(D=c.g=i,A=Xn(D,f,!0,c)&&A,A=Xn(D,f,!1,c)&&A,l)for(S=0;S<l.length;S++)D=c.g=l[S],A=Xn(D,f,!1,c)&&A}_t.prototype.N=function(){if(_t.aa.N.call(this),this.i){var i=this.i,c;for(c in i.g){for(var l=i.g[c],f=0;f<l.length;f++)Qn(l[f]);delete i.g[c],i.h--}}this.F=null},_t.prototype.K=function(i,c,l,f){return this.i.add(String(i),c,!1,l,f)},_t.prototype.L=function(i,c,l,f){return this.i.add(String(i),c,!0,l,f)};function Xn(i,c,l,f){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();for(var A=!0,S=0;S<c.length;++S){var D=c[S];if(D&&!D.da&&D.capture==l){var J=D.listener,ft=D.ha||D.src;D.fa&&os(i.i,D),A=J.call(ft,f)!==!1&&A}}return A&&!f.defaultPrevented}function mo(i,c,l){if(typeof i=="function")l&&(i=T(i,l));else if(i&&typeof i.handleEvent=="function")i=T(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(i,c||0)}function po(i){i.g=mo(()=>{i.g=null,i.i&&(i.i=!1,po(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class th extends ne{constructor(c,l){super(),this.m=c,this.l=l,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:po(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function an(i){ne.call(this),this.h=i,this.g={}}C(an,ne);var go=[];function yo(i){U(i.g,function(c,l){this.g.hasOwnProperty(l)&&ls(c)},i),i.g={}}an.prototype.N=function(){an.aa.N.call(this),yo(this)},an.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var fs=u.JSON.stringify,eh=u.JSON.parse,nh=class{stringify(i){return u.JSON.stringify(i,void 0)}parse(i){return u.JSON.parse(i,void 0)}};function ms(){}ms.prototype.h=null;function _o(i){return i.h||(i.h=i.i())}function Eo(){}var cn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ps(){yt.call(this,"d")}C(ps,yt);function gs(){yt.call(this,"c")}C(gs,yt);var Ae={},vo=null;function Yn(){return vo=vo||new _t}Ae.La="serverreachability";function Io(i){yt.call(this,Ae.La,i)}C(Io,yt);function un(i){const c=Yn();At(c,new Io(c))}Ae.STAT_EVENT="statevent";function To(i,c){yt.call(this,Ae.STAT_EVENT,i),this.stat=c}C(To,yt);function St(i){const c=Yn();At(c,new To(c,i))}Ae.Ma="timingevent";function wo(i,c){yt.call(this,Ae.Ma,i),this.size=c}C(wo,yt);function ln(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){i()},c)}function hn(){this.g=!0}hn.prototype.xa=function(){this.g=!1};function rh(i,c,l,f,A,S){i.info(function(){if(i.g)if(S)for(var D="",J=S.split("&"),ft=0;ft<J.length;ft++){var W=J[ft].split("=");if(1<W.length){var Et=W[0];W=W[1];var vt=Et.split("_");D=2<=vt.length&&vt[1]=="type"?D+(Et+"="+W+"&"):D+(Et+"=redacted&")}}else D=null;else D=S;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+c+`
`+l+`
`+D})}function sh(i,c,l,f,A,S,D){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+c+`
`+l+`
`+S+" "+D})}function Be(i,c,l,f){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+oh(i,l)+(f?" "+f:"")})}function ih(i,c){i.info(function(){return"TIMEOUT: "+c})}hn.prototype.info=function(){};function oh(i,c){if(!i.g)return c;if(!c)return null;try{var l=JSON.parse(c);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var f=l[i];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var S=A[0];if(S!="noop"&&S!="stop"&&S!="close")for(var D=1;D<A.length;D++)A[D]=""}}}}return fs(l)}catch{return c}}var Zn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ao={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ys;function tr(){}C(tr,ms),tr.prototype.g=function(){return new XMLHttpRequest},tr.prototype.i=function(){return{}},ys=new tr;function re(i,c,l,f){this.j=i,this.i=c,this.l=l,this.R=f||1,this.U=new an(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new So}function So(){this.i=null,this.g="",this.h=!1}var Ro={},_s={};function Es(i,c,l){i.L=1,i.v=sr(Qt(c)),i.m=l,i.P=!0,bo(i,null)}function bo(i,c){i.F=Date.now(),er(i),i.A=Qt(i.v);var l=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),jo(l.i,"t",f),i.C=0,l=i.j.J,i.h=new So,i.g=ia(i.j,l?c:null,!i.m),0<i.O&&(i.M=new th(T(i.Y,i,i.g),i.O)),c=i.U,l=i.g,f=i.ca;var A="readystatechange";Array.isArray(A)||(A&&(go[0]=A.toString()),A=go);for(var S=0;S<A.length;S++){var D=uo(l,A[S],f||c.handleEvent,!1,c.h||c);if(!D)break;c.g[D.key]=D}c=i.H?m(i.H):{},i.m?(i.u||(i.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,c)):(i.u="GET",i.g.ea(i.A,i.u,null,c)),un(),rh(i.i,i.u,i.A,i.l,i.R,i.m)}re.prototype.ca=function(i){i=i.target;const c=this.M;c&&Jt(i)==3?c.j():this.Y(i)},re.prototype.Y=function(i){try{if(i==this.g)t:{const vt=Jt(this.g);var c=this.g.Ba();const $e=this.g.Z();if(!(3>vt)&&(vt!=3||this.g&&(this.h.h||this.g.oa()||Ko(this.g)))){this.J||vt!=4||c==7||(c==8||0>=$e?un(3):un(2)),vs(this);var l=this.g.Z();this.X=l;e:if(xo(this)){var f=Ko(this.g);i="";var A=f.length,S=Jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Se(this),dn(this);var D="";break e}this.h.i=new u.TextDecoder}for(c=0;c<A;c++)this.h.h=!0,i+=this.h.i.decode(f[c],{stream:!(S&&c==A-1)});f.length=0,this.h.g+=i,this.C=0,D=this.h.g}else D=this.g.oa();if(this.o=l==200,sh(this.i,this.u,this.A,this.l,this.R,vt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var J,ft=this.g;if((J=ft.g?ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(J)){var W=J;break e}}W=null}if(l=W)Be(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Is(this,l);else{this.o=!1,this.s=3,St(12),Se(this),dn(this);break t}}if(this.P){l=!0;let Lt;for(;!this.J&&this.C<D.length;)if(Lt=ah(this,D),Lt==_s){vt==4&&(this.s=4,St(14),l=!1),Be(this.i,this.l,null,"[Incomplete Response]");break}else if(Lt==Ro){this.s=4,St(15),Be(this.i,this.l,D,"[Invalid Chunk]"),l=!1;break}else Be(this.i,this.l,Lt,null),Is(this,Lt);if(xo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),vt!=4||D.length!=0||this.h.h||(this.s=1,St(16),l=!1),this.o=this.o&&l,!l)Be(this.i,this.l,D,"[Invalid Chunked Response]"),Se(this),dn(this);else if(0<D.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+D.length),bs(Et),Et.M=!0,St(11))}}else Be(this.i,this.l,D,null),Is(this,D);vt==4&&Se(this),this.o&&!this.J&&(vt==4?ea(this.j,this):(this.o=!1,er(this)))}else Ah(this.g),l==400&&0<D.indexOf("Unknown SID")?(this.s=3,St(12)):(this.s=0,St(13)),Se(this),dn(this)}}}catch{}finally{}};function xo(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function ah(i,c){var l=i.C,f=c.indexOf(`
`,l);return f==-1?_s:(l=Number(c.substring(l,f)),isNaN(l)?Ro:(f+=1,f+l>c.length?_s:(c=c.slice(f,f+l),i.C=f+l,c)))}re.prototype.cancel=function(){this.J=!0,Se(this)};function er(i){i.S=Date.now()+i.I,Co(i,i.I)}function Co(i,c){if(i.B!=null)throw Error("WatchDog timer not null");i.B=ln(T(i.ba,i),c)}function vs(i){i.B&&(u.clearTimeout(i.B),i.B=null)}re.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(ih(this.i,this.A),this.L!=2&&(un(),St(17)),Se(this),this.s=2,dn(this)):Co(this,this.S-i)};function dn(i){i.j.G==0||i.J||ea(i.j,i)}function Se(i){vs(i);var c=i.M;c&&typeof c.ma=="function"&&c.ma(),i.M=null,yo(i.U),i.g&&(c=i.g,i.g=null,c.abort(),c.ma())}function Is(i,c){try{var l=i.j;if(l.G!=0&&(l.g==i||Ts(l.h,i))){if(!i.K&&Ts(l.h,i)&&l.G==3){try{var f=l.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)lr(l),cr(l);else break t;Rs(l),St(18)}}else l.za=A[1],0<l.za-l.T&&37500>A[2]&&l.F&&l.v==0&&!l.C&&(l.C=ln(T(l.Za,l),6e3));if(1>=Vo(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else be(l,11)}else if((i.K||l.g==i)&&lr(l),!L(c))for(A=l.Da.g.parse(c),c=0;c<A.length;c++){let W=A[c];if(l.T=W[0],W=W[1],l.G==2)if(W[0]=="c"){l.K=W[1],l.ia=W[2];const Et=W[3];Et!=null&&(l.la=Et,l.j.info("VER="+l.la));const vt=W[4];vt!=null&&(l.Aa=vt,l.j.info("SVER="+l.Aa));const $e=W[5];$e!=null&&typeof $e=="number"&&0<$e&&(f=1.5*$e,l.L=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const Lt=i.g;if(Lt){const dr=Lt.g?Lt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(dr){var S=f.h;S.g||dr.indexOf("spdy")==-1&&dr.indexOf("quic")==-1&&dr.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(ws(S,S.h),S.h=null))}if(f.D){const xs=Lt.g?Lt.g.getResponseHeader("X-HTTP-Session-Id"):null;xs&&(f.ya=xs,tt(f.I,f.D,xs))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),f=l;var D=i;if(f.qa=sa(f,f.J?f.ia:null,f.W),D.K){ko(f.h,D);var J=D,ft=f.L;ft&&(J.I=ft),J.B&&(vs(J),er(J)),f.g=D}else Zo(f);0<l.i.length&&ur(l)}else W[0]!="stop"&&W[0]!="close"||be(l,7);else l.G==3&&(W[0]=="stop"||W[0]=="close"?W[0]=="stop"?be(l,7):Ss(l):W[0]!="noop"&&l.l&&l.l.ta(W),l.v=0)}}un(4)}catch{}}var ch=class{constructor(i,c){this.g=i,this.map=c}};function Po(i){this.l=i||10,u.PerformanceNavigationTiming?(i=u.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Do(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Vo(i){return i.h?1:i.g?i.g.size:0}function Ts(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function ws(i,c){i.g?i.g.add(c):i.h=c}function ko(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}Po.prototype.cancel=function(){if(this.i=No(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function No(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const l of i.g.values())c=c.concat(l.D);return c}return V(i.i)}function uh(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var c=[],l=i.length,f=0;f<l;f++)c.push(i[f]);return c}c=[],l=0;for(f in i)c[l++]=i[f];return c}function lh(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var c=[];i=i.length;for(var l=0;l<i;l++)c.push(l);return c}c=[],l=0;for(const f in i)c[l++]=f;return c}}}function Mo(i,c){if(i.forEach&&typeof i.forEach=="function")i.forEach(c,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,c,void 0);else for(var l=lh(i),f=uh(i),A=f.length,S=0;S<A;S++)c.call(void 0,f[S],l&&l[S],i)}var Oo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hh(i,c){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var f=i[l].indexOf("="),A=null;if(0<=f){var S=i[l].substring(0,f);A=i[l].substring(f+1)}else S=i[l];c(S,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Re(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Re){this.h=i.h,nr(this,i.j),this.o=i.o,this.g=i.g,rr(this,i.s),this.l=i.l;var c=i.i,l=new pn;l.i=c.i,c.g&&(l.g=new Map(c.g),l.h=c.h),Lo(this,l),this.m=i.m}else i&&(c=String(i).match(Oo))?(this.h=!1,nr(this,c[1]||"",!0),this.o=fn(c[2]||""),this.g=fn(c[3]||"",!0),rr(this,c[4]),this.l=fn(c[5]||"",!0),Lo(this,c[6]||"",!0),this.m=fn(c[7]||"")):(this.h=!1,this.i=new pn(null,this.h))}Re.prototype.toString=function(){var i=[],c=this.j;c&&i.push(mn(c,Fo,!0),":");var l=this.g;return(l||c=="file")&&(i.push("//"),(c=this.o)&&i.push(mn(c,Fo,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(mn(l,l.charAt(0)=="/"?mh:fh,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",mn(l,gh)),i.join("")};function Qt(i){return new Re(i)}function nr(i,c,l){i.j=l?fn(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function rr(i,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);i.s=c}else i.s=null}function Lo(i,c,l){c instanceof pn?(i.i=c,yh(i.i,i.h)):(l||(c=mn(c,ph)),i.i=new pn(c,i.h))}function tt(i,c,l){i.i.set(c,l)}function sr(i){return tt(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function fn(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function mn(i,c,l){return typeof i=="string"?(i=encodeURI(i).replace(c,dh),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function dh(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Fo=/[#\/\?@]/g,fh=/[#\?:]/g,mh=/[#\?]/g,ph=/[#\?@]/g,gh=/#/g;function pn(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function se(i){i.g||(i.g=new Map,i.h=0,i.i&&hh(i.i,function(c,l){i.add(decodeURIComponent(c.replace(/\+/g," ")),l)}))}n=pn.prototype,n.add=function(i,c){se(this),this.i=null,i=Ue(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(c),this.h+=1,this};function Bo(i,c){se(i),c=Ue(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function Uo(i,c){return se(i),c=Ue(i,c),i.g.has(c)}n.forEach=function(i,c){se(this),this.g.forEach(function(l,f){l.forEach(function(A){i.call(c,A,f,this)},this)},this)},n.na=function(){se(this);const i=Array.from(this.g.values()),c=Array.from(this.g.keys()),l=[];for(let f=0;f<c.length;f++){const A=i[f];for(let S=0;S<A.length;S++)l.push(c[f])}return l},n.V=function(i){se(this);let c=[];if(typeof i=="string")Uo(this,i)&&(c=c.concat(this.g.get(Ue(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)c=c.concat(i[l])}return c},n.set=function(i,c){return se(this),this.i=null,i=Ue(this,i),Uo(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},n.get=function(i,c){return i?(i=this.V(i),0<i.length?String(i[0]):c):c};function jo(i,c,l){Bo(i,c),0<l.length&&(i.i=null,i.g.set(Ue(i,c),V(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(var l=0;l<c.length;l++){var f=c[l];const S=encodeURIComponent(String(f)),D=this.V(f);for(f=0;f<D.length;f++){var A=S;D[f]!==""&&(A+="="+encodeURIComponent(String(D[f]))),i.push(A)}}return this.i=i.join("&")};function Ue(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function yh(i,c){c&&!i.j&&(se(i),i.i=null,i.g.forEach(function(l,f){var A=f.toLowerCase();f!=A&&(Bo(this,f),jo(this,A,l))},i)),i.j=c}function _h(i,c){const l=new hn;if(u.Image){const f=new Image;f.onload=R(ie,l,"TestLoadImage: loaded",!0,c,f),f.onerror=R(ie,l,"TestLoadImage: error",!1,c,f),f.onabort=R(ie,l,"TestLoadImage: abort",!1,c,f),f.ontimeout=R(ie,l,"TestLoadImage: timeout",!1,c,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else c(!1)}function Eh(i,c){const l=new hn,f=new AbortController,A=setTimeout(()=>{f.abort(),ie(l,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:f.signal}).then(S=>{clearTimeout(A),S.ok?ie(l,"TestPingServer: ok",!0,c):ie(l,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(A),ie(l,"TestPingServer: error",!1,c)})}function ie(i,c,l,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(l)}catch{}}function vh(){this.g=new nh}function Ih(i,c,l){const f=l||"";try{Mo(i,function(A,S){let D=A;d(A)&&(D=fs(A)),c.push(f+S+"="+encodeURIComponent(D))})}catch(A){throw c.push(f+"type="+encodeURIComponent("_badmap")),A}}function ir(i){this.l=i.Ub||null,this.j=i.eb||!1}C(ir,ms),ir.prototype.g=function(){return new or(this.l,this.j)},ir.prototype.i=function(i){return function(){return i}}({});function or(i,c){_t.call(this),this.D=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(or,_t),n=or.prototype,n.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=c,this.readyState=1,yn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(c.body=i),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,gn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,yn(this)),this.g&&(this.readyState=3,yn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;$o(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function $o(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?gn(this):yn(this),this.readyState==3&&$o(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,gn(this))},n.Qa=function(i){this.g&&(this.response=i,gn(this))},n.ga=function(){this.g&&gn(this)};function gn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,yn(i)}n.setRequestHeader=function(i,c){this.u.append(i,c)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var l=c.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=c.next();return i.join(`\r
`)};function yn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(or.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function qo(i){let c="";return U(i,function(l,f){c+=f,c+=":",c+=l,c+=`\r
`}),c}function As(i,c,l){t:{for(f in l){var f=!1;break t}f=!0}f||(l=qo(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):tt(i,c,l))}function st(i){_t.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(st,_t);var Th=/^https?$/i,wh=["POST","PUT"];n=st.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,c,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ys.g(),this.v=this.o?_o(this.o):_o(ys),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(S){Ho(this,S);return}if(i=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)l.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const S of f.keys())l.set(S,f.get(S));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(S=>S.toLowerCase()=="content-type"),A=u.FormData&&i instanceof u.FormData,!(0<=Array.prototype.indexOf.call(wh,c,void 0))||f||A||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,D]of l)this.g.setRequestHeader(S,D);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Wo(this),this.u=!0,this.g.send(i),this.u=!1}catch(S){Ho(this,S)}};function Ho(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.m=5,zo(i),ar(i)}function zo(i){i.A||(i.A=!0,At(i,"complete"),At(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,At(this,"complete"),At(this,"abort"),ar(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ar(this,!0)),st.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Go(this):this.bb())},n.bb=function(){Go(this)};function Go(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Jt(i)!=4||i.Z()!=2)){if(i.u&&Jt(i)==4)mo(i.Ea,0,i);else if(At(i,"readystatechange"),Jt(i)==4){i.h=!1;try{const D=i.Z();t:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var l;if(!(l=c)){var f;if(f=D===0){var A=String(i.D).match(Oo)[1]||null;!A&&u.self&&u.self.location&&(A=u.self.location.protocol.slice(0,-1)),f=!Th.test(A?A.toLowerCase():"")}l=f}if(l)At(i,"complete"),At(i,"success");else{i.m=6;try{var S=2<Jt(i)?i.g.statusText:""}catch{S=""}i.l=S+" ["+i.Z()+"]",zo(i)}}finally{ar(i)}}}}function ar(i,c){if(i.g){Wo(i);const l=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,c||At(i,"ready");try{l.onreadystatechange=f}catch{}}}function Wo(i){i.I&&(u.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Jt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Jt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),eh(c)}};function Ko(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Ah(i){const c={};i=(i.g&&2<=Jt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(L(i[f]))continue;var l=v(i[f]);const A=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const S=c[A]||[];c[A]=S,S.push(l)}E(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function _n(i,c,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||c}function Qo(i){this.Aa=0,this.i=[],this.j=new hn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=_n("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=_n("baseRetryDelayMs",5e3,i),this.cb=_n("retryDelaySeedMs",1e4,i),this.Wa=_n("forwardChannelMaxRetries",2,i),this.wa=_n("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Po(i&&i.concurrentRequestLimit),this.Da=new vh,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Qo.prototype,n.la=8,n.G=1,n.connect=function(i,c,l,f){St(0),this.W=i,this.H=c||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.I=sa(this,null,this.W),ur(this)};function Ss(i){if(Jo(i),i.G==3){var c=i.U++,l=Qt(i.I);if(tt(l,"SID",i.K),tt(l,"RID",c),tt(l,"TYPE","terminate"),En(i,l),c=new re(i,i.j,c),c.L=2,c.v=sr(Qt(l)),l=!1,u.navigator&&u.navigator.sendBeacon)try{l=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!l&&u.Image&&(new Image().src=c.v,l=!0),l||(c.g=ia(c.j,null),c.g.ea(c.v)),c.F=Date.now(),er(c)}ra(i)}function cr(i){i.g&&(bs(i),i.g.cancel(),i.g=null)}function Jo(i){cr(i),i.u&&(u.clearTimeout(i.u),i.u=null),lr(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&u.clearTimeout(i.s),i.s=null)}function ur(i){if(!Do(i.h)&&!i.s){i.s=!0;var c=i.Ga;rt||co(),kt||(rt(),kt=!0),sn.add(c,i),i.B=0}}function Sh(i,c){return Vo(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=c.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=ln(T(i.Ga,i,c),na(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const A=new re(this,this.j,i);let S=this.o;if(this.S&&(S?(S=m(S),_(S,this.S)):S=this.S),this.m!==null||this.O||(A.H=S,S=null),this.P)t:{for(var c=0,l=0;l<this.i.length;l++){e:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=l;break t}if(c===4096||l===this.i.length-1){c=l+1;break t}}c=1e3}else c=1e3;c=Yo(this,A,c),l=Qt(this.I),tt(l,"RID",i),tt(l,"CVER",22),this.D&&tt(l,"X-HTTP-Session-Id",this.D),En(this,l),S&&(this.O?c="headers="+encodeURIComponent(String(qo(S)))+"&"+c:this.m&&As(l,this.m,S)),ws(this.h,A),this.Ua&&tt(l,"TYPE","init"),this.P?(tt(l,"$req",c),tt(l,"SID","null"),A.T=!0,Es(A,l,null)):Es(A,l,c),this.G=2}}else this.G==3&&(i?Xo(this,i):this.i.length==0||Do(this.h)||Xo(this))};function Xo(i,c){var l;c?l=c.l:l=i.U++;const f=Qt(i.I);tt(f,"SID",i.K),tt(f,"RID",l),tt(f,"AID",i.T),En(i,f),i.m&&i.o&&As(f,i.m,i.o),l=new re(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),c&&(i.i=c.D.concat(i.i)),c=Yo(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),ws(i.h,l),Es(l,f,c)}function En(i,c){i.H&&U(i.H,function(l,f){tt(c,f,l)}),i.l&&Mo({},function(l,f){tt(c,f,l)})}function Yo(i,c,l){l=Math.min(i.i.length,l);var f=i.l?T(i.l.Na,i.l,i):null;t:{var A=i.i;let S=-1;for(;;){const D=["count="+l];S==-1?0<l?(S=A[0].g,D.push("ofs="+S)):S=0:D.push("ofs="+S);let J=!0;for(let ft=0;ft<l;ft++){let W=A[ft].g;const Et=A[ft].map;if(W-=S,0>W)S=Math.max(0,A[ft].g-100),J=!1;else try{Ih(Et,D,"req"+W+"_")}catch{f&&f(Et)}}if(J){f=D.join("&");break t}}}return i=i.i.splice(0,l),c.D=i,f}function Zo(i){if(!i.g&&!i.u){i.Y=1;var c=i.Fa;rt||co(),kt||(rt(),kt=!0),sn.add(c,i),i.v=0}}function Rs(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=ln(T(i.Fa,i),na(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,ta(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=ln(T(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,St(10),cr(this),ta(this))};function bs(i){i.A!=null&&(u.clearTimeout(i.A),i.A=null)}function ta(i){i.g=new re(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var c=Qt(i.qa);tt(c,"RID","rpc"),tt(c,"SID",i.K),tt(c,"AID",i.T),tt(c,"CI",i.F?"0":"1"),!i.F&&i.ja&&tt(c,"TO",i.ja),tt(c,"TYPE","xmlhttp"),En(i,c),i.m&&i.o&&As(c,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=sr(Qt(c)),l.m=null,l.P=!0,bo(l,i)}n.Za=function(){this.C!=null&&(this.C=null,cr(this),Rs(this),St(19))};function lr(i){i.C!=null&&(u.clearTimeout(i.C),i.C=null)}function ea(i,c){var l=null;if(i.g==c){lr(i),bs(i),i.g=null;var f=2}else if(Ts(i.h,c))l=c.D,ko(i.h,c),f=1;else return;if(i.G!=0){if(c.o)if(f==1){l=c.m?c.m.length:0,c=Date.now()-c.F;var A=i.B;f=Yn(),At(f,new wo(f,l)),ur(i)}else Zo(i);else if(A=c.s,A==3||A==0&&0<c.X||!(f==1&&Sh(i,c)||f==2&&Rs(i)))switch(l&&0<l.length&&(c=i.h,c.i=c.i.concat(l)),A){case 1:be(i,5);break;case 4:be(i,10);break;case 3:be(i,6);break;default:be(i,2)}}}function na(i,c){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*c}function be(i,c){if(i.j.info("Error code "+c),c==2){var l=T(i.fb,i),f=i.Xa;const A=!f;f=new Re(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||nr(f,"https"),sr(f),A?_h(f.toString(),l):Eh(f.toString(),l)}else St(2);i.G=0,i.l&&i.l.sa(c),ra(i),Jo(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function ra(i){if(i.G=0,i.ka=[],i.l){const c=No(i.h);(c.length!=0||i.i.length!=0)&&(P(i.ka,c),P(i.ka,i.i),i.h.i.length=0,V(i.i),i.i.length=0),i.l.ra()}}function sa(i,c,l){var f=l instanceof Re?Qt(l):new Re(l);if(f.g!="")c&&(f.g=c+"."+f.g),rr(f,f.s);else{var A=u.location;f=A.protocol,c=c?c+"."+A.hostname:A.hostname,A=+A.port;var S=new Re(null);f&&nr(S,f),c&&(S.g=c),A&&rr(S,A),l&&(S.l=l),f=S}return l=i.D,c=i.ya,l&&c&&tt(f,l,c),tt(f,"VER",i.la),En(i,f),f}function ia(i,c,l){if(c&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Ca&&!i.pa?new st(new ir({eb:l})):new st(i.pa),c.Ha(i.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function oa(){}n=oa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function hr(){}hr.prototype.g=function(i,c){return new Pt(i,c)};function Pt(i,c){_t.call(this),this.g=new Qo(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(i?i["X-WebChannel-Client-Profile"]=c.va:i={"X-WebChannel-Client-Profile":c.va}),this.g.S=i,(i=c&&c.Sb)&&!L(i)&&(this.g.m=i),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!L(c)&&(this.g.D=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new je(this)}C(Pt,_t),Pt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Pt.prototype.close=function(){Ss(this.g)},Pt.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=fs(i),i=l);c.i.push(new ch(c.Ya++,i)),c.G==3&&ur(c)},Pt.prototype.N=function(){this.g.l=null,delete this.j,Ss(this.g),delete this.g,Pt.aa.N.call(this)};function aa(i){ps.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){t:{for(const l in c){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}C(aa,ps);function ca(){gs.call(this),this.status=1}C(ca,gs);function je(i){this.g=i}C(je,oa),je.prototype.ua=function(){At(this.g,"a")},je.prototype.ta=function(i){At(this.g,new aa(i))},je.prototype.sa=function(i){At(this.g,new ca)},je.prototype.ra=function(){At(this.g,"b")},hr.prototype.createWebChannel=hr.prototype.g,Pt.prototype.send=Pt.prototype.o,Pt.prototype.open=Pt.prototype.m,Pt.prototype.close=Pt.prototype.close,Iu=function(){return new hr},vu=function(){return Yn()},Eu=Ae,Ks={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Zn.NO_ERROR=0,Zn.TIMEOUT=8,Zn.HTTP_ERROR=6,_r=Zn,Ao.COMPLETE="complete",_u=Ao,Eo.EventType=cn,cn.OPEN="a",cn.CLOSE="b",cn.ERROR="c",cn.MESSAGE="d",_t.prototype.listen=_t.prototype.K,In=Eo,st.prototype.listenOnce=st.prototype.L,st.prototype.getLastError=st.prototype.Ka,st.prototype.getLastErrorCode=st.prototype.Ba,st.prototype.getStatus=st.prototype.Z,st.prototype.getResponseJson=st.prototype.Oa,st.prototype.getResponseText=st.prototype.oa,st.prototype.send=st.prototype.ea,st.prototype.setWithCredentials=st.prototype.Ha,yu=st}).apply(typeof fr<"u"?fr:typeof self<"u"?self:typeof window<"u"?window:{});const Pa="@firebase/firestore",Da="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Tt.UNAUTHENTICATED=new Tt(null),Tt.GOOGLE_CREDENTIALS=new Tt("google-credentials-uid"),Tt.FIRST_PARTY=new Tt("first-party-uid"),Tt.MOCK_USER=new Tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ze="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me=new mi("@firebase/firestore");function qe(){return Me.logLevel}function N(n,...t){if(Me.logLevel<=G.DEBUG){const e=t.map(Ii);Me.debug(`Firestore (${Ze}): ${n}`,...e)}}function te(n,...t){if(Me.logLevel<=G.ERROR){const e=t.map(Ii);Me.error(`Firestore (${Ze}): ${n}`,...e)}}function de(n,...t){if(Me.logLevel<=G.WARN){const e=t.map(Ii);Me.warn(`Firestore (${Ze}): ${n}`,...e)}}function Ii(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Tu(n,r,e)}function Tu(n,t,e){let r=`FIRESTORE (${Ze}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw te(r),new Error(r)}function K(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||Tu(t,s,r)}function B(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends ve{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Vm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Tt.UNAUTHENTICATED))}shutdown(){}}class km{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Nm{constructor(t){this.t=t,this.currentUser=Tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){K(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Xt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Xt,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},u=h=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Xt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(K(typeof r.accessToken=="string",31837,{l:r}),new wu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return K(t===null||typeof t=="string",2055,{h:t}),new Tt(t)}}class Mm{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=Tt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Om{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Mm(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(Tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Va{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Lm{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Jd(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){K(this.o===void 0,3512);const r=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Va(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(K(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Va(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Fm(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function q(n,t){return n<t?-1:n>t?1:0}function Qs(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),s=t.codePointAt(e);if(r!==s){if(r<128&&s<128)return q(r,s);{const o=Au(),a=Bm(o.encode(ka(n,e)),o.encode(ka(t,e)));return a!==0?a:q(r,s)}}e+=r>65535?2:1}return q(n.length,t.length)}function ka(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function Bm(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return q(n[e],t[e]);return q(n.length,t.length)}function Ke(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na="__name__";class $t{constructor(t,e,r){e===void 0?e=0:e>t.length&&O(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&O(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return $t.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof $t?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=$t.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return q(t.length,e.length)}static compareSegments(t,e){const r=$t.isNumericId(t),s=$t.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?$t.extractNumericId(t).compare($t.extractNumericId(e)):Qs(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ue.fromString(t.substring(4,t.length-2))}}class X extends $t{construct(t,e,r){return new X(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new k(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new X(e)}static emptyPath(){return new X([])}}const Um=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pt extends $t{construct(t,e,r){return new pt(t,e,r)}static isValidIdentifier(t){return Um.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Na}static keyField(){return new pt([Na])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new k(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new k(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new k(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(r+=u,s++):(o(),s++)}if(o(),a)throw new k(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new pt(e)}static emptyPath(){return new pt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(X.fromString(t))}static fromName(t){return new M(X.fromString(t).popFirst(5))}static empty(){return new M(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new X(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(n,t,e){if(!e)throw new k(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function jm(n,t,e,r){if(t===!0&&r===!0)throw new k(b.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Ma(n){if(!M.isDocumentKey(n))throw new k(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Oa(n){if(M.isDocumentKey(n))throw new k(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ru(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function $r(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":O(12329,{type:typeof n})}function Mt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new k(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=$r(n);throw new k(b.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(n,t){const e={typeString:n};return t&&(e.value=t),e}function $n(n,t){if(!Ru(n))throw new k(b.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new k(b.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La=-62135596800,Fa=1e6;class et{static now(){return et.fromMillis(Date.now())}static fromDate(t){return et.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Fa);return new et(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new k(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new k(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<La)throw new k(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new k(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Fa}_compareTo(t){return this.seconds===t.seconds?q(this.nanoseconds,t.nanoseconds):q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:et._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if($n(t,et._jsonSchema))return new et(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-La;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}et._jsonSchemaVersion="firestore/timestamp/1.0",et._jsonSchema={type:lt("string",et._jsonSchemaVersion),seconds:lt("number"),nanoseconds:lt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{static fromTimestamp(t){return new F(t)}static min(){return new F(new et(0,0))}static max(){return new F(new et(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=-1;function $m(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=F.fromTimestamp(r===1e9?new et(e+1,0):new et(e,r));return new fe(s,M.empty(),t)}function qm(n){return new fe(n.readTime,n.key,kn)}class fe{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new fe(F.min(),M.empty(),kn)}static max(){return new fe(F.max(),M.empty(),kn)}}function Hm(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:q(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Gm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tn(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==zm)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new x((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof x?e:x.resolve(e)}catch(e){return x.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):x.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):x.reject(e)}static resolve(t){return new x((e,r)=>{e(t)})}static reject(t){return new x((e,r)=>{r(t)})}static waitFor(t){return new x((e,r)=>{let s=0,o=0,a=!1;t.forEach(u=>{++s,u.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=x.resolve(!1);for(const r of t)e=e.next(s=>s?x.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new x((r,s)=>{const o=t.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(g=>{a[d]=g,++u,u===o&&r(a)},g=>s(g))}})}static doWhile(t,e){return new x((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function Wm(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function en(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this._e(r),this.ae=r=>e.writeSequenceNumber(r))}_e(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ae&&this.ae(t),t}}qr.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=-1;function Hr(n){return n==null}function xr(n){return n===0&&1/n==-1/0}function Km(n){return typeof n=="number"&&Number.isInteger(n)&&!xr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu="";function Qm(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Ba(t)),t=Jm(n.get(e),t);return Ba(t)}function Jm(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case bu:e+="";break;default:e+=o}}return e}function Ba(n){return n+bu+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Ie(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function xu(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t,e){this.comparator=t,this.root=e||mt.EMPTY}insert(t,e){return new nt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,mt.BLACK,null,null))}remove(t){return new nt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,mt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new mr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new mr(this.root,t,this.comparator,!1)}getReverseIterator(){return new mr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new mr(this.root,t,this.comparator,!0)}}class mr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class mt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??mt.RED,this.left=s??mt.EMPTY,this.right=o??mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new mt(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return mt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return mt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw O(43730,{key:this.key,value:this.value});if(this.right.isRed())throw O(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw O(27949);return t+(this.isRed()?0:1)}}mt.EMPTY=null,mt.RED=!0,mt.BLACK=!1;mt.EMPTY=new class{constructor(){this.size=0}get key(){throw O(57766)}get value(){throw O(16141)}get color(){throw O(16727)}get left(){throw O(29726)}get right(){throw O(36894)}copy(t,e,r,s,o){return this}insert(t,e,r){return new mt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.comparator=t,this.data=new nt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ja(this.data.getIterator())}getIteratorFrom(t){return new ja(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof ht)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ht(this.comparator);return e.data=t,e}}class ja{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t){this.fields=t,t.sort(pt.comparator)}static empty(){return new Dt([])}unionWith(t){let e=new ht(pt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Dt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ke(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Cu("Invalid base64 string: "+o):o}}(t);return new gt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new gt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const Xm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function me(n){if(K(!!n,39018),typeof n=="string"){let t=0;const e=Xm.exec(n);if(K(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:it(n.seconds),nanos:it(n.nanos)}}function it(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function pe(n){return typeof n=="string"?gt.fromBase64String(n):gt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu="server_timestamp",Du="__type__",Vu="__previous_value__",ku="__local_write_time__";function Ai(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{})[Du])===null||e===void 0?void 0:e.stringValue)===Pu}function zr(n){const t=n.mapValue.fields[Vu];return Ai(t)?zr(t):t}function Nn(n){const t=me(n.mapValue.fields[ku].timestampValue);return new et(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(t,e,r,s,o,a,u,h,d,g){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=g}}const Cr="(default)";class Mn{constructor(t,e){this.projectId=t,this.database=e||Cr}static empty(){return new Mn("","")}get isDefaultDatabase(){return this.database===Cr}isEqual(t){return t instanceof Mn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu="__type__",Zm="__max__",pr={mapValue:{}},Mu="__vector__",Pr="value";function ge(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ai(n)?4:ep(n)?9007199254740991:tp(n)?10:11:O(28295,{value:n})}function Kt(n,t){if(n===t)return!0;const e=ge(n);if(e!==ge(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Nn(n).isEqual(Nn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=me(s.timestampValue),u=me(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return pe(s.bytesValue).isEqual(pe(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return it(s.geoPointValue.latitude)===it(o.geoPointValue.latitude)&&it(s.geoPointValue.longitude)===it(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return it(s.integerValue)===it(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=it(s.doubleValue),u=it(o.doubleValue);return a===u?xr(a)===xr(u):isNaN(a)&&isNaN(u)}return!1}(n,t);case 9:return Ke(n.arrayValue.values||[],t.arrayValue.values||[],Kt);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},u=o.mapValue.fields||{};if(Ua(a)!==Ua(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!Kt(a[h],u[h])))return!1;return!0}(n,t);default:return O(52216,{left:n})}}function On(n,t){return(n.values||[]).find(e=>Kt(e,t))!==void 0}function Qe(n,t){if(n===t)return 0;const e=ge(n),r=ge(t);if(e!==r)return q(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return q(n.booleanValue,t.booleanValue);case 2:return function(o,a){const u=it(o.integerValue||o.doubleValue),h=it(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,t);case 3:return $a(n.timestampValue,t.timestampValue);case 4:return $a(Nn(n),Nn(t));case 5:return Qs(n.stringValue,t.stringValue);case 6:return function(o,a){const u=pe(o),h=pe(a);return u.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){const g=q(u[d],h[d]);if(g!==0)return g}return q(u.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const u=q(it(o.latitude),it(a.latitude));return u!==0?u:q(it(o.longitude),it(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return qa(n.arrayValue,t.arrayValue);case 10:return function(o,a){var u,h,d,g;const I=o.fields||{},T=a.fields||{},R=(u=I[Pr])===null||u===void 0?void 0:u.arrayValue,C=(h=T[Pr])===null||h===void 0?void 0:h.arrayValue,V=q(((d=R?.values)===null||d===void 0?void 0:d.length)||0,((g=C?.values)===null||g===void 0?void 0:g.length)||0);return V!==0?V:qa(R,C)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===pr.mapValue&&a===pr.mapValue)return 0;if(o===pr.mapValue)return 1;if(a===pr.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),d=a.fields||{},g=Object.keys(d);h.sort(),g.sort();for(let I=0;I<h.length&&I<g.length;++I){const T=Qs(h[I],g[I]);if(T!==0)return T;const R=Qe(u[h[I]],d[g[I]]);if(R!==0)return R}return q(h.length,g.length)}(n.mapValue,t.mapValue);default:throw O(23264,{le:e})}}function $a(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return q(n,t);const e=me(n),r=me(t),s=q(e.seconds,r.seconds);return s!==0?s:q(e.nanos,r.nanos)}function qa(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=Qe(e[s],r[s]);if(o)return o}return q(e.length,r.length)}function Je(n){return Js(n)}function Js(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=me(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return pe(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return M.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Js(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Js(e.fields[a])}`;return s+"}"}(n.mapValue):O(61005,{value:n})}function Er(n){switch(ge(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=zr(n);return t?16+Er(t):16;case 5:return 2*n.stringValue.length;case 6:return pe(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+Er(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Ie(r.fields,(o,a)=>{s+=o.length+Er(a)}),s}(n.mapValue);default:throw O(13486,{value:n})}}function Ha(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Xs(n){return!!n&&"integerValue"in n}function Si(n){return!!n&&"arrayValue"in n}function za(n){return!!n&&"nullValue"in n}function Ga(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function vr(n){return!!n&&"mapValue"in n}function tp(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{})[Nu])===null||e===void 0?void 0:e.stringValue)===Mu}function bn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Ie(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=bn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=bn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function ep(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Zm}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t){this.value=t}static empty(){return new xt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!vr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=bn(e)}setAll(t){let e=pt.emptyPath(),r={},s=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=u.popLast()}a?r[u.lastSegment()]=bn(a):s.push(u.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());vr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Kt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];vr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Ie(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new xt(bn(this.value))}}function Ou(n){const t=[];return Ie(n.fields,(e,r)=>{const s=new pt([e]);if(vr(r)){const o=Ou(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new Dt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t,e,r,s,o,a,u){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(t){return new wt(t,0,F.min(),F.min(),F.min(),xt.empty(),0)}static newFoundDocument(t,e,r,s){return new wt(t,1,e,F.min(),r,s,0)}static newNoDocument(t,e){return new wt(t,2,e,F.min(),F.min(),xt.empty(),0)}static newUnknownDocument(t,e){return new wt(t,3,e,F.min(),F.min(),xt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof wt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(t,e){this.position=t,this.inclusive=e}}function Wa(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=M.comparator(M.fromName(a.referenceValue),e.key):r=Qe(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ka(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Kt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(t,e="asc"){this.field=t,this.dir=e}}function np(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{}class ut extends Lu{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new sp(t,e,r):e==="array-contains"?new ap(t,r):e==="in"?new cp(t,r):e==="not-in"?new up(t,r):e==="array-contains-any"?new lp(t,r):new ut(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new ip(t,r):new op(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Qe(e,this.value)):e!==null&&ge(this.value)===ge(e)&&this.matchesComparison(Qe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return O(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jt extends Lu{constructor(t,e){super(),this.filters=t,this.op=e,this.he=null}static create(t,e){return new jt(t,e)}matches(t){return Fu(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Fu(n){return n.op==="and"}function Bu(n){return rp(n)&&Fu(n)}function rp(n){for(const t of n.filters)if(t instanceof jt)return!1;return!0}function Ys(n){if(n instanceof ut)return n.field.canonicalString()+n.op.toString()+Je(n.value);if(Bu(n))return n.filters.map(t=>Ys(t)).join(",");{const t=n.filters.map(e=>Ys(e)).join(",");return`${n.op}(${t})`}}function Uu(n,t){return n instanceof ut?function(r,s){return s instanceof ut&&r.op===s.op&&r.field.isEqual(s.field)&&Kt(r.value,s.value)}(n,t):n instanceof jt?function(r,s){return s instanceof jt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,u)=>o&&Uu(a,s.filters[u]),!0):!1}(n,t):void O(19439)}function ju(n){return n instanceof ut?function(e){return`${e.field.canonicalString()} ${e.op} ${Je(e.value)}`}(n):n instanceof jt?function(e){return e.op.toString()+" {"+e.getFilters().map(ju).join(" ,")+"}"}(n):"Filter"}class sp extends ut{constructor(t,e,r){super(t,e,r),this.key=M.fromName(r.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class ip extends ut{constructor(t,e){super(t,"in",e),this.keys=$u("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class op extends ut{constructor(t,e){super(t,"not-in",e),this.keys=$u("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function $u(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>M.fromName(r.referenceValue))}class ap extends ut{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Si(e)&&On(e.arrayValue,this.value)}}class cp extends ut{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&On(this.value.arrayValue,e)}}class up extends ut{constructor(t,e){super(t,"not-in",e)}matches(t){if(On(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!On(this.value.arrayValue,e)}}class lp extends ut{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Si(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>On(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(t,e=null,r=[],s=[],o=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=u,this.Pe=null}}function Qa(n,t=null,e=[],r=[],s=null,o=null,a=null){return new hp(n,t,e,r,s,o,a)}function Ri(n){const t=B(n);if(t.Pe===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Ys(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Hr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Je(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Je(r)).join(",")),t.Pe=e}return t.Pe}function bi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!np(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Uu(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ka(n.startAt,t.startAt)&&Ka(n.endAt,t.endAt)}function Zs(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(t,e=null,r=[],s=[],o=null,a="F",u=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function dp(n,t,e,r,s,o,a,u){return new nn(n,t,e,r,s,o,a,u)}function Gr(n){return new nn(n)}function Ja(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function qu(n){return n.collectionGroup!==null}function xn(n){const t=B(n);if(t.Te===null){t.Te=[];const e=new Set;for(const o of t.explicitOrderBy)t.Te.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new ht(pt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Te.push(new Ln(o,r))}),e.has(pt.keyField().canonicalString())||t.Te.push(new Ln(pt.keyField(),r))}return t.Te}function Ht(n){const t=B(n);return t.Ie||(t.Ie=fp(t,xn(n))),t.Ie}function fp(n,t){if(n.limitType==="F")return Qa(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Ln(s.field,o)});const e=n.endAt?new Dr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Dr(n.startAt.position,n.startAt.inclusive):null;return Qa(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ti(n,t){const e=n.filters.concat([t]);return new nn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function ei(n,t,e){return new nn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Wr(n,t){return bi(Ht(n),Ht(t))&&n.limitType===t.limitType}function Hu(n){return`${Ri(Ht(n))}|lt:${n.limitType}`}function He(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>ju(s)).join(", ")}]`),Hr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Je(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Je(s)).join(",")),`Target(${r})`}(Ht(n))}; limitType=${n.limitType})`}function Kr(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of xn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,u,h){const d=Wa(a,u,h);return a.inclusive?d<=0:d<0}(r.startAt,xn(r),s)||r.endAt&&!function(a,u,h){const d=Wa(a,u,h);return a.inclusive?d>=0:d>0}(r.endAt,xn(r),s))}(n,t)}function mp(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function zu(n){return(t,e)=>{let r=!1;for(const s of xn(n)){const o=pp(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function pp(n,t,e){const r=n.field.isKeyField()?M.comparator(t.key,e.key):function(o,a,u){const h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?Qe(h,d):O(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return O(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ie(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return xu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp=new nt(M.comparator);function ee(){return gp}const Gu=new nt(M.comparator);function Tn(...n){let t=Gu;for(const e of n)t=t.insert(e.key,e);return t}function Wu(n){let t=Gu;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Pe(){return Cn()}function Ku(){return Cn()}function Cn(){return new Le(n=>n.toString(),(n,t)=>n.isEqual(t))}const yp=new nt(M.comparator),_p=new ht(M.comparator);function H(...n){let t=_p;for(const e of n)t=t.add(e);return t}const Ep=new ht(q);function vp(){return Ep}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xr(t)?"-0":t}}function Qu(n){return{integerValue:""+n}}function Ip(n,t){return Km(t)?Qu(t):xi(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(){this._=void 0}}function Tp(n,t,e){return n instanceof Fn?function(s,o){const a={fields:{[Du]:{stringValue:Pu},[ku]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Ai(o)&&(o=zr(o)),o&&(a.fields[Vu]=o),{mapValue:a}}(e,t):n instanceof Bn?Xu(n,t):n instanceof Un?Yu(n,t):function(s,o){const a=Ju(s,o),u=Xa(a)+Xa(s.Ee);return Xs(a)&&Xs(s.Ee)?Qu(u):xi(s.serializer,u)}(n,t)}function wp(n,t,e){return n instanceof Bn?Xu(n,t):n instanceof Un?Yu(n,t):e}function Ju(n,t){return n instanceof Vr?function(r){return Xs(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Fn extends Qr{}class Bn extends Qr{constructor(t){super(),this.elements=t}}function Xu(n,t){const e=Zu(t);for(const r of n.elements)e.some(s=>Kt(s,r))||e.push(r);return{arrayValue:{values:e}}}class Un extends Qr{constructor(t){super(),this.elements=t}}function Yu(n,t){let e=Zu(t);for(const r of n.elements)e=e.filter(s=>!Kt(s,r));return{arrayValue:{values:e}}}class Vr extends Qr{constructor(t,e){super(),this.serializer=t,this.Ee=e}}function Xa(n){return it(n.integerValue||n.doubleValue)}function Zu(n){return Si(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(t,e){this.field=t,this.transform=e}}function Sp(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Bn&&s instanceof Bn||r instanceof Un&&s instanceof Un?Ke(r.elements,s.elements,Kt):r instanceof Vr&&s instanceof Vr?Kt(r.Ee,s.Ee):r instanceof Fn&&s instanceof Fn}(n.transform,t.transform)}class Rp{constructor(t,e){this.version=t,this.transformResults=e}}class Ut{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ut}static exists(t){return new Ut(void 0,t)}static updateTime(t){return new Ut(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ir(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Jr{}function tl(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Ci(n.key,Ut.none()):new qn(n.key,n.data,Ut.none());{const e=n.data,r=xt.empty();let s=new ht(pt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new Te(n.key,r,new Dt(s.toArray()),Ut.none())}}function bp(n,t,e){n instanceof qn?function(s,o,a){const u=s.value.clone(),h=Za(s.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):n instanceof Te?function(s,o,a){if(!Ir(s.precondition,o))return void o.convertToUnknownDocument(a.version);const u=Za(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(el(s)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Pn(n,t,e,r){return n instanceof qn?function(o,a,u,h){if(!Ir(o.precondition,a))return u;const d=o.value.clone(),g=tc(o.fieldTransforms,h,a);return d.setAll(g),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof Te?function(o,a,u,h){if(!Ir(o.precondition,a))return u;const d=tc(o.fieldTransforms,h,a),g=a.data;return g.setAll(el(o)),g.setAll(d),a.convertToFoundDocument(a.version,g).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(I=>I.field))}(n,t,e,r):function(o,a,u){return Ir(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,t,e)}function xp(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=Ju(r.transform,s||null);o!=null&&(e===null&&(e=xt.empty()),e.set(r.field,o))}return e||null}function Ya(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ke(r,s,(o,a)=>Sp(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class qn extends Jr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Te extends Jr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function el(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Za(n,t,e){const r=new Map;K(n.length===e.length,32656,{Ae:e.length,Re:n.length});for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,u=t.data.field(o.field);r.set(o.field,wp(a,u,e[s]))}return r}function tc(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,Tp(o,a,t))}return r}class Ci extends Jr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Cp extends Jr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&bp(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Pn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Pn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Ku();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=e.has(s.key)?null:u;const h=tl(a,u);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),H())}isEqual(t){return this.batchId===t.batchId&&Ke(this.mutations,t.mutations,(e,r)=>Ya(e,r))&&Ke(this.baseMutations,t.baseMutations,(e,r)=>Ya(e,r))}}class Pi{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){K(t.mutations.length===r.length,58842,{Ve:t.mutations.length,me:r.length});let s=function(){return yp}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Pi(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct,z;function kp(n){switch(n){case b.OK:return O(64938);case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return O(15467,{code:n})}}function nl(n){if(n===void 0)return te("GRPC error has no .code"),b.UNKNOWN;switch(n){case ct.OK:return b.OK;case ct.CANCELLED:return b.CANCELLED;case ct.UNKNOWN:return b.UNKNOWN;case ct.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case ct.INTERNAL:return b.INTERNAL;case ct.UNAVAILABLE:return b.UNAVAILABLE;case ct.UNAUTHENTICATED:return b.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case ct.NOT_FOUND:return b.NOT_FOUND;case ct.ALREADY_EXISTS:return b.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return b.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case ct.ABORTED:return b.ABORTED;case ct.OUT_OF_RANGE:return b.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return b.UNIMPLEMENTED;case ct.DATA_LOSS:return b.DATA_LOSS;default:return O(39323,{code:n})}}(z=ct||(ct={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np=new ue([4294967295,4294967295],0);function ec(n){const t=Au().encode(n),e=new gu;return e.update(t),new Uint8Array(e.digest())}function nc(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ue([e,r],0),new ue([s,o],0)]}class Di{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new wn(`Invalid padding: ${e}`);if(r<0)throw new wn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new wn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new wn(`Invalid padding when bitmap length is 0: ${e}`);this.fe=8*t.length-e,this.ge=ue.fromNumber(this.fe)}pe(t,e,r){let s=t.add(e.multiply(ue.fromNumber(r)));return s.compare(Np)===1&&(s=new ue([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.fe===0)return!1;const e=ec(t),[r,s]=nc(e);for(let o=0;o<this.hashCount;o++){const a=this.pe(r,s,o);if(!this.ye(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Di(o,s,e);return r.forEach(u=>a.insert(u)),a}insert(t){if(this.fe===0)return;const e=ec(t),[r,s]=nc(e);for(let o=0;o<this.hashCount;o++){const a=this.pe(r,s,o);this.we(a)}}we(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class wn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,Hn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Xr(F.min(),s,new nt(q),ee(),H())}}class Hn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Hn(r,e,H(),H(),H())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(t,e,r,s){this.Se=t,this.removedTargetIds=e,this.key=r,this.be=s}}class rl{constructor(t,e){this.targetId=t,this.De=e}}class sl{constructor(t,e,r=gt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class rc{constructor(){this.ve=0,this.Ce=sc(),this.Fe=gt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(t){t.approximateByteSize()>0&&(this.xe=!0,this.Fe=t)}Le(){let t=H(),e=H(),r=H();return this.Ce.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:O(38017,{changeType:o})}}),new Hn(this.Fe,this.Me,t,e,r)}ke(){this.xe=!1,this.Ce=sc()}qe(t,e){this.xe=!0,this.Ce=this.Ce.insert(t,e)}Qe(t){this.xe=!0,this.Ce=this.Ce.remove(t)}$e(){this.ve+=1}Ue(){this.ve-=1,K(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Mp{constructor(t){this.We=t,this.Ge=new Map,this.ze=ee(),this.je=gr(),this.Je=gr(),this.He=new nt(q)}Ye(t){for(const e of t.Se)t.be&&t.be.isFoundDocument()?this.Ze(e,t.be):this.Xe(e,t.key,t.be);for(const e of t.removedTargetIds)this.Xe(e,t.key,t.be)}et(t){this.forEachTarget(t,e=>{const r=this.tt(e);switch(t.state){case 0:this.nt(e)&&r.Be(t.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(t.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(e);break;case 3:this.nt(e)&&(r.Ke(),r.Be(t.resumeToken));break;case 4:this.nt(e)&&(this.rt(e),r.Be(t.resumeToken));break;default:O(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ge.forEach((r,s)=>{this.nt(s)&&e(s)})}it(t){const e=t.targetId,r=t.De.count,s=this.st(e);if(s){const o=s.target;if(Zs(o))if(r===0){const a=new M(o.path);this.Xe(e,a,wt.newNoDocument(a,F.min()))}else K(r===1,20013,{expectedCount:r});else{const a=this.ot(e);if(a!==r){const u=this._t(t),h=u?this.ut(u,t,a):1;if(h!==0){this.rt(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(e,d)}}}}}_t(t){const e=t.De.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,u;try{a=pe(r).toUint8Array()}catch(h){if(h instanceof Cu)return de("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new Di(a,s,o)}catch(h){return de(h instanceof wn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.fe===0?null:u}ut(t,e,r){return e.De.count===r-this.ht(t,e.targetId)?0:2}ht(t,e){const r=this.We.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.We.lt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(u)||(this.Xe(e,o,null),s++)}),s}Pt(t){const e=new Map;this.Ge.forEach((o,a)=>{const u=this.st(a);if(u){if(o.current&&Zs(u.target)){const h=new M(u.target.path);this.Tt(h).has(a)||this.It(a,h)||this.Xe(a,h,wt.newNoDocument(h,t))}o.Ne&&(e.set(a,o.Le()),o.ke())}});let r=H();this.Je.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{const d=this.st(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.ze.forEach((o,a)=>a.setReadTime(t));const s=new Xr(t,e,this.He,this.ze,r);return this.ze=ee(),this.je=gr(),this.Je=gr(),this.He=new nt(q),s}Ze(t,e){if(!this.nt(t))return;const r=this.It(t,e.key)?2:0;this.tt(t).qe(e.key,r),this.ze=this.ze.insert(e.key,e),this.je=this.je.insert(e.key,this.Tt(e.key).add(t)),this.Je=this.Je.insert(e.key,this.dt(e.key).add(t))}Xe(t,e,r){if(!this.nt(t))return;const s=this.tt(t);this.It(t,e)?s.qe(e,1):s.Qe(e),this.Je=this.Je.insert(e,this.dt(e).delete(t)),this.Je=this.Je.insert(e,this.dt(e).add(t)),r&&(this.ze=this.ze.insert(e,r))}removeTarget(t){this.Ge.delete(t)}ot(t){const e=this.tt(t).Le();return this.We.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.tt(t).$e()}tt(t){let e=this.Ge.get(t);return e||(e=new rc,this.Ge.set(t,e)),e}dt(t){let e=this.Je.get(t);return e||(e=new ht(q),this.Je=this.Je.insert(t,e)),e}Tt(t){let e=this.je.get(t);return e||(e=new ht(q),this.je=this.je.insert(t,e)),e}nt(t){const e=this.st(t)!==null;return e||N("WatchChangeAggregator","Detected inactive target",t),e}st(t){const e=this.Ge.get(t);return e&&e.Oe?null:this.We.Et(t)}rt(t){this.Ge.set(t,new rc),this.We.getRemoteKeysForTarget(t).forEach(e=>{this.Xe(t,e,null)})}It(t,e){return this.We.getRemoteKeysForTarget(t).has(e)}}function gr(){return new nt(M.comparator)}function sc(){return new nt(M.comparator)}const Op={asc:"ASCENDING",desc:"DESCENDING"},Lp={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Fp={and:"AND",or:"OR"};class Bp{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ni(n,t){return n.useProto3Json||Hr(t)?t:{value:t}}function kr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function il(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Up(n,t){return kr(n,t.toTimestamp())}function zt(n){return K(!!n,49232),F.fromTimestamp(function(e){const r=me(e);return new et(r.seconds,r.nanos)}(n))}function Vi(n,t){return ri(n,t).canonicalString()}function ri(n,t){const e=function(s){return new X(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function ol(n){const t=X.fromString(n);return K(hl(t),10190,{key:t.toString()}),t}function si(n,t){return Vi(n.databaseId,t.path)}function Os(n,t){const e=ol(t);if(e.get(1)!==n.databaseId.projectId)throw new k(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new k(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new M(cl(e))}function al(n,t){return Vi(n.databaseId,t)}function jp(n){const t=ol(n);return t.length===4?X.emptyPath():cl(t)}function ii(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function cl(n){return K(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function ic(n,t,e){return{name:si(n,t),fields:e.value.mapValue.fields}}function $p(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:O(39313,{state:d})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(d,g){return d.useProto3Json?(K(g===void 0||typeof g=="string",58123),gt.fromBase64String(g||"")):(K(g===void 0||g instanceof Buffer||g instanceof Uint8Array,16193),gt.fromUint8Array(g||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(d){const g=d.code===void 0?b.UNKNOWN:nl(d.code);return new k(g,d.message||"")}(a);e=new sl(r,s,o,u||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Os(n,r.document.name),o=zt(r.document.updateTime),a=r.document.createTime?zt(r.document.createTime):F.min(),u=new xt({mapValue:{fields:r.document.fields}}),h=wt.newFoundDocument(s,o,a,u),d=r.targetIds||[],g=r.removedTargetIds||[];e=new Tr(d,g,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Os(n,r.document),o=r.readTime?zt(r.readTime):F.min(),a=wt.newNoDocument(s,o),u=r.removedTargetIds||[];e=new Tr([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Os(n,r.document),o=r.removedTargetIds||[];e=new Tr([],o,s,null)}else{if(!("filter"in t))return O(11601,{At:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Vp(s,o),u=r.targetId;e=new rl(u,a)}}return e}function qp(n,t){let e;if(t instanceof qn)e={update:ic(n,t.key,t.value)};else if(t instanceof Ci)e={delete:si(n,t.key)};else if(t instanceof Te)e={update:ic(n,t.key,t.data),updateMask:Yp(t.fieldMask)};else{if(!(t instanceof Cp))return O(16599,{Rt:t.type});e={verify:si(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const u=a.transform;if(u instanceof Fn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Bn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Un)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Vr)return{fieldPath:a.field.canonicalString(),increment:u.Ee};throw O(20930,{transform:a.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Up(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:O(27497)}(n,t.precondition)),e}function Hp(n,t){return n&&n.length>0?(K(t!==void 0,14353),n.map(e=>function(s,o){let a=s.updateTime?zt(s.updateTime):zt(o);return a.isEqual(F.min())&&(a=zt(o)),new Rp(a,s.transformResults||[])}(e,t))):[]}function zp(n,t){return{documents:[al(n,t.path)]}}function Gp(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=al(n,s);const o=function(d){if(d.length!==0)return ll(jt.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(g=>function(T){return{field:ze(T.field),direction:Qp(T.dir)}}(g))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=ni(n,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{Vt:e,parent:s}}function Wp(n){let t=jp(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){K(r===1,65062);const g=e.from[0];g.allDescendants?s=g.collectionId:t=t.child(g.collectionId)}let o=[];e.where&&(o=function(I){const T=ul(I);return T instanceof jt&&Bu(T)?T.getFilters():[T]}(e.where));let a=[];e.orderBy&&(a=function(I){return I.map(T=>function(C){return new Ln(Ge(C.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(T))}(e.orderBy));let u=null;e.limit&&(u=function(I){let T;return T=typeof I=="object"?I.value:I,Hr(T)?null:T}(e.limit));let h=null;e.startAt&&(h=function(I){const T=!!I.before,R=I.values||[];return new Dr(R,T)}(e.startAt));let d=null;return e.endAt&&(d=function(I){const T=!I.before,R=I.values||[];return new Dr(R,T)}(e.endAt)),dp(t,s,a,o,u,"F",h,d)}function Kp(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O(28987,{purpose:s})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function ul(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Ge(e.unaryFilter.field);return ut.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ge(e.unaryFilter.field);return ut.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ge(e.unaryFilter.field);return ut.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ge(e.unaryFilter.field);return ut.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return O(61313);default:return O(60726)}}(n):n.fieldFilter!==void 0?function(e){return ut.create(Ge(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return O(58110);default:return O(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return jt.create(e.compositeFilter.filters.map(r=>ul(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return O(1026)}}(e.compositeFilter.op))}(n):O(30097,{filter:n})}function Qp(n){return Op[n]}function Jp(n){return Lp[n]}function Xp(n){return Fp[n]}function ze(n){return{fieldPath:n.canonicalString()}}function Ge(n){return pt.fromServerFormat(n.fieldPath)}function ll(n){return n instanceof ut?function(e){if(e.op==="=="){if(Ga(e.value))return{unaryFilter:{field:ze(e.field),op:"IS_NAN"}};if(za(e.value))return{unaryFilter:{field:ze(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ga(e.value))return{unaryFilter:{field:ze(e.field),op:"IS_NOT_NAN"}};if(za(e.value))return{unaryFilter:{field:ze(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ze(e.field),op:Jp(e.op),value:e.value}}}(n):n instanceof jt?function(e){const r=e.getFilters().map(s=>ll(s));return r.length===1?r[0]:{compositeFilter:{op:Xp(e.op),filters:r}}}(n):O(54877,{filter:n})}function Yp(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function hl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(t,e,r,s,o=F.min(),a=F.min(),u=gt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(t){return new oe(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new oe(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new oe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new oe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(t){this.gt=t}}function tg(n){const t=Wp({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ei(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(){this.Dn=new ng}addToCollectionParentIndex(t,e){return this.Dn.add(e),x.resolve()}getCollectionParents(t,e){return x.resolve(this.Dn.getEntries(e))}addFieldIndex(t,e){return x.resolve()}deleteFieldIndex(t,e){return x.resolve()}deleteAllFieldIndexes(t){return x.resolve()}createTargetIndexes(t,e){return x.resolve()}getDocumentsMatchingTarget(t,e){return x.resolve(null)}getIndexType(t,e){return x.resolve(0)}getFieldIndexes(t,e){return x.resolve([])}getNextCollectionGroupToUpdate(t){return x.resolve(null)}getMinOffset(t,e){return x.resolve(fe.min())}getMinOffsetFromCollectionGroup(t,e){return x.resolve(fe.min())}updateCollectionGroup(t,e,r){return x.resolve()}updateIndexEntries(t,e){return x.resolve()}}class ng{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new ht(X.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new ht(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},dl=41943040;class bt{static withCacheSize(t){return new bt(t,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt.DEFAULT_COLLECTION_PERCENTILE=10,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bt.DEFAULT=new bt(dl,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bt.DISABLED=new bt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(t){this._r=t}next(){return this._r+=2,this._r}static ar(){return new Xe(0)}static ur(){return new Xe(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac="LruGarbageCollector",rg=1048576;function cc([n,t],[e,r]){const s=q(n,e);return s===0?q(t,r):s}class sg{constructor(t){this.Tr=t,this.buffer=new ht(cc),this.Ir=0}dr(){return++this.Ir}Er(t){const e=[t,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();cc(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class ig{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(t){N(ac,`Garbage collection scheduled in ${t}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){en(e)?N(ac,"Ignoring IndexedDB error during garbage collection: ",e):await tn(e)}await this.Rr(3e5)})}}class og{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.mr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return x.resolve(qr.ue);const r=new sg(e);return this.Vr.forEachTarget(t,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.gr(t,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.Vr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(oc)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),oc):this.pr(t,e))}getCacheSize(t){return this.Vr.getCacheSize(t)}pr(t,e){let r,s,o,a,u,h,d;const g=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(I=>(I>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),s=this.params.maximumSequenceNumbersToCollect):s=I,a=Date.now(),this.nthSequenceNumber(t,s))).next(I=>(r=I,u=Date.now(),this.removeTargets(t,r,e))).next(I=>(o=I,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(I=>(d=Date.now(),qe()<=G.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-g}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${o} targets in `+(h-u)+`ms
	Removed ${I} documents in `+(d-h)+`ms
Total Duration: ${d-g}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:I})))}}function ag(n,t){return new og(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(){this.changes=new Le(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,wt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?x.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&Pn(r.mutation,s,Dt.empty(),et.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,H()).next(()=>r))}getLocalViewOfDocuments(t,e,r=H()){const s=Pe();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=Tn();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=Pe();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,H()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,r,s){let o=ee();const a=Cn(),u=function(){return Cn()}();return e.forEach((h,d)=>{const g=r.get(d.key);s.has(d.key)&&(g===void 0||g.mutation instanceof Te)?o=o.insert(d.key,d):g!==void 0?(a.set(d.key,g.mutation.getFieldMask()),Pn(g.mutation,d,g.mutation.getFieldMask(),et.now())):a.set(d.key,Dt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,g)=>a.set(d,g)),e.forEach((d,g)=>{var I;return u.set(d,new ug(g,(I=a.get(d))!==null&&I!==void 0?I:null))}),u))}recalculateAndSaveOverlays(t,e){const r=Cn();let s=new nt((a,u)=>a-u),o=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let g=r.get(h)||Dt.empty();g=u.applyToLocalView(d,g),r.set(h,g);const I=(s.get(u.batchId)||H()).add(h);s=s.insert(u.batchId,I)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),d=h.key,g=h.value,I=Ku();g.forEach(T=>{if(!o.has(T)){const R=tl(e.get(T),r.get(T));R!==null&&I.set(T,R),o=o.add(T)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,I))}return x.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):qu(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):x.resolve(Pe());let u=kn,h=o;return a.next(d=>x.forEach(d,(g,I)=>(u<I.largestBatchId&&(u=I.largestBatchId),o.get(g)?x.resolve():this.remoteDocumentCache.getEntry(t,g).next(T=>{h=h.insert(g,T)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,H())).next(g=>({batchId:u,changes:Wu(g)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(r=>{let s=Tn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=Tn();return this.indexManager.getCollectionParents(t,o).next(u=>x.forEach(u,h=>{const d=function(I,T){return new nn(T,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next(g=>{g.forEach((I,T)=>{a=a.insert(I,T)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,d)=>{const g=d.getKey();a.get(g)===null&&(a=a.insert(g,wt.newInvalidDocument(g)))});let u=Tn();return a.forEach((h,d)=>{const g=o.get(h);g!==void 0&&Pn(g.mutation,d,Dt.empty(),et.now()),Kr(e,d)&&(u=u.insert(h,d))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(t){this.serializer=t,this.Br=new Map,this.Lr=new Map}getBundleMetadata(t,e){return x.resolve(this.Br.get(e))}saveBundleMetadata(t,e){return this.Br.set(e.id,function(s){return{id:s.id,version:s.version,createTime:zt(s.createTime)}}(e)),x.resolve()}getNamedQuery(t,e){return x.resolve(this.Lr.get(e))}saveNamedQuery(t,e){return this.Lr.set(e.name,function(s){return{name:s.name,query:tg(s.bundledQuery),readTime:zt(s.readTime)}}(e)),x.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(){this.overlays=new nt(M.comparator),this.kr=new Map}getOverlay(t,e){return x.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Pe();return x.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.wt(t,e,o)}),x.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.kr.delete(r)),x.resolve()}getOverlaysForCollection(t,e,r){const s=Pe(),o=e.length+1,a=new M(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return x.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new nt((d,g)=>d-g);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let g=o.get(d.largestBatchId);g===null&&(g=Pe(),o=o.insert(d.largestBatchId,g)),g.set(d.getKey(),d)}}const u=Pe(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,g)=>u.set(d,g)),!(u.size()>=s)););return x.resolve(u)}wt(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Dp(e,r));let o=this.kr.get(e);o===void 0&&(o=H(),this.kr.set(e,o)),this.kr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(){this.sessionToken=gt.EMPTY_BYTE_STRING}getSessionToken(t){return x.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,x.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(){this.qr=new ht(dt.Qr),this.$r=new ht(dt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(t,e){const r=new dt(t,e);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Wr(new dt(t,e))}Gr(t,e){t.forEach(r=>this.removeReference(r,e))}zr(t){const e=new M(new X([])),r=new dt(e,t),s=new dt(e,t+1),o=[];return this.$r.forEachInRange([r,s],a=>{this.Wr(a),o.push(a.key)}),o}jr(){this.qr.forEach(t=>this.Wr(t))}Wr(t){this.qr=this.qr.delete(t),this.$r=this.$r.delete(t)}Jr(t){const e=new M(new X([])),r=new dt(e,t),s=new dt(e,t+1);let o=H();return this.$r.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new dt(t,0),r=this.qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class dt{constructor(t,e){this.key=t,this.Hr=e}static Qr(t,e){return M.comparator(t.key,e.key)||q(t.Hr,e.Hr)}static Ur(t,e){return q(t.Hr,e.Hr)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.er=1,this.Yr=new ht(dt.Qr)}checkEmpty(t){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Pp(o,e,r,s);this.mutationQueue.push(a);for(const u of s)this.Yr=this.Yr.add(new dt(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return x.resolve(a)}lookupMutationBatch(t,e){return x.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Xr(r),o=s<0?0:s;return x.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?wi:this.er-1)}getAllMutationBatches(t){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new dt(e,0),s=new dt(e,Number.POSITIVE_INFINITY),o=[];return this.Yr.forEachInRange([r,s],a=>{const u=this.Zr(a.Hr);o.push(u)}),x.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ht(q);return e.forEach(s=>{const o=new dt(s,0),a=new dt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([o,a],u=>{r=r.add(u.Hr)})}),x.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const a=new dt(new M(o),0);let u=new ht(q);return this.Yr.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(u=u.add(h.Hr)),!0)},a),x.resolve(this.ei(u))}ei(t){const e=[];return t.forEach(r=>{const s=this.Zr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){K(this.ti(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return x.forEach(e.mutations,s=>{const o=new dt(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Yr=r})}rr(t){}containsKey(t,e){const r=new dt(e,0),s=this.Yr.firstAfterOrEqual(r);return x.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,x.resolve()}ti(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(t){this.ni=t,this.docs=function(){return new nt(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.ni(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return x.resolve(r?r.document.mutableCopy():wt.newInvalidDocument(e))}getEntries(t,e){let r=ee();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():wt.newInvalidDocument(s))}),x.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=ee();const a=e.path,u=new M(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:d,value:{document:g}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Hm(qm(g),r)<=0||(s.has(g.key)||Kr(e,g))&&(o=o.insert(g.key,g.mutableCopy()))}return x.resolve(o)}getAllFromCollectionGroup(t,e,r,s){O(9500)}ri(t,e){return x.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new gg(this)}getSize(t){return x.resolve(this.size)}}class gg extends cg{constructor(t){super(),this.Or=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.Or.addEntry(t,s)):this.Or.removeEntry(r)}),x.waitFor(e)}getFromCache(t,e){return this.Or.getEntry(t,e)}getAllFromCache(t,e){return this.Or.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(t){this.persistence=t,this.ii=new Le(e=>Ri(e),bi),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.si=0,this.oi=new ki,this.targetCount=0,this._i=Xe.ar()}forEachTarget(t,e){return this.ii.forEach((r,s)=>e(s)),x.resolve()}getLastRemoteSnapshotVersion(t){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return x.resolve(this.si)}allocateTargetId(t){return this.highestTargetId=this._i.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.si&&(this.si=e),x.resolve()}hr(t){this.ii.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this._i=new Xe(e),this.highestTargetId=e),t.sequenceNumber>this.si&&(this.si=t.sequenceNumber)}addTargetData(t,e){return this.hr(e),this.targetCount+=1,x.resolve()}updateTargetData(t,e){return this.hr(e),x.resolve()}removeTargetData(t,e){return this.ii.delete(e.target),this.oi.zr(e.targetId),this.targetCount-=1,x.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.ii.forEach((a,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.ii.delete(a),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),x.waitFor(o).next(()=>s)}getTargetCount(t){return x.resolve(this.targetCount)}getTargetData(t,e){const r=this.ii.get(e)||null;return x.resolve(r)}addMatchingKeys(t,e,r){return this.oi.Kr(e,r),x.resolve()}removeMatchingKeys(t,e,r){this.oi.Gr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),x.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.oi.zr(e),x.resolve()}getMatchingKeysForTargetId(t,e){const r=this.oi.Jr(e);return x.resolve(r)}containsKey(t,e){return x.resolve(this.oi.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(t,e){this.ai={},this.overlays={},this.ui=new qr(0),this.ci=!1,this.ci=!0,this.li=new fg,this.referenceDelegate=t(this),this.hi=new yg(this),this.indexManager=new eg,this.remoteDocumentCache=function(s){return new pg(s)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new Zp(e),this.Ti=new hg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new dg,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ai[t.toKey()];return r||(r=new mg(e,this.referenceDelegate),this.ai[t.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(t,e,r){N("MemoryPersistence","Starting transaction:",t);const s=new _g(this.ui.next());return this.referenceDelegate.Ii(),r(s).next(o=>this.referenceDelegate.di(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Ei(t,e){return x.or(Object.values(this.ai).map(r=>()=>r.containsKey(t,e)))}}class _g extends Gm{constructor(t){super(),this.currentSequenceNumber=t}}class Ni{constructor(t){this.persistence=t,this.Ai=new ki,this.Ri=null}static Vi(t){return new Ni(t)}get mi(){if(this.Ri)return this.Ri;throw O(60996)}addReference(t,e,r){return this.Ai.addReference(r,e),this.mi.delete(r.toString()),x.resolve()}removeReference(t,e,r){return this.Ai.removeReference(r,e),this.mi.add(r.toString()),x.resolve()}markPotentiallyOrphaned(t,e){return this.mi.add(e.toString()),x.resolve()}removeTarget(t,e){this.Ai.zr(e.targetId).forEach(s=>this.mi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.mi.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ii(){this.Ri=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.mi,r=>{const s=M.fromPath(r);return this.fi(t,s).next(o=>{o||e.removeEntry(s,F.min())})}).next(()=>(this.Ri=null,e.apply(t)))}updateLimboDocument(t,e){return this.fi(t,e).next(r=>{r?this.mi.delete(e.toString()):this.mi.add(e.toString())})}Pi(t){return 0}fi(t,e){return x.or([()=>x.resolve(this.Ai.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class Nr{constructor(t,e){this.persistence=t,this.gi=new Le(r=>Qm(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=ag(this,e)}static Vi(t,e){return new Nr(t,e)}Ii(){}di(t){return x.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}mr(t){const e=this.yr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}yr(t){let e=0;return this.gr(t,r=>{e++}).next(()=>e)}gr(t,e){return x.forEach(this.gi,(r,s)=>this.Sr(t,r,s).next(o=>o?x.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ri(t,a=>this.Sr(t,a,e).next(u=>{u||(r++,o.removeEntry(a,F.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.gi.set(e,t.currentSequenceNumber),x.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.gi.set(r,t.currentSequenceNumber),x.resolve()}removeReference(t,e,r){return this.gi.set(r,t.currentSequenceNumber),x.resolve()}updateLimboDocument(t,e){return this.gi.set(e,t.currentSequenceNumber),x.resolve()}Pi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Er(t.data.value)),e}Sr(t,e,r){return x.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.gi.get(e);return x.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Is=r,this.ds=s}static Es(t,e){let r=H(),s=H();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Mi(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return Gh()?8:Wm(qh())>0?6:4}()}initialize(t,e){this.gs=t,this.indexManager=e,this.As=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ps(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ys(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Eg;return this.ws(t,e,a).next(u=>{if(o.result=u,this.Rs)return this.Ss(t,e,a,u.size)})}).next(()=>o.result)}Ss(t,e,r,s){return r.documentReadCount<this.Vs?(qe()<=G.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",He(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),x.resolve()):(qe()<=G.DEBUG&&N("QueryEngine","Query:",He(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(qe()<=G.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",He(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ht(e))):x.resolve())}ps(t,e){if(Ja(e))return x.resolve(null);let r=Ht(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=ei(e,null,"F"),r=Ht(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=H(...o);return this.gs.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,r).next(h=>{const d=this.bs(e,u);return this.Ds(e,d,a,h.readTime)?this.ps(t,ei(e,null,"F")):this.vs(t,d,e,h)}))})))}ys(t,e,r,s){return Ja(e)||s.isEqual(F.min())?x.resolve(null):this.gs.getDocuments(t,r).next(o=>{const a=this.bs(e,o);return this.Ds(e,a,r,s)?x.resolve(null):(qe()<=G.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),He(e)),this.vs(t,a,e,$m(s,kn)).next(u=>u))})}bs(t,e){let r=new ht(zu(t));return e.forEach((s,o)=>{Kr(t,o)&&(r=r.add(o))}),r}Ds(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ws(t,e,r){return qe()<=G.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",He(e)),this.gs.getDocumentsMatchingQuery(t,e,fe.min(),r)}vs(t,e,r,s){return this.gs.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi="LocalStore",Ig=3e8;class Tg{constructor(t,e,r,s){this.persistence=t,this.Cs=e,this.serializer=s,this.Fs=new nt(q),this.Ms=new Le(o=>Ri(o),bi),this.xs=new Map,this.Os=t.getRemoteDocumentCache(),this.hi=t.getTargetCache(),this.Ti=t.getBundleCache(),this.Ns(r)}Ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new lg(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Fs))}}function wg(n,t,e,r){return new Tg(n,t,e,r)}async function ml(n,t){const e=B(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.Ns(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let h=H();for(const d of s){a.push(d.batchId);for(const g of d.mutations)h=h.add(g.key)}for(const d of o){u.push(d.batchId);for(const g of d.mutations)h=h.add(g.key)}return e.localDocuments.getDocuments(r,h).next(d=>({Bs:d,removedBatchIds:a,addedBatchIds:u}))})})}function Ag(n,t){const e=B(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.Os.newChangeBuffer({trackRemovals:!0});return function(u,h,d,g){const I=d.batch,T=I.keys();let R=x.resolve();return T.forEach(C=>{R=R.next(()=>g.getEntry(h,C)).next(V=>{const P=d.docVersions.get(C);K(P!==null,48541),V.version.compareTo(P)<0&&(I.applyToRemoteDocument(V,d),V.isValidDocument()&&(V.setReadTime(d.commitVersion),g.addEntry(V)))})}),R.next(()=>u.mutationQueue.removeMutationBatch(h,I))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=H();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(h=h.add(u.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function pl(n){const t=B(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.hi.getLastRemoteSnapshotVersion(e))}function Sg(n,t){const e=B(n),r=t.snapshotVersion;let s=e.Fs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.Os.newChangeBuffer({trackRemovals:!0});s=e.Fs;const u=[];t.targetChanges.forEach((g,I)=>{const T=s.get(I);if(!T)return;u.push(e.hi.removeMatchingKeys(o,g.removedDocuments,I).next(()=>e.hi.addMatchingKeys(o,g.addedDocuments,I)));let R=T.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(I)!==null?R=R.withResumeToken(gt.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):g.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(g.resumeToken,r)),s=s.insert(I,R),function(V,P,j){return V.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=Ig?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(T,R,g)&&u.push(e.hi.updateTargetData(o,R))});let h=ee(),d=H();if(t.documentUpdates.forEach(g=>{t.resolvedLimboDocuments.has(g)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(o,g))}),u.push(Rg(o,a,t.documentUpdates).next(g=>{h=g.Ls,d=g.ks})),!r.isEqual(F.min())){const g=e.hi.getLastRemoteSnapshotVersion(o).next(I=>e.hi.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(g)}return x.waitFor(u).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.Fs=s,o))}function Rg(n,t,e){let r=H(),s=H();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=ee();return e.forEach((u,h)=>{const d=o.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),h.isNoDocument()&&h.version.isEqual(F.min())?(t.removeEntry(u,h.readTime),a=a.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(u,h)):N(Oi,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)}),{Ls:a,ks:s}})}function bg(n,t){const e=B(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=wi),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function xg(n,t){const e=B(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.hi.getTargetData(r,t).next(o=>o?(s=o,x.resolve(s)):e.hi.allocateTargetId(r).next(a=>(s=new oe(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.hi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Fs=e.Fs.insert(r.targetId,r),e.Ms.set(t,r.targetId)),r})}async function oi(n,t,e){const r=B(n),s=r.Fs.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!en(a))throw a;N(Oi,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Fs=r.Fs.remove(t),r.Ms.delete(s.target)}function uc(n,t,e){const r=B(n);let s=F.min(),o=H();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,g){const I=B(h),T=I.Ms.get(g);return T!==void 0?x.resolve(I.Fs.get(T)):I.hi.getTargetData(d,g)}(r,a,Ht(t)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,t,e?s:F.min(),e?o:H())).next(u=>(Cg(r,mp(t),u),{documents:u,qs:o})))}function Cg(n,t,e){let r=n.xs.get(t)||F.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.xs.set(t,r)}class lc{constructor(){this.activeTargetIds=vp()}Gs(t){this.activeTargetIds=this.activeTargetIds.add(t)}zs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Pg{constructor(){this.Fo=new lc,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Fo.Gs(t),this.Mo[t]||"not-current"}updateQueryState(t,e,r){this.Mo[t]=e}removeLocalQueryTarget(t){this.Fo.zs(t)}isLocalQueryTarget(t){return this.Fo.activeTargetIds.has(t)}clearQueryState(t){delete this.Mo[t]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(t){return this.Fo.activeTargetIds.has(t)}start(){return this.Fo=new lc,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{xo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc="ConnectivityMonitor";class dc{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(t){this.ko.push(t)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){N(hc,"Network connectivity changed: AVAILABLE");for(const t of this.ko)t(0)}Lo(){N(hc,"Network connectivity changed: UNAVAILABLE");for(const t of this.ko)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yr=null;function ai(){return yr===null?yr=function(){return 268435456+Math.round(2147483648*Math.random())}():yr++,"0x"+yr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls="RestConnection",Vg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class kg{get Qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=e+"://"+t.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Cr?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(t,e,r,s,o){const a=ai(),u=this.Go(t,e.toUriEncodedString());N(Ls,`Sending RPC '${t}' ${a}:`,u,r);const h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(h,s,o);const{host:d}=new URL(u),g=fi(d);return this.jo(t,u,h,r,g).then(I=>(N(Ls,`Received RPC '${t}' ${a}: `,I),I),I=>{throw de(Ls,`RPC '${t}' ${a} failed with error: `,I,"url: ",u,"request:",r),I})}Jo(t,e,r,s,o,a){return this.Wo(t,e,r,s,o)}zo(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ze}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),r&&r.headers.forEach((s,o)=>t[o]=s)}Go(t,e){const r=Vg[t];return`${this.$o}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(t){this.Ho=t.Ho,this.Yo=t.Yo}Zo(t){this.Xo=t}e_(t){this.t_=t}n_(t){this.r_=t}onMessage(t){this.i_=t}close(){this.Yo()}send(t){this.Ho(t)}s_(){this.Xo()}o_(){this.t_()}__(t){this.r_(t)}a_(t){this.i_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It="WebChannelConnection";class Mg extends kg{constructor(t){super(t),this.u_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}jo(t,e,r,s,o){const a=ai();return new Promise((u,h)=>{const d=new yu;d.setWithCredentials(!0),d.listenOnce(_u.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case _r.NO_ERROR:const I=d.getResponseJson();N(It,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(I)),u(I);break;case _r.TIMEOUT:N(It,`RPC '${t}' ${a} timed out`),h(new k(b.DEADLINE_EXCEEDED,"Request time out"));break;case _r.HTTP_ERROR:const T=d.getStatus();if(N(It,`RPC '${t}' ${a} failed with status:`,T,"response text:",d.getResponseText()),T>0){let R=d.getResponseJson();Array.isArray(R)&&(R=R[0]);const C=R?.error;if(C&&C.status&&C.message){const V=function(j){const L=j.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(L)>=0?L:b.UNKNOWN}(C.status);h(new k(V,C.message))}else h(new k(b.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new k(b.UNAVAILABLE,"Connection failed."));break;default:O(9055,{c_:t,streamId:a,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{N(It,`RPC '${t}' ${a} completed.`)}});const g=JSON.stringify(s);N(It,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",g,r,15)})}P_(t,e,r){const s=ai(),o=[this.$o,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Iu(),u=vu(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.zo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const g=o.join("");N(It,`Creating RPC '${t}' stream ${s}: ${g}`,h);const I=a.createWebChannel(g,h);this.T_(I);let T=!1,R=!1;const C=new Ng({Ho:P=>{R?N(It,`Not sending because RPC '${t}' stream ${s} is closed:`,P):(T||(N(It,`Opening RPC '${t}' stream ${s} transport.`),I.open(),T=!0),N(It,`RPC '${t}' stream ${s} sending:`,P),I.send(P))},Yo:()=>I.close()}),V=(P,j,L)=>{P.listen(j,$=>{try{L($)}catch(Y){setTimeout(()=>{throw Y},0)}})};return V(I,In.EventType.OPEN,()=>{R||(N(It,`RPC '${t}' stream ${s} transport opened.`),C.s_())}),V(I,In.EventType.CLOSE,()=>{R||(R=!0,N(It,`RPC '${t}' stream ${s} transport closed`),C.__(),this.I_(I))}),V(I,In.EventType.ERROR,P=>{R||(R=!0,de(It,`RPC '${t}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),C.__(new k(b.UNAVAILABLE,"The operation could not be completed")))}),V(I,In.EventType.MESSAGE,P=>{var j;if(!R){const L=P.data[0];K(!!L,16349);const $=L,Y=$?.error||((j=$[0])===null||j===void 0?void 0:j.error);if(Y){N(It,`RPC '${t}' stream ${s} received error:`,Y);const Rt=Y.status;let U=function(p){const _=ct[p];if(_!==void 0)return nl(_)}(Rt),E=Y.message;U===void 0&&(U=b.INTERNAL,E="Unknown error status: "+Rt+" with message "+Y.message),R=!0,C.__(new k(U,E)),I.close()}else N(It,`RPC '${t}' stream ${s} received:`,L),C.a_(L)}}),V(u,Eu.STAT_EVENT,P=>{P.stat===Ks.PROXY?N(It,`RPC '${t}' stream ${s} detected buffering proxy`):P.stat===Ks.NOPROXY&&N(It,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.o_()},0),C}terminate(){this.u_.forEach(t=>t.close()),this.u_=[]}T_(t){this.u_.push(t)}I_(t){this.u_=this.u_.filter(e=>e===t)}}function Fs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(n){return new Bp(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Fi=t,this.timerId=e,this.d_=r,this.E_=s,this.A_=o,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(t){this.cancel();const e=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,e-r);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),t())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc="PersistentStream";class yl{constructor(t,e,r,s,o,a,u,h){this.Fi=t,this.w_=r,this.S_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new gl(t,e)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(t){this.q_(),this.stream.send(t)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,t!==4?this.F_.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(te(e.toString()),te("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):e&&e.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.n_(e)}U_(){}auth(){this.state=1;const t=this.K_(this.b_),e=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.b_===e&&this.W_(r,s)},r=>{t(()=>{const s=new k(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)})})}W_(t,e){const r=this.K_(this.b_);this.stream=this.z_(t,e),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(s=>{r(()=>this.G_(s))}),this.stream.onMessage(s=>{r(()=>++this.C_==1?this.j_(s):this.onNext(s))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(t){return N(fc,`close with error: ${t}`),this.stream=null,this.close(4,t)}K_(t){return e=>{this.Fi.enqueueAndForget(()=>this.b_===t?e():(N(fc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Og extends yl{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}z_(t,e){return this.connection.P_("Listen",t,e)}j_(t){return this.onNext(t)}onNext(t){this.F_.reset();const e=$p(this.serializer,t),r=function(o){if(!("targetChange"in o))return F.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?F.min():a.readTime?zt(a.readTime):F.min()}(t);return this.listener.J_(e,r)}H_(t){const e={};e.database=ii(this.serializer),e.addTarget=function(o,a){let u;const h=a.target;if(u=Zs(h)?{documents:zp(o,h)}:{query:Gp(o,h).Vt},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=il(o,a.resumeToken);const d=ni(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(F.min())>0){u.readTime=kr(o,a.snapshotVersion.toTimestamp());const d=ni(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,t);const r=Kp(this.serializer,t);r&&(e.labels=r),this.k_(e)}Y_(t){const e={};e.database=ii(this.serializer),e.removeTarget=t,this.k_(e)}}class Lg extends yl{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(t,e){return this.connection.P_("Write",t,e)}j_(t){return K(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,K(!t.writeResults||t.writeResults.length===0,55816),this.listener.ea()}onNext(t){K(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.F_.reset();const e=Hp(t.writeResults,t.commitTime),r=zt(t.commitTime);return this.listener.ta(r,e)}na(){const t={};t.database=ii(this.serializer),this.k_(t)}X_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>qp(this.serializer,r))};this.k_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{}class Bg extends Fg{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new k(b.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Wo(t,ri(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(b.UNKNOWN,o.toString())})}Jo(t,e,r,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Jo(t,ri(e,r),s,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new k(b.UNKNOWN,a.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class Ug{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(t){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ua("Offline")))}set(t){this.ha(),this.sa=0,t==="Online"&&(this._a=!1),this.ua(t)}ua(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ca(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(te(e),this._a=!1):N("OnlineStateTracker",e)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe="RemoteStore";class jg{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=o,this.Ea.xo(a=>{r.enqueueAndForget(async()=>{Fe(this)&&(N(Oe,"Restarting streams for network reachability change."),await async function(h){const d=B(h);d.Ia.add(4),await zn(d),d.Aa.set("Unknown"),d.Ia.delete(4),await Zr(d)}(this))})}),this.Aa=new Ug(r,s)}}async function Zr(n){if(Fe(n))for(const t of n.da)await t(!0)}async function zn(n){for(const t of n.da)await t(!1)}function _l(n,t){const e=B(n);e.Ta.has(t.targetId)||(e.Ta.set(t.targetId,t),Ui(e)?Bi(e):rn(e).x_()&&Fi(e,t))}function Li(n,t){const e=B(n),r=rn(e);e.Ta.delete(t),r.x_()&&El(e,t),e.Ta.size===0&&(r.x_()?r.B_():Fe(e)&&e.Aa.set("Unknown"))}function Fi(n,t){if(n.Ra.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(F.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}rn(n).H_(t)}function El(n,t){n.Ra.$e(t),rn(n).Y_(t)}function Bi(n){n.Ra=new Mp({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>n.Ta.get(t)||null,lt:()=>n.datastore.serializer.databaseId}),rn(n).start(),n.Aa.aa()}function Ui(n){return Fe(n)&&!rn(n).M_()&&n.Ta.size>0}function Fe(n){return B(n).Ia.size===0}function vl(n){n.Ra=void 0}async function $g(n){n.Aa.set("Online")}async function qg(n){n.Ta.forEach((t,e)=>{Fi(n,t)})}async function Hg(n,t){vl(n),Ui(n)?(n.Aa.la(t),Bi(n)):n.Aa.set("Unknown")}async function zg(n,t,e){if(n.Aa.set("Online"),t instanceof sl&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const u of o.targetIds)s.Ta.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.Ta.delete(u),s.Ra.removeTarget(u))}(n,t)}catch(r){N(Oe,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Mr(n,r)}else if(t instanceof Tr?n.Ra.Ye(t):t instanceof rl?n.Ra.it(t):n.Ra.et(t),!e.isEqual(F.min()))try{const r=await pl(n.localStore);e.compareTo(r)>=0&&await function(o,a){const u=o.Ra.Pt(a);return u.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const g=o.Ta.get(d);g&&o.Ta.set(d,g.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,d)=>{const g=o.Ta.get(h);if(!g)return;o.Ta.set(h,g.withResumeToken(gt.EMPTY_BYTE_STRING,g.snapshotVersion)),El(o,h);const I=new oe(g.target,h,d,g.sequenceNumber);Fi(o,I)}),o.remoteSyncer.applyRemoteEvent(u)}(n,e)}catch(r){N(Oe,"Failed to raise snapshot:",r),await Mr(n,r)}}async function Mr(n,t,e){if(!en(t))throw t;n.Ia.add(1),await zn(n),n.Aa.set("Offline"),e||(e=()=>pl(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{N(Oe,"Retrying IndexedDB access"),await e(),n.Ia.delete(1),await Zr(n)})}function Il(n,t){return t().catch(e=>Mr(n,e,t))}async function ts(n){const t=B(n),e=ye(t);let r=t.Pa.length>0?t.Pa[t.Pa.length-1].batchId:wi;for(;Gg(t);)try{const s=await bg(t.localStore,r);if(s===null){t.Pa.length===0&&e.B_();break}r=s.batchId,Wg(t,s)}catch(s){await Mr(t,s)}Tl(t)&&wl(t)}function Gg(n){return Fe(n)&&n.Pa.length<10}function Wg(n,t){n.Pa.push(t);const e=ye(n);e.x_()&&e.Z_&&e.X_(t.mutations)}function Tl(n){return Fe(n)&&!ye(n).M_()&&n.Pa.length>0}function wl(n){ye(n).start()}async function Kg(n){ye(n).na()}async function Qg(n){const t=ye(n);for(const e of n.Pa)t.X_(e.mutations)}async function Jg(n,t,e){const r=n.Pa.shift(),s=Pi.from(r,t,e);await Il(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ts(n)}async function Xg(n,t){t&&ye(n).Z_&&await async function(r,s){if(function(a){return kp(a)&&a!==b.ABORTED}(s.code)){const o=r.Pa.shift();ye(r).N_(),await Il(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await ts(r)}}(n,t),Tl(n)&&wl(n)}async function mc(n,t){const e=B(n);e.asyncQueue.verifyOperationInProgress(),N(Oe,"RemoteStore received new credentials");const r=Fe(e);e.Ia.add(3),await zn(e),r&&e.Aa.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ia.delete(3),await Zr(e)}async function Yg(n,t){const e=B(n);t?(e.Ia.delete(2),await Zr(e)):t||(e.Ia.add(2),await zn(e),e.Aa.set("Unknown"))}function rn(n){return n.Va||(n.Va=function(e,r,s){const o=B(e);return o.ia(),new Og(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Zo:$g.bind(null,n),e_:qg.bind(null,n),n_:Hg.bind(null,n),J_:zg.bind(null,n)}),n.da.push(async t=>{t?(n.Va.N_(),Ui(n)?Bi(n):n.Aa.set("Unknown")):(await n.Va.stop(),vl(n))})),n.Va}function ye(n){return n.ma||(n.ma=function(e,r,s){const o=B(e);return o.ia(),new Lg(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:Kg.bind(null,n),n_:Xg.bind(null,n),ea:Qg.bind(null,n),ta:Jg.bind(null,n)}),n.da.push(async t=>{t?(n.ma.N_(),await ts(n)):(await n.ma.stop(),n.Pa.length>0&&(N(Oe,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))})),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Xt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,u=new ji(t,e,a,s,o);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $i(n,t){if(te("AsyncQueue",`${t}: ${n}`),en(n))return new k(b.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{static emptySet(t){return new We(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||M.comparator(e.key,r.key):(e,r)=>M.comparator(e.key,r.key),this.keyedMap=Tn(),this.sortedSet=new nt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof We)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new We;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(){this.fa=new nt(M.comparator)}track(t){const e=t.doc.key,r=this.fa.get(e);r?t.type!==0&&r.type===3?this.fa=this.fa.insert(e,t):t.type===3&&r.type!==1?this.fa=this.fa.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.fa=this.fa.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.fa=this.fa.remove(e):t.type===1&&r.type===2?this.fa=this.fa.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):O(63341,{At:t,ga:r}):this.fa=this.fa.insert(e,t)}pa(){const t=[];return this.fa.inorderTraversal((e,r)=>{t.push(r)}),t}}class Ye{constructor(t,e,r,s,o,a,u,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new Ye(t,e,We.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Wr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(t=>t.ba())}}class ty{constructor(){this.queries=gc(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(e,r){const s=B(e),o=s.queries;s.queries=gc(),o.forEach((a,u)=>{for(const h of u.wa)h.onError(r)})})(this,new k(b.ABORTED,"Firestore shutting down"))}}function gc(){return new Le(n=>Hu(n),Wr)}async function qi(n,t){const e=B(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.Sa()&&t.ba()&&(r=2):(o=new Zg,r=t.ba()?0:1);try{switch(r){case 0:o.ya=await e.onListen(s,!0);break;case 1:o.ya=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=$i(a,`Initialization of query '${He(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,o),o.wa.push(t),t.va(e.onlineState),o.ya&&t.Ca(o.ya)&&zi(e)}async function Hi(n,t){const e=B(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.wa.indexOf(t);a>=0&&(o.wa.splice(a,1),o.wa.length===0?s=t.ba()?0:1:!o.Sa()&&t.ba()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function ey(n,t){const e=B(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const u of a.wa)u.Ca(s)&&(r=!0);a.ya=s}}r&&zi(e)}function ny(n,t,e){const r=B(n),s=r.queries.get(t);if(s)for(const o of s.wa)o.onError(e);r.queries.delete(t)}function zi(n){n.Da.forEach(t=>{t.next()})}var ci,yc;(yc=ci||(ci={})).Fa="default",yc.Cache="cache";class Gi{constructor(t,e,r){this.query=t,this.Ma=e,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Ye(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.xa?this.Na(t)&&(this.Ma.next(t),e=!0):this.Ba(t,this.onlineState)&&(this.La(t),e=!0),this.Oa=t,e}onError(t){this.Ma.error(t)}va(t){this.onlineState=t;let e=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,t)&&(this.La(this.Oa),e=!0),e}Ba(t,e){if(!t.fromCache||!this.ba())return!0;const r=e!=="Offline";return(!this.options.ka||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Na(t){if(t.docChanges.length>0)return!0;const e=this.Oa&&this.Oa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}La(t){t=Ye.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.xa=!0,this.Ma.next(t)}ba(){return this.options.source!==ci.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(t){this.key=t}}class Sl{constructor(t){this.key=t}}class ry{constructor(t,e){this.query=t,this.Ha=e,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=H(),this.mutatedKeys=H(),this.Xa=zu(t),this.eu=new We(this.Xa)}get tu(){return this.Ha}nu(t,e){const r=e?e.ru:new pc,s=e?e.eu:this.eu;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((g,I)=>{const T=s.get(g),R=Kr(this.query,I)?I:null,C=!!T&&this.mutatedKeys.has(T.key),V=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let P=!1;T&&R?T.data.isEqual(R.data)?C!==V&&(r.track({type:3,doc:R}),P=!0):this.iu(T,R)||(r.track({type:2,doc:R}),P=!0,(h&&this.Xa(R,h)>0||d&&this.Xa(R,d)<0)&&(u=!0)):!T&&R?(r.track({type:0,doc:R}),P=!0):T&&!R&&(r.track({type:1,doc:T}),P=!0,(h||d)&&(u=!0)),P&&(R?(a=a.add(R),o=V?o.add(g):o.delete(g)):(a=a.delete(g),o=o.delete(g)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const g=this.query.limitType==="F"?a.last():a.first();a=a.delete(g.key),o=o.delete(g.key),r.track({type:1,doc:g})}return{eu:a,ru:r,Ds:u,mutatedKeys:o}}iu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.eu;this.eu=t.eu,this.mutatedKeys=t.mutatedKeys;const a=t.ru.pa();a.sort((g,I)=>function(R,C){const V=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O(20277,{At:P})}};return V(R)-V(C)}(g.type,I.type)||this.Xa(g.doc,I.doc)),this.su(r),s=s!=null&&s;const u=e&&!s?this.ou():[],h=this.Za.size===0&&this.current&&!s?1:0,d=h!==this.Ya;return this.Ya=h,a.length!==0||d?{snapshot:new Ye(this.query,t.eu,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:u}:{_u:u}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new pc,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(t){return!this.Ha.has(t)&&!!this.eu.has(t)&&!this.eu.get(t).hasLocalMutations}su(t){t&&(t.addedDocuments.forEach(e=>this.Ha=this.Ha.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ha=this.Ha.delete(e)),this.current=t.current)}ou(){if(!this.current)return[];const t=this.Za;this.Za=H(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const e=[];return t.forEach(r=>{this.Za.has(r)||e.push(new Sl(r))}),this.Za.forEach(r=>{t.has(r)||e.push(new Al(r))}),e}uu(t){this.Ha=t.qs,this.Za=H();const e=this.nu(t.documents);return this.applyChanges(e,!0)}cu(){return Ye.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Wi="SyncEngine";class sy{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class iy{constructor(t){this.key=t,this.lu=!1}}class oy{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new Le(u=>Hu(u),Wr),this.Tu=new Map,this.Iu=new Set,this.du=new nt(M.comparator),this.Eu=new Map,this.Au=new ki,this.Ru={},this.Vu=new Map,this.mu=Xe.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function ay(n,t,e=!0){const r=Dl(n);let s;const o=r.Pu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.cu()):s=await Rl(r,t,e,!0),s}async function cy(n,t){const e=Dl(n);await Rl(e,t,!0,!1)}async function Rl(n,t,e,r){const s=await xg(n.localStore,Ht(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let u;return r&&(u=await uy(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&_l(n.remoteStore,s),u}async function uy(n,t,e,r,s){n.gu=(I,T,R)=>async function(V,P,j,L){let $=P.view.nu(j);$.Ds&&($=await uc(V.localStore,P.query,!1).then(({documents:E})=>P.view.nu(E,$)));const Y=L&&L.targetChanges.get(P.targetId),Rt=L&&L.targetMismatches.get(P.targetId)!=null,U=P.view.applyChanges($,V.isPrimaryClient,Y,Rt);return Ec(V,P.targetId,U._u),U.snapshot}(n,I,T,R);const o=await uc(n.localStore,t,!0),a=new ry(t,o.qs),u=a.nu(o.documents),h=Hn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(u,n.isPrimaryClient,h);Ec(n,e,d._u);const g=new sy(t,e,a);return n.Pu.set(t,g),n.Tu.has(e)?n.Tu.get(e).push(t):n.Tu.set(e,[t]),d.snapshot}async function ly(n,t,e){const r=B(n),s=r.Pu.get(t),o=r.Tu.get(s.targetId);if(o.length>1)return r.Tu.set(s.targetId,o.filter(a=>!Wr(a,t))),void r.Pu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await oi(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Li(r.remoteStore,s.targetId),ui(r,s.targetId)}).catch(tn)):(ui(r,s.targetId),await oi(r.localStore,s.targetId,!0))}async function hy(n,t){const e=B(n),r=e.Pu.get(t),s=e.Tu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Li(e.remoteStore,r.targetId))}async function dy(n,t,e){const r=Ey(n);try{const s=await function(a,u){const h=B(a),d=et.now(),g=u.reduce((R,C)=>R.add(C.key),H());let I,T;return h.persistence.runTransaction("Locally write mutations","readwrite",R=>{let C=ee(),V=H();return h.Os.getEntries(R,g).next(P=>{C=P,C.forEach((j,L)=>{L.isValidDocument()||(V=V.add(j))})}).next(()=>h.localDocuments.getOverlayedDocuments(R,C)).next(P=>{I=P;const j=[];for(const L of u){const $=xp(L,I.get(L.key).overlayedDocument);$!=null&&j.push(new Te(L.key,$,Ou($.value.mapValue),Ut.exists(!0)))}return h.mutationQueue.addMutationBatch(R,d,j,u)}).next(P=>{T=P;const j=P.applyToLocalDocumentSet(I,V);return h.documentOverlayCache.saveOverlays(R,P.batchId,j)})}).then(()=>({batchId:T.batchId,changes:Wu(I)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,u,h){let d=a.Ru[a.currentUser.toKey()];d||(d=new nt(q)),d=d.insert(u,h),a.Ru[a.currentUser.toKey()]=d}(r,s.batchId,e),await Gn(r,s.changes),await ts(r.remoteStore)}catch(s){const o=$i(s,"Failed to persist write");e.reject(o)}}async function bl(n,t){const e=B(n);try{const r=await Sg(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Eu.get(o);a&&(K(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?K(a.lu,14607):s.removedDocuments.size>0&&(K(a.lu,42227),a.lu=!1))}),await Gn(e,r,t)}catch(r){await tn(r)}}function _c(n,t,e){const r=B(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Pu.forEach((o,a)=>{const u=a.view.va(t);u.snapshot&&s.push(u.snapshot)}),function(a,u){const h=B(a);h.onlineState=u;let d=!1;h.queries.forEach((g,I)=>{for(const T of I.wa)T.va(u)&&(d=!0)}),d&&zi(h)}(r.eventManager,t),s.length&&r.hu.J_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function fy(n,t,e){const r=B(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Eu.get(t),o=s&&s.key;if(o){let a=new nt(M.comparator);a=a.insert(o,wt.newNoDocument(o,F.min()));const u=H().add(o),h=new Xr(F.min(),new Map,new nt(q),a,u);await bl(r,h),r.du=r.du.remove(o),r.Eu.delete(t),Ki(r)}else await oi(r.localStore,t,!1).then(()=>ui(r,t,e)).catch(tn)}async function my(n,t){const e=B(n),r=t.batch.batchId;try{const s=await Ag(e.localStore,t);Cl(e,r,null),xl(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Gn(e,s)}catch(s){await tn(s)}}async function py(n,t,e){const r=B(n);try{const s=await function(a,u){const h=B(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let g;return h.mutationQueue.lookupMutationBatch(d,u).next(I=>(K(I!==null,37113),g=I.keys(),h.mutationQueue.removeMutationBatch(d,I))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,g,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,g)).next(()=>h.localDocuments.getDocuments(d,g))})}(r.localStore,t);Cl(r,t,e),xl(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Gn(r,s)}catch(s){await tn(s)}}function xl(n,t){(n.Vu.get(t)||[]).forEach(e=>{e.resolve()}),n.Vu.delete(t)}function Cl(n,t,e){const r=B(n);let s=r.Ru[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Ru[r.currentUser.toKey()]=s}}function ui(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Tu.get(t))n.Pu.delete(r),e&&n.hu.pu(r,e);n.Tu.delete(t),n.isPrimaryClient&&n.Au.zr(t).forEach(r=>{n.Au.containsKey(r)||Pl(n,r)})}function Pl(n,t){n.Iu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&(Li(n.remoteStore,e),n.du=n.du.remove(t),n.Eu.delete(e),Ki(n))}function Ec(n,t,e){for(const r of e)r instanceof Al?(n.Au.addReference(r.key,t),gy(n,r)):r instanceof Sl?(N(Wi,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,t),n.Au.containsKey(r.key)||Pl(n,r.key)):O(19791,{yu:r})}function gy(n,t){const e=t.key,r=e.path.canonicalString();n.du.get(e)||n.Iu.has(r)||(N(Wi,"New document in limbo: "+e),n.Iu.add(r),Ki(n))}function Ki(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Iu.values().next().value;n.Iu.delete(t);const e=new M(X.fromString(t)),r=n.mu.next();n.Eu.set(r,new iy(e)),n.du=n.du.insert(e,r),_l(n.remoteStore,new oe(Ht(Gr(e.path)),r,"TargetPurposeLimboResolution",qr.ue))}}async function Gn(n,t,e){const r=B(n),s=[],o=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach((u,h)=>{a.push(r.gu(h,t,e).then(d=>{var g;if((d||e)&&r.isPrimaryClient){const I=d?!d.fromCache:(g=e?.targetChanges.get(h.targetId))===null||g===void 0?void 0:g.current;r.sharedClientState.updateQueryState(h.targetId,I?"current":"not-current")}if(d){s.push(d);const I=Mi.Es(h.targetId,d);o.push(I)}}))}),await Promise.all(a),r.hu.J_(s),await async function(h,d){const g=B(h);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>x.forEach(d,T=>x.forEach(T.Is,R=>g.persistence.referenceDelegate.addReference(I,T.targetId,R)).next(()=>x.forEach(T.ds,R=>g.persistence.referenceDelegate.removeReference(I,T.targetId,R)))))}catch(I){if(!en(I))throw I;N(Oi,"Failed to update sequence numbers: "+I)}for(const I of d){const T=I.targetId;if(!I.fromCache){const R=g.Fs.get(T),C=R.snapshotVersion,V=R.withLastLimboFreeSnapshotVersion(C);g.Fs=g.Fs.insert(T,V)}}}(r.localStore,o))}async function yy(n,t){const e=B(n);if(!e.currentUser.isEqual(t)){N(Wi,"User change. New user:",t.toKey());const r=await ml(e.localStore,t);e.currentUser=t,function(o,a){o.Vu.forEach(u=>{u.forEach(h=>{h.reject(new k(b.CANCELLED,a))})}),o.Vu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Gn(e,r.Bs)}}function _y(n,t){const e=B(n),r=e.Eu.get(t);if(r&&r.lu)return H().add(r.key);{let s=H();const o=e.Tu.get(t);if(!o)return s;for(const a of o){const u=e.Pu.get(a);s=s.unionWith(u.view.tu)}return s}}function Dl(n){const t=B(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=bl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=_y.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=fy.bind(null,t),t.hu.J_=ey.bind(null,t.eventManager),t.hu.pu=ny.bind(null,t.eventManager),t}function Ey(n){const t=B(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=my.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=py.bind(null,t),t}class Or{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Yr(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Du(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Cu(t,this.localStore),this.indexBackfillerScheduler=this.Fu(t,this.localStore)}Cu(t,e){return null}Fu(t,e){return null}vu(t){return wg(this.persistence,new vg,t.initialUser,this.serializer)}Du(t){return new fl(Ni.Vi,this.serializer)}bu(t){return new Pg}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Or.provider={build:()=>new Or};class vy extends Or{constructor(t){super(),this.cacheSizeBytes=t}Cu(t,e){K(this.persistence.referenceDelegate instanceof Nr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new ig(r,t.asyncQueue,e)}Du(t){const e=this.cacheSizeBytes!==void 0?bt.withCacheSize(this.cacheSizeBytes):bt.DEFAULT;return new fl(r=>Nr.Vi(r,e),this.serializer)}}class li{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>_c(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=yy.bind(null,this.syncEngine),await Yg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new ty}()}createDatastore(t){const e=Yr(t.databaseInfo.databaseId),r=function(o){return new Mg(o)}(t.databaseInfo);return function(o,a,u,h){return new Bg(o,a,u,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,u){return new jg(r,s,o,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>_c(this.syncEngine,e,0),function(){return dc.C()?new dc:new Dg}())}createSyncEngine(t,e){return function(s,o,a,u,h,d,g){const I=new oy(s,o,a,u,h,d);return g&&(I.fu=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=B(s);N(Oe,"RemoteStore shutting down."),o.Ia.add(5),await zn(o),o.Ea.shutdown(),o.Aa.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}li.provider={build:()=>new li};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.xu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.xu(this.observer.error,t):te("Uncaught Error in snapshot listener:",t.toString()))}Ou(){this.muted=!0}xu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e="FirestoreClient";class Iy{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=Tt.UNAUTHENTICATED,this.clientId=Ti.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{N(_e,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(N(_e,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Xt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=$i(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Bs(n,t){n.asyncQueue.verifyOperationInProgress(),N(_e,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await ml(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>{de("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then(()=>{N("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(s=>{de("Terminating Firestore due to IndexedDb database deletion failed",s)})}),n._offlineComponents=t}async function vc(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Ty(n);N(_e,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>mc(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>mc(t.remoteStore,s)),n._onlineComponents=t}async function Ty(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N(_e,"Using user provided OfflineComponentProvider");try{await Bs(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===b.FAILED_PRECONDITION||s.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;de("Error using user provided cache. Falling back to memory cache: "+e),await Bs(n,new Or)}}else N(_e,"Using default OfflineComponentProvider"),await Bs(n,new vy(void 0));return n._offlineComponents}async function Vl(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N(_e,"Using user provided OnlineComponentProvider"),await vc(n,n._uninitializedComponentsProvider._online)):(N(_e,"Using default OnlineComponentProvider"),await vc(n,new li))),n._onlineComponents}function wy(n){return Vl(n).then(t=>t.syncEngine)}async function Lr(n){const t=await Vl(n),e=t.eventManager;return e.onListen=ay.bind(null,t.syncEngine),e.onUnlisten=ly.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=cy.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=hy.bind(null,t.syncEngine),e}function Ay(n,t,e={}){const r=new Xt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const g=new Qi({next:T=>{g.Ou(),a.enqueueAndForget(()=>Hi(o,I));const R=T.docs.has(u);!R&&T.fromCache?d.reject(new k(b.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&T.fromCache&&h&&h.source==="server"?d.reject(new k(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(T)},error:T=>d.reject(T)}),I=new Gi(Gr(u.path),g,{includeMetadataChanges:!0,ka:!0});return qi(o,I)}(await Lr(n),n.asyncQueue,t,e,r)),r.promise}function Sy(n,t,e={}){const r=new Xt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const g=new Qi({next:T=>{g.Ou(),a.enqueueAndForget(()=>Hi(o,I)),T.fromCache&&h.source==="server"?d.reject(new k(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(T)},error:T=>d.reject(T)}),I=new Gi(u,g,{includeMetadataChanges:!0,ka:!0});return qi(o,I)}(await Lr(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl="firestore.googleapis.com",Tc=!0;class wc{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new k(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Nl,this.ssl=Tc}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:Tc;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=dl;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<rg)throw new k(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}jm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kl((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new k(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new k(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new k(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class es{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new k(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wc(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Vm;switch(r.type){case"firstParty":return new Om(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new k(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Ic.get(e);r&&(N("ComponentProvider","Removing Datastore"),Ic.delete(e),r.terminate())}(this),Promise.resolve()}}function Ry(n,t,e,r={}){var s;n=Mt(n,es);const o=fi(t),a=n._getSettings(),u=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),h=`${t}:${e}`;o&&(Fh(`https://${h}`),$h("Firestore",!0)),a.host!==Nl&&a.host!==h&&de("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:h,ssl:o,emulatorOptions:r});if(!Dn(d,u)&&(n._setSettings(d),r.mockUserToken)){let g,I;if(typeof r.mockUserToken=="string")g=r.mockUserToken,I=Tt.MOCK_USER;else{g=Bh(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const T=r.mockUserToken.sub||r.mockUserToken.user_id;if(!T)throw new k(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new Tt(T)}n._authCredentials=new km(new wu(g,I))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new we(this.firestore,t,this._query)}}class ot{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new le(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ot(this.firestore,t,this._key)}toJSON(){return{type:ot._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if($n(e,ot._jsonSchema))return new ot(t,r||null,new M(X.fromString(e.referencePath)))}}ot._jsonSchemaVersion="firestore/documentReference/1.0",ot._jsonSchema={type:lt("string",ot._jsonSchemaVersion),referencePath:lt("string")};class le extends we{constructor(t,e,r){super(t,e,Gr(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ot(this.firestore,null,new M(t))}withConverter(t){return new le(this.firestore,t,this._path)}}function vn(n,t,...e){if(n=Ot(n),Su("collection","path",t),n instanceof es){const r=X.fromString(t,...e);return Oa(r),new le(n,null,r)}{if(!(n instanceof ot||n instanceof le))throw new k(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return Oa(r),new le(n.firestore,null,r)}}function Bt(n,t,...e){if(n=Ot(n),arguments.length===1&&(t=Ti.newId()),Su("doc","path",t),n instanceof es){const r=X.fromString(t,...e);return Ma(r),new ot(n,null,new M(r))}{if(!(n instanceof ot||n instanceof le))throw new k(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return Ma(r),new ot(n.firestore,n instanceof le?n.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac="AsyncQueue";class Sc{constructor(t=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new gl(this,"async_queue_retry"),this.oc=()=>{const r=Fs();r&&N(Ac,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=t;const e=Fs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ac(),this.uc(t)}enterRestrictedMode(t){if(!this.Xu){this.Xu=!0,this.rc=t||!1;const e=Fs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.oc)}}enqueue(t){if(this.ac(),this.Xu)return new Promise(()=>{});const e=new Xt;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Zu.push(t),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(t){if(!en(t))throw t;N(Ac,"Operation failed with retryable error: "+t)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(t){const e=this._c.then(()=>(this.nc=!0,t().catch(r=>{throw this.tc=r,this.nc=!1,te("INTERNAL UNHANDLED ERROR: ",Rc(r)),r}).then(r=>(this.nc=!1,r))));return this._c=e,e}enqueueAfterDelay(t,e,r){this.ac(),this.sc.indexOf(t)>-1&&(e=0);const s=ji.createAndSchedule(this,t,e,r,o=>this.lc(o));return this.ec.push(s),s}ac(){this.tc&&O(47125,{hc:Rc(this.tc)})}verifyOperationInProgress(){}async Pc(){let t;do t=this._c,await t;while(t!==this._c)}Tc(t){for(const e of this.ec)if(e.timerId===t)return!0;return!1}Ic(t){return this.Pc().then(()=>{this.ec.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.ec)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Pc()})}dc(t){this.sc.push(t)}lc(t){const e=this.ec.indexOf(t);this.ec.splice(e,1)}}function Rc(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const o of r)if(o in s&&typeof s[o]=="function")return!0;return!1}(n,["next","error","complete"])}class Ee extends es{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Sc,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Sc(t),this._firestoreClient=void 0,await t}}}function by(n,t){const e=typeof n=="object"?n:zc(),r=typeof n=="string"?n:Cr,s=jn(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Oh("firestore");o&&Ry(s,...o)}return s}function ns(n){if(n._terminated)throw new k(b.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||xy(n),n._firestoreClient}function xy(n){var t,e,r;const s=n._freezeSettings(),o=function(u,h,d,g){return new Ym(u,h,d,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,kl(g.experimentalLongPollingOptions),g.useFetchStreams,g.isUsingEmulator)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Iy(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(u){const h=u?._online.build();return{_offline:u?._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Nt(gt.fromBase64String(t))}catch(e){throw new k(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Nt(gt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Nt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if($n(t,Nt._jsonSchema))return Nt.fromBase64String(t.bytes)}}Nt._jsonSchemaVersion="firestore/bytes/1.0",Nt._jsonSchema={type:lt("string",Nt._jsonSchemaVersion),bytes:lt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new k(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new k(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new k(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return q(this._lat,t._lat)||q(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Gt._jsonSchemaVersion}}static fromJSON(t){if($n(t,Gt._jsonSchema))return new Gt(t.latitude,t.longitude)}}Gt._jsonSchemaVersion="firestore/geoPoint/1.0",Gt._jsonSchema={type:lt("string",Gt._jsonSchemaVersion),latitude:lt("number"),longitude:lt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}toJSON(){return{type:Wt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if($n(t,Wt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new Wt(t.vectorValues);throw new k(b.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Wt._jsonSchemaVersion="firestore/vectorValue/1.0",Wt._jsonSchema={type:lt("string",Wt._jsonSchemaVersion),vectorValues:lt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy=/^__.*__$/;class Py{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Te(t,this.data,this.fieldMask,e,this.fieldTransforms):new qn(t,this.data,e,this.fieldTransforms)}}class Ml{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new Te(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Ol(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O(40011,{Ec:n})}}class Ji{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Ac(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(t){return new Ji(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:r,mc:!1});return s.fc(t),s}gc(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(t){return this.Rc({path:void 0,mc:!0})}wc(t){return Fr(t,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.fc(this.path.get(t))}fc(t){if(t.length===0)throw this.wc("Document fields must not be empty");if(Ol(this.Ec)&&Cy.test(t))throw this.wc('Document fields cannot begin and end with "__"')}}class Dy{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Yr(t)}Dc(t,e,r,s=!1){return new Ji({Ec:t,methodName:e,bc:r,path:pt.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Xi(n){const t=n._freezeSettings(),e=Yr(n._databaseId);return new Dy(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Vy(n,t,e,r,s,o={}){const a=n.Dc(o.merge||o.mergeFields?2:0,t,e,s);Zi("Data must be an object, but it was:",a,r);const u=Ll(r,a);let h,d;if(o.merge)h=new Dt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const g=[];for(const I of o.mergeFields){const T=hi(t,I,e);if(!a.contains(T))throw new k(b.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);Bl(g,T)||g.push(T)}h=new Dt(g),d=a.fieldTransforms.filter(I=>h.covers(I.field))}else h=null,d=a.fieldTransforms;return new Py(new xt(u),h,d)}class is extends ss{_toFieldTransform(t){if(t.Ec!==2)throw t.Ec===1?t.wc(`${this._methodName}() can only appear at the top level of your update data`):t.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof is}}class Yi extends ss{_toFieldTransform(t){return new Ap(t.path,new Fn)}isEqual(t){return t instanceof Yi}}function ky(n,t,e,r){const s=n.Dc(1,t,e);Zi("Data must be an object, but it was:",s,r);const o=[],a=xt.empty();Ie(r,(h,d)=>{const g=to(t,h,e);d=Ot(d);const I=s.gc(g);if(d instanceof is)o.push(g);else{const T=Wn(d,I);T!=null&&(o.push(g),a.set(g,T))}});const u=new Dt(o);return new Ml(a,u,s.fieldTransforms)}function Ny(n,t,e,r,s,o){const a=n.Dc(1,t,e),u=[hi(t,r,e)],h=[s];if(o.length%2!=0)throw new k(b.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<o.length;T+=2)u.push(hi(t,o[T])),h.push(o[T+1]);const d=[],g=xt.empty();for(let T=u.length-1;T>=0;--T)if(!Bl(d,u[T])){const R=u[T];let C=h[T];C=Ot(C);const V=a.gc(R);if(C instanceof is)d.push(R);else{const P=Wn(C,V);P!=null&&(d.push(R),g.set(R,P))}}const I=new Dt(d);return new Ml(g,I,a.fieldTransforms)}function My(n,t,e,r=!1){return Wn(e,n.Dc(r?4:3,t))}function Wn(n,t){if(Fl(n=Ot(n)))return Zi("Unsupported field value:",t,n),Ll(n,t);if(n instanceof ss)return function(r,s){if(!Ol(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.mc&&t.Ec!==4)throw t.wc("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const u of r){let h=Wn(u,s.yc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=Ot(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ip(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=et.fromDate(r);return{timestampValue:kr(s.serializer,o)}}if(r instanceof et){const o=new et(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:kr(s.serializer,o)}}if(r instanceof Gt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Nt)return{bytesValue:il(s.serializer,r._byteString)};if(r instanceof ot){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Vi(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Wt)return function(a,u){return{mapValue:{fields:{[Nu]:{stringValue:Mu},[Pr]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw u.wc("VectorValues must only contain numeric values.");return xi(u.serializer,d)})}}}}}}(r,s);throw s.wc(`Unsupported field value: ${$r(r)}`)}(n,t)}function Ll(n,t){const e={};return xu(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ie(n,(r,s)=>{const o=Wn(s,t.Vc(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Fl(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof et||n instanceof Gt||n instanceof Nt||n instanceof ot||n instanceof ss||n instanceof Wt)}function Zi(n,t,e){if(!Fl(e)||!Ru(e)){const r=$r(e);throw r==="an object"?t.wc(n+" a custom object"):t.wc(n+" "+r)}}function hi(n,t,e){if((t=Ot(t))instanceof rs)return t._internalPath;if(typeof t=="string")return to(n,t);throw Fr("Field path arguments must be of type string or ",n,!1,void 0,e)}const Oy=new RegExp("[~\\*/\\[\\]]");function to(n,t,e){if(t.search(Oy)>=0)throw Fr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new rs(...t.split("."))._internalPath}catch{throw Fr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Fr(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new k(b.INVALID_ARGUMENT,u+n+h)}function Bl(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Ly(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(eo("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Ly extends Ul{data(){return super.data()}}function eo(n,t){return typeof t=="string"?to(n,t):t instanceof rs?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new k(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class no{}class $l extends no{}function xc(n,t,...e){let r=[];t instanceof no&&r.push(t),r=r.concat(e),function(o){const a=o.filter(h=>h instanceof so).length,u=o.filter(h=>h instanceof ro).length;if(a>1||a>0&&u>0)throw new k(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class ro extends $l{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new ro(t,e,r)}_apply(t){const e=this._parse(t);return ql(t._query,e),new we(t.firestore,t.converter,ti(t._query,e))}_parse(t){const e=Xi(t.firestore);return function(o,a,u,h,d,g,I){let T;if(d.isKeyField()){if(g==="array-contains"||g==="array-contains-any")throw new k(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${g}' queries on documentId().`);if(g==="in"||g==="not-in"){Dc(I,g);const C=[];for(const V of I)C.push(Pc(h,o,V));T={arrayValue:{values:C}}}else T=Pc(h,o,I)}else g!=="in"&&g!=="not-in"&&g!=="array-contains-any"||Dc(I,g),T=My(u,a,I,g==="in"||g==="not-in");return ut.create(d,g,T)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class so extends no{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new so(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:jt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let a=s;const u=o.getFlattenedFilters();for(const h of u)ql(a,h),a=ti(a,h)}(t._query,e),new we(t.firestore,t.converter,ti(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class io extends $l{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new io(t,e)}_apply(t){const e=function(s,o,a){if(s.startAt!==null)throw new k(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new k(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ln(o,a)}(t._query,this._field,this._direction);return new we(t.firestore,t.converter,function(s,o){const a=s.explicitOrderBy.concat([o]);return new nn(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function Cc(n,t="asc"){const e=t,r=eo("orderBy",n);return io._create(r,e)}function Pc(n,t,e){if(typeof(e=Ot(e))=="string"){if(e==="")throw new k(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!qu(t)&&e.indexOf("/")!==-1)throw new k(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(X.fromString(e));if(!M.isDocumentKey(r))throw new k(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ha(n,new M(r))}if(e instanceof ot)return Ha(n,e._key);throw new k(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${$r(e)}.`)}function Dc(n,t){if(!Array.isArray(n)||n.length===0)throw new k(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function ql(n,t){const e=function(s,o){for(const a of s)for(const u of a.getFlattenedFilters())if(o.indexOf(u.op)>=0)return u.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new k(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new k(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Fy{convertValue(t,e="none"){switch(ge(t)){case 0:return null;case 1:return t.booleanValue;case 2:return it(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(pe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw O(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Ie(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e[Pr].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>it(a.doubleValue));return new Wt(o)}convertGeoPoint(t){return new Gt(it(t.latitude),it(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=zr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Nn(t));default:return null}}convertTimestamp(t){const e=me(t);return new et(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=X.fromString(t);K(hl(r),9688,{name:t});const s=new Mn(r.get(1),r.get(3)),o=new M(r.popFirst(5));return s.isEqual(e)||te(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class An{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class De extends Ul{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new wr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(eo("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new k(b.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=De._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}De._jsonSchemaVersion="firestore/documentSnapshot/1.0",De._jsonSchema={type:lt("string",De._jsonSchemaVersion),bundleSource:lt("string","DocumentSnapshot"),bundleName:lt("string"),bundle:lt("string")};class wr extends De{data(t={}){return super.data(t)}}class Ve{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new An(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new wr(this._firestore,this._userDataWriter,r.key,r,new An(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new k(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const h=new wr(s._firestore,s._userDataWriter,u.doc.key,u.doc,new An(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const h=new wr(s._firestore,s._userDataWriter,u.doc.key,u.doc,new An(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,g=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),g=a.indexOf(u.doc.key)),{type:Uy(u.type),doc:h,oldIndex:d,newIndex:g}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new k(b.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Ve._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Ti.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach(o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Uy(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(n){n=Mt(n,ot);const t=Mt(n.firestore,Ee);return Ay(ns(t),n._key).then(e=>Hl(t,n,e))}Ve._jsonSchemaVersion="firestore/querySnapshot/1.0",Ve._jsonSchema={type:lt("string",Ve._jsonSchemaVersion),bundleSource:lt("string","QuerySnapshot"),bundleName:lt("string"),bundle:lt("string")};class oo extends Fy{constructor(t){super(),this.firestore=t}convertBytes(t){return new Nt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ot(this.firestore,null,e)}}function Vc(n){n=Mt(n,we);const t=Mt(n.firestore,Ee),e=ns(t),r=new oo(t);return jl(n._query),Sy(e,n._query).then(s=>new Ve(t,r,n,s))}function kc(n,t,e,...r){n=Mt(n,ot);const s=Mt(n.firestore,Ee),o=Xi(s);let a;return a=typeof(t=Ot(t))=="string"||t instanceof rs?Ny(o,"updateDoc",n._key,t,e,r):ky(o,"updateDoc",n._key,t),ao(s,[a.toMutation(n._key,Ut.exists(!0))])}function js(n){return ao(Mt(n.firestore,Ee),[new Ci(n._key,Ut.none())])}function Nc(n,t){const e=Mt(n.firestore,Ee),r=Bt(n),s=By(n.converter,t);return ao(e,[Vy(Xi(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Ut.exists(!1))]).then(()=>r)}function jy(n,...t){var e,r,s;n=Ot(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||bc(t[a])||(o=t[a++]);const u={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(bc(t[a])){const I=t[a];t[a]=(e=I.next)===null||e===void 0?void 0:e.bind(I),t[a+1]=(r=I.error)===null||r===void 0?void 0:r.bind(I),t[a+2]=(s=I.complete)===null||s===void 0?void 0:s.bind(I)}let h,d,g;if(n instanceof ot)d=Mt(n.firestore,Ee),g=Gr(n._key.path),h={next:I=>{t[a]&&t[a](Hl(d,n,I))},error:t[a+1],complete:t[a+2]};else{const I=Mt(n,we);d=Mt(I.firestore,Ee),g=I._query;const T=new oo(d);h={next:R=>{t[a]&&t[a](new Ve(d,T,I,R))},error:t[a+1],complete:t[a+2]},jl(n._query)}return function(T,R,C,V){const P=new Qi(V),j=new Gi(R,P,C);return T.asyncQueue.enqueueAndForget(async()=>qi(await Lr(T),j)),()=>{P.Ou(),T.asyncQueue.enqueueAndForget(async()=>Hi(await Lr(T),j))}}(ns(d),g,u,h)}function ao(n,t){return function(r,s){const o=new Xt;return r.asyncQueue.enqueueAndForget(async()=>dy(await wy(r),s,o)),o.promise}(ns(n),t)}function Hl(n,t,e){const r=e.docs.get(t._key),s=new oo(n);return new De(n,s,t._key,r,new An(e.hasPendingWrites,e.fromCache),t.converter)}function Mc(){return new Yi("serverTimestamp")}(function(t,e=!0){(function(s){Ze=s})(Zd),he(new Yt("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new Ee(new Nm(r.getProvider("auth-internal")),new Lm(a,r.getProvider("app-check-internal")),function(d,g){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new k(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mn(d.options.projectId,g)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),qt(Pa,Da,t),qt(Pa,Da,"esm2017")})();const $y={apiKey:"AIzaSyDBvmvQ1hUtO0E8umAPGlbAhe3rVdqu5lQ",authDomain:"mktdash-940f1.firebaseapp.com",projectId:"mktdash-940f1",storageBucket:"mktdash-940f1.firebasestorage.app",messagingSenderId:"157652211467",appId:"1:157652211467:web:2d296b31255efbec15340e",measurementId:"G-V992ECHF0V"},zl=Hc($y);xm(zl);const Ft=by(zl);document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("new-post-form"),t=document.getElementById("posts-container"),e=document.querySelector(".no-posts-message"),r=document.getElementById("post-form-modal"),s=document.getElementById("open-post-form-button"),o=r.querySelector(".close-button"),a=document.getElementById("password-check-modal"),u=document.getElementById("pagination-controls"),h=document.body,d=10;let g=1,I=[];function T(){t.innerHTML="";const E=(g-1)*d,m=I.slice(E,E+d);if(I.length===0){e.style.display="block",u.style.display="none";return}else e.style.display="none",u.style.display="flex";m.forEach(p=>{const _=document.createElement("div");_.classList.add("post-card"),_.dataset.id=p.id;const v=p.content.replace(/\n/g,"<br>")+(p.image?`<img src="${p.image}" alt="${p.title} 이미지">`:""),w=p.udemyCourseName?`<span class="course-title-display">(${p.udemyCourseName})</span>`:"",y=p.timestamp&&typeof p.timestamp.toDate=="function"?new Date(p.timestamp.toDate()).toLocaleString():"날짜 없음",at=p.udemyCourseUrl||p.udemyCourseSection?`
                <div class="course-info">
                    ${p.udemyCourseUrl?`<p><strong>강의 URL:</strong> <a href="${p.udemyCourseUrl}" target="_blank">${p.udemyCourseUrl}</a></p>`:""}
                    ${p.udemyCourseSection?`<p><strong>강의 섹션/위치:</strong> ${p.udemyCourseSection}</p>`:""}
                </div>
                `:"";_.innerHTML=`
                <div class="post-card-header">
                    <h4>${p.title} ${w}</h4>
                    <span class="accordion-icon">➕️</span>
                </div>
                <p class="meta">작성자: ${p.nickname} | 날짜: ${y}</p>
                
                <div class="post-card-content-wrapper">
                    <p class="content-body">${v}</p>
                    ${at}
                    <div class="post-actions">
                        <button class="edit-post">수정</button>
                        <button class="delete-post delete">삭제</button>
                    </div>
                    <div class="comments-section">
                        <h5>댓글</h5>
                        <div class="comments-list">
                            ${(p.comments||[]).map(Q=>{const rt=Q.timestamp&&typeof Q.timestamp.toDate=="function"?new Date(Q.timestamp.toDate()).toLocaleString():"날짜 없음";return`
                                <div class="comment-card">
                                    <p class="meta">작성자: ${Q.nickname} | 날짜: ${rt}</p>
                                    <p>${Q.content.replace(/\n/g,"<br>")}</p>
                                    <div class="comment-actions">
                                        <button class="edit-comment" data-comment-id="${Q.id}">수정</button>
                                        <button class="delete-comment delete" data-comment-id="${Q.id}">삭제</button>
                                    </div>
                                </div>
                                `}).join("")}
                        </div>
                        <form class="comment-form">
                            <div class="form-group">
                                <label for="comment-nickname-${p.id}">닉네임:</label>
                                <input type="text" id="comment-nickname-${p.id}" required maxlength="20">
                            </div>
                            <div class="form-group">
                                <label for="comment-password-${p.id}">비밀번호:</label>
                                <input type="password" id="comment-password-${p.id}" required maxlength="20">
                            </div>
                            <div class="form-group">
                                <label for="comment-content-${p.id}">댓글 내용:</label>
                                <textarea id="comment-content-${p.id}" rows="3" required></textarea>
                            </div>
                            <button type="submit" class="button">댓글 등록</button>
                        </form>
                    </div>
                </div>
            `,t.appendChild(_),_.querySelector(".post-card-header").addEventListener("click",()=>{_.classList.toggle("active");const Q=_.querySelector(".post-card-content-wrapper"),rt=_.querySelector(".accordion-icon");_.classList.contains("active")?(Q.style.maxHeight=Q.scrollHeight+"px",rt.textContent="➖️"):(Q.style.maxHeight="0",rt.textContent="➕️")});const Z=_.querySelector(".comment-form");Z.addEventListener("submit",Q=>{Q.preventDefault();const rt=Z.querySelector(`#comment-nickname-${p.id}`).value.trim(),kt=Z.querySelector(`#comment-password-${p.id}`).value.trim(),sn=Z.querySelector(`#comment-content-${p.id}`).value;j(p.id,rt,kt,sn,Z)}),_.querySelector(".edit-post").addEventListener("click",Q=>{Q.stopPropagation(),L(p.id,"post","edit")}),_.querySelector(".delete-post").addEventListener("click",Q=>{Q.stopPropagation(),L(p.id,"post","delete")}),_.querySelectorAll(".edit-comment").forEach(Q=>{Q.addEventListener("click",rt=>{rt.stopPropagation();const kt=rt.target.dataset.commentId;L(p.id,"comment","edit",kt)})}),_.querySelectorAll(".delete-comment").forEach(Q=>{Q.addEventListener("click",rt=>{rt.stopPropagation();const kt=rt.target.dataset.commentId;L(p.id,"comment","delete",kt)})})}),R()}function R(){u.innerHTML="";const E=Math.ceil(I.length/d);if(E<=1){u.style.display="none";return}u.style.display="flex";const m=document.createElement("button");m.textContent="◀",m.disabled=g===1,m.addEventListener("click",()=>{g--,T(),window.scrollTo({top:t.offsetTop,behavior:"smooth"})}),u.appendChild(m);for(let _=1;_<=E;_++){const v=document.createElement("button");v.textContent=_,v.classList.toggle("active",_===g),v.addEventListener("click",()=>{g=_,T(),window.scrollTo({top:t.offsetTop,behavior:"smooth"})}),u.appendChild(v)}const p=document.createElement("button");p.textContent="▶",p.disabled=g===E,p.addEventListener("click",()=>{g++,T(),window.scrollTo({top:t.offsetTop,behavior:"smooth"})}),u.appendChild(p)}const C=document.getElementById("post-image-upload"),V=document.getElementById("post-image-preview");let P=null;C.addEventListener("change",E=>{const m=E.target.files[0];if(m){const p=new FileReader;p.onload=_=>{V.src=_.target.result,V.style.display="block",P=_.target.result},p.readAsDataURL(m)}else V.src="#",V.style.display="none",P=null}),n.addEventListener("submit",async E=>{E.preventDefault();const m={nickname:document.getElementById("post-nickname").value.trim(),password:document.getElementById("post-password").value.trim(),title:document.getElementById("post-title").value,content:document.getElementById("post-content").value,image:P,udemyCourseName:document.getElementById("udemy-course-name").value,udemyCourseUrl:document.getElementById("udemy-course-url").value,udemyCourseSection:document.getElementById("udemy-course-section").value,timestamp:Mc()};try{await Nc(vn(Ft,"posts"),m),alert("질문이 성공적으로 등록되었습니다."),n.reset(),V.src="#",V.style.display="none",P=null,r.style.display="none",h.style.overflow=""}catch(p){console.error("Error adding document: ",p),alert("질문 등록에 실패했습니다. 관리자에게 문의하세요.")}});async function j(E,m,p,_,v){const w={nickname:m,password:p,content:_,timestamp:Mc()};try{await Nc(vn(Ft,"posts",E,"comments"),w),alert("댓글이 성공적으로 등록되었습니다."),v.reset()}catch(y){console.error("Error adding comment: ",y),alert("댓글 등록에 실패했습니다. 관리자에게 문의하세요.")}}function L(E,m,p,_=null){a.style.display="flex",h.style.overflow="hidden";const v=document.getElementById("modal-password"),w=document.getElementById("modal-confirm"),y=document.getElementById("modal-cancel");v.value="",w.onclick=null,y.onclick=null,w.onclick=async()=>{const at=v.value.trim();if(m==="post")try{const Z=Bt(Ft,"posts",E),Q=await Us(Z);if(!Q.exists()){alert("게시글을 찾을 수 없습니다."),a.style.display="none",h.style.overflow="";return}Q.data().password===at?p==="edit"?$(E):p==="delete"&&Y(E):alert("비밀번호가 일치하지 않습니다.")}catch(Z){console.error("Error fetching post for password check: ",Z),alert("오류가 발생했습니다. 다시 시도해 주세요.")}else if(m==="comment")try{const Z=Bt(Ft,"posts",E),Q=Bt(Z,"comments",_),rt=await Us(Q);if(!rt.exists()){alert("댓글을 찾을 수 없습니다."),a.style.display="none",h.style.overflow="";return}rt.data().password===at?p==="edit"?Rt(E,_):p==="delete"&&U(E,_):alert("비밀번호가 일치하지 않습니다.")}catch(Z){console.error("Error fetching comment for password check: ",Z),alert("오류가 발생했습니다. 다시 시도해 주세요.")}a.style.display="none",h.style.overflow=""},y.onclick=()=>{a.style.display="none",h.style.overflow=""}}async function $(E){const m=I.find(Z=>Z.id===E);if(!m)return;const p=prompt("새 제목을 입력하세요:",m.title),_=prompt("새 내용을 입력하세요:",m.content),v=prompt("새 Udemy 강의명 (선택 사항):",m.udemyCourseName||""),w=prompt("새 Udemy 강의 URL (선택 사항):",m.udemyCourseUrl||""),y=prompt("새 강의 섹션/위치 (선택 사항):",m.udemyCourseSection||""),at=prompt("새 이미지 URL을 입력하거나 비워두면 삭제됩니다 (현재: "+(m.image||"없음")+"):",m.image||"");if(p!==null&&_!==null)try{await kc(Bt(Ft,"posts",E),{title:p,content:_,udemyCourseName:v,udemyCourseUrl:w,udemyCourseSection:y,image:at}),alert("게시글이 수정되었습니다.")}catch(Z){console.error("Error updating document: ",Z),alert("게시글 수정에 실패했습니다. 관리자에게 문의하세요.")}}async function Y(E){if(confirm("정말로 이 게시글을 삭제하시겠습니까?"))try{const m=vn(Ft,"posts",E,"comments"),p=await Vc(m);for(const _ of p.docs)await js(Bt(Ft,"posts",E,"comments",_.id));await js(Bt(Ft,"posts",E)),alert("게시글이 삭제되었습니다.")}catch(m){console.error("Error deleting document: ",m),alert("게시글 삭제에 실패했습니다. 관리자에게 문의하세요.")}}async function Rt(E,m){const p=Bt(Ft,"posts",E),_=Bt(p,"comments",m);try{const v=await Us(_);if(!v.exists()){alert("댓글을 찾을 수 없습니다.");return}const w=v.data(),y=prompt("새 댓글 내용을 입력하세요:",w.content);y!==null&&(await kc(_,{content:y}),alert("댓글이 수정되었습니다."))}catch(v){console.error("Error updating comment: ",v),alert("댓글 수정에 실패했습니다. 관리자에게 문의하세요.")}}async function U(E,m){if(confirm("정말로 이 댓글을 삭제하시겠습니까?")){const p=Bt(Ft,"posts",E),_=Bt(p,"comments",m);try{await js(_),alert("댓글이 삭제되었습니다.")}catch(v){console.error("Error deleting comment: ",v),alert("댓글 삭제에 실패했습니다. 관리자에게 문의하세요.")}}}jy(xc(vn(Ft,"posts"),Cc("timestamp","desc")),async E=>{I=[];for(const m of E.docs){const p=m.data(),v=(await Vc(xc(vn(m.ref,"comments"),Cc("timestamp","asc")))).docs.map(w=>({id:w.id,...w.data()}));I.push({id:m.id,...p,comments:v})}g=1,T()},E=>{console.error("Error fetching posts from Firestore: ",E),alert("게시글을 불러오는 데 오류가 발생했습니다. 네트워크 연결을 확인하거나 관리자에게 문의하세요.")}),s.addEventListener("click",()=>{h.style.overflow="hidden",setTimeout(()=>{r.style.display="flex"},50),n.reset(),V.src="#",V.style.display="none",P=null}),o.addEventListener("click",()=>{r.style.display="none",h.style.overflow=""}),window.addEventListener("click",E=>{E.target===r&&(r.style.display="none",h.style.overflow="")})});document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector(".course-list"),t=document.querySelector(".roadmap-category-list"),e=document.getElementById("roadmap-detail"),r=document.getElementById("roadmap-detail-title"),s=document.getElementById("roadmap-detail-description"),o=document.getElementById("roadmap-sections"),a=document.getElementById("backToRoadmaps"),u=document.getElementById("roadmaps"),h=document.querySelector(".notes-list"),d=document.getElementById("loadMoreNotes"),g=document.querySelectorAll(".filter-button"),I=[{id:1,title:"The Web Developer Bootcamp 2025",instructor:"Colt Steele",description:"웹 개발의 모든 것을 배우는 최고의 부트캠프! 프론트엔드부터 백엔드까지 한 번에.",image:"https://img-c.udemycdn.com/course/750x422/625204_436a_3.jpg",price:"₩17,000",link:"https://www.udemy.com/course/the-web-developer-bootcamp/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx"},{id:2,title:"Python for Data Science and Machine Learning Bootcamp",instructor:"Jose Portilla",description:"파이썬으로 데이터 과학과 머신러닝의 기초를 완벽하게 마스터하세요.",image:"https://img-c.udemycdn.com/course/240x135/903744_8eb2.jpg",price:"₩19,000",link:"https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx"},{id:3,title:"CSS - The Complete Guide 2025 (incl. Flexbox, Grid & Sass)",instructor:"Maximilian Schwarzmüller",description:"HTML과 CSS의 심층적인 이해를 통해 웹 디자인 스킬을 향상시키세요.",image:"https://img-c.udemycdn.com/course/240x135/1561458_7f3b_2.jpg",price:"₩12,000",link:"https://www.udemy.com/course/the-complete-guide-to-dhtml-and-css/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx"},{id:4,title:"AWS Certified Solutions Architect - Associate",instructor:"Stephane Maarek",description:"가장 인기 있는 클라우드 자격증, AWS SAA 시험을 위한 완벽 대비 강의.",image:"https://img-c.udemycdn.com/course/240x135/2196488_8fc7_10.jpg",price:"₩22,000",link:"https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c02/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx"},{id:5,title:"The Complete 2025 Web Development Bootcamp",instructor:"Angela Yu",description:"풀스택 웹 개발자가 되기 위한 종합 부트캠프. 100일 만에 개발 전문가로 변신!",image:"https://img-c.udemycdn.com/course/240x135/1565838_e54e_18.jpg",price:"₩18,000",link:"https://www.udemy.com/course/the-complete-web-development-bootcamp/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx"},{id:6,title:"【한글자막】 JavaScript 알고리즘 & 자료구조 마스터클래스",instructor:"Colt Steele",description:"JavaScript로 알고리즘과 자료구조를 깊이 있게 배우고 문제 해결 능력을 키웁니다.",image:"https://img-c.udemycdn.com/course/240x135/4305113_68d5_4.jpg",price:"₩15,000",link:"https://www.udemy.com/course/best-javascript-data-structures/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx"},{id:7,title:"Modern React with Redux",instructor:"Stephen Grider",description:"React와 Redux를 사용하여 현대적인 웹 애플리케이션을 구축하는 방법을 배웁니다.",image:"https://img-c.udemycdn.com/course/240x135/705264_caa9_13.jpg",price:"₩20,000",link:"https://www.udemy.com/course/react-redux/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx"},{id:8,title:"Complete Python Pro Bootcamp for 2025",instructor:"Angela Yu",description:"파이썬 초보자를 위한 100일 코딩 챌린지. 웹 개발, 게임, 앱 등 다양한 프로젝트를 만듭니다.",image:"https://img-c.udemycdn.com/course/240x135/2776760_f176_10.jpg",price:"₩16,000",link:"https://www.udemy.com/course/100-days-of-code/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx"}],T=[{id:"frontend-developer",title:"프론트엔드 개발자 로드맵",description:"웹사이트의 사용자 인터페이스를 구축하고, 사용자 경험을 책임지는 프론트엔드 개발자가 되기 위한 체계적인 학습 경로입니다. HTML, CSS, JavaScript 기초부터 React/Vue/Angular 프레임워크 활용까지 커버합니다.",image:"https://img-c.udemycdn.com/course/240x135/625204_436a_3.jpg",careers:["웹 개발자","프론트엔드 엔지니어","UI 개발자"],sections:[{sectionTitle:"STEP 1: 웹 개발 핵심 기초 (HTML, CSS, JavaScript)",courses:[{udemyCourseId:"the-web-developer-bootcamp",title:"The Web Developer Bootcamp 2025",instructor:"Colt Steele",link:"https://www.udemy.com/course/the-web-developer-bootcamp/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"웹 개발의 가장 기본적인 언어인 HTML, CSS, JavaScript를 탄탄하게 배우는 올인원 강의입니다. 웹사이트를 직접 만들어보며 실력을 키울 수 있습니다.",skills:["HTML5","CSS3","JavaScript (ES6+)"],image:"https://img-c.udemycdn.com/course/240x135/625204_436a_3.jpg"},{udemyCourseId:"complete-javascript-course",title:"The Complete JavaScript Course 2025: From Zero to Expert!",instructor:"Jonas Schmedtmann",link:"https://www.udemy.com/course/the-complete-javascript-course/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"자바스크립트의 핵심 개념부터 비동기 프로그래밍, 객체 지향 프로그래밍까지 심도 있게 다룹니다. 실전 프로젝트를 통해 실제 애플리케이션을 개발하는 능력을 길러줍니다.",skills:["JavaScript (Advanced)","DOM Manipulation","AJAX","OOP"],image:"https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg"},{udemyCourseId:"javascript-algorithms-data-structures",title:"【한글자막】 JavaScript 알고리즘 & 자료구조 마스터클래스",instructor:"Colt Steele",link:"https://www.udemy.com/course/best-javascript-data-structures/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"JavaScript로 알고리즘과 자료구조를 깊이 있게 이해하고, 코딩 테스트 및 문제 해결 능력을 향상시킵니다.",skills:["Algorithms","Data Structures","Big O Notation"],image:"https://img-c.udemycdn.com/course/240x135/4305113_68d5_4.jpg"}]},{sectionTitle:"STEP 2: 프레임워크/라이브러리 학습 (React, Vue, Angular)",courses:[{udemyCourseId:"react-the-complete-guide",title:"【한글자막】 React 완벽 가이드 2025 with React Router & Redux",instructor:"Maximilian Schwarzmüller",link:"https://www.udemy.com/course/best-react/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"가장 인기 있는 JavaScript 라이브러리인 React를 마스터하세요. Hooks, React Router, Redux 등 최신 기능을 활용하여 복잡한 SPA(Single Page Application)를 구축하는 방법을 배웁니다.",skills:["ReactJS","React Hooks","Redux","React Router"],image:"https://img-c.udemycdn.com/course/240x135/4298905_17e3_2.jpg"},{udemyCourseId:"vue-js-3-composition-api",title:"【한글자막】 Vue - 완벽 가이드 (Router 및 Composition API 포함)",instructor:"Maximilian Schwarzmüller",link:"https://www.udemy.com/course/vue-router-composition-api/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"Vue.js 3의 모든 것을 배우고, Composition API, Vue Router, Pinia를 활용하여 강력한 웹 애플리케이션을 개발합니다.",skills:["Vue.js 3","Composition API","Vuex/Pinia","Vue Router"],image:"https://img-c.udemycdn.com/course/240x135/4861998_7208_4.jpg"},{udemyCourseId:"angular-the-complete-guide",title:"【한글자막】 Angular 완벽 가이드 : 기초 문법부터 TypeScript 기반 최신 문법까지",instructor:"Maximilian Schwarzmüller",link:"https://www.udemy.com/course/angular-2021/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"구글의 프레임워크 Angular를 이용해 견고하고 확장 가능한 웹 앱을 만드는 방법을 배웁니다.",skills:["Angular","TypeScript","RxJS","NGRX"],image:"https://img-c.udemycdn.com/course/240x135/4234850_7d29_4.jpg"}]},{sectionTitle:"STEP 3: 심화 학습 및 백엔드 지식",courses:[{udemyCourseId:"nextjs-react-nodejs",title:"【한글자막】 Next.js 15 & React - 완벽 가이드",instructor:"Maximilian Schwarzmüller",link:"https://www.udemy.com/course/nextjs-react-incl-two-paths/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"Next.js를 활용하여 서버 사이드 렌더링(SSR) 및 정적 사이트 생성(SSG)을 구현하는 방법을 배우고, 풀스택 애플리케이션을 구축합니다.",skills:["Next.js","SSR","SSG","API Routes"],image:"https://img-c.udemycdn.com/course/240x135/4699864_c9d5_3.jpg"},{udemyCourseId:"nodejs-express-mongodb",title:"Node.js, Express, MongoDB & More: The Complete Bootcamp 2025",instructor:"Jonas Schmedtmann",link:"https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"JavaScript 기반의 Node.js 환경에서 강력한 백엔드 API를 구축하고 데이터베이스(MongoDB)와 연동하는 방법을 배웁니다.",skills:["Node.js","Express.js","MongoDB","REST APIs","Authentication"],image:"https://img-c.udemycdn.com/course/240x135/1672410_9ff1_5.jpg"}]}]},{id:"data-scientist",title:"데이터 사이언티스트 로드맵",description:"데이터를 수집, 분석, 해석하고 이를 통해 비즈니스 인사이트를 도출하는 데이터 사이언티스트가 되기 위한 학습 경로입니다. 파이썬 기초부터 머신러닝, 딥러닝, 데이터 시각화까지 다룹니다.",image:"https://img-c.udemycdn.com/course/240x135/4294148_ba63_4.jpg",careers:["데이터 분석가","머신러닝 엔지니어","AI 개발자"],sections:[{sectionTitle:"STEP 1: 파이썬 프로그래밍 및 통계 기초",courses:[{udemyCourseId:"python-for-data-science",title:"Python for Data Science and Machine Learning Bootcamp",instructor:"Jose Portilla",link:"https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"데이터 과학에 필요한 파이썬 기본기를 다지고, Numpy, Pandas, Matplotlib 등 핵심 라이브러리를 배웁니다.",skills:["Python","Numpy","Pandas","Matplotlib","Seaborn"],image:"https://img-c.udemycdn.com/course/240x135/903744_8eb2.jpg"},{udemyCourseId:"statistics-for-data-science",title:"Statistics for Data Science and Business Analysis",instructor:"365 Careers",link:"https://www.udemy.com/course/statistics-for-data-science-and-business-analysis/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"데이터 과학에 필수적인 통계학 개념을 이해하고, 실제 비즈니스 문제에 적용하는 방법을 배웁니다.",skills:["Statistics","Probability","Hypothesis Testing","Regression"],image:"https://img-c.udemycdn.com/course/240x135/1298780_731f_4.jpg"}]},{sectionTitle:"STEP 2: 머신러닝 및 딥러닝",courses:[{udemyCourseId:"machine-learning-a-z",title:"【한글자막】 머신러닝의 모든 것 with AI, Python & R + ChatGPT Prize [2025]",instructor:"Kirill Eremenko, Hadelin de Ponteves",link:"https://www.udemy.com/course/machinelearning/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"좋은 성능의 머신러닝 모델을 만들기 위해 반드시 알아야 할 수학적 개념과 30여개 주요 모델 및 이론, 그리고 실습 예제들을 배웁니다.",skills:["Machine Learning","Regression","Classification","Scikit-learn"],image:"https://img-c.udemycdn.com/course/240x135/4294148_ba63_4.jpg"},{udemyCourseId:"deep-learning-pytorch",title:"PyTorch for Deep Learning Bootcamp",instructor:"Andrei Neagoie, Daniel Bourke",link:"https://www.udemy.com/course/pytorch-for-deep-learning/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"PyTorch 프레임워크를 사용하여 딥러닝 모델을 구축하고 훈련하는 방법을 배웁니다. 이미지 인식, 자연어 처리 등 다양한 딥러닝 프로젝트를 경험합니다.",skills:["Deep Learning","PyTorch","Neural Networks","CNN","RNN","GANs"],image:"https://img-c.udemycdn.com/course/240x135/4734870_4de8.jpg"}]},{sectionTitle:"STEP 3: 데이터 시각화 및 배포",courses:[{udemyCourseId:"tableau-desktop-mastery",title:"【한글자막】 태블로 Tableau 완벽 실전 교육! 커리어 업그레이드 하기",instructor:"Kirill Eremenko",link:"https://www.udemy.com/course/best-tableau-2020/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"데이터 시각화를 습득하여 고객 구매 행동, 판매 동향, 생산 방해 요소 같은 데이터 패턴을 시각화하는 방법을 배웁니다.",skills:["Tableau","Data Visualization","Dashboarding"],image:"https://img-c.udemycdn.com/course/240x135/4294154_9dde_4.jpg"}]}]},{id:"ui-ux-designer",title:"UI/UX 디자이너 로드맵",description:"사용자에게 직관적이고 만족스러운 경험을 제공하는 UI(사용자 인터페이스)와 UX(사용자 경험)를 디자인하는 전문가가 되기 위한 로드맵입니다. 디자인 원칙부터 툴 활용, 포트폴리오 구축까지 다룹니다.",image:"https://img-c.udemycdn.com/course/240x135/6650391_c37e_2.jpg",careers:["UI 디자이너","UX 디자이너","제품 디자이너"],sections:[{sectionTitle:"STEP 1: 디자인 기초 및 사용자 경험 이해",courses:[{udemyCourseId:"ux-ui-design-from-scratch",title:"Figma + Adobe XD Bootcamp: Learn UI/UX Design A–Z",instructor:"The Knowledge Hub",link:"https://www.udemy.com/course/figma-adobe-xd-bootcamp-learn-uiux-design-az/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"UI/UX 디자인의 핵심 원칙을 배우고, Figma, Adobe XD 같은 인기 디자인 툴을 활용하는 방법을 익힙니다.",skills:["UI Design","UX Design","Figma","Adobe XD","Prototyping"],image:"https://img-c.udemycdn.com/course/240x135/6650391_c37e_2.jpg"},{udemyCourseId:"design-thinking-process",title:"Complete Design Thinking Masterclass | eBook included",instructor:"UX Design Institute",link:"https://www.udemy.com/course/design-thinking-the-complete-certification-course/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"디자인 씽킹 프로세스를 통해 사용자 문제를 해결하고 혁신적인 솔루션을 도출하는 방법을 배웁니다.",skills:["Design Thinking","User Research","Ideation","Prototyping"],image:"https://img-c.udemycdn.com/course/240x135/1799242_1268_4.jpg"}]},{sectionTitle:"STEP 2: 인터랙션 디자인 및 포트폴리오",courses:[{udemyCourseId:"adobe-illustrator-cc",title:"Adobe Illustrator CC – Advanced Training Course",instructor:"Daniel Walter Scott",link:"https://www.udemy.com/course/adobe-illustrator-cc-advanced-training/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"일러스트레이터를 활용하여 벡터 그래픽 및 아이콘 디자인 스킬을 향상시킵니다.",skills:["Adobe Illustrator","Vector Graphics","Icon Design"],image:"https://img-c.udemycdn.com/course/240x135/1623798_db31_6.jpg"},{udemyCourseId:"build-a-portfolio",title:"Figma UI UX Design Essentials",instructor:"Daniel Walter Scott",link:"https://www.udemy.com/course/figma-ux-ui-design-user-experience-tutorial-course/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"성공적인 UI/UX 디자이너 포트폴리오를 만들고 취업 기회를 높이는 방법을 배웁니다.",skills:["Portfolio Creation","Case Study","Presentation Skills"],image:"https://img-c.udemycdn.com/course/240x135/4359576_b9e1_2.jpg"}]}]},{id:"fullstack-developer",title:"풀스택 개발자 로드맵",description:"프론트엔드와 백엔드 모두를 다루는 만능 풀스택 개발자가 되기 위한 로드맵입니다. 웹의 모든 계층을 이해하고 애플리케이션을 처음부터 끝까지 구축할 수 있는 능력을 키웁니다.",image:"https://img-c.udemycdn.com/course/240x135/1672410_9ff1_5.jpg",careers:["웹 풀스택 개발자","백엔드 개발자","데브옵스 엔지니어"],sections:[{sectionTitle:"STEP 1: 프론트엔드 핵심 (HTML, CSS, JS, React)",courses:[{udemyCourseId:"the-web-developer-bootcamp",title:"T【한글자막】 The Web Developer 부트캠프 2025",instructor:"Colt Steele",link:"https://www.udemy.com/course/the-web-developer-bootcamp-2021-korea/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"프론트엔드 개발의 기초를 탄탄하게 다지는 필수 강의입니다. 반응형 웹 디자인과 인터랙티브한 UI 구현 능력을 키웁니다.",skills:["HTML5","CSS3","JavaScript"],image:"https://img-c.udemycdn.com/course/240x135/4297574_42d1_4.jpg"},{udemyCourseId:"modern-react-with-redux",title:"Modern React with Redux",instructor:"Stephen Grider",link:"https://www.udemy.com/course/react-redux/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"최신 React와 Redux를 사용하여 복잡한 프론트엔드 애플리케이션 상태 관리를 배우고, SPA 개발 능력을 향상시킵니다.",skills:["React","Redux","Hooks","Context API"],image:"https://img-c.udemycdn.com/course/240x135/705264_caa9_13.jpg"}]},{sectionTitle:"STEP 2: 백엔드 개발 (Node.js, Express, MongoDB)",courses:[{udemyCourseId:"nodejs-express-mongodb",title:"Node.js, Express, MongoDB & More: The Complete Bootcamp 2025",instructor:"Jonas Schmedtmann",link:"https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"JavaScript 기반의 Node.js 환경에서 강력한 백엔드 API를 구축하고 데이터베이스(MongoDB)와 연동하는 방법을 배웁니다.",skills:["Node.js","Express.js","MongoDB","RESTful APIs","Authentication"],image:"https://img-c.udemycdn.com/course/240x135/1672410_9ff1_5.jpg"},{udemyCourseId:"mongodb-the-complete-developer-guide",title:"MongoDB - The Complete Developer's Guide 2025",instructor:"Maximilian Schwarzmüller",link:"https://www.udemy.com/course/mongodb-the-complete-developers-guide/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"NoSQL 데이터베이스인 MongoDB의 심층적인 이해를 통해 데이터 모델링, 쿼리 최적화, 데이터베이스 관리 기술을 습득합니다.",skills:["MongoDB","Mongoose","NoSQL","Database Design"],image:"https://img-c.udemycdn.com/course/240x135/1906852_93c6_2.jpg"}]},{sectionTitle:"STEP 3: 클라우드 및 배포",courses:[{udemyCourseId:"aws-certified-solutions-architect",title:"【한글자막】 AWS Certified Solutions Architect Associate시험합격! 2025",instructor:"Stephane Maarek",link:"https://www.udemy.com/course/best-aws-certified-solutions-architect-associate/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"클라우드 환경에 애플리케이션을 배포하고 관리하는 데 필요한 AWS 서비스를 이해하고 활용하는 방법을 배웁니다.",skills:["AWS EC2","S3","RDS","VPC","Lambda"],image:"https://img-c.udemycdn.com/course/240x135/4389576_a7d6_9.jpg"}]}]},{id:"digital-marketing-specialist",title:"디지털 마케팅 스페셜리스트 로드맵",description:"온라인 환경에서 제품과 서비스를 효과적으로 홍보하고 판매하는 디지털 마케팅 전문가가 되기 위한 로드맵입니다. SEO, 소셜 미디어 마케팅, 콘텐츠 마케팅, 광고 전략 등을 배웁니다.",image:"https://img-c.udemycdn.com/course/240x135/914296_3670_8.jpg",careers:["콘텐츠 마케터","SEO 전문가","소셜 미디어 매니저","퍼포먼스 마케터"],sections:[{sectionTitle:"STEP 1: 디지털 마케팅 기초 및 전략",courses:[{udemyCourseId:"digital-marketing-masterclass",title:"The Complete Digital Marketing Course - 12 Courses in 1",instructor:"Rob Percival, Daragh Walsh",link:"https://www.udemy.com/course/learn-digital-marketing-course/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"SEO, YouTube, Facebook, Instagram, Google Ads 등 디지털 마케팅의 모든 핵심 분야를 한 번에 배웁니다.",skills:["Digital Marketing","SEO","Social Media Marketing","Content Marketing","Email Marketing"],image:"https://img-c.udemycdn.com/course/240x135/914296_3670_8.jpg"}]},{sectionTitle:"STEP 2: SEO 및 콘텐츠 마케팅",courses:[{udemyCourseId:"seo-training-2025",title:"【한글자막】 SEO 트레이닝 마스터클래스 2025: 완전 초보자에서 완벽 전문가 되기",instructor:"Alex Genadinik",link:"https://www.udemy.com/course/master-seo-training/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"검색 엔진 최적화(SEO)의 모든 기술을 배우고, 웹사이트 트래픽을 늘리는 방법을 익힙니다.",skills:["SEO","Keyword Research","On-page SEO","Off-page SEO","Technical SEO"],image:"https://img-c.udemycdn.com/course/240x135/4563876_1177_11.jpg"},{udemyCourseId:"copywriting-course",title:"Alan Sharpe's 30-hr Copywriting Masterclass + ChatGPT tips",instructor:"Alan Sharpe",link:"https://www.udemy.com/course/alan-sharpe-copywriting-masterclass/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"매력적인 콘텐츠를 작성하고, 독자의 마음을 사로잡는 카피라이팅 기술을 배웁니다.",skills:["Copywriting","Content Strategy","Storytelling","AI for Content"],image:"https://img-c.udemycdn.com/course/240x135/3026298_8fa8_13.jpg"}]}]}],R=[{id:1,title:"2025년 프론트엔드 개발 트렌드 5가지",description:"올해 주목해야 할 프론트엔드 기술과 라이브러리, 그리고 학습 방향에 대한 가이드입니다.",image:"https://images.unsplash.com/photo-1542062700-9b61ccbc1696?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",date:"2025.01.15",category:"개발 트렌드",link:"notes/frontend-trends-2025"},{id:2,title:"AI 시대, 개발자가 갖춰야 할 역량은?",description:"AI 기술이 빠르게 발전하는 시대에 개발자들이 어떻게 적응하고 성장해야 할지 고민해봅니다.",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",date:"2025.02.01",category:"커리어",link:"notes/ai-developer-skills"},{id:3,title:"클린 코드 작성을 위한 5가지 습관",description:"효율적이고 유지보수하기 쉬운 코드를 작성하는 데 도움이 되는 실용적인 팁들입니다.",image:"https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",date:"2025.02.20",category:"개발 팁",link:"notes/clean-code-habits"},{id:4,title:"TypeScript, 왜 배워야 할까?",description:"JavaScript의 상위 집합인 TypeScript가 왜 현대 웹 개발에서 중요해졌는지 알아봅니다.",image:"https://images.unsplash.com/photo-1699885960867-56d5f5262d38?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",date:"2025.03.05",category:"개발 언어",link:"notes/why-typescript"},{id:5,title:"프롬프트 엔지니어링, 이제는 필수!",description:"챗GPT 등 AI 도구를 효과적으로 활용하기 위한 프롬프트 엔지니어링의 기본과 팁.",image:"https://images.unsplash.com/photo-1675557009483-e6cf3867976b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",date:"2025.03.18",category:"AI",link:"notes/prompt-engineering"},{id:6,title:"Git & GitHub, 협업의 필수 도구",description:"버전 관리 시스템 Git과 GitHub를 활용한 효율적인 협업 방법에 대해 알아봅니다.",image:"https://images.unsplash.com/photo-1647166545674-ce28ce93bdca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",date:"2025.04.02",category:"개발 도구",link:"notes/git-github-guide"},{id:7,title:"백엔드 개발자에게 Node.js를 추천하는 이유",description:"JavaScript 기반의 Node.js가 백엔드 개발에 강력한 이유를 알아봅니다.",image:"https://images.unsplash.com/photo-1664526936810-ec0856d31b92?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",date:"2025.04.10",category:"개발 언어",link:"notes/why-nodejs"},{id:8,title:"REST API 설계 베스트 프랙티스",description:"효율적이고 일관된 REST API를 설계하기 위한 모범 사례들을 소개합니다.",image:"https://images.unsplash.com/photo-1634633111555-48907980b902?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",date:"2025.04.25",category:"개발 팁",link:"notes/rest-api-best-practices"},{id:9,title:"데이터 과학 로드맵 시작하기",description:"데이터 과학 분야로 진입하기 위한 첫 걸음과 필수 학습 내용을 안내합니다.",image:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",date:"2025.05.01",category:"커리어",link:"notes/data-science-roadmap-start"},{id:10,title:"생성형 AI 시대, 개발자의 역할 변화",description:"생성형 AI가 발전하면서 개발자에게 요구되는 역할과 능력에 대해 탐구합니다.",image:"https://images.unsplash.com/photo-1712002641088-9d76f9080889?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",date:"2025.07.09",category:"AI",link:"notes/developer-role-in-generative-ai"}];function C(U){n.innerHTML="",U.forEach(E=>{const m=document.createElement("div");m.classList.add("course-card"),m.innerHTML=`
                <img src="${E.image}" alt="${E.title}">
                <div class="course-card-content">
                    <h3>${E.title}</h3>
                    <p><strong>강사:</strong> ${E.instructor}</p>
                    <p>${E.description}</p>
                    <p class="price">${E.price}</p>
                    <a href="${E.link}" target="_blank" class="link">강의 보러가기</a>
                </div>
            `,n.appendChild(m)})}function V(){t.innerHTML="",T.forEach(U=>{const E=document.createElement("div");E.classList.add("roadmap-card"),E.dataset.roadmapId=U.id,E.innerHTML=`
                <img src="${U.image}" alt="${U.title}">
                <h3>${U.title}</h3>
                <p>${U.description.substring(0,80)}...</p>
                <p><strong>관련 직무:</strong> ${U.careers.join(", ")}</p>
            `,t.appendChild(E),E.addEventListener("click",()=>P(U.id))}),e.style.display="none",t.style.display="grid"}function P(U){const E=T.find(m=>m.id===U);E&&(r.textContent=E.title,s.textContent=E.description,o.innerHTML="",E.sections.forEach((m,p)=>{const _=document.createElement("div");_.classList.add("roadmap-section");const v=document.createElement("div");v.classList.add("roadmap-section-header"),v.innerHTML=`
                    <h4>${m.sectionTitle}</h4>
                    <span class="accordion-icon">➕️</span>
                `,_.appendChild(v);const w=document.createElement("div");w.classList.add("roadmap-section-content"),p===0?(w.style.display="block",v.querySelector(".accordion-icon").textContent="➖️"):w.style.display="none",m.courses.forEach(y=>{const at=document.createElement("div");at.classList.add("roadmap-course-item"),at.innerHTML=`
                        <img src="${y.image}" alt="${y.title}">
                        <div class="roadmap-course-info">
                            <h5>${y.title}</h5>
                            <p><strong>강사:</strong> ${y.instructor}</p>
                            <p>${y.description}</p>
                            <p class="skills">
                                ${y.skills.map(Z=>`<span>${Z}</span>`).join("")}
                            </p>
                            <a href="${y.link}" target="_blank">Udemy 강의 보러가기</a>
                        </div>
                    `,w.appendChild(at)}),_.appendChild(w),o.appendChild(_),v.addEventListener("click",()=>{const y=v.querySelector(".accordion-icon");w.style.display==="none"?(w.style.display="block",y.textContent="➖️"):(w.style.display="none",y.textContent="➕️")})}),t.style.display="none",e.style.display="block",u.scrollIntoView({behavior:"smooth"}))}let j=6,L=0,$=[];function Y(U,E=!1){E||(h.innerHTML="",L=0);const m=L*j;U.slice(m,m+j).forEach(_=>{const v=document.createElement("div");v.classList.add("note-card"),v.innerHTML=`
                <img src="${_.image}" alt="${_.title}">
                <div class="note-card-content">
                    <h3>${_.title}</h3>
                    <p>${_.description}</p>
                    <p class="meta">날짜: ${_.date} | 카테고리: ${_.category}</p>
                    <a href="${_.link}" class="read-more">자세히 보기</a>
                </div>
            `,h.appendChild(v)}),L++,U.length>L*j?d.style.display="block":d.style.display="none"}function Rt(U){g.forEach(E=>{E.classList.remove("active")}),document.querySelector(`.filter-button[data-category="${U}"]`).classList.add("active"),U==="all"?$=R:$=R.filter(E=>E.category===U),L=0,Y($)}a.addEventListener("click",V),d.addEventListener("click",()=>{Y($,!0)}),g.forEach(U=>{U.addEventListener("click",()=>{const E=U.dataset.category;Rt(E)})}),C(I),V(),Rt("all")});
