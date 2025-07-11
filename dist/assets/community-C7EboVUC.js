import"./script-D_fTHGtX.js";/* empty css              */const bh=()=>{};var la={};/**
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
 */const Lc=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Sh=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],u=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Fc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,u=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,m=o>>2,v=(o&3)<<4|u>>4;let I=(u&15)<<2|d>>6,b=d&63;h||(b=64,a||(I=64)),r.push(e[m],e[v],e[I],e[b])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Lc(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Sh(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],u=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const v=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||u==null||d==null||v==null)throw new Ch;const I=o<<2|u>>4;if(r.push(I),d!==64){const b=u<<4&240|d>>2;if(r.push(b),v!==64){const P=d<<6&192|v;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ch extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ph=function(n){const t=Lc(n);return Fc.encodeByteArray(t,!0)},br=function(n){return Ph(n).replace(/\./g,"")},Vh=function(n){try{return Fc.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */const kh=()=>Dh().__FIREBASE_DEFAULTS__,Nh=()=>{if(typeof process>"u"||typeof la>"u")return;const n=la.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Oh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Vh(n[1]);return t&&JSON.parse(t)},mi=()=>{try{return bh()||kh()||Nh()||Oh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},xh=n=>{var t,e;return(e=(t=mi())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Mh=n=>{const t=xh(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Uc=()=>{var n;return(n=mi())===null||n===void 0?void 0:n.config};/**
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
 */function pi(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Fh(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Uh(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[br(JSON.stringify(e)),br(JSON.stringify(a)),""].join(".")}const bn={};function Bh(){const n={prod:[],emulator:[]};for(const t of Object.keys(bn))bn[t]?n.emulator.push(t):n.prod.push(t);return n}function qh(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let ha=!1;function $h(n,t){if(typeof window>"u"||typeof document>"u"||!pi(window.location.host)||bn[n]===t||bn[n]||ha)return;bn[n]=t;function e(I){return`__firebase__banner__${I}`}const r="__firebase__banner",o=Bh().prod.length>0;function a(){const I=document.getElementById(r);I&&I.remove()}function u(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function h(I,b){I.setAttribute("width","24"),I.setAttribute("id",b),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function d(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{ha=!0,a()},I}function m(I,b){I.setAttribute("id",b),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function v(){const I=qh(r),b=e("text"),P=document.getElementById(b)||document.createElement("span"),O=e("learnmore"),D=document.getElementById(O)||document.createElement("a"),j=e("preprendIcon"),L=document.getElementById(j)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const B=I.element;u(B),m(D,O);const tt=d();h(L,j),B.append(L,P,D,tt),document.body.appendChild(B)}o?(P.innerText="Preview backend disconnected.",L.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",v):v()}/**
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
 */function jh(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zh(){var n;const t=(n=mi())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Gh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Hh(){return!zh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Bc(){try{return typeof indexedDB=="object"}catch{return!1}}function qc(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}function Kh(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Wh="FirebaseError";class Ie extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Wh,Object.setPrototypeOf(this,Ie.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qr.prototype.create)}}class qr{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?Qh(o,r):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new Ie(s,u,r)}}function Qh(n,t){return n.replace(Xh,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Xh=/\{\$([^}]+)}/g;function kn(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(da(o)&&da(a)){if(!kn(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function da(n){return n!==null&&typeof n=="object"}/**
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
 */const Yh=1e3,Jh=2,Zh=4*60*60*1e3,td=.5;function fa(n,t=Yh,e=Jh){const r=t*Math.pow(e,n),s=Math.round(td*r*(Math.random()-.5)*2);return Math.min(Zh,r+s)}/**
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
 */function Mt(n){return n&&n._delegate?n._delegate:n}class te{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ve="[DEFAULT]";/**
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
 */class ed{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Lh;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t?.identifier),s=(e=t?.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(rd(t))try{this.getOrInitializeService({instanceIdentifier:Ve})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=Ve){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ve){return this.instances.has(t)}getOptions(t=Ve){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nd(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ve){return this.component?this.component.multipleInstances?t:Ve:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nd(n){return n===Ve?void 0:n}function rd(n){return n.instantiationMode==="EAGER"}/**
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
 */var G;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(G||(G={}));const id={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},od=G.INFO,ad={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},cd=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=ad[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class gi{constructor(t){this.name=t,this._logLevel=od,this._logHandler=cd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in G))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?id[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...t),this._logHandler(this,G.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...t),this._logHandler(this,G.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,G.INFO,...t),this._logHandler(this,G.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,G.WARN,...t),this._logHandler(this,G.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...t),this._logHandler(this,G.ERROR,...t)}}const ud=(n,t)=>t.some(e=>n instanceof e);let ma,pa;function ld(){return ma||(ma=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hd(){return pa||(pa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $c=new WeakMap,zs=new WeakMap,jc=new WeakMap,ks=new WeakMap,_i=new WeakMap;function dd(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(ue(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&$c.set(e,n)}).catch(()=>{}),_i.set(t,n),t}function fd(n){if(zs.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});zs.set(n,t)}let Gs={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return zs.get(n);if(t==="objectStoreNames")return n.objectStoreNames||jc.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ue(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function md(n){Gs=n(Gs)}function pd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Ns(this),t,...e);return jc.set(r,t.sort?t.sort():[t]),ue(r)}:hd().includes(n)?function(...t){return n.apply(Ns(this),t),ue($c.get(this))}:function(...t){return ue(n.apply(Ns(this),t))}}function gd(n){return typeof n=="function"?pd(n):(n instanceof IDBTransaction&&fd(n),ud(n,ld())?new Proxy(n,Gs):n)}function ue(n){if(n instanceof IDBRequest)return dd(n);if(ks.has(n))return ks.get(n);const t=gd(n);return t!==n&&(ks.set(n,t),_i.set(t,n)),t}const Ns=n=>_i.get(n);function zc(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),u=ue(a);return r&&a.addEventListener("upgradeneeded",h=>{r(ue(a.result),h.oldVersion,h.newVersion,ue(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const _d=["get","getKey","getAll","getAllKeys","count"],yd=["put","add","delete","clear"],Os=new Map;function ga(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Os.get(t))return Os.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=yd.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||_d.includes(e)))return;const o=async function(a,...u){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[e](...u),s&&h.done]))[0]};return Os.set(t,o),o}md(n=>({...n,get:(t,e,r)=>ga(t,e)||n.get(t,e,r),has:(t,e)=>!!ga(t,e)||n.has(t,e)}));/**
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
 */class Ed{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(vd(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function vd(n){const t=n.getComponent();return t?.type==="VERSION"}const Hs="@firebase/app",_a="0.13.2";/**
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
 */const ee=new gi("@firebase/app"),Td="@firebase/app-compat",Id="@firebase/analytics-compat",wd="@firebase/analytics",Ad="@firebase/app-check-compat",Rd="@firebase/app-check",bd="@firebase/auth",Sd="@firebase/auth-compat",Cd="@firebase/database",Pd="@firebase/data-connect",Vd="@firebase/database-compat",Dd="@firebase/functions",kd="@firebase/functions-compat",Nd="@firebase/installations",Od="@firebase/installations-compat",xd="@firebase/messaging",Md="@firebase/messaging-compat",Ld="@firebase/performance",Fd="@firebase/performance-compat",Ud="@firebase/remote-config",Bd="@firebase/remote-config-compat",qd="@firebase/storage",$d="@firebase/storage-compat",jd="@firebase/firestore",zd="@firebase/ai",Gd="@firebase/firestore-compat",Hd="firebase",Kd="11.10.0";/**
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
 */const Ks="[DEFAULT]",Wd={[Hs]:"fire-core",[Td]:"fire-core-compat",[wd]:"fire-analytics",[Id]:"fire-analytics-compat",[Rd]:"fire-app-check",[Ad]:"fire-app-check-compat",[bd]:"fire-auth",[Sd]:"fire-auth-compat",[Cd]:"fire-rtdb",[Pd]:"fire-data-connect",[Vd]:"fire-rtdb-compat",[Dd]:"fire-fn",[kd]:"fire-fn-compat",[Nd]:"fire-iid",[Od]:"fire-iid-compat",[xd]:"fire-fcm",[Md]:"fire-fcm-compat",[Ld]:"fire-perf",[Fd]:"fire-perf-compat",[Ud]:"fire-rc",[Bd]:"fire-rc-compat",[qd]:"fire-gcs",[$d]:"fire-gcs-compat",[jd]:"fire-fst",[Gd]:"fire-fst-compat",[zd]:"fire-vertex","fire-js":"fire-js",[Hd]:"fire-js-all"};/**
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
 */const Sr=new Map,Qd=new Map,Ws=new Map;function ya(n,t){try{n.container.addComponent(t)}catch(e){ee.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function fe(n){const t=n.name;if(Ws.has(t))return ee.debug(`There were multiple attempts to register component ${t}.`),!1;Ws.set(t,n);for(const e of Sr.values())ya(e,n);for(const e of Qd.values())ya(e,n);return!0}function $n(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Xd(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Yd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},le=new qr("app","Firebase",Yd);/**
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
 */class Jd{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new te("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw le.create("app-deleted",{appName:this._name})}}/**
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
 */const Zd=Kd;function Gc(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ks,automaticDataCollectionEnabled:!0},t),s=r.name;if(typeof s!="string"||!s)throw le.create("bad-app-name",{appName:String(s)});if(e||(e=Uc()),!e)throw le.create("no-options");const o=Sr.get(s);if(o){if(kn(e,o.options)&&kn(r,o.config))return o;throw le.create("duplicate-app",{appName:s})}const a=new sd(s);for(const h of Ws.values())a.addComponent(h);const u=new Jd(e,r,a);return Sr.set(s,u),u}function Hc(n=Ks){const t=Sr.get(n);if(!t&&n===Ks&&Uc())return Gc();if(!t)throw le.create("no-app",{appName:n});return t}function zt(n,t,e){var r;let s=(r=Wd[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const u=[`Unable to register library "${s}" with version "${t}":`];o&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ee.warn(u.join(" "));return}fe(new te(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const tf="firebase-heartbeat-database",ef=1,Nn="firebase-heartbeat-store";let xs=null;function Kc(){return xs||(xs=zc(tf,ef,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Nn)}catch(e){console.warn(e)}}}}).catch(n=>{throw le.create("idb-open",{originalErrorMessage:n.message})})),xs}async function nf(n){try{const e=(await Kc()).transaction(Nn),r=await e.objectStore(Nn).get(Wc(n));return await e.done,r}catch(t){if(t instanceof Ie)ee.warn(t.message);else{const e=le.create("idb-get",{originalErrorMessage:t?.message});ee.warn(e.message)}}}async function Ea(n,t){try{const r=(await Kc()).transaction(Nn,"readwrite");await r.objectStore(Nn).put(t,Wc(n)),await r.done}catch(e){if(e instanceof Ie)ee.warn(e.message);else{const r=le.create("idb-set",{originalErrorMessage:e?.message});ee.warn(r.message)}}}function Wc(n){return`${n.name}!${n.options.appId}`}/**
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
 */const rf=1024,sf=30;class of{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new cf(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=va();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>sf){const a=uf(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ee.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=va(),{heartbeatsToSend:r,unsentEntries:s}=af(this._heartbeatsCache.heartbeats),o=br(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return ee.warn(e),""}}}function va(){return new Date().toISOString().substring(0,10)}function af(n,t=rf){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Ta(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Ta(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class cf{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bc()?qc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await nf(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ea(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ea(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Ta(n){return br(JSON.stringify({version:2,heartbeats:n})).length}function uf(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function lf(n){fe(new te("platform-logger",t=>new Ed(t),"PRIVATE")),fe(new te("heartbeat",t=>new of(t),"PRIVATE")),zt(Hs,_a,n),zt(Hs,_a,"esm2017"),zt("fire-js","")}lf("");var hf="firebase",df="11.10.0";/**
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
 */zt(hf,df,"app");const Qc="@firebase/installations",yi="0.6.18";/**
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
 */const Xc=1e4,Yc=`w:${yi}`,Jc="FIS_v2",ff="https://firebaseinstallations.googleapis.com/v1",mf=60*60*1e3,pf="installations",gf="Installations";/**
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
 */const _f={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},xe=new qr(pf,gf,_f);function Zc(n){return n instanceof Ie&&n.code.includes("request-failed")}/**
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
 */function tu({projectId:n}){return`${ff}/projects/${n}/installations`}function eu(n){return{token:n.token,requestStatus:2,expiresIn:Ef(n.expiresIn),creationTime:Date.now()}}async function nu(n,t){const r=(await t.json()).error;return xe.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ru({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function yf(n,{refreshToken:t}){const e=ru(n);return e.append("Authorization",vf(t)),e}async function su(n){const t=await n();return t.status>=500&&t.status<600?n():t}function Ef(n){return Number(n.replace("s","000"))}function vf(n){return`${Jc} ${n}`}/**
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
 */async function Tf({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const r=tu(n),s=ru(n),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={fid:e,authVersion:Jc,appId:n.appId,sdkVersion:Yc},u={method:"POST",headers:s,body:JSON.stringify(a)},h=await su(()=>fetch(r,u));if(h.ok){const d=await h.json();return{fid:d.fid||e,registrationStatus:2,refreshToken:d.refreshToken,authToken:eu(d.authToken)}}else throw await nu("Create Installation",h)}/**
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
 */function iu(n){return new Promise(t=>{setTimeout(t,n)})}/**
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
 */function If(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const wf=/^[cdef][\w-]{21}$/,Qs="";function Af(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=Rf(n);return wf.test(e)?e:Qs}catch{return Qs}}function Rf(n){return If(n).substr(0,22)}/**
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
 */function $r(n){return`${n.appName}!${n.appId}`}/**
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
 */const ou=new Map;function au(n,t){const e=$r(n);cu(e,t),bf(e,t)}function cu(n,t){const e=ou.get(n);if(e)for(const r of e)r(t)}function bf(n,t){const e=Sf();e&&e.postMessage({key:n,fid:t}),Cf()}let De=null;function Sf(){return!De&&"BroadcastChannel"in self&&(De=new BroadcastChannel("[Firebase] FID Change"),De.onmessage=n=>{cu(n.data.key,n.data.fid)}),De}function Cf(){ou.size===0&&De&&(De.close(),De=null)}/**
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
 */const Pf="firebase-installations-database",Vf=1,Me="firebase-installations-store";let Ms=null;function Ei(){return Ms||(Ms=zc(Pf,Vf,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(Me)}}})),Ms}async function Cr(n,t){const e=$r(n),s=(await Ei()).transaction(Me,"readwrite"),o=s.objectStore(Me),a=await o.get(e);return await o.put(t,e),await s.done,(!a||a.fid!==t.fid)&&au(n,t.fid),t}async function uu(n){const t=$r(n),r=(await Ei()).transaction(Me,"readwrite");await r.objectStore(Me).delete(t),await r.done}async function jr(n,t){const e=$r(n),s=(await Ei()).transaction(Me,"readwrite"),o=s.objectStore(Me),a=await o.get(e),u=t(a);return u===void 0?await o.delete(e):await o.put(u,e),await s.done,u&&(!a||a.fid!==u.fid)&&au(n,u.fid),u}/**
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
 */async function vi(n){let t;const e=await jr(n.appConfig,r=>{const s=Df(r),o=kf(n,s);return t=o.registrationPromise,o.installationEntry});return e.fid===Qs?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function Df(n){const t=n||{fid:Af(),registrationStatus:0};return lu(t)}function kf(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(xe.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Nf(n,e);return{installationEntry:e,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Of(n)}:{installationEntry:t}}async function Nf(n,t){try{const e=await Tf(n,t);return Cr(n.appConfig,e)}catch(e){throw Zc(e)&&e.customData.serverCode===409?await uu(n.appConfig):await Cr(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function Of(n){let t=await Ia(n.appConfig);for(;t.registrationStatus===1;)await iu(100),t=await Ia(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:r}=await vi(n);return r||e}return t}function Ia(n){return jr(n,t=>{if(!t)throw xe.create("installation-not-found");return lu(t)})}function lu(n){return xf(n)?{fid:n.fid,registrationStatus:0}:n}function xf(n){return n.registrationStatus===1&&n.registrationTime+Xc<Date.now()}/**
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
 */async function Mf({appConfig:n,heartbeatServiceProvider:t},e){const r=Lf(n,e),s=yf(n,e),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={installation:{sdkVersion:Yc,appId:n.appId}},u={method:"POST",headers:s,body:JSON.stringify(a)},h=await su(()=>fetch(r,u));if(h.ok){const d=await h.json();return eu(d)}else throw await nu("Generate Auth Token",h)}function Lf(n,{fid:t}){return`${tu(n)}/${t}/authTokens:generate`}/**
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
 */async function Ti(n,t=!1){let e;const r=await jr(n.appConfig,o=>{if(!hu(o))throw xe.create("not-registered");const a=o.authToken;if(!t&&Bf(a))return o;if(a.requestStatus===1)return e=Ff(n,t),o;{if(!navigator.onLine)throw xe.create("app-offline");const u=$f(o);return e=Uf(n,u),u}});return e?await e:r.authToken}async function Ff(n,t){let e=await wa(n.appConfig);for(;e.authToken.requestStatus===1;)await iu(100),e=await wa(n.appConfig);const r=e.authToken;return r.requestStatus===0?Ti(n,t):r}function wa(n){return jr(n,t=>{if(!hu(t))throw xe.create("not-registered");const e=t.authToken;return jf(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Uf(n,t){try{const e=await Mf(n,t),r=Object.assign(Object.assign({},t),{authToken:e});return await Cr(n.appConfig,r),e}catch(e){if(Zc(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await uu(n.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Cr(n.appConfig,r)}throw e}}function hu(n){return n!==void 0&&n.registrationStatus===2}function Bf(n){return n.requestStatus===2&&!qf(n)}function qf(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+mf}function $f(n){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:t})}function jf(n){return n.requestStatus===1&&n.requestTime+Xc<Date.now()}/**
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
 */async function zf(n){const t=n,{installationEntry:e,registrationPromise:r}=await vi(t);return r?r.catch(console.error):Ti(t).catch(console.error),e.fid}/**
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
 */async function Gf(n,t=!1){const e=n;return await Hf(e),(await Ti(e,t)).token}async function Hf(n){const{registrationPromise:t}=await vi(n);t&&await t}/**
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
 */function Kf(n){if(!n||!n.options)throw Ls("App Configuration");if(!n.name)throw Ls("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw Ls(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Ls(n){return xe.create("missing-app-config-values",{valueName:n})}/**
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
 */const du="installations",Wf="installations-internal",Qf=n=>{const t=n.getProvider("app").getImmediate(),e=Kf(t),r=$n(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Xf=n=>{const t=n.getProvider("app").getImmediate(),e=$n(t,du).getImmediate();return{getId:()=>zf(e),getToken:s=>Gf(e,s)}};function Yf(){fe(new te(du,Qf,"PUBLIC")),fe(new te(Wf,Xf,"PRIVATE"))}Yf();zt(Qc,yi);zt(Qc,yi,"esm2017");/**
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
 */const Pr="analytics",Jf="firebase_id",Zf="origin",tm=60*1e3,em="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ii="https://www.googletagmanager.com/gtag/js";/**
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
 */const Vt=new gi("@firebase/analytics");/**
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
 */const nm={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Nt=new qr("analytics","Analytics",nm);/**
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
 */function rm(n){if(!n.startsWith(Ii)){const t=Nt.create("invalid-gtag-resource",{gtagURL:n});return Vt.warn(t.message),""}return n}function fu(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function sm(n,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(n,t)),e}function im(n,t){const e=sm("firebase-js-sdk-policy",{createScriptURL:rm}),r=document.createElement("script"),s=`${Ii}?l=${n}&id=${t}`;r.src=e?e?.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function om(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function am(n,t,e,r,s,o){const a=r[s];try{if(a)await t[a];else{const h=(await fu(e)).find(d=>d.measurementId===s);h&&await t[h.appId]}}catch(u){Vt.error(u)}n("config",s,o)}async function cm(n,t,e,r,s){try{let o=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const u=await fu(e);for(const h of a){const d=u.find(v=>v.measurementId===h),m=d&&t[d.appId];if(m)o.push(m);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),n("event",r,s||{})}catch(o){Vt.error(o)}}function um(n,t,e,r){async function s(o,...a){try{if(o==="event"){const[u,h]=a;await cm(n,t,e,u,h)}else if(o==="config"){const[u,h]=a;await am(n,t,e,r,u,h)}else if(o==="consent"){const[u,h]=a;n("consent",u,h)}else if(o==="get"){const[u,h,d]=a;n("get",u,h,d)}else if(o==="set"){const[u]=a;n("set",u)}else n(o,...a)}catch(u){Vt.error(u)}}return s}function lm(n,t,e,r,s){let o=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=um(o,n,t,e),{gtagCore:o,wrappedGtag:window[s]}}function hm(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Ii)&&e.src.includes(n))return e;return null}/**
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
 */const dm=30,fm=1e3;class mm{constructor(t={},e=fm){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const mu=new mm;function pm(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function gm(n){var t;const{appId:e,apiKey:r}=n,s={method:"GET",headers:pm(r)},o=em.replace("{app-id}",e),a=await fetch(o,s);if(a.status!==200&&a.status!==304){let u="";try{const h=await a.json();!((t=h.error)===null||t===void 0)&&t.message&&(u=h.error.message)}catch{}throw Nt.create("config-fetch-failed",{httpStatus:a.status,responseMessage:u})}return a.json()}async function _m(n,t=mu,e){const{appId:r,apiKey:s,measurementId:o}=n.options;if(!r)throw Nt.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:r};throw Nt.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new vm;return setTimeout(async()=>{u.abort()},tm),pu({appId:r,apiKey:s,measurementId:o},a,u,t)}async function pu(n,{throttleEndTimeMillis:t,backoffCount:e},r,s=mu){var o;const{appId:a,measurementId:u}=n;try{await ym(r,t)}catch(h){if(u)return Vt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${h?.message}]`),{appId:a,measurementId:u};throw h}try{const h=await gm(n);return s.deleteThrottleMetadata(a),h}catch(h){const d=h;if(!Em(d)){if(s.deleteThrottleMetadata(a),u)return Vt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${d?.message}]`),{appId:a,measurementId:u};throw h}const m=Number((o=d?.customData)===null||o===void 0?void 0:o.httpStatus)===503?fa(e,s.intervalMillis,dm):fa(e,s.intervalMillis),v={throttleEndTimeMillis:Date.now()+m,backoffCount:e+1};return s.setThrottleMetadata(a,v),Vt.debug(`Calling attemptFetch again in ${m} millis`),pu(n,v,r,s)}}function ym(n,t){return new Promise((e,r)=>{const s=Math.max(t-Date.now(),0),o=setTimeout(e,s);n.addEventListener(()=>{clearTimeout(o),r(Nt.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Em(n){if(!(n instanceof Ie)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class vm{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Tm(n,t,e,r,s){if(s&&s.global){n("event",e,r);return}else{const o=await t,a=Object.assign(Object.assign({},r),{send_to:o});n("event",e,a)}}/**
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
 */async function Im(){if(Bc())try{await qc()}catch(n){return Vt.warn(Nt.create("indexeddb-unavailable",{errorInfo:n?.toString()}).message),!1}else return Vt.warn(Nt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function wm(n,t,e,r,s,o,a){var u;const h=_m(n);h.then(b=>{e[b.measurementId]=b.appId,n.options.measurementId&&b.measurementId!==n.options.measurementId&&Vt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${b.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(b=>Vt.error(b)),t.push(h);const d=Im().then(b=>{if(b)return r.getId()}),[m,v]=await Promise.all([h,d]);hm(o)||im(o,m.measurementId),s("js",new Date);const I=(u=a?.config)!==null&&u!==void 0?u:{};return I[Zf]="firebase",I.update=!0,v!=null&&(I[Jf]=v),s("config",m.measurementId,I),m.measurementId}/**
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
 */class Am{constructor(t){this.app=t}_delete(){return delete Sn[this.app.options.appId],Promise.resolve()}}let Sn={},Aa=[];const Ra={};let Fs="dataLayer",Rm="gtag",ba,gu,Sa=!1;function bm(){const n=[];if(Gh()&&n.push("This is a browser extension environment."),Kh()||n.push("Cookies are not available."),n.length>0){const t=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),e=Nt.create("invalid-analytics-context",{errorInfo:t});Vt.warn(e.message)}}function Sm(n,t,e){bm();const r=n.options.appId;if(!r)throw Nt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Vt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Nt.create("no-api-key");if(Sn[r]!=null)throw Nt.create("already-exists",{id:r});if(!Sa){om(Fs);const{wrappedGtag:o,gtagCore:a}=lm(Sn,Aa,Ra,Fs,Rm);gu=o,ba=a,Sa=!0}return Sn[r]=wm(n,Aa,Ra,t,ba,Fs,e),new Am(n)}function Cm(n=Hc()){n=Mt(n);const t=$n(n,Pr);return t.isInitialized()?t.getImmediate():Pm(n)}function Pm(n,t={}){const e=$n(n,Pr);if(e.isInitialized()){const s=e.getImmediate();if(kn(t,e.getOptions()))return s;throw Nt.create("already-initialized")}return e.initialize({options:t})}function Vm(n,t,e,r){n=Mt(n),Tm(gu,Sn[n.app.options.appId],t,e,r).catch(s=>Vt.error(s))}const Ca="@firebase/analytics",Pa="0.10.17";function Dm(){fe(new te(Pr,(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return Sm(r,s,e)},"PUBLIC")),fe(new te("analytics-internal",n,"PRIVATE")),zt(Ca,Pa),zt(Ca,Pa,"esm2017");function n(t){try{const e=t.getProvider(Pr).getImmediate();return{logEvent:(r,s,o)=>Vm(e,r,s,o)}}catch(e){throw Nt.create("interop-component-reg-failed",{reason:e})}}}Dm();var Va=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var he,_u;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(w,y){function p(){}p.prototype=y.prototype,w.D=y.prototype,w.prototype=new p,w.prototype.constructor=w,w.C=function(E,g,T){for(var _=Array(arguments.length-2),et=2;et<arguments.length;et++)_[et-2]=arguments[et];return y.prototype[g].apply(E,_)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,y,p){p||(p=0);var E=Array(16);if(typeof y=="string")for(var g=0;16>g;++g)E[g]=y.charCodeAt(p++)|y.charCodeAt(p++)<<8|y.charCodeAt(p++)<<16|y.charCodeAt(p++)<<24;else for(g=0;16>g;++g)E[g]=y[p++]|y[p++]<<8|y[p++]<<16|y[p++]<<24;y=w.g[0],p=w.g[1],g=w.g[2];var T=w.g[3],_=y+(T^p&(g^T))+E[0]+3614090360&4294967295;y=p+(_<<7&4294967295|_>>>25),_=T+(g^y&(p^g))+E[1]+3905402710&4294967295,T=y+(_<<12&4294967295|_>>>20),_=g+(p^T&(y^p))+E[2]+606105819&4294967295,g=T+(_<<17&4294967295|_>>>15),_=p+(y^g&(T^y))+E[3]+3250441966&4294967295,p=g+(_<<22&4294967295|_>>>10),_=y+(T^p&(g^T))+E[4]+4118548399&4294967295,y=p+(_<<7&4294967295|_>>>25),_=T+(g^y&(p^g))+E[5]+1200080426&4294967295,T=y+(_<<12&4294967295|_>>>20),_=g+(p^T&(y^p))+E[6]+2821735955&4294967295,g=T+(_<<17&4294967295|_>>>15),_=p+(y^g&(T^y))+E[7]+4249261313&4294967295,p=g+(_<<22&4294967295|_>>>10),_=y+(T^p&(g^T))+E[8]+1770035416&4294967295,y=p+(_<<7&4294967295|_>>>25),_=T+(g^y&(p^g))+E[9]+2336552879&4294967295,T=y+(_<<12&4294967295|_>>>20),_=g+(p^T&(y^p))+E[10]+4294925233&4294967295,g=T+(_<<17&4294967295|_>>>15),_=p+(y^g&(T^y))+E[11]+2304563134&4294967295,p=g+(_<<22&4294967295|_>>>10),_=y+(T^p&(g^T))+E[12]+1804603682&4294967295,y=p+(_<<7&4294967295|_>>>25),_=T+(g^y&(p^g))+E[13]+4254626195&4294967295,T=y+(_<<12&4294967295|_>>>20),_=g+(p^T&(y^p))+E[14]+2792965006&4294967295,g=T+(_<<17&4294967295|_>>>15),_=p+(y^g&(T^y))+E[15]+1236535329&4294967295,p=g+(_<<22&4294967295|_>>>10),_=y+(g^T&(p^g))+E[1]+4129170786&4294967295,y=p+(_<<5&4294967295|_>>>27),_=T+(p^g&(y^p))+E[6]+3225465664&4294967295,T=y+(_<<9&4294967295|_>>>23),_=g+(y^p&(T^y))+E[11]+643717713&4294967295,g=T+(_<<14&4294967295|_>>>18),_=p+(T^y&(g^T))+E[0]+3921069994&4294967295,p=g+(_<<20&4294967295|_>>>12),_=y+(g^T&(p^g))+E[5]+3593408605&4294967295,y=p+(_<<5&4294967295|_>>>27),_=T+(p^g&(y^p))+E[10]+38016083&4294967295,T=y+(_<<9&4294967295|_>>>23),_=g+(y^p&(T^y))+E[15]+3634488961&4294967295,g=T+(_<<14&4294967295|_>>>18),_=p+(T^y&(g^T))+E[4]+3889429448&4294967295,p=g+(_<<20&4294967295|_>>>12),_=y+(g^T&(p^g))+E[9]+568446438&4294967295,y=p+(_<<5&4294967295|_>>>27),_=T+(p^g&(y^p))+E[14]+3275163606&4294967295,T=y+(_<<9&4294967295|_>>>23),_=g+(y^p&(T^y))+E[3]+4107603335&4294967295,g=T+(_<<14&4294967295|_>>>18),_=p+(T^y&(g^T))+E[8]+1163531501&4294967295,p=g+(_<<20&4294967295|_>>>12),_=y+(g^T&(p^g))+E[13]+2850285829&4294967295,y=p+(_<<5&4294967295|_>>>27),_=T+(p^g&(y^p))+E[2]+4243563512&4294967295,T=y+(_<<9&4294967295|_>>>23),_=g+(y^p&(T^y))+E[7]+1735328473&4294967295,g=T+(_<<14&4294967295|_>>>18),_=p+(T^y&(g^T))+E[12]+2368359562&4294967295,p=g+(_<<20&4294967295|_>>>12),_=y+(p^g^T)+E[5]+4294588738&4294967295,y=p+(_<<4&4294967295|_>>>28),_=T+(y^p^g)+E[8]+2272392833&4294967295,T=y+(_<<11&4294967295|_>>>21),_=g+(T^y^p)+E[11]+1839030562&4294967295,g=T+(_<<16&4294967295|_>>>16),_=p+(g^T^y)+E[14]+4259657740&4294967295,p=g+(_<<23&4294967295|_>>>9),_=y+(p^g^T)+E[1]+2763975236&4294967295,y=p+(_<<4&4294967295|_>>>28),_=T+(y^p^g)+E[4]+1272893353&4294967295,T=y+(_<<11&4294967295|_>>>21),_=g+(T^y^p)+E[7]+4139469664&4294967295,g=T+(_<<16&4294967295|_>>>16),_=p+(g^T^y)+E[10]+3200236656&4294967295,p=g+(_<<23&4294967295|_>>>9),_=y+(p^g^T)+E[13]+681279174&4294967295,y=p+(_<<4&4294967295|_>>>28),_=T+(y^p^g)+E[0]+3936430074&4294967295,T=y+(_<<11&4294967295|_>>>21),_=g+(T^y^p)+E[3]+3572445317&4294967295,g=T+(_<<16&4294967295|_>>>16),_=p+(g^T^y)+E[6]+76029189&4294967295,p=g+(_<<23&4294967295|_>>>9),_=y+(p^g^T)+E[9]+3654602809&4294967295,y=p+(_<<4&4294967295|_>>>28),_=T+(y^p^g)+E[12]+3873151461&4294967295,T=y+(_<<11&4294967295|_>>>21),_=g+(T^y^p)+E[15]+530742520&4294967295,g=T+(_<<16&4294967295|_>>>16),_=p+(g^T^y)+E[2]+3299628645&4294967295,p=g+(_<<23&4294967295|_>>>9),_=y+(g^(p|~T))+E[0]+4096336452&4294967295,y=p+(_<<6&4294967295|_>>>26),_=T+(p^(y|~g))+E[7]+1126891415&4294967295,T=y+(_<<10&4294967295|_>>>22),_=g+(y^(T|~p))+E[14]+2878612391&4294967295,g=T+(_<<15&4294967295|_>>>17),_=p+(T^(g|~y))+E[5]+4237533241&4294967295,p=g+(_<<21&4294967295|_>>>11),_=y+(g^(p|~T))+E[12]+1700485571&4294967295,y=p+(_<<6&4294967295|_>>>26),_=T+(p^(y|~g))+E[3]+2399980690&4294967295,T=y+(_<<10&4294967295|_>>>22),_=g+(y^(T|~p))+E[10]+4293915773&4294967295,g=T+(_<<15&4294967295|_>>>17),_=p+(T^(g|~y))+E[1]+2240044497&4294967295,p=g+(_<<21&4294967295|_>>>11),_=y+(g^(p|~T))+E[8]+1873313359&4294967295,y=p+(_<<6&4294967295|_>>>26),_=T+(p^(y|~g))+E[15]+4264355552&4294967295,T=y+(_<<10&4294967295|_>>>22),_=g+(y^(T|~p))+E[6]+2734768916&4294967295,g=T+(_<<15&4294967295|_>>>17),_=p+(T^(g|~y))+E[13]+1309151649&4294967295,p=g+(_<<21&4294967295|_>>>11),_=y+(g^(p|~T))+E[4]+4149444226&4294967295,y=p+(_<<6&4294967295|_>>>26),_=T+(p^(y|~g))+E[11]+3174756917&4294967295,T=y+(_<<10&4294967295|_>>>22),_=g+(y^(T|~p))+E[2]+718787259&4294967295,g=T+(_<<15&4294967295|_>>>17),_=p+(T^(g|~y))+E[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(g+(_<<21&4294967295|_>>>11))&4294967295,w.g[2]=w.g[2]+g&4294967295,w.g[3]=w.g[3]+T&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var p=y-this.blockSize,E=this.B,g=this.h,T=0;T<y;){if(g==0)for(;T<=p;)s(this,w,T),T+=this.blockSize;if(typeof w=="string"){for(;T<y;)if(E[g++]=w.charCodeAt(T++),g==this.blockSize){s(this,E),g=0;break}}else for(;T<y;)if(E[g++]=w[T++],g==this.blockSize){s(this,E),g=0;break}}this.h=g,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var p=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=p&255,p/=256;for(this.u(w),w=Array(16),y=p=0;4>y;++y)for(var E=0;32>E;E+=8)w[p++]=this.g[y]>>>E&255;return w};function o(w,y){var p=u;return Object.prototype.hasOwnProperty.call(p,w)?p[w]:p[w]=y(w)}function a(w,y){this.h=y;for(var p=[],E=!0,g=w.length-1;0<=g;g--){var T=w[g]|0;E&&T==y||(p[g]=T,E=!1)}this.g=p}var u={};function h(w){return-128<=w&&128>w?o(w,function(y){return new a([y|0],0>y?-1:0)}):new a([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return v;if(0>w)return D(d(-w));for(var y=[],p=1,E=0;w>=p;E++)y[E]=w/p|0,p*=4294967296;return new a(y,0)}function m(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return D(m(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var p=d(Math.pow(y,8)),E=v,g=0;g<w.length;g+=8){var T=Math.min(8,w.length-g),_=parseInt(w.substring(g,g+T),y);8>T?(T=d(Math.pow(y,T)),E=E.j(T).add(d(_))):(E=E.j(p),E=E.add(d(_)))}return E}var v=h(0),I=h(1),b=h(16777216);n=a.prototype,n.m=function(){if(O(this))return-D(this).m();for(var w=0,y=1,p=0;p<this.g.length;p++){var E=this.i(p);w+=(0<=E?E:4294967296+E)*y,y*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(P(this))return"0";if(O(this))return"-"+D(this).toString(w);for(var y=d(Math.pow(w,6)),p=this,E="";;){var g=tt(p,y).g;p=j(p,g.j(y));var T=((0<p.g.length?p.g[0]:p.h)>>>0).toString(w);if(p=g,P(p))return T+E;for(;6>T.length;)T="0"+T;E=T+E}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function P(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function O(w){return w.h==-1}n.l=function(w){return w=j(this,w),O(w)?-1:P(w)?0:1};function D(w){for(var y=w.g.length,p=[],E=0;E<y;E++)p[E]=~w.g[E];return new a(p,~w.h).add(I)}n.abs=function(){return O(this)?D(this):this},n.add=function(w){for(var y=Math.max(this.g.length,w.g.length),p=[],E=0,g=0;g<=y;g++){var T=E+(this.i(g)&65535)+(w.i(g)&65535),_=(T>>>16)+(this.i(g)>>>16)+(w.i(g)>>>16);E=_>>>16,T&=65535,_&=65535,p[g]=_<<16|T}return new a(p,p[p.length-1]&-2147483648?-1:0)};function j(w,y){return w.add(D(y))}n.j=function(w){if(P(this)||P(w))return v;if(O(this))return O(w)?D(this).j(D(w)):D(D(this).j(w));if(O(w))return D(this.j(D(w)));if(0>this.l(b)&&0>w.l(b))return d(this.m()*w.m());for(var y=this.g.length+w.g.length,p=[],E=0;E<2*y;E++)p[E]=0;for(E=0;E<this.g.length;E++)for(var g=0;g<w.g.length;g++){var T=this.i(E)>>>16,_=this.i(E)&65535,et=w.i(g)>>>16,ft=w.i(g)&65535;p[2*E+2*g]+=_*ft,L(p,2*E+2*g),p[2*E+2*g+1]+=T*ft,L(p,2*E+2*g+1),p[2*E+2*g+1]+=_*et,L(p,2*E+2*g+1),p[2*E+2*g+2]+=T*et,L(p,2*E+2*g+2)}for(E=0;E<y;E++)p[E]=p[2*E+1]<<16|p[2*E];for(E=y;E<2*y;E++)p[E]=0;return new a(p,0)};function L(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function B(w,y){this.g=w,this.h=y}function tt(w,y){if(P(y))throw Error("division by zero");if(P(w))return new B(v,v);if(O(w))return y=tt(D(w),y),new B(D(y.g),D(y.h));if(O(y))return y=tt(w,D(y)),new B(D(y.g),y.h);if(30<w.g.length){if(O(w)||O(y))throw Error("slowDivide_ only works with positive integers.");for(var p=I,E=y;0>=E.l(w);)p=St(p),E=St(E);var g=lt(p,1),T=lt(E,1);for(E=lt(E,2),p=lt(p,2);!P(E);){var _=T.add(E);0>=_.l(w)&&(g=g.add(p),T=_),E=lt(E,1),p=lt(p,1)}return y=j(w,g.j(y)),new B(g,y)}for(g=v;0<=w.l(y);){for(p=Math.max(1,Math.floor(w.m()/y.m())),E=Math.ceil(Math.log(p)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),T=d(p),_=T.j(y);O(_)||0<_.l(w);)p-=E,T=d(p),_=T.j(y);P(T)&&(T=I),g=g.add(T),w=j(w,_)}return new B(g,w)}n.A=function(w){return tt(this,w).h},n.and=function(w){for(var y=Math.max(this.g.length,w.g.length),p=[],E=0;E<y;E++)p[E]=this.i(E)&w.i(E);return new a(p,this.h&w.h)},n.or=function(w){for(var y=Math.max(this.g.length,w.g.length),p=[],E=0;E<y;E++)p[E]=this.i(E)|w.i(E);return new a(p,this.h|w.h)},n.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),p=[],E=0;E<y;E++)p[E]=this.i(E)^w.i(E);return new a(p,this.h^w.h)};function St(w){for(var y=w.g.length+1,p=[],E=0;E<y;E++)p[E]=w.i(E)<<1|w.i(E-1)>>>31;return new a(p,w.h)}function lt(w,y){var p=y>>5;y%=32;for(var E=w.g.length-p,g=[],T=0;T<E;T++)g[T]=0<y?w.i(T+p)>>>y|w.i(T+p+1)<<32-y:w.i(T+p);return new a(g,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,_u=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,he=a}).apply(typeof Va<"u"?Va:typeof self<"u"?self:typeof window<"u"?window:{});var mr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yu,In,Eu,vr,Xs,vu,Tu,Iu;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,c,l){return i==Array.prototype||i==Object.prototype||(i[c]=l.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof mr=="object"&&mr];for(var c=0;c<i.length;++c){var l=i[c];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function s(i,c){if(c)t:{var l=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var A=i[f];if(!(A in l))break t;l=l[A]}i=i[i.length-1],f=l[i],c=c(f),c!=f&&c!=null&&t(l,i,{configurable:!0,writable:!0,value:c})}}function o(i,c){i instanceof String&&(i+="");var l=0,f=!1,A={next:function(){if(!f&&l<i.length){var R=l++;return{value:c(R,i[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(i){return i||function(){return o(this,function(c,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function h(i){var c=typeof i;return c=c!="object"?c:i?Array.isArray(i)?"array":c:"null",c=="array"||c=="object"&&typeof i.length=="number"}function d(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function m(i,c,l){return i.call.apply(i.bind,arguments)}function v(i,c,l){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),i.apply(c,A)}}return function(){return i.apply(c,arguments)}}function I(i,c,l){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:v,I.apply(null,arguments)}function b(i,c){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function P(i,c){function l(){}l.prototype=c.prototype,i.aa=c.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(f,A,R){for(var V=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)V[Q-2]=arguments[Q];return c.prototype[A].apply(f,V)}}function O(i){const c=i.length;if(0<c){const l=Array(c);for(let f=0;f<c;f++)l[f]=i[f];return l}return[]}function D(i,c){for(let l=1;l<arguments.length;l++){const f=arguments[l];if(h(f)){const A=i.length||0,R=f.length||0;i.length=A+R;for(let V=0;V<R;V++)i[A+V]=f[V]}else i.push(f)}}class j{constructor(c,l){this.i=c,this.j=l,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function L(i){return/^[\s\xa0]*$/.test(i)}function B(){var i=u.navigator;return i&&(i=i.userAgent)?i:""}function tt(i){return tt[" "](i),i}tt[" "]=function(){};var St=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function lt(i,c,l){for(const f in i)c.call(l,i[f],f,i)}function w(i,c){for(const l in i)c.call(void 0,i[l],l,i)}function y(i){const c={};for(const l in i)c[l]=i[l];return c}const p="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(i,c){let l,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(l in f)i[l]=f[l];for(let R=0;R<p.length;R++)l=p[R],Object.prototype.hasOwnProperty.call(f,l)&&(i[l]=f[l])}}function g(i){var c=1;i=i.split(":");const l=[];for(;0<c&&i.length;)l.push(i.shift()),c--;return i.length&&l.push(i.join(":")),l}function T(i){u.setTimeout(()=>{throw i},0)}function _(){var i=rt;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class et{constructor(){this.h=this.g=null}add(c,l){const f=ft.get();f.set(c,l),this.h?this.h.next=f:this.g=f,this.h=f}}var ft=new j(()=>new $t,i=>i.reset());class $t{constructor(){this.next=this.g=this.h=null}set(c,l){this.h=c,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let nt,H=!1,rt=new et,Xt=()=>{const i=u.Promise.resolve(void 0);nt=()=>{i.then(cs)}};var cs=()=>{for(var i;i=_();){try{i.h.call(i.g)}catch(l){T(l)}var c=ft;c.j(i),100>c.h&&(c.h++,i.next=c.g,c.g=i)}H=!1};function se(){this.s=this.s,this.C=this.C}se.prototype.s=!1,se.prototype.ma=function(){this.s||(this.s=!0,this.N())},se.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function yt(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}yt.prototype.h=function(){this.defaultPrevented=!0};var Kl=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};u.addEventListener("test",l,c),u.removeEventListener("test",l,c)}catch{}return i}();function an(i,c){if(yt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget){if(St){t:{try{tt(c.nodeName);var A=!0;break t}catch{}A=!1}A||(c=null)}}else l=="mouseover"?c=i.fromElement:l=="mouseout"&&(c=i.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Wl[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&an.aa.h.call(this)}}P(an,yt);var Wl={2:"touch",3:"pen",4:"mouse"};an.prototype.h=function(){an.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Qn="closure_listenable_"+(1e6*Math.random()|0),Ql=0;function Xl(i,c,l,f,A){this.listener=i,this.proxy=null,this.src=c,this.type=l,this.capture=!!f,this.ha=A,this.key=++Ql,this.da=this.fa=!1}function Xn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Yn(i){this.src=i,this.g={},this.h=0}Yn.prototype.add=function(i,c,l,f,A){var R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);var V=ls(i,c,f,A);return-1<V?(c=i[V],l||(c.fa=!1)):(c=new Xl(c,this.src,R,!!f,A),c.fa=l,i.push(c)),c};function us(i,c){var l=c.type;if(l in i.g){var f=i.g[l],A=Array.prototype.indexOf.call(f,c,void 0),R;(R=0<=A)&&Array.prototype.splice.call(f,A,1),R&&(Xn(c),i.g[l].length==0&&(delete i.g[l],i.h--))}}function ls(i,c,l,f){for(var A=0;A<i.length;++A){var R=i[A];if(!R.da&&R.listener==c&&R.capture==!!l&&R.ha==f)return A}return-1}var hs="closure_lm_"+(1e6*Math.random()|0),ds={};function lo(i,c,l,f,A){if(Array.isArray(c)){for(var R=0;R<c.length;R++)lo(i,c[R],l,f,A);return null}return l=mo(l),i&&i[Qn]?i.K(c,l,d(f)?!!f.capture:!1,A):Yl(i,c,l,!1,f,A)}function Yl(i,c,l,f,A,R){if(!c)throw Error("Invalid event type");var V=d(A)?!!A.capture:!!A,Q=ms(i);if(Q||(i[hs]=Q=new Yn(i)),l=Q.add(c,l,f,V,R),l.proxy)return l;if(f=Jl(),l.proxy=f,f.src=i,f.listener=l,i.addEventListener)Kl||(A=V),A===void 0&&(A=!1),i.addEventListener(c.toString(),f,A);else if(i.attachEvent)i.attachEvent(fo(c.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Jl(){function i(l){return c.call(i.src,i.listener,l)}const c=Zl;return i}function ho(i,c,l,f,A){if(Array.isArray(c))for(var R=0;R<c.length;R++)ho(i,c[R],l,f,A);else f=d(f)?!!f.capture:!!f,l=mo(l),i&&i[Qn]?(i=i.i,c=String(c).toString(),c in i.g&&(R=i.g[c],l=ls(R,l,f,A),-1<l&&(Xn(R[l]),Array.prototype.splice.call(R,l,1),R.length==0&&(delete i.g[c],i.h--)))):i&&(i=ms(i))&&(c=i.g[c.toString()],i=-1,c&&(i=ls(c,l,f,A)),(l=-1<i?c[i]:null)&&fs(l))}function fs(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[Qn])us(c.i,i);else{var l=i.type,f=i.proxy;c.removeEventListener?c.removeEventListener(l,f,i.capture):c.detachEvent?c.detachEvent(fo(l),f):c.addListener&&c.removeListener&&c.removeListener(f),(l=ms(c))?(us(l,i),l.h==0&&(l.src=null,c[hs]=null)):Xn(i)}}}function fo(i){return i in ds?ds[i]:ds[i]="on"+i}function Zl(i,c){if(i.da)i=!0;else{c=new an(c,this);var l=i.listener,f=i.ha||i.src;i.fa&&fs(i),i=l.call(f,c)}return i}function ms(i){return i=i[hs],i instanceof Yn?i:null}var ps="__closure_events_fn_"+(1e9*Math.random()>>>0);function mo(i){return typeof i=="function"?i:(i[ps]||(i[ps]=function(c){return i.handleEvent(c)}),i[ps])}function Et(){se.call(this),this.i=new Yn(this),this.M=this,this.F=null}P(Et,se),Et.prototype[Qn]=!0,Et.prototype.removeEventListener=function(i,c,l,f){ho(this,i,c,l,f)};function Rt(i,c){var l,f=i.F;if(f)for(l=[];f;f=f.F)l.push(f);if(i=i.M,f=c.type||c,typeof c=="string")c=new yt(c,i);else if(c instanceof yt)c.target=c.target||i;else{var A=c;c=new yt(f,i),E(c,A)}if(A=!0,l)for(var R=l.length-1;0<=R;R--){var V=c.g=l[R];A=Jn(V,f,!0,c)&&A}if(V=c.g=i,A=Jn(V,f,!0,c)&&A,A=Jn(V,f,!1,c)&&A,l)for(R=0;R<l.length;R++)V=c.g=l[R],A=Jn(V,f,!1,c)&&A}Et.prototype.N=function(){if(Et.aa.N.call(this),this.i){var i=this.i,c;for(c in i.g){for(var l=i.g[c],f=0;f<l.length;f++)Xn(l[f]);delete i.g[c],i.h--}}this.F=null},Et.prototype.K=function(i,c,l,f){return this.i.add(String(i),c,!1,l,f)},Et.prototype.L=function(i,c,l,f){return this.i.add(String(i),c,!0,l,f)};function Jn(i,c,l,f){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();for(var A=!0,R=0;R<c.length;++R){var V=c[R];if(V&&!V.da&&V.capture==l){var Q=V.listener,mt=V.ha||V.src;V.fa&&us(i.i,V),A=Q.call(mt,f)!==!1&&A}}return A&&!f.defaultPrevented}function po(i,c,l){if(typeof i=="function")l&&(i=I(i,l));else if(i&&typeof i.handleEvent=="function")i=I(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(i,c||0)}function go(i){i.g=po(()=>{i.g=null,i.i&&(i.i=!1,go(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class th extends se{constructor(c,l){super(),this.m=c,this.l=l,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:go(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function cn(i){se.call(this),this.h=i,this.g={}}P(cn,se);var _o=[];function yo(i){lt(i.g,function(c,l){this.g.hasOwnProperty(l)&&fs(c)},i),i.g={}}cn.prototype.N=function(){cn.aa.N.call(this),yo(this)},cn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var gs=u.JSON.stringify,eh=u.JSON.parse,nh=class{stringify(i){return u.JSON.stringify(i,void 0)}parse(i){return u.JSON.parse(i,void 0)}};function _s(){}_s.prototype.h=null;function Eo(i){return i.h||(i.h=i.i())}function vo(){}var un={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ys(){yt.call(this,"d")}P(ys,yt);function Es(){yt.call(this,"c")}P(Es,yt);var be={},To=null;function Zn(){return To=To||new Et}be.La="serverreachability";function Io(i){yt.call(this,be.La,i)}P(Io,yt);function ln(i){const c=Zn();Rt(c,new Io(c))}be.STAT_EVENT="statevent";function wo(i,c){yt.call(this,be.STAT_EVENT,i),this.stat=c}P(wo,yt);function bt(i){const c=Zn();Rt(c,new wo(c,i))}be.Ma="timingevent";function Ao(i,c){yt.call(this,be.Ma,i),this.size=c}P(Ao,yt);function hn(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){i()},c)}function dn(){this.g=!0}dn.prototype.xa=function(){this.g=!1};function rh(i,c,l,f,A,R){i.info(function(){if(i.g)if(R)for(var V="",Q=R.split("&"),mt=0;mt<Q.length;mt++){var K=Q[mt].split("=");if(1<K.length){var vt=K[0];K=K[1];var Tt=vt.split("_");V=2<=Tt.length&&Tt[1]=="type"?V+(vt+"="+K+"&"):V+(vt+"=redacted&")}}else V=null;else V=R;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+c+`
`+l+`
`+V})}function sh(i,c,l,f,A,R,V){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+c+`
`+l+`
`+R+" "+V})}function qe(i,c,l,f){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+oh(i,l)+(f?" "+f:"")})}function ih(i,c){i.info(function(){return"TIMEOUT: "+c})}dn.prototype.info=function(){};function oh(i,c){if(!i.g)return c;if(!c)return null;try{var l=JSON.parse(c);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var f=l[i];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var R=A[0];if(R!="noop"&&R!="stop"&&R!="close")for(var V=1;V<A.length;V++)A[V]=""}}}}return gs(l)}catch{return c}}var tr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ro={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},vs;function er(){}P(er,_s),er.prototype.g=function(){return new XMLHttpRequest},er.prototype.i=function(){return{}},vs=new er;function ie(i,c,l,f){this.j=i,this.i=c,this.l=l,this.R=f||1,this.U=new cn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new bo}function bo(){this.i=null,this.g="",this.h=!1}var So={},Ts={};function Is(i,c,l){i.L=1,i.v=ir(Yt(c)),i.m=l,i.P=!0,Co(i,null)}function Co(i,c){i.F=Date.now(),nr(i),i.A=Yt(i.v);var l=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),$o(l.i,"t",f),i.C=0,l=i.j.J,i.h=new bo,i.g=oa(i.j,l?c:null,!i.m),0<i.O&&(i.M=new th(I(i.Y,i,i.g),i.O)),c=i.U,l=i.g,f=i.ca;var A="readystatechange";Array.isArray(A)||(A&&(_o[0]=A.toString()),A=_o);for(var R=0;R<A.length;R++){var V=lo(l,A[R],f||c.handleEvent,!1,c.h||c);if(!V)break;c.g[V.key]=V}c=i.H?y(i.H):{},i.m?(i.u||(i.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,c)):(i.u="GET",i.g.ea(i.A,i.u,null,c)),ln(),rh(i.i,i.u,i.A,i.l,i.R,i.m)}ie.prototype.ca=function(i){i=i.target;const c=this.M;c&&Jt(i)==3?c.j():this.Y(i)},ie.prototype.Y=function(i){try{if(i==this.g)t:{const Tt=Jt(this.g);var c=this.g.Ba();const ze=this.g.Z();if(!(3>Tt)&&(Tt!=3||this.g&&(this.h.h||this.g.oa()||Qo(this.g)))){this.J||Tt!=4||c==7||(c==8||0>=ze?ln(3):ln(2)),ws(this);var l=this.g.Z();this.X=l;e:if(Po(this)){var f=Qo(this.g);i="";var A=f.length,R=Jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Se(this),fn(this);var V="";break e}this.h.i=new u.TextDecoder}for(c=0;c<A;c++)this.h.h=!0,i+=this.h.i.decode(f[c],{stream:!(R&&c==A-1)});f.length=0,this.h.g+=i,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=l==200,sh(this.i,this.u,this.A,this.l,this.R,Tt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var Q,mt=this.g;if((Q=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(Q)){var K=Q;break e}}K=null}if(l=K)qe(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,As(this,l);else{this.o=!1,this.s=3,bt(12),Se(this),fn(this);break t}}if(this.P){l=!0;let Lt;for(;!this.J&&this.C<V.length;)if(Lt=ah(this,V),Lt==Ts){Tt==4&&(this.s=4,bt(14),l=!1),qe(this.i,this.l,null,"[Incomplete Response]");break}else if(Lt==So){this.s=4,bt(15),qe(this.i,this.l,V,"[Invalid Chunk]"),l=!1;break}else qe(this.i,this.l,Lt,null),As(this,Lt);if(Po(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Tt!=4||V.length!=0||this.h.h||(this.s=1,bt(16),l=!1),this.o=this.o&&l,!l)qe(this.i,this.l,V,"[Invalid Chunked Response]"),Se(this),fn(this);else if(0<V.length&&!this.W){this.W=!0;var vt=this.j;vt.g==this&&vt.ba&&!vt.M&&(vt.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),Vs(vt),vt.M=!0,bt(11))}}else qe(this.i,this.l,V,null),As(this,V);Tt==4&&Se(this),this.o&&!this.J&&(Tt==4?na(this.j,this):(this.o=!1,nr(this)))}else Ah(this.g),l==400&&0<V.indexOf("Unknown SID")?(this.s=3,bt(12)):(this.s=0,bt(13)),Se(this),fn(this)}}}catch{}finally{}};function Po(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function ah(i,c){var l=i.C,f=c.indexOf(`
`,l);return f==-1?Ts:(l=Number(c.substring(l,f)),isNaN(l)?So:(f+=1,f+l>c.length?Ts:(c=c.slice(f,f+l),i.C=f+l,c)))}ie.prototype.cancel=function(){this.J=!0,Se(this)};function nr(i){i.S=Date.now()+i.I,Vo(i,i.I)}function Vo(i,c){if(i.B!=null)throw Error("WatchDog timer not null");i.B=hn(I(i.ba,i),c)}function ws(i){i.B&&(u.clearTimeout(i.B),i.B=null)}ie.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(ih(this.i,this.A),this.L!=2&&(ln(),bt(17)),Se(this),this.s=2,fn(this)):Vo(this,this.S-i)};function fn(i){i.j.G==0||i.J||na(i.j,i)}function Se(i){ws(i);var c=i.M;c&&typeof c.ma=="function"&&c.ma(),i.M=null,yo(i.U),i.g&&(c=i.g,i.g=null,c.abort(),c.ma())}function As(i,c){try{var l=i.j;if(l.G!=0&&(l.g==i||Rs(l.h,i))){if(!i.K&&Rs(l.h,i)&&l.G==3){try{var f=l.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)hr(l),ur(l);else break t;Ps(l),bt(18)}}else l.za=A[1],0<l.za-l.T&&37500>A[2]&&l.F&&l.v==0&&!l.C&&(l.C=hn(I(l.Za,l),6e3));if(1>=No(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else Pe(l,11)}else if((i.K||l.g==i)&&hr(l),!L(c))for(A=l.Da.g.parse(c),c=0;c<A.length;c++){let K=A[c];if(l.T=K[0],K=K[1],l.G==2)if(K[0]=="c"){l.K=K[1],l.ia=K[2];const vt=K[3];vt!=null&&(l.la=vt,l.j.info("VER="+l.la));const Tt=K[4];Tt!=null&&(l.Aa=Tt,l.j.info("SVER="+l.Aa));const ze=K[5];ze!=null&&typeof ze=="number"&&0<ze&&(f=1.5*ze,l.L=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const Lt=i.g;if(Lt){const fr=Lt.g?Lt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(fr){var R=f.h;R.g||fr.indexOf("spdy")==-1&&fr.indexOf("quic")==-1&&fr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(bs(R,R.h),R.h=null))}if(f.D){const Ds=Lt.g?Lt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ds&&(f.ya=Ds,Y(f.I,f.D,Ds))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),f=l;var V=i;if(f.qa=ia(f,f.J?f.ia:null,f.W),V.K){Oo(f.h,V);var Q=V,mt=f.L;mt&&(Q.I=mt),Q.B&&(ws(Q),nr(Q)),f.g=V}else ta(f);0<l.i.length&&lr(l)}else K[0]!="stop"&&K[0]!="close"||Pe(l,7);else l.G==3&&(K[0]=="stop"||K[0]=="close"?K[0]=="stop"?Pe(l,7):Cs(l):K[0]!="noop"&&l.l&&l.l.ta(K),l.v=0)}}ln(4)}catch{}}var ch=class{constructor(i,c){this.g=i,this.map=c}};function Do(i){this.l=i||10,u.PerformanceNavigationTiming?(i=u.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ko(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function No(i){return i.h?1:i.g?i.g.size:0}function Rs(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function bs(i,c){i.g?i.g.add(c):i.h=c}function Oo(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}Do.prototype.cancel=function(){if(this.i=xo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function xo(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const l of i.g.values())c=c.concat(l.D);return c}return O(i.i)}function uh(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var c=[],l=i.length,f=0;f<l;f++)c.push(i[f]);return c}c=[],l=0;for(f in i)c[l++]=i[f];return c}function lh(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var c=[];i=i.length;for(var l=0;l<i;l++)c.push(l);return c}c=[],l=0;for(const f in i)c[l++]=f;return c}}}function Mo(i,c){if(i.forEach&&typeof i.forEach=="function")i.forEach(c,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,c,void 0);else for(var l=lh(i),f=uh(i),A=f.length,R=0;R<A;R++)c.call(void 0,f[R],l&&l[R],i)}var Lo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hh(i,c){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var f=i[l].indexOf("="),A=null;if(0<=f){var R=i[l].substring(0,f);A=i[l].substring(f+1)}else R=i[l];c(R,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Ce(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Ce){this.h=i.h,rr(this,i.j),this.o=i.o,this.g=i.g,sr(this,i.s),this.l=i.l;var c=i.i,l=new gn;l.i=c.i,c.g&&(l.g=new Map(c.g),l.h=c.h),Fo(this,l),this.m=i.m}else i&&(c=String(i).match(Lo))?(this.h=!1,rr(this,c[1]||"",!0),this.o=mn(c[2]||""),this.g=mn(c[3]||"",!0),sr(this,c[4]),this.l=mn(c[5]||"",!0),Fo(this,c[6]||"",!0),this.m=mn(c[7]||"")):(this.h=!1,this.i=new gn(null,this.h))}Ce.prototype.toString=function(){var i=[],c=this.j;c&&i.push(pn(c,Uo,!0),":");var l=this.g;return(l||c=="file")&&(i.push("//"),(c=this.o)&&i.push(pn(c,Uo,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(pn(l,l.charAt(0)=="/"?mh:fh,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",pn(l,gh)),i.join("")};function Yt(i){return new Ce(i)}function rr(i,c,l){i.j=l?mn(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function sr(i,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);i.s=c}else i.s=null}function Fo(i,c,l){c instanceof gn?(i.i=c,_h(i.i,i.h)):(l||(c=pn(c,ph)),i.i=new gn(c,i.h))}function Y(i,c,l){i.i.set(c,l)}function ir(i){return Y(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function mn(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function pn(i,c,l){return typeof i=="string"?(i=encodeURI(i).replace(c,dh),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function dh(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Uo=/[#\/\?@]/g,fh=/[#\?:]/g,mh=/[#\?]/g,ph=/[#\?@]/g,gh=/#/g;function gn(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function oe(i){i.g||(i.g=new Map,i.h=0,i.i&&hh(i.i,function(c,l){i.add(decodeURIComponent(c.replace(/\+/g," ")),l)}))}n=gn.prototype,n.add=function(i,c){oe(this),this.i=null,i=$e(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(c),this.h+=1,this};function Bo(i,c){oe(i),c=$e(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function qo(i,c){return oe(i),c=$e(i,c),i.g.has(c)}n.forEach=function(i,c){oe(this),this.g.forEach(function(l,f){l.forEach(function(A){i.call(c,A,f,this)},this)},this)},n.na=function(){oe(this);const i=Array.from(this.g.values()),c=Array.from(this.g.keys()),l=[];for(let f=0;f<c.length;f++){const A=i[f];for(let R=0;R<A.length;R++)l.push(c[f])}return l},n.V=function(i){oe(this);let c=[];if(typeof i=="string")qo(this,i)&&(c=c.concat(this.g.get($e(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)c=c.concat(i[l])}return c},n.set=function(i,c){return oe(this),this.i=null,i=$e(this,i),qo(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},n.get=function(i,c){return i?(i=this.V(i),0<i.length?String(i[0]):c):c};function $o(i,c,l){Bo(i,c),0<l.length&&(i.i=null,i.g.set($e(i,c),O(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(var l=0;l<c.length;l++){var f=c[l];const R=encodeURIComponent(String(f)),V=this.V(f);for(f=0;f<V.length;f++){var A=R;V[f]!==""&&(A+="="+encodeURIComponent(String(V[f]))),i.push(A)}}return this.i=i.join("&")};function $e(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function _h(i,c){c&&!i.j&&(oe(i),i.i=null,i.g.forEach(function(l,f){var A=f.toLowerCase();f!=A&&(Bo(this,f),$o(this,A,l))},i)),i.j=c}function yh(i,c){const l=new dn;if(u.Image){const f=new Image;f.onload=b(ae,l,"TestLoadImage: loaded",!0,c,f),f.onerror=b(ae,l,"TestLoadImage: error",!1,c,f),f.onabort=b(ae,l,"TestLoadImage: abort",!1,c,f),f.ontimeout=b(ae,l,"TestLoadImage: timeout",!1,c,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else c(!1)}function Eh(i,c){const l=new dn,f=new AbortController,A=setTimeout(()=>{f.abort(),ae(l,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:f.signal}).then(R=>{clearTimeout(A),R.ok?ae(l,"TestPingServer: ok",!0,c):ae(l,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(A),ae(l,"TestPingServer: error",!1,c)})}function ae(i,c,l,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(l)}catch{}}function vh(){this.g=new nh}function Th(i,c,l){const f=l||"";try{Mo(i,function(A,R){let V=A;d(A)&&(V=gs(A)),c.push(f+R+"="+encodeURIComponent(V))})}catch(A){throw c.push(f+"type="+encodeURIComponent("_badmap")),A}}function or(i){this.l=i.Ub||null,this.j=i.eb||!1}P(or,_s),or.prototype.g=function(){return new ar(this.l,this.j)},or.prototype.i=function(i){return function(){return i}}({});function ar(i,c){Et.call(this),this.D=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(ar,Et),n=ar.prototype,n.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=c,this.readyState=1,yn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(c.body=i),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_n(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,yn(this)),this.g&&(this.readyState=3,yn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;jo(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function jo(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?_n(this):yn(this),this.readyState==3&&jo(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,_n(this))},n.Qa=function(i){this.g&&(this.response=i,_n(this))},n.ga=function(){this.g&&_n(this)};function _n(i){i.readyState=4,i.l=null,i.j=null,i.v=null,yn(i)}n.setRequestHeader=function(i,c){this.u.append(i,c)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var l=c.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=c.next();return i.join(`\r
`)};function yn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(ar.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function zo(i){let c="";return lt(i,function(l,f){c+=f,c+=":",c+=l,c+=`\r
`}),c}function Ss(i,c,l){t:{for(f in l){var f=!1;break t}f=!0}f||(l=zo(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):Y(i,c,l))}function st(i){Et.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(st,Et);var Ih=/^https?$/i,wh=["POST","PUT"];n=st.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,c,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():vs.g(),this.v=this.o?Eo(this.o):Eo(vs),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(R){Go(this,R);return}if(i=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)l.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())l.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(R=>R.toLowerCase()=="content-type"),A=u.FormData&&i instanceof u.FormData,!(0<=Array.prototype.indexOf.call(wh,c,void 0))||f||A||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,V]of l)this.g.setRequestHeader(R,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Wo(this),this.u=!0,this.g.send(i),this.u=!1}catch(R){Go(this,R)}};function Go(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.m=5,Ho(i),cr(i)}function Ho(i){i.A||(i.A=!0,Rt(i,"complete"),Rt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Rt(this,"complete"),Rt(this,"abort"),cr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),cr(this,!0)),st.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ko(this):this.bb())},n.bb=function(){Ko(this)};function Ko(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Jt(i)!=4||i.Z()!=2)){if(i.u&&Jt(i)==4)po(i.Ea,0,i);else if(Rt(i,"readystatechange"),Jt(i)==4){i.h=!1;try{const V=i.Z();t:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var l;if(!(l=c)){var f;if(f=V===0){var A=String(i.D).match(Lo)[1]||null;!A&&u.self&&u.self.location&&(A=u.self.location.protocol.slice(0,-1)),f=!Ih.test(A?A.toLowerCase():"")}l=f}if(l)Rt(i,"complete"),Rt(i,"success");else{i.m=6;try{var R=2<Jt(i)?i.g.statusText:""}catch{R=""}i.l=R+" ["+i.Z()+"]",Ho(i)}}finally{cr(i)}}}}function cr(i,c){if(i.g){Wo(i);const l=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,c||Rt(i,"ready");try{l.onreadystatechange=f}catch{}}}function Wo(i){i.I&&(u.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Jt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Jt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),eh(c)}};function Qo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Ah(i){const c={};i=(i.g&&2<=Jt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(L(i[f]))continue;var l=g(i[f]);const A=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const R=c[A]||[];c[A]=R,R.push(l)}w(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function En(i,c,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||c}function Xo(i){this.Aa=0,this.i=[],this.j=new dn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=En("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=En("baseRetryDelayMs",5e3,i),this.cb=En("retryDelaySeedMs",1e4,i),this.Wa=En("forwardChannelMaxRetries",2,i),this.wa=En("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Do(i&&i.concurrentRequestLimit),this.Da=new vh,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Xo.prototype,n.la=8,n.G=1,n.connect=function(i,c,l,f){bt(0),this.W=i,this.H=c||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.I=ia(this,null,this.W),lr(this)};function Cs(i){if(Yo(i),i.G==3){var c=i.U++,l=Yt(i.I);if(Y(l,"SID",i.K),Y(l,"RID",c),Y(l,"TYPE","terminate"),vn(i,l),c=new ie(i,i.j,c),c.L=2,c.v=ir(Yt(l)),l=!1,u.navigator&&u.navigator.sendBeacon)try{l=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!l&&u.Image&&(new Image().src=c.v,l=!0),l||(c.g=oa(c.j,null),c.g.ea(c.v)),c.F=Date.now(),nr(c)}sa(i)}function ur(i){i.g&&(Vs(i),i.g.cancel(),i.g=null)}function Yo(i){ur(i),i.u&&(u.clearTimeout(i.u),i.u=null),hr(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&u.clearTimeout(i.s),i.s=null)}function lr(i){if(!ko(i.h)&&!i.s){i.s=!0;var c=i.Ga;nt||Xt(),H||(nt(),H=!0),rt.add(c,i),i.B=0}}function Rh(i,c){return No(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=c.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=hn(I(i.Ga,i,c),ra(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const A=new ie(this,this.j,i);let R=this.o;if(this.S&&(R?(R=y(R),E(R,this.S)):R=this.S),this.m!==null||this.O||(A.H=R,R=null),this.P)t:{for(var c=0,l=0;l<this.i.length;l++){e:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=l;break t}if(c===4096||l===this.i.length-1){c=l+1;break t}}c=1e3}else c=1e3;c=Zo(this,A,c),l=Yt(this.I),Y(l,"RID",i),Y(l,"CVER",22),this.D&&Y(l,"X-HTTP-Session-Id",this.D),vn(this,l),R&&(this.O?c="headers="+encodeURIComponent(String(zo(R)))+"&"+c:this.m&&Ss(l,this.m,R)),bs(this.h,A),this.Ua&&Y(l,"TYPE","init"),this.P?(Y(l,"$req",c),Y(l,"SID","null"),A.T=!0,Is(A,l,null)):Is(A,l,c),this.G=2}}else this.G==3&&(i?Jo(this,i):this.i.length==0||ko(this.h)||Jo(this))};function Jo(i,c){var l;c?l=c.l:l=i.U++;const f=Yt(i.I);Y(f,"SID",i.K),Y(f,"RID",l),Y(f,"AID",i.T),vn(i,f),i.m&&i.o&&Ss(f,i.m,i.o),l=new ie(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),c&&(i.i=c.D.concat(i.i)),c=Zo(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),bs(i.h,l),Is(l,f,c)}function vn(i,c){i.H&&lt(i.H,function(l,f){Y(c,f,l)}),i.l&&Mo({},function(l,f){Y(c,f,l)})}function Zo(i,c,l){l=Math.min(i.i.length,l);var f=i.l?I(i.l.Na,i.l,i):null;t:{var A=i.i;let R=-1;for(;;){const V=["count="+l];R==-1?0<l?(R=A[0].g,V.push("ofs="+R)):R=0:V.push("ofs="+R);let Q=!0;for(let mt=0;mt<l;mt++){let K=A[mt].g;const vt=A[mt].map;if(K-=R,0>K)R=Math.max(0,A[mt].g-100),Q=!1;else try{Th(vt,V,"req"+K+"_")}catch{f&&f(vt)}}if(Q){f=V.join("&");break t}}}return i=i.i.splice(0,l),c.D=i,f}function ta(i){if(!i.g&&!i.u){i.Y=1;var c=i.Fa;nt||Xt(),H||(nt(),H=!0),rt.add(c,i),i.v=0}}function Ps(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=hn(I(i.Fa,i),ra(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,ea(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=hn(I(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,bt(10),ur(this),ea(this))};function Vs(i){i.A!=null&&(u.clearTimeout(i.A),i.A=null)}function ea(i){i.g=new ie(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var c=Yt(i.qa);Y(c,"RID","rpc"),Y(c,"SID",i.K),Y(c,"AID",i.T),Y(c,"CI",i.F?"0":"1"),!i.F&&i.ja&&Y(c,"TO",i.ja),Y(c,"TYPE","xmlhttp"),vn(i,c),i.m&&i.o&&Ss(c,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=ir(Yt(c)),l.m=null,l.P=!0,Co(l,i)}n.Za=function(){this.C!=null&&(this.C=null,ur(this),Ps(this),bt(19))};function hr(i){i.C!=null&&(u.clearTimeout(i.C),i.C=null)}function na(i,c){var l=null;if(i.g==c){hr(i),Vs(i),i.g=null;var f=2}else if(Rs(i.h,c))l=c.D,Oo(i.h,c),f=1;else return;if(i.G!=0){if(c.o)if(f==1){l=c.m?c.m.length:0,c=Date.now()-c.F;var A=i.B;f=Zn(),Rt(f,new Ao(f,l)),lr(i)}else ta(i);else if(A=c.s,A==3||A==0&&0<c.X||!(f==1&&Rh(i,c)||f==2&&Ps(i)))switch(l&&0<l.length&&(c=i.h,c.i=c.i.concat(l)),A){case 1:Pe(i,5);break;case 4:Pe(i,10);break;case 3:Pe(i,6);break;default:Pe(i,2)}}}function ra(i,c){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*c}function Pe(i,c){if(i.j.info("Error code "+c),c==2){var l=I(i.fb,i),f=i.Xa;const A=!f;f=new Ce(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||rr(f,"https"),ir(f),A?yh(f.toString(),l):Eh(f.toString(),l)}else bt(2);i.G=0,i.l&&i.l.sa(c),sa(i),Yo(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function sa(i){if(i.G=0,i.ka=[],i.l){const c=xo(i.h);(c.length!=0||i.i.length!=0)&&(D(i.ka,c),D(i.ka,i.i),i.h.i.length=0,O(i.i),i.i.length=0),i.l.ra()}}function ia(i,c,l){var f=l instanceof Ce?Yt(l):new Ce(l);if(f.g!="")c&&(f.g=c+"."+f.g),sr(f,f.s);else{var A=u.location;f=A.protocol,c=c?c+"."+A.hostname:A.hostname,A=+A.port;var R=new Ce(null);f&&rr(R,f),c&&(R.g=c),A&&sr(R,A),l&&(R.l=l),f=R}return l=i.D,c=i.ya,l&&c&&Y(f,l,c),Y(f,"VER",i.la),vn(i,f),f}function oa(i,c,l){if(c&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Ca&&!i.pa?new st(new or({eb:l})):new st(i.pa),c.Ha(i.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function aa(){}n=aa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function dr(){}dr.prototype.g=function(i,c){return new Dt(i,c)};function Dt(i,c){Et.call(this),this.g=new Xo(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(i?i["X-WebChannel-Client-Profile"]=c.va:i={"X-WebChannel-Client-Profile":c.va}),this.g.S=i,(i=c&&c.Sb)&&!L(i)&&(this.g.m=i),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!L(c)&&(this.g.D=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new je(this)}P(Dt,Et),Dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){Cs(this.g)},Dt.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=gs(i),i=l);c.i.push(new ch(c.Ya++,i)),c.G==3&&lr(c)},Dt.prototype.N=function(){this.g.l=null,delete this.j,Cs(this.g),delete this.g,Dt.aa.N.call(this)};function ca(i){ys.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){t:{for(const l in c){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}P(ca,ys);function ua(){Es.call(this),this.status=1}P(ua,Es);function je(i){this.g=i}P(je,aa),je.prototype.ua=function(){Rt(this.g,"a")},je.prototype.ta=function(i){Rt(this.g,new ca(i))},je.prototype.sa=function(i){Rt(this.g,new ua)},je.prototype.ra=function(){Rt(this.g,"b")},dr.prototype.createWebChannel=dr.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,Iu=function(){return new dr},Tu=function(){return Zn()},vu=be,Xs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},tr.NO_ERROR=0,tr.TIMEOUT=8,tr.HTTP_ERROR=6,vr=tr,Ro.COMPLETE="complete",Eu=Ro,vo.EventType=un,un.OPEN="a",un.CLOSE="b",un.ERROR="c",un.MESSAGE="d",Et.prototype.listen=Et.prototype.K,In=vo,st.prototype.listenOnce=st.prototype.L,st.prototype.getLastError=st.prototype.Ka,st.prototype.getLastErrorCode=st.prototype.Ba,st.prototype.getStatus=st.prototype.Z,st.prototype.getResponseJson=st.prototype.Oa,st.prototype.getResponseText=st.prototype.oa,st.prototype.send=st.prototype.ea,st.prototype.setWithCredentials=st.prototype.Ha,yu=st}).apply(typeof mr<"u"?mr:typeof self<"u"?self:typeof window<"u"?window:{});const Da="@firebase/firestore",ka="4.8.0";/**
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
 */class wt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}wt.UNAUTHENTICATED=new wt(null),wt.GOOGLE_CREDENTIALS=new wt("google-credentials-uid"),wt.FIRST_PARTY=new wt("first-party-uid"),wt.MOCK_USER=new wt("mock-user");/**
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
 */let en="11.10.0";/**
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
 */const Le=new gi("@firebase/firestore");function Ge(){return Le.logLevel}function N(n,...t){if(Le.logLevel<=G.DEBUG){const e=t.map(wi);Le.debug(`Firestore (${en}): ${n}`,...e)}}function ne(n,...t){if(Le.logLevel<=G.ERROR){const e=t.map(wi);Le.error(`Firestore (${en}): ${n}`,...e)}}function me(n,...t){if(Le.logLevel<=G.WARN){const e=t.map(wi);Le.warn(`Firestore (${en}): ${n}`,...e)}}function wi(n){if(typeof n=="string")return n;try{/**
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
 */function M(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,wu(n,r,e)}function wu(n,t,e){let r=`FIRESTORE (${en}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw ne(r),new Error(r)}function W(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||wu(t,s,r)}function U(n,t){return n}/**
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends Ie{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Zt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class Au{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class km{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(wt.UNAUTHENTICATED))}shutdown(){}}class Nm{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Om{constructor(t){this.t=t,this.currentUser=wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){W(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Zt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Zt,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},u=h=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Zt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(W(typeof r.accessToken=="string",31837,{l:r}),new Au(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return W(t===null||typeof t=="string",2055,{h:t}),new wt(t)}}class xm{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=wt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Mm{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new xm(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Na{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Lm{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Xd(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){W(this.o===void 0,3512);const r=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Na(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(W(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Na(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Ru(){return new TextEncoder}/**
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
 */class Ai{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Fm(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function q(n,t){return n<t?-1:n>t?1:0}function Ys(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),s=t.codePointAt(e);if(r!==s){if(r<128&&s<128)return q(r,s);{const o=Ru(),a=Um(o.encode(Oa(n,e)),o.encode(Oa(t,e)));return a!==0?a:q(r,s)}}e+=r>65535?2:1}return q(n.length,t.length)}function Oa(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function Um(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return q(n[e],t[e]);return q(n.length,t.length)}function Xe(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
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
 */const xa="__name__";class jt{constructor(t,e,r){e===void 0?e=0:e>t.length&&M(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&M(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return jt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof jt?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=jt.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return q(t.length,e.length)}static compareSegments(t,e){const r=jt.isNumericId(t),s=jt.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?jt.extractNumericId(t).compare(jt.extractNumericId(e)):Ys(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return he.fromString(t.substring(4,t.length-2))}}class X extends jt{construct(t,e,r){return new X(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new k(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new X(e)}static emptyPath(){return new X([])}}const Bm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends jt{construct(t,e,r){return new gt(t,e,r)}static isValidIdentifier(t){return Bm.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===xa}static keyField(){return new gt([xa])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new k(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new k(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new k(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(r+=u,s++):(o(),s++)}if(o(),a)throw new k(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new gt(e)}static emptyPath(){return new gt([])}}/**
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
 */class x{constructor(t){this.path=t}static fromPath(t){return new x(X.fromString(t))}static fromName(t){return new x(X.fromString(t).popFirst(5))}static empty(){return new x(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new x(new X(t.slice()))}}/**
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
 */function bu(n,t,e){if(!e)throw new k(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function qm(n,t,e,r){if(t===!0&&r===!0)throw new k(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Ma(n){if(!x.isDocumentKey(n))throw new k(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function La(n){if(x.isDocumentKey(n))throw new k(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Su(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function zr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":M(12329,{type:typeof n})}function xt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new k(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=zr(n);throw new k(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */function ut(n,t){const e={typeString:n};return t&&(e.value=t),e}function jn(n,t){if(!Su(n))throw new k(S.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new k(S.INVALID_ARGUMENT,e);return!0}/**
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
 */const Fa=-62135596800,Ua=1e6;class J{static now(){return J.fromMillis(Date.now())}static fromDate(t){return J.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Ua);return new J(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new k(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new k(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Fa)throw new k(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new k(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ua}_compareTo(t){return this.seconds===t.seconds?q(this.nanoseconds,t.nanoseconds):q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:J._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(jn(t,J._jsonSchema))return new J(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Fa;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}J._jsonSchemaVersion="firestore/timestamp/1.0",J._jsonSchema={type:ut("string",J._jsonSchemaVersion),seconds:ut("number"),nanoseconds:ut("number")};/**
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
 */class F{static fromTimestamp(t){return new F(t)}static min(){return new F(new J(0,0))}static max(){return new F(new J(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const On=-1;function $m(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=F.fromTimestamp(r===1e9?new J(e+1,0):new J(e,r));return new pe(s,x.empty(),t)}function jm(n){return new pe(n.readTime,n.key,On)}class pe{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new pe(F.min(),x.empty(),On)}static max(){return new pe(F.max(),x.empty(),On)}}function zm(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=x.comparator(n.documentKey,t.documentKey),e!==0?e:q(n.largestBatchId,t.largestBatchId))}/**
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
 */const Gm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Hm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function nn(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==Gm)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):C.reject(e)}static resolve(t){return new C((e,r)=>{e(t)})}static reject(t){return new C((e,r)=>{r(t)})}static waitFor(t){return new C((e,r)=>{let s=0,o=0,a=!1;t.forEach(u=>{++s,u.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=C.resolve(!1);for(const r of t)e=e.next(s=>s?C.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new C((r,s)=>{const o=t.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(m=>{a[d]=m,++u,u===o&&r(a)},m=>s(m))}})}static doWhile(t,e){return new C((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function Km(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function rn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Gr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this._e(r),this.ae=r=>e.writeSequenceNumber(r))}_e(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ae&&this.ae(t),t}}Gr.ue=-1;/**
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
 */const Ri=-1;function Hr(n){return n==null}function Vr(n){return n===0&&1/n==-1/0}function Wm(n){return typeof n=="number"&&Number.isInteger(n)&&!Vr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Cu="";function Qm(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Ba(t)),t=Xm(n.get(e),t);return Ba(t)}function Xm(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case Cu:e+="";break;default:e+=o}}return e}function Ba(n){return n+Cu+""}/**
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
 */function qa(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function we(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Pu(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class Z{constructor(t,e){this.comparator=t,this.root=e||pt.EMPTY}insert(t,e){return new Z(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(t){return new Z(this.comparator,this.root.remove(t,this.comparator).copy(null,null,pt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new pr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new pr(this.root,t,this.comparator,!1)}getReverseIterator(){return new pr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new pr(this.root,t,this.comparator,!0)}}class pr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class pt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??pt.RED,this.left=s??pt.EMPTY,this.right=o??pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new pt(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return pt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw M(27949);return t+(this.isRed()?0:1)}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1;pt.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(t,e,r,s,o){return this}insert(t,e,r){return new pt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ht{constructor(t){this.comparator=t,this.data=new Z(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new $a(this.data.getIterator())}getIteratorFrom(t){return new $a(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof ht)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ht(this.comparator);return e.data=t,e}}class $a{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class kt{constructor(t){this.fields=t,t.sort(gt.comparator)}static empty(){return new kt([])}unionWith(t){let e=new ht(gt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new kt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Xe(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class Vu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class _t{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Vu("Invalid base64 string: "+o):o}}(t);return new _t(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new _t(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const Ym=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ge(n){if(W(!!n,39018),typeof n=="string"){let t=0;const e=Ym.exec(n);if(W(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:it(n.seconds),nanos:it(n.nanos)}}function it(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function _e(n){return typeof n=="string"?_t.fromBase64String(n):_t.fromUint8Array(n)}/**
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
 */const Du="server_timestamp",ku="__type__",Nu="__previous_value__",Ou="__local_write_time__";function bi(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{})[ku])===null||e===void 0?void 0:e.stringValue)===Du}function Kr(n){const t=n.mapValue.fields[Nu];return bi(t)?Kr(t):t}function xn(n){const t=ge(n.mapValue.fields[Ou].timestampValue);return new J(t.seconds,t.nanos)}/**
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
 */class Jm{constructor(t,e,r,s,o,a,u,h,d,m){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=m}}const Dr="(default)";class Mn{constructor(t,e){this.projectId=t,this.database=e||Dr}static empty(){return new Mn("","")}get isDefaultDatabase(){return this.database===Dr}isEqual(t){return t instanceof Mn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const xu="__type__",Zm="__max__",gr={mapValue:{}},Mu="__vector__",kr="value";function ye(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?bi(n)?4:ep(n)?9007199254740991:tp(n)?10:11:M(28295,{value:n})}function Qt(n,t){if(n===t)return!0;const e=ye(n);if(e!==ye(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return xn(n).isEqual(xn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=ge(s.timestampValue),u=ge(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return _e(s.bytesValue).isEqual(_e(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return it(s.geoPointValue.latitude)===it(o.geoPointValue.latitude)&&it(s.geoPointValue.longitude)===it(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return it(s.integerValue)===it(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=it(s.doubleValue),u=it(o.doubleValue);return a===u?Vr(a)===Vr(u):isNaN(a)&&isNaN(u)}return!1}(n,t);case 9:return Xe(n.arrayValue.values||[],t.arrayValue.values||[],Qt);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},u=o.mapValue.fields||{};if(qa(a)!==qa(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!Qt(a[h],u[h])))return!1;return!0}(n,t);default:return M(52216,{left:n})}}function Ln(n,t){return(n.values||[]).find(e=>Qt(e,t))!==void 0}function Ye(n,t){if(n===t)return 0;const e=ye(n),r=ye(t);if(e!==r)return q(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return q(n.booleanValue,t.booleanValue);case 2:return function(o,a){const u=it(o.integerValue||o.doubleValue),h=it(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,t);case 3:return ja(n.timestampValue,t.timestampValue);case 4:return ja(xn(n),xn(t));case 5:return Ys(n.stringValue,t.stringValue);case 6:return function(o,a){const u=_e(o),h=_e(a);return u.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){const m=q(u[d],h[d]);if(m!==0)return m}return q(u.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const u=q(it(o.latitude),it(a.latitude));return u!==0?u:q(it(o.longitude),it(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return za(n.arrayValue,t.arrayValue);case 10:return function(o,a){var u,h,d,m;const v=o.fields||{},I=a.fields||{},b=(u=v[kr])===null||u===void 0?void 0:u.arrayValue,P=(h=I[kr])===null||h===void 0?void 0:h.arrayValue,O=q(((d=b?.values)===null||d===void 0?void 0:d.length)||0,((m=P?.values)===null||m===void 0?void 0:m.length)||0);return O!==0?O:za(b,P)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===gr.mapValue&&a===gr.mapValue)return 0;if(o===gr.mapValue)return 1;if(a===gr.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let v=0;v<h.length&&v<m.length;++v){const I=Ys(h[v],m[v]);if(I!==0)return I;const b=Ye(u[h[v]],d[m[v]]);if(b!==0)return b}return q(h.length,m.length)}(n.mapValue,t.mapValue);default:throw M(23264,{le:e})}}function ja(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return q(n,t);const e=ge(n),r=ge(t),s=q(e.seconds,r.seconds);return s!==0?s:q(e.nanos,r.nanos)}function za(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=Ye(e[s],r[s]);if(o)return o}return q(e.length,r.length)}function Je(n){return Js(n)}function Js(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=ge(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return _e(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return x.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Js(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Js(e.fields[a])}`;return s+"}"}(n.mapValue):M(61005,{value:n})}function Tr(n){switch(ye(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Kr(n);return t?16+Tr(t):16;case 5:return 2*n.stringValue.length;case 6:return _e(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+Tr(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return we(r.fields,(o,a)=>{s+=o.length+Tr(a)}),s}(n.mapValue);default:throw M(13486,{value:n})}}function Ga(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Zs(n){return!!n&&"integerValue"in n}function Si(n){return!!n&&"arrayValue"in n}function Ha(n){return!!n&&"nullValue"in n}function Ka(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ir(n){return!!n&&"mapValue"in n}function tp(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{})[xu])===null||e===void 0?void 0:e.stringValue)===Mu}function Cn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return we(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Cn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Cn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function ep(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Zm}/**
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
 */class Pt{constructor(t){this.value=t}static empty(){return new Pt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Ir(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Cn(e)}setAll(t){let e=gt.emptyPath(),r={},s=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=u.popLast()}a?r[u.lastSegment()]=Cn(a):s.push(u.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());Ir(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Qt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Ir(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){we(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new Pt(Cn(this.value))}}function Lu(n){const t=[];return we(n.fields,(e,r)=>{const s=new gt([e]);if(Ir(r)){const o=Lu(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new kt(t)}/**
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
 */class At{constructor(t,e,r,s,o,a,u){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(t){return new At(t,0,F.min(),F.min(),F.min(),Pt.empty(),0)}static newFoundDocument(t,e,r,s){return new At(t,1,e,F.min(),r,s,0)}static newNoDocument(t,e){return new At(t,2,e,F.min(),F.min(),Pt.empty(),0)}static newUnknownDocument(t,e){return new At(t,3,e,F.min(),F.min(),Pt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof At&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new At(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Nr{constructor(t,e){this.position=t,this.inclusive=e}}function Wa(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=x.comparator(x.fromName(a.referenceValue),e.key):r=Ye(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Qa(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Qt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Fn{constructor(t,e="asc"){this.field=t,this.dir=e}}function np(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Fu{}class ct extends Fu{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new sp(t,e,r):e==="array-contains"?new ap(t,r):e==="in"?new cp(t,r):e==="not-in"?new up(t,r):e==="array-contains-any"?new lp(t,r):new ct(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new ip(t,r):new op(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Ye(e,this.value)):e!==null&&ye(this.value)===ye(e)&&this.matchesComparison(Ye(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qt extends Fu{constructor(t,e){super(),this.filters=t,this.op=e,this.he=null}static create(t,e){return new qt(t,e)}matches(t){return Uu(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Uu(n){return n.op==="and"}function Bu(n){return rp(n)&&Uu(n)}function rp(n){for(const t of n.filters)if(t instanceof qt)return!1;return!0}function ti(n){if(n instanceof ct)return n.field.canonicalString()+n.op.toString()+Je(n.value);if(Bu(n))return n.filters.map(t=>ti(t)).join(",");{const t=n.filters.map(e=>ti(e)).join(",");return`${n.op}(${t})`}}function qu(n,t){return n instanceof ct?function(r,s){return s instanceof ct&&r.op===s.op&&r.field.isEqual(s.field)&&Qt(r.value,s.value)}(n,t):n instanceof qt?function(r,s){return s instanceof qt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,u)=>o&&qu(a,s.filters[u]),!0):!1}(n,t):void M(19439)}function $u(n){return n instanceof ct?function(e){return`${e.field.canonicalString()} ${e.op} ${Je(e.value)}`}(n):n instanceof qt?function(e){return e.op.toString()+" {"+e.getFilters().map($u).join(" ,")+"}"}(n):"Filter"}class sp extends ct{constructor(t,e,r){super(t,e,r),this.key=x.fromName(r.referenceValue)}matches(t){const e=x.comparator(t.key,this.key);return this.matchesComparison(e)}}class ip extends ct{constructor(t,e){super(t,"in",e),this.keys=ju("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class op extends ct{constructor(t,e){super(t,"not-in",e),this.keys=ju("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function ju(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>x.fromName(r.referenceValue))}class ap extends ct{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Si(e)&&Ln(e.arrayValue,this.value)}}class cp extends ct{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Ln(this.value.arrayValue,e)}}class up extends ct{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ln(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Ln(this.value.arrayValue,e)}}class lp extends ct{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Si(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Ln(this.value.arrayValue,r))}}/**
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
 */class hp{constructor(t,e=null,r=[],s=[],o=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=u,this.Pe=null}}function Xa(n,t=null,e=[],r=[],s=null,o=null,a=null){return new hp(n,t,e,r,s,o,a)}function Ci(n){const t=U(n);if(t.Pe===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>ti(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Hr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Je(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Je(r)).join(",")),t.Pe=e}return t.Pe}function Pi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!np(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!qu(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Qa(n.startAt,t.startAt)&&Qa(n.endAt,t.endAt)}function ei(n){return x.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class sn{constructor(t,e=null,r=[],s=[],o=null,a="F",u=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function dp(n,t,e,r,s,o,a,u){return new sn(n,t,e,r,s,o,a,u)}function Wr(n){return new sn(n)}function Ya(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function zu(n){return n.collectionGroup!==null}function Pn(n){const t=U(n);if(t.Te===null){t.Te=[];const e=new Set;for(const o of t.explicitOrderBy)t.Te.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new ht(gt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Te.push(new Fn(o,r))}),e.has(gt.keyField().canonicalString())||t.Te.push(new Fn(gt.keyField(),r))}return t.Te}function Gt(n){const t=U(n);return t.Ie||(t.Ie=fp(t,Pn(n))),t.Ie}function fp(n,t){if(n.limitType==="F")return Xa(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Fn(s.field,o)});const e=n.endAt?new Nr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Nr(n.startAt.position,n.startAt.inclusive):null;return Xa(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ni(n,t){const e=n.filters.concat([t]);return new sn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function ri(n,t,e){return new sn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Qr(n,t){return Pi(Gt(n),Gt(t))&&n.limitType===t.limitType}function Gu(n){return`${Ci(Gt(n))}|lt:${n.limitType}`}function He(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>$u(s)).join(", ")}]`),Hr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Je(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Je(s)).join(",")),`Target(${r})`}(Gt(n))}; limitType=${n.limitType})`}function Xr(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):x.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of Pn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,u,h){const d=Wa(a,u,h);return a.inclusive?d<=0:d<0}(r.startAt,Pn(r),s)||r.endAt&&!function(a,u,h){const d=Wa(a,u,h);return a.inclusive?d>=0:d>0}(r.endAt,Pn(r),s))}(n,t)}function mp(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Hu(n){return(t,e)=>{let r=!1;for(const s of Pn(n)){const o=pp(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function pp(n,t,e){const r=n.field.isKeyField()?x.comparator(t.key,e.key):function(o,a,u){const h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?Ye(h,d):M(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M(19790,{direction:n.dir})}}/**
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
 */class Ue{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){we(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return Pu(this.inner)}size(){return this.innerSize}}/**
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
 */const gp=new Z(x.comparator);function re(){return gp}const Ku=new Z(x.comparator);function wn(...n){let t=Ku;for(const e of n)t=t.insert(e.key,e);return t}function Wu(n){let t=Ku;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ke(){return Vn()}function Qu(){return Vn()}function Vn(){return new Ue(n=>n.toString(),(n,t)=>n.isEqual(t))}const _p=new Z(x.comparator),yp=new ht(x.comparator);function $(...n){let t=yp;for(const e of n)t=t.add(e);return t}const Ep=new ht(q);function vp(){return Ep}/**
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
 */function Vi(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vr(t)?"-0":t}}function Xu(n){return{integerValue:""+n}}function Tp(n,t){return Wm(t)?Xu(t):Vi(n,t)}/**
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
 */class Yr{constructor(){this._=void 0}}function Ip(n,t,e){return n instanceof Un?function(s,o){const a={fields:{[ku]:{stringValue:Du},[Ou]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&bi(o)&&(o=Kr(o)),o&&(a.fields[Nu]=o),{mapValue:a}}(e,t):n instanceof Bn?Ju(n,t):n instanceof qn?Zu(n,t):function(s,o){const a=Yu(s,o),u=Ja(a)+Ja(s.Ee);return Zs(a)&&Zs(s.Ee)?Xu(u):Vi(s.serializer,u)}(n,t)}function wp(n,t,e){return n instanceof Bn?Ju(n,t):n instanceof qn?Zu(n,t):e}function Yu(n,t){return n instanceof Or?function(r){return Zs(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Un extends Yr{}class Bn extends Yr{constructor(t){super(),this.elements=t}}function Ju(n,t){const e=tl(t);for(const r of n.elements)e.some(s=>Qt(s,r))||e.push(r);return{arrayValue:{values:e}}}class qn extends Yr{constructor(t){super(),this.elements=t}}function Zu(n,t){let e=tl(t);for(const r of n.elements)e=e.filter(s=>!Qt(s,r));return{arrayValue:{values:e}}}class Or extends Yr{constructor(t,e){super(),this.serializer=t,this.Ee=e}}function Ja(n){return it(n.integerValue||n.doubleValue)}function tl(n){return Si(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Ap{constructor(t,e){this.field=t,this.transform=e}}function Rp(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Bn&&s instanceof Bn||r instanceof qn&&s instanceof qn?Xe(r.elements,s.elements,Qt):r instanceof Or&&s instanceof Or?Qt(r.Ee,s.Ee):r instanceof Un&&s instanceof Un}(n.transform,t.transform)}class bp{constructor(t,e){this.version=t,this.transformResults=e}}class Bt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Bt}static exists(t){return new Bt(void 0,t)}static updateTime(t){return new Bt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function wr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Jr{}function el(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Di(n.key,Bt.none()):new zn(n.key,n.data,Bt.none());{const e=n.data,r=Pt.empty();let s=new ht(gt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new Ae(n.key,r,new kt(s.toArray()),Bt.none())}}function Sp(n,t,e){n instanceof zn?function(s,o,a){const u=s.value.clone(),h=tc(s.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):n instanceof Ae?function(s,o,a){if(!wr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const u=tc(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(nl(s)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Dn(n,t,e,r){return n instanceof zn?function(o,a,u,h){if(!wr(o.precondition,a))return u;const d=o.value.clone(),m=ec(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof Ae?function(o,a,u,h){if(!wr(o.precondition,a))return u;const d=ec(o.fieldTransforms,h,a),m=a.data;return m.setAll(nl(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(v=>v.field))}(n,t,e,r):function(o,a,u){return wr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,t,e)}function Cp(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=Yu(r.transform,s||null);o!=null&&(e===null&&(e=Pt.empty()),e.set(r.field,o))}return e||null}function Za(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Xe(r,s,(o,a)=>Rp(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class zn extends Jr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ae extends Jr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function nl(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function tc(n,t,e){const r=new Map;W(n.length===e.length,32656,{Ae:e.length,Re:n.length});for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,u=t.data.field(o.field);r.set(o.field,wp(a,u,e[s]))}return r}function ec(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,Ip(o,a,t))}return r}class Di extends Jr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Pp extends Jr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Vp{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Sp(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Dn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Dn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Qu();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=e.has(s.key)?null:u;const h=el(a,u);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),$())}isEqual(t){return this.batchId===t.batchId&&Xe(this.mutations,t.mutations,(e,r)=>Za(e,r))&&Xe(this.baseMutations,t.baseMutations,(e,r)=>Za(e,r))}}class ki{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){W(t.mutations.length===r.length,58842,{Ve:t.mutations.length,me:r.length});let s=function(){return _p}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new ki(t,e,r,s)}}/**
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
 */class kp{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var at,z;function Np(n){switch(n){case S.OK:return M(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return M(15467,{code:n})}}function rl(n){if(n===void 0)return ne("GRPC error has no .code"),S.UNKNOWN;switch(n){case at.OK:return S.OK;case at.CANCELLED:return S.CANCELLED;case at.UNKNOWN:return S.UNKNOWN;case at.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case at.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case at.INTERNAL:return S.INTERNAL;case at.UNAVAILABLE:return S.UNAVAILABLE;case at.UNAUTHENTICATED:return S.UNAUTHENTICATED;case at.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case at.NOT_FOUND:return S.NOT_FOUND;case at.ALREADY_EXISTS:return S.ALREADY_EXISTS;case at.PERMISSION_DENIED:return S.PERMISSION_DENIED;case at.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case at.ABORTED:return S.ABORTED;case at.OUT_OF_RANGE:return S.OUT_OF_RANGE;case at.UNIMPLEMENTED:return S.UNIMPLEMENTED;case at.DATA_LOSS:return S.DATA_LOSS;default:return M(39323,{code:n})}}(z=at||(at={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Op=new he([4294967295,4294967295],0);function nc(n){const t=Ru().encode(n),e=new _u;return e.update(t),new Uint8Array(e.digest())}function rc(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new he([e,r],0),new he([s,o],0)]}class Ni{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new An(`Invalid padding: ${e}`);if(r<0)throw new An(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new An(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new An(`Invalid padding when bitmap length is 0: ${e}`);this.fe=8*t.length-e,this.ge=he.fromNumber(this.fe)}pe(t,e,r){let s=t.add(e.multiply(he.fromNumber(r)));return s.compare(Op)===1&&(s=new he([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.fe===0)return!1;const e=nc(t),[r,s]=rc(e);for(let o=0;o<this.hashCount;o++){const a=this.pe(r,s,o);if(!this.ye(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Ni(o,s,e);return r.forEach(u=>a.insert(u)),a}insert(t){if(this.fe===0)return;const e=nc(t),[r,s]=rc(e);for(let o=0;o<this.hashCount;o++){const a=this.pe(r,s,o);this.we(a)}}we(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class An extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Zr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,Gn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Zr(F.min(),s,new Z(q),re(),$())}}class Gn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Gn(r,e,$(),$(),$())}}/**
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
 */class Ar{constructor(t,e,r,s){this.Se=t,this.removedTargetIds=e,this.key=r,this.be=s}}class sl{constructor(t,e){this.targetId=t,this.De=e}}class il{constructor(t,e,r=_t.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class sc{constructor(){this.ve=0,this.Ce=ic(),this.Fe=_t.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(t){t.approximateByteSize()>0&&(this.xe=!0,this.Fe=t)}Le(){let t=$(),e=$(),r=$();return this.Ce.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:M(38017,{changeType:o})}}),new Gn(this.Fe,this.Me,t,e,r)}ke(){this.xe=!1,this.Ce=ic()}qe(t,e){this.xe=!0,this.Ce=this.Ce.insert(t,e)}Qe(t){this.xe=!0,this.Ce=this.Ce.remove(t)}$e(){this.ve+=1}Ue(){this.ve-=1,W(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class xp{constructor(t){this.We=t,this.Ge=new Map,this.ze=re(),this.je=_r(),this.Je=_r(),this.He=new Z(q)}Ye(t){for(const e of t.Se)t.be&&t.be.isFoundDocument()?this.Ze(e,t.be):this.Xe(e,t.key,t.be);for(const e of t.removedTargetIds)this.Xe(e,t.key,t.be)}et(t){this.forEachTarget(t,e=>{const r=this.tt(e);switch(t.state){case 0:this.nt(e)&&r.Be(t.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(t.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(e);break;case 3:this.nt(e)&&(r.Ke(),r.Be(t.resumeToken));break;case 4:this.nt(e)&&(this.rt(e),r.Be(t.resumeToken));break;default:M(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ge.forEach((r,s)=>{this.nt(s)&&e(s)})}it(t){const e=t.targetId,r=t.De.count,s=this.st(e);if(s){const o=s.target;if(ei(o))if(r===0){const a=new x(o.path);this.Xe(e,a,At.newNoDocument(a,F.min()))}else W(r===1,20013,{expectedCount:r});else{const a=this.ot(e);if(a!==r){const u=this._t(t),h=u?this.ut(u,t,a):1;if(h!==0){this.rt(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(e,d)}}}}}_t(t){const e=t.De.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,u;try{a=_e(r).toUint8Array()}catch(h){if(h instanceof Vu)return me("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new Ni(a,s,o)}catch(h){return me(h instanceof An?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.fe===0?null:u}ut(t,e,r){return e.De.count===r-this.ht(t,e.targetId)?0:2}ht(t,e){const r=this.We.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.We.lt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(u)||(this.Xe(e,o,null),s++)}),s}Pt(t){const e=new Map;this.Ge.forEach((o,a)=>{const u=this.st(a);if(u){if(o.current&&ei(u.target)){const h=new x(u.target.path);this.Tt(h).has(a)||this.It(a,h)||this.Xe(a,h,At.newNoDocument(h,t))}o.Ne&&(e.set(a,o.Le()),o.ke())}});let r=$();this.Je.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{const d=this.st(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.ze.forEach((o,a)=>a.setReadTime(t));const s=new Zr(t,e,this.He,this.ze,r);return this.ze=re(),this.je=_r(),this.Je=_r(),this.He=new Z(q),s}Ze(t,e){if(!this.nt(t))return;const r=this.It(t,e.key)?2:0;this.tt(t).qe(e.key,r),this.ze=this.ze.insert(e.key,e),this.je=this.je.insert(e.key,this.Tt(e.key).add(t)),this.Je=this.Je.insert(e.key,this.dt(e.key).add(t))}Xe(t,e,r){if(!this.nt(t))return;const s=this.tt(t);this.It(t,e)?s.qe(e,1):s.Qe(e),this.Je=this.Je.insert(e,this.dt(e).delete(t)),this.Je=this.Je.insert(e,this.dt(e).add(t)),r&&(this.ze=this.ze.insert(e,r))}removeTarget(t){this.Ge.delete(t)}ot(t){const e=this.tt(t).Le();return this.We.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.tt(t).$e()}tt(t){let e=this.Ge.get(t);return e||(e=new sc,this.Ge.set(t,e)),e}dt(t){let e=this.Je.get(t);return e||(e=new ht(q),this.Je=this.Je.insert(t,e)),e}Tt(t){let e=this.je.get(t);return e||(e=new ht(q),this.je=this.je.insert(t,e)),e}nt(t){const e=this.st(t)!==null;return e||N("WatchChangeAggregator","Detected inactive target",t),e}st(t){const e=this.Ge.get(t);return e&&e.Oe?null:this.We.Et(t)}rt(t){this.Ge.set(t,new sc),this.We.getRemoteKeysForTarget(t).forEach(e=>{this.Xe(t,e,null)})}It(t,e){return this.We.getRemoteKeysForTarget(t).has(e)}}function _r(){return new Z(x.comparator)}function ic(){return new Z(x.comparator)}const Mp={asc:"ASCENDING",desc:"DESCENDING"},Lp={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Fp={and:"AND",or:"OR"};class Up{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function si(n,t){return n.useProto3Json||Hr(t)?t:{value:t}}function xr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ol(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Bp(n,t){return xr(n,t.toTimestamp())}function Ht(n){return W(!!n,49232),F.fromTimestamp(function(e){const r=ge(e);return new J(r.seconds,r.nanos)}(n))}function Oi(n,t){return ii(n,t).canonicalString()}function ii(n,t){const e=function(s){return new X(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function al(n){const t=X.fromString(n);return W(dl(t),10190,{key:t.toString()}),t}function oi(n,t){return Oi(n.databaseId,t.path)}function Us(n,t){const e=al(t);if(e.get(1)!==n.databaseId.projectId)throw new k(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new k(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new x(ul(e))}function cl(n,t){return Oi(n.databaseId,t)}function qp(n){const t=al(n);return t.length===4?X.emptyPath():ul(t)}function ai(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ul(n){return W(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function oc(n,t,e){return{name:oi(n,t),fields:e.value.mapValue.fields}}function $p(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:M(39313,{state:d})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(d,m){return d.useProto3Json?(W(m===void 0||typeof m=="string",58123),_t.fromBase64String(m||"")):(W(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),_t.fromUint8Array(m||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(d){const m=d.code===void 0?S.UNKNOWN:rl(d.code);return new k(m,d.message||"")}(a);e=new il(r,s,o,u||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Us(n,r.document.name),o=Ht(r.document.updateTime),a=r.document.createTime?Ht(r.document.createTime):F.min(),u=new Pt({mapValue:{fields:r.document.fields}}),h=At.newFoundDocument(s,o,a,u),d=r.targetIds||[],m=r.removedTargetIds||[];e=new Ar(d,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Us(n,r.document),o=r.readTime?Ht(r.readTime):F.min(),a=At.newNoDocument(s,o),u=r.removedTargetIds||[];e=new Ar([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Us(n,r.document),o=r.removedTargetIds||[];e=new Ar([],o,s,null)}else{if(!("filter"in t))return M(11601,{At:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new kp(s,o),u=r.targetId;e=new sl(u,a)}}return e}function jp(n,t){let e;if(t instanceof zn)e={update:oc(n,t.key,t.value)};else if(t instanceof Di)e={delete:oi(n,t.key)};else if(t instanceof Ae)e={update:oc(n,t.key,t.data),updateMask:Jp(t.fieldMask)};else{if(!(t instanceof Pp))return M(16599,{Rt:t.type});e={verify:oi(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const u=a.transform;if(u instanceof Un)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Bn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof qn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Or)return{fieldPath:a.field.canonicalString(),increment:u.Ee};throw M(20930,{transform:a.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Bp(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M(27497)}(n,t.precondition)),e}function zp(n,t){return n&&n.length>0?(W(t!==void 0,14353),n.map(e=>function(s,o){let a=s.updateTime?Ht(s.updateTime):Ht(o);return a.isEqual(F.min())&&(a=Ht(o)),new bp(a,s.transformResults||[])}(e,t))):[]}function Gp(n,t){return{documents:[cl(n,t.path)]}}function Hp(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=cl(n,s);const o=function(d){if(d.length!==0)return hl(qt.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(m=>function(I){return{field:Ke(I.field),direction:Qp(I.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=si(n,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{Vt:e,parent:s}}function Kp(n){let t=qp(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){W(r===1,65062);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(v){const I=ll(v);return I instanceof qt&&Bu(I)?I.getFilters():[I]}(e.where));let a=[];e.orderBy&&(a=function(v){return v.map(I=>function(P){return new Fn(We(P.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(I))}(e.orderBy));let u=null;e.limit&&(u=function(v){let I;return I=typeof v=="object"?v.value:v,Hr(I)?null:I}(e.limit));let h=null;e.startAt&&(h=function(v){const I=!!v.before,b=v.values||[];return new Nr(b,I)}(e.startAt));let d=null;return e.endAt&&(d=function(v){const I=!v.before,b=v.values||[];return new Nr(b,I)}(e.endAt)),dp(t,s,a,o,u,"F",h,d)}function Wp(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M(28987,{purpose:s})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function ll(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=We(e.unaryFilter.field);return ct.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=We(e.unaryFilter.field);return ct.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=We(e.unaryFilter.field);return ct.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=We(e.unaryFilter.field);return ct.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}}(n):n.fieldFilter!==void 0?function(e){return ct.create(We(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return qt.create(e.compositeFilter.filters.map(r=>ll(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M(1026)}}(e.compositeFilter.op))}(n):M(30097,{filter:n})}function Qp(n){return Mp[n]}function Xp(n){return Lp[n]}function Yp(n){return Fp[n]}function Ke(n){return{fieldPath:n.canonicalString()}}function We(n){return gt.fromServerFormat(n.fieldPath)}function hl(n){return n instanceof ct?function(e){if(e.op==="=="){if(Ka(e.value))return{unaryFilter:{field:Ke(e.field),op:"IS_NAN"}};if(Ha(e.value))return{unaryFilter:{field:Ke(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ka(e.value))return{unaryFilter:{field:Ke(e.field),op:"IS_NOT_NAN"}};if(Ha(e.value))return{unaryFilter:{field:Ke(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ke(e.field),op:Xp(e.op),value:e.value}}}(n):n instanceof qt?function(e){const r=e.getFilters().map(s=>hl(s));return r.length===1?r[0]:{compositeFilter:{op:Yp(e.op),filters:r}}}(n):M(54877,{filter:n})}function Jp(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function dl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class ce{constructor(t,e,r,s,o=F.min(),a=F.min(),u=_t.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(t){return new ce(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new ce(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ce(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ce(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Zp{constructor(t){this.gt=t}}function tg(n){const t=Kp({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ri(t,t.limit,"L"):t}/**
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
 */class eg{constructor(){this.Dn=new ng}addToCollectionParentIndex(t,e){return this.Dn.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this.Dn.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(pe.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(pe.min())}updateCollectionGroup(t,e,r){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class ng{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new ht(X.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new ht(X.comparator)).toArray()}}/**
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
 */const ac={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},fl=41943040;class Ct{static withCacheSize(t){return new Ct(t,Ct.DEFAULT_COLLECTION_PERCENTILE,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Ct.DEFAULT_COLLECTION_PERCENTILE=10,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ct.DEFAULT=new Ct(fl,Ct.DEFAULT_COLLECTION_PERCENTILE,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ct.DISABLED=new Ct(-1,0,0);/**
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
 */class Ze{constructor(t){this._r=t}next(){return this._r+=2,this._r}static ar(){return new Ze(0)}static ur(){return new Ze(-1)}}/**
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
 */const cc="LruGarbageCollector",rg=1048576;function uc([n,t],[e,r]){const s=q(n,e);return s===0?q(t,r):s}class sg{constructor(t){this.Tr=t,this.buffer=new ht(uc),this.Ir=0}dr(){return++this.Ir}Er(t){const e=[t,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();uc(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class ig{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(t){N(cc,`Garbage collection scheduled in ${t}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){rn(e)?N(cc,"Ignoring IndexedDB error during garbage collection: ",e):await nn(e)}await this.Rr(3e5)})}}class og{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.mr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return C.resolve(Gr.ue);const r=new sg(e);return this.Vr.forEachTarget(t,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.gr(t,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.Vr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(ac)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ac):this.pr(t,e))}getCacheSize(t){return this.Vr.getCacheSize(t)}pr(t,e){let r,s,o,a,u,h,d;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(v=>(v>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),s=this.params.maximumSequenceNumbersToCollect):s=v,a=Date.now(),this.nthSequenceNumber(t,s))).next(v=>(r=v,u=Date.now(),this.removeTargets(t,r,e))).next(v=>(o=v,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(v=>(d=Date.now(),Ge()<=G.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${o} targets in `+(h-u)+`ms
	Removed ${v} documents in `+(d-h)+`ms
Total Duration: ${d-m}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:v})))}}function ag(n,t){return new og(n,t)}/**
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
 */class cg{constructor(){this.changes=new Ue(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,At.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?C.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class lg{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&Dn(r.mutation,s,kt.empty(),J.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,$()).next(()=>r))}getLocalViewOfDocuments(t,e,r=$()){const s=ke();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=wn();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=ke();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,$()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,r,s){let o=re();const a=Vn(),u=function(){return Vn()}();return e.forEach((h,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof Ae)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),Dn(m.mutation,d,m.mutation.getFieldMask(),J.now())):a.set(d.key,kt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,m)=>a.set(d,m)),e.forEach((d,m)=>{var v;return u.set(d,new ug(m,(v=a.get(d))!==null&&v!==void 0?v:null))}),u))}recalculateAndSaveOverlays(t,e){const r=Vn();let s=new Z((a,u)=>a-u),o=$();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let m=r.get(h)||kt.empty();m=u.applyToLocalView(d,m),r.set(h,m);const v=(s.get(u.batchId)||$()).add(h);s=s.insert(u.batchId,v)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),d=h.key,m=h.value,v=Qu();m.forEach(I=>{if(!o.has(I)){const b=el(e.get(I),r.get(I));b!==null&&v.set(I,b),o=o.add(I)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,v))}return C.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return x.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):zu(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):C.resolve(ke());let u=On,h=o;return a.next(d=>C.forEach(d,(m,v)=>(u<v.largestBatchId&&(u=v.largestBatchId),o.get(m)?C.resolve():this.remoteDocumentCache.getEntry(t,m).next(I=>{h=h.insert(m,I)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,$())).next(m=>({batchId:u,changes:Wu(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new x(e)).next(r=>{let s=wn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=wn();return this.indexManager.getCollectionParents(t,o).next(u=>C.forEach(u,h=>{const d=function(v,I){return new sn(I,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next(m=>{m.forEach((v,I)=>{a=a.insert(v,I)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,At.newInvalidDocument(m)))});let u=wn();return a.forEach((h,d)=>{const m=o.get(h);m!==void 0&&Dn(m.mutation,d,kt.empty(),J.now()),Xr(e,d)&&(u=u.insert(h,d))}),u})}}/**
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
 */class hg{constructor(t){this.serializer=t,this.Br=new Map,this.Lr=new Map}getBundleMetadata(t,e){return C.resolve(this.Br.get(e))}saveBundleMetadata(t,e){return this.Br.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Ht(s.createTime)}}(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.Lr.get(e))}saveNamedQuery(t,e){return this.Lr.set(e.name,function(s){return{name:s.name,query:tg(s.bundledQuery),readTime:Ht(s.readTime)}}(e)),C.resolve()}}/**
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
 */class dg{constructor(){this.overlays=new Z(x.comparator),this.kr=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ke();return C.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.wt(t,e,o)}),C.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.kr.delete(r)),C.resolve()}getOverlaysForCollection(t,e,r){const s=ke(),o=e.length+1,a=new x(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return C.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new Z((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let m=o.get(d.largestBatchId);m===null&&(m=ke(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const u=ke(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,m)=>u.set(d,m)),!(u.size()>=s)););return C.resolve(u)}wt(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Dp(e,r));let o=this.kr.get(e);o===void 0&&(o=$(),this.kr.set(e,o)),this.kr.set(e,o.add(r.key))}}/**
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
 */class fg{constructor(){this.sessionToken=_t.EMPTY_BYTE_STRING}getSessionToken(t){return C.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,C.resolve()}}/**
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
 */class xi{constructor(){this.qr=new ht(dt.Qr),this.$r=new ht(dt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(t,e){const r=new dt(t,e);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Wr(new dt(t,e))}Gr(t,e){t.forEach(r=>this.removeReference(r,e))}zr(t){const e=new x(new X([])),r=new dt(e,t),s=new dt(e,t+1),o=[];return this.$r.forEachInRange([r,s],a=>{this.Wr(a),o.push(a.key)}),o}jr(){this.qr.forEach(t=>this.Wr(t))}Wr(t){this.qr=this.qr.delete(t),this.$r=this.$r.delete(t)}Jr(t){const e=new x(new X([])),r=new dt(e,t),s=new dt(e,t+1);let o=$();return this.$r.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new dt(t,0),r=this.qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class dt{constructor(t,e){this.key=t,this.Hr=e}static Qr(t,e){return x.comparator(t.key,e.key)||q(t.Hr,e.Hr)}static Ur(t,e){return q(t.Hr,e.Hr)||x.comparator(t.key,e.key)}}/**
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
 */class mg{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.er=1,this.Yr=new ht(dt.Qr)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Vp(o,e,r,s);this.mutationQueue.push(a);for(const u of s)this.Yr=this.Yr.add(new dt(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return C.resolve(a)}lookupMutationBatch(t,e){return C.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Xr(r),o=s<0?0:s;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?Ri:this.er-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new dt(e,0),s=new dt(e,Number.POSITIVE_INFINITY),o=[];return this.Yr.forEachInRange([r,s],a=>{const u=this.Zr(a.Hr);o.push(u)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ht(q);return e.forEach(s=>{const o=new dt(s,0),a=new dt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([o,a],u=>{r=r.add(u.Hr)})}),C.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;x.isDocumentKey(o)||(o=o.child(""));const a=new dt(new x(o),0);let u=new ht(q);return this.Yr.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(u=u.add(h.Hr)),!0)},a),C.resolve(this.ei(u))}ei(t){const e=[];return t.forEach(r=>{const s=this.Zr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){W(this.ti(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return C.forEach(e.mutations,s=>{const o=new dt(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Yr=r})}rr(t){}containsKey(t,e){const r=new dt(e,0),s=this.Yr.firstAfterOrEqual(r);return C.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}ti(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class pg{constructor(t){this.ni=t,this.docs=function(){return new Z(x.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.ni(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return C.resolve(r?r.document.mutableCopy():At.newInvalidDocument(e))}getEntries(t,e){let r=re();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():At.newInvalidDocument(s))}),C.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=re();const a=e.path,u=new x(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||zm(jm(m),r)<=0||(s.has(m.key)||Xr(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,r,s){M(9500)}ri(t,e){return C.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new gg(this)}getSize(t){return C.resolve(this.size)}}class gg extends cg{constructor(t){super(),this.Or=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.Or.addEntry(t,s)):this.Or.removeEntry(r)}),C.waitFor(e)}getFromCache(t,e){return this.Or.getEntry(t,e)}getAllFromCache(t,e){return this.Or.getEntries(t,e)}}/**
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
 */class _g{constructor(t){this.persistence=t,this.ii=new Ue(e=>Ci(e),Pi),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.si=0,this.oi=new xi,this.targetCount=0,this._i=Ze.ar()}forEachTarget(t,e){return this.ii.forEach((r,s)=>e(s)),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.si)}allocateTargetId(t){return this.highestTargetId=this._i.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.si&&(this.si=e),C.resolve()}hr(t){this.ii.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this._i=new Ze(e),this.highestTargetId=e),t.sequenceNumber>this.si&&(this.si=t.sequenceNumber)}addTargetData(t,e){return this.hr(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.hr(e),C.resolve()}removeTargetData(t,e){return this.ii.delete(e.target),this.oi.zr(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.ii.forEach((a,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.ii.delete(a),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),C.waitFor(o).next(()=>s)}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const r=this.ii.get(e)||null;return C.resolve(r)}addMatchingKeys(t,e,r){return this.oi.Kr(e,r),C.resolve()}removeMatchingKeys(t,e,r){this.oi.Gr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.oi.zr(e),C.resolve()}getMatchingKeysForTargetId(t,e){const r=this.oi.Jr(e);return C.resolve(r)}containsKey(t,e){return C.resolve(this.oi.containsKey(e))}}/**
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
 */class ml{constructor(t,e){this.ai={},this.overlays={},this.ui=new Gr(0),this.ci=!1,this.ci=!0,this.li=new fg,this.referenceDelegate=t(this),this.hi=new _g(this),this.indexManager=new eg,this.remoteDocumentCache=function(s){return new pg(s)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new Zp(e),this.Ti=new hg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new dg,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ai[t.toKey()];return r||(r=new mg(e,this.referenceDelegate),this.ai[t.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(t,e,r){N("MemoryPersistence","Starting transaction:",t);const s=new yg(this.ui.next());return this.referenceDelegate.Ii(),r(s).next(o=>this.referenceDelegate.di(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Ei(t,e){return C.or(Object.values(this.ai).map(r=>()=>r.containsKey(t,e)))}}class yg extends Hm{constructor(t){super(),this.currentSequenceNumber=t}}class Mi{constructor(t){this.persistence=t,this.Ai=new xi,this.Ri=null}static Vi(t){return new Mi(t)}get mi(){if(this.Ri)return this.Ri;throw M(60996)}addReference(t,e,r){return this.Ai.addReference(r,e),this.mi.delete(r.toString()),C.resolve()}removeReference(t,e,r){return this.Ai.removeReference(r,e),this.mi.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.mi.add(e.toString()),C.resolve()}removeTarget(t,e){this.Ai.zr(e.targetId).forEach(s=>this.mi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.mi.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ii(){this.Ri=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.mi,r=>{const s=x.fromPath(r);return this.fi(t,s).next(o=>{o||e.removeEntry(s,F.min())})}).next(()=>(this.Ri=null,e.apply(t)))}updateLimboDocument(t,e){return this.fi(t,e).next(r=>{r?this.mi.delete(e.toString()):this.mi.add(e.toString())})}Pi(t){return 0}fi(t,e){return C.or([()=>C.resolve(this.Ai.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class Mr{constructor(t,e){this.persistence=t,this.gi=new Ue(r=>Qm(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=ag(this,e)}static Vi(t,e){return new Mr(t,e)}Ii(){}di(t){return C.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}mr(t){const e=this.yr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}yr(t){let e=0;return this.gr(t,r=>{e++}).next(()=>e)}gr(t,e){return C.forEach(this.gi,(r,s)=>this.Sr(t,r,s).next(o=>o?C.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ri(t,a=>this.Sr(t,a,e).next(u=>{u||(r++,o.removeEntry(a,F.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.gi.set(e,t.currentSequenceNumber),C.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.gi.set(r,t.currentSequenceNumber),C.resolve()}removeReference(t,e,r){return this.gi.set(r,t.currentSequenceNumber),C.resolve()}updateLimboDocument(t,e){return this.gi.set(e,t.currentSequenceNumber),C.resolve()}Pi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Tr(t.data.value)),e}Sr(t,e,r){return C.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.gi.get(e);return C.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Li{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Is=r,this.ds=s}static Es(t,e){let r=$(),s=$();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Li(t,e.fromCache,r,s)}}/**
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
 */class vg{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return Hh()?8:Km(jh())>0?6:4}()}initialize(t,e){this.gs=t,this.indexManager=e,this.As=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ps(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ys(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Eg;return this.ws(t,e,a).next(u=>{if(o.result=u,this.Rs)return this.Ss(t,e,a,u.size)})}).next(()=>o.result)}Ss(t,e,r,s){return r.documentReadCount<this.Vs?(Ge()<=G.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",He(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),C.resolve()):(Ge()<=G.DEBUG&&N("QueryEngine","Query:",He(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Ge()<=G.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",He(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Gt(e))):C.resolve())}ps(t,e){if(Ya(e))return C.resolve(null);let r=Gt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=ri(e,null,"F"),r=Gt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=$(...o);return this.gs.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,r).next(h=>{const d=this.bs(e,u);return this.Ds(e,d,a,h.readTime)?this.ps(t,ri(e,null,"F")):this.vs(t,d,e,h)}))})))}ys(t,e,r,s){return Ya(e)||s.isEqual(F.min())?C.resolve(null):this.gs.getDocuments(t,r).next(o=>{const a=this.bs(e,o);return this.Ds(e,a,r,s)?C.resolve(null):(Ge()<=G.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),He(e)),this.vs(t,a,e,$m(s,On)).next(u=>u))})}bs(t,e){let r=new ht(Hu(t));return e.forEach((s,o)=>{Xr(t,o)&&(r=r.add(o))}),r}Ds(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ws(t,e,r){return Ge()<=G.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",He(e)),this.gs.getDocumentsMatchingQuery(t,e,pe.min(),r)}vs(t,e,r,s){return this.gs.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */const Fi="LocalStore",Tg=3e8;class Ig{constructor(t,e,r,s){this.persistence=t,this.Cs=e,this.serializer=s,this.Fs=new Z(q),this.Ms=new Ue(o=>Ci(o),Pi),this.xs=new Map,this.Os=t.getRemoteDocumentCache(),this.hi=t.getTargetCache(),this.Ti=t.getBundleCache(),this.Ns(r)}Ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new lg(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Fs))}}function wg(n,t,e,r){return new Ig(n,t,e,r)}async function pl(n,t){const e=U(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.Ns(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let h=$();for(const d of s){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){u.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next(d=>({Bs:d,removedBatchIds:a,addedBatchIds:u}))})})}function Ag(n,t){const e=U(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.Os.newChangeBuffer({trackRemovals:!0});return function(u,h,d,m){const v=d.batch,I=v.keys();let b=C.resolve();return I.forEach(P=>{b=b.next(()=>m.getEntry(h,P)).next(O=>{const D=d.docVersions.get(P);W(D!==null,48541),O.version.compareTo(D)<0&&(v.applyToRemoteDocument(O,d),O.isValidDocument()&&(O.setReadTime(d.commitVersion),m.addEntry(O)))})}),b.next(()=>u.mutationQueue.removeMutationBatch(h,v))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=$();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(h=h.add(u.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function gl(n){const t=U(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.hi.getLastRemoteSnapshotVersion(e))}function Rg(n,t){const e=U(n),r=t.snapshotVersion;let s=e.Fs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.Os.newChangeBuffer({trackRemovals:!0});s=e.Fs;const u=[];t.targetChanges.forEach((m,v)=>{const I=s.get(v);if(!I)return;u.push(e.hi.removeMatchingKeys(o,m.removedDocuments,v).next(()=>e.hi.addMatchingKeys(o,m.addedDocuments,v)));let b=I.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(v)!==null?b=b.withResumeToken(_t.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):m.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(m.resumeToken,r)),s=s.insert(v,b),function(O,D,j){return O.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=Tg?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(I,b,m)&&u.push(e.hi.updateTargetData(o,b))});let h=re(),d=$();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),u.push(bg(o,a,t.documentUpdates).next(m=>{h=m.Ls,d=m.ks})),!r.isEqual(F.min())){const m=e.hi.getLastRemoteSnapshotVersion(o).next(v=>e.hi.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(m)}return C.waitFor(u).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.Fs=s,o))}function bg(n,t,e){let r=$(),s=$();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=re();return e.forEach((u,h)=>{const d=o.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),h.isNoDocument()&&h.version.isEqual(F.min())?(t.removeEntry(u,h.readTime),a=a.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(u,h)):N(Fi,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)}),{Ls:a,ks:s}})}function Sg(n,t){const e=U(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=Ri),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Cg(n,t){const e=U(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.hi.getTargetData(r,t).next(o=>o?(s=o,C.resolve(s)):e.hi.allocateTargetId(r).next(a=>(s=new ce(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.hi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Fs=e.Fs.insert(r.targetId,r),e.Ms.set(t,r.targetId)),r})}async function ci(n,t,e){const r=U(n),s=r.Fs.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!rn(a))throw a;N(Fi,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Fs=r.Fs.remove(t),r.Ms.delete(s.target)}function lc(n,t,e){const r=U(n);let s=F.min(),o=$();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,m){const v=U(h),I=v.Ms.get(m);return I!==void 0?C.resolve(v.Fs.get(I)):v.hi.getTargetData(d,m)}(r,a,Gt(t)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,t,e?s:F.min(),e?o:$())).next(u=>(Pg(r,mp(t),u),{documents:u,qs:o})))}function Pg(n,t,e){let r=n.xs.get(t)||F.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.xs.set(t,r)}class hc{constructor(){this.activeTargetIds=vp()}Gs(t){this.activeTargetIds=this.activeTargetIds.add(t)}zs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Vg{constructor(){this.Fo=new hc,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Fo.Gs(t),this.Mo[t]||"not-current"}updateQueryState(t,e,r){this.Mo[t]=e}removeLocalQueryTarget(t){this.Fo.zs(t)}isLocalQueryTarget(t){return this.Fo.activeTargetIds.has(t)}clearQueryState(t){delete this.Mo[t]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(t){return this.Fo.activeTargetIds.has(t)}start(){return this.Fo=new hc,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */const dc="ConnectivityMonitor";class fc{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(t){this.ko.push(t)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){N(dc,"Network connectivity changed: AVAILABLE");for(const t of this.ko)t(0)}Lo(){N(dc,"Network connectivity changed: UNAVAILABLE");for(const t of this.ko)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let yr=null;function ui(){return yr===null?yr=function(){return 268435456+Math.round(2147483648*Math.random())}():yr++,"0x"+yr.toString(16)}/**
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
 */const Bs="RestConnection",kg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Ng{get Qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=e+"://"+t.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Dr?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(t,e,r,s,o){const a=ui(),u=this.Go(t,e.toUriEncodedString());N(Bs,`Sending RPC '${t}' ${a}:`,u,r);const h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(h,s,o);const{host:d}=new URL(u),m=pi(d);return this.jo(t,u,h,r,m).then(v=>(N(Bs,`Received RPC '${t}' ${a}: `,v),v),v=>{throw me(Bs,`RPC '${t}' ${a} failed with error: `,v,"url: ",u,"request:",r),v})}Jo(t,e,r,s,o,a){return this.Wo(t,e,r,s,o)}zo(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+en}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),r&&r.headers.forEach((s,o)=>t[o]=s)}Go(t,e){const r=kg[t];return`${this.$o}/v1/${e}:${r}`}terminate(){}}/**
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
 */class Og{constructor(t){this.Ho=t.Ho,this.Yo=t.Yo}Zo(t){this.Xo=t}e_(t){this.t_=t}n_(t){this.r_=t}onMessage(t){this.i_=t}close(){this.Yo()}send(t){this.Ho(t)}s_(){this.Xo()}o_(){this.t_()}__(t){this.r_(t)}a_(t){this.i_(t)}}/**
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
 */const It="WebChannelConnection";class xg extends Ng{constructor(t){super(t),this.u_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}jo(t,e,r,s,o){const a=ui();return new Promise((u,h)=>{const d=new yu;d.setWithCredentials(!0),d.listenOnce(Eu.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case vr.NO_ERROR:const v=d.getResponseJson();N(It,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(v)),u(v);break;case vr.TIMEOUT:N(It,`RPC '${t}' ${a} timed out`),h(new k(S.DEADLINE_EXCEEDED,"Request time out"));break;case vr.HTTP_ERROR:const I=d.getStatus();if(N(It,`RPC '${t}' ${a} failed with status:`,I,"response text:",d.getResponseText()),I>0){let b=d.getResponseJson();Array.isArray(b)&&(b=b[0]);const P=b?.error;if(P&&P.status&&P.message){const O=function(j){const L=j.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(L)>=0?L:S.UNKNOWN}(P.status);h(new k(O,P.message))}else h(new k(S.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new k(S.UNAVAILABLE,"Connection failed."));break;default:M(9055,{c_:t,streamId:a,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{N(It,`RPC '${t}' ${a} completed.`)}});const m=JSON.stringify(s);N(It,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",m,r,15)})}P_(t,e,r){const s=ui(),o=[this.$o,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Iu(),u=Tu(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.zo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const m=o.join("");N(It,`Creating RPC '${t}' stream ${s}: ${m}`,h);const v=a.createWebChannel(m,h);this.T_(v);let I=!1,b=!1;const P=new Og({Ho:D=>{b?N(It,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(I||(N(It,`Opening RPC '${t}' stream ${s} transport.`),v.open(),I=!0),N(It,`RPC '${t}' stream ${s} sending:`,D),v.send(D))},Yo:()=>v.close()}),O=(D,j,L)=>{D.listen(j,B=>{try{L(B)}catch(tt){setTimeout(()=>{throw tt},0)}})};return O(v,In.EventType.OPEN,()=>{b||(N(It,`RPC '${t}' stream ${s} transport opened.`),P.s_())}),O(v,In.EventType.CLOSE,()=>{b||(b=!0,N(It,`RPC '${t}' stream ${s} transport closed`),P.__(),this.I_(v))}),O(v,In.EventType.ERROR,D=>{b||(b=!0,me(It,`RPC '${t}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),P.__(new k(S.UNAVAILABLE,"The operation could not be completed")))}),O(v,In.EventType.MESSAGE,D=>{var j;if(!b){const L=D.data[0];W(!!L,16349);const B=L,tt=B?.error||((j=B[0])===null||j===void 0?void 0:j.error);if(tt){N(It,`RPC '${t}' stream ${s} received error:`,tt);const St=tt.status;let lt=function(p){const E=at[p];if(E!==void 0)return rl(E)}(St),w=tt.message;lt===void 0&&(lt=S.INTERNAL,w="Unknown error status: "+St+" with message "+tt.message),b=!0,P.__(new k(lt,w)),v.close()}else N(It,`RPC '${t}' stream ${s} received:`,L),P.a_(L)}}),O(u,vu.STAT_EVENT,D=>{D.stat===Xs.PROXY?N(It,`RPC '${t}' stream ${s} detected buffering proxy`):D.stat===Xs.NOPROXY&&N(It,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.o_()},0),P}terminate(){this.u_.forEach(t=>t.close()),this.u_=[]}T_(t){this.u_.push(t)}I_(t){this.u_=this.u_.filter(e=>e===t)}}function qs(){return typeof document<"u"?document:null}/**
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
 */function ts(n){return new Up(n,!0)}/**
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
 */class _l{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Fi=t,this.timerId=e,this.d_=r,this.E_=s,this.A_=o,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(t){this.cancel();const e=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,e-r);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),t())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const mc="PersistentStream";class yl{constructor(t,e,r,s,o,a,u,h){this.Fi=t,this.w_=r,this.S_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new _l(t,e)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(t){this.q_(),this.stream.send(t)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,t!==4?this.F_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(ne(e.toString()),ne("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.n_(e)}U_(){}auth(){this.state=1;const t=this.K_(this.b_),e=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.b_===e&&this.W_(r,s)},r=>{t(()=>{const s=new k(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)})})}W_(t,e){const r=this.K_(this.b_);this.stream=this.z_(t,e),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(s=>{r(()=>this.G_(s))}),this.stream.onMessage(s=>{r(()=>++this.C_==1?this.j_(s):this.onNext(s))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(t){return N(mc,`close with error: ${t}`),this.stream=null,this.close(4,t)}K_(t){return e=>{this.Fi.enqueueAndForget(()=>this.b_===t?e():(N(mc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Mg extends yl{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}z_(t,e){return this.connection.P_("Listen",t,e)}j_(t){return this.onNext(t)}onNext(t){this.F_.reset();const e=$p(this.serializer,t),r=function(o){if(!("targetChange"in o))return F.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?F.min():a.readTime?Ht(a.readTime):F.min()}(t);return this.listener.J_(e,r)}H_(t){const e={};e.database=ai(this.serializer),e.addTarget=function(o,a){let u;const h=a.target;if(u=ei(h)?{documents:Gp(o,h)}:{query:Hp(o,h).Vt},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=ol(o,a.resumeToken);const d=si(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(F.min())>0){u.readTime=xr(o,a.snapshotVersion.toTimestamp());const d=si(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,t);const r=Wp(this.serializer,t);r&&(e.labels=r),this.k_(e)}Y_(t){const e={};e.database=ai(this.serializer),e.removeTarget=t,this.k_(e)}}class Lg extends yl{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(t,e){return this.connection.P_("Write",t,e)}j_(t){return W(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,W(!t.writeResults||t.writeResults.length===0,55816),this.listener.ea()}onNext(t){W(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.F_.reset();const e=zp(t.writeResults,t.commitTime),r=Ht(t.commitTime);return this.listener.ta(r,e)}na(){const t={};t.database=ai(this.serializer),this.k_(t)}X_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>jp(this.serializer,r))};this.k_(e)}}/**
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
 */class Fg{}class Ug extends Fg{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new k(S.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Wo(t,ii(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(S.UNKNOWN,o.toString())})}Jo(t,e,r,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Jo(t,ii(e,r),s,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new k(S.UNKNOWN,a.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class Bg{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(t){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ua("Offline")))}set(t){this.ha(),this.sa=0,t==="Online"&&(this._a=!1),this.ua(t)}ua(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ca(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(ne(e),this._a=!1):N("OnlineStateTracker",e)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Fe="RemoteStore";class qg{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=o,this.Ea.xo(a=>{r.enqueueAndForget(async()=>{Be(this)&&(N(Fe,"Restarting streams for network reachability change."),await async function(h){const d=U(h);d.Ia.add(4),await Hn(d),d.Aa.set("Unknown"),d.Ia.delete(4),await es(d)}(this))})}),this.Aa=new Bg(r,s)}}async function es(n){if(Be(n))for(const t of n.da)await t(!0)}async function Hn(n){for(const t of n.da)await t(!1)}function El(n,t){const e=U(n);e.Ta.has(t.targetId)||(e.Ta.set(t.targetId,t),$i(e)?qi(e):on(e).x_()&&Bi(e,t))}function Ui(n,t){const e=U(n),r=on(e);e.Ta.delete(t),r.x_()&&vl(e,t),e.Ta.size===0&&(r.x_()?r.B_():Be(e)&&e.Aa.set("Unknown"))}function Bi(n,t){if(n.Ra.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(F.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}on(n).H_(t)}function vl(n,t){n.Ra.$e(t),on(n).Y_(t)}function qi(n){n.Ra=new xp({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>n.Ta.get(t)||null,lt:()=>n.datastore.serializer.databaseId}),on(n).start(),n.Aa.aa()}function $i(n){return Be(n)&&!on(n).M_()&&n.Ta.size>0}function Be(n){return U(n).Ia.size===0}function Tl(n){n.Ra=void 0}async function $g(n){n.Aa.set("Online")}async function jg(n){n.Ta.forEach((t,e)=>{Bi(n,t)})}async function zg(n,t){Tl(n),$i(n)?(n.Aa.la(t),qi(n)):n.Aa.set("Unknown")}async function Gg(n,t,e){if(n.Aa.set("Online"),t instanceof il&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const u of o.targetIds)s.Ta.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.Ta.delete(u),s.Ra.removeTarget(u))}(n,t)}catch(r){N(Fe,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Lr(n,r)}else if(t instanceof Ar?n.Ra.Ye(t):t instanceof sl?n.Ra.it(t):n.Ra.et(t),!e.isEqual(F.min()))try{const r=await gl(n.localStore);e.compareTo(r)>=0&&await function(o,a){const u=o.Ra.Pt(a);return u.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.Ta.get(d);m&&o.Ta.set(d,m.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,d)=>{const m=o.Ta.get(h);if(!m)return;o.Ta.set(h,m.withResumeToken(_t.EMPTY_BYTE_STRING,m.snapshotVersion)),vl(o,h);const v=new ce(m.target,h,d,m.sequenceNumber);Bi(o,v)}),o.remoteSyncer.applyRemoteEvent(u)}(n,e)}catch(r){N(Fe,"Failed to raise snapshot:",r),await Lr(n,r)}}async function Lr(n,t,e){if(!rn(t))throw t;n.Ia.add(1),await Hn(n),n.Aa.set("Offline"),e||(e=()=>gl(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{N(Fe,"Retrying IndexedDB access"),await e(),n.Ia.delete(1),await es(n)})}function Il(n,t){return t().catch(e=>Lr(n,e,t))}async function ns(n){const t=U(n),e=Ee(t);let r=t.Pa.length>0?t.Pa[t.Pa.length-1].batchId:Ri;for(;Hg(t);)try{const s=await Sg(t.localStore,r);if(s===null){t.Pa.length===0&&e.B_();break}r=s.batchId,Kg(t,s)}catch(s){await Lr(t,s)}wl(t)&&Al(t)}function Hg(n){return Be(n)&&n.Pa.length<10}function Kg(n,t){n.Pa.push(t);const e=Ee(n);e.x_()&&e.Z_&&e.X_(t.mutations)}function wl(n){return Be(n)&&!Ee(n).M_()&&n.Pa.length>0}function Al(n){Ee(n).start()}async function Wg(n){Ee(n).na()}async function Qg(n){const t=Ee(n);for(const e of n.Pa)t.X_(e.mutations)}async function Xg(n,t,e){const r=n.Pa.shift(),s=ki.from(r,t,e);await Il(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ns(n)}async function Yg(n,t){t&&Ee(n).Z_&&await async function(r,s){if(function(a){return Np(a)&&a!==S.ABORTED}(s.code)){const o=r.Pa.shift();Ee(r).N_(),await Il(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await ns(r)}}(n,t),wl(n)&&Al(n)}async function pc(n,t){const e=U(n);e.asyncQueue.verifyOperationInProgress(),N(Fe,"RemoteStore received new credentials");const r=Be(e);e.Ia.add(3),await Hn(e),r&&e.Aa.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ia.delete(3),await es(e)}async function Jg(n,t){const e=U(n);t?(e.Ia.delete(2),await es(e)):t||(e.Ia.add(2),await Hn(e),e.Aa.set("Unknown"))}function on(n){return n.Va||(n.Va=function(e,r,s){const o=U(e);return o.ia(),new Mg(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Zo:$g.bind(null,n),e_:jg.bind(null,n),n_:zg.bind(null,n),J_:Gg.bind(null,n)}),n.da.push(async t=>{t?(n.Va.N_(),$i(n)?qi(n):n.Aa.set("Unknown")):(await n.Va.stop(),Tl(n))})),n.Va}function Ee(n){return n.ma||(n.ma=function(e,r,s){const o=U(e);return o.ia(),new Lg(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:Wg.bind(null,n),n_:Yg.bind(null,n),ea:Qg.bind(null,n),ta:Xg.bind(null,n)}),n.da.push(async t=>{t?(n.ma.N_(),await ns(n)):(await n.ma.stop(),n.Pa.length>0&&(N(Fe,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))})),n.ma}/**
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
 */class ji{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Zt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,u=new ji(t,e,a,s,o);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zi(n,t){if(ne("AsyncQueue",`${t}: ${n}`),rn(n))return new k(S.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class Qe{static emptySet(t){return new Qe(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||x.comparator(e.key,r.key):(e,r)=>x.comparator(e.key,r.key),this.keyedMap=wn(),this.sortedSet=new Z(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Qe)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Qe;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class gc{constructor(){this.fa=new Z(x.comparator)}track(t){const e=t.doc.key,r=this.fa.get(e);r?t.type!==0&&r.type===3?this.fa=this.fa.insert(e,t):t.type===3&&r.type!==1?this.fa=this.fa.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.fa=this.fa.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.fa=this.fa.remove(e):t.type===1&&r.type===2?this.fa=this.fa.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):M(63341,{At:t,ga:r}):this.fa=this.fa.insert(e,t)}pa(){const t=[];return this.fa.inorderTraversal((e,r)=>{t.push(r)}),t}}class tn{constructor(t,e,r,s,o,a,u,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new tn(t,e,Qe.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Qr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Zg{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(t=>t.ba())}}class t_{constructor(){this.queries=_c(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(e,r){const s=U(e),o=s.queries;s.queries=_c(),o.forEach((a,u)=>{for(const h of u.wa)h.onError(r)})})(this,new k(S.ABORTED,"Firestore shutting down"))}}function _c(){return new Ue(n=>Gu(n),Qr)}async function Gi(n,t){const e=U(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.Sa()&&t.ba()&&(r=2):(o=new Zg,r=t.ba()?0:1);try{switch(r){case 0:o.ya=await e.onListen(s,!0);break;case 1:o.ya=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=zi(a,`Initialization of query '${He(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,o),o.wa.push(t),t.va(e.onlineState),o.ya&&t.Ca(o.ya)&&Ki(e)}async function Hi(n,t){const e=U(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.wa.indexOf(t);a>=0&&(o.wa.splice(a,1),o.wa.length===0?s=t.ba()?0:1:!o.Sa()&&t.ba()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function e_(n,t){const e=U(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const u of a.wa)u.Ca(s)&&(r=!0);a.ya=s}}r&&Ki(e)}function n_(n,t,e){const r=U(n),s=r.queries.get(t);if(s)for(const o of s.wa)o.onError(e);r.queries.delete(t)}function Ki(n){n.Da.forEach(t=>{t.next()})}var li,yc;(yc=li||(li={})).Fa="default",yc.Cache="cache";class Wi{constructor(t,e,r){this.query=t,this.Ma=e,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new tn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.xa?this.Na(t)&&(this.Ma.next(t),e=!0):this.Ba(t,this.onlineState)&&(this.La(t),e=!0),this.Oa=t,e}onError(t){this.Ma.error(t)}va(t){this.onlineState=t;let e=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,t)&&(this.La(this.Oa),e=!0),e}Ba(t,e){if(!t.fromCache||!this.ba())return!0;const r=e!=="Offline";return(!this.options.ka||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Na(t){if(t.docChanges.length>0)return!0;const e=this.Oa&&this.Oa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}La(t){t=tn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.xa=!0,this.Ma.next(t)}ba(){return this.options.source!==li.Cache}}/**
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
 */class Rl{constructor(t){this.key=t}}class bl{constructor(t){this.key=t}}class r_{constructor(t,e){this.query=t,this.Ha=e,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=$(),this.mutatedKeys=$(),this.Xa=Hu(t),this.eu=new Qe(this.Xa)}get tu(){return this.Ha}nu(t,e){const r=e?e.ru:new gc,s=e?e.eu:this.eu;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((m,v)=>{const I=s.get(m),b=Xr(this.query,v)?v:null,P=!!I&&this.mutatedKeys.has(I.key),O=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let D=!1;I&&b?I.data.isEqual(b.data)?P!==O&&(r.track({type:3,doc:b}),D=!0):this.iu(I,b)||(r.track({type:2,doc:b}),D=!0,(h&&this.Xa(b,h)>0||d&&this.Xa(b,d)<0)&&(u=!0)):!I&&b?(r.track({type:0,doc:b}),D=!0):I&&!b&&(r.track({type:1,doc:I}),D=!0,(h||d)&&(u=!0)),D&&(b?(a=a.add(b),o=O?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{eu:a,ru:r,Ds:u,mutatedKeys:o}}iu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.eu;this.eu=t.eu,this.mutatedKeys=t.mutatedKeys;const a=t.ru.pa();a.sort((m,v)=>function(b,P){const O=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M(20277,{At:D})}};return O(b)-O(P)}(m.type,v.type)||this.Xa(m.doc,v.doc)),this.su(r),s=s!=null&&s;const u=e&&!s?this.ou():[],h=this.Za.size===0&&this.current&&!s?1:0,d=h!==this.Ya;return this.Ya=h,a.length!==0||d?{snapshot:new tn(this.query,t.eu,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:u}:{_u:u}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new gc,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(t){return!this.Ha.has(t)&&!!this.eu.has(t)&&!this.eu.get(t).hasLocalMutations}su(t){t&&(t.addedDocuments.forEach(e=>this.Ha=this.Ha.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ha=this.Ha.delete(e)),this.current=t.current)}ou(){if(!this.current)return[];const t=this.Za;this.Za=$(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const e=[];return t.forEach(r=>{this.Za.has(r)||e.push(new bl(r))}),this.Za.forEach(r=>{t.has(r)||e.push(new Rl(r))}),e}uu(t){this.Ha=t.qs,this.Za=$();const e=this.nu(t.documents);return this.applyChanges(e,!0)}cu(){return tn.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Qi="SyncEngine";class s_{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class i_{constructor(t){this.key=t,this.lu=!1}}class o_{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new Ue(u=>Gu(u),Qr),this.Tu=new Map,this.Iu=new Set,this.du=new Z(x.comparator),this.Eu=new Map,this.Au=new xi,this.Ru={},this.Vu=new Map,this.mu=Ze.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function a_(n,t,e=!0){const r=kl(n);let s;const o=r.Pu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.cu()):s=await Sl(r,t,e,!0),s}async function c_(n,t){const e=kl(n);await Sl(e,t,!0,!1)}async function Sl(n,t,e,r){const s=await Cg(n.localStore,Gt(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let u;return r&&(u=await u_(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&El(n.remoteStore,s),u}async function u_(n,t,e,r,s){n.gu=(v,I,b)=>async function(O,D,j,L){let B=D.view.nu(j);B.Ds&&(B=await lc(O.localStore,D.query,!1).then(({documents:w})=>D.view.nu(w,B)));const tt=L&&L.targetChanges.get(D.targetId),St=L&&L.targetMismatches.get(D.targetId)!=null,lt=D.view.applyChanges(B,O.isPrimaryClient,tt,St);return vc(O,D.targetId,lt._u),lt.snapshot}(n,v,I,b);const o=await lc(n.localStore,t,!0),a=new r_(t,o.qs),u=a.nu(o.documents),h=Gn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(u,n.isPrimaryClient,h);vc(n,e,d._u);const m=new s_(t,e,a);return n.Pu.set(t,m),n.Tu.has(e)?n.Tu.get(e).push(t):n.Tu.set(e,[t]),d.snapshot}async function l_(n,t,e){const r=U(n),s=r.Pu.get(t),o=r.Tu.get(s.targetId);if(o.length>1)return r.Tu.set(s.targetId,o.filter(a=>!Qr(a,t))),void r.Pu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ci(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Ui(r.remoteStore,s.targetId),hi(r,s.targetId)}).catch(nn)):(hi(r,s.targetId),await ci(r.localStore,s.targetId,!0))}async function h_(n,t){const e=U(n),r=e.Pu.get(t),s=e.Tu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Ui(e.remoteStore,r.targetId))}async function d_(n,t,e){const r=E_(n);try{const s=await function(a,u){const h=U(a),d=J.now(),m=u.reduce((b,P)=>b.add(P.key),$());let v,I;return h.persistence.runTransaction("Locally write mutations","readwrite",b=>{let P=re(),O=$();return h.Os.getEntries(b,m).next(D=>{P=D,P.forEach((j,L)=>{L.isValidDocument()||(O=O.add(j))})}).next(()=>h.localDocuments.getOverlayedDocuments(b,P)).next(D=>{v=D;const j=[];for(const L of u){const B=Cp(L,v.get(L.key).overlayedDocument);B!=null&&j.push(new Ae(L.key,B,Lu(B.value.mapValue),Bt.exists(!0)))}return h.mutationQueue.addMutationBatch(b,d,j,u)}).next(D=>{I=D;const j=D.applyToLocalDocumentSet(v,O);return h.documentOverlayCache.saveOverlays(b,D.batchId,j)})}).then(()=>({batchId:I.batchId,changes:Wu(v)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,u,h){let d=a.Ru[a.currentUser.toKey()];d||(d=new Z(q)),d=d.insert(u,h),a.Ru[a.currentUser.toKey()]=d}(r,s.batchId,e),await Kn(r,s.changes),await ns(r.remoteStore)}catch(s){const o=zi(s,"Failed to persist write");e.reject(o)}}async function Cl(n,t){const e=U(n);try{const r=await Rg(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Eu.get(o);a&&(W(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?W(a.lu,14607):s.removedDocuments.size>0&&(W(a.lu,42227),a.lu=!1))}),await Kn(e,r,t)}catch(r){await nn(r)}}function Ec(n,t,e){const r=U(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Pu.forEach((o,a)=>{const u=a.view.va(t);u.snapshot&&s.push(u.snapshot)}),function(a,u){const h=U(a);h.onlineState=u;let d=!1;h.queries.forEach((m,v)=>{for(const I of v.wa)I.va(u)&&(d=!0)}),d&&Ki(h)}(r.eventManager,t),s.length&&r.hu.J_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function f_(n,t,e){const r=U(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Eu.get(t),o=s&&s.key;if(o){let a=new Z(x.comparator);a=a.insert(o,At.newNoDocument(o,F.min()));const u=$().add(o),h=new Zr(F.min(),new Map,new Z(q),a,u);await Cl(r,h),r.du=r.du.remove(o),r.Eu.delete(t),Xi(r)}else await ci(r.localStore,t,!1).then(()=>hi(r,t,e)).catch(nn)}async function m_(n,t){const e=U(n),r=t.batch.batchId;try{const s=await Ag(e.localStore,t);Vl(e,r,null),Pl(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Kn(e,s)}catch(s){await nn(s)}}async function p_(n,t,e){const r=U(n);try{const s=await function(a,u){const h=U(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return h.mutationQueue.lookupMutationBatch(d,u).next(v=>(W(v!==null,37113),m=v.keys(),h.mutationQueue.removeMutationBatch(d,v))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>h.localDocuments.getDocuments(d,m))})}(r.localStore,t);Vl(r,t,e),Pl(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Kn(r,s)}catch(s){await nn(s)}}function Pl(n,t){(n.Vu.get(t)||[]).forEach(e=>{e.resolve()}),n.Vu.delete(t)}function Vl(n,t,e){const r=U(n);let s=r.Ru[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Ru[r.currentUser.toKey()]=s}}function hi(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Tu.get(t))n.Pu.delete(r),e&&n.hu.pu(r,e);n.Tu.delete(t),n.isPrimaryClient&&n.Au.zr(t).forEach(r=>{n.Au.containsKey(r)||Dl(n,r)})}function Dl(n,t){n.Iu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&(Ui(n.remoteStore,e),n.du=n.du.remove(t),n.Eu.delete(e),Xi(n))}function vc(n,t,e){for(const r of e)r instanceof Rl?(n.Au.addReference(r.key,t),g_(n,r)):r instanceof bl?(N(Qi,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,t),n.Au.containsKey(r.key)||Dl(n,r.key)):M(19791,{yu:r})}function g_(n,t){const e=t.key,r=e.path.canonicalString();n.du.get(e)||n.Iu.has(r)||(N(Qi,"New document in limbo: "+e),n.Iu.add(r),Xi(n))}function Xi(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Iu.values().next().value;n.Iu.delete(t);const e=new x(X.fromString(t)),r=n.mu.next();n.Eu.set(r,new i_(e)),n.du=n.du.insert(e,r),El(n.remoteStore,new ce(Gt(Wr(e.path)),r,"TargetPurposeLimboResolution",Gr.ue))}}async function Kn(n,t,e){const r=U(n),s=[],o=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach((u,h)=>{a.push(r.gu(h,t,e).then(d=>{var m;if((d||e)&&r.isPrimaryClient){const v=d?!d.fromCache:(m=e?.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,v?"current":"not-current")}if(d){s.push(d);const v=Li.Es(h.targetId,d);o.push(v)}}))}),await Promise.all(a),r.hu.J_(s),await async function(h,d){const m=U(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>C.forEach(d,I=>C.forEach(I.Is,b=>m.persistence.referenceDelegate.addReference(v,I.targetId,b)).next(()=>C.forEach(I.ds,b=>m.persistence.referenceDelegate.removeReference(v,I.targetId,b)))))}catch(v){if(!rn(v))throw v;N(Fi,"Failed to update sequence numbers: "+v)}for(const v of d){const I=v.targetId;if(!v.fromCache){const b=m.Fs.get(I),P=b.snapshotVersion,O=b.withLastLimboFreeSnapshotVersion(P);m.Fs=m.Fs.insert(I,O)}}}(r.localStore,o))}async function __(n,t){const e=U(n);if(!e.currentUser.isEqual(t)){N(Qi,"User change. New user:",t.toKey());const r=await pl(e.localStore,t);e.currentUser=t,function(o,a){o.Vu.forEach(u=>{u.forEach(h=>{h.reject(new k(S.CANCELLED,a))})}),o.Vu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Kn(e,r.Bs)}}function y_(n,t){const e=U(n),r=e.Eu.get(t);if(r&&r.lu)return $().add(r.key);{let s=$();const o=e.Tu.get(t);if(!o)return s;for(const a of o){const u=e.Pu.get(a);s=s.unionWith(u.view.tu)}return s}}function kl(n){const t=U(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Cl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=y_.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=f_.bind(null,t),t.hu.J_=e_.bind(null,t.eventManager),t.hu.pu=n_.bind(null,t.eventManager),t}function E_(n){const t=U(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=m_.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=p_.bind(null,t),t}class Fr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=ts(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Du(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Cu(t,this.localStore),this.indexBackfillerScheduler=this.Fu(t,this.localStore)}Cu(t,e){return null}Fu(t,e){return null}vu(t){return wg(this.persistence,new vg,t.initialUser,this.serializer)}Du(t){return new ml(Mi.Vi,this.serializer)}bu(t){return new Vg}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Fr.provider={build:()=>new Fr};class v_ extends Fr{constructor(t){super(),this.cacheSizeBytes=t}Cu(t,e){W(this.persistence.referenceDelegate instanceof Mr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new ig(r,t.asyncQueue,e)}Du(t){const e=this.cacheSizeBytes!==void 0?Ct.withCacheSize(this.cacheSizeBytes):Ct.DEFAULT;return new ml(r=>Mr.Vi(r,e),this.serializer)}}class di{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ec(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=__.bind(null,this.syncEngine),await Jg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new t_}()}createDatastore(t){const e=ts(t.databaseInfo.databaseId),r=function(o){return new xg(o)}(t.databaseInfo);return function(o,a,u,h){return new Ug(o,a,u,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,u){return new qg(r,s,o,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>Ec(this.syncEngine,e,0),function(){return fc.C()?new fc:new Dg}())}createSyncEngine(t,e){return function(s,o,a,u,h,d,m){const v=new o_(s,o,a,u,h,d);return m&&(v.fu=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=U(s);N(Fe,"RemoteStore shutting down."),o.Ia.add(5),await Hn(o),o.Ea.shutdown(),o.Aa.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}di.provider={build:()=>new di};/**
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
 */class Yi{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.xu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.xu(this.observer.error,t):ne("Uncaught Error in snapshot listener:",t.toString()))}Ou(){this.muted=!0}xu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */const ve="FirestoreClient";class T_{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=wt.UNAUTHENTICATED,this.clientId=Ai.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{N(ve,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(N(ve,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Zt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=zi(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function $s(n,t){n.asyncQueue.verifyOperationInProgress(),N(ve,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await pl(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>{me("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then(()=>{N("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(s=>{me("Terminating Firestore due to IndexedDb database deletion failed",s)})}),n._offlineComponents=t}async function Tc(n,t){n.asyncQueue.verifyOperationInProgress();const e=await I_(n);N(ve,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>pc(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>pc(t.remoteStore,s)),n._onlineComponents=t}async function I_(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N(ve,"Using user provided OfflineComponentProvider");try{await $s(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;me("Error using user provided cache. Falling back to memory cache: "+e),await $s(n,new Fr)}}else N(ve,"Using default OfflineComponentProvider"),await $s(n,new v_(void 0));return n._offlineComponents}async function Nl(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N(ve,"Using user provided OnlineComponentProvider"),await Tc(n,n._uninitializedComponentsProvider._online)):(N(ve,"Using default OnlineComponentProvider"),await Tc(n,new di))),n._onlineComponents}function w_(n){return Nl(n).then(t=>t.syncEngine)}async function Ur(n){const t=await Nl(n),e=t.eventManager;return e.onListen=a_.bind(null,t.syncEngine),e.onUnlisten=l_.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=c_.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=h_.bind(null,t.syncEngine),e}function A_(n,t,e={}){const r=new Zt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const m=new Yi({next:I=>{m.Ou(),a.enqueueAndForget(()=>Hi(o,v));const b=I.docs.has(u);!b&&I.fromCache?d.reject(new k(S.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&I.fromCache&&h&&h.source==="server"?d.reject(new k(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(I)},error:I=>d.reject(I)}),v=new Wi(Wr(u.path),m,{includeMetadataChanges:!0,ka:!0});return Gi(o,v)}(await Ur(n),n.asyncQueue,t,e,r)),r.promise}function R_(n,t,e={}){const r=new Zt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const m=new Yi({next:I=>{m.Ou(),a.enqueueAndForget(()=>Hi(o,v)),I.fromCache&&h.source==="server"?d.reject(new k(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(I)},error:I=>d.reject(I)}),v=new Wi(u,m,{includeMetadataChanges:!0,ka:!0});return Gi(o,v)}(await Ur(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function Ol(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const xl="firestore.googleapis.com",wc=!0;class Ac{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new k(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=xl,this.ssl=wc}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:wc;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=fl;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<rg)throw new k(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}qm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ol((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new k(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new k(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new k(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class rs{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ac({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new k(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ac(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new km;switch(r.type){case"firstParty":return new Mm(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new k(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Ic.get(e);r&&(N("ComponentProvider","Removing Datastore"),Ic.delete(e),r.terminate())}(this),Promise.resolve()}}function b_(n,t,e,r={}){var s;n=xt(n,rs);const o=pi(t),a=n._getSettings(),u=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),h=`${t}:${e}`;o&&(Fh(`https://${h}`),$h("Firestore",!0)),a.host!==xl&&a.host!==h&&me("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:h,ssl:o,emulatorOptions:r});if(!kn(d,u)&&(n._setSettings(d),r.mockUserToken)){let m,v;if(typeof r.mockUserToken=="string")m=r.mockUserToken,v=wt.MOCK_USER;else{m=Uh(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const I=r.mockUserToken.sub||r.mockUserToken.user_id;if(!I)throw new k(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new wt(I)}n._authCredentials=new Nm(new Au(m,v))}}/**
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
 */class Re{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Re(this.firestore,t,this._query)}}class ot{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new de(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ot(this.firestore,t,this._key)}toJSON(){return{type:ot._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(jn(e,ot._jsonSchema))return new ot(t,r||null,new x(X.fromString(e.referencePath)))}}ot._jsonSchemaVersion="firestore/documentReference/1.0",ot._jsonSchema={type:ut("string",ot._jsonSchemaVersion),referencePath:ut("string")};class de extends Re{constructor(t,e,r){super(t,e,Wr(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ot(this.firestore,null,new x(t))}withConverter(t){return new de(this.firestore,t,this._path)}}function Tn(n,t,...e){if(n=Mt(n),bu("collection","path",t),n instanceof rs){const r=X.fromString(t,...e);return La(r),new de(n,null,r)}{if(!(n instanceof ot||n instanceof de))throw new k(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return La(r),new de(n.firestore,null,r)}}function Ut(n,t,...e){if(n=Mt(n),arguments.length===1&&(t=Ai.newId()),bu("doc","path",t),n instanceof rs){const r=X.fromString(t,...e);return Ma(r),new ot(n,null,new x(r))}{if(!(n instanceof ot||n instanceof de))throw new k(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return Ma(r),new ot(n.firestore,n instanceof de?n.converter:null,new x(r))}}/**
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
 */const Rc="AsyncQueue";class bc{constructor(t=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new _l(this,"async_queue_retry"),this.oc=()=>{const r=qs();r&&N(Rc,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=t;const e=qs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ac(),this.uc(t)}enterRestrictedMode(t){if(!this.Xu){this.Xu=!0,this.rc=t||!1;const e=qs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.oc)}}enqueue(t){if(this.ac(),this.Xu)return new Promise(()=>{});const e=new Zt;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Zu.push(t),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(t){if(!rn(t))throw t;N(Rc,"Operation failed with retryable error: "+t)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(t){const e=this._c.then(()=>(this.nc=!0,t().catch(r=>{throw this.tc=r,this.nc=!1,ne("INTERNAL UNHANDLED ERROR: ",Sc(r)),r}).then(r=>(this.nc=!1,r))));return this._c=e,e}enqueueAfterDelay(t,e,r){this.ac(),this.sc.indexOf(t)>-1&&(e=0);const s=ji.createAndSchedule(this,t,e,r,o=>this.lc(o));return this.ec.push(s),s}ac(){this.tc&&M(47125,{hc:Sc(this.tc)})}verifyOperationInProgress(){}async Pc(){let t;do t=this._c,await t;while(t!==this._c)}Tc(t){for(const e of this.ec)if(e.timerId===t)return!0;return!1}Ic(t){return this.Pc().then(()=>{this.ec.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.ec)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Pc()})}dc(t){this.sc.push(t)}lc(t){const e=this.ec.indexOf(t);this.ec.splice(e,1)}}function Sc(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function Cc(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const o of r)if(o in s&&typeof s[o]=="function")return!0;return!1}(n,["next","error","complete"])}class Te extends rs{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new bc,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new bc(t),this._firestoreClient=void 0,await t}}}function S_(n,t){const e=typeof n=="object"?n:Hc(),r=typeof n=="string"?n:Dr,s=$n(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Mh("firestore");o&&b_(s,...o)}return s}function ss(n){if(n._terminated)throw new k(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||C_(n),n._firestoreClient}function C_(n){var t,e,r;const s=n._freezeSettings(),o=function(u,h,d,m){return new Jm(u,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Ol(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new T_(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(u){const h=u?._online.build();return{_offline:u?._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class Ot{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ot(_t.fromBase64String(t))}catch(e){throw new k(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ot(_t.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Ot._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(jn(t,Ot._jsonSchema))return Ot.fromBase64String(t.bytes)}}Ot._jsonSchemaVersion="firestore/bytes/1.0",Ot._jsonSchema={type:ut("string",Ot._jsonSchemaVersion),bytes:ut("string")};/**
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
 */class is{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new k(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class os{constructor(t){this._methodName=t}}/**
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
 */class Kt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new k(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new k(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return q(this._lat,t._lat)||q(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Kt._jsonSchemaVersion}}static fromJSON(t){if(jn(t,Kt._jsonSchema))return new Kt(t.latitude,t.longitude)}}Kt._jsonSchemaVersion="firestore/geoPoint/1.0",Kt._jsonSchema={type:ut("string",Kt._jsonSchemaVersion),latitude:ut("number"),longitude:ut("number")};/**
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
 */class Wt{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}toJSON(){return{type:Wt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(jn(t,Wt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new Wt(t.vectorValues);throw new k(S.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Wt._jsonSchemaVersion="firestore/vectorValue/1.0",Wt._jsonSchema={type:ut("string",Wt._jsonSchemaVersion),vectorValues:ut("object")};/**
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
 */const P_=/^__.*__$/;class V_{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Ae(t,this.data,this.fieldMask,e,this.fieldTransforms):new zn(t,this.data,e,this.fieldTransforms)}}class Ml{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new Ae(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Ll(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{Ec:n})}}class Ji{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Ac(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(t){return new Ji(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:r,mc:!1});return s.fc(t),s}gc(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(t){return this.Rc({path:void 0,mc:!0})}wc(t){return Br(t,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.fc(this.path.get(t))}fc(t){if(t.length===0)throw this.wc("Document fields must not be empty");if(Ll(this.Ec)&&P_.test(t))throw this.wc('Document fields cannot begin and end with "__"')}}class D_{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||ts(t)}Dc(t,e,r,s=!1){return new Ji({Ec:t,methodName:e,bc:r,path:gt.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Zi(n){const t=n._freezeSettings(),e=ts(n._databaseId);return new D_(n._databaseId,!!t.ignoreUndefinedProperties,e)}function k_(n,t,e,r,s,o={}){const a=n.Dc(o.merge||o.mergeFields?2:0,t,e,s);eo("Data must be an object, but it was:",a,r);const u=Fl(r,a);let h,d;if(o.merge)h=new kt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const v of o.mergeFields){const I=fi(t,v,e);if(!a.contains(I))throw new k(S.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);Bl(m,I)||m.push(I)}h=new kt(m),d=a.fieldTransforms.filter(v=>h.covers(v.field))}else h=null,d=a.fieldTransforms;return new V_(new Pt(u),h,d)}class as extends os{_toFieldTransform(t){if(t.Ec!==2)throw t.Ec===1?t.wc(`${this._methodName}() can only appear at the top level of your update data`):t.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof as}}class to extends os{_toFieldTransform(t){return new Ap(t.path,new Un)}isEqual(t){return t instanceof to}}function N_(n,t,e,r){const s=n.Dc(1,t,e);eo("Data must be an object, but it was:",s,r);const o=[],a=Pt.empty();we(r,(h,d)=>{const m=no(t,h,e);d=Mt(d);const v=s.gc(m);if(d instanceof as)o.push(m);else{const I=Wn(d,v);I!=null&&(o.push(m),a.set(m,I))}});const u=new kt(o);return new Ml(a,u,s.fieldTransforms)}function O_(n,t,e,r,s,o){const a=n.Dc(1,t,e),u=[fi(t,r,e)],h=[s];if(o.length%2!=0)throw new k(S.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<o.length;I+=2)u.push(fi(t,o[I])),h.push(o[I+1]);const d=[],m=Pt.empty();for(let I=u.length-1;I>=0;--I)if(!Bl(d,u[I])){const b=u[I];let P=h[I];P=Mt(P);const O=a.gc(b);if(P instanceof as)d.push(b);else{const D=Wn(P,O);D!=null&&(d.push(b),m.set(b,D))}}const v=new kt(d);return new Ml(m,v,a.fieldTransforms)}function x_(n,t,e,r=!1){return Wn(e,n.Dc(r?4:3,t))}function Wn(n,t){if(Ul(n=Mt(n)))return eo("Unsupported field value:",t,n),Fl(n,t);if(n instanceof os)return function(r,s){if(!Ll(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.mc&&t.Ec!==4)throw t.wc("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const u of r){let h=Wn(u,s.yc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=Mt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Tp(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=J.fromDate(r);return{timestampValue:xr(s.serializer,o)}}if(r instanceof J){const o=new J(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:xr(s.serializer,o)}}if(r instanceof Kt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ot)return{bytesValue:ol(s.serializer,r._byteString)};if(r instanceof ot){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Oi(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Wt)return function(a,u){return{mapValue:{fields:{[xu]:{stringValue:Mu},[kr]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw u.wc("VectorValues must only contain numeric values.");return Vi(u.serializer,d)})}}}}}}(r,s);throw s.wc(`Unsupported field value: ${zr(r)}`)}(n,t)}function Fl(n,t){const e={};return Pu(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):we(n,(r,s)=>{const o=Wn(s,t.Vc(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Ul(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof J||n instanceof Kt||n instanceof Ot||n instanceof ot||n instanceof os||n instanceof Wt)}function eo(n,t,e){if(!Ul(e)||!Su(e)){const r=zr(e);throw r==="an object"?t.wc(n+" a custom object"):t.wc(n+" "+r)}}function fi(n,t,e){if((t=Mt(t))instanceof is)return t._internalPath;if(typeof t=="string")return no(n,t);throw Br("Field path arguments must be of type string or ",n,!1,void 0,e)}const M_=new RegExp("[~\\*/\\[\\]]");function no(n,t,e){if(t.search(M_)>=0)throw Br(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new is(...t.split("."))._internalPath}catch{throw Br(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Br(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new k(S.INVALID_ARGUMENT,u+n+h)}function Bl(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class ql{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new L_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ro("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class L_ extends ql{data(){return super.data()}}function ro(n,t){return typeof t=="string"?no(n,t):t instanceof is?t._internalPath:t._delegate._internalPath}/**
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
 */function $l(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new k(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class so{}class jl extends so{}function Pc(n,t,...e){let r=[];t instanceof so&&r.push(t),r=r.concat(e),function(o){const a=o.filter(h=>h instanceof oo).length,u=o.filter(h=>h instanceof io).length;if(a>1||a>0&&u>0)throw new k(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class io extends jl{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new io(t,e,r)}_apply(t){const e=this._parse(t);return zl(t._query,e),new Re(t.firestore,t.converter,ni(t._query,e))}_parse(t){const e=Zi(t.firestore);return function(o,a,u,h,d,m,v){let I;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new k(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){kc(v,m);const P=[];for(const O of v)P.push(Dc(h,o,O));I={arrayValue:{values:P}}}else I=Dc(h,o,v)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||kc(v,m),I=x_(u,a,v,m==="in"||m==="not-in");return ct.create(d,m,I)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class oo extends so{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new oo(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:qt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let a=s;const u=o.getFlattenedFilters();for(const h of u)zl(a,h),a=ni(a,h)}(t._query,e),new Re(t.firestore,t.converter,ni(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ao extends jl{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new ao(t,e)}_apply(t){const e=function(s,o,a){if(s.startAt!==null)throw new k(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new k(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Fn(o,a)}(t._query,this._field,this._direction);return new Re(t.firestore,t.converter,function(s,o){const a=s.explicitOrderBy.concat([o]);return new sn(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function Vc(n,t="asc"){const e=t,r=ro("orderBy",n);return ao._create(r,e)}function Dc(n,t,e){if(typeof(e=Mt(e))=="string"){if(e==="")throw new k(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!zu(t)&&e.indexOf("/")!==-1)throw new k(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(X.fromString(e));if(!x.isDocumentKey(r))throw new k(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ga(n,new x(r))}if(e instanceof ot)return Ga(n,e._key);throw new k(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${zr(e)}.`)}function kc(n,t){if(!Array.isArray(n)||n.length===0)throw new k(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function zl(n,t){const e=function(s,o){for(const a of s)for(const u of a.getFlattenedFilters())if(o.indexOf(u.op)>=0)return u.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new k(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new k(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class F_{convertValue(t,e="none"){switch(ye(t)){case 0:return null;case 1:return t.booleanValue;case 2:return it(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(_e(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw M(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return we(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e[kr].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>it(a.doubleValue));return new Wt(o)}convertGeoPoint(t){return new Kt(it(t.latitude),it(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Kr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(xn(t));default:return null}}convertTimestamp(t){const e=ge(t);return new J(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=X.fromString(t);W(dl(r),9688,{name:t});const s=new Mn(r.get(1),r.get(3)),o=new x(r.popFirst(5));return s.isEqual(e)||ne(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function U_(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class Rn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ne extends ql{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Rr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(ro("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new k(S.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Ne._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Ne._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ne._jsonSchema={type:ut("string",Ne._jsonSchemaVersion),bundleSource:ut("string","DocumentSnapshot"),bundleName:ut("string"),bundle:ut("string")};class Rr extends Ne{data(t={}){return super.data(t)}}class Oe{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Rn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Rr(this._firestore,this._userDataWriter,r.key,r,new Rn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new k(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const h=new Rr(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Rn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const h=new Rr(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Rn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),m=a.indexOf(u.doc.key)),{type:B_(u.type),doc:h,oldIndex:d,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new k(S.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Oe._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Ai.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach(o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function B_(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:n})}}/**
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
 */function Er(n){n=xt(n,ot);const t=xt(n.firestore,Te);return A_(ss(t),n._key).then(e=>Gl(t,n,e))}Oe._jsonSchemaVersion="firestore/querySnapshot/1.0",Oe._jsonSchema={type:ut("string",Oe._jsonSchemaVersion),bundleSource:ut("string","QuerySnapshot"),bundleName:ut("string"),bundle:ut("string")};class co extends F_{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ot(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ot(this.firestore,null,e)}}function Nc(n){n=xt(n,Re);const t=xt(n.firestore,Te),e=ss(t),r=new co(t);return $l(n._query),R_(e,n._query).then(s=>new Oe(t,r,n,s))}function Oc(n,t,e,...r){n=xt(n,ot);const s=xt(n.firestore,Te),o=Zi(s);let a;return a=typeof(t=Mt(t))=="string"||t instanceof is?O_(o,"updateDoc",n._key,t,e,r):N_(o,"updateDoc",n._key,t),uo(s,[a.toMutation(n._key,Bt.exists(!0))])}function js(n){return uo(xt(n.firestore,Te),[new Di(n._key,Bt.none())])}function xc(n,t){const e=xt(n.firestore,Te),r=Ut(n),s=U_(n.converter,t);return uo(e,[k_(Zi(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Bt.exists(!1))]).then(()=>r)}function q_(n,...t){var e,r,s;n=Mt(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||Cc(t[a])||(o=t[a++]);const u={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Cc(t[a])){const v=t[a];t[a]=(e=v.next)===null||e===void 0?void 0:e.bind(v),t[a+1]=(r=v.error)===null||r===void 0?void 0:r.bind(v),t[a+2]=(s=v.complete)===null||s===void 0?void 0:s.bind(v)}let h,d,m;if(n instanceof ot)d=xt(n.firestore,Te),m=Wr(n._key.path),h={next:v=>{t[a]&&t[a](Gl(d,n,v))},error:t[a+1],complete:t[a+2]};else{const v=xt(n,Re);d=xt(v.firestore,Te),m=v._query;const I=new co(d);h={next:b=>{t[a]&&t[a](new Oe(d,I,v,b))},error:t[a+1],complete:t[a+2]},$l(n._query)}return function(I,b,P,O){const D=new Yi(O),j=new Wi(b,D,P);return I.asyncQueue.enqueueAndForget(async()=>Gi(await Ur(I),j)),()=>{D.Ou(),I.asyncQueue.enqueueAndForget(async()=>Hi(await Ur(I),j))}}(ss(d),m,u,h)}function uo(n,t){return function(r,s){const o=new Zt;return r.asyncQueue.enqueueAndForget(async()=>d_(await w_(r),s,o)),o.promise}(ss(n),t)}function Gl(n,t,e){const r=e.docs.get(t._key),s=new co(n);return new Ne(n,s,t._key,r,new Rn(e.hasPendingWrites,e.fromCache),t.converter)}function Mc(){return new to("serverTimestamp")}(function(t,e=!0){(function(s){en=s})(Zd),fe(new te("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new Te(new Om(r.getProvider("auth-internal")),new Lm(a,r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new k(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mn(d.options.projectId,m)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),zt(Da,ka,t),zt(Da,ka,"esm2017")})();const $_={apiKey:"AIzaSyDBvmvQ1hUtO0E8umAPGlbAhe3rVdqu5lQ",authDomain:"mktdash-940f1.firebaseapp.com",projectId:"mktdash-940f1",storageBucket:"mktdash-940f1.firebasestorage.app",messagingSenderId:"157652211467",appId:"1:157652211467:web:2d296b31255efbec15340e",measurementId:"G-V992ECHF0V"},Hl=Gc($_);Cm(Hl);const Ft=S_(Hl);document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("new-post-form"),t=document.getElementById("posts-container"),e=document.querySelector(".no-posts-message"),r=document.getElementById("post-form-modal"),s=document.getElementById("open-post-form-button"),o=r.querySelector(".close-button"),a=document.getElementById("password-check-modal"),u=document.getElementById("pagination-controls"),h=document.body,d=10;let m=1,v=[],I=!1,b=null;function P(p=null){n.reset(),document.getElementById("post-password").value="",L.src="#",L.style.display="none",B=null;const E=r.querySelector("h3"),g=n.querySelector('button[type="submit"]');p?(I=!0,b=p.id,E.textContent="질문 수정하기",g.textContent="수정 완료",document.getElementById("post-nickname").value=p.nickname||"",document.getElementById("post-title").value=p.title||"",document.getElementById("post-content").value=p.content||"",p.image&&(L.src=p.image,L.style.display="block",B=p.image),document.getElementById("udemy-course-name").value=p.udemyCourseName||"",document.getElementById("udemy-course-url").value=p.udemyCourseUrl||"",document.getElementById("udemy-course-section").value=p.udemyCourseSection||""):(I=!1,b=null,E.textContent="새 질문 작성하기",g.textContent="질문 등록"),h.style.overflow="hidden",r.style.display="flex"}function O(){t.innerHTML="";const p=(m-1)*d,E=v.slice(p,p+d);if(v.length===0){e.style.display="block",u.style.display="none";return}else e.style.display="none",u.style.display="flex";E.forEach(g=>{const T=document.createElement("div");T.classList.add("post-card"),T.dataset.id=g.id;const _=g.content.replace(/\n/g,"<br>")+(g.image?`<img src="${g.image}" alt="${g.title} 이미지">`:""),et=g.udemyCourseName?`<span class="course-title-display">(${g.udemyCourseName})</span>`:"",ft=g.timestamp&&typeof g.timestamp.toDate=="function"?new Date(g.timestamp.toDate()).toLocaleString():"날짜 없음",$t=g.udemyCourseUrl||g.udemyCourseSection?`
                <div class="course-info">
                    ${g.udemyCourseUrl?`<p><strong>강의 URL:</strong> <a href="${g.udemyCourseUrl}" target="_blank">${g.udemyCourseUrl}</a></p>`:""}
                    ${g.udemyCourseSection?`<p><strong>강의 섹션/위치:</strong> ${g.udemyCourseSection}</p>`:""}
                </div>
                `:"";T.innerHTML=`
                <div class="post-card-header">
                    <h4>${g.title} ${et}</h4>
                    <span class="accordion-icon">➕️</span>
                </div>
                <p class="meta">작성자: ${g.nickname} | 날짜: ${ft}</p>

                <div class="post-card-content-wrapper">
                    <p class="content-body">${_}</p>
                    ${$t}
                    <div class="post-actions">
                        <button class="edit-post">수정</button>
                        <button class="delete-post delete">삭제</button>
                    </div>
                    <div class="comments-section">
                        <h5>댓글</h5>
                        <div class="comments-list">
                            ${(g.comments||[]).map(H=>{const rt=H.timestamp&&typeof H.timestamp.toDate=="function"?new Date(H.timestamp.toDate()).toLocaleString():"날짜 없음";return`
                                <div class="comment-card">
                                    <p class="meta">작성자: ${H.nickname} | 날짜: ${rt}</p>
                                    <p>${H.content.replace(/\n/g,"<br>")}</p>
                                    <div class="comment-actions">
                                        <button class="edit-comment" data-comment-id="${H.id}">수정</button>
                                        <button class="delete-comment delete" data-comment-id="${H.id}">삭제</button>
                                    </div>
                                </div>
                                `}).join("")}
                        </div>
                        <form class="comment-form">
                            <div class="form-group">
                                <label for="comment-nickname-${g.id}">닉네임:</label>
                                <input type="text" id="comment-nickname-${g.id}" required maxlength="20">
                            </div>
                            <div class="form-group">
                                <label for="comment-password-${g.id}">비밀번호:</label>
                                <input type="password" id="comment-password-${g.id}" required maxlength="20">
                            </div>
                            <div class="form-group">
                                <label for="comment-content-${g.id}">댓글 내용:</label>
                                <textarea id="comment-content-${g.id}" rows="3" required></textarea>
                            </div>
                            <button type="submit" class="button">댓글 등록</button>
                        </form>
                    </div>
                </div>
            `,t.appendChild(T),T.querySelector(".post-card-header").addEventListener("click",()=>{T.classList.toggle("active");const H=T.querySelector(".post-card-content-wrapper"),rt=T.querySelector(".accordion-icon");T.classList.contains("active")?(H.style.maxHeight=H.scrollHeight+"px",rt.textContent="➖️"):(H.style.maxHeight="0",rt.textContent="➕️")});const nt=T.querySelector(".comment-form");nt.addEventListener("submit",H=>{H.preventDefault();const rt=nt.querySelector(`#comment-nickname-${g.id}`).value.trim(),Xt=nt.querySelector(`#comment-password-${g.id}`).value.trim(),cs=nt.querySelector(`#comment-content-${g.id}`).value;tt(g.id,rt,Xt,cs,nt)}),T.querySelector(".edit-post").addEventListener("click",H=>{H.stopPropagation(),St(g.id,"post","edit")}),T.querySelector(".delete-post").addEventListener("click",H=>{H.stopPropagation(),St(g.id,"post","delete")}),T.querySelectorAll(".edit-comment").forEach(H=>{H.addEventListener("click",rt=>{rt.stopPropagation();const Xt=rt.target.dataset.commentId;St(g.id,"comment","edit",Xt)})}),T.querySelectorAll(".delete-comment").forEach(H=>{H.addEventListener("click",rt=>{rt.stopPropagation();const Xt=rt.target.dataset.commentId;St(g.id,"comment","delete",Xt)})})}),D()}function D(){u.innerHTML="";const p=Math.ceil(v.length/d);if(p<=1){u.style.display="none";return}u.style.display="flex";const E=document.createElement("button");E.textContent="◀",E.disabled=m===1,E.addEventListener("click",()=>{m--,O(),window.scrollTo({top:t.offsetTop,behavior:"smooth"})}),u.appendChild(E);for(let T=1;T<=p;T++){const _=document.createElement("button");_.textContent=T,_.classList.toggle("active",T===m),_.addEventListener("click",()=>{m=T,O(),window.scrollTo({top:t.offsetTop,behavior:"smooth"})}),u.appendChild(_)}const g=document.createElement("button");g.textContent="▶",g.disabled=m===p,g.addEventListener("click",()=>{m++,O(),window.scrollTo({top:t.offsetTop,behavior:"smooth"})}),u.appendChild(g)}const j=document.getElementById("post-image-upload"),L=document.getElementById("post-image-preview");let B=null;j.addEventListener("change",p=>{const E=p.target.files[0];if(E){const g=new FileReader;g.onload=T=>{L.src=T.target.result,L.style.display="block",B=T.target.result},g.readAsDataURL(E)}else L.src="#",L.style.display="none",B=null}),n.addEventListener("submit",async p=>{p.preventDefault();const E={nickname:document.getElementById("post-nickname").value.trim(),password:document.getElementById("post-password").value.trim(),title:document.getElementById("post-title").value,content:document.getElementById("post-content").value,image:B,udemyCourseName:document.getElementById("udemy-course-name").value,udemyCourseUrl:document.getElementById("udemy-course-url").value,udemyCourseSection:document.getElementById("udemy-course-section").value};if(I)try{const g=document.getElementById("post-password").value.trim(),T=Ut(Ft,"posts",b);(await Er(T)).data().password===g?(await Oc(T,E),alert("게시글이 성공적으로 수정되었습니다.")):alert("비밀번호가 일치하지 않습니다. 수정에 실패했습니다.")}catch(g){console.error("게시글 업데이트 중 오류 발생: ",g),alert("게시글 수정에 실패했습니다. 관리자에게 문의하세요.")}else{E.timestamp=Mc();try{await xc(Tn(Ft,"posts"),E),alert("질문이 성공적으로 등록되었습니다.")}catch(g){console.error("새 문서 추가 중 오류 발생: ",g),alert("질문 등록에 실패했습니다. 관리자에게 문의하세요.")}}n.reset(),L.src="#",L.style.display="none",B=null,r.style.display="none",h.style.overflow=""});async function tt(p,E,g,T,_){const et={nickname:E,password:g,content:T,timestamp:Mc()};try{await xc(Tn(Ft,"posts",p,"comments"),et),alert("댓글이 성공적으로 등록되었습니다."),_.reset()}catch(ft){console.error("댓글 추가 중 오류 발생: ",ft),alert("댓글 등록에 실패했습니다. 관리자에게 문의하세요.")}}function St(p,E,g,T=null){a.style.display="flex",h.style.overflow="hidden";const _=document.getElementById("modal-password"),et=document.getElementById("modal-confirm"),ft=document.getElementById("modal-cancel");_.value="",et.onclick=null,ft.onclick=null,et.onclick=async()=>{const $t=_.value.trim();if(E==="post")try{const nt=Ut(Ft,"posts",p),H=await Er(nt);if(!H.exists()){alert("게시글을 찾을 수 없습니다."),a.style.display="none",h.style.overflow="";return}const rt=H.data();rt.password===$t?g==="edit"?(a.style.display="none",h.style.overflow="",P({id:p,...rt})):g==="delete"&&(a.style.display="none",h.style.overflow="",lt(p)):(alert("비밀번호가 일치하지 않습니다."),a.style.display="none",h.style.overflow="")}catch(nt){console.error("게시글 비밀번호 확인 중 오류 발생: ",nt),alert("오류가 발생했습니다. 다시 시도해 주세요."),a.style.display="none",h.style.overflow=""}else if(E==="comment")try{const nt=Ut(Ft,"posts",p),H=Ut(nt,"comments",T),rt=await Er(H);if(!rt.exists()){alert("댓글을 찾을 수 없습니다."),a.style.display="none",h.style.overflow="";return}rt.data().password===$t?g==="edit"?(a.style.display="none",h.style.overflow="",w(p,T)):g==="delete"&&(a.style.display="none",h.style.overflow="",y(p,T)):(alert("비밀번호가 일치하지 않습니다."),a.style.display="none",h.style.overflow="")}catch(nt){console.error("댓글 비밀번호 확인 중 오류 발생: ",nt),alert("오류가 발생했습니다. 다시 시도해 주세요."),a.style.display="none",h.style.overflow=""}},ft.onclick=()=>{a.style.display="none",h.style.overflow=""}}async function lt(p){if(confirm("정말로 이 게시글을 삭제하시겠습니까?"))try{const E=Tn(Ft,"posts",p,"comments"),g=await Nc(E);for(const T of g.docs)await js(Ut(Ft,"posts",p,"comments",T.id));await js(Ut(Ft,"posts",p)),alert("게시글이 삭제되었습니다.")}catch(E){console.error("게시글 삭제 중 오류 발생: ",E),alert("게시글 삭제에 실패했습니다. 관리자에게 문의하세요.")}}async function w(p,E){const g=Ut(Ft,"posts",p),T=Ut(g,"comments",E);try{const _=await Er(T);if(!_.exists()){alert("댓글을 찾을 수 없습니다.");return}const et=_.data(),ft=prompt("새 댓글 내용을 입력하세요:",et.content);ft!==null&&(await Oc(T,{content:ft}),alert("댓글이 수정되었습니다."))}catch(_){console.error("댓글 수정 중 오류 발생: ",_),alert("댓글 수정에 실패했습니다. 관리자에게 문의하세요.")}}async function y(p,E){if(confirm("정말로 이 댓글을 삭제하시겠습니까?")){const g=Ut(Ft,"posts",p),T=Ut(g,"comments",E);try{await js(T),alert("댓글이 삭제되었습니다.")}catch(_){console.error("댓글 삭제 중 오류 발생: ",_),alert("댓글 삭제에 실패했습니다. 관리자에게 문의하세요.")}}}q_(Pc(Tn(Ft,"posts"),Vc("timestamp","desc")),async p=>{v=[];const E=[];for(const T of p.docs){const _=T.data(),et=T.id,ft=Nc(Pc(Tn(T.ref,"comments"),Vc("timestamp","asc"))).then($t=>$t.docs.map(nt=>({id:nt.id,...nt.data()}))).catch($t=>(console.error(`게시글 ${et}의 댓글을 가져오는 중 오류 발생: `,$t),[]));E.push(ft),v.push({id:et,..._,comments:[]})}(await Promise.all(E)).forEach((T,_)=>{v[_].comments=T}),m=1,O()},p=>{console.error("Firestore에서 게시글을 가져오는 중 오류 발생: ",p),alert("게시글을 불러오는 데 오류가 발생했습니다. 네트워크 연결을 확인하거나 관리자에게 문의하세요.")}),s.addEventListener("click",()=>{P()}),o.addEventListener("click",()=>{r.style.display="none",h.style.overflow=""}),window.addEventListener("click",p=>{p.target===r&&(r.style.display="none",h.style.overflow="")})});
