webpackJsonp([11],{307:function(t,e,a){a(371);var n=a(0)(a(348),a(386),"data-v-1ccbfbc2",null);t.exports=n.exports},314:function(t,e,a){"use strict";function n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,a,i){e=e||"&",a=a||"=";var r={};if("string"!=typeof t||0===t.length)return r;var o=/\+/g;t=t.split(e);var c=1e3;i&&"number"==typeof i.maxKeys&&(c=i.maxKeys);var l=t.length;c>0&&l>c&&(l=c);for(var u=0;u<l;++u){var p,d,v,f,h=t[u].replace(o,"%20"),y=h.indexOf(a);y>=0?(p=h.substr(0,y),d=h.substr(y+1)):(p=h,d=""),v=decodeURIComponent(p),f=decodeURIComponent(d),n(r,v)?s(r[v])?r[v].push(f):r[v]=[r[v],f]:r[v]=f}return r};var s=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},315:function(t,e,a){"use strict";function n(t,e){if(t.map)return t.map(e);for(var a=[],n=0;n<t.length;n++)a.push(e(t[n],n));return a}var s=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,a,o){return e=e||"&",a=a||"=",null===t&&(t=void 0),"object"==typeof t?n(r(t),function(r){var o=encodeURIComponent(s(r))+a;return i(t[r])?n(t[r],function(t){return o+encodeURIComponent(s(t))}).join(e):o+encodeURIComponent(s(t[r]))}).join(e):o?encodeURIComponent(s(o))+a+encodeURIComponent(s(t)):""};var i=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},r=Object.keys||function(t){var e=[];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.push(a);return e}},316:function(t,e,a){"use strict";e.decode=e.parse=a(314),e.encode=e.stringify=a(315)},348:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(316);e.default={data:function(){return{csrf:"",tableData:[],currToken:"",newKey:"",newValue:"",wrap_ttl:"300"}},mounted:function(){var t=this;this.$http.get("/api/wrapping").then(function(e){t.csrf=e.headers["x-csrf-token"]}).catch(function(e){t.$onError(e)})},methods:{packData:function(){for(var t={},e=0;e<this.tableData.length;e++)t[this.tableData[e].key]=this.tableData[e].value;return t},wrapData:function(){var t=this;0!==this.tableData.length&&this.$http.post("/api/wrapping/wrap",n.stringify({wrapttl:this.wrap_ttl,data:JSON.stringify(this.packData())}),{headers:{"X-CSRF-Token":this.csrf}}).then(function(e){t.$message({message:"Wrapping token: "+e.data.result,type:"success",duration:0,showCloseButton:!0})}).catch(function(e){t.$onError(e)})},unwrapToken:function(){var t=this;""!==this.currToken&&this.$http.post("/api/wrapping/unwrap",n.stringify({wrappingToken:this.currToken}),{headers:{"X-CSRF-Token":this.csrf}}).then(function(e){t.tableData=[],t.unpackData(e.data.result)}).catch(function(e){t.$onError(e)})},unpackData:function(t){var e=this;Object.keys(t).map(function(a){return e.tableData.push({key:a,value:t[a],isClicked:!1})})},deleteItem:function(t){this.tableData.splice(t,1)},clicked:function(t){this.tableData[t].isClicked=!0},keyExists:function(t){for(var e=0;e<this.tableData.length;e++)if(this.tableData[e].key===t)return!0;return!1},addKeyValue:function(){return""===this.newKey?void this.$notify({title:"Invalid",message:"Key cannot be empty",type:"warning"}):this.keyExists(this.newKey)?void this.$notify({title:"Invalid",message:"Key already exists",type:"warning"}):(this.tableData.push({key:this.newKey,value:this.newValue,isClicked:!1}),this.newKey="",void(this.newValue=""))},doneEdit:function(t,e){return""===this.tableData[e].key?void this.$notify({title:"Invalid",message:"Key already exists",type:"warning"}):this.keyExists(t)?void this.$notify({title:"Invalid",message:"Key already exists",type:"warning"}):void(this.tableData[e].isClicked=!1)},stringToSeconds:function(t){if(t.includes("-"))return-1;var e=0,a=t.match(/(\d+)\s*d/),n=t.match(/(\d+)\s*h/),s=t.match(/(\d+)\s*m/),i=t.match(/(\d+)$/)||t.match(/(\d+)\s*s/);return a&&(e+=86400*parseInt(a[1])),n&&(e+=3600*parseInt(n[1])),s&&(e+=60*parseInt(s[1])),i&&(e+=parseInt(i[1])),e}}}},357:function(t,e,a){e=t.exports=a(295)(),e.push([t.i,".button[data-v-1ccbfbc2]{margin:5px 0 0}.control .button[data-v-1ccbfbc2]{margin:inherit}.fa-trash-o[data-v-1ccbfbc2]{color:red}.fa-info[data-v-1ccbfbc2]{color:#87cefa}","",{version:3,sources:["/mnt/windows/shared/workspaces/acentera/serverless-ui/client/views/design/Wrapper.vue"],names:[],mappings:"AACA,yBACE,cAAgB,CACjB,AACD,kCACE,cAAgB,CACjB,AACD,6BACE,SAAW,CACZ,AACD,0BACE,aAAoB,CACrB",file:"Wrapper.vue",sourcesContent:["\n.button[data-v-1ccbfbc2] {\n  margin: 5px 0 0;\n}\n.control .button[data-v-1ccbfbc2] {\n  margin: inherit;\n}\n.fa-trash-o[data-v-1ccbfbc2] {\n  color: red;\n}\n.fa-info[data-v-1ccbfbc2] {\n  color: lightskyblue;\n}\n"],sourceRoot:""}])},371:function(t,e,a){var n=a(357);"string"==typeof n&&(n=[[t.i,n,""]]);a(296)(n,{});n.locals&&(t.exports=n.locals)},386:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"tile is-ancestor"},[a("div",{staticClass:"tile is-parent"},[a("article",{staticClass:"tile is-child box"},[a("label",{staticClass:"label"},[t._v("Token")]),t._v(" "),a("div",{staticClass:"field has-addons"},[a("p",{staticClass:"control is-expanded"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.currToken,expression:"currToken"}],staticClass:"input",attrs:{type:"text",placeholder:"Paste token here to unwrap"},domProps:{value:t.currToken},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.unwrapToken()},input:function(e){e.target.composing||(t.currToken=e.target.value)}}})]),t._v(" "),a("p",{staticClass:"control"},[a("a",{staticClass:"button is-primary",attrs:{disabled:""===t.currToken},on:{click:function(e){t.unwrapToken()}}},[a("span",[t._v("Unwrap")])])])]),t._v(" "),a("label",{staticClass:"label"},[t._v(" Data ")]),t._v(" "),a("article",{staticClass:"tile is-child box"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table is-striped is-narrow"},[t._m(0),t._v(" "),a("tbody",[t._l(t.tableData,function(e,n){return a("tr",[e.isClicked?a("td",[a("p",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.key,expression:"entry.key"}],staticClass:"input is-small",attrs:{type:"text",placeholder:""},domProps:{value:e.key},on:{keyup:function(a){if(!("button"in a)&&t._k(a.keyCode,"enter",13))return null;t.doneEdit(e.key,n)},input:function(t){t.target.composing||(e.key=t.target.value)}}})])]):a("td",{on:{click:function(e){t.clicked(n)}}},[t._v("\n                    "+t._s(e.key)+"\n                  ")]),t._v(" "),e.isClicked?a("td",[a("p",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"entry.value"}],staticClass:"input is-small",attrs:{type:"text",placeholder:""},domProps:{value:e.value},on:{keyup:function(a){if(!("button"in a)&&t._k(a.keyCode,"enter",13))return null;t.doneEdit(e.key,n)},input:function(t){t.target.composing||(e.value=t.target.value)}}})])]):a("td",{on:{click:function(e){t.clicked(n)}}},[t._v("\n                    "+t._s(e.value)+"\n                  ")]),t._v(" "),a("td",{attrs:{width:"30"}},[e.isClicked?a("a",{on:{click:function(e){t.deleteItem(n)}}},[t._m(1,!0)]):t._e()])])}),t._v(" "),a("tr",{on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.addKeyValue()}}},[a("td",[a("p",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newKey,expression:"newKey"}],staticClass:"input is-small",class:[""===t.newKey?"":"is-success",t.keyExists(t.newKey)?"is-danger":""],attrs:{type:"text",placeholder:"Add a key to wrap"},domProps:{value:t.newKey},on:{input:function(e){e.target.composing||(t.newKey=e.target.value)}}})])]),t._v(" "),a("td",[a("p",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newValue,expression:"newValue"}],staticClass:"input is-small",class:[""===t.newValue?"":"is-success"],attrs:{type:"text",placeholder:"Add a value to wrap"},domProps:{value:t.newValue},on:{input:function(e){e.target.composing||(t.newValue=e.target.value)}}})])])])],2),t._v(" "),a("tfoot",{directives:[{name:"show",rawName:"v-show",value:t.tableData.length>10,expression:"tableData.length > 10"}]},[a("tr",[a("th",[t._v("Key")]),t._v(" "),a("th",[t._v("Value")]),t._v(" "),a("th")])])],1)]),t._v(" "),a("nav",{staticClass:"level"},[a("div",{staticClass:"level-left"}),t._v(" "),a("div",{staticClass:"level-right"},[a("div",{staticClass:"field has-addons is-pulled-right"},[a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.wrap_ttl,expression:"wrap_ttl"}],staticClass:"input",class:t.stringToSeconds(this.wrap_ttl)<0?"is-danger":"",attrs:{type:"text",placeholder:"Wrap-ttl e.g. '5m'"},domProps:{value:t.wrap_ttl},on:{input:function(e){e.target.composing||(t.wrap_ttl=e.target.value)}}}),t._v(" "),t.stringToSeconds(this.wrap_ttl)<0?a("p",{staticClass:"help is-danger"},[t._v("\n                TTL cannot be negative\n              ")]):t._e(),t._v(" "),t.stringToSeconds(this.wrap_ttl)>0?a("p",{staticClass:"help is-info"},[t._v("\n                "+t._s(t.stringToSeconds(this.wrap_ttl))+" seconds\n              ")]):t._e()]),t._v(" "),a("p",{staticClass:"control"},[a("a",{staticClass:"button is-primary",attrs:{disabled:0===t.tableData.length},on:{click:function(e){t.wrapData()}}},[a("span",[t._v("Wrap")])])])])])])])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Key")]),t._v(" "),a("th",[t._v("Value")]),t._v(" "),a("th",{attrs:{width:"1"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("i",{staticClass:"fa fa-times-circle"})])}]}}});
//# sourceMappingURL=11.7d97b7e7ad58b51c0453.js.map