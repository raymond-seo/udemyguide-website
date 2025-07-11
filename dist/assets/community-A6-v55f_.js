/* empty css              */(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const Ol=()=>{};var no={};/**
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
 */const da=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Ll=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],c=n[e++],u=n[e++],d=((s&7)<<18|(o&63)<<12|(c&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(d>>10)),t[r++]=String.fromCharCode(56320+(d&1023))}else{const o=n[e++],c=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|c&63)}}return t.join("")},fa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],c=s+1<n.length,u=c?n[s+1]:0,d=s+2<n.length,f=d?n[s+2]:0,v=o>>2,T=(o&3)<<4|u>>4;let S=(u&15)<<2|f>>6,C=f&63;d||(C=64,c||(S=64)),r.push(e[v],e[T],e[S],e[C])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(da(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Ll(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],u=s<n.length?e[n.charAt(s)]:0;++s;const f=s<n.length?e[n.charAt(s)]:64;++s;const T=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||u==null||f==null||T==null)throw new Fl;const S=o<<2|u>>4;if(r.push(S),f!==64){const C=u<<4&240|f>>2;if(r.push(C),T!==64){const P=f<<6&192|T;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Fl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bl=function(n){const t=da(n);return fa.encodeByteArray(t,!0)},Yn=function(n){return Bl(n).replace(/\./g,"")},jl=function(n){try{return fa.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Ul(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $l=()=>Ul().__FIREBASE_DEFAULTS__,ql=()=>{if(typeof process>"u"||typeof no>"u")return;const n=no.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Hl=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&jl(n[1]);return t&&JSON.parse(t)},wi=()=>{try{return Ol()||$l()||ql()||Hl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Gl=n=>{var t,e;return(e=(t=wi())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},zl=n=>{const t=Gl(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},pa=()=>{var n;return(n=wi())===null||n===void 0?void 0:n.config};/**
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
 */class Wl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Ti(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Kl(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Ql(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Yn(JSON.stringify(e)),Yn(JSON.stringify(c)),""].join(".")}const tn={};function Xl(){const n={prod:[],emulator:[]};for(const t of Object.keys(tn))tn[t]?n.emulator.push(t):n.prod.push(t);return n}function Jl(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let ro=!1;function Yl(n,t){if(typeof window>"u"||typeof document>"u"||!Ti(window.location.host)||tn[n]===t||tn[n]||ro)return;tn[n]=t;function e(S){return`__firebase__banner__${S}`}const r="__firebase__banner",o=Xl().prod.length>0;function c(){const S=document.getElementById(r);S&&S.remove()}function u(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function d(S,C){S.setAttribute("width","24"),S.setAttribute("id",C),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function f(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{ro=!0,c()},S}function v(S,C){S.setAttribute("id",C),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function T(){const S=Jl(r),C=e("text"),P=document.getElementById(C)||document.createElement("span"),N=e("learnmore"),k=document.getElementById(N)||document.createElement("a"),H=e("preprendIcon"),L=document.getElementById(H)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const q=S.element;u(q),v(k,N);const Z=f();d(L,H),q.append(L,P,k,Z),document.body.appendChild(q)}o?(P.innerText="Preview backend disconnected.",L.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
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
 */function Zl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tu(){var n;const t=(n=wi())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function eu(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function nu(){return!tu()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ma(){try{return typeof indexedDB=="object"}catch{return!1}}function ga(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}function ru(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const iu="FirebaseError";class te extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=iu,Object.setPrototypeOf(this,te.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fr.prototype.create)}}class fr{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],c=o?su(o,r):"Error",u=`${this.serviceName}: ${c} (${s}).`;return new te(s,u,r)}}function su(n,t){return n.replace(ou,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const ou=/\{\$([^}]+)}/g;function cn(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],c=t[s];if(io(o)&&io(c)){if(!cn(o,c))return!1}else if(o!==c)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function io(n){return n!==null&&typeof n=="object"}/**
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
 */const au=1e3,cu=2,lu=4*60*60*1e3,uu=.5;function so(n,t=au,e=cu){const r=t*Math.pow(e,n),s=Math.round(uu*r*(Math.random()-.5)*2);return Math.min(lu,r+s)}/**
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
 */function he(n){return n&&n._delegate?n._delegate:n}class jt{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const oe="[DEFAULT]";/**
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
 */class hu{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Wl;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t?.identifier),s=(e=t?.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(fu(t))try{this.getOrInitializeService({instanceIdentifier:oe})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=oe){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=oe){return this.instances.has(t)}getOptions(t=oe){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,c]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&c.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const c=this.instances.get(s);return c&&t(c,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:du(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=oe){return this.component?this.component.multipleInstances?t:oe:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function du(n){return n===oe?void 0:n}function fu(n){return n.instantiationMode==="EAGER"}/**
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
 */class pu{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new hu(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var j;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(j||(j={}));const mu={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},gu=j.INFO,yu={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},_u=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=yu[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ai{constructor(t){this.name=t,this._logLevel=gu,this._logHandler=_u,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in j))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?mu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...t),this._logHandler(this,j.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...t),this._logHandler(this,j.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,j.INFO,...t),this._logHandler(this,j.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,j.WARN,...t),this._logHandler(this,j.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...t),this._logHandler(this,j.ERROR,...t)}}const Eu=(n,t)=>t.some(e=>n instanceof e);let oo,ao;function vu(){return oo||(oo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Iu(){return ao||(ao=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ya=new WeakMap,ii=new WeakMap,_a=new WeakMap,Kr=new WeakMap,Si=new WeakMap;function wu(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",c)},o=()=>{e(zt(n.result)),s()},c=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",c)});return t.then(e=>{e instanceof IDBCursor&&ya.set(e,n)}).catch(()=>{}),Si.set(t,n),t}function Tu(n){if(ii.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",c),n.removeEventListener("abort",c)},o=()=>{e(),s()},c=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",c),n.addEventListener("abort",c)});ii.set(n,t)}let si={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return ii.get(n);if(t==="objectStoreNames")return n.objectStoreNames||_a.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return zt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Au(n){si=n(si)}function Su(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Qr(this),t,...e);return _a.set(r,t.sort?t.sort():[t]),zt(r)}:Iu().includes(n)?function(...t){return n.apply(Qr(this),t),zt(ya.get(this))}:function(...t){return zt(n.apply(Qr(this),t))}}function xu(n){return typeof n=="function"?Su(n):(n instanceof IDBTransaction&&Tu(n),Eu(n,vu())?new Proxy(n,si):n)}function zt(n){if(n instanceof IDBRequest)return wu(n);if(Kr.has(n))return Kr.get(n);const t=xu(n);return t!==n&&(Kr.set(n,t),Si.set(t,n)),t}const Qr=n=>Si.get(n);function Ea(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const c=indexedDB.open(n,t),u=zt(c);return r&&c.addEventListener("upgradeneeded",d=>{r(zt(c.result),d.oldVersion,d.newVersion,zt(c.transaction),d)}),e&&c.addEventListener("blocked",d=>e(d.oldVersion,d.newVersion,d)),u.then(d=>{o&&d.addEventListener("close",()=>o()),s&&d.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),u}const bu=["get","getKey","getAll","getAllKeys","count"],Ru=["put","add","delete","clear"],Xr=new Map;function co(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Xr.get(t))return Xr.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=Ru.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||bu.includes(e)))return;const o=async function(c,...u){const d=this.transaction(c,s?"readwrite":"readonly");let f=d.store;return r&&(f=f.index(u.shift())),(await Promise.all([f[e](...u),s&&d.done]))[0]};return Xr.set(t,o),o}Au(n=>({...n,get:(t,e,r)=>co(t,e)||n.get(t,e,r),has:(t,e)=>!!co(t,e)||n.has(t,e)}));/**
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
 */class Cu{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Pu(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Pu(n){const t=n.getComponent();return t?.type==="VERSION"}const oi="@firebase/app",lo="0.13.2";/**
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
 */const Ut=new Ai("@firebase/app"),Du="@firebase/app-compat",Vu="@firebase/analytics-compat",ku="@firebase/analytics",Nu="@firebase/app-check-compat",Mu="@firebase/app-check",Ou="@firebase/auth",Lu="@firebase/auth-compat",Fu="@firebase/database",Bu="@firebase/data-connect",ju="@firebase/database-compat",Uu="@firebase/functions",$u="@firebase/functions-compat",qu="@firebase/installations",Hu="@firebase/installations-compat",Gu="@firebase/messaging",zu="@firebase/messaging-compat",Wu="@firebase/performance",Ku="@firebase/performance-compat",Qu="@firebase/remote-config",Xu="@firebase/remote-config-compat",Ju="@firebase/storage",Yu="@firebase/storage-compat",Zu="@firebase/firestore",th="@firebase/ai",eh="@firebase/firestore-compat",nh="firebase",rh="11.10.0";/**
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
 */const ai="[DEFAULT]",ih={[oi]:"fire-core",[Du]:"fire-core-compat",[ku]:"fire-analytics",[Vu]:"fire-analytics-compat",[Mu]:"fire-app-check",[Nu]:"fire-app-check-compat",[Ou]:"fire-auth",[Lu]:"fire-auth-compat",[Fu]:"fire-rtdb",[Bu]:"fire-data-connect",[ju]:"fire-rtdb-compat",[Uu]:"fire-fn",[$u]:"fire-fn-compat",[qu]:"fire-iid",[Hu]:"fire-iid-compat",[Gu]:"fire-fcm",[zu]:"fire-fcm-compat",[Wu]:"fire-perf",[Ku]:"fire-perf-compat",[Qu]:"fire-rc",[Xu]:"fire-rc-compat",[Ju]:"fire-gcs",[Yu]:"fire-gcs-compat",[Zu]:"fire-fst",[eh]:"fire-fst-compat",[th]:"fire-vertex","fire-js":"fire-js",[nh]:"fire-js-all"};/**
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
 */const Zn=new Map,sh=new Map,ci=new Map;function uo(n,t){try{n.container.addComponent(t)}catch(e){Ut.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Qt(n){const t=n.name;if(ci.has(t))return Ut.debug(`There were multiple attempts to register component ${t}.`),!1;ci.set(t,n);for(const e of Zn.values())uo(e,n);for(const e of sh.values())uo(e,n);return!0}function mn(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function oh(n){return n==null?!1:n.settings!==void 0}/**
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
 */const ah={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wt=new fr("app","Firebase",ah);/**
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
 */class ch{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Wt.create("app-deleted",{appName:this._name})}}/**
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
 */const lh=rh;function va(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ai,automaticDataCollectionEnabled:!0},t),s=r.name;if(typeof s!="string"||!s)throw Wt.create("bad-app-name",{appName:String(s)});if(e||(e=pa()),!e)throw Wt.create("no-options");const o=Zn.get(s);if(o){if(cn(e,o.options)&&cn(r,o.config))return o;throw Wt.create("duplicate-app",{appName:s})}const c=new pu(s);for(const d of ci.values())c.addComponent(d);const u=new ch(e,r,c);return Zn.set(s,u),u}function Ia(n=ai){const t=Zn.get(n);if(!t&&n===ai&&pa())return va();if(!t)throw Wt.create("no-app",{appName:n});return t}function Vt(n,t,e){var r;let s=(r=ih[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),c=t.match(/\s|\//);if(o||c){const u=[`Unable to register library "${s}" with version "${t}":`];o&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&c&&u.push("and"),c&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ut.warn(u.join(" "));return}Qt(new jt(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const uh="firebase-heartbeat-database",hh=1,ln="firebase-heartbeat-store";let Jr=null;function wa(){return Jr||(Jr=Ea(uh,hh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(ln)}catch(e){console.warn(e)}}}}).catch(n=>{throw Wt.create("idb-open",{originalErrorMessage:n.message})})),Jr}async function dh(n){try{const e=(await wa()).transaction(ln),r=await e.objectStore(ln).get(Ta(n));return await e.done,r}catch(t){if(t instanceof te)Ut.warn(t.message);else{const e=Wt.create("idb-get",{originalErrorMessage:t?.message});Ut.warn(e.message)}}}async function ho(n,t){try{const r=(await wa()).transaction(ln,"readwrite");await r.objectStore(ln).put(t,Ta(n)),await r.done}catch(e){if(e instanceof te)Ut.warn(e.message);else{const r=Wt.create("idb-set",{originalErrorMessage:e?.message});Ut.warn(r.message)}}}function Ta(n){return`${n.name}!${n.options.appId}`}/**
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
 */const fh=1024,ph=30;class mh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new yh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=fo();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(c=>c.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>ph){const c=_h(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ut.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=fo(),{heartbeatsToSend:r,unsentEntries:s}=gh(this._heartbeatsCache.heartbeats),o=Yn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Ut.warn(e),""}}}function fo(){return new Date().toISOString().substring(0,10)}function gh(n,t=fh){const e=[];let r=n.slice();for(const s of n){const o=e.find(c=>c.agent===s.agent);if(o){if(o.dates.push(s.date),po(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),po(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class yh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ma()?ga().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await dh(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return ho(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return ho(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function po(n){return Yn(JSON.stringify({version:2,heartbeats:n})).length}function _h(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function Eh(n){Qt(new jt("platform-logger",t=>new Cu(t),"PRIVATE")),Qt(new jt("heartbeat",t=>new mh(t),"PRIVATE")),Vt(oi,lo,n),Vt(oi,lo,"esm2017"),Vt("fire-js","")}Eh("");var vh="firebase",Ih="11.10.0";/**
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
 */Vt(vh,Ih,"app");const Aa="@firebase/installations",xi="0.6.18";/**
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
 */const Sa=1e4,xa=`w:${xi}`,ba="FIS_v2",wh="https://firebaseinstallations.googleapis.com/v1",Th=60*60*1e3,Ah="installations",Sh="Installations";/**
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
 */const xh={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},de=new fr(Ah,Sh,xh);function Ra(n){return n instanceof te&&n.code.includes("request-failed")}/**
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
 */function Ca({projectId:n}){return`${wh}/projects/${n}/installations`}function Pa(n){return{token:n.token,requestStatus:2,expiresIn:Rh(n.expiresIn),creationTime:Date.now()}}async function Da(n,t){const r=(await t.json()).error;return de.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Va({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function bh(n,{refreshToken:t}){const e=Va(n);return e.append("Authorization",Ch(t)),e}async function ka(n){const t=await n();return t.status>=500&&t.status<600?n():t}function Rh(n){return Number(n.replace("s","000"))}function Ch(n){return`${ba} ${n}`}/**
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
 */async function Ph({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const r=Ca(n),s=Va(n),o=t.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const c={fid:e,authVersion:ba,appId:n.appId,sdkVersion:xa},u={method:"POST",headers:s,body:JSON.stringify(c)},d=await ka(()=>fetch(r,u));if(d.ok){const f=await d.json();return{fid:f.fid||e,registrationStatus:2,refreshToken:f.refreshToken,authToken:Pa(f.authToken)}}else throw await Da("Create Installation",d)}/**
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
 */function Na(n){return new Promise(t=>{setTimeout(t,n)})}/**
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
 */function Dh(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Vh=/^[cdef][\w-]{21}$/,li="";function kh(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=Nh(n);return Vh.test(e)?e:li}catch{return li}}function Nh(n){return Dh(n).substr(0,22)}/**
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
 */function pr(n){return`${n.appName}!${n.appId}`}/**
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
 */const Ma=new Map;function Oa(n,t){const e=pr(n);La(e,t),Mh(e,t)}function La(n,t){const e=Ma.get(n);if(e)for(const r of e)r(t)}function Mh(n,t){const e=Oh();e&&e.postMessage({key:n,fid:t}),Lh()}let ae=null;function Oh(){return!ae&&"BroadcastChannel"in self&&(ae=new BroadcastChannel("[Firebase] FID Change"),ae.onmessage=n=>{La(n.data.key,n.data.fid)}),ae}function Lh(){Ma.size===0&&ae&&(ae.close(),ae=null)}/**
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
 */const Fh="firebase-installations-database",Bh=1,fe="firebase-installations-store";let Yr=null;function bi(){return Yr||(Yr=Ea(Fh,Bh,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(fe)}}})),Yr}async function tr(n,t){const e=pr(n),s=(await bi()).transaction(fe,"readwrite"),o=s.objectStore(fe),c=await o.get(e);return await o.put(t,e),await s.done,(!c||c.fid!==t.fid)&&Oa(n,t.fid),t}async function Fa(n){const t=pr(n),r=(await bi()).transaction(fe,"readwrite");await r.objectStore(fe).delete(t),await r.done}async function mr(n,t){const e=pr(n),s=(await bi()).transaction(fe,"readwrite"),o=s.objectStore(fe),c=await o.get(e),u=t(c);return u===void 0?await o.delete(e):await o.put(u,e),await s.done,u&&(!c||c.fid!==u.fid)&&Oa(n,u.fid),u}/**
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
 */async function Ri(n){let t;const e=await mr(n.appConfig,r=>{const s=jh(r),o=Uh(n,s);return t=o.registrationPromise,o.installationEntry});return e.fid===li?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function jh(n){const t=n||{fid:kh(),registrationStatus:0};return Ba(t)}function Uh(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(de.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=$h(n,e);return{installationEntry:e,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:qh(n)}:{installationEntry:t}}async function $h(n,t){try{const e=await Ph(n,t);return tr(n.appConfig,e)}catch(e){throw Ra(e)&&e.customData.serverCode===409?await Fa(n.appConfig):await tr(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function qh(n){let t=await mo(n.appConfig);for(;t.registrationStatus===1;)await Na(100),t=await mo(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:r}=await Ri(n);return r||e}return t}function mo(n){return mr(n,t=>{if(!t)throw de.create("installation-not-found");return Ba(t)})}function Ba(n){return Hh(n)?{fid:n.fid,registrationStatus:0}:n}function Hh(n){return n.registrationStatus===1&&n.registrationTime+Sa<Date.now()}/**
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
 */async function Gh({appConfig:n,heartbeatServiceProvider:t},e){const r=zh(n,e),s=bh(n,e),o=t.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const c={installation:{sdkVersion:xa,appId:n.appId}},u={method:"POST",headers:s,body:JSON.stringify(c)},d=await ka(()=>fetch(r,u));if(d.ok){const f=await d.json();return Pa(f)}else throw await Da("Generate Auth Token",d)}function zh(n,{fid:t}){return`${Ca(n)}/${t}/authTokens:generate`}/**
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
 */async function Ci(n,t=!1){let e;const r=await mr(n.appConfig,o=>{if(!ja(o))throw de.create("not-registered");const c=o.authToken;if(!t&&Qh(c))return o;if(c.requestStatus===1)return e=Wh(n,t),o;{if(!navigator.onLine)throw de.create("app-offline");const u=Jh(o);return e=Kh(n,u),u}});return e?await e:r.authToken}async function Wh(n,t){let e=await go(n.appConfig);for(;e.authToken.requestStatus===1;)await Na(100),e=await go(n.appConfig);const r=e.authToken;return r.requestStatus===0?Ci(n,t):r}function go(n){return mr(n,t=>{if(!ja(t))throw de.create("not-registered");const e=t.authToken;return Yh(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Kh(n,t){try{const e=await Gh(n,t),r=Object.assign(Object.assign({},t),{authToken:e});return await tr(n.appConfig,r),e}catch(e){if(Ra(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await Fa(n.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await tr(n.appConfig,r)}throw e}}function ja(n){return n!==void 0&&n.registrationStatus===2}function Qh(n){return n.requestStatus===2&&!Xh(n)}function Xh(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+Th}function Jh(n){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:t})}function Yh(n){return n.requestStatus===1&&n.requestTime+Sa<Date.now()}/**
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
 */async function Zh(n){const t=n,{installationEntry:e,registrationPromise:r}=await Ri(t);return r?r.catch(console.error):Ci(t).catch(console.error),e.fid}/**
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
 */async function td(n,t=!1){const e=n;return await ed(e),(await Ci(e,t)).token}async function ed(n){const{registrationPromise:t}=await Ri(n);t&&await t}/**
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
 */function nd(n){if(!n||!n.options)throw Zr("App Configuration");if(!n.name)throw Zr("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw Zr(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Zr(n){return de.create("missing-app-config-values",{valueName:n})}/**
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
 */const Ua="installations",rd="installations-internal",id=n=>{const t=n.getProvider("app").getImmediate(),e=nd(t),r=mn(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},sd=n=>{const t=n.getProvider("app").getImmediate(),e=mn(t,Ua).getImmediate();return{getId:()=>Zh(e),getToken:s=>td(e,s)}};function od(){Qt(new jt(Ua,id,"PUBLIC")),Qt(new jt(rd,sd,"PRIVATE"))}od();Vt(Aa,xi);Vt(Aa,xi,"esm2017");/**
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
 */const er="analytics",ad="firebase_id",cd="origin",ld=60*1e3,ud="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Pi="https://www.googletagmanager.com/gtag/js";/**
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
 */const vt=new Ai("@firebase/analytics");/**
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
 */const hd={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},At=new fr("analytics","Analytics",hd);/**
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
 */function dd(n){if(!n.startsWith(Pi)){const t=At.create("invalid-gtag-resource",{gtagURL:n});return vt.warn(t.message),""}return n}function $a(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function fd(n,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(n,t)),e}function pd(n,t){const e=fd("firebase-js-sdk-policy",{createScriptURL:dd}),r=document.createElement("script"),s=`${Pi}?l=${n}&id=${t}`;r.src=e?e?.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function md(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function gd(n,t,e,r,s,o){const c=r[s];try{if(c)await t[c];else{const d=(await $a(e)).find(f=>f.measurementId===s);d&&await t[d.appId]}}catch(u){vt.error(u)}n("config",s,o)}async function yd(n,t,e,r,s){try{let o=[];if(s&&s.send_to){let c=s.send_to;Array.isArray(c)||(c=[c]);const u=await $a(e);for(const d of c){const f=u.find(T=>T.measurementId===d),v=f&&t[f.appId];if(v)o.push(v);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),n("event",r,s||{})}catch(o){vt.error(o)}}function _d(n,t,e,r){async function s(o,...c){try{if(o==="event"){const[u,d]=c;await yd(n,t,e,u,d)}else if(o==="config"){const[u,d]=c;await gd(n,t,e,r,u,d)}else if(o==="consent"){const[u,d]=c;n("consent",u,d)}else if(o==="get"){const[u,d,f]=c;n("get",u,d,f)}else if(o==="set"){const[u]=c;n("set",u)}else n(o,...c)}catch(u){vt.error(u)}}return s}function Ed(n,t,e,r,s){let o=function(...c){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=_d(o,n,t,e),{gtagCore:o,wrappedGtag:window[s]}}function vd(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Pi)&&e.src.includes(n))return e;return null}/**
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
 */const Id=30,wd=1e3;class Td{constructor(t={},e=wd){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const qa=new Td;function Ad(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Sd(n){var t;const{appId:e,apiKey:r}=n,s={method:"GET",headers:Ad(r)},o=ud.replace("{app-id}",e),c=await fetch(o,s);if(c.status!==200&&c.status!==304){let u="";try{const d=await c.json();!((t=d.error)===null||t===void 0)&&t.message&&(u=d.error.message)}catch{}throw At.create("config-fetch-failed",{httpStatus:c.status,responseMessage:u})}return c.json()}async function xd(n,t=qa,e){const{appId:r,apiKey:s,measurementId:o}=n.options;if(!r)throw At.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:r};throw At.create("no-api-key")}const c=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new Cd;return setTimeout(async()=>{u.abort()},ld),Ha({appId:r,apiKey:s,measurementId:o},c,u,t)}async function Ha(n,{throttleEndTimeMillis:t,backoffCount:e},r,s=qa){var o;const{appId:c,measurementId:u}=n;try{await bd(r,t)}catch(d){if(u)return vt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${d?.message}]`),{appId:c,measurementId:u};throw d}try{const d=await Sd(n);return s.deleteThrottleMetadata(c),d}catch(d){const f=d;if(!Rd(f)){if(s.deleteThrottleMetadata(c),u)return vt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${f?.message}]`),{appId:c,measurementId:u};throw d}const v=Number((o=f?.customData)===null||o===void 0?void 0:o.httpStatus)===503?so(e,s.intervalMillis,Id):so(e,s.intervalMillis),T={throttleEndTimeMillis:Date.now()+v,backoffCount:e+1};return s.setThrottleMetadata(c,T),vt.debug(`Calling attemptFetch again in ${v} millis`),Ha(n,T,r,s)}}function bd(n,t){return new Promise((e,r)=>{const s=Math.max(t-Date.now(),0),o=setTimeout(e,s);n.addEventListener(()=>{clearTimeout(o),r(At.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Rd(n){if(!(n instanceof te)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class Cd{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Pd(n,t,e,r,s){if(s&&s.global){n("event",e,r);return}else{const o=await t,c=Object.assign(Object.assign({},r),{send_to:o});n("event",e,c)}}/**
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
 */async function Dd(){if(ma())try{await ga()}catch(n){return vt.warn(At.create("indexeddb-unavailable",{errorInfo:n?.toString()}).message),!1}else return vt.warn(At.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Vd(n,t,e,r,s,o,c){var u;const d=xd(n);d.then(C=>{e[C.measurementId]=C.appId,n.options.measurementId&&C.measurementId!==n.options.measurementId&&vt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${C.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(C=>vt.error(C)),t.push(d);const f=Dd().then(C=>{if(C)return r.getId()}),[v,T]=await Promise.all([d,f]);vd(o)||pd(o,v.measurementId),s("js",new Date);const S=(u=c?.config)!==null&&u!==void 0?u:{};return S[cd]="firebase",S.update=!0,T!=null&&(S[ad]=T),s("config",v.measurementId,S),v.measurementId}/**
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
 */class kd{constructor(t){this.app=t}_delete(){return delete en[this.app.options.appId],Promise.resolve()}}let en={},yo=[];const _o={};let ti="dataLayer",Nd="gtag",Eo,Ga,vo=!1;function Md(){const n=[];if(eu()&&n.push("This is a browser extension environment."),ru()||n.push("Cookies are not available."),n.length>0){const t=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),e=At.create("invalid-analytics-context",{errorInfo:t});vt.warn(e.message)}}function Od(n,t,e){Md();const r=n.options.appId;if(!r)throw At.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)vt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw At.create("no-api-key");if(en[r]!=null)throw At.create("already-exists",{id:r});if(!vo){md(ti);const{wrappedGtag:o,gtagCore:c}=Ed(en,yo,_o,ti,Nd);Ga=o,Eo=c,vo=!0}return en[r]=Vd(n,yo,_o,t,Eo,ti,e),new kd(n)}function Ld(n=Ia()){n=he(n);const t=mn(n,er);return t.isInitialized()?t.getImmediate():Fd(n)}function Fd(n,t={}){const e=mn(n,er);if(e.isInitialized()){const s=e.getImmediate();if(cn(t,e.getOptions()))return s;throw At.create("already-initialized")}return e.initialize({options:t})}function Bd(n,t,e,r){n=he(n),Pd(Ga,en[n.app.options.appId],t,e,r).catch(s=>vt.error(s))}const Io="@firebase/analytics",wo="0.10.17";function jd(){Qt(new jt(er,(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return Od(r,s,e)},"PUBLIC")),Qt(new jt("analytics-internal",n,"PRIVATE")),Vt(Io,wo),Vt(Io,wo,"esm2017");function n(t){try{const e=t.getProvider(er).getImmediate();return{logEvent:(r,s,o)=>Bd(e,r,s,o)}}catch(e){throw At.create("interop-component-reg-failed",{reason:e})}}}jd();var To=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Di;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(y,p){function g(){}g.prototype=p.prototype,y.D=p.prototype,y.prototype=new g,y.prototype.constructor=y,y.C=function(_,E,I){for(var m=Array(arguments.length-2),wt=2;wt<arguments.length;wt++)m[wt-2]=arguments[wt];return p.prototype[E].apply(_,m)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(y,p,g){g||(g=0);var _=Array(16);if(typeof p=="string")for(var E=0;16>E;++E)_[E]=p.charCodeAt(g++)|p.charCodeAt(g++)<<8|p.charCodeAt(g++)<<16|p.charCodeAt(g++)<<24;else for(E=0;16>E;++E)_[E]=p[g++]|p[g++]<<8|p[g++]<<16|p[g++]<<24;p=y.g[0],g=y.g[1],E=y.g[2];var I=y.g[3],m=p+(I^g&(E^I))+_[0]+3614090360&4294967295;p=g+(m<<7&4294967295|m>>>25),m=I+(E^p&(g^E))+_[1]+3905402710&4294967295,I=p+(m<<12&4294967295|m>>>20),m=E+(g^I&(p^g))+_[2]+606105819&4294967295,E=I+(m<<17&4294967295|m>>>15),m=g+(p^E&(I^p))+_[3]+3250441966&4294967295,g=E+(m<<22&4294967295|m>>>10),m=p+(I^g&(E^I))+_[4]+4118548399&4294967295,p=g+(m<<7&4294967295|m>>>25),m=I+(E^p&(g^E))+_[5]+1200080426&4294967295,I=p+(m<<12&4294967295|m>>>20),m=E+(g^I&(p^g))+_[6]+2821735955&4294967295,E=I+(m<<17&4294967295|m>>>15),m=g+(p^E&(I^p))+_[7]+4249261313&4294967295,g=E+(m<<22&4294967295|m>>>10),m=p+(I^g&(E^I))+_[8]+1770035416&4294967295,p=g+(m<<7&4294967295|m>>>25),m=I+(E^p&(g^E))+_[9]+2336552879&4294967295,I=p+(m<<12&4294967295|m>>>20),m=E+(g^I&(p^g))+_[10]+4294925233&4294967295,E=I+(m<<17&4294967295|m>>>15),m=g+(p^E&(I^p))+_[11]+2304563134&4294967295,g=E+(m<<22&4294967295|m>>>10),m=p+(I^g&(E^I))+_[12]+1804603682&4294967295,p=g+(m<<7&4294967295|m>>>25),m=I+(E^p&(g^E))+_[13]+4254626195&4294967295,I=p+(m<<12&4294967295|m>>>20),m=E+(g^I&(p^g))+_[14]+2792965006&4294967295,E=I+(m<<17&4294967295|m>>>15),m=g+(p^E&(I^p))+_[15]+1236535329&4294967295,g=E+(m<<22&4294967295|m>>>10),m=p+(E^I&(g^E))+_[1]+4129170786&4294967295,p=g+(m<<5&4294967295|m>>>27),m=I+(g^E&(p^g))+_[6]+3225465664&4294967295,I=p+(m<<9&4294967295|m>>>23),m=E+(p^g&(I^p))+_[11]+643717713&4294967295,E=I+(m<<14&4294967295|m>>>18),m=g+(I^p&(E^I))+_[0]+3921069994&4294967295,g=E+(m<<20&4294967295|m>>>12),m=p+(E^I&(g^E))+_[5]+3593408605&4294967295,p=g+(m<<5&4294967295|m>>>27),m=I+(g^E&(p^g))+_[10]+38016083&4294967295,I=p+(m<<9&4294967295|m>>>23),m=E+(p^g&(I^p))+_[15]+3634488961&4294967295,E=I+(m<<14&4294967295|m>>>18),m=g+(I^p&(E^I))+_[4]+3889429448&4294967295,g=E+(m<<20&4294967295|m>>>12),m=p+(E^I&(g^E))+_[9]+568446438&4294967295,p=g+(m<<5&4294967295|m>>>27),m=I+(g^E&(p^g))+_[14]+3275163606&4294967295,I=p+(m<<9&4294967295|m>>>23),m=E+(p^g&(I^p))+_[3]+4107603335&4294967295,E=I+(m<<14&4294967295|m>>>18),m=g+(I^p&(E^I))+_[8]+1163531501&4294967295,g=E+(m<<20&4294967295|m>>>12),m=p+(E^I&(g^E))+_[13]+2850285829&4294967295,p=g+(m<<5&4294967295|m>>>27),m=I+(g^E&(p^g))+_[2]+4243563512&4294967295,I=p+(m<<9&4294967295|m>>>23),m=E+(p^g&(I^p))+_[7]+1735328473&4294967295,E=I+(m<<14&4294967295|m>>>18),m=g+(I^p&(E^I))+_[12]+2368359562&4294967295,g=E+(m<<20&4294967295|m>>>12),m=p+(g^E^I)+_[5]+4294588738&4294967295,p=g+(m<<4&4294967295|m>>>28),m=I+(p^g^E)+_[8]+2272392833&4294967295,I=p+(m<<11&4294967295|m>>>21),m=E+(I^p^g)+_[11]+1839030562&4294967295,E=I+(m<<16&4294967295|m>>>16),m=g+(E^I^p)+_[14]+4259657740&4294967295,g=E+(m<<23&4294967295|m>>>9),m=p+(g^E^I)+_[1]+2763975236&4294967295,p=g+(m<<4&4294967295|m>>>28),m=I+(p^g^E)+_[4]+1272893353&4294967295,I=p+(m<<11&4294967295|m>>>21),m=E+(I^p^g)+_[7]+4139469664&4294967295,E=I+(m<<16&4294967295|m>>>16),m=g+(E^I^p)+_[10]+3200236656&4294967295,g=E+(m<<23&4294967295|m>>>9),m=p+(g^E^I)+_[13]+681279174&4294967295,p=g+(m<<4&4294967295|m>>>28),m=I+(p^g^E)+_[0]+3936430074&4294967295,I=p+(m<<11&4294967295|m>>>21),m=E+(I^p^g)+_[3]+3572445317&4294967295,E=I+(m<<16&4294967295|m>>>16),m=g+(E^I^p)+_[6]+76029189&4294967295,g=E+(m<<23&4294967295|m>>>9),m=p+(g^E^I)+_[9]+3654602809&4294967295,p=g+(m<<4&4294967295|m>>>28),m=I+(p^g^E)+_[12]+3873151461&4294967295,I=p+(m<<11&4294967295|m>>>21),m=E+(I^p^g)+_[15]+530742520&4294967295,E=I+(m<<16&4294967295|m>>>16),m=g+(E^I^p)+_[2]+3299628645&4294967295,g=E+(m<<23&4294967295|m>>>9),m=p+(E^(g|~I))+_[0]+4096336452&4294967295,p=g+(m<<6&4294967295|m>>>26),m=I+(g^(p|~E))+_[7]+1126891415&4294967295,I=p+(m<<10&4294967295|m>>>22),m=E+(p^(I|~g))+_[14]+2878612391&4294967295,E=I+(m<<15&4294967295|m>>>17),m=g+(I^(E|~p))+_[5]+4237533241&4294967295,g=E+(m<<21&4294967295|m>>>11),m=p+(E^(g|~I))+_[12]+1700485571&4294967295,p=g+(m<<6&4294967295|m>>>26),m=I+(g^(p|~E))+_[3]+2399980690&4294967295,I=p+(m<<10&4294967295|m>>>22),m=E+(p^(I|~g))+_[10]+4293915773&4294967295,E=I+(m<<15&4294967295|m>>>17),m=g+(I^(E|~p))+_[1]+2240044497&4294967295,g=E+(m<<21&4294967295|m>>>11),m=p+(E^(g|~I))+_[8]+1873313359&4294967295,p=g+(m<<6&4294967295|m>>>26),m=I+(g^(p|~E))+_[15]+4264355552&4294967295,I=p+(m<<10&4294967295|m>>>22),m=E+(p^(I|~g))+_[6]+2734768916&4294967295,E=I+(m<<15&4294967295|m>>>17),m=g+(I^(E|~p))+_[13]+1309151649&4294967295,g=E+(m<<21&4294967295|m>>>11),m=p+(E^(g|~I))+_[4]+4149444226&4294967295,p=g+(m<<6&4294967295|m>>>26),m=I+(g^(p|~E))+_[11]+3174756917&4294967295,I=p+(m<<10&4294967295|m>>>22),m=E+(p^(I|~g))+_[2]+718787259&4294967295,E=I+(m<<15&4294967295|m>>>17),m=g+(I^(E|~p))+_[9]+3951481745&4294967295,y.g[0]=y.g[0]+p&4294967295,y.g[1]=y.g[1]+(E+(m<<21&4294967295|m>>>11))&4294967295,y.g[2]=y.g[2]+E&4294967295,y.g[3]=y.g[3]+I&4294967295}r.prototype.u=function(y,p){p===void 0&&(p=y.length);for(var g=p-this.blockSize,_=this.B,E=this.h,I=0;I<p;){if(E==0)for(;I<=g;)s(this,y,I),I+=this.blockSize;if(typeof y=="string"){for(;I<p;)if(_[E++]=y.charCodeAt(I++),E==this.blockSize){s(this,_),E=0;break}}else for(;I<p;)if(_[E++]=y[I++],E==this.blockSize){s(this,_),E=0;break}}this.h=E,this.o+=p},r.prototype.v=function(){var y=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);y[0]=128;for(var p=1;p<y.length-8;++p)y[p]=0;var g=8*this.o;for(p=y.length-8;p<y.length;++p)y[p]=g&255,g/=256;for(this.u(y),y=Array(16),p=g=0;4>p;++p)for(var _=0;32>_;_+=8)y[g++]=this.g[p]>>>_&255;return y};function o(y,p){var g=u;return Object.prototype.hasOwnProperty.call(g,y)?g[y]:g[y]=p(y)}function c(y,p){this.h=p;for(var g=[],_=!0,E=y.length-1;0<=E;E--){var I=y[E]|0;_&&I==p||(g[E]=I,_=!1)}this.g=g}var u={};function d(y){return-128<=y&&128>y?o(y,function(p){return new c([p|0],0>p?-1:0)}):new c([y|0],0>y?-1:0)}function f(y){if(isNaN(y)||!isFinite(y))return T;if(0>y)return k(f(-y));for(var p=[],g=1,_=0;y>=g;_++)p[_]=y/g|0,g*=4294967296;return new c(p,0)}function v(y,p){if(y.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(y.charAt(0)=="-")return k(v(y.substring(1),p));if(0<=y.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=f(Math.pow(p,8)),_=T,E=0;E<y.length;E+=8){var I=Math.min(8,y.length-E),m=parseInt(y.substring(E,E+I),p);8>I?(I=f(Math.pow(p,I)),_=_.j(I).add(f(m))):(_=_.j(g),_=_.add(f(m)))}return _}var T=d(0),S=d(1),C=d(16777216);n=c.prototype,n.m=function(){if(N(this))return-k(this).m();for(var y=0,p=1,g=0;g<this.g.length;g++){var _=this.i(g);y+=(0<=_?_:4294967296+_)*p,p*=4294967296}return y},n.toString=function(y){if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(P(this))return"0";if(N(this))return"-"+k(this).toString(y);for(var p=f(Math.pow(y,6)),g=this,_="";;){var E=Z(g,p).g;g=H(g,E.j(p));var I=((0<g.g.length?g.g[0]:g.h)>>>0).toString(y);if(g=E,P(g))return I+_;for(;6>I.length;)I="0"+I;_=I+_}},n.i=function(y){return 0>y?0:y<this.g.length?this.g[y]:this.h};function P(y){if(y.h!=0)return!1;for(var p=0;p<y.g.length;p++)if(y.g[p]!=0)return!1;return!0}function N(y){return y.h==-1}n.l=function(y){return y=H(this,y),N(y)?-1:P(y)?0:1};function k(y){for(var p=y.g.length,g=[],_=0;_<p;_++)g[_]=~y.g[_];return new c(g,~y.h).add(S)}n.abs=function(){return N(this)?k(this):this},n.add=function(y){for(var p=Math.max(this.g.length,y.g.length),g=[],_=0,E=0;E<=p;E++){var I=_+(this.i(E)&65535)+(y.i(E)&65535),m=(I>>>16)+(this.i(E)>>>16)+(y.i(E)>>>16);_=m>>>16,I&=65535,m&=65535,g[E]=m<<16|I}return new c(g,g[g.length-1]&-2147483648?-1:0)};function H(y,p){return y.add(k(p))}n.j=function(y){if(P(this)||P(y))return T;if(N(this))return N(y)?k(this).j(k(y)):k(k(this).j(y));if(N(y))return k(this.j(k(y)));if(0>this.l(C)&&0>y.l(C))return f(this.m()*y.m());for(var p=this.g.length+y.g.length,g=[],_=0;_<2*p;_++)g[_]=0;for(_=0;_<this.g.length;_++)for(var E=0;E<y.g.length;E++){var I=this.i(_)>>>16,m=this.i(_)&65535,wt=y.i(E)>>>16,ee=y.i(E)&65535;g[2*_+2*E]+=m*ee,L(g,2*_+2*E),g[2*_+2*E+1]+=I*ee,L(g,2*_+2*E+1),g[2*_+2*E+1]+=m*wt,L(g,2*_+2*E+1),g[2*_+2*E+2]+=I*wt,L(g,2*_+2*E+2)}for(_=0;_<p;_++)g[_]=g[2*_+1]<<16|g[2*_];for(_=p;_<2*p;_++)g[_]=0;return new c(g,0)};function L(y,p){for(;(y[p]&65535)!=y[p];)y[p+1]+=y[p]>>>16,y[p]&=65535,p++}function q(y,p){this.g=y,this.h=p}function Z(y,p){if(P(p))throw Error("division by zero");if(P(y))return new q(T,T);if(N(y))return p=Z(k(y),p),new q(k(p.g),k(p.h));if(N(p))return p=Z(y,k(p)),new q(k(p.g),p.h);if(30<y.g.length){if(N(y)||N(p))throw Error("slowDivide_ only works with positive integers.");for(var g=S,_=p;0>=_.l(y);)g=Pt(g),_=Pt(_);var E=F(g,1),I=F(_,1);for(_=F(_,2),g=F(g,2);!P(_);){var m=I.add(_);0>=m.l(y)&&(E=E.add(g),I=m),_=F(_,1),g=F(g,1)}return p=H(y,E.j(p)),new q(E,p)}for(E=T;0<=y.l(p);){for(g=Math.max(1,Math.floor(y.m()/p.m())),_=Math.ceil(Math.log(g)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),I=f(g),m=I.j(p);N(m)||0<m.l(y);)g-=_,I=f(g),m=I.j(p);P(I)&&(I=S),E=E.add(I),y=H(y,m)}return new q(E,y)}n.A=function(y){return Z(this,y).h},n.and=function(y){for(var p=Math.max(this.g.length,y.g.length),g=[],_=0;_<p;_++)g[_]=this.i(_)&y.i(_);return new c(g,this.h&y.h)},n.or=function(y){for(var p=Math.max(this.g.length,y.g.length),g=[],_=0;_<p;_++)g[_]=this.i(_)|y.i(_);return new c(g,this.h|y.h)},n.xor=function(y){for(var p=Math.max(this.g.length,y.g.length),g=[],_=0;_<p;_++)g[_]=this.i(_)^y.i(_);return new c(g,this.h^y.h)};function Pt(y){for(var p=y.g.length+1,g=[],_=0;_<p;_++)g[_]=y.i(_)<<1|y.i(_-1)>>>31;return new c(g,y.h)}function F(y,p){var g=p>>5;p%=32;for(var _=y.g.length-g,E=[],I=0;I<_;I++)E[I]=0<p?y.i(I+g)>>>p|y.i(I+g+1)<<32-p:y.i(I+g);return new c(E,y.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=f,c.fromString=v,Di=c}).apply(typeof To<"u"?To:typeof self<"u"?self:typeof window<"u"?window:{});var Un=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var za,Ze,Wa,Wn,ui,Ka,Qa,Xa;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,a,l){return i==Array.prototype||i==Object.prototype||(i[a]=l.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Un=="object"&&Un];for(var a=0;a<i.length;++a){var l=i[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function s(i,a){if(a)t:{var l=r;i=i.split(".");for(var h=0;h<i.length-1;h++){var w=i[h];if(!(w in l))break t;l=l[w]}i=i[i.length-1],h=l[i],a=a(h),a!=h&&a!=null&&t(l,i,{configurable:!0,writable:!0,value:a})}}function o(i,a){i instanceof String&&(i+="");var l=0,h=!1,w={next:function(){if(!h&&l<i.length){var A=l++;return{value:a(A,i[A]),done:!1}}return h=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}s("Array.prototype.values",function(i){return i||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},u=this||self;function d(i){var a=typeof i;return a=a!="object"?a:i?Array.isArray(i)?"array":a:"null",a=="array"||a=="object"&&typeof i.length=="number"}function f(i){var a=typeof i;return a=="object"&&i!=null||a=="function"}function v(i,a,l){return i.call.apply(i.bind,arguments)}function T(i,a,l){if(!i)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,h),i.apply(a,w)}}return function(){return i.apply(a,arguments)}}function S(i,a,l){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:T,S.apply(null,arguments)}function C(i,a){var l=Array.prototype.slice.call(arguments,1);return function(){var h=l.slice();return h.push.apply(h,arguments),i.apply(this,h)}}function P(i,a){function l(){}l.prototype=a.prototype,i.aa=a.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(h,w,A){for(var R=Array(arguments.length-2),G=2;G<arguments.length;G++)R[G-2]=arguments[G];return a.prototype[w].apply(h,R)}}function N(i){const a=i.length;if(0<a){const l=Array(a);for(let h=0;h<a;h++)l[h]=i[h];return l}return[]}function k(i,a){for(let l=1;l<arguments.length;l++){const h=arguments[l];if(d(h)){const w=i.length||0,A=h.length||0;i.length=w+A;for(let R=0;R<A;R++)i[w+R]=h[R]}else i.push(h)}}class H{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function L(i){return/^[\s\xa0]*$/.test(i)}function q(){var i=u.navigator;return i&&(i=i.userAgent)?i:""}function Z(i){return Z[" "](i),i}Z[" "]=function(){};var Pt=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function F(i,a,l){for(const h in i)a.call(l,i[h],h,i)}function y(i,a){for(const l in i)a.call(void 0,i[l],l,i)}function p(i){const a={};for(const l in i)a[l]=i[l];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(i,a){let l,h;for(let w=1;w<arguments.length;w++){h=arguments[w];for(l in h)i[l]=h[l];for(let A=0;A<g.length;A++)l=g[A],Object.prototype.hasOwnProperty.call(h,l)&&(i[l]=h[l])}}function E(i){var a=1;i=i.split(":");const l=[];for(;0<a&&i.length;)l.push(i.shift()),a--;return i.length&&l.push(i.join(":")),l}function I(i){u.setTimeout(()=>{throw i},0)}function m(){var i=Ar;let a=null;return i.g&&(a=i.g,i.g=i.g.next,i.g||(i.h=null),a.next=null),a}class wt{constructor(){this.h=this.g=null}add(a,l){const h=ee.get();h.set(a,l),this.h?this.h.next=h:this.g=h,this.h=h}}var ee=new H(()=>new el,i=>i.reset());class el{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Oe,Le=!1,Ar=new wt,ns=()=>{const i=u.Promise.resolve(void 0);Oe=()=>{i.then(nl)}};var nl=()=>{for(var i;i=m();){try{i.h.call(i.g)}catch(l){I(l)}var a=ee;a.j(i),100>a.h&&(a.h++,i.next=a.g,a.g=i)}Le=!1};function $t(){this.s=this.s,this.C=this.C}$t.prototype.s=!1,$t.prototype.ma=function(){this.s||(this.s=!0,this.N())},$t.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function lt(i,a){this.type=i,this.g=this.target=a,this.defaultPrevented=!1}lt.prototype.h=function(){this.defaultPrevented=!0};var rl=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var i=!1,a=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};u.addEventListener("test",l,a),u.removeEventListener("test",l,a)}catch{}return i}();function Fe(i,a){if(lt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,h=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=a,a=i.relatedTarget){if(Pt){t:{try{Z(a.nodeName);var w=!0;break t}catch{}w=!1}w||(a=null)}}else l=="mouseover"?a=i.fromElement:l=="mouseout"&&(a=i.toElement);this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:il[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Fe.aa.h.call(this)}}P(Fe,lt);var il={2:"touch",3:"pen",4:"mouse"};Fe.prototype.h=function(){Fe.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var wn="closure_listenable_"+(1e6*Math.random()|0),sl=0;function ol(i,a,l,h,w){this.listener=i,this.proxy=null,this.src=a,this.type=l,this.capture=!!h,this.ha=w,this.key=++sl,this.da=this.fa=!1}function Tn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function An(i){this.src=i,this.g={},this.h=0}An.prototype.add=function(i,a,l,h,w){var A=i.toString();i=this.g[A],i||(i=this.g[A]=[],this.h++);var R=xr(i,a,h,w);return-1<R?(a=i[R],l||(a.fa=!1)):(a=new ol(a,this.src,A,!!h,w),a.fa=l,i.push(a)),a};function Sr(i,a){var l=a.type;if(l in i.g){var h=i.g[l],w=Array.prototype.indexOf.call(h,a,void 0),A;(A=0<=w)&&Array.prototype.splice.call(h,w,1),A&&(Tn(a),i.g[l].length==0&&(delete i.g[l],i.h--))}}function xr(i,a,l,h){for(var w=0;w<i.length;++w){var A=i[w];if(!A.da&&A.listener==a&&A.capture==!!l&&A.ha==h)return w}return-1}var br="closure_lm_"+(1e6*Math.random()|0),Rr={};function rs(i,a,l,h,w){if(Array.isArray(a)){for(var A=0;A<a.length;A++)rs(i,a[A],l,h,w);return null}return l=os(l),i&&i[wn]?i.K(a,l,f(h)?!!h.capture:!1,w):al(i,a,l,!1,h,w)}function al(i,a,l,h,w,A){if(!a)throw Error("Invalid event type");var R=f(w)?!!w.capture:!!w,G=Pr(i);if(G||(i[br]=G=new An(i)),l=G.add(a,l,h,R,A),l.proxy)return l;if(h=cl(),l.proxy=h,h.src=i,h.listener=l,i.addEventListener)rl||(w=R),w===void 0&&(w=!1),i.addEventListener(a.toString(),h,w);else if(i.attachEvent)i.attachEvent(ss(a.toString()),h);else if(i.addListener&&i.removeListener)i.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return l}function cl(){function i(l){return a.call(i.src,i.listener,l)}const a=ll;return i}function is(i,a,l,h,w){if(Array.isArray(a))for(var A=0;A<a.length;A++)is(i,a[A],l,h,w);else h=f(h)?!!h.capture:!!h,l=os(l),i&&i[wn]?(i=i.i,a=String(a).toString(),a in i.g&&(A=i.g[a],l=xr(A,l,h,w),-1<l&&(Tn(A[l]),Array.prototype.splice.call(A,l,1),A.length==0&&(delete i.g[a],i.h--)))):i&&(i=Pr(i))&&(a=i.g[a.toString()],i=-1,a&&(i=xr(a,l,h,w)),(l=-1<i?a[i]:null)&&Cr(l))}function Cr(i){if(typeof i!="number"&&i&&!i.da){var a=i.src;if(a&&a[wn])Sr(a.i,i);else{var l=i.type,h=i.proxy;a.removeEventListener?a.removeEventListener(l,h,i.capture):a.detachEvent?a.detachEvent(ss(l),h):a.addListener&&a.removeListener&&a.removeListener(h),(l=Pr(a))?(Sr(l,i),l.h==0&&(l.src=null,a[br]=null)):Tn(i)}}}function ss(i){return i in Rr?Rr[i]:Rr[i]="on"+i}function ll(i,a){if(i.da)i=!0;else{a=new Fe(a,this);var l=i.listener,h=i.ha||i.src;i.fa&&Cr(i),i=l.call(h,a)}return i}function Pr(i){return i=i[br],i instanceof An?i:null}var Dr="__closure_events_fn_"+(1e9*Math.random()>>>0);function os(i){return typeof i=="function"?i:(i[Dr]||(i[Dr]=function(a){return i.handleEvent(a)}),i[Dr])}function ut(){$t.call(this),this.i=new An(this),this.M=this,this.F=null}P(ut,$t),ut.prototype[wn]=!0,ut.prototype.removeEventListener=function(i,a,l,h){is(this,i,a,l,h)};function yt(i,a){var l,h=i.F;if(h)for(l=[];h;h=h.F)l.push(h);if(i=i.M,h=a.type||a,typeof a=="string")a=new lt(a,i);else if(a instanceof lt)a.target=a.target||i;else{var w=a;a=new lt(h,i),_(a,w)}if(w=!0,l)for(var A=l.length-1;0<=A;A--){var R=a.g=l[A];w=Sn(R,h,!0,a)&&w}if(R=a.g=i,w=Sn(R,h,!0,a)&&w,w=Sn(R,h,!1,a)&&w,l)for(A=0;A<l.length;A++)R=a.g=l[A],w=Sn(R,h,!1,a)&&w}ut.prototype.N=function(){if(ut.aa.N.call(this),this.i){var i=this.i,a;for(a in i.g){for(var l=i.g[a],h=0;h<l.length;h++)Tn(l[h]);delete i.g[a],i.h--}}this.F=null},ut.prototype.K=function(i,a,l,h){return this.i.add(String(i),a,!1,l,h)},ut.prototype.L=function(i,a,l,h){return this.i.add(String(i),a,!0,l,h)};function Sn(i,a,l,h){if(a=i.i.g[String(a)],!a)return!0;a=a.concat();for(var w=!0,A=0;A<a.length;++A){var R=a[A];if(R&&!R.da&&R.capture==l){var G=R.listener,it=R.ha||R.src;R.fa&&Sr(i.i,R),w=G.call(it,h)!==!1&&w}}return w&&!h.defaultPrevented}function as(i,a,l){if(typeof i=="function")l&&(i=S(i,l));else if(i&&typeof i.handleEvent=="function")i=S(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:u.setTimeout(i,a||0)}function cs(i){i.g=as(()=>{i.g=null,i.i&&(i.i=!1,cs(i))},i.l);const a=i.h;i.h=null,i.m.apply(null,a)}class ul extends $t{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:cs(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Be(i){$t.call(this),this.h=i,this.g={}}P(Be,$t);var ls=[];function us(i){F(i.g,function(a,l){this.g.hasOwnProperty(l)&&Cr(a)},i),i.g={}}Be.prototype.N=function(){Be.aa.N.call(this),us(this)},Be.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vr=u.JSON.stringify,hl=u.JSON.parse,dl=class{stringify(i){return u.JSON.stringify(i,void 0)}parse(i){return u.JSON.parse(i,void 0)}};function kr(){}kr.prototype.h=null;function hs(i){return i.h||(i.h=i.i())}function ds(){}var je={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Nr(){lt.call(this,"d")}P(Nr,lt);function Mr(){lt.call(this,"c")}P(Mr,lt);var ne={},fs=null;function xn(){return fs=fs||new ut}ne.La="serverreachability";function ps(i){lt.call(this,ne.La,i)}P(ps,lt);function Ue(i){const a=xn();yt(a,new ps(a))}ne.STAT_EVENT="statevent";function ms(i,a){lt.call(this,ne.STAT_EVENT,i),this.stat=a}P(ms,lt);function _t(i){const a=xn();yt(a,new ms(a,i))}ne.Ma="timingevent";function gs(i,a){lt.call(this,ne.Ma,i),this.size=a}P(gs,lt);function $e(i,a){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){i()},a)}function qe(){this.g=!0}qe.prototype.xa=function(){this.g=!1};function fl(i,a,l,h,w,A){i.info(function(){if(i.g)if(A)for(var R="",G=A.split("&"),it=0;it<G.length;it++){var $=G[it].split("=");if(1<$.length){var ht=$[0];$=$[1];var dt=ht.split("_");R=2<=dt.length&&dt[1]=="type"?R+(ht+"="+$+"&"):R+(ht+"=redacted&")}}else R=null;else R=A;return"XMLHTTP REQ ("+h+") [attempt "+w+"]: "+a+`
`+l+`
`+R})}function pl(i,a,l,h,w,A,R){i.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+w+"]: "+a+`
`+l+`
`+A+" "+R})}function ve(i,a,l,h){i.info(function(){return"XMLHTTP TEXT ("+a+"): "+gl(i,l)+(h?" "+h:"")})}function ml(i,a){i.info(function(){return"TIMEOUT: "+a})}qe.prototype.info=function(){};function gl(i,a){if(!i.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var h=l[i];if(!(2>h.length)){var w=h[1];if(Array.isArray(w)&&!(1>w.length)){var A=w[0];if(A!="noop"&&A!="stop"&&A!="close")for(var R=1;R<w.length;R++)w[R]=""}}}}return Vr(l)}catch{return a}}var bn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ys={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Or;function Rn(){}P(Rn,kr),Rn.prototype.g=function(){return new XMLHttpRequest},Rn.prototype.i=function(){return{}},Or=new Rn;function qt(i,a,l,h){this.j=i,this.i=a,this.l=l,this.R=h||1,this.U=new Be(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new _s}function _s(){this.i=null,this.g="",this.h=!1}var Es={},Lr={};function Fr(i,a,l){i.L=1,i.v=Vn(Mt(a)),i.m=l,i.P=!0,vs(i,null)}function vs(i,a){i.F=Date.now(),Cn(i),i.A=Mt(i.v);var l=i.A,h=i.R;Array.isArray(h)||(h=[String(h)]),Ns(l.i,"t",h),i.C=0,l=i.j.J,i.h=new _s,i.g=Ys(i.j,l?a:null,!i.m),0<i.O&&(i.M=new ul(S(i.Y,i,i.g),i.O)),a=i.U,l=i.g,h=i.ca;var w="readystatechange";Array.isArray(w)||(w&&(ls[0]=w.toString()),w=ls);for(var A=0;A<w.length;A++){var R=rs(l,w[A],h||a.handleEvent,!1,a.h||a);if(!R)break;a.g[R.key]=R}a=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,a)):(i.u="GET",i.g.ea(i.A,i.u,null,a)),Ue(),fl(i.i,i.u,i.A,i.l,i.R,i.m)}qt.prototype.ca=function(i){i=i.target;const a=this.M;a&&Ot(i)==3?a.j():this.Y(i)},qt.prototype.Y=function(i){try{if(i==this.g)t:{const dt=Ot(this.g);var a=this.g.Ba();const Te=this.g.Z();if(!(3>dt)&&(dt!=3||this.g&&(this.h.h||this.g.oa()||Us(this.g)))){this.J||dt!=4||a==7||(a==8||0>=Te?Ue(3):Ue(2)),Br(this);var l=this.g.Z();this.X=l;e:if(Is(this)){var h=Us(this.g);i="";var w=h.length,A=Ot(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){re(this),He(this);var R="";break e}this.h.i=new u.TextDecoder}for(a=0;a<w;a++)this.h.h=!0,i+=this.h.i.decode(h[a],{stream:!(A&&a==w-1)});h.length=0,this.h.g+=i,this.C=0,R=this.h.g}else R=this.g.oa();if(this.o=l==200,pl(this.i,this.u,this.A,this.l,this.R,dt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var G,it=this.g;if((G=it.g?it.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(G)){var $=G;break e}}$=null}if(l=$)ve(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,jr(this,l);else{this.o=!1,this.s=3,_t(12),re(this),He(this);break t}}if(this.P){l=!0;let St;for(;!this.J&&this.C<R.length;)if(St=yl(this,R),St==Lr){dt==4&&(this.s=4,_t(14),l=!1),ve(this.i,this.l,null,"[Incomplete Response]");break}else if(St==Es){this.s=4,_t(15),ve(this.i,this.l,R,"[Invalid Chunk]"),l=!1;break}else ve(this.i,this.l,St,null),jr(this,St);if(Is(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dt!=4||R.length!=0||this.h.h||(this.s=1,_t(16),l=!1),this.o=this.o&&l,!l)ve(this.i,this.l,R,"[Invalid Chunked Response]"),re(this),He(this);else if(0<R.length&&!this.W){this.W=!0;var ht=this.j;ht.g==this&&ht.ba&&!ht.M&&(ht.j.info("Great, no buffering proxy detected. Bytes received: "+R.length),zr(ht),ht.M=!0,_t(11))}}else ve(this.i,this.l,R,null),jr(this,R);dt==4&&re(this),this.o&&!this.J&&(dt==4?Ks(this.j,this):(this.o=!1,Cn(this)))}else Nl(this.g),l==400&&0<R.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),re(this),He(this)}}}catch{}finally{}};function Is(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function yl(i,a){var l=i.C,h=a.indexOf(`
`,l);return h==-1?Lr:(l=Number(a.substring(l,h)),isNaN(l)?Es:(h+=1,h+l>a.length?Lr:(a=a.slice(h,h+l),i.C=h+l,a)))}qt.prototype.cancel=function(){this.J=!0,re(this)};function Cn(i){i.S=Date.now()+i.I,ws(i,i.I)}function ws(i,a){if(i.B!=null)throw Error("WatchDog timer not null");i.B=$e(S(i.ba,i),a)}function Br(i){i.B&&(u.clearTimeout(i.B),i.B=null)}qt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(ml(this.i,this.A),this.L!=2&&(Ue(),_t(17)),re(this),this.s=2,He(this)):ws(this,this.S-i)};function He(i){i.j.G==0||i.J||Ks(i.j,i)}function re(i){Br(i);var a=i.M;a&&typeof a.ma=="function"&&a.ma(),i.M=null,us(i.U),i.g&&(a=i.g,i.g=null,a.abort(),a.ma())}function jr(i,a){try{var l=i.j;if(l.G!=0&&(l.g==i||Ur(l.h,i))){if(!i.K&&Ur(l.h,i)&&l.G==3){try{var h=l.Da.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var w=h;if(w[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)Fn(l),On(l);else break t;Gr(l),_t(18)}}else l.za=w[1],0<l.za-l.T&&37500>w[2]&&l.F&&l.v==0&&!l.C&&(l.C=$e(S(l.Za,l),6e3));if(1>=Ss(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else se(l,11)}else if((i.K||l.g==i)&&Fn(l),!L(a))for(w=l.Da.g.parse(a),a=0;a<w.length;a++){let $=w[a];if(l.T=$[0],$=$[1],l.G==2)if($[0]=="c"){l.K=$[1],l.ia=$[2];const ht=$[3];ht!=null&&(l.la=ht,l.j.info("VER="+l.la));const dt=$[4];dt!=null&&(l.Aa=dt,l.j.info("SVER="+l.Aa));const Te=$[5];Te!=null&&typeof Te=="number"&&0<Te&&(h=1.5*Te,l.L=h,l.j.info("backChannelRequestTimeoutMs_="+h)),h=l;const St=i.g;if(St){const jn=St.g?St.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(jn){var A=h.h;A.g||jn.indexOf("spdy")==-1&&jn.indexOf("quic")==-1&&jn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&($r(A,A.h),A.h=null))}if(h.D){const Wr=St.g?St.g.getResponseHeader("X-HTTP-Session-Id"):null;Wr&&(h.ya=Wr,W(h.I,h.D,Wr))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),h=l;var R=i;if(h.qa=Js(h,h.J?h.ia:null,h.W),R.K){xs(h.h,R);var G=R,it=h.L;it&&(G.I=it),G.B&&(Br(G),Cn(G)),h.g=R}else zs(h);0<l.i.length&&Ln(l)}else $[0]!="stop"&&$[0]!="close"||se(l,7);else l.G==3&&($[0]=="stop"||$[0]=="close"?$[0]=="stop"?se(l,7):Hr(l):$[0]!="noop"&&l.l&&l.l.ta($),l.v=0)}}Ue(4)}catch{}}var _l=class{constructor(i,a){this.g=i,this.map=a}};function Ts(i){this.l=i||10,u.PerformanceNavigationTiming?(i=u.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function As(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Ss(i){return i.h?1:i.g?i.g.size:0}function Ur(i,a){return i.h?i.h==a:i.g?i.g.has(a):!1}function $r(i,a){i.g?i.g.add(a):i.h=a}function xs(i,a){i.h&&i.h==a?i.h=null:i.g&&i.g.has(a)&&i.g.delete(a)}Ts.prototype.cancel=function(){if(this.i=bs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function bs(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let a=i.i;for(const l of i.g.values())a=a.concat(l.D);return a}return N(i.i)}function El(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(d(i)){for(var a=[],l=i.length,h=0;h<l;h++)a.push(i[h]);return a}a=[],l=0;for(h in i)a[l++]=i[h];return a}function vl(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(d(i)||typeof i=="string"){var a=[];i=i.length;for(var l=0;l<i;l++)a.push(l);return a}a=[],l=0;for(const h in i)a[l++]=h;return a}}}function Rs(i,a){if(i.forEach&&typeof i.forEach=="function")i.forEach(a,void 0);else if(d(i)||typeof i=="string")Array.prototype.forEach.call(i,a,void 0);else for(var l=vl(i),h=El(i),w=h.length,A=0;A<w;A++)a.call(void 0,h[A],l&&l[A],i)}var Cs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Il(i,a){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var h=i[l].indexOf("="),w=null;if(0<=h){var A=i[l].substring(0,h);w=i[l].substring(h+1)}else A=i[l];a(A,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function ie(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof ie){this.h=i.h,Pn(this,i.j),this.o=i.o,this.g=i.g,Dn(this,i.s),this.l=i.l;var a=i.i,l=new We;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),Ps(this,l),this.m=i.m}else i&&(a=String(i).match(Cs))?(this.h=!1,Pn(this,a[1]||"",!0),this.o=Ge(a[2]||""),this.g=Ge(a[3]||"",!0),Dn(this,a[4]),this.l=Ge(a[5]||"",!0),Ps(this,a[6]||"",!0),this.m=Ge(a[7]||"")):(this.h=!1,this.i=new We(null,this.h))}ie.prototype.toString=function(){var i=[],a=this.j;a&&i.push(ze(a,Ds,!0),":");var l=this.g;return(l||a=="file")&&(i.push("//"),(a=this.o)&&i.push(ze(a,Ds,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(ze(l,l.charAt(0)=="/"?Al:Tl,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",ze(l,xl)),i.join("")};function Mt(i){return new ie(i)}function Pn(i,a,l){i.j=l?Ge(a,!0):a,i.j&&(i.j=i.j.replace(/:$/,""))}function Dn(i,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);i.s=a}else i.s=null}function Ps(i,a,l){a instanceof We?(i.i=a,bl(i.i,i.h)):(l||(a=ze(a,Sl)),i.i=new We(a,i.h))}function W(i,a,l){i.i.set(a,l)}function Vn(i){return W(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Ge(i,a){return i?a?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function ze(i,a,l){return typeof i=="string"?(i=encodeURI(i).replace(a,wl),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function wl(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Ds=/[#\/\?@]/g,Tl=/[#\?:]/g,Al=/[#\?]/g,Sl=/[#\?@]/g,xl=/#/g;function We(i,a){this.h=this.g=null,this.i=i||null,this.j=!!a}function Ht(i){i.g||(i.g=new Map,i.h=0,i.i&&Il(i.i,function(a,l){i.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}n=We.prototype,n.add=function(i,a){Ht(this),this.i=null,i=Ie(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(a),this.h+=1,this};function Vs(i,a){Ht(i),a=Ie(i,a),i.g.has(a)&&(i.i=null,i.h-=i.g.get(a).length,i.g.delete(a))}function ks(i,a){return Ht(i),a=Ie(i,a),i.g.has(a)}n.forEach=function(i,a){Ht(this),this.g.forEach(function(l,h){l.forEach(function(w){i.call(a,w,h,this)},this)},this)},n.na=function(){Ht(this);const i=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let h=0;h<a.length;h++){const w=i[h];for(let A=0;A<w.length;A++)l.push(a[h])}return l},n.V=function(i){Ht(this);let a=[];if(typeof i=="string")ks(this,i)&&(a=a.concat(this.g.get(Ie(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)a=a.concat(i[l])}return a},n.set=function(i,a){return Ht(this),this.i=null,i=Ie(this,i),ks(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[a]),this.h+=1,this},n.get=function(i,a){return i?(i=this.V(i),0<i.length?String(i[0]):a):a};function Ns(i,a,l){Vs(i,a),0<l.length&&(i.i=null,i.g.set(Ie(i,a),N(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var h=a[l];const A=encodeURIComponent(String(h)),R=this.V(h);for(h=0;h<R.length;h++){var w=A;R[h]!==""&&(w+="="+encodeURIComponent(String(R[h]))),i.push(w)}}return this.i=i.join("&")};function Ie(i,a){return a=String(a),i.j&&(a=a.toLowerCase()),a}function bl(i,a){a&&!i.j&&(Ht(i),i.i=null,i.g.forEach(function(l,h){var w=h.toLowerCase();h!=w&&(Vs(this,h),Ns(this,w,l))},i)),i.j=a}function Rl(i,a){const l=new qe;if(u.Image){const h=new Image;h.onload=C(Gt,l,"TestLoadImage: loaded",!0,a,h),h.onerror=C(Gt,l,"TestLoadImage: error",!1,a,h),h.onabort=C(Gt,l,"TestLoadImage: abort",!1,a,h),h.ontimeout=C(Gt,l,"TestLoadImage: timeout",!1,a,h),u.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=i}else a(!1)}function Cl(i,a){const l=new qe,h=new AbortController,w=setTimeout(()=>{h.abort(),Gt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(i,{signal:h.signal}).then(A=>{clearTimeout(w),A.ok?Gt(l,"TestPingServer: ok",!0,a):Gt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(w),Gt(l,"TestPingServer: error",!1,a)})}function Gt(i,a,l,h,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),h(l)}catch{}}function Pl(){this.g=new dl}function Dl(i,a,l){const h=l||"";try{Rs(i,function(w,A){let R=w;f(w)&&(R=Vr(w)),a.push(h+A+"="+encodeURIComponent(R))})}catch(w){throw a.push(h+"type="+encodeURIComponent("_badmap")),w}}function kn(i){this.l=i.Ub||null,this.j=i.eb||!1}P(kn,kr),kn.prototype.g=function(){return new Nn(this.l,this.j)},kn.prototype.i=function(i){return function(){return i}}({});function Nn(i,a){ut.call(this),this.D=i,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Nn,ut),n=Nn.prototype,n.open=function(i,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=a,this.readyState=1,Qe(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(a.body=i),(this.D||u).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ke(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Qe(this)),this.g&&(this.readyState=3,Qe(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ms(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ms(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var a=i.value?i.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!i.done}))&&(this.response=this.responseText+=a)}i.done?Ke(this):Qe(this),this.readyState==3&&Ms(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,Ke(this))},n.Qa=function(i){this.g&&(this.response=i,Ke(this))},n.ga=function(){this.g&&Ke(this)};function Ke(i){i.readyState=4,i.l=null,i.j=null,i.v=null,Qe(i)}n.setRequestHeader=function(i,a){this.u.append(i,a)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=a.next();return i.join(`\r
`)};function Qe(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Nn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Os(i){let a="";return F(i,function(l,h){a+=h,a+=":",a+=l,a+=`\r
`}),a}function qr(i,a,l){t:{for(h in l){var h=!1;break t}h=!0}h||(l=Os(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):W(i,a,l))}function J(i){ut.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(J,ut);var Vl=/^https?$/i,kl=["POST","PUT"];n=J.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,a,l,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);a=a?a.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Or.g(),this.v=this.o?hs(this.o):hs(Or),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(a,String(i),!0),this.B=!1}catch(A){Ls(this,A);return}if(i=l||"",l=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var w in h)l.set(w,h[w]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const A of h.keys())l.set(A,h.get(A));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(l.keys()).find(A=>A.toLowerCase()=="content-type"),w=u.FormData&&i instanceof u.FormData,!(0<=Array.prototype.indexOf.call(kl,a,void 0))||h||w||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,R]of l)this.g.setRequestHeader(A,R);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{js(this),this.u=!0,this.g.send(i),this.u=!1}catch(A){Ls(this,A)}};function Ls(i,a){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=a,i.m=5,Fs(i),Mn(i)}function Fs(i){i.A||(i.A=!0,yt(i,"complete"),yt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,yt(this,"complete"),yt(this,"abort"),Mn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Mn(this,!0)),J.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Bs(this):this.bb())},n.bb=function(){Bs(this)};function Bs(i){if(i.h&&typeof c<"u"&&(!i.v[1]||Ot(i)!=4||i.Z()!=2)){if(i.u&&Ot(i)==4)as(i.Ea,0,i);else if(yt(i,"readystatechange"),Ot(i)==4){i.h=!1;try{const R=i.Z();t:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var h;if(h=R===0){var w=String(i.D).match(Cs)[1]||null;!w&&u.self&&u.self.location&&(w=u.self.location.protocol.slice(0,-1)),h=!Vl.test(w?w.toLowerCase():"")}l=h}if(l)yt(i,"complete"),yt(i,"success");else{i.m=6;try{var A=2<Ot(i)?i.g.statusText:""}catch{A=""}i.l=A+" ["+i.Z()+"]",Fs(i)}}finally{Mn(i)}}}}function Mn(i,a){if(i.g){js(i);const l=i.g,h=i.v[0]?()=>{}:null;i.g=null,i.v=null,a||yt(i,"ready");try{l.onreadystatechange=h}catch{}}}function js(i){i.I&&(u.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Ot(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Ot(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var a=this.g.responseText;return i&&a.indexOf(i)==0&&(a=a.substring(i.length)),hl(a)}};function Us(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Nl(i){const a={};i=(i.g&&2<=Ot(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<i.length;h++){if(L(i[h]))continue;var l=E(i[h]);const w=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const A=a[w]||[];a[w]=A,A.push(l)}y(a,function(h){return h.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xe(i,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||a}function $s(i){this.Aa=0,this.i=[],this.j=new qe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xe("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xe("baseRetryDelayMs",5e3,i),this.cb=Xe("retryDelaySeedMs",1e4,i),this.Wa=Xe("forwardChannelMaxRetries",2,i),this.wa=Xe("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Ts(i&&i.concurrentRequestLimit),this.Da=new Pl,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=$s.prototype,n.la=8,n.G=1,n.connect=function(i,a,l,h){_t(0),this.W=i,this.H=a||{},l&&h!==void 0&&(this.H.OSID=l,this.H.OAID=h),this.F=this.X,this.I=Js(this,null,this.W),Ln(this)};function Hr(i){if(qs(i),i.G==3){var a=i.U++,l=Mt(i.I);if(W(l,"SID",i.K),W(l,"RID",a),W(l,"TYPE","terminate"),Je(i,l),a=new qt(i,i.j,a),a.L=2,a.v=Vn(Mt(l)),l=!1,u.navigator&&u.navigator.sendBeacon)try{l=u.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&u.Image&&(new Image().src=a.v,l=!0),l||(a.g=Ys(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Cn(a)}Xs(i)}function On(i){i.g&&(zr(i),i.g.cancel(),i.g=null)}function qs(i){On(i),i.u&&(u.clearTimeout(i.u),i.u=null),Fn(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&u.clearTimeout(i.s),i.s=null)}function Ln(i){if(!As(i.h)&&!i.s){i.s=!0;var a=i.Ga;Oe||ns(),Le||(Oe(),Le=!0),Ar.add(a,i),i.B=0}}function Ml(i,a){return Ss(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=a.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=$e(S(i.Ga,i,a),Qs(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const w=new qt(this,this.j,i);let A=this.o;if(this.S&&(A?(A=p(A),_(A,this.S)):A=this.S),this.m!==null||this.O||(w.H=A,A=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var h=this.i[l];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=Gs(this,w,a),l=Mt(this.I),W(l,"RID",i),W(l,"CVER",22),this.D&&W(l,"X-HTTP-Session-Id",this.D),Je(this,l),A&&(this.O?a="headers="+encodeURIComponent(String(Os(A)))+"&"+a:this.m&&qr(l,this.m,A)),$r(this.h,w),this.Ua&&W(l,"TYPE","init"),this.P?(W(l,"$req",a),W(l,"SID","null"),w.T=!0,Fr(w,l,null)):Fr(w,l,a),this.G=2}}else this.G==3&&(i?Hs(this,i):this.i.length==0||As(this.h)||Hs(this))};function Hs(i,a){var l;a?l=a.l:l=i.U++;const h=Mt(i.I);W(h,"SID",i.K),W(h,"RID",l),W(h,"AID",i.T),Je(i,h),i.m&&i.o&&qr(h,i.m,i.o),l=new qt(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),a&&(i.i=a.D.concat(i.i)),a=Gs(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),$r(i.h,l),Fr(l,h,a)}function Je(i,a){i.H&&F(i.H,function(l,h){W(a,h,l)}),i.l&&Rs({},function(l,h){W(a,h,l)})}function Gs(i,a,l){l=Math.min(i.i.length,l);var h=i.l?S(i.l.Na,i.l,i):null;t:{var w=i.i;let A=-1;for(;;){const R=["count="+l];A==-1?0<l?(A=w[0].g,R.push("ofs="+A)):A=0:R.push("ofs="+A);let G=!0;for(let it=0;it<l;it++){let $=w[it].g;const ht=w[it].map;if($-=A,0>$)A=Math.max(0,w[it].g-100),G=!1;else try{Dl(ht,R,"req"+$+"_")}catch{h&&h(ht)}}if(G){h=R.join("&");break t}}}return i=i.i.splice(0,l),a.D=i,h}function zs(i){if(!i.g&&!i.u){i.Y=1;var a=i.Fa;Oe||ns(),Le||(Oe(),Le=!0),Ar.add(a,i),i.v=0}}function Gr(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=$e(S(i.Fa,i),Qs(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,Ws(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=$e(S(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),On(this),Ws(this))};function zr(i){i.A!=null&&(u.clearTimeout(i.A),i.A=null)}function Ws(i){i.g=new qt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var a=Mt(i.qa);W(a,"RID","rpc"),W(a,"SID",i.K),W(a,"AID",i.T),W(a,"CI",i.F?"0":"1"),!i.F&&i.ja&&W(a,"TO",i.ja),W(a,"TYPE","xmlhttp"),Je(i,a),i.m&&i.o&&qr(a,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=Vn(Mt(a)),l.m=null,l.P=!0,vs(l,i)}n.Za=function(){this.C!=null&&(this.C=null,On(this),Gr(this),_t(19))};function Fn(i){i.C!=null&&(u.clearTimeout(i.C),i.C=null)}function Ks(i,a){var l=null;if(i.g==a){Fn(i),zr(i),i.g=null;var h=2}else if(Ur(i.h,a))l=a.D,xs(i.h,a),h=1;else return;if(i.G!=0){if(a.o)if(h==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var w=i.B;h=xn(),yt(h,new gs(h,l)),Ln(i)}else zs(i);else if(w=a.s,w==3||w==0&&0<a.X||!(h==1&&Ml(i,a)||h==2&&Gr(i)))switch(l&&0<l.length&&(a=i.h,a.i=a.i.concat(l)),w){case 1:se(i,5);break;case 4:se(i,10);break;case 3:se(i,6);break;default:se(i,2)}}}function Qs(i,a){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*a}function se(i,a){if(i.j.info("Error code "+a),a==2){var l=S(i.fb,i),h=i.Xa;const w=!h;h=new ie(h||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Pn(h,"https"),Vn(h),w?Rl(h.toString(),l):Cl(h.toString(),l)}else _t(2);i.G=0,i.l&&i.l.sa(a),Xs(i),qs(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function Xs(i){if(i.G=0,i.ka=[],i.l){const a=bs(i.h);(a.length!=0||i.i.length!=0)&&(k(i.ka,a),k(i.ka,i.i),i.h.i.length=0,N(i.i),i.i.length=0),i.l.ra()}}function Js(i,a,l){var h=l instanceof ie?Mt(l):new ie(l);if(h.g!="")a&&(h.g=a+"."+h.g),Dn(h,h.s);else{var w=u.location;h=w.protocol,a=a?a+"."+w.hostname:w.hostname,w=+w.port;var A=new ie(null);h&&Pn(A,h),a&&(A.g=a),w&&Dn(A,w),l&&(A.l=l),h=A}return l=i.D,a=i.ya,l&&a&&W(h,l,a),W(h,"VER",i.la),Je(i,h),h}function Ys(i,a,l){if(a&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=i.Ca&&!i.pa?new J(new kn({eb:l})):new J(i.pa),a.Ha(i.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Zs(){}n=Zs.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Bn(){}Bn.prototype.g=function(i,a){return new Tt(i,a)};function Tt(i,a){ut.call(this),this.g=new $s(a),this.l=i,this.h=a&&a.messageUrlParams||null,i=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(i?i["X-WebChannel-Content-Type"]=a.messageContentType:i={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(i?i["X-WebChannel-Client-Profile"]=a.va:i={"X-WebChannel-Client-Profile":a.va}),this.g.S=i,(i=a&&a.Sb)&&!L(i)&&(this.g.m=i),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!L(a)&&(this.g.D=a,i=this.h,i!==null&&a in i&&(i=this.h,a in i&&delete i[a])),this.j=new we(this)}P(Tt,ut),Tt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){Hr(this.g)},Tt.prototype.o=function(i){var a=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=Vr(i),i=l);a.i.push(new _l(a.Ya++,i)),a.G==3&&Ln(a)},Tt.prototype.N=function(){this.g.l=null,delete this.j,Hr(this.g),delete this.g,Tt.aa.N.call(this)};function to(i){Nr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var a=i.__sm__;if(a){t:{for(const l in a){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,a=a!==null&&i in a?a[i]:void 0),this.data=a}else this.data=i}P(to,Nr);function eo(){Mr.call(this),this.status=1}P(eo,Mr);function we(i){this.g=i}P(we,Zs),we.prototype.ua=function(){yt(this.g,"a")},we.prototype.ta=function(i){yt(this.g,new to(i))},we.prototype.sa=function(i){yt(this.g,new eo)},we.prototype.ra=function(){yt(this.g,"b")},Bn.prototype.createWebChannel=Bn.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,Xa=function(){return new Bn},Qa=function(){return xn()},Ka=ne,ui={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},bn.NO_ERROR=0,bn.TIMEOUT=8,bn.HTTP_ERROR=6,Wn=bn,ys.COMPLETE="complete",Wa=ys,ds.EventType=je,je.OPEN="a",je.CLOSE="b",je.ERROR="c",je.MESSAGE="d",ut.prototype.listen=ut.prototype.K,Ze=ds,J.prototype.listenOnce=J.prototype.L,J.prototype.getLastError=J.prototype.Ka,J.prototype.getLastErrorCode=J.prototype.Ba,J.prototype.getStatus=J.prototype.Z,J.prototype.getResponseJson=J.prototype.Oa,J.prototype.getResponseText=J.prototype.oa,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Ha,za=J}).apply(typeof Un<"u"?Un:typeof self<"u"?self:typeof window<"u"?window:{});const Ao="@firebase/firestore",So="4.8.0";/**
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
 */class pt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
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
 */let Ne="11.10.0";/**
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
 */const pe=new Ai("@firebase/firestore");function Ae(){return pe.logLevel}function D(n,...t){if(pe.logLevel<=j.DEBUG){const e=t.map(Vi);pe.debug(`Firestore (${Ne}): ${n}`,...e)}}function me(n,...t){if(pe.logLevel<=j.ERROR){const e=t.map(Vi);pe.error(`Firestore (${Ne}): ${n}`,...e)}}function Re(n,...t){if(pe.logLevel<=j.WARN){const e=t.map(Vi);pe.warn(`Firestore (${Ne}): ${n}`,...e)}}function Vi(n){if(typeof n=="string")return n;try{/**
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
 */function O(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Ja(n,r,e)}function Ja(n,t,e){let r=`FIRESTORE (${Ne}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw me(r),new Error(r)}function Y(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||Ja(t,s,r)}function z(n,t){return n}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends te{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class le{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class Ya{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ud{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(pt.UNAUTHENTICATED))}shutdown(){}}class $d{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class qd{constructor(t){this.t=t,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Y(this.o===void 0,42304);let r=this.i;const s=d=>this.i!==r?(r=this.i,e(d)):Promise.resolve();let o=new le;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new le,t.enqueueRetryable(()=>s(this.currentUser))};const c=()=>{const d=o;t.enqueueRetryable(async()=>{await d.promise,await s(this.currentUser)})},u=d=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(d=>u(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?u(d):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new le)}},0),c()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Y(typeof r.accessToken=="string",31837,{l:r}),new Ya(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Y(t===null||typeof t=="string",2055,{h:t}),new pt(t)}}class Hd{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Gd{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Hd(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xo{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zd{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,oh(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){Y(this.o===void 0,3512);const r=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const c=o.token!==this.m;return this.m=o.token,D("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new xo(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Y(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new xo(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Wd(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */function Kd(){return new TextEncoder}/**
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
 */class ki{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Wd(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function U(n,t){return n<t?-1:n>t?1:0}function hi(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),s=t.codePointAt(e);if(r!==s){if(r<128&&s<128)return U(r,s);{const o=Kd(),c=Qd(o.encode(bo(n,e)),o.encode(bo(t,e)));return c!==0?c:U(r,s)}}e+=r>65535?2:1}return U(n.length,t.length)}function bo(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function Qd(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return U(n[e],t[e]);return U(n.length,t.length)}function Ce(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
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
 */const Ro="__name__";class Dt{constructor(t,e,r){e===void 0?e=0:e>t.length&&O(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&O(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Dt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Dt?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=Dt.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return U(t.length,e.length)}static compareSegments(t,e){const r=Dt.isNumericId(t),s=Dt.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?Dt.extractNumericId(t).compare(Dt.extractNumericId(e)):hi(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Di.fromString(t.substring(4,t.length-2))}}class X extends Dt{construct(t,e,r){return new X(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new V(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new X(e)}static emptyPath(){return new X([])}}const Xd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends Dt{construct(t,e,r){return new at(t,e,r)}static isValidIdentifier(t){return Xd.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ro}static keyField(){return new at([Ro])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new V(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let c=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new V(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[s+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new V(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=d,s+=2}else u==="`"?(c=!c,s++):u!=="."||c?(r+=u,s++):(o(),s++)}if(o(),c)throw new V(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new at(e)}static emptyPath(){return new at([])}}/**
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
 */function Za(n,t,e){if(!e)throw new V(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Jd(n,t,e,r){if(t===!0&&r===!0)throw new V(b.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Co(n){if(!M.isDocumentKey(n))throw new V(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Po(n){if(M.isDocumentKey(n))throw new V(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function tc(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ni(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":O(12329,{type:typeof n})}function ec(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new V(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ni(n);throw new V(b.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */function et(n,t){const e={typeString:n};return t&&(e.value=t),e}function gn(n,t){if(!tc(n))throw new V(b.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const c=n[r];if(s&&typeof c!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&c!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new V(b.INVALID_ARGUMENT,e);return!0}/**
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
 */const Do=-62135596800,Vo=1e6;class Q{static now(){return Q.fromMillis(Date.now())}static fromDate(t){return Q.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Vo);return new Q(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new V(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new V(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Do)throw new V(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new V(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Vo}_compareTo(t){return this.seconds===t.seconds?U(this.nanoseconds,t.nanoseconds):U(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Q._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(gn(t,Q._jsonSchema))return new Q(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Do;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Q._jsonSchemaVersion="firestore/timestamp/1.0",Q._jsonSchema={type:et("string",Q._jsonSchemaVersion),seconds:et("number"),nanoseconds:et("number")};/**
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
 */class K{static fromTimestamp(t){return new K(t)}static min(){return new K(new Q(0,0))}static max(){return new K(new Q(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const un=-1;function Yd(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=K.fromTimestamp(r===1e9?new Q(e+1,0):new Q(e,r));return new Xt(s,M.empty(),t)}function Zd(n){return new Xt(n.readTime,n.key,un)}class Xt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Xt(K.min(),M.empty(),un)}static max(){return new Xt(K.max(),M.empty(),un)}}function tf(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:U(n.largestBatchId,t.largestBatchId))}/**
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
 */const ef="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class nf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Mi(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==ef)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class x{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new x((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof x?e:x.resolve(e)}catch(e){return x.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):x.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):x.reject(e)}static resolve(t){return new x((e,r)=>{e(t)})}static reject(t){return new x((e,r)=>{r(t)})}static waitFor(t){return new x((e,r)=>{let s=0,o=0,c=!1;t.forEach(u=>{++s,u.next(()=>{++o,c&&o===s&&e()},d=>r(d))}),c=!0,o===s&&e()})}static or(t){let e=x.resolve(!1);for(const r of t)e=e.next(s=>s?x.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new x((r,s)=>{const o=t.length,c=new Array(o);let u=0;for(let d=0;d<o;d++){const f=d;e(t[f]).next(v=>{c[f]=v,++u,u===o&&r(c)},v=>s(v))}})}static doWhile(t,e){return new x((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function rf(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function yn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Oi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this._e(r),this.ae=r=>e.writeSequenceNumber(r))}_e(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ae&&this.ae(t),t}}Oi.ue=-1;/**
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
 */const Li=-1;function Fi(n){return n==null}function nr(n){return n===0&&1/n==-1/0}function sf(n){return typeof n=="number"&&Number.isInteger(n)&&!nr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const nc="";function of(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=ko(t)),t=af(n.get(e),t);return ko(t)}function af(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case nc:e+="";break;default:e+=o}}return e}function ko(n){return n+nc+""}/**
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
 */function No(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Me(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function rc(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class It{constructor(t,e){this.comparator=t,this.root=e||st.EMPTY}insert(t,e){return new It(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,st.BLACK,null,null))}remove(t){return new It(this.comparator,this.root.remove(t,this.comparator).copy(null,null,st.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new $n(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new $n(this.root,t,this.comparator,!1)}getReverseIterator(){return new $n(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new $n(this.root,t,this.comparator,!0)}}class $n{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class st{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??st.RED,this.left=s??st.EMPTY,this.right=o??st.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new st(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return st.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw O(43730,{key:this.key,value:this.value});if(this.right.isRed())throw O(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw O(27949);return t+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw O(57766)}get value(){throw O(16141)}get color(){throw O(16727)}get left(){throw O(29726)}get right(){throw O(36894)}copy(t,e,r,s,o){return this}insert(t,e,r){return new st(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ct{constructor(t){this.comparator=t,this.data=new It(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Mo(this.data.getIterator())}getIteratorFrom(t){return new Mo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof ct)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ct(this.comparator);return e.data=t,e}}class Mo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ct{constructor(t){this.fields=t,t.sort(at.comparator)}static empty(){return new Ct([])}unionWith(t){let e=new ct(at.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Ct(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ce(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class cf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class kt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new cf("Invalid base64 string: "+o):o}}(t);return new kt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let c=0;c<s.length;++c)o+=String.fromCharCode(s[c]);return o}(t);return new kt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return U(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const lf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ge(n){if(Y(!!n,39018),typeof n=="string"){let t=0;const e=lf.exec(n);if(Y(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ot(n.seconds),nanos:ot(n.nanos)}}function ot(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Pe(n){return typeof n=="string"?kt.fromBase64String(n):kt.fromUint8Array(n)}/**
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
 */const ic="server_timestamp",sc="__type__",oc="__previous_value__",ac="__local_write_time__";function Bi(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{})[sc])===null||e===void 0?void 0:e.stringValue)===ic}function ji(n){const t=n.mapValue.fields[oc];return Bi(t)?ji(t):t}function rr(n){const t=ge(n.mapValue.fields[ac].timestampValue);return new Q(t.seconds,t.nanos)}/**
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
 */class uf{constructor(t,e,r,s,o,c,u,d,f,v){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=c,this.autoDetectLongPolling=u,this.longPollingOptions=d,this.useFetchStreams=f,this.isUsingEmulator=v}}const ir="(default)";class sr{constructor(t,e){this.projectId=t,this.database=e||ir}static empty(){return new sr("","")}get isDefaultDatabase(){return this.database===ir}isEqual(t){return t instanceof sr&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const cc="__type__",hf="__max__",qn={mapValue:{}},lc="__vector__",di="value";function ye(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Bi(n)?4:ff(n)?9007199254740991:df(n)?10:11:O(28295,{value:n})}function Nt(n,t){if(n===t)return!0;const e=ye(n);if(e!==ye(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return rr(n).isEqual(rr(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const c=ge(s.timestampValue),u=ge(o.timestampValue);return c.seconds===u.seconds&&c.nanos===u.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return Pe(s.bytesValue).isEqual(Pe(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return ot(s.geoPointValue.latitude)===ot(o.geoPointValue.latitude)&&ot(s.geoPointValue.longitude)===ot(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return ot(s.integerValue)===ot(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const c=ot(s.doubleValue),u=ot(o.doubleValue);return c===u?nr(c)===nr(u):isNaN(c)&&isNaN(u)}return!1}(n,t);case 9:return Ce(n.arrayValue.values||[],t.arrayValue.values||[],Nt);case 10:case 11:return function(s,o){const c=s.mapValue.fields||{},u=o.mapValue.fields||{};if(No(c)!==No(u))return!1;for(const d in c)if(c.hasOwnProperty(d)&&(u[d]===void 0||!Nt(c[d],u[d])))return!1;return!0}(n,t);default:return O(52216,{left:n})}}function hn(n,t){return(n.values||[]).find(e=>Nt(e,t))!==void 0}function De(n,t){if(n===t)return 0;const e=ye(n),r=ye(t);if(e!==r)return U(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return U(n.booleanValue,t.booleanValue);case 2:return function(o,c){const u=ot(o.integerValue||o.doubleValue),d=ot(c.integerValue||c.doubleValue);return u<d?-1:u>d?1:u===d?0:isNaN(u)?isNaN(d)?0:-1:1}(n,t);case 3:return Oo(n.timestampValue,t.timestampValue);case 4:return Oo(rr(n),rr(t));case 5:return hi(n.stringValue,t.stringValue);case 6:return function(o,c){const u=Pe(o),d=Pe(c);return u.compareTo(d)}(n.bytesValue,t.bytesValue);case 7:return function(o,c){const u=o.split("/"),d=c.split("/");for(let f=0;f<u.length&&f<d.length;f++){const v=U(u[f],d[f]);if(v!==0)return v}return U(u.length,d.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,c){const u=U(ot(o.latitude),ot(c.latitude));return u!==0?u:U(ot(o.longitude),ot(c.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Lo(n.arrayValue,t.arrayValue);case 10:return function(o,c){var u,d,f,v;const T=o.fields||{},S=c.fields||{},C=(u=T[di])===null||u===void 0?void 0:u.arrayValue,P=(d=S[di])===null||d===void 0?void 0:d.arrayValue,N=U(((f=C?.values)===null||f===void 0?void 0:f.length)||0,((v=P?.values)===null||v===void 0?void 0:v.length)||0);return N!==0?N:Lo(C,P)}(n.mapValue,t.mapValue);case 11:return function(o,c){if(o===qn.mapValue&&c===qn.mapValue)return 0;if(o===qn.mapValue)return 1;if(c===qn.mapValue)return-1;const u=o.fields||{},d=Object.keys(u),f=c.fields||{},v=Object.keys(f);d.sort(),v.sort();for(let T=0;T<d.length&&T<v.length;++T){const S=hi(d[T],v[T]);if(S!==0)return S;const C=De(u[d[T]],f[v[T]]);if(C!==0)return C}return U(d.length,v.length)}(n.mapValue,t.mapValue);default:throw O(23264,{le:e})}}function Oo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return U(n,t);const e=ge(n),r=ge(t),s=U(e.seconds,r.seconds);return s!==0?s:U(e.nanos,r.nanos)}function Lo(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=De(e[s],r[s]);if(o)return o}return U(e.length,r.length)}function Ve(n){return fi(n)}function fi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=ge(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Pe(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return M.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=fi(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const c of r)o?o=!1:s+=",",s+=`${c}:${fi(e.fields[c])}`;return s+"}"}(n.mapValue):O(61005,{value:n})}function Kn(n){switch(ye(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=ji(n);return t?16+Kn(t):16;case 5:return 2*n.stringValue.length;case 6:return Pe(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+Kn(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Me(r.fields,(o,c)=>{s+=o.length+Kn(c)}),s}(n.mapValue);default:throw O(13486,{value:n})}}function pi(n){return!!n&&"integerValue"in n}function Ui(n){return!!n&&"arrayValue"in n}function Qn(n){return!!n&&"mapValue"in n}function df(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{})[cc])===null||e===void 0?void 0:e.stringValue)===lc}function nn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Me(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=nn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=nn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function ff(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===hf}/**
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
 */class bt{constructor(t){this.value=t}static empty(){return new bt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Qn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=nn(e)}setAll(t){let e=at.emptyPath(),r={},s=[];t.forEach((c,u)=>{if(!e.isImmediateParentOf(u)){const d=this.getFieldsMap(e);this.applyChanges(d,r,s),r={},s=[],e=u.popLast()}c?r[u.lastSegment()]=nn(c):s.push(u.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());Qn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Nt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Qn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Me(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new bt(nn(this.value))}}function uc(n){const t=[];return Me(n.fields,(e,r)=>{const s=new at([e]);if(Qn(r)){const o=uc(r.mapValue).fields;if(o.length===0)t.push(s);else for(const c of o)t.push(s.child(c))}else t.push(s)}),new Ct(t)}/**
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
 */class xt{constructor(t,e,r,s,o,c,u){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=c,this.documentState=u}static newInvalidDocument(t){return new xt(t,0,K.min(),K.min(),K.min(),bt.empty(),0)}static newFoundDocument(t,e,r,s){return new xt(t,1,e,K.min(),r,s,0)}static newNoDocument(t,e){return new xt(t,2,e,K.min(),K.min(),bt.empty(),0)}static newUnknownDocument(t,e){return new xt(t,3,e,K.min(),K.min(),bt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof xt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new xt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class or{constructor(t,e){this.position=t,this.inclusive=e}}function Fo(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],c=n.position[s];if(o.field.isKeyField()?r=M.comparator(M.fromName(c.referenceValue),e.key):r=De(c,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Bo(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Nt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class ar{constructor(t,e="asc"){this.field=t,this.dir=e}}function pf(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class hc{}class rt extends hc{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new gf(t,e,r):e==="array-contains"?new Ef(t,r):e==="in"?new vf(t,r):e==="not-in"?new If(t,r):e==="array-contains-any"?new wf(t,r):new rt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new yf(t,r):new _f(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(De(e,this.value)):e!==null&&ye(this.value)===ye(e)&&this.matchesComparison(De(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return O(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Jt extends hc{constructor(t,e){super(),this.filters=t,this.op=e,this.he=null}static create(t,e){return new Jt(t,e)}matches(t){return dc(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function dc(n){return n.op==="and"}function fc(n){return mf(n)&&dc(n)}function mf(n){for(const t of n.filters)if(t instanceof Jt)return!1;return!0}function mi(n){if(n instanceof rt)return n.field.canonicalString()+n.op.toString()+Ve(n.value);if(fc(n))return n.filters.map(t=>mi(t)).join(",");{const t=n.filters.map(e=>mi(e)).join(",");return`${n.op}(${t})`}}function pc(n,t){return n instanceof rt?function(r,s){return s instanceof rt&&r.op===s.op&&r.field.isEqual(s.field)&&Nt(r.value,s.value)}(n,t):n instanceof Jt?function(r,s){return s instanceof Jt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,c,u)=>o&&pc(c,s.filters[u]),!0):!1}(n,t):void O(19439)}function mc(n){return n instanceof rt?function(e){return`${e.field.canonicalString()} ${e.op} ${Ve(e.value)}`}(n):n instanceof Jt?function(e){return e.op.toString()+" {"+e.getFilters().map(mc).join(" ,")+"}"}(n):"Filter"}class gf extends rt{constructor(t,e,r){super(t,e,r),this.key=M.fromName(r.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class yf extends rt{constructor(t,e){super(t,"in",e),this.keys=gc("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class _f extends rt{constructor(t,e){super(t,"not-in",e),this.keys=gc("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function gc(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>M.fromName(r.referenceValue))}class Ef extends rt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ui(e)&&hn(e.arrayValue,this.value)}}class vf extends rt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&hn(this.value.arrayValue,e)}}class If extends rt{constructor(t,e){super(t,"not-in",e)}matches(t){if(hn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!hn(this.value.arrayValue,e)}}class wf extends rt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ui(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>hn(this.value.arrayValue,r))}}/**
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
 */class Tf{constructor(t,e=null,r=[],s=[],o=null,c=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=c,this.endAt=u,this.Pe=null}}function jo(n,t=null,e=[],r=[],s=null,o=null,c=null){return new Tf(n,t,e,r,s,o,c)}function $i(n){const t=z(n);if(t.Pe===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>mi(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Fi(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Ve(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Ve(r)).join(",")),t.Pe=e}return t.Pe}function qi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!pf(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!pc(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Bo(n.startAt,t.startAt)&&Bo(n.endAt,t.endAt)}/**
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
 */class gr{constructor(t,e=null,r=[],s=[],o=null,c="F",u=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=c,this.startAt=u,this.endAt=d,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Af(n,t,e,r,s,o,c,u){return new gr(n,t,e,r,s,o,c,u)}function Sf(n){return new gr(n)}function Uo(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function xf(n){return n.collectionGroup!==null}function rn(n){const t=z(n);if(t.Te===null){t.Te=[];const e=new Set;for(const o of t.explicitOrderBy)t.Te.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(c){let u=new ct(at.comparator);return c.filters.forEach(d=>{d.getFlattenedFilters().forEach(f=>{f.isInequality()&&(u=u.add(f.field))})}),u})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Te.push(new ar(o,r))}),e.has(at.keyField().canonicalString())||t.Te.push(new ar(at.keyField(),r))}return t.Te}function ue(n){const t=z(n);return t.Ie||(t.Ie=bf(t,rn(n))),t.Ie}function bf(n,t){if(n.limitType==="F")return jo(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new ar(s.field,o)});const e=n.endAt?new or(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new or(n.startAt.position,n.startAt.inclusive):null;return jo(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function gi(n,t,e){return new gr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function yc(n,t){return qi(ue(n),ue(t))&&n.limitType===t.limitType}function _c(n){return`${$i(ue(n))}|lt:${n.limitType}`}function Ye(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>mc(s)).join(", ")}]`),Fi(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Ve(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Ve(s)).join(",")),`Target(${r})`}(ue(n))}; limitType=${n.limitType})`}function Hi(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of rn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(c,u,d){const f=Fo(c,u,d);return c.inclusive?f<=0:f<0}(r.startAt,rn(r),s)||r.endAt&&!function(c,u,d){const f=Fo(c,u,d);return c.inclusive?f>=0:f>0}(r.endAt,rn(r),s))}(n,t)}function Rf(n){return(t,e)=>{let r=!1;for(const s of rn(n)){const o=Cf(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Cf(n,t,e){const r=n.field.isKeyField()?M.comparator(t.key,e.key):function(o,c,u){const d=c.data.field(o),f=u.data.field(o);return d!==null&&f!==null?De(d,f):O(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return O(19790,{direction:n.dir})}}/**
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
 */class _e{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Me(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return rc(this.inner)}size(){return this.innerSize}}/**
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
 */const Pf=new It(M.comparator);function cr(){return Pf}const Ec=new It(M.comparator);function Hn(...n){let t=Ec;for(const e of n)t=t.insert(e.key,e);return t}function vc(n){let t=Ec;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ce(){return sn()}function Ic(){return sn()}function sn(){return new _e(n=>n.toString(),(n,t)=>n.isEqual(t))}const Df=new It(M.comparator),Vf=new ct(M.comparator);function mt(...n){let t=Vf;for(const e of n)t=t.add(e);return t}const kf=new ct(U);function Nf(){return kf}/**
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
 */function Gi(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nr(t)?"-0":t}}function wc(n){return{integerValue:""+n}}function Mf(n,t){return sf(t)?wc(t):Gi(n,t)}/**
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
 */class yr{constructor(){this._=void 0}}function Of(n,t,e){return n instanceof dn?function(s,o){const c={fields:{[sc]:{stringValue:ic},[ac]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Bi(o)&&(o=ji(o)),o&&(c.fields[oc]=o),{mapValue:c}}(e,t):n instanceof fn?Ac(n,t):n instanceof pn?Sc(n,t):function(s,o){const c=Tc(s,o),u=$o(c)+$o(s.Ee);return pi(c)&&pi(s.Ee)?wc(u):Gi(s.serializer,u)}(n,t)}function Lf(n,t,e){return n instanceof fn?Ac(n,t):n instanceof pn?Sc(n,t):e}function Tc(n,t){return n instanceof lr?function(r){return pi(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class dn extends yr{}class fn extends yr{constructor(t){super(),this.elements=t}}function Ac(n,t){const e=xc(t);for(const r of n.elements)e.some(s=>Nt(s,r))||e.push(r);return{arrayValue:{values:e}}}class pn extends yr{constructor(t){super(),this.elements=t}}function Sc(n,t){let e=xc(t);for(const r of n.elements)e=e.filter(s=>!Nt(s,r));return{arrayValue:{values:e}}}class lr extends yr{constructor(t,e){super(),this.serializer=t,this.Ee=e}}function $o(n){return ot(n.integerValue||n.doubleValue)}function xc(n){return Ui(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Ff{constructor(t,e){this.field=t,this.transform=e}}function Bf(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof fn&&s instanceof fn||r instanceof pn&&s instanceof pn?Ce(r.elements,s.elements,Nt):r instanceof lr&&s instanceof lr?Nt(r.Ee,s.Ee):r instanceof dn&&s instanceof dn}(n.transform,t.transform)}class jf{constructor(t,e){this.version=t,this.transformResults=e}}class Lt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Lt}static exists(t){return new Lt(void 0,t)}static updateTime(t){return new Lt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Xn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class _r{}function bc(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Cc(n.key,Lt.none()):new _n(n.key,n.data,Lt.none());{const e=n.data,r=bt.empty();let s=new ct(at.comparator);for(let o of t.fields)if(!s.has(o)){let c=e.field(o);c===null&&o.length>1&&(o=o.popLast(),c=e.field(o)),c===null?r.delete(o):r.set(o,c),s=s.add(o)}return new Ee(n.key,r,new Ct(s.toArray()),Lt.none())}}function Uf(n,t,e){n instanceof _n?function(s,o,c){const u=s.value.clone(),d=Ho(s.fieldTransforms,o,c.transformResults);u.setAll(d),o.convertToFoundDocument(c.version,u).setHasCommittedMutations()}(n,t,e):n instanceof Ee?function(s,o,c){if(!Xn(s.precondition,o))return void o.convertToUnknownDocument(c.version);const u=Ho(s.fieldTransforms,o,c.transformResults),d=o.data;d.setAll(Rc(s)),d.setAll(u),o.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(n,t,e):function(s,o,c){o.convertToNoDocument(c.version).setHasCommittedMutations()}(0,t,e)}function on(n,t,e,r){return n instanceof _n?function(o,c,u,d){if(!Xn(o.precondition,c))return u;const f=o.value.clone(),v=Go(o.fieldTransforms,d,c);return f.setAll(v),c.convertToFoundDocument(c.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof Ee?function(o,c,u,d){if(!Xn(o.precondition,c))return u;const f=Go(o.fieldTransforms,d,c),v=c.data;return v.setAll(Rc(o)),v.setAll(f),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(T=>T.field))}(n,t,e,r):function(o,c,u){return Xn(o.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):u}(n,t,e)}function $f(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=Tc(r.transform,s||null);o!=null&&(e===null&&(e=bt.empty()),e.set(r.field,o))}return e||null}function qo(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ce(r,s,(o,c)=>Bf(o,c))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class _n extends _r{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ee extends _r{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Rc(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Ho(n,t,e){const r=new Map;Y(n.length===e.length,32656,{Ae:e.length,Re:n.length});for(let s=0;s<e.length;s++){const o=n[s],c=o.transform,u=t.data.field(o.field);r.set(o.field,Lf(c,u,e[s]))}return r}function Go(n,t,e){const r=new Map;for(const s of n){const o=s.transform,c=e.data.field(s.field);r.set(s.field,Of(o,c,t))}return r}class Cc extends _r{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qf extends _r{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Hf{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Uf(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=on(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=on(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Ic();return this.mutations.forEach(s=>{const o=t.get(s.key),c=o.overlayedDocument;let u=this.applyToLocalView(c,o.mutatedFields);u=e.has(s.key)?null:u;const d=bc(c,u);d!==null&&r.set(s.key,d),c.isValidDocument()||c.convertToNoDocument(K.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),mt())}isEqual(t){return this.batchId===t.batchId&&Ce(this.mutations,t.mutations,(e,r)=>qo(e,r))&&Ce(this.baseMutations,t.baseMutations,(e,r)=>qo(e,r))}}class zi{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){Y(t.mutations.length===r.length,58842,{Ve:t.mutations.length,me:r.length});let s=function(){return Df}();const o=t.mutations;for(let c=0;c<o.length;c++)s=s.insert(o[c].key,r[c].version);return new zi(t,e,r,s)}}/**
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
 */class Gf{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */var tt,B;function zf(n){switch(n){case b.OK:return O(64938);case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return O(15467,{code:n})}}function Wf(n){if(n===void 0)return me("GRPC error has no .code"),b.UNKNOWN;switch(n){case tt.OK:return b.OK;case tt.CANCELLED:return b.CANCELLED;case tt.UNKNOWN:return b.UNKNOWN;case tt.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case tt.INTERNAL:return b.INTERNAL;case tt.UNAVAILABLE:return b.UNAVAILABLE;case tt.UNAUTHENTICATED:return b.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case tt.NOT_FOUND:return b.NOT_FOUND;case tt.ALREADY_EXISTS:return b.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return b.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case tt.ABORTED:return b.ABORTED;case tt.OUT_OF_RANGE:return b.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return b.UNIMPLEMENTED;case tt.DATA_LOSS:return b.DATA_LOSS;default:return O(39323,{code:n})}}(B=tt||(tt={}))[B.OK=0]="OK",B[B.CANCELLED=1]="CANCELLED",B[B.UNKNOWN=2]="UNKNOWN",B[B.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",B[B.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",B[B.NOT_FOUND=5]="NOT_FOUND",B[B.ALREADY_EXISTS=6]="ALREADY_EXISTS",B[B.PERMISSION_DENIED=7]="PERMISSION_DENIED",B[B.UNAUTHENTICATED=16]="UNAUTHENTICATED",B[B.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",B[B.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",B[B.ABORTED=10]="ABORTED",B[B.OUT_OF_RANGE=11]="OUT_OF_RANGE",B[B.UNIMPLEMENTED=12]="UNIMPLEMENTED",B[B.INTERNAL=13]="INTERNAL",B[B.UNAVAILABLE=14]="UNAVAILABLE",B[B.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Di([4294967295,4294967295],0);class Kf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function yi(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Qf(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Xf(n,t){return yi(n,t.toTimestamp())}function xe(n){return Y(!!n,49232),K.fromTimestamp(function(e){const r=ge(e);return new Q(r.seconds,r.nanos)}(n))}function Pc(n,t){return _i(n,t).canonicalString()}function _i(n,t){const e=function(s){return new X(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Jf(n){const t=X.fromString(n);return Y(sp(t),10190,{key:t.toString()}),t}function Ei(n,t){return Pc(n.databaseId,t.path)}function Yf(n){const t=Jf(n);return t.length===4?X.emptyPath():tp(t)}function Zf(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function tp(n){return Y(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function zo(n,t,e){return{name:Ei(n,t),fields:e.value.mapValue.fields}}function ep(n,t){let e;if(t instanceof _n)e={update:zo(n,t.key,t.value)};else if(t instanceof Cc)e={delete:Ei(n,t.key)};else if(t instanceof Ee)e={update:zo(n,t.key,t.data),updateMask:ip(t.fieldMask)};else{if(!(t instanceof qf))return O(16599,{Rt:t.type});e={verify:Ei(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,c){const u=c.transform;if(u instanceof dn)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof fn)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof pn)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof lr)return{fieldPath:c.field.canonicalString(),increment:u.Ee};throw O(20930,{transform:c.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Xf(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:O(27497)}(n,t.precondition)),e}function np(n,t){return n&&n.length>0?(Y(t!==void 0,14353),n.map(e=>function(s,o){let c=s.updateTime?xe(s.updateTime):xe(o);return c.isEqual(K.min())&&(c=xe(o)),new jf(c,s.transformResults||[])}(e,t))):[]}function rp(n){let t=Yf(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){Y(r===1,65062);const v=e.from[0];v.allDescendants?s=v.collectionId:t=t.child(v.collectionId)}let o=[];e.where&&(o=function(T){const S=Dc(T);return S instanceof Jt&&fc(S)?S.getFilters():[S]}(e.where));let c=[];e.orderBy&&(c=function(T){return T.map(S=>function(P){return new ar(Se(P.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(S))}(e.orderBy));let u=null;e.limit&&(u=function(T){let S;return S=typeof T=="object"?T.value:T,Fi(S)?null:S}(e.limit));let d=null;e.startAt&&(d=function(T){const S=!!T.before,C=T.values||[];return new or(C,S)}(e.startAt));let f=null;return e.endAt&&(f=function(T){const S=!T.before,C=T.values||[];return new or(C,S)}(e.endAt)),Af(t,s,c,o,u,"F",d,f)}function Dc(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Se(e.unaryFilter.field);return rt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Se(e.unaryFilter.field);return rt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Se(e.unaryFilter.field);return rt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Se(e.unaryFilter.field);return rt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return O(61313);default:return O(60726)}}(n):n.fieldFilter!==void 0?function(e){return rt.create(Se(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return O(58110);default:return O(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Jt.create(e.compositeFilter.filters.map(r=>Dc(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return O(1026)}}(e.compositeFilter.op))}(n):O(30097,{filter:n})}function Se(n){return at.fromServerFormat(n.fieldPath)}function ip(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function sp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class op{constructor(t){this.gt=t}}function ap(n){const t=rp({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?gi(t,t.limit,"L"):t}/**
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
 */class cp{constructor(){this.Dn=new lp}addToCollectionParentIndex(t,e){return this.Dn.add(e),x.resolve()}getCollectionParents(t,e){return x.resolve(this.Dn.getEntries(e))}addFieldIndex(t,e){return x.resolve()}deleteFieldIndex(t,e){return x.resolve()}deleteAllFieldIndexes(t){return x.resolve()}createTargetIndexes(t,e){return x.resolve()}getDocumentsMatchingTarget(t,e){return x.resolve(null)}getIndexType(t,e){return x.resolve(0)}getFieldIndexes(t,e){return x.resolve([])}getNextCollectionGroupToUpdate(t){return x.resolve(null)}getMinOffset(t,e){return x.resolve(Xt.min())}getMinOffsetFromCollectionGroup(t,e){return x.resolve(Xt.min())}updateCollectionGroup(t,e,r){return x.resolve()}updateIndexEntries(t,e){return x.resolve()}}class lp{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new ct(X.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new ct(X.comparator)).toArray()}}/**
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
 */const Wo={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Vc=41943040;class Et{static withCacheSize(t){return new Et(t,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Et.DEFAULT_COLLECTION_PERCENTILE=10,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Et.DEFAULT=new Et(Vc,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Et.DISABLED=new Et(-1,0,0);/**
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
 */class ke{constructor(t){this._r=t}next(){return this._r+=2,this._r}static ar(){return new ke(0)}static ur(){return new ke(-1)}}/**
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
 */const Ko="LruGarbageCollector",up=1048576;function Qo([n,t],[e,r]){const s=U(n,e);return s===0?U(t,r):s}class hp{constructor(t){this.Tr=t,this.buffer=new ct(Qo),this.Ir=0}dr(){return++this.Ir}Er(t){const e=[t,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Qo(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class dp{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(t){D(Ko,`Garbage collection scheduled in ${t}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){yn(e)?D(Ko,"Ignoring IndexedDB error during garbage collection: ",e):await Mi(e)}await this.Rr(3e5)})}}class fp{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.mr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return x.resolve(Oi.ue);const r=new hp(e);return this.Vr.forEachTarget(t,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.gr(t,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.Vr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(Wo)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Wo):this.pr(t,e))}getCacheSize(t){return this.Vr.getCacheSize(t)}pr(t,e){let r,s,o,c,u,d,f;const v=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),s=this.params.maximumSequenceNumbersToCollect):s=T,c=Date.now(),this.nthSequenceNumber(t,s))).next(T=>(r=T,u=Date.now(),this.removeTargets(t,r,e))).next(T=>(o=T,d=Date.now(),this.removeOrphanedDocuments(t,r))).next(T=>(f=Date.now(),Ae()<=j.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-v}ms
	Determined least recently used ${s} in `+(u-c)+`ms
	Removed ${o} targets in `+(d-u)+`ms
	Removed ${T} documents in `+(f-d)+`ms
Total Duration: ${f-v}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:T})))}}function pp(n,t){return new fp(n,t)}/**
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
 */class mp{constructor(){this.changes=new _e(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,xt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?x.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class gp{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class yp{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&on(r.mutation,s,Ct.empty(),Q.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,mt()).next(()=>r))}getLocalViewOfDocuments(t,e,r=mt()){const s=ce();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let c=Hn();return o.forEach((u,d)=>{c=c.insert(u,d.overlayedDocument)}),c}))}getOverlayedDocuments(t,e){const r=ce();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,mt()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((c,u)=>{e.set(c,u)})})}computeViews(t,e,r,s){let o=cr();const c=sn(),u=function(){return sn()}();return e.forEach((d,f)=>{const v=r.get(f.key);s.has(f.key)&&(v===void 0||v.mutation instanceof Ee)?o=o.insert(f.key,f):v!==void 0?(c.set(f.key,v.mutation.getFieldMask()),on(v.mutation,f,v.mutation.getFieldMask(),Q.now())):c.set(f.key,Ct.empty())}),this.recalculateAndSaveOverlays(t,o).next(d=>(d.forEach((f,v)=>c.set(f,v)),e.forEach((f,v)=>{var T;return u.set(f,new gp(v,(T=c.get(f))!==null&&T!==void 0?T:null))}),u))}recalculateAndSaveOverlays(t,e){const r=sn();let s=new It((c,u)=>c-u),o=mt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(c=>{for(const u of c)u.keys().forEach(d=>{const f=e.get(d);if(f===null)return;let v=r.get(d)||Ct.empty();v=u.applyToLocalView(f,v),r.set(d,v);const T=(s.get(u.batchId)||mt()).add(d);s=s.insert(u.batchId,T)})}).next(()=>{const c=[],u=s.getReverseIterator();for(;u.hasNext();){const d=u.getNext(),f=d.key,v=d.value,T=Ic();v.forEach(S=>{if(!o.has(S)){const C=bc(e.get(S),r.get(S));C!==null&&T.set(S,C),o=o.add(S)}}),c.push(this.documentOverlayCache.saveOverlays(t,f,T))}return x.waitFor(c)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(c){return M.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):xf(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const c=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):x.resolve(ce());let u=un,d=o;return c.next(f=>x.forEach(f,(v,T)=>(u<T.largestBatchId&&(u=T.largestBatchId),o.get(v)?x.resolve():this.remoteDocumentCache.getEntry(t,v).next(S=>{d=d.insert(v,S)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,d,f,mt())).next(v=>({batchId:u,changes:vc(v)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(r=>{let s=Hn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let c=Hn();return this.indexManager.getCollectionParents(t,o).next(u=>x.forEach(u,d=>{const f=function(T,S){return new gr(S,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(e,d.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next(v=>{v.forEach((T,S)=>{c=c.insert(T,S)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(c=>(o=c,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(c=>{o.forEach((d,f)=>{const v=f.getKey();c.get(v)===null&&(c=c.insert(v,xt.newInvalidDocument(v)))});let u=Hn();return c.forEach((d,f)=>{const v=o.get(d);v!==void 0&&on(v.mutation,f,Ct.empty(),Q.now()),Hi(e,f)&&(u=u.insert(d,f))}),u})}}/**
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
 */class _p{constructor(t){this.serializer=t,this.Br=new Map,this.Lr=new Map}getBundleMetadata(t,e){return x.resolve(this.Br.get(e))}saveBundleMetadata(t,e){return this.Br.set(e.id,function(s){return{id:s.id,version:s.version,createTime:xe(s.createTime)}}(e)),x.resolve()}getNamedQuery(t,e){return x.resolve(this.Lr.get(e))}saveNamedQuery(t,e){return this.Lr.set(e.name,function(s){return{name:s.name,query:ap(s.bundledQuery),readTime:xe(s.readTime)}}(e)),x.resolve()}}/**
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
 */class Ep{constructor(){this.overlays=new It(M.comparator),this.kr=new Map}getOverlay(t,e){return x.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ce();return x.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.wt(t,e,o)}),x.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.kr.delete(r)),x.resolve()}getOverlaysForCollection(t,e,r){const s=ce(),o=e.length+1,c=new M(e.child("")),u=this.overlays.getIteratorFrom(c);for(;u.hasNext();){const d=u.getNext().value,f=d.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&d.largestBatchId>r&&s.set(d.getKey(),d)}return x.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new It((f,v)=>f-v);const c=this.overlays.getIterator();for(;c.hasNext();){const f=c.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let v=o.get(f.largestBatchId);v===null&&(v=ce(),o=o.insert(f.largestBatchId,v)),v.set(f.getKey(),f)}}const u=ce(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((f,v)=>u.set(f,v)),!(u.size()>=s)););return x.resolve(u)}wt(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const c=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,c)}this.overlays=this.overlays.insert(r.key,new Gf(e,r));let o=this.kr.get(e);o===void 0&&(o=mt(),this.kr.set(e,o)),this.kr.set(e,o.add(r.key))}}/**
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
 */class vp{constructor(){this.sessionToken=kt.EMPTY_BYTE_STRING}getSessionToken(t){return x.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,x.resolve()}}/**
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
 */class Wi{constructor(){this.qr=new ct(nt.Qr),this.$r=new ct(nt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(t,e){const r=new nt(t,e);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Wr(new nt(t,e))}Gr(t,e){t.forEach(r=>this.removeReference(r,e))}zr(t){const e=new M(new X([])),r=new nt(e,t),s=new nt(e,t+1),o=[];return this.$r.forEachInRange([r,s],c=>{this.Wr(c),o.push(c.key)}),o}jr(){this.qr.forEach(t=>this.Wr(t))}Wr(t){this.qr=this.qr.delete(t),this.$r=this.$r.delete(t)}Jr(t){const e=new M(new X([])),r=new nt(e,t),s=new nt(e,t+1);let o=mt();return this.$r.forEachInRange([r,s],c=>{o=o.add(c.key)}),o}containsKey(t){const e=new nt(t,0),r=this.qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class nt{constructor(t,e){this.key=t,this.Hr=e}static Qr(t,e){return M.comparator(t.key,e.key)||U(t.Hr,e.Hr)}static Ur(t,e){return U(t.Hr,e.Hr)||M.comparator(t.key,e.key)}}/**
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
 */class Ip{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.er=1,this.Yr=new ct(nt.Qr)}checkEmpty(t){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new Hf(o,e,r,s);this.mutationQueue.push(c);for(const u of s)this.Yr=this.Yr.add(new nt(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return x.resolve(c)}lookupMutationBatch(t,e){return x.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Xr(r),o=s<0?0:s;return x.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?Li:this.er-1)}getAllMutationBatches(t){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new nt(e,0),s=new nt(e,Number.POSITIVE_INFINITY),o=[];return this.Yr.forEachInRange([r,s],c=>{const u=this.Zr(c.Hr);o.push(u)}),x.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ct(U);return e.forEach(s=>{const o=new nt(s,0),c=new nt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([o,c],u=>{r=r.add(u.Hr)})}),x.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const c=new nt(new M(o),0);let u=new ct(U);return this.Yr.forEachWhile(d=>{const f=d.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(u=u.add(d.Hr)),!0)},c),x.resolve(this.ei(u))}ei(t){const e=[];return t.forEach(r=>{const s=this.Zr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){Y(this.ti(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return x.forEach(e.mutations,s=>{const o=new nt(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Yr=r})}rr(t){}containsKey(t,e){const r=new nt(e,0),s=this.Yr.firstAfterOrEqual(r);return x.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,x.resolve()}ti(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class wp{constructor(t){this.ni=t,this.docs=function(){return new It(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,c=this.ni(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:c}),this.size+=c-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return x.resolve(r?r.document.mutableCopy():xt.newInvalidDocument(e))}getEntries(t,e){let r=cr();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():xt.newInvalidDocument(s))}),x.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=cr();const c=e.path,u=new M(c.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(u);for(;d.hasNext();){const{key:f,value:{document:v}}=d.getNext();if(!c.isPrefixOf(f.path))break;f.path.length>c.length+1||tf(Zd(v),r)<=0||(s.has(v.key)||Hi(e,v))&&(o=o.insert(v.key,v.mutableCopy()))}return x.resolve(o)}getAllFromCollectionGroup(t,e,r,s){O(9500)}ri(t,e){return x.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Tp(this)}getSize(t){return x.resolve(this.size)}}class Tp extends mp{constructor(t){super(),this.Or=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.Or.addEntry(t,s)):this.Or.removeEntry(r)}),x.waitFor(e)}getFromCache(t,e){return this.Or.getEntry(t,e)}getAllFromCache(t,e){return this.Or.getEntries(t,e)}}/**
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
 */class Ap{constructor(t){this.persistence=t,this.ii=new _e(e=>$i(e),qi),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.si=0,this.oi=new Wi,this.targetCount=0,this._i=ke.ar()}forEachTarget(t,e){return this.ii.forEach((r,s)=>e(s)),x.resolve()}getLastRemoteSnapshotVersion(t){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return x.resolve(this.si)}allocateTargetId(t){return this.highestTargetId=this._i.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.si&&(this.si=e),x.resolve()}hr(t){this.ii.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this._i=new ke(e),this.highestTargetId=e),t.sequenceNumber>this.si&&(this.si=t.sequenceNumber)}addTargetData(t,e){return this.hr(e),this.targetCount+=1,x.resolve()}updateTargetData(t,e){return this.hr(e),x.resolve()}removeTargetData(t,e){return this.ii.delete(e.target),this.oi.zr(e.targetId),this.targetCount-=1,x.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.ii.forEach((c,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.ii.delete(c),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),x.waitFor(o).next(()=>s)}getTargetCount(t){return x.resolve(this.targetCount)}getTargetData(t,e){const r=this.ii.get(e)||null;return x.resolve(r)}addMatchingKeys(t,e,r){return this.oi.Kr(e,r),x.resolve()}removeMatchingKeys(t,e,r){this.oi.Gr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(c=>{o.push(s.markPotentiallyOrphaned(t,c))}),x.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.oi.zr(e),x.resolve()}getMatchingKeysForTargetId(t,e){const r=this.oi.Jr(e);return x.resolve(r)}containsKey(t,e){return x.resolve(this.oi.containsKey(e))}}/**
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
 */class kc{constructor(t,e){this.ai={},this.overlays={},this.ui=new Oi(0),this.ci=!1,this.ci=!0,this.li=new vp,this.referenceDelegate=t(this),this.hi=new Ap(this),this.indexManager=new cp,this.remoteDocumentCache=function(s){return new wp(s)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new op(e),this.Ti=new _p(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Ep,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ai[t.toKey()];return r||(r=new Ip(e,this.referenceDelegate),this.ai[t.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(t,e,r){D("MemoryPersistence","Starting transaction:",t);const s=new Sp(this.ui.next());return this.referenceDelegate.Ii(),r(s).next(o=>this.referenceDelegate.di(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Ei(t,e){return x.or(Object.values(this.ai).map(r=>()=>r.containsKey(t,e)))}}class Sp extends nf{constructor(t){super(),this.currentSequenceNumber=t}}class Ki{constructor(t){this.persistence=t,this.Ai=new Wi,this.Ri=null}static Vi(t){return new Ki(t)}get mi(){if(this.Ri)return this.Ri;throw O(60996)}addReference(t,e,r){return this.Ai.addReference(r,e),this.mi.delete(r.toString()),x.resolve()}removeReference(t,e,r){return this.Ai.removeReference(r,e),this.mi.add(r.toString()),x.resolve()}markPotentiallyOrphaned(t,e){return this.mi.add(e.toString()),x.resolve()}removeTarget(t,e){this.Ai.zr(e.targetId).forEach(s=>this.mi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.mi.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ii(){this.Ri=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.mi,r=>{const s=M.fromPath(r);return this.fi(t,s).next(o=>{o||e.removeEntry(s,K.min())})}).next(()=>(this.Ri=null,e.apply(t)))}updateLimboDocument(t,e){return this.fi(t,e).next(r=>{r?this.mi.delete(e.toString()):this.mi.add(e.toString())})}Pi(t){return 0}fi(t,e){return x.or([()=>x.resolve(this.Ai.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class ur{constructor(t,e){this.persistence=t,this.gi=new _e(r=>of(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=pp(this,e)}static Vi(t,e){return new ur(t,e)}Ii(){}di(t){return x.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}mr(t){const e=this.yr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}yr(t){let e=0;return this.gr(t,r=>{e++}).next(()=>e)}gr(t,e){return x.forEach(this.gi,(r,s)=>this.Sr(t,r,s).next(o=>o?x.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ri(t,c=>this.Sr(t,c,e).next(u=>{u||(r++,o.removeEntry(c,K.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.gi.set(e,t.currentSequenceNumber),x.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.gi.set(r,t.currentSequenceNumber),x.resolve()}removeReference(t,e,r){return this.gi.set(r,t.currentSequenceNumber),x.resolve()}updateLimboDocument(t,e){return this.gi.set(e,t.currentSequenceNumber),x.resolve()}Pi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Kn(t.data.value)),e}Sr(t,e,r){return x.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.gi.get(e);return x.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Qi{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Is=r,this.ds=s}static Es(t,e){let r=mt(),s=mt();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Qi(t,e.fromCache,r,s)}}/**
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
 */class xp{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class bp{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return nu()?8:rf(Zl())>0?6:4}()}initialize(t,e){this.gs=t,this.indexManager=e,this.As=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ps(t,e).next(c=>{o.result=c}).next(()=>{if(!o.result)return this.ys(t,e,s,r).next(c=>{o.result=c})}).next(()=>{if(o.result)return;const c=new xp;return this.ws(t,e,c).next(u=>{if(o.result=u,this.Rs)return this.Ss(t,e,c,u.size)})}).next(()=>o.result)}Ss(t,e,r,s){return r.documentReadCount<this.Vs?(Ae()<=j.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",Ye(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),x.resolve()):(Ae()<=j.DEBUG&&D("QueryEngine","Query:",Ye(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Ae()<=j.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",Ye(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ue(e))):x.resolve())}ps(t,e){if(Uo(e))return x.resolve(null);let r=ue(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=gi(e,null,"F"),r=ue(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const c=mt(...o);return this.gs.getDocuments(t,c).next(u=>this.indexManager.getMinOffset(t,r).next(d=>{const f=this.bs(e,u);return this.Ds(e,f,c,d.readTime)?this.ps(t,gi(e,null,"F")):this.vs(t,f,e,d)}))})))}ys(t,e,r,s){return Uo(e)||s.isEqual(K.min())?x.resolve(null):this.gs.getDocuments(t,r).next(o=>{const c=this.bs(e,o);return this.Ds(e,c,r,s)?x.resolve(null):(Ae()<=j.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ye(e)),this.vs(t,c,e,Yd(s,un)).next(u=>u))})}bs(t,e){let r=new ct(Rf(t));return e.forEach((s,o)=>{Hi(t,o)&&(r=r.add(o))}),r}Ds(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ws(t,e,r){return Ae()<=j.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Ye(e)),this.gs.getDocumentsMatchingQuery(t,e,Xt.min(),r)}vs(t,e,r,s){return this.gs.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(c=>{o=o.insert(c.key,c)}),o))}}/**
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
 */const Rp="LocalStore";class Cp{constructor(t,e,r,s){this.persistence=t,this.Cs=e,this.serializer=s,this.Fs=new It(U),this.Ms=new _e(o=>$i(o),qi),this.xs=new Map,this.Os=t.getRemoteDocumentCache(),this.hi=t.getTargetCache(),this.Ti=t.getBundleCache(),this.Ns(r)}Ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new yp(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Fs))}}function Pp(n,t,e,r){return new Cp(n,t,e,r)}async function Nc(n,t){const e=z(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.Ns(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const c=[],u=[];let d=mt();for(const f of s){c.push(f.batchId);for(const v of f.mutations)d=d.add(v.key)}for(const f of o){u.push(f.batchId);for(const v of f.mutations)d=d.add(v.key)}return e.localDocuments.getDocuments(r,d).next(f=>({Bs:f,removedBatchIds:c,addedBatchIds:u}))})})}function Dp(n,t){const e=z(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.Os.newChangeBuffer({trackRemovals:!0});return function(u,d,f,v){const T=f.batch,S=T.keys();let C=x.resolve();return S.forEach(P=>{C=C.next(()=>v.getEntry(d,P)).next(N=>{const k=f.docVersions.get(P);Y(k!==null,48541),N.version.compareTo(k)<0&&(T.applyToRemoteDocument(N,f),N.isValidDocument()&&(N.setReadTime(f.commitVersion),v.addEntry(N)))})}),C.next(()=>u.mutationQueue.removeMutationBatch(d,T))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let d=mt();for(let f=0;f<u.mutationResults.length;++f)u.mutationResults[f].transformResults.length>0&&(d=d.add(u.batch.mutations[f].key));return d}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function Vp(n){const t=z(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.hi.getLastRemoteSnapshotVersion(e))}function kp(n,t){const e=z(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=Li),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}class Xo{constructor(){this.activeTargetIds=Nf()}Gs(t){this.activeTargetIds=this.activeTargetIds.add(t)}zs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Np{constructor(){this.Fo=new Xo,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Fo.Gs(t),this.Mo[t]||"not-current"}updateQueryState(t,e,r){this.Mo[t]=e}removeLocalQueryTarget(t){this.Fo.zs(t)}isLocalQueryTarget(t){return this.Fo.activeTargetIds.has(t)}clearQueryState(t){delete this.Mo[t]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(t){return this.Fo.activeTargetIds.has(t)}start(){return this.Fo=new Xo,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Mp{xo(t){}shutdown(){}}/**
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
 */const Jo="ConnectivityMonitor";class Yo{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(t){this.ko.push(t)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){D(Jo,"Network connectivity changed: AVAILABLE");for(const t of this.ko)t(0)}Lo(){D(Jo,"Network connectivity changed: UNAVAILABLE");for(const t of this.ko)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Gn=null;function vi(){return Gn===null?Gn=function(){return 268435456+Math.round(2147483648*Math.random())}():Gn++,"0x"+Gn.toString(16)}/**
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
 */const ei="RestConnection",Op={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Lp{get Qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=e+"://"+t.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===ir?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(t,e,r,s,o){const c=vi(),u=this.Go(t,e.toUriEncodedString());D(ei,`Sending RPC '${t}' ${c}:`,u,r);const d={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(d,s,o);const{host:f}=new URL(u),v=Ti(f);return this.jo(t,u,d,r,v).then(T=>(D(ei,`Received RPC '${t}' ${c}: `,T),T),T=>{throw Re(ei,`RPC '${t}' ${c} failed with error: `,T,"url: ",u,"request:",r),T})}Jo(t,e,r,s,o,c){return this.Wo(t,e,r,s,o)}zo(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ne}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),r&&r.headers.forEach((s,o)=>t[o]=s)}Go(t,e){const r=Op[t];return`${this.$o}/v1/${e}:${r}`}terminate(){}}/**
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
 */class Fp{constructor(t){this.Ho=t.Ho,this.Yo=t.Yo}Zo(t){this.Xo=t}e_(t){this.t_=t}n_(t){this.r_=t}onMessage(t){this.i_=t}close(){this.Yo()}send(t){this.Ho(t)}s_(){this.Xo()}o_(){this.t_()}__(t){this.r_(t)}a_(t){this.i_(t)}}/**
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
 */const ft="WebChannelConnection";class Bp extends Lp{constructor(t){super(t),this.u_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}jo(t,e,r,s,o){const c=vi();return new Promise((u,d)=>{const f=new za;f.setWithCredentials(!0),f.listenOnce(Wa.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Wn.NO_ERROR:const T=f.getResponseJson();D(ft,`XHR for RPC '${t}' ${c} received:`,JSON.stringify(T)),u(T);break;case Wn.TIMEOUT:D(ft,`RPC '${t}' ${c} timed out`),d(new V(b.DEADLINE_EXCEEDED,"Request time out"));break;case Wn.HTTP_ERROR:const S=f.getStatus();if(D(ft,`RPC '${t}' ${c} failed with status:`,S,"response text:",f.getResponseText()),S>0){let C=f.getResponseJson();Array.isArray(C)&&(C=C[0]);const P=C?.error;if(P&&P.status&&P.message){const N=function(H){const L=H.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(L)>=0?L:b.UNKNOWN}(P.status);d(new V(N,P.message))}else d(new V(b.UNKNOWN,"Server responded with status "+f.getStatus()))}else d(new V(b.UNAVAILABLE,"Connection failed."));break;default:O(9055,{c_:t,streamId:c,l_:f.getLastErrorCode(),h_:f.getLastError()})}}finally{D(ft,`RPC '${t}' ${c} completed.`)}});const v=JSON.stringify(s);D(ft,`RPC '${t}' ${c} sending request:`,s),f.send(e,"POST",v,r,15)})}P_(t,e,r){const s=vi(),o=[this.$o,"/","google.firestore.v1.Firestore","/",t,"/channel"],c=Xa(),u=Qa(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(d.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(d.useFetchStreams=!0),this.zo(d.initMessageHeaders,e,r),d.encodeInitMessageHeaders=!0;const v=o.join("");D(ft,`Creating RPC '${t}' stream ${s}: ${v}`,d);const T=c.createWebChannel(v,d);this.T_(T);let S=!1,C=!1;const P=new Fp({Ho:k=>{C?D(ft,`Not sending because RPC '${t}' stream ${s} is closed:`,k):(S||(D(ft,`Opening RPC '${t}' stream ${s} transport.`),T.open(),S=!0),D(ft,`RPC '${t}' stream ${s} sending:`,k),T.send(k))},Yo:()=>T.close()}),N=(k,H,L)=>{k.listen(H,q=>{try{L(q)}catch(Z){setTimeout(()=>{throw Z},0)}})};return N(T,Ze.EventType.OPEN,()=>{C||(D(ft,`RPC '${t}' stream ${s} transport opened.`),P.s_())}),N(T,Ze.EventType.CLOSE,()=>{C||(C=!0,D(ft,`RPC '${t}' stream ${s} transport closed`),P.__(),this.I_(T))}),N(T,Ze.EventType.ERROR,k=>{C||(C=!0,Re(ft,`RPC '${t}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),P.__(new V(b.UNAVAILABLE,"The operation could not be completed")))}),N(T,Ze.EventType.MESSAGE,k=>{var H;if(!C){const L=k.data[0];Y(!!L,16349);const q=L,Z=q?.error||((H=q[0])===null||H===void 0?void 0:H.error);if(Z){D(ft,`RPC '${t}' stream ${s} received error:`,Z);const Pt=Z.status;let F=function(g){const _=tt[g];if(_!==void 0)return Wf(_)}(Pt),y=Z.message;F===void 0&&(F=b.INTERNAL,y="Unknown error status: "+Pt+" with message "+Z.message),C=!0,P.__(new V(F,y)),T.close()}else D(ft,`RPC '${t}' stream ${s} received:`,L),P.a_(L)}}),N(u,Ka.STAT_EVENT,k=>{k.stat===ui.PROXY?D(ft,`RPC '${t}' stream ${s} detected buffering proxy`):k.stat===ui.NOPROXY&&D(ft,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.o_()},0),P}terminate(){this.u_.forEach(t=>t.close()),this.u_=[]}T_(t){this.u_.push(t)}I_(t){this.u_=this.u_.filter(e=>e===t)}}function ni(){return typeof document<"u"?document:null}/**
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
 */function Er(n){return new Kf(n,!0)}/**
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
 */class Mc{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Fi=t,this.timerId=e,this.d_=r,this.E_=s,this.A_=o,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(t){this.cancel();const e=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,e-r);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),t())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Zo="PersistentStream";class jp{constructor(t,e,r,s,o,c,u,d){this.Fi=t,this.w_=r,this.S_=s,this.connection=o,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=u,this.listener=d,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Mc(t,e)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(t){this.q_(),this.stream.send(t)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,t!==4?this.F_.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(me(e.toString()),me("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):e&&e.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.n_(e)}U_(){}auth(){this.state=1;const t=this.K_(this.b_),e=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.b_===e&&this.W_(r,s)},r=>{t(()=>{const s=new V(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)})})}W_(t,e){const r=this.K_(this.b_);this.stream=this.z_(t,e),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(s=>{r(()=>this.G_(s))}),this.stream.onMessage(s=>{r(()=>++this.C_==1?this.j_(s):this.onNext(s))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(t){return D(Zo,`close with error: ${t}`),this.stream=null,this.close(4,t)}K_(t){return e=>{this.Fi.enqueueAndForget(()=>this.b_===t?e():(D(Zo,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Up extends jp{constructor(t,e,r,s,o,c){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,c),this.serializer=o}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(t,e){return this.connection.P_("Write",t,e)}j_(t){return Y(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Y(!t.writeResults||t.writeResults.length===0,55816),this.listener.ea()}onNext(t){Y(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.F_.reset();const e=np(t.writeResults,t.commitTime),r=xe(t.commitTime);return this.listener.ta(r,e)}na(){const t={};t.database=Zf(this.serializer),this.k_(t)}X_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>ep(this.serializer,r))};this.k_(e)}}/**
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
 */class $p{}class qp extends $p{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new V(b.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Wo(t,_i(e,r),s,o,c)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new V(b.UNKNOWN,o.toString())})}Jo(t,e,r,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,u])=>this.connection.Jo(t,_i(e,r),s,c,u,o)).catch(c=>{throw c.name==="FirebaseError"?(c.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new V(b.UNKNOWN,c.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class Hp{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(t){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ua("Offline")))}set(t){this.ha(),this.sa=0,t==="Online"&&(this._a=!1),this.ua(t)}ua(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ca(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(me(e),this._a=!1):D("OnlineStateTracker",e)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const En="RemoteStore";class Gp{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=o,this.Ea.xo(c=>{r.enqueueAndForget(async()=>{In(this)&&(D(En,"Restarting streams for network reachability change."),await async function(d){const f=z(d);f.Ia.add(4),await vn(f),f.Aa.set("Unknown"),f.Ia.delete(4),await vr(f)}(this))})}),this.Aa=new Hp(r,s)}}async function vr(n){if(In(n))for(const t of n.da)await t(!0)}async function vn(n){for(const t of n.da)await t(!1)}function In(n){return z(n).Ia.size===0}async function Oc(n,t,e){if(!yn(t))throw t;n.Ia.add(1),await vn(n),n.Aa.set("Offline"),e||(e=()=>Vp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{D(En,"Retrying IndexedDB access"),await e(),n.Ia.delete(1),await vr(n)})}function Lc(n,t){return t().catch(e=>Oc(n,e,t))}async function Ir(n){const t=z(n),e=Yt(t);let r=t.Pa.length>0?t.Pa[t.Pa.length-1].batchId:Li;for(;zp(t);)try{const s=await kp(t.localStore,r);if(s===null){t.Pa.length===0&&e.B_();break}r=s.batchId,Wp(t,s)}catch(s){await Oc(t,s)}Fc(t)&&Bc(t)}function zp(n){return In(n)&&n.Pa.length<10}function Wp(n,t){n.Pa.push(t);const e=Yt(n);e.x_()&&e.Z_&&e.X_(t.mutations)}function Fc(n){return In(n)&&!Yt(n).M_()&&n.Pa.length>0}function Bc(n){Yt(n).start()}async function Kp(n){Yt(n).na()}async function Qp(n){const t=Yt(n);for(const e of n.Pa)t.X_(e.mutations)}async function Xp(n,t,e){const r=n.Pa.shift(),s=zi.from(r,t,e);await Lc(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Ir(n)}async function Jp(n,t){t&&Yt(n).Z_&&await async function(r,s){if(function(c){return zf(c)&&c!==b.ABORTED}(s.code)){const o=r.Pa.shift();Yt(r).N_(),await Lc(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Ir(r)}}(n,t),Fc(n)&&Bc(n)}async function ta(n,t){const e=z(n);e.asyncQueue.verifyOperationInProgress(),D(En,"RemoteStore received new credentials");const r=In(e);e.Ia.add(3),await vn(e),r&&e.Aa.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ia.delete(3),await vr(e)}async function Yp(n,t){const e=z(n);t?(e.Ia.delete(2),await vr(e)):t||(e.Ia.add(2),await vn(e),e.Aa.set("Unknown"))}function Yt(n){return n.ma||(n.ma=function(e,r,s){const o=z(e);return o.ia(),new Up(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:Kp.bind(null,n),n_:Jp.bind(null,n),ea:Qp.bind(null,n),ta:Xp.bind(null,n)}),n.da.push(async t=>{t?(n.ma.N_(),await Ir(n)):(await n.ma.stop(),n.Pa.length>0&&(D(En,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))})),n.ma}/**
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
 */class Xi{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new le,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const c=Date.now()+r,u=new Xi(t,e,c,s,o);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jc(n,t){if(me("AsyncQueue",`${t}: ${n}`),yn(n))return new V(b.UNAVAILABLE,`${t}: ${n}`);throw n}class Zp{constructor(){this.queries=ea(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(e,r){const s=z(e),o=s.queries;s.queries=ea(),o.forEach((c,u)=>{for(const d of u.wa)d.onError(r)})})(this,new V(b.ABORTED,"Firestore shutting down"))}}function ea(){return new _e(n=>_c(n),yc)}function tm(n){n.Da.forEach(t=>{t.next()})}var na,ra;(ra=na||(na={})).Fa="default",ra.Cache="cache";const em="SyncEngine";class nm{constructor(t,e,r,s,o,c){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=c,this.hu={},this.Pu=new _e(u=>_c(u),yc),this.Tu=new Map,this.Iu=new Set,this.du=new It(M.comparator),this.Eu=new Map,this.Au=new Wi,this.Ru={},this.Vu=new Map,this.mu=ke.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function rm(n,t,e){const r=am(n);try{const s=await function(c,u){const d=z(c),f=Q.now(),v=u.reduce((C,P)=>C.add(P.key),mt());let T,S;return d.persistence.runTransaction("Locally write mutations","readwrite",C=>{let P=cr(),N=mt();return d.Os.getEntries(C,v).next(k=>{P=k,P.forEach((H,L)=>{L.isValidDocument()||(N=N.add(H))})}).next(()=>d.localDocuments.getOverlayedDocuments(C,P)).next(k=>{T=k;const H=[];for(const L of u){const q=$f(L,T.get(L.key).overlayedDocument);q!=null&&H.push(new Ee(L.key,q,uc(q.value.mapValue),Lt.exists(!0)))}return d.mutationQueue.addMutationBatch(C,f,H,u)}).next(k=>{S=k;const H=k.applyToLocalDocumentSet(T,N);return d.documentOverlayCache.saveOverlays(C,k.batchId,H)})}).then(()=>({batchId:S.batchId,changes:vc(T)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(c,u,d){let f=c.Ru[c.currentUser.toKey()];f||(f=new It(U)),f=f.insert(u,d),c.Ru[c.currentUser.toKey()]=f}(r,s.batchId,e),await wr(r,s.changes),await Ir(r.remoteStore)}catch(s){const o=jc(s,"Failed to persist write");e.reject(o)}}function ia(n,t,e){const r=z(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Pu.forEach((o,c)=>{const u=c.view.va(t);u.snapshot&&s.push(u.snapshot)}),function(c,u){const d=z(c);d.onlineState=u;let f=!1;d.queries.forEach((v,T)=>{for(const S of T.wa)S.va(u)&&(f=!0)}),f&&tm(d)}(r.eventManager,t),s.length&&r.hu.J_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function im(n,t){const e=z(n),r=t.batch.batchId;try{const s=await Dp(e.localStore,t);$c(e,r,null),Uc(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await wr(e,s)}catch(s){await Mi(s)}}async function sm(n,t,e){const r=z(n);try{const s=await function(c,u){const d=z(c);return d.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let v;return d.mutationQueue.lookupMutationBatch(f,u).next(T=>(Y(T!==null,37113),v=T.keys(),d.mutationQueue.removeMutationBatch(f,T))).next(()=>d.mutationQueue.performConsistencyCheck(f)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(f,v,u)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,v)).next(()=>d.localDocuments.getDocuments(f,v))})}(r.localStore,t);$c(r,t,e),Uc(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await wr(r,s)}catch(s){await Mi(s)}}function Uc(n,t){(n.Vu.get(t)||[]).forEach(e=>{e.resolve()}),n.Vu.delete(t)}function $c(n,t,e){const r=z(n);let s=r.Ru[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Ru[r.currentUser.toKey()]=s}}async function wr(n,t,e){const r=z(n),s=[],o=[],c=[];r.Pu.isEmpty()||(r.Pu.forEach((u,d)=>{c.push(r.gu(d,t,e).then(f=>{var v;if((f||e)&&r.isPrimaryClient){const T=f?!f.fromCache:(v=void 0)===null||v===void 0?void 0:v.current;r.sharedClientState.updateQueryState(d.targetId,T?"current":"not-current")}if(f){s.push(f);const T=Qi.Es(d.targetId,f);o.push(T)}}))}),await Promise.all(c),r.hu.J_(s),await async function(d,f){const v=z(d);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>x.forEach(f,S=>x.forEach(S.Is,C=>v.persistence.referenceDelegate.addReference(T,S.targetId,C)).next(()=>x.forEach(S.ds,C=>v.persistence.referenceDelegate.removeReference(T,S.targetId,C)))))}catch(T){if(!yn(T))throw T;D(Rp,"Failed to update sequence numbers: "+T)}for(const T of f){const S=T.targetId;if(!T.fromCache){const C=v.Fs.get(S),P=C.snapshotVersion,N=C.withLastLimboFreeSnapshotVersion(P);v.Fs=v.Fs.insert(S,N)}}}(r.localStore,o))}async function om(n,t){const e=z(n);if(!e.currentUser.isEqual(t)){D(em,"User change. New user:",t.toKey());const r=await Nc(e.localStore,t);e.currentUser=t,function(o,c){o.Vu.forEach(u=>{u.forEach(d=>{d.reject(new V(b.CANCELLED,c))})}),o.Vu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await wr(e,r.Bs)}}function am(n){const t=z(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=im.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=sm.bind(null,t),t}class hr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Er(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Du(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Cu(t,this.localStore),this.indexBackfillerScheduler=this.Fu(t,this.localStore)}Cu(t,e){return null}Fu(t,e){return null}vu(t){return Pp(this.persistence,new bp,t.initialUser,this.serializer)}Du(t){return new kc(Ki.Vi,this.serializer)}bu(t){return new Np}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}hr.provider={build:()=>new hr};class cm extends hr{constructor(t){super(),this.cacheSizeBytes=t}Cu(t,e){Y(this.persistence.referenceDelegate instanceof ur,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new dp(r,t.asyncQueue,e)}Du(t){const e=this.cacheSizeBytes!==void 0?Et.withCacheSize(this.cacheSizeBytes):Et.DEFAULT;return new kc(r=>ur.Vi(r,e),this.serializer)}}class Ii{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ia(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=om.bind(null,this.syncEngine),await Yp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Zp}()}createDatastore(t){const e=Er(t.databaseInfo.databaseId),r=function(o){return new Bp(o)}(t.databaseInfo);return function(o,c,u,d){return new qp(o,c,u,d)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,c,u){return new Gp(r,s,o,c,u)}(this.localStore,this.datastore,t.asyncQueue,e=>ia(this.syncEngine,e,0),function(){return Yo.C()?new Yo:new Mp}())}createSyncEngine(t,e){return function(s,o,c,u,d,f,v){const T=new nm(s,o,c,u,d,f);return v&&(T.fu=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=z(s);D(En,"RemoteStore shutting down."),o.Ia.add(5),await vn(o),o.Ea.shutdown(),o.Aa.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Ii.provider={build:()=>new Ii};/**
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
 */const Zt="FirestoreClient";class lm{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=pt.UNAUTHENTICATED,this.clientId=ki.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async c=>{D(Zt,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(r,c=>(D(Zt,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new le;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=jc(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ri(n,t){n.asyncQueue.verifyOperationInProgress(),D(Zt,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Nc(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>{Re("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then(()=>{D("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(s=>{Re("Terminating Firestore due to IndexedDb database deletion failed",s)})}),n._offlineComponents=t}async function sa(n,t){n.asyncQueue.verifyOperationInProgress();const e=await um(n);D(Zt,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>ta(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>ta(t.remoteStore,s)),n._onlineComponents=t}async function um(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D(Zt,"Using user provided OfflineComponentProvider");try{await ri(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===b.FAILED_PRECONDITION||s.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Re("Error using user provided cache. Falling back to memory cache: "+e),await ri(n,new hr)}}else D(Zt,"Using default OfflineComponentProvider"),await ri(n,new cm(void 0));return n._offlineComponents}async function hm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D(Zt,"Using user provided OnlineComponentProvider"),await sa(n,n._uninitializedComponentsProvider._online)):(D(Zt,"Using default OnlineComponentProvider"),await sa(n,new Ii))),n._onlineComponents}function dm(n){return hm(n).then(t=>t.syncEngine)}/**
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
 */function qc(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const oa=new Map;/**
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
 */const Hc="firestore.googleapis.com",aa=!0;class ca{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new V(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Hc,this.ssl=aa}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:aa;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Vc;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<up)throw new V(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Jd("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qc((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new V(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new V(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new V(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Tr{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ca({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new V(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ca(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ud;switch(r.type){case"firstParty":return new Gd(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=oa.get(e);r&&(D("ComponentProvider","Removing Datastore"),oa.delete(e),r.terminate())}(this),Promise.resolve()}}function fm(n,t,e,r={}){var s;n=ec(n,Tr);const o=Ti(t),c=n._getSettings(),u=Object.assign(Object.assign({},c),{emulatorOptions:n._getEmulatorOptions()}),d=`${t}:${e}`;o&&(Kl(`https://${d}`),Yl("Firestore",!0)),c.host!==Hc&&c.host!==d&&Re("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f=Object.assign(Object.assign({},c),{host:d,ssl:o,emulatorOptions:r});if(!cn(f,u)&&(n._setSettings(f),r.mockUserToken)){let v,T;if(typeof r.mockUserToken=="string")v=r.mockUserToken,T=pt.MOCK_USER;else{v=Ql(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const S=r.mockUserToken.sub||r.mockUserToken.user_id;if(!S)throw new V(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new pt(S)}n._authCredentials=new $d(new Ya(v,T))}}/**
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
 */class Ji{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Ji(this.firestore,t,this._query)}}class gt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new gt(this.firestore,t,this._key)}toJSON(){return{type:gt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(gn(e,gt._jsonSchema))return new gt(t,r||null,new M(X.fromString(e.referencePath)))}}gt._jsonSchemaVersion="firestore/documentReference/1.0",gt._jsonSchema={type:et("string",gt._jsonSchemaVersion),referencePath:et("string")};class Kt extends Ji{constructor(t,e,r){super(t,e,Sf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new gt(this.firestore,null,new M(t))}withConverter(t){return new Kt(this.firestore,t,this._path)}}function pm(n,t,...e){if(n=he(n),Za("collection","path",t),n instanceof Tr){const r=X.fromString(t,...e);return Po(r),new Kt(n,null,r)}{if(!(n instanceof gt||n instanceof Kt))throw new V(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return Po(r),new Kt(n.firestore,null,r)}}function mm(n,t,...e){if(n=he(n),arguments.length===1&&(t=ki.newId()),Za("doc","path",t),n instanceof Tr){const r=X.fromString(t,...e);return Co(r),new gt(n,null,new M(r))}{if(!(n instanceof gt||n instanceof Kt))throw new V(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return Co(r),new gt(n.firestore,n instanceof Kt?n.converter:null,new M(r))}}/**
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
 */const la="AsyncQueue";class ua{constructor(t=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Mc(this,"async_queue_retry"),this.oc=()=>{const r=ni();r&&D(la,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=t;const e=ni();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ac(),this.uc(t)}enterRestrictedMode(t){if(!this.Xu){this.Xu=!0,this.rc=t||!1;const e=ni();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.oc)}}enqueue(t){if(this.ac(),this.Xu)return new Promise(()=>{});const e=new le;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Zu.push(t),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(t){if(!yn(t))throw t;D(la,"Operation failed with retryable error: "+t)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(t){const e=this._c.then(()=>(this.nc=!0,t().catch(r=>{throw this.tc=r,this.nc=!1,me("INTERNAL UNHANDLED ERROR: ",ha(r)),r}).then(r=>(this.nc=!1,r))));return this._c=e,e}enqueueAfterDelay(t,e,r){this.ac(),this.sc.indexOf(t)>-1&&(e=0);const s=Xi.createAndSchedule(this,t,e,r,o=>this.lc(o));return this.ec.push(s),s}ac(){this.tc&&O(47125,{hc:ha(this.tc)})}verifyOperationInProgress(){}async Pc(){let t;do t=this._c,await t;while(t!==this._c)}Tc(t){for(const e of this.ec)if(e.timerId===t)return!0;return!1}Ic(t){return this.Pc().then(()=>{this.ec.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.ec)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Pc()})}dc(t){this.sc.push(t)}lc(t){const e=this.ec.indexOf(t);this.ec.splice(e,1)}}function ha(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class Gc extends Tr{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new ua,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new ua(t),this._firestoreClient=void 0,await t}}}function gm(n,t){const e=typeof n=="object"?n:Ia(),r=typeof n=="string"?n:ir,s=mn(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=zl("firestore");o&&fm(s,...o)}return s}function ym(n){if(n._terminated)throw new V(b.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||_m(n),n._firestoreClient}function _m(n){var t,e,r;const s=n._freezeSettings(),o=function(u,d,f,v){return new uf(u,d,f,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,qc(v.experimentalLongPollingOptions),v.useFetchStreams,v.isUsingEmulator)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new lm(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(u){const d=u?._online.build();return{_offline:u?._offline.build(d),_online:d}}(n._componentsProvider))}/**
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
 */class Rt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Rt(kt.fromBase64String(t))}catch(e){throw new V(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Rt(kt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Rt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(gn(t,Rt._jsonSchema))return Rt.fromBase64String(t.bytes)}}Rt._jsonSchemaVersion="firestore/bytes/1.0",Rt._jsonSchema={type:et("string",Rt._jsonSchemaVersion),bytes:et("string")};/**
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
 */class Yi{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new V(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Zi{constructor(t){this._methodName=t}}/**
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
 */class Ft{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new V(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new V(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return U(this._lat,t._lat)||U(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ft._jsonSchemaVersion}}static fromJSON(t){if(gn(t,Ft._jsonSchema))return new Ft(t.latitude,t.longitude)}}Ft._jsonSchemaVersion="firestore/geoPoint/1.0",Ft._jsonSchema={type:et("string",Ft._jsonSchemaVersion),latitude:et("number"),longitude:et("number")};/**
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
 */class Bt{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}toJSON(){return{type:Bt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(gn(t,Bt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new Bt(t.vectorValues);throw new V(b.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Bt._jsonSchemaVersion="firestore/vectorValue/1.0",Bt._jsonSchema={type:et("string",Bt._jsonSchemaVersion),vectorValues:et("object")};/**
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
 */const Em=/^__.*__$/;class vm{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Ee(t,this.data,this.fieldMask,e,this.fieldTransforms):new _n(t,this.data,e,this.fieldTransforms)}}function zc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O(40011,{Ec:n})}}class ts{constructor(t,e,r,s,o,c){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Ac(),this.fieldTransforms=o||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(t){return new ts(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:r,mc:!1});return s.fc(t),s}gc(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(t){return this.Rc({path:void 0,mc:!0})}wc(t){return dr(t,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.fc(this.path.get(t))}fc(t){if(t.length===0)throw this.wc("Document fields must not be empty");if(zc(this.Ec)&&Em.test(t))throw this.wc('Document fields cannot begin and end with "__"')}}class Im{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Er(t)}Dc(t,e,r,s=!1){return new ts({Ec:t,methodName:e,bc:r,path:at.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wm(n){const t=n._freezeSettings(),e=Er(n._databaseId);return new Im(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Tm(n,t,e,r,s,o={}){const c=n.Dc(o.merge||o.mergeFields?2:0,t,e,s);Xc("Data must be an object, but it was:",c,r);const u=Kc(r,c);let d,f;if(o.merge)d=new Ct(c.fieldMask),f=c.fieldTransforms;else if(o.mergeFields){const v=[];for(const T of o.mergeFields){const S=Am(t,T,e);if(!c.contains(S))throw new V(b.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);xm(v,S)||v.push(S)}d=new Ct(v),f=c.fieldTransforms.filter(T=>d.covers(T.field))}else d=null,f=c.fieldTransforms;return new vm(new bt(u),d,f)}class es extends Zi{_toFieldTransform(t){return new Ff(t.path,new dn)}isEqual(t){return t instanceof es}}function Wc(n,t){if(Qc(n=he(n)))return Xc("Unsupported field value:",t,n),Kc(n,t);if(n instanceof Zi)return function(r,s){if(!zc(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.mc&&t.Ec!==4)throw t.wc("Nested arrays are not supported");return function(r,s){const o=[];let c=0;for(const u of r){let d=Wc(u,s.yc(c));d==null&&(d={nullValue:"NULL_VALUE"}),o.push(d),c++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=he(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Mf(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Q.fromDate(r);return{timestampValue:yi(s.serializer,o)}}if(r instanceof Q){const o=new Q(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:yi(s.serializer,o)}}if(r instanceof Ft)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Rt)return{bytesValue:Qf(s.serializer,r._byteString)};if(r instanceof gt){const o=s.databaseId,c=r.firestore._databaseId;if(!c.isEqual(o))throw s.wc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Pc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Bt)return function(c,u){return{mapValue:{fields:{[cc]:{stringValue:lc},[di]:{arrayValue:{values:c.toArray().map(f=>{if(typeof f!="number")throw u.wc("VectorValues must only contain numeric values.");return Gi(u.serializer,f)})}}}}}}(r,s);throw s.wc(`Unsupported field value: ${Ni(r)}`)}(n,t)}function Kc(n,t){const e={};return rc(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Me(n,(r,s)=>{const o=Wc(s,t.Vc(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Qc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Q||n instanceof Ft||n instanceof Rt||n instanceof gt||n instanceof Zi||n instanceof Bt)}function Xc(n,t,e){if(!Qc(e)||!tc(e)){const r=Ni(e);throw r==="an object"?t.wc(n+" a custom object"):t.wc(n+" "+r)}}function Am(n,t,e){if((t=he(t))instanceof Yi)return t._internalPath;if(typeof t=="string")return Jc(n,t);throw dr("Field path arguments must be of type string or ",n,!1,void 0,e)}const Sm=new RegExp("[~\\*/\\[\\]]");function Jc(n,t,e){if(t.search(Sm)>=0)throw dr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Yi(...t.split("."))._internalPath}catch{throw dr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function dr(n,t,e,r,s){const o=r&&!r.isEmpty(),c=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let d="";return(o||c)&&(d+=" (found",o&&(d+=` in field ${r}`),c&&(d+=` in document ${s}`),d+=")"),new V(b.INVALID_ARGUMENT,u+n+d)}function xm(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class Yc{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new bm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Zc("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class bm extends Yc{data(){return super.data()}}function Zc(n,t){return typeof t=="string"?Jc(n,t):t instanceof Yi?t._internalPath:t._delegate._internalPath}/**
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
 */function Rm(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class zn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class be extends Yc{constructor(t,e,r,s,o,c){super(t,e,r,s,c),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Jn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Zc("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new V(b.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=be._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}be._jsonSchemaVersion="firestore/documentSnapshot/1.0",be._jsonSchema={type:et("string",be._jsonSchemaVersion),bundleSource:et("string","DocumentSnapshot"),bundleName:et("string"),bundle:et("string")};class Jn extends be{data(t={}){return super.data(t)}}class an{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new zn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Jn(this._firestore,this._userDataWriter,r.key,r,new zn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new V(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let c=0;return s._snapshot.docChanges.map(u=>{const d=new Jn(s._firestore,s._userDataWriter,u.doc.key,u.doc,new zn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:d,oldIndex:-1,newIndex:c++}})}{let c=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const d=new Jn(s._firestore,s._userDataWriter,u.doc.key,u.doc,new zn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,v=-1;return u.type!==0&&(f=c.indexOf(u.doc.key),c=c.delete(u.doc.key)),u.type!==1&&(c=c.add(u.doc),v=c.indexOf(u.doc.key)),{type:Cm(u.type),doc:d,oldIndex:f,newIndex:v}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new V(b.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=an._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=ki.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach(o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Cm(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O(61501,{type:n})}}an._jsonSchemaVersion="firestore/querySnapshot/1.0",an._jsonSchema={type:et("string",an._jsonSchemaVersion),bundleSource:et("string","QuerySnapshot"),bundleName:et("string"),bundle:et("string")};function Pm(n,t){const e=ec(n.firestore,Gc),r=mm(n),s=Rm(n.converter,t);return Dm(e,[Tm(wm(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Lt.exists(!1))]).then(()=>r)}function Dm(n,t){return function(r,s){const o=new le;return r.asyncQueue.enqueueAndForget(async()=>rm(await dm(r),s,o)),o.promise}(ym(n),t)}function Vm(){return new es("serverTimestamp")}(function(t,e=!0){(function(s){Ne=s})(lh),Qt(new jt("firestore",(r,{instanceIdentifier:s,options:o})=>{const c=r.getProvider("app").getImmediate(),u=new Gc(new qd(r.getProvider("auth-internal")),new zd(c,r.getProvider("app-check-internal")),function(f,v){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new V(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sr(f.options.projectId,v)}(c,s),c);return o=Object.assign({useFetchStreams:e},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),Vt(Ao,So,t),Vt(Ao,So,"esm2017")})();const km={apiKey:"AIzaSyDBvmvQ1hUtO0E8umAPGlbAhe3rVdqu5lQ",authDomain:"mktdash-940f1.firebaseapp.com",projectId:"mktdash-940f1",storageBucket:"mktdash-940f1.firebasestorage.app",messagingSenderId:"157652211467",appId:"1:157652211467:web:2d296b31255efbec15340e",measurementId:"G-V992ECHF0V"},tl=va(km);Ld(tl);const Nm=gm(tl);document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("new-post-form");document.getElementById("posts-container"),document.querySelector(".no-posts-message");const t=document.getElementById("post-form-modal"),e=document.getElementById("open-post-form-button"),r=t.querySelector(".close-button");document.getElementById("password-check-modal"),document.getElementById("pagination-controls");const s=document.body,o=document.getElementById("post-image-upload"),c=document.getElementById("post-image-preview");let u=null;o.addEventListener("change",d=>{const f=d.target.files[0];if(f){const v=new FileReader;v.onload=T=>{c.src=T.target.result,c.style.display="block",u=T.target.result},v.readAsDataURL(f)}else c.src="#",c.style.display="none",u=null}),n.addEventListener("submit",async d=>{d.preventDefault();const f={nickname:document.getElementById("post-nickname").value.trim(),password:document.getElementById("post-password").value.trim(),title:document.getElementById("post-title").value,content:document.getElementById("post-content").value,image:u,udemyCourseName:document.getElementById("udemy-course-name").value,udemyCourseUrl:document.getElementById("udemy-course-url").value,udemyCourseSection:document.getElementById("udemy-course-section").value,timestamp:Vm()};try{await Pm(pm(Nm,"posts"),f),alert("질문이 성공적으로 등록되었습니다."),n.reset(),c.src="#",c.style.display="none",u=null,t.style.display="none",s.style.overflow=""}catch(v){console.error("Error adding document: ",v),alert("질문 등록에 실패했습니다. 관리자에게 문의하세요.")}}),e.addEventListener("click",()=>{s.style.overflow="hidden",setTimeout(()=>{t.style.display="flex"},50),n.reset(),c.src="#",c.style.display="none",u=null}),r.addEventListener("click",()=>{t.style.display="none",s.style.overflow=""}),window.addEventListener("click",d=>{d.target===t&&(t.style.display="none",s.style.overflow="")})});document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector(".course-list"),t=document.querySelector(".roadmap-category-list"),e=document.getElementById("roadmap-detail"),r=document.getElementById("roadmap-detail-title"),s=document.getElementById("roadmap-detail-description"),o=document.getElementById("roadmap-sections"),c=document.getElementById("backToRoadmaps"),u=document.getElementById("roadmaps"),d=document.querySelector(".notes-list"),f=document.getElementById("loadMoreNotes"),v=document.querySelectorAll(".filter-button"),T=[{id:1,title:"The Web Developer Bootcamp 2025",instructor:"Colt Steele",description:"웹 개발의 모든 것을 배우는 최고의 부트캠프! 프론트엔드부터 백엔드까지 한 번에.",image:"https://img-c.udemycdn.com/course/750x422/625204_436a_3.jpg",price:"₩17,000",link:"https://www.udemy.com/course/the-web-developer-bootcamp/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx"},{id:2,title:"Python for Data Science and Machine Learning Bootcamp",instructor:"Jose Portilla",description:"파이썬으로 데이터 과학과 머신러닝의 기초를 완벽하게 마스터하세요.",image:"https://img-c.udemycdn.com/course/240x135/903744_8eb2.jpg",price:"₩19,000",link:"https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx"},{id:3,title:"CSS - The Complete Guide 2025 (incl. Flexbox, Grid & Sass)",instructor:"Maximilian Schwarzmüller",description:"HTML과 CSS의 심층적인 이해를 통해 웹 디자인 스킬을 향상시키세요.",image:"https://img-c.udemycdn.com/course/240x135/1561458_7f3b_2.jpg",price:"₩12,000",link:"https://www.udemy.com/course/the-complete-guide-to-dhtml-and-css/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx"},{id:4,title:"AWS Certified Solutions Architect - Associate",instructor:"Stephane Maarek",description:"가장 인기 있는 클라우드 자격증, AWS SAA 시험을 위한 완벽 대비 강의.",image:"https://img-c.udemycdn.com/course/240x135/2196488_8fc7_10.jpg",price:"₩22,000",link:"https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c02/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx"},{id:5,title:"The Complete 2025 Web Development Bootcamp",instructor:"Angela Yu",description:"풀스택 웹 개발자가 되기 위한 종합 부트캠프. 100일 만에 개발 전문가로 변신!",image:"https://img-c.udemycdn.com/course/240x135/1565838_e54e_18.jpg",price:"₩18,000",link:"https://www.udemy.com/course/the-complete-web-development-bootcamp/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx"},{id:6,title:"【한글자막】 JavaScript 알고리즘 & 자료구조 마스터클래스",instructor:"Colt Steele",description:"JavaScript로 알고리즘과 자료구조를 깊이 있게 배우고 문제 해결 능력을 키웁니다.",image:"https://img-c.udemycdn.com/course/240x135/4305113_68d5_4.jpg",price:"₩15,000",link:"https://www.udemy.com/course/best-javascript-data-structures/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx"},{id:7,title:"Modern React with Redux",instructor:"Stephen Grider",description:"React와 Redux를 사용하여 현대적인 웹 애플리케이션을 구축하는 방법을 배웁니다.",image:"https://img-c.udemycdn.com/course/240x135/705264_caa9_13.jpg",price:"₩20,000",link:"https://www.udemy.com/course/react-redux/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx"},{id:8,title:"Complete Python Pro Bootcamp for 2025",instructor:"Angela Yu",description:"파이썬 초보자를 위한 100일 코딩 챌린지. 웹 개발, 게임, 앱 등 다양한 프로젝트를 만듭니다.",image:"https://img-c.udemycdn.com/course/240x135/2776760_f176_10.jpg",price:"₩16,000",link:"https://www.udemy.com/course/100-days-of-code/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx"}],S=[{id:"frontend-developer",title:"프론트엔드 개발자 로드맵",description:"웹사이트의 사용자 인터페이스를 구축하고, 사용자 경험을 책임지는 프론트엔드 개발자가 되기 위한 체계적인 학습 경로입니다. HTML, CSS, JavaScript 기초부터 React/Vue/Angular 프레임워크 활용까지 커버합니다.",image:"https://img-c.udemycdn.com/course/240x135/625204_436a_3.jpg",careers:["웹 개발자","프론트엔드 엔지니어","UI 개발자"],sections:[{sectionTitle:"STEP 1: 웹 개발 핵심 기초 (HTML, CSS, JavaScript)",courses:[{udemyCourseId:"the-web-developer-bootcamp",title:"The Web Developer Bootcamp 2025",instructor:"Colt Steele",link:"https://www.udemy.com/course/the-web-developer-bootcamp/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"웹 개발의 가장 기본적인 언어인 HTML, CSS, JavaScript를 탄탄하게 배우는 올인원 강의입니다. 웹사이트를 직접 만들어보며 실력을 키울 수 있습니다.",skills:["HTML5","CSS3","JavaScript (ES6+)"],image:"https://img-c.udemycdn.com/course/240x135/625204_436a_3.jpg"},{udemyCourseId:"complete-javascript-course",title:"The Complete JavaScript Course 2025: From Zero to Expert!",instructor:"Jonas Schmedtmann",link:"https://www.udemy.com/course/the-complete-javascript-course/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"자바스크립트의 핵심 개념부터 비동기 프로그래밍, 객체 지향 프로그래밍까지 심도 있게 다룹니다. 실전 프로젝트를 통해 실제 애플리케이션을 개발하는 능력을 길러줍니다.",skills:["JavaScript (Advanced)","DOM Manipulation","AJAX","OOP"],image:"https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg"},{udemyCourseId:"javascript-algorithms-data-structures",title:"【한글자막】 JavaScript 알고리즘 & 자료구조 마스터클래스",instructor:"Colt Steele",link:"https://www.udemy.com/course/best-javascript-data-structures/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"JavaScript로 알고리즘과 자료구조를 깊이 있게 이해하고, 코딩 테스트 및 문제 해결 능력을 향상시킵니다.",skills:["Algorithms","Data Structures","Big O Notation"],image:"https://img-c.udemycdn.com/course/240x135/4305113_68d5_4.jpg"}]},{sectionTitle:"STEP 2: 프레임워크/라이브러리 학습 (React, Vue, Angular)",courses:[{udemyCourseId:"react-the-complete-guide",title:"【한글자막】 React 완벽 가이드 2025 with React Router & Redux",instructor:"Maximilian Schwarzmüller",link:"https://www.udemy.com/course/best-react/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"가장 인기 있는 JavaScript 라이브러리인 React를 마스터하세요. Hooks, React Router, Redux 등 최신 기능을 활용하여 복잡한 SPA(Single Page Application)를 구축하는 방법을 배웁니다.",skills:["ReactJS","React Hooks","Redux","React Router"],image:"https://img-c.udemycdn.com/course/240x135/4298905_17e3_2.jpg"},{udemyCourseId:"vue-js-3-composition-api",title:"【한글자막】 Vue - 완벽 가이드 (Router 및 Composition API 포함)",instructor:"Maximilian Schwarzmüller",link:"https://www.udemy.com/course/vue-router-composition-api/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"Vue.js 3의 모든 것을 배우고, Composition API, Vue Router, Pinia를 활용하여 강력한 웹 애플리케이션을 개발합니다.",skills:["Vue.js 3","Composition API","Vuex/Pinia","Vue Router"],image:"https://img-c.udemycdn.com/course/240x135/4861998_7208_4.jpg"},{udemyCourseId:"angular-the-complete-guide",title:"【한글자막】 Angular 완벽 가이드 : 기초 문법부터 TypeScript 기반 최신 문법까지",instructor:"Maximilian Schwarzmüller",link:"https://www.udemy.com/course/angular-2021/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"구글의 프레임워크 Angular를 이용해 견고하고 확장 가능한 웹 앱을 만드는 방법을 배웁니다.",skills:["Angular","TypeScript","RxJS","NGRX"],image:"https://img-c.udemycdn.com/course/240x135/4234850_7d29_4.jpg"}]},{sectionTitle:"STEP 3: 심화 학습 및 백엔드 지식",courses:[{udemyCourseId:"nextjs-react-nodejs",title:"【한글자막】 Next.js 15 & React - 완벽 가이드",instructor:"Maximilian Schwarzmüller",link:"https://www.udemy.com/course/nextjs-react-incl-two-paths/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"Next.js를 활용하여 서버 사이드 렌더링(SSR) 및 정적 사이트 생성(SSG)을 구현하는 방법을 배우고, 풀스택 애플리케이션을 구축합니다.",skills:["Next.js","SSR","SSG","API Routes"],image:"https://img-c.udemycdn.com/course/240x135/4699864_c9d5_3.jpg"},{udemyCourseId:"nodejs-express-mongodb",title:"Node.js, Express, MongoDB & More: The Complete Bootcamp 2025",instructor:"Jonas Schmedtmann",link:"https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"JavaScript 기반의 Node.js 환경에서 강력한 백엔드 API를 구축하고 데이터베이스(MongoDB)와 연동하는 방법을 배웁니다.",skills:["Node.js","Express.js","MongoDB","REST APIs","Authentication"],image:"https://img-c.udemycdn.com/course/240x135/1672410_9ff1_5.jpg"}]}]},{id:"data-scientist",title:"데이터 사이언티스트 로드맵",description:"데이터를 수집, 분석, 해석하고 이를 통해 비즈니스 인사이트를 도출하는 데이터 사이언티스트가 되기 위한 학습 경로입니다. 파이썬 기초부터 머신러닝, 딥러닝, 데이터 시각화까지 다룹니다.",image:"https://img-c.udemycdn.com/course/240x135/4294148_ba63_4.jpg",careers:["데이터 분석가","머신러닝 엔지니어","AI 개발자"],sections:[{sectionTitle:"STEP 1: 파이썬 프로그래밍 및 통계 기초",courses:[{udemyCourseId:"python-for-data-science",title:"Python for Data Science and Machine Learning Bootcamp",instructor:"Jose Portilla",link:"https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"데이터 과학에 필요한 파이썬 기본기를 다지고, Numpy, Pandas, Matplotlib 등 핵심 라이브러리를 배웁니다.",skills:["Python","Numpy","Pandas","Matplotlib","Seaborn"],image:"https://img-c.udemycdn.com/course/240x135/903744_8eb2.jpg"},{udemyCourseId:"statistics-for-data-science",title:"Statistics for Data Science and Business Analysis",instructor:"365 Careers",link:"https://www.udemy.com/course/statistics-for-data-science-and-business-analysis/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"데이터 과학에 필수적인 통계학 개념을 이해하고, 실제 비즈니스 문제에 적용하는 방법을 배웁니다.",skills:["Statistics","Probability","Hypothesis Testing","Regression"],image:"https://img-c.udemycdn.com/course/240x135/1298780_731f_4.jpg"}]},{sectionTitle:"STEP 2: 머신러닝 및 딥러닝",courses:[{udemyCourseId:"machine-learning-a-z",title:"【한글자막】 머신러닝의 모든 것 with AI, Python & R + ChatGPT Prize [2025]",instructor:"Kirill Eremenko, Hadelin de Ponteves",link:"https://www.udemy.com/course/machinelearning/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"좋은 성능의 머신러닝 모델을 만들기 위해 반드시 알아야 할 수학적 개념과 30여개 주요 모델 및 이론, 그리고 실습 예제들을 배웁니다.",skills:["Machine Learning","Regression","Classification","Scikit-learn"],image:"https://img-c.udemycdn.com/course/240x135/4294148_ba63_4.jpg"},{udemyCourseId:"deep-learning-pytorch",title:"PyTorch for Deep Learning Bootcamp",instructor:"Andrei Neagoie, Daniel Bourke",link:"https://www.udemy.com/course/pytorch-for-deep-learning/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"PyTorch 프레임워크를 사용하여 딥러닝 모델을 구축하고 훈련하는 방법을 배웁니다. 이미지 인식, 자연어 처리 등 다양한 딥러닝 프로젝트를 경험합니다.",skills:["Deep Learning","PyTorch","Neural Networks","CNN","RNN","GANs"],image:"https://img-c.udemycdn.com/course/240x135/4734870_4de8.jpg"}]},{sectionTitle:"STEP 3: 데이터 시각화 및 배포",courses:[{udemyCourseId:"tableau-desktop-mastery",title:"【한글자막】 태블로 Tableau 완벽 실전 교육! 커리어 업그레이드 하기",instructor:"Kirill Eremenko",link:"https://www.udemy.com/course/best-tableau-2020/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"데이터 시각화를 습득하여 고객 구매 행동, 판매 동향, 생산 방해 요소 같은 데이터 패턴을 시각화하는 방법을 배웁니다.",skills:["Tableau","Data Visualization","Dashboarding"],image:"https://img-c.udemycdn.com/course/240x135/4294154_9dde_4.jpg"}]}]},{id:"ui-ux-designer",title:"UI/UX 디자이너 로드맵",description:"사용자에게 직관적이고 만족스러운 경험을 제공하는 UI(사용자 인터페이스)와 UX(사용자 경험)를 디자인하는 전문가가 되기 위한 로드맵입니다. 디자인 원칙부터 툴 활용, 포트폴리오 구축까지 다룹니다.",image:"https://img-c.udemycdn.com/course/240x135/6650391_c37e_2.jpg",careers:["UI 디자이너","UX 디자이너","제품 디자이너"],sections:[{sectionTitle:"STEP 1: 디자인 기초 및 사용자 경험 이해",courses:[{udemyCourseId:"ux-ui-design-from-scratch",title:"Figma + Adobe XD Bootcamp: Learn UI/UX Design A–Z",instructor:"The Knowledge Hub",link:"https://www.udemy.com/course/figma-adobe-xd-bootcamp-learn-uiux-design-az/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"UI/UX 디자인의 핵심 원칙을 배우고, Figma, Adobe XD 같은 인기 디자인 툴을 활용하는 방법을 익힙니다.",skills:["UI Design","UX Design","Figma","Adobe XD","Prototyping"],image:"https://img-c.udemycdn.com/course/240x135/6650391_c37e_2.jpg"},{udemyCourseId:"design-thinking-process",title:"Complete Design Thinking Masterclass | eBook included",instructor:"UX Design Institute",link:"https://www.udemy.com/course/design-thinking-the-complete-certification-course/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"디자인 씽킹 프로세스를 통해 사용자 문제를 해결하고 혁신적인 솔루션을 도출하는 방법을 배웁니다.",skills:["Design Thinking","User Research","Ideation","Prototyping"],image:"https://img-c.udemycdn.com/course/240x135/1799242_1268_4.jpg"}]},{sectionTitle:"STEP 2: 인터랙션 디자인 및 포트폴리오",courses:[{udemyCourseId:"adobe-illustrator-cc",title:"Adobe Illustrator CC – Advanced Training Course",instructor:"Daniel Walter Scott",link:"https://www.udemy.com/course/adobe-illustrator-cc-advanced-training/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"일러스트레이터를 활용하여 벡터 그래픽 및 아이콘 디자인 스킬을 향상시킵니다.",skills:["Adobe Illustrator","Vector Graphics","Icon Design"],image:"https://img-c.udemycdn.com/course/240x135/1623798_db31_6.jpg"},{udemyCourseId:"build-a-portfolio",title:"Figma UI UX Design Essentials",instructor:"Daniel Walter Scott",link:"https://www.udemy.com/course/figma-ux-ui-design-user-experience-tutorial-course/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"성공적인 UI/UX 디자이너 포트폴리오를 만들고 취업 기회를 높이는 방법을 배웁니다.",skills:["Portfolio Creation","Case Study","Presentation Skills"],image:"https://img-c.udemycdn.com/course/240x135/4359576_b9e1_2.jpg"}]}]},{id:"fullstack-developer",title:"풀스택 개발자 로드맵",description:"프론트엔드와 백엔드 모두를 다루는 만능 풀스택 개발자가 되기 위한 로드맵입니다. 웹의 모든 계층을 이해하고 애플리케이션을 처음부터 끝까지 구축할 수 있는 능력을 키웁니다.",image:"https://img-c.udemycdn.com/course/240x135/1672410_9ff1_5.jpg",careers:["웹 풀스택 개발자","백엔드 개발자","데브옵스 엔지니어"],sections:[{sectionTitle:"STEP 1: 프론트엔드 핵심 (HTML, CSS, JS, React)",courses:[{udemyCourseId:"the-web-developer-bootcamp",title:"T【한글자막】 The Web Developer 부트캠프 2025",instructor:"Colt Steele",link:"https://www.udemy.com/course/the-web-developer-bootcamp-2021-korea/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"프론트엔드 개발의 기초를 탄탄하게 다지는 필수 강의입니다. 반응형 웹 디자인과 인터랙티브한 UI 구현 능력을 키웁니다.",skills:["HTML5","CSS3","JavaScript"],image:"https://img-c.udemycdn.com/course/240x135/4297574_42d1_4.jpg"},{udemyCourseId:"modern-react-with-redux",title:"Modern React with Redux",instructor:"Stephen Grider",link:"https://www.udemy.com/course/react-redux/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"최신 React와 Redux를 사용하여 복잡한 프론트엔드 애플리케이션 상태 관리를 배우고, SPA 개발 능력을 향상시킵니다.",skills:["React","Redux","Hooks","Context API"],image:"https://img-c.udemycdn.com/course/240x135/705264_caa9_13.jpg"}]},{sectionTitle:"STEP 2: 백엔드 개발 (Node.js, Express, MongoDB)",courses:[{udemyCourseId:"nodejs-express-mongodb",title:"Node.js, Express, MongoDB & More: The Complete Bootcamp 2025",instructor:"Jonas Schmedtmann",link:"https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"JavaScript 기반의 Node.js 환경에서 강력한 백엔드 API를 구축하고 데이터베이스(MongoDB)와 연동하는 방법을 배웁니다.",skills:["Node.js","Express.js","MongoDB","RESTful APIs","Authentication"],image:"https://img-c.udemycdn.com/course/240x135/1672410_9ff1_5.jpg"},{udemyCourseId:"mongodb-the-complete-developer-guide",title:"MongoDB - The Complete Developer's Guide 2025",instructor:"Maximilian Schwarzmüller",link:"https://www.udemy.com/course/mongodb-the-complete-developers-guide/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"NoSQL 데이터베이스인 MongoDB의 심층적인 이해를 통해 데이터 모델링, 쿼리 최적화, 데이터베이스 관리 기술을 습득합니다.",skills:["MongoDB","Mongoose","NoSQL","Database Design"],image:"https://img-c.udemycdn.com/course/240x135/1906852_93c6_2.jpg"}]},{sectionTitle:"STEP 3: 클라우드 및 배포",courses:[{udemyCourseId:"aws-certified-solutions-architect",title:"【한글자막】 AWS Certified Solutions Architect Associate시험합격! 2025",instructor:"Stephane Maarek",link:"https://www.udemy.com/course/best-aws-certified-solutions-architect-associate/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"클라우드 환경에 애플리케이션을 배포하고 관리하는 데 필요한 AWS 서비스를 이해하고 활용하는 방법을 배웁니다.",skills:["AWS EC2","S3","RDS","VPC","Lambda"],image:"https://img-c.udemycdn.com/course/240x135/4389576_a7d6_9.jpg"}]}]},{id:"digital-marketing-specialist",title:"디지털 마케팅 스페셜리스트 로드맵",description:"온라인 환경에서 제품과 서비스를 효과적으로 홍보하고 판매하는 디지털 마케팅 전문가가 되기 위한 로드맵입니다. SEO, 소셜 미디어 마케팅, 콘텐츠 마케팅, 광고 전략 등을 배웁니다.",image:"https://img-c.udemycdn.com/course/240x135/914296_3670_8.jpg",careers:["콘텐츠 마케터","SEO 전문가","소셜 미디어 매니저","퍼포먼스 마케터"],sections:[{sectionTitle:"STEP 1: 디지털 마케팅 기초 및 전략",courses:[{udemyCourseId:"digital-marketing-masterclass",title:"The Complete Digital Marketing Course - 12 Courses in 1",instructor:"Rob Percival, Daragh Walsh",link:"https://www.udemy.com/course/learn-digital-marketing-course/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"SEO, YouTube, Facebook, Instagram, Google Ads 등 디지털 마케팅의 모든 핵심 분야를 한 번에 배웁니다.",skills:["Digital Marketing","SEO","Social Media Marketing","Content Marketing","Email Marketing"],image:"https://img-c.udemycdn.com/course/240x135/914296_3670_8.jpg"}]},{sectionTitle:"STEP 2: SEO 및 콘텐츠 마케팅",courses:[{udemyCourseId:"seo-training-2025",title:"【한글자막】 SEO 트레이닝 마스터클래스 2025: 완전 초보자에서 완벽 전문가 되기",instructor:"Alex Genadinik",link:"https://www.udemy.com/course/master-seo-training/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"검색 엔진 최적화(SEO)의 모든 기술을 배우고, 웹사이트 트래픽을 늘리는 방법을 익힙니다.",skills:["SEO","Keyword Research","On-page SEO","Off-page SEO","Technical SEO"],image:"https://img-c.udemycdn.com/course/240x135/4563876_1177_11.jpg"},{udemyCourseId:"copywriting-course",title:"Alan Sharpe's 30-hr Copywriting Masterclass + ChatGPT tips",instructor:"Alan Sharpe",link:"https://www.udemy.com/course/alan-sharpe-copywriting-masterclass/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",description:"매력적인 콘텐츠를 작성하고, 독자의 마음을 사로잡는 카피라이팅 기술을 배웁니다.",skills:["Copywriting","Content Strategy","Storytelling","AI for Content"],image:"https://img-c.udemycdn.com/course/240x135/3026298_8fa8_13.jpg"}]}]}],C=[{id:1,title:"2025년 프론트엔드 개발 트렌드 5가지",description:"올해 주목해야 할 프론트엔드 기술과 라이브러리, 그리고 학습 방향에 대한 가이드입니다.",image:"https://images.unsplash.com/photo-1542062700-9b61ccbc1696?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",date:"2025.01.15",category:"개발 트렌드",link:"notes/frontend-trends-2025"},{id:2,title:"AI 시대, 개발자가 갖춰야 할 역량은?",description:"AI 기술이 빠르게 발전하는 시대에 개발자들이 어떻게 적응하고 성장해야 할지 고민해봅니다.",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",date:"2025.02.01",category:"커리어",link:"notes/ai-developer-skills"},{id:3,title:"클린 코드 작성을 위한 5가지 습관",description:"효율적이고 유지보수하기 쉬운 코드를 작성하는 데 도움이 되는 실용적인 팁들입니다.",image:"https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",date:"2025.02.20",category:"개발 팁",link:"notes/clean-code-habits"},{id:4,title:"TypeScript, 왜 배워야 할까?",description:"JavaScript의 상위 집합인 TypeScript가 왜 현대 웹 개발에서 중요해졌는지 알아봅니다.",image:"https://images.unsplash.com/photo-1699885960867-56d5f5262d38?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",date:"2025.03.05",category:"개발 언어",link:"notes/why-typescript"},{id:5,title:"프롬프트 엔지니어링, 이제는 필수!",description:"챗GPT 등 AI 도구를 효과적으로 활용하기 위한 프롬프트 엔지니어링의 기본과 팁.",image:"https://images.unsplash.com/photo-1675557009483-e6cf3867976b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",date:"2025.03.18",category:"AI",link:"notes/prompt-engineering"},{id:6,title:"Git & GitHub, 협업의 필수 도구",description:"버전 관리 시스템 Git과 GitHub를 활용한 효율적인 협업 방법에 대해 알아봅니다.",image:"https://images.unsplash.com/photo-1647166545674-ce28ce93bdca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",date:"2025.04.02",category:"개발 도구",link:"notes/git-github-guide"},{id:7,title:"백엔드 개발자에게 Node.js를 추천하는 이유",description:"JavaScript 기반의 Node.js가 백엔드 개발에 강력한 이유를 알아봅니다.",image:"https://images.unsplash.com/photo-1664526936810-ec0856d31b92?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",date:"2025.04.10",category:"개발 언어",link:"notes/why-nodejs"},{id:8,title:"REST API 설계 베스트 프랙티스",description:"효율적이고 일관된 REST API를 설계하기 위한 모범 사례들을 소개합니다.",image:"https://images.unsplash.com/photo-1634633111555-48907980b902?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",date:"2025.04.25",category:"개발 팁",link:"notes/rest-api-best-practices"},{id:9,title:"데이터 과학 로드맵 시작하기",description:"데이터 과학 분야로 진입하기 위한 첫 걸음과 필수 학습 내용을 안내합니다.",image:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",date:"2025.05.01",category:"커리어",link:"notes/data-science-roadmap-start"},{id:10,title:"생성형 AI 시대, 개발자의 역할 변화",description:"생성형 AI가 발전하면서 개발자에게 요구되는 역할과 능력에 대해 탐구합니다.",image:"https://images.unsplash.com/photo-1712002641088-9d76f9080889?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",date:"2025.07.09",category:"AI",link:"notes/developer-role-in-generative-ai"}];function P(F){n.innerHTML="",F.forEach(y=>{const p=document.createElement("div");p.classList.add("course-card"),p.innerHTML=`
                <img src="${y.image}" alt="${y.title}">
                <div class="course-card-content">
                    <h3>${y.title}</h3>
                    <p><strong>강사:</strong> ${y.instructor}</p>
                    <p>${y.description}</p>
                    <p class="price">${y.price}</p>
                    <a href="${y.link}" target="_blank" class="link">강의 보러가기</a>
                </div>
            `,n.appendChild(p)})}function N(){t.innerHTML="",S.forEach(F=>{const y=document.createElement("div");y.classList.add("roadmap-card"),y.dataset.roadmapId=F.id,y.innerHTML=`
                <img src="${F.image}" alt="${F.title}">
                <h3>${F.title}</h3>
                <p>${F.description.substring(0,80)}...</p>
                <p><strong>관련 직무:</strong> ${F.careers.join(", ")}</p>
            `,t.appendChild(y),y.addEventListener("click",()=>k(F.id))}),e.style.display="none",t.style.display="grid"}function k(F){const y=S.find(p=>p.id===F);y&&(r.textContent=y.title,s.textContent=y.description,o.innerHTML="",y.sections.forEach((p,g)=>{const _=document.createElement("div");_.classList.add("roadmap-section");const E=document.createElement("div");E.classList.add("roadmap-section-header"),E.innerHTML=`
                    <h4>${p.sectionTitle}</h4>
                    <span class="accordion-icon">➕️</span>
                `,_.appendChild(E);const I=document.createElement("div");I.classList.add("roadmap-section-content"),g===0?(I.style.display="block",E.querySelector(".accordion-icon").textContent="➖️"):I.style.display="none",p.courses.forEach(m=>{const wt=document.createElement("div");wt.classList.add("roadmap-course-item"),wt.innerHTML=`
                        <img src="${m.image}" alt="${m.title}">
                        <div class="roadmap-course-info">
                            <h5>${m.title}</h5>
                            <p><strong>강사:</strong> ${m.instructor}</p>
                            <p>${m.description}</p>
                            <p class="skills">
                                ${m.skills.map(ee=>`<span>${ee}</span>`).join("")}
                            </p>
                            <a href="${m.link}" target="_blank">Udemy 강의 보러가기</a>
                        </div>
                    `,I.appendChild(wt)}),_.appendChild(I),o.appendChild(_),E.addEventListener("click",()=>{const m=E.querySelector(".accordion-icon");I.style.display==="none"?(I.style.display="block",m.textContent="➖️"):(I.style.display="none",m.textContent="➕️")})}),t.style.display="none",e.style.display="block",u.scrollIntoView({behavior:"smooth"}))}let H=6,L=0,q=[];function Z(F,y=!1){y||(d.innerHTML="",L=0);const p=L*H;F.slice(p,p+H).forEach(_=>{const E=document.createElement("div");E.classList.add("note-card"),E.innerHTML=`
                <img src="${_.image}" alt="${_.title}">
                <div class="note-card-content">
                    <h3>${_.title}</h3>
                    <p>${_.description}</p>
                    <p class="meta">날짜: ${_.date} | 카테고리: ${_.category}</p>
                    <a href="${_.link}" class="read-more">자세히 보기</a>
                </div>
            `,d.appendChild(E)}),L++,F.length>L*H?f.style.display="block":f.style.display="none"}function Pt(F){v.forEach(y=>{y.classList.remove("active")}),document.querySelector(`.filter-button[data-category="${F}"]`).classList.add("active"),F==="all"?q=C:q=C.filter(y=>y.category===F),L=0,Z(q)}c.addEventListener("click",N),f.addEventListener("click",()=>{Z(q,!0)}),v.forEach(F=>{F.addEventListener("click",()=>{const y=F.dataset.category;Pt(y)})}),P(T),N(),Pt("all")});
