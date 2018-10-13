webpackJsonp([0,2],{299:function(t,e,a){a(336);var i=a(0)(a(334),a(339),"data-v-7136949a",null);t.exports=i.exports},306:function(t,e,a){a(377);var i=a(0)(a(347),a(392),"data-v-83a40c60",null);t.exports=i.exports},313:function(t,e,a){"use strict";e.a={props:{card:Boolean,visible:Boolean,closable:Boolean,transition:{type:String,default:"fade"}},data:function(){return{show:this.visible}},mounted:function(){document.body.appendChild(this.$el)},methods:{beforeEnter:function(){this.$emit("open")},afterLeave:function(){this.$emit("close")},active:function(){this.show=!0},deactive:function(){this.show=!1}},computed:{enterClass:function(){return this.transition+"In"},leaveClass:function(){return this.transition+"Out"}},watch:{visible:function(t){this.show=t}}}},314:function(t,e,a){"use strict";function i(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,a,s){e=e||"&",a=a||"=";var o={};if("string"!=typeof t||0===t.length)return o;var r=/\+/g;t=t.split(e);var l=1e3;s&&"number"==typeof s.maxKeys&&(l=s.maxKeys);var c=t.length;l>0&&c>l&&(c=l);for(var d=0;d<c;++d){var u,h,p,f,v=t[d].replace(r,"%20"),g=v.indexOf(a);g>=0?(u=v.substr(0,g),h=v.substr(g+1)):(u=v,h=""),p=decodeURIComponent(u),f=decodeURIComponent(h),i(o,p)?n(o[p])?o[p].push(f):o[p]=[o[p],f]:o[p]=f}return o};var n=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},315:function(t,e,a){"use strict";function i(t,e){if(t.map)return t.map(e);for(var a=[],i=0;i<t.length;i++)a.push(e(t[i],i));return a}var n=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,a,r){return e=e||"&",a=a||"=",null===t&&(t=void 0),"object"==typeof t?i(o(t),function(o){var r=encodeURIComponent(n(o))+a;return s(t[o])?i(t[o],function(t){return r+encodeURIComponent(n(t))}).join(e):r+encodeURIComponent(n(t[o]))}).join(e):r?encodeURIComponent(n(r))+a+encodeURIComponent(n(t)):""};var s=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},o=Object.keys||function(t){var e=[];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.push(a);return e}},316:function(t,e,a){"use strict";e.decode=e.parse=a(314),e.encode=e.stringify=a(315)},317:function(t,e,a){"use strict";var i=a(323),n=a.n(i),s=(a(313),a(321)),o=(a.n(s),a(322));a.n(o);a.d(e,"a",function(){return n.a})},318:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(313);e.default={mixins:[i.a],props:{title:{type:String},okText:{type:String,default:"Ok"},cancelText:{type:String,default:"Cancel"}},computed:{classes:function(){return["modal","animated","is-active"]}},methods:{ok:function(){this.$emit("ok")},cancel:function(){this.$emit("cancel")}}}},319:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(313);e.default={mixins:[i.a],props:{closable:{type:Boolean,default:!0}},computed:{classes:function(){return["modal","animated","is-active"]}}}},320:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(313);e.default={mixins:[i.a],props:{closable:{type:Boolean,default:!0}},computed:{classes:function(){return["modal","animated","is-active"]}}}},321:function(t,e,a){var i=a(0)(a(318),a(325),null,null);t.exports=i.exports},322:function(t,e,a){var i=a(0)(a(319),a(324),null,null);t.exports=i.exports},323:function(t,e,a){var i=a(0)(a(320),a(326),null,null);t.exports=i.exports},324:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:t.transition,mode:"in-out",appear:"","appear-active-class":t.enterClass,"enter-active-class":t.enterClass,"leave-active-class":t.leaveClass},on:{beforeEnter:t.beforeEnter,afterLeave:t.afterLeave}},[t.show?a("div",{class:t.classes},[a("div",{staticClass:"modal-background",on:{click:t.deactive}}),t._v(" "),a("div",{staticClass:"modal-content"},[t._t("default")],2),t._v(" "),t.closable?a("button",{staticClass:"modal-close",on:{click:t.deactive}}):t._e()]):t._e()])},staticRenderFns:[]}},325:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:t.transition,mode:"in-out",appear:"","appear-active-class":t.enterClass,"enter-active-class":t.enterClass,"leave-active-class":t.leaveClass},on:{beforeEnter:t.beforeEnter,afterLeave:t.afterLeave}},[t.show?a("div",{class:t.classes},[a("div",{staticClass:"modal-background",on:{click:t.deactive}}),t._v(" "),a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v(t._s(t.title))]),t._v(" "),a("button",{staticClass:"delete",on:{click:t.deactive}})]),t._v(" "),a("section",{staticClass:"modal-card-body"},[t._t("default")],2),t._v(" "),a("footer",{staticClass:"modal-card-foot"},[a("a",{staticClass:"button is-primary",on:{click:t.ok}},[t._v(t._s(t.okText))]),t._v(" "),a("a",{staticClass:"button",on:{click:t.cancel}},[t._v(t._s(t.cancelText))])])])]):t._e()])},staticRenderFns:[]}},326:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:t.transition,mode:"in-out",appear:"","appear-active-class":t.enterClass,"enter-active-class":t.enterClass,"leave-active-class":t.leaveClass},on:{beforeEnter:t.beforeEnter,afterLeave:t.afterLeave}},[t.show?a("div",{class:t.classes},[a("div",{staticClass:"modal-background",on:{click:t.deactive}}),t._v(" "),a("div",{staticClass:"modal-container"},[a("div",{staticClass:"modal-content"},[t._t("default")],2)]),t._v(" "),t.closable?a("button",{staticClass:"modal-close",on:{click:t.deactive}}):t._e()]):t._e()])},staticRenderFns:[]}},334:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(317);e.default={components:{Modal:i.a},props:{visible:Boolean,object:Object,type:String},data:function(){return{editing:!1,action:"",pageTitle:"",errorMsg:null,filename:""}},methods:{addPageValidator:function(){return""===this.pageTitle||!this.filename.endsWith(".html")},createPage:function(){if(this.filename.endsWith(".html")){this.errorMsg=null;var t={folder:this.object.original.Path+this.object.original.Name+"/",filename:this.filename,headers:{title:this.pageTitle}};this.pageTitle="",this.filename="",this.$emit("createPage",t)}else this.errorMsg="Filename must ends with .html"},validateFilename:function(){return console.log("validaing title"+this.filename),!1},validateTitle:function(){return console.log("validaing title"+this.pageTitle),!0},checkAction:function(t,e){return t===e},isInEdit:function(){return!0===this.editing},isDir:function(){return"Dir"===this.object.subtype},isFile:function(){return"File"===this.object.subtype},cancel:function(){!0===this.editing?this.editing=!1:this.close()},close:function(){this.$emit("close")},edit:function(t){console.log("emiting editObj"),console.log(t),this.$emit("editObj",t)},addPage:function(){this.action="AddPage",this.editing=!0},addFolder:function(){this.action="AddFolder",this.editing=!0}}}},335:function(t,e,a){e=t.exports=a(295)(),e.push([t.i,".box[data-v-7136949a]{min-height:400px}.btnNoPad[data-v-7136949a]{width:29%}.btn[data-v-7136949a]{width:29%;margin:30px}.rightfloat[data-v-7136949a]{float:right}","",{version:3,sources:["/mnt/windows/shared/workspaces/acentera/serverless-ui/client/views/design/modals/InfoModal.vue"],names:[],mappings:"AACA,sBACE,gBAAkB,CACnB,AACD,2BACE,SAAW,CACZ,AACD,sBACE,UAAW,AACX,WAAY,CACb,AACD,6BACE,WAAa,CACd",file:"InfoModal.vue",sourcesContent:["\n.box[data-v-7136949a] {\n  min-height: 400px;\n}\n.btnNoPad[data-v-7136949a] {\n  width: 29%;\n}\n.btn[data-v-7136949a] {\n  width: 29%;\n  margin:30px;\n}\n.rightfloat[data-v-7136949a] {\n  float: right;\n}\n\n"],sourceRoot:""}])},336:function(t,e,a){var i=a(335);"string"==typeof i&&(i=[[t.i,i,""]]);a(296)(i,{});i.locals&&(t.exports=i.locals)},339:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("modal",{attrs:{visible:t.visible},on:{close:t.close}},[a("div",{staticClass:"box"},[a("article",{staticClass:"media"},[a("div",{staticClass:"media-content"},[a("button",{staticClass:"btnNoPad rightfloat",on:{click:t.cancel}},[t._v("Cancel")]),t._v(" "),a("div",{staticClass:"content"},[t.editing?a("div",[t._v("\n              In edit action\n\n              "),a("p",[a("strong",[t._v("Action is : "+t._s(t.action))])]),t._v(" "),t.checkAction(t.action,"AddPage")?a("div",[a("article",{staticClass:"tile is-child box"},[a("label",{staticClass:"label"},[t._v("Page Title")]),t._v(" "),a("div",{staticClass:"field has-addons"},[a("p",{staticClass:"control is-expanded"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.pageTitle,expression:"pageTitle"}],staticClass:"input",attrs:{type:"text",placeholder:"Enter page title here"},domProps:{value:t.pageTitle},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.validateTitle()},input:function(e){e.target.composing||(t.pageTitle=e.target.value)}}})])]),t._v(" "),a("label",{staticClass:"label"},[t._v("File name "),a("i",[t._v("(must ends with .html)")])]),t._v(" "),a("div",{staticClass:"field has-addons"},[a("p",{staticClass:"control is-expanded"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.filename,expression:"filename"}],staticClass:"input",attrs:{type:"text",placeholder:"Enter .html file name here"},domProps:{value:t.filename},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.validateFilename()},input:function(e){e.target.composing||(t.filename=e.target.value)}}})])]),t._v(" "),a("p",{staticClass:"control"},[a("a",{staticClass:"button rightfloat is-primary",attrs:{disabled:t.addPageValidator()},on:{click:function(e){t.createPage()}}},[a("span",[t._v("Create page")])])])])]):t._e(),t._v(" "),t.checkAction(t.action,"AddFolder")?a("div",[t._v("\n                Adding foler\n              ")]):t._e()]):t._e(),t._v(" "),t.editing?t._e():a("div",[t.isDir(t.object)?a("div",[a("p",[a("strong",[t._v("Selected Directory: "+t._s(t.object.key))]),t._v(" "),a("br"),t._v("Type is "+t._s(t.type)+" HTML\n                "),a("br"),t._v("Select one of the operation below."),a("br")])]):t._e(),t._v(" "),t.isFile(t.object)?a("div",[a("p",[a("strong",[t._v("File "+t._s(t.object.key))]),t._v("\n                Path: "+t._s(t.object.original.Path)+"\n                "),a("br"),t._v("Type is "+t._s(t.type)+"\n              ")])]):t._e()])]),t._v(" "),t.editing?t._e():a("div",{staticClass:"buttons"},[t.isDir(t.object)?a("div",[a("button",{staticClass:"btn",on:{click:t.addPage}},[t._v("Add Page")]),t._v(" "),a("button",{staticClass:"btn",on:{click:t.addFolder}},[t._v("Add Folder")]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("button",{staticClass:"btn",attrs:{title:"Not yet implemented",disabled:""}},[t._v("Delete Folder")])]):t._e(),t._v(" "),t.isFile(t.object)?a("div",[a("button",{staticClass:"btn right",on:{click:function(e){t.edit(t.object)}}},[t._v("Edit")]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("button",{staticClass:"btn",attrs:{title:"Not yet implemented",disabled:""}},[t._v("Delete Page")]),t._v(" "),a("button",{staticClass:"btn",attrs:{title:"Not yet implemented",disabled:""}},[t._v("Copy Page")])]):t._e()])])])])])},staticRenderFns:[]}},347:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(8),n=a(22),s=a.n(n),o=a(21),r=a(2),l=a(299),c=a.n(l),d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},u=a(316);e.default={components:{Tooltip:i.a,TreeView:s.a,Modal:c.a,Sidebartwo:o.c},data:function(){return{csrf:"",showModal:!1,plaintext:"",testTitle:"",selectedObject:null,type:"Static",selectedPage:null,cipher:"",userTransitKey:"",extra:"?editMode=static",editing:!1,chart:[]}},mounted:function(){var t=this;console.log("is github"),console.log(this),console.log(this.github),this.$bus.$on("staticHtmlSelected",function(e){console.log("reciev inc dotal modal"),console.log(this),t.selectedObject=e,t.showModal=!0}),this.$bus.$on("staticHtmlEdit",function(e){console.log("reciev edidt of ...data"),console.log(e),t.selectedPage="http://localhost:1313/"+e.original.Path+t.extra}),this.refreshData()},computed:d({},a.i(r.mapGetters)({session:"session",github:"github",pkginfo:"pkg",sidebartwo:"sidebartwo",repoState:"repoState"})),events:{incrementTotal:function(){console.log("total aaa")}},methods:{refreshData:function(){var t=this;console.log("get file listing"),this.$http.get("http://localhost:1313/api/filelist").then(function(e){t.$data.chart=e.data,t.$store.commit("TOGGLE_SIDEBAR_TWO",!0),t.$store.commit("TOGGLE_SIDEBAR_TWO_DATA",e.data)}).catch(function(e){t.$onError(e)})},close:function(){console.log("close here a"),this.showModal=!1},createPage:function(t){var e=this;console.log("creating page using"),console.log(t);for(var a=t.folder,i=a,n=0;"/"===a[n++];)i=a.substring(1);a=t.filename;var s=a;for(n=0;"/"===a[n++];)s=a.substring(1);var o={filename:s,path:i,headers:t.headers},r=this;this.$http.post("http://localhost:1313/api/fileupload",o,{headers:{TmpHeader:"tmp"}}).then(function(t){console.log("got response"),console.log(t),r.refreshData(),r.close(),r.$notify({title:"Success",message:"Creation successful",type:"success"}),e.selectedPage="http://localhost:1313/"+o.path+"/"+o.filename+r.extra}).catch(function(t){console.log("got error eee"),console.log(t),r.close(),r.$onError(t)})},editObj:function(t){console.log("edit obj of"),console.log(t),console.log(t.original.Path),this.selectedPage="http://localhost:1313/"+t.original.Path,this.showModal=!1},closeModalBasic:function(){console.log("close modal basic here"),this.selectedIndex=-1,this.showModal=!1},AtoggleSidebar:function(t){this.$store.commit("TOGGLE_SIDEBAR_TWO",!0),this.$store.commit("TOGGLE_SIDEBAR_TWO_DATA",this.$data.chart)},incrementTotal:function(){console.log("total aaa")},openWrench:function(){console.log("azz")},encryptText:function(){var t=this;this.editing||this.$http.post("/api/transit/encrypt",u.stringify({plaintext:this.plaintext,key:this.userTransitKey}),{headers:{"X-CSRF-Token":this.csrf}}).then(function(e){t.cipher=e.data.result,t.plaintext="",t.$notify({title:"Success",message:"Encryption successful",type:"success"})}).catch(function(e){t.$onError(e)})},decryptText:function(){var t=this;this.editing||this.$http.post("/api/transit/decrypt",u.stringify({cipher:this.cipher,key:this.userTransitKey}),{headers:{"X-CSRF-Token":this.csrf}}).then(function(e){t.plaintext=e.data.result,t.cipher="",t.$notify({title:"Success",message:"Decryption successful",type:"success"})}).catch(function(e){t.$onError(e)})},clearPlaintext:function(){this.plaintext=""},clearCipher:function(){this.cipher=""},isRepoError:function(){return this.repoState.updating>=5},changeKey:function(){this.editing=!0}}}},363:function(t,e,a){e=t.exports=a(295)(),e.push([t.i,".padleft[data-v-83a40c60]{position:relative;left:30px;top:30px;height:300px;-ms-flex-positive:0;flex-grow:0;min-height:300px;width:90%}.app-inner-content[data-v-83a40c60]{height:100%}.button[data-v-83a40c60]{margin:5px 0 0}.fullheight[data-v-83a40c60]{height:100%;min-height:100%}.control .button[data-v-83a40c60]{margin:inherit}.fa-trash-o[data-v-83a40c60]{color:red}.fa-info[data-v-83a40c60]{color:#87cefa}","",{version:3,sources:["/mnt/windows/shared/workspaces/acentera/serverless-ui/client/views/design/Pages.vue"],names:[],mappings:"AACA,0BACE,kBAAmB,AACnB,UAAU,AACV,SAAS,AACT,aAAa,AACb,oBAAqB,AACjB,YAAa,AACjB,iBAAiB,AACjB,SAAU,CACX,AACD,oCACI,WAAa,CAChB,AACD,yBACE,cAAgB,CACjB,AACD,6BACE,YAAa,AACb,eAAgB,CACjB,AACD,kCACE,cAAgB,CACjB,AACD,6BACE,SAAW,CACZ,AACD,0BACE,aAAoB,CACrB",file:"Pages.vue",sourcesContent:["\n.padleft[data-v-83a40c60] {\n  position: relative;\n  left:30px;\n  top:30px;\n  height:300px;\n  -ms-flex-positive: 0;\n      flex-grow: 0;\n  min-height:300px;\n  width:90%;\n}\n.app-inner-content[data-v-83a40c60] {\n    height: 100%;\n}\n.button[data-v-83a40c60] {\n  margin: 5px 0 0;\n}\n.fullheight[data-v-83a40c60] {\n  height: 100%;\n  min-height:100%;\n}\n.control .button[data-v-83a40c60] {\n  margin: inherit;\n}\n.fa-trash-o[data-v-83a40c60] {\n  color: red;\n}\n.fa-info[data-v-83a40c60] {\n  color: lightskyblue;\n}\n"],sourceRoot:""}])},377:function(t,e,a){var i=a(363);"string"==typeof i&&(i=[[t.i,i,""]]);a(296)(i,{});i.locals&&(t.exports=i.locals)},392:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-inner-content"},[t.isRepoError()?a("div",[t._m(0)]):t._e(),t._v(" "),t.isRepoError()?t._e():a("div",{staticClass:"fullheight"},[a("modal",{attrs:{visible:t.showModal,object:t.selectedObject,type:t.type},on:{close:t.closeModalBasic,createPage:function(e){t.createPage(e)},editObj:function(e){t.editObj(e)}}}),t._v(" "),a("sidebartwo",{attrs:{jsonData:t.sidebartwo.json,show:t.sidebartwo.opened&&!t.sidebartwo.hidden}}),t._v(" "),a("div",{staticClass:"tile is-ancestor is-vertical fullheight"},[t.selectedPage?t._e():a("article",{staticClass:"padleft tile is-child box"},[a("label",{staticClass:"label"},[t._v("Select a page to exit from the left menu.")])]),t._v(" "),t.selectedPage?a("iframe",{staticClass:"fullheight",attrs:{src:t.selectedPage}}):t._e()],1)],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tile is-ancestor is-vertical fullheight"},[a("article",{staticClass:"padleft tile is-child box"},[a("label",{staticClass:"label"},[t._v("Your current repository is in error. "),a("br"),a("br"),t._v("Validate if you have a .git/config file, in your folder or ask for help on our gitter channel.")])])])}]}}});
//# sourceMappingURL=0.4c5416b398010cf030c3.js.map