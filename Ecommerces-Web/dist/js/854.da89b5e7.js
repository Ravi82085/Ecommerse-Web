"use strict";(self["webpackChunkmyprojectvuejs"]=self["webpackChunkmyprojectvuejs"]||[]).push([[854],{9854:function(t,e,s){s.r(e),s.d(e,{default:function(){return Is}});var n=s(3396),r=s(7139),o=s(9242);const i=(0,n._)("br",null,null,-1),a={class:"container"},l=(0,n._)("button",{type:"button",class:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#exampleModal"}," Add new product ",-1),c=(0,n._)("br",null,null,-1),u=(0,n._)("h1",{style:{"text-align":"center"}},"My Products",-1),d=(0,n._)("br",null,null,-1),h={class:"row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3"},p={class:"card1 h-100 shadow-sm"},_={href:"#"},f=["src"],m={class:"label-top shadow-sm"},g={class:"text-white",href:"#"},b={class:"card-body"},w={class:"clearfix mb-3"},v={class:"float-start badge rounded-pill bg-success"},y=(0,n._)("span",{class:"float-end"},[(0,n._)("a",{href:"#",class:"small text-muted text-uppercase aff-link"},"reviews")],-1),k={class:"card-title"},T={target:"_blank",href:"#"},R={class:"d-grid gap-2 my-4"},E=["onClick"],U=["onClick"],P=(0,n._)("div",{class:"clearfix mb-1"},null,-1),O={class:"modal fade",id:"exampleModal","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},C={class:"modal-dialog"},A={class:"modal-content"},x=(0,n._)("div",{class:"modal-header"},[(0,n._)("h5",{class:"modal-title",id:"staticBackdropLabel"},"Add Product"),(0,n._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),N={class:"modal-body"},S=(0,n.Uk)(" . "),I={class:"input-group"},D=(0,n._)("span",{class:"input-group-text"},"$",-1),L=["value"],B={key:1,class:"alert alert-success"},M=(0,n._)("button",{type:"submit",class:"btn btn-success"},"Add",-1),q=(0,n._)("div",{class:"modal-footer"},[(0,n._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Close ")],-1),F={class:"modal fade",id:"update","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},z={class:"modal-dialog"},V={class:"modal-content"},H=(0,n._)("div",{class:"modal-header"},[(0,n._)("h5",{class:"modal-title",id:"staticBackdropLabel"},"Update Product"),(0,n._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),j={class:"modal-body"},$=(0,n.Uk)(" . "),G={key:0,class:"alert alert-success"},X=(0,n._)("button",{type:"submit",class:"btn btn-success"},"Update",-1),K=(0,n._)("div",{class:"modal-footer"},[(0,n._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Close ")],-1),W={class:"modal fade",id:"delete","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},Z={class:"modal-dialog"},J={class:"modal-content"},Y=(0,n._)("div",{class:"modal-header"},[(0,n._)("h5",{class:"modal-title",id:"staticBackdropLabel"},"Delete Product"),(0,n._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Q={class:"modal-body"},tt=(0,n.Uk)(" . "),et=(0,n._)("h3",null,"Do you want to delete this course ?",-1),st=(0,n._)("br",null,null,-1),nt={class:"modal-footer"},rt=(0,n._)("button",{type:"button",id:"close",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Close ",-1);function ot(t,e,s,ot,it,at){return(0,n.wg)(),(0,n.iD)(n.HY,null,[i,(0,n._)("div",a,[l,c,u,d,(0,n._)("div",h,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(it.products,(t=>((0,n.wg)(),(0,n.iD)("div",{class:"col hp",key:t.name},[(0,n._)("div",p,[(0,n._)("a",_,[(0,n._)("img",{src:t.image,class:"card1-img-top",alt:"product.title"},null,8,f)]),(0,n._)("div",m,[(0,n._)("a",g,(0,r.zw)(t.brand),1)]),(0,n._)("div",b,[(0,n._)("div",w,[(0,n._)("span",v,(0,r.zw)(t.price)+"DT",1),y]),(0,n._)("h5",k,[(0,n._)("a",T,(0,r.zw)(t.description),1)]),(0,n._)("div",R,[(0,n._)("button",{type:"button",class:"btn btn-info bold-btn","data-bs-toggle":"modal","data-bs-target":"#update",onClick:e=>at.getData(t.name,t.brand,t.price,t.description,t.image,t.key)}," Update ",8,E),(0,n._)("button",{type:"button",class:"btn btn-danger bold-btn","data-bs-toggle":"modal","data-bs-target":"#delete",onClick:e=>at.getDataKey(t.key,t.name)}," Delete ",8,U)]),P])])])))),128))]),(0,n._)("div",O,[(0,n._)("div",C,[(0,n._)("div",A,[x,(0,n._)("div",N,[S,(0,n._)("form",{onSubmit:e[5]||(e[5]=(0,o.iM)(((...t)=>at.AddProduct&&at.AddProduct(...t)),["prevent"]))},[(0,n.wy)((0,n._)("input",{class:"form-control",type:"text",placeholder:"name","aria-label":"default input example","onUpdate:modelValue":e[0]||(e[0]=t=>it.product.name=t)},null,512),[[o.nr,it.product.name]]),(0,n.wy)((0,n._)("input",{class:"form-control",type:"text",placeholder:"Brand","aria-label":"default input example","onUpdate:modelValue":e[1]||(e[1]=t=>it.product.brand=t)},null,512),[[o.nr,it.product.brand]]),(0,n._)("div",I,[(0,n.wy)((0,n._)("input",{class:"form-control",type:"number",placeholder:"Price","aria-label":"Dollar amount (with dot and two decimal places)","onUpdate:modelValue":e[2]||(e[2]=t=>it.product.price=t)},null,512),[[o.nr,it.product.price]]),D]),(0,n._)("input",{class:"form-control",lang:"en",type:"file",placeholder:"sqs",accept:".jpg,.png",onChange:e[3]||(e[3]=(...t)=>at.previewImage&&at.previewImage(...t))},null,32),it.ProgressShow?((0,n.wg)(),(0,n.iD)("progress",{key:0,id:"js-progressbar",class:"uk-progress",value:it.uploadValue,max:"100"},null,8,L)):(0,n.kq)("",!0),(0,n.wy)((0,n._)("textarea",{class:"form-control",id:"exampleFormControlTextarea1",rows:"3",placeholder:"Description","onUpdate:modelValue":e[4]||(e[4]=t=>it.product.description=t)},null,512),[[o.nr,it.product.description]]),it.messageSuccess?((0,n.wg)(),(0,n.iD)("div",B,(0,r.zw)(it.messageSuccess),1)):(0,n.kq)("",!0),M],32)]),q])])]),(0,n._)("div",F,[(0,n._)("div",z,[(0,n._)("div",V,[H,(0,n._)("div",j,[$,(0,n._)("form",{onSubmit:e[10]||(e[10]=(0,o.iM)(((...t)=>at.UpdateProduct&&at.UpdateProduct(...t)),["prevent"]))},[(0,n.wy)((0,n._)("input",{class:"form-control",type:"text",placeholder:"name","aria-label":"default input example","onUpdate:modelValue":e[6]||(e[6]=t=>it.dataProduct.name=t)},null,512),[[o.nr,it.dataProduct.name]]),(0,n.wy)((0,n._)("textarea",{class:"form-control",id:"exampleFormControlTextarea1",rows:"3",placeholder:"Description","onUpdate:modelValue":e[7]||(e[7]=t=>it.dataProduct.description=t)},null,512),[[o.nr,it.dataProduct.description]]),(0,n.wy)((0,n._)("input",{class:"form-control",type:"text",placeholder:"image","aria-label":"default input example","onUpdate:modelValue":e[8]||(e[8]=t=>it.dataProduct.image=t)},null,512),[[o.nr,it.dataProduct.image]]),(0,n.wy)((0,n._)("input",{class:"form-control",type:"number",pla:"",ceholder:"price","aria-label":"default input example","onUpdate:modelValue":e[9]||(e[9]=t=>it.dataProduct.price=t)},null,512),[[o.nr,it.dataProduct.price]]),it.messageUpdateSuccess?((0,n.wg)(),(0,n.iD)("div",G,(0,r.zw)(it.messageUpdateSuccess),1)):(0,n.kq)("",!0),X],32)]),K])])]),(0,n._)("div",W,[(0,n._)("div",Z,[(0,n._)("div",J,[Y,(0,n._)("div",Q,[tt,(0,n._)("form",null,[et,st,(0,n._)("h5",null,"Title: "+(0,r.zw)(it.dataProduct.name),1)])]),(0,n._)("div",nt,[rt,(0,n._)("button",{type:"button",class:"btn btn-danger",onClick:e[11]||(e[11]=t=>at.DeleteProduct(it.dataProduct.key))}," Delete ")])])])])])],64)}var it=s(36),at=(s(2801),s(8675),s(3462),s(7380),s(1118),s(6699),s(1703),s(7077)),lt=s(223),ct=s(7142);
/**
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
 */
const ut="firebasestorage.googleapis.com",dt="storageBucket",ht=12e4,pt=6e5,_t=1e3;
/**
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
 */
class ft extends lt.ZR{constructor(t,e,s=0){super(bt(t),`Firebase Storage: ${e} (${bt(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ft.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return bt(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var mt,gt;function bt(t){return"storage/"+t}function wt(){const t="An unknown error occurred, please check the error payload for server response.";return new ft(mt.UNKNOWN,t)}function vt(t){return new ft(mt.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function yt(t){return new ft(mt.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function kt(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ft(mt.UNAUTHENTICATED,t)}function Tt(){return new ft(mt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Rt(t){return new ft(mt.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Et(){return new ft(mt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Ut(){return new ft(mt.CANCELED,"User canceled the upload/download.")}function Pt(t){return new ft(mt.INVALID_URL,"Invalid URL '"+t+"'.")}function Ot(t){return new ft(mt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Ct(){return new ft(mt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+dt+"' property when initializing the app?")}function At(){return new ft(mt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function xt(){return new ft(mt.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function Nt(){return new ft(mt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function St(t){return new ft(mt.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function It(t){return new ft(mt.INVALID_ARGUMENT,t)}function Dt(){return new ft(mt.APP_DELETED,"The Firebase app was deleted.")}function Lt(t){return new ft(mt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Bt(t,e){return new ft(mt.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Mt(t){throw new ft(mt.INTERNAL_ERROR,"Internal error: "+t)}
/**
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
 */(function(t){t["UNKNOWN"]="unknown",t["OBJECT_NOT_FOUND"]="object-not-found",t["BUCKET_NOT_FOUND"]="bucket-not-found",t["PROJECT_NOT_FOUND"]="project-not-found",t["QUOTA_EXCEEDED"]="quota-exceeded",t["UNAUTHENTICATED"]="unauthenticated",t["UNAUTHORIZED"]="unauthorized",t["UNAUTHORIZED_APP"]="unauthorized-app",t["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",t["INVALID_CHECKSUM"]="invalid-checksum",t["CANCELED"]="canceled",t["INVALID_EVENT_NAME"]="invalid-event-name",t["INVALID_URL"]="invalid-url",t["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",t["NO_DEFAULT_BUCKET"]="no-default-bucket",t["CANNOT_SLICE_BLOB"]="cannot-slice-blob",t["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",t["NO_DOWNLOAD_URL"]="no-download-url",t["INVALID_ARGUMENT"]="invalid-argument",t["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",t["APP_DELETED"]="app-deleted",t["INVALID_ROOT_OPERATION"]="invalid-root-operation",t["INVALID_FORMAT"]="invalid-format",t["INTERNAL_ERROR"]="internal-error",t["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(mt||(mt={}));class qt{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let s;try{s=qt.makeFromUrl(t,e)}catch(n){return new qt(t,"")}if(""===s.path)return s;throw Ot(t)}static makeFromUrl(t,e){let s=null;const n="([A-Za-z0-9.\\-_]+)";function r(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const o="(/(.*))?$",i=new RegExp("^gs://"+n+o,"i"),a={bucket:1,path:3};function l(t){t.path_=decodeURIComponent(t.path)}const c="v[A-Za-z0-9_]+",u=e.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",h=new RegExp(`^https?://${u}/${c}/b/${n}/o${d}`,"i"),p={bucket:1,path:3},_=e===ut?"(?:storage.googleapis.com|storage.cloud.google.com)":e,f="([^?#]*)",m=new RegExp(`^https?://${_}/${n}/${f}`,"i"),g={bucket:1,path:2},b=[{regex:i,indices:a,postModify:r},{regex:h,indices:p,postModify:l},{regex:m,indices:g,postModify:l}];for(let w=0;w<b.length;w++){const e=b[w],n=e.regex.exec(t);if(n){const t=n[e.indices.bucket];let r=n[e.indices.path];r||(r=""),s=new qt(t,r),e.postModify(s);break}}if(null==s)throw Pt(t);return s}}class Ft{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
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
 */function zt(t,e,s){let n=1,r=null,o=null,i=!1,a=0;function l(){return 2===a}let c=!1;function u(...t){c||(c=!0,e.apply(null,t))}function d(e){r=setTimeout((()=>{r=null,t(p,l())}),e)}function h(){o&&clearTimeout(o)}function p(t,...e){if(c)return void h();if(t)return h(),void u.call(null,t,...e);const s=l()||i;if(s)return h(),void u.call(null,t,...e);let r;n<64&&(n*=2),1===a?(a=2,r=0):r=1e3*(n+Math.random()),d(r)}let _=!1;function f(t){_||(_=!0,h(),c||(null!==r?(t||(a=2),clearTimeout(r),d(0)):t||(a=1)))}return d(0),o=setTimeout((()=>{i=!0,f(!0)}),s),f}function Vt(t){t(!1)}
/**
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
 */function Ht(t){return void 0!==t}function jt(t){return"function"===typeof t}function $t(t){return"object"===typeof t&&!Array.isArray(t)}function Gt(t){return"string"===typeof t||t instanceof String}function Xt(t){return Kt()&&t instanceof Blob}function Kt(){return"undefined"!==typeof Blob&&!(0,lt.UG)()}function Wt(t,e,s,n){if(n<e)throw It(`Invalid value for '${t}'. Expected ${e} or greater.`);if(n>s)throw It(`Invalid value for '${t}'. Expected ${s} or less.`)}
/**
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
 */function Zt(t,e,s){let n=e;return null==s&&(n=`https://${e}`),`${s}://${n}/v0${t}`}function Jt(t){const e=encodeURIComponent;let s="?";for(const n in t)if(t.hasOwnProperty(n)){const r=e(n)+"="+e(t[n]);s=s+r+"&"}return s=s.slice(0,-1),s}
/**
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
 */
/**
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
 */
function Yt(t,e){const s=t>=500&&t<600,n=[408,429],r=-1!==n.indexOf(t),o=-1!==e.indexOf(t);return s||r||o}
/**
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
 */(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(gt||(gt={}));class Qt{constructor(t,e,s,n,r,o,i,a,l,c,u,d=!0){this.url_=t,this.method_=e,this.headers_=s,this.body_=n,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=i,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=u,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new te(!1,null,!0));const s=this.connectionFactory_();this.pendingConnection_=s;const n=t=>{const e=t.loaded,s=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,s)};null!==this.progressCallback_&&s.addUploadProgressListener(n),s.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&s.removeUploadProgressListener(n),this.pendingConnection_=null;const e=s.getErrorCode()===gt.NO_ERROR,r=s.getStatus();if(!e||Yt(r,this.additionalRetryCodes_)&&this.retry){const e=s.getErrorCode()===gt.ABORT;return void t(!1,new te(!1,null,e))}const o=-1!==this.successCodes_.indexOf(r);t(!0,new te(o,s))}))},e=(t,e)=>{const s=this.resolve_,n=this.reject_,r=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(r,r.getResponse());Ht(t)?s(t):s()}catch(o){n(o)}else if(null!==r){const t=wt();t.serverResponse=r.getErrorText(),this.errorCallback_?n(this.errorCallback_(r,t)):n(t)}else if(e.canceled){const t=this.appDelete_?Dt():Ut();n(t)}else{const t=Et();n(t)}};this.canceled_?e(!1,new te(!1,null,!0)):this.backoffId_=zt(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&Vt(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class te{constructor(t,e,s){this.wasSuccessCode=t,this.connection=e,this.canceled=!!s}}function ee(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function se(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function ne(t,e){e&&(t["X-Firebase-GMPID"]=e)}function re(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function oe(t,e,s,n,r,o,i=!0){const a=Jt(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return ne(c,e),ee(c,s),se(c,o),re(c,n),new Qt(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,i)}
/**
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
 */function ie(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function ae(...t){const e=ie();if(void 0!==e){const s=new e;for(let e=0;e<t.length;e++)s.append(t[e]);return s.getBlob()}if(Kt())return new Blob(t);throw new ft(mt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}function le(t,e,s){return t.webkitSlice?t.webkitSlice(e,s):t.mozSlice?t.mozSlice(e,s):t.slice?t.slice(e,s):null}
/**
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
 */function ce(t){if("undefined"===typeof atob)throw St("base-64");return atob(t)}
/**
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
 */const ue={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class de{constructor(t,e){this.data=t,this.contentType=e||null}}function he(t,e){switch(t){case ue.RAW:return new de(pe(e));case ue.BASE64:case ue.BASE64URL:return new de(fe(t,e));case ue.DATA_URL:return new de(ge(e),be(e))}throw wt()}function pe(t){const e=[];for(let s=0;s<t.length;s++){let n=t.charCodeAt(s);if(n<=127)e.push(n);else if(n<=2047)e.push(192|n>>6,128|63&n);else if(55296===(64512&n)){const r=s<t.length-1&&56320===(64512&t.charCodeAt(s+1));if(r){const r=n,o=t.charCodeAt(++s);n=65536|(1023&r)<<10|1023&o,e.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n)}else e.push(239,191,189)}else 56320===(64512&n)?e.push(239,191,189):e.push(224|n>>12,128|n>>6&63,128|63&n)}return new Uint8Array(e)}function _e(t){let e;try{e=decodeURIComponent(t)}catch(s){throw Bt(ue.DATA_URL,"Malformed data URL.")}return pe(e)}function fe(t,e){switch(t){case ue.BASE64:{const s=-1!==e.indexOf("-"),n=-1!==e.indexOf("_");if(s||n){const e=s?"-":"_";throw Bt(t,"Invalid character '"+e+"' found: is it base64url encoded?")}break}case ue.BASE64URL:{const s=-1!==e.indexOf("+"),n=-1!==e.indexOf("/");if(s||n){const e=s?"+":"/";throw Bt(t,"Invalid character '"+e+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let s;try{s=ce(e)}catch(r){if(r.message.includes("polyfill"))throw r;throw Bt(t,"Invalid character found")}const n=new Uint8Array(s.length);for(let o=0;o<s.length;o++)n[o]=s.charCodeAt(o);return n}class me{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw Bt(ue.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=e[1]||null;null!=s&&(this.base64=we(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-";base64".length):s),this.rest=t.substring(t.indexOf(",")+1)}}function ge(t){const e=new me(t);return e.base64?fe(ue.BASE64,e.rest):_e(e.rest)}function be(t){const e=new me(t);return e.contentType}function we(t,e){const s=t.length>=e.length;return!!s&&t.substring(t.length-e.length)===e}
/**
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
 */class ve{constructor(t,e){let s=0,n="";Xt(t)?(this.data_=t,s=t.size,n=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=n}size(){return this.size_}type(){return this.type_}slice(t,e){if(Xt(this.data_)){const s=this.data_,n=le(s,t,e);return null===n?null:new ve(n)}{const s=new Uint8Array(this.data_.buffer,t,e-t);return new ve(s,!0)}}static getBlob(...t){if(Kt()){const e=t.map((t=>t instanceof ve?t.data_:t));return new ve(ae.apply(null,e))}{const e=t.map((t=>Gt(t)?he(ue.RAW,t).data:t.data_));let s=0;e.forEach((t=>{s+=t.byteLength}));const n=new Uint8Array(s);let r=0;return e.forEach((t=>{for(let e=0;e<t.length;e++)n[r++]=t[e]})),new ve(n,!0)}}uploadData(){return this.data_}}
/**
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
 */function ye(t){let e;try{e=JSON.parse(t)}catch(s){return null}return $t(e)?e:null}
/**
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
 */function ke(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const s=t.slice(0,e);return s}function Te(t,e){const s=e.split("/").filter((t=>t.length>0)).join("/");return 0===t.length?s:t+"/"+s}function Re(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
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
 */function Ee(t,e){return e}class Ue{constructor(t,e,s,n){this.server=t,this.local=e||t,this.writable=!!s,this.xform=n||Ee}}let Pe=null;function Oe(t){return!Gt(t)||t.length<2?t:Re(t)}function Ce(){if(Pe)return Pe;const t=[];function e(t,e){return Oe(e)}t.push(new Ue("bucket")),t.push(new Ue("generation")),t.push(new Ue("metageneration")),t.push(new Ue("name","fullPath",!0));const s=new Ue("name");function n(t,e){return void 0!==e?Number(e):e}s.xform=e,t.push(s);const r=new Ue("size");return r.xform=n,t.push(r),t.push(new Ue("timeCreated")),t.push(new Ue("updated")),t.push(new Ue("md5Hash",null,!0)),t.push(new Ue("cacheControl",null,!0)),t.push(new Ue("contentDisposition",null,!0)),t.push(new Ue("contentEncoding",null,!0)),t.push(new Ue("contentLanguage",null,!0)),t.push(new Ue("contentType",null,!0)),t.push(new Ue("metadata","customMetadata",!0)),Pe=t,Pe}function Ae(t,e){function s(){const s=t["bucket"],n=t["fullPath"],r=new qt(s,n);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:s})}function xe(t,e,s){const n={type:"file"},r=s.length;for(let o=0;o<r;o++){const t=s[o];n[t.local]=t.xform(n,e[t.server])}return Ae(n,t),n}function Ne(t,e,s){const n=ye(e);if(null===n)return null;const r=n;return xe(t,r,s)}function Se(t,e,s,n){const r=ye(e);if(null===r)return null;if(!Gt(r["downloadTokens"]))return null;const o=r["downloadTokens"];if(0===o.length)return null;const i=encodeURIComponent,a=o.split(","),l=a.map((e=>{const r=t["bucket"],o=t["fullPath"],a="/b/"+i(r)+"/o/"+i(o),l=Zt(a,s,n),c=Jt({alt:"media",token:e});return l+c}));return l[0]}function Ie(t,e){const s={},n=e.length;for(let r=0;r<n;r++){const n=e[r];n.writable&&(s[n.server]=t[n.local])}return JSON.stringify(s)}
/**
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
 */class De{constructor(t,e,s,n){this.url=t,this.method=e,this.handler=s,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
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
 */function Le(t){if(!t)throw wt()}function Be(t,e){function s(s,n){const r=Ne(t,n,e);return Le(null!==r),r}return s}function Me(t,e){function s(s,n){const r=Ne(t,n,e);return Le(null!==r),Se(r,n,t.host,t._protocol)}return s}function qe(t){function e(e,s){let n;return n=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?Tt():kt():402===e.getStatus()?yt(t.bucket):403===e.getStatus()?Rt(t.path):s,n.status=e.getStatus(),n.serverResponse=s.serverResponse,n}return e}function Fe(t){const e=qe(t);function s(s,n){let r=e(s,n);return 404===s.getStatus()&&(r=vt(t.path)),r.serverResponse=n.serverResponse,r}return s}function ze(t,e,s){const n=e.fullServerUrl(),r=Zt(n,t.host,t._protocol),o="GET",i=t.maxOperationRetryTime,a=new De(r,o,Be(t,s),i);return a.errorHandler=Fe(e),a}function Ve(t,e,s){const n=e.fullServerUrl(),r=Zt(n,t.host,t._protocol),o="GET",i=t.maxOperationRetryTime,a=new De(r,o,Me(t,s),i);return a.errorHandler=Fe(e),a}function He(t,e){return t&&t["contentType"]||e&&e.type()||"application/octet-stream"}function je(t,e,s){const n=Object.assign({},s);return n["fullPath"]=t.path,n["size"]=e.size(),n["contentType"]||(n["contentType"]=He(null,e)),n}function $e(t,e,s,n,r){const o=e.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function a(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}const l=a();i["Content-Type"]="multipart/related; boundary="+l;const c=je(e,n,r),u=Ie(c,s),d="--"+l+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+u+"\r\n--"+l+"\r\nContent-Type: "+c["contentType"]+"\r\n\r\n",h="\r\n--"+l+"--",p=ve.getBlob(d,n,h);if(null===p)throw At();const _={name:c["fullPath"]},f=Zt(o,t.host,t._protocol),m="POST",g=t.maxUploadRetryTime,b=new De(f,m,Be(t,s),g);return b.urlParams=_,b.headers=i,b.body=p.uploadData(),b.errorHandler=qe(e),b}class Ge{constructor(t,e,s,n){this.current=t,this.total=e,this.finalized=!!s,this.metadata=n||null}}function Xe(t,e){let s=null;try{s=t.getResponseHeader("X-Goog-Upload-Status")}catch(r){Le(!1)}const n=e||["active"];return Le(!!s&&-1!==n.indexOf(s)),s}function Ke(t,e,s,n,r){const o=e.bucketOnlyServerUrl(),i=je(e,n,r),a={name:i["fullPath"]},l=Zt(o,t.host,t._protocol),c="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${n.size()}`,"X-Goog-Upload-Header-Content-Type":i["contentType"],"Content-Type":"application/json; charset=utf-8"},d=Ie(i,s),h=t.maxUploadRetryTime;function p(t){let e;Xe(t);try{e=t.getResponseHeader("X-Goog-Upload-URL")}catch(s){Le(!1)}return Le(Gt(e)),e}const _=new De(l,c,p,h);return _.urlParams=a,_.headers=u,_.body=d,_.errorHandler=qe(e),_}function We(t,e,s,n){const r={"X-Goog-Upload-Command":"query"};function o(t){const e=Xe(t,["active","final"]);let s=null;try{s=t.getResponseHeader("X-Goog-Upload-Size-Received")}catch(o){Le(!1)}s||Le(!1);const r=Number(s);return Le(!isNaN(r)),new Ge(r,n.size(),"final"===e)}const i="POST",a=t.maxUploadRetryTime,l=new De(s,i,o,a);return l.headers=r,l.errorHandler=qe(e),l}const Ze=262144;function Je(t,e,s,n,r,o,i,a){const l=new Ge(0,0);if(i?(l.current=i.current,l.total=i.total):(l.current=0,l.total=n.size()),n.size()!==l.total)throw xt();const c=l.total-l.current;let u=c;r>0&&(u=Math.min(u,r));const d=l.current,h=d+u;let p="";p=0===u?"finalize":c===u?"upload, finalize":"upload";const _={"X-Goog-Upload-Command":p,"X-Goog-Upload-Offset":`${l.current}`},f=n.slice(d,h);if(null===f)throw At();function m(t,s){const r=Xe(t,["active","final"]),i=l.current+u,a=n.size();let c;return c="final"===r?Be(e,o)(t,s):null,new Ge(i,a,"final"===r,c)}const g="POST",b=e.maxUploadRetryTime,w=new De(s,g,m,b);return w.headers=_,w.body=f.uploadData(),w.progressCallback=a||null,w.errorHandler=qe(t),w}
/**
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
 */const Ye={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Qe(t){switch(t){case"running":case"pausing":case"canceling":return Ye.RUNNING;case"paused":return Ye.PAUSED;case"success":return Ye.SUCCESS;case"canceled":return Ye.CANCELED;case"error":return Ye.ERROR;default:return Ye.ERROR}}
/**
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
 */class ts{constructor(t,e,s){const n=jt(t)||null!=e||null!=s;if(n)this.next=t,this.error=null!==e&&void 0!==e?e:void 0,this.complete=null!==s&&void 0!==s?s:void 0;else{const e=t;this.next=e.next,this.error=e.error,this.complete=e.complete}}}
/**
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
 */function es(t){return(...e)=>{Promise.resolve().then((()=>t(...e)))}}
/**
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
 */let ss=null;class ns{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=gt.NO_ERROR,this.sendPromise_=new Promise((t=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=gt.ABORT,t()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=gt.NETWORK_ERROR,t()})),this.xhr_.addEventListener("load",(()=>{t()}))}))}send(t,e,s,n){if(this.sent_)throw Mt("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==n)for(const r in n)n.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,n[r].toString());return void 0!==s?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Mt("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Mt("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw Mt("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Mt("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class rs extends ns{initXhr(){this.xhr_.responseType="text"}}function os(){return ss?ss():new rs}
/**
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
 */
class is{constructor(t,e,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=e,this._metadata=s,this._mappings=Ce(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=t=>{if(this._request=void 0,this._chunkMultiplier=1,t._codeEquals(mt.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const e=this.isExponentialBackoffExpired();if(Yt(t.status,[])){if(!e)return this.sleepTime=Math.max(2*this.sleepTime,_t),this._needToFetchStatus=!0,void this.completeTransitions_();t=Et()}this._error=t,this._transition("error")}},this._metadataErrorHandler=t=>{this._request=void 0,t._codeEquals(mt.CANCELED)?this.completeTransitions_():(this._error=t,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise(((t,e)=>{this._resolve=t,this._reject=e,this._start()})),this._promise.then(null,(()=>{}))}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const t=this._transferred;return e=>this._updateProgress(t+e)}_shouldDoResumable(t){return t.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout((()=>{this.pendingTimeout=void 0,this._continueUpload()}),this.sleepTime):this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([e,s])=>{switch(this._state){case"running":t(e,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}}))}_createResumable(){this._resolveToken(((t,e)=>{const s=Ke(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),n=this._ref.storage._makeRequest(s,os,t,e);this._request=n,n.getPromise().then((t=>{this._request=void 0,this._uploadUrl=t,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const t=this._uploadUrl;this._resolveToken(((e,s)=>{const n=We(this._ref.storage,this._ref._location,t,this._blob),r=this._ref.storage._makeRequest(n,os,e,s);this._request=r,r.getPromise().then((t=>{this._request=void 0,this._updateProgress(t.current),this._needToFetchStatus=!1,t.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const t=Ze*this._chunkMultiplier,e=new Ge(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken(((n,r)=>{let o;try{o=Je(this._ref._location,this._ref.storage,s,this._blob,t,this._mappings,e,this._makeProgressCallback())}catch(a){return this._error=a,void this._transition("error")}const i=this._ref.storage._makeRequest(o,os,n,r,!1);this._request=i,i.getPromise().then((t=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(t.current),t.finalized?(this._metadata=t.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){const t=Ze*this._chunkMultiplier;2*t<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((t,e)=>{const s=ze(this._ref.storage,this._ref._location,this._mappings),n=this._ref.storage._makeRequest(s,os,t,e);this._request=n,n.getPromise().then((t=>{this._request=void 0,this._metadata=t,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((t,e)=>{const s=$e(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),n=this._ref.storage._makeRequest(s,os,t,e);this._request=n,n.getPromise().then((t=>{this._request=void 0,this._metadata=t,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(t){const e=this._transferred;this._transferred=t,this._transferred!==e&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":case"pausing":this._state=t,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const e="paused"===this._state;this._state=t,e&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=Ut(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=Qe(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,e,s,n){const r=new ts(e||void 0,s||void 0,n||void 0);return this._addObserver(r),()=>{this._removeObserver(r)}}then(t,e){return this._promise.then(t,e)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const e=this._observers.indexOf(t);-1!==e&&this._observers.splice(e,1)}_notifyObservers(){this._finishPromise();const t=this._observers.slice();t.forEach((t=>{this._notifyObserver(t)}))}_finishPromise(){if(void 0!==this._resolve){let t=!0;switch(Qe(this._state)){case Ye.SUCCESS:es(this._resolve.bind(null,this.snapshot))();break;case Ye.CANCELED:case Ye.ERROR:const e=this._reject;es(e.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){const e=Qe(this._state);switch(e){case Ye.RUNNING:case Ye.PAUSED:t.next&&es(t.next.bind(t,this.snapshot))();break;case Ye.SUCCESS:t.complete&&es(t.complete.bind(t))();break;case Ye.CANCELED:case Ye.ERROR:t.error&&es(t.error.bind(t,this._error))();break;default:t.error&&es(t.error.bind(t,this._error))()}}resume(){const t="paused"===this._state||"pausing"===this._state;return t&&this._transition("running"),t}pause(){const t="running"===this._state;return t&&this._transition("pausing"),t}cancel(){const t="running"===this._state||"pausing"===this._state;return t&&this._transition("canceling"),t}}
/**
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
 */class as{constructor(t,e){this._service=t,this._location=e instanceof qt?e:qt.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new as(t,e)}get root(){const t=new qt(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Re(this._location.path)}get storage(){return this._service}get parent(){const t=ke(this._location.path);if(null===t)return null;const e=new qt(this._location.bucket,t);return new as(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw Lt(t)}}function ls(t,e,s){return t._throwIfRoot("uploadBytesResumable"),new is(t,new ve(e),s)}function cs(t){t._throwIfRoot("getDownloadURL");const e=Ve(t.storage,t._location,Ce());return t.storage.makeRequestWithTokens(e,os).then((t=>{if(null===t)throw Nt();return t}))}function us(t,e){const s=Te(t._location.path,e),n=new qt(t._location.bucket,s);return new as(t.storage,n)}
/**
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
 */function ds(t){return/^[A-Za-z]+:\/\//.test(t)}function hs(t,e){return new as(t,e)}function ps(t,e){if(t instanceof gs){const s=t;if(null==s._bucket)throw Ct();const n=new as(s,s._bucket);return null!=e?ps(n,e):n}return void 0!==e?us(t,e):t}function _s(t,e){if(e&&ds(e)){if(t instanceof gs)return hs(t,e);throw It("To use ref(service, url), the first argument must be a Storage instance.")}return ps(t,e)}function fs(t,e){const s=null===e||void 0===e?void 0:e[dt];return null==s?null:qt.makeFromBucketSpec(s,t)}function ms(t,e,s,n={}){t.host=`${e}:${s}`,t._protocol="http";const{mockUserToken:r}=n;r&&(t._overrideAuthToken="string"===typeof r?r:(0,lt.Sg)(r,t.app.options.projectId))}class gs{constructor(t,e,s,n,r){this.app=t,this._authProvider=e,this._appCheckProvider=s,this._url=n,this._firebaseVersion=r,this._bucket=null,this._host=ut,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ht,this._maxUploadRetryTime=pt,this._requests=new Set,this._bucket=null!=n?qt.makeFromBucketSpec(n,this._host):fs(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=qt.makeFromBucketSpec(this._url,t):this._bucket=fs(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Wt("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Wt("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new as(this,t)}_makeRequest(t,e,s,n,r=!0){if(this._deleted)return new Ft(Dt());{const o=oe(t,this._appId,s,n,e,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then((()=>this._requests.delete(o)),(()=>this._requests.delete(o))),o}}async makeRequestWithTokens(t,e){const[s,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,s,n).getPromise()}}const bs="@firebase/storage",ws="0.11.2",vs="storage";function ys(t,e,s){return t=(0,lt.m9)(t),ls(t,e,s)}function ks(t){return t=(0,lt.m9)(t),cs(t)}function Ts(t,e){return t=(0,lt.m9)(t),_s(t,e)}function Rs(t=(0,at.Mq)(),e){t=(0,lt.m9)(t);const s=(0,at.qX)(t,vs),n=s.getImmediate({identifier:e}),r=(0,lt.P0)("storage");return r&&Es(n,...r),n}function Es(t,e,s,n={}){ms(t,e,s,n)}
/**
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
 */function Us(t,{instanceIdentifier:e}){const s=t.getProvider("app").getImmediate(),n=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new gs(s,n,r,e,at.Jn)}function Ps(){(0,at.Xd)(new ct.wA(vs,Us,"PUBLIC").setMultipleInstances(!0)),(0,at.KN)(bs,ws,""),(0,at.KN)(bs,ws,"esm2017")}Ps();const Os=Rs(),Cs=(0,it.ad)(),As=(0,it.IO)((0,it.hJ)(Cs,"products"));var xs={name:"MyProductsView",data(){return{product:{name:"",price:0,image:"",description:"",brand:"",uid:localStorage.getItem("uidUser")},dataProduct:{name:"",price:0,image:"",brand:"",description:"",key:""},messageSuccess:"",messageUpdateSuccess:"",products:[],uploadValue:0,ProgressShow:!1,picture:null,imageData:null,imageName:""}},methods:{AddProduct(){(0,it.ET)(As,this.product).then((()=>{this.ProgressShow=!1,this.messageSuccess="Added",this.product.name="",this.product.price="",this.product.image="",this.product.brand="",this.product.description=""}))},getData(t,e,s,n,r,o){this.dataProduct.name=t,this.dataProduct.brand=e,this.dataProduct.price=s,this.dataProduct.description=n,this.dataProduct.image=r,this.dataProduct.key=o},getDataKey(t,e){this.dataProduct.key=t,this.dataProduct.name=e},UpdateProduct(){const t=(0,it.JU)(Cs,"products",this.dataProduct.key);(0,it.r7)(t,this.dataProduct).then((()=>{this.messageUpdateSuccess="Updated",this.dataProduct.name="",this.dataProduct.brand="",this.dataProduct.price="",this.dataProduct.image="",this.dataProduct.description=""}))},DeleteProduct(t){(0,it.oe)((0,it.JU)(Cs,"products",t)).then((()=>{document.getElementById("close").click()}))},previewImage(t){this.ProgressShow=!0,this.uploadValue=0,this.picture=null,this.imageData=t.target.files[0],this.imageName=t.target.files[0].name;const e=Ts(Os,"images/"+this.imageName),s=ys(e,this.imageData);s.on("state_changed",(t=>{this.uploadValue=t.bytesTransferred/t.totalBytes*100}),(t=>{console.log(t.message)}),(()=>{this.uploadValue=100,ks(s.snapshot.ref).then((t=>{console.log("File available at",t),this.product.image=t}))}))}},created(){(0,it.cf)(As,(t=>{this.products=[],t.forEach((t=>{t.data().uid==this.product.uid&&this.products.push({key:t.id,name:t.data().name,brand:t.data().brand,description:t.data().description,price:t.data().price,image:t.data().image,quantity:1,totalPrice:t.data().price})}))}))}},Ns=s(89);const Ss=(0,Ns.Z)(xs,[["render",ot]]);var Is=Ss}}]);
//# sourceMappingURL=854.da89b5e7.js.map