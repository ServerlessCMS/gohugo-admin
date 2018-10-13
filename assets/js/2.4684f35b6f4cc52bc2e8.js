webpackJsonp([2],{299:function(t,e,a){a(336);var i=a(0)(a(334),a(339),"data-v-7136949a",null);t.exports=i.exports},313:function(t,e,a){"use strict";e.a={props:{card:Boolean,visible:Boolean,closable:Boolean,transition:{type:String,default:"fade"}},data:function(){return{show:this.visible}},mounted:function(){document.body.appendChild(this.$el)},methods:{beforeEnter:function(){this.$emit("open")},afterLeave:function(){this.$emit("close")},active:function(){this.show=!0},deactive:function(){this.show=!1}},computed:{enterClass:function(){return this.transition+"In"},leaveClass:function(){return this.transition+"Out"}},watch:{visible:function(t){this.show=t}}}},317:function(t,e,a){"use strict";var i=a(323),n=a.n(i),s=(a(313),a(321)),o=(a.n(s),a(322));a.n(o);a.d(e,"a",function(){return n.a})},318:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(313);e.default={mixins:[i.a],props:{title:{type:String},okText:{type:String,default:"Ok"},cancelText:{type:String,default:"Cancel"}},computed:{classes:function(){return["modal","animated","is-active"]}},methods:{ok:function(){this.$emit("ok")},cancel:function(){this.$emit("cancel")}}}},319:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(313);e.default={mixins:[i.a],props:{closable:{type:Boolean,default:!0}},computed:{classes:function(){return["modal","animated","is-active"]}}}},320:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(313);e.default={mixins:[i.a],props:{closable:{type:Boolean,default:!0}},computed:{classes:function(){return["modal","animated","is-active"]}}}},321:function(t,e,a){var i=a(0)(a(318),a(325),null,null);t.exports=i.exports},322:function(t,e,a){var i=a(0)(a(319),a(324),null,null);t.exports=i.exports},323:function(t,e,a){var i=a(0)(a(320),a(326),null,null);t.exports=i.exports},324:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:t.transition,mode:"in-out",appear:"","appear-active-class":t.enterClass,"enter-active-class":t.enterClass,"leave-active-class":t.leaveClass},on:{beforeEnter:t.beforeEnter,afterLeave:t.afterLeave}},[t.show?a("div",{class:t.classes},[a("div",{staticClass:"modal-background",on:{click:t.deactive}}),t._v(" "),a("div",{staticClass:"modal-content"},[t._t("default")],2),t._v(" "),t.closable?a("button",{staticClass:"modal-close",on:{click:t.deactive}}):t._e()]):t._e()])},staticRenderFns:[]}},325:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:t.transition,mode:"in-out",appear:"","appear-active-class":t.enterClass,"enter-active-class":t.enterClass,"leave-active-class":t.leaveClass},on:{beforeEnter:t.beforeEnter,afterLeave:t.afterLeave}},[t.show?a("div",{class:t.classes},[a("div",{staticClass:"modal-background",on:{click:t.deactive}}),t._v(" "),a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v(t._s(t.title))]),t._v(" "),a("button",{staticClass:"delete",on:{click:t.deactive}})]),t._v(" "),a("section",{staticClass:"modal-card-body"},[t._t("default")],2),t._v(" "),a("footer",{staticClass:"modal-card-foot"},[a("a",{staticClass:"button is-primary",on:{click:t.ok}},[t._v(t._s(t.okText))]),t._v(" "),a("a",{staticClass:"button",on:{click:t.cancel}},[t._v(t._s(t.cancelText))])])])]):t._e()])},staticRenderFns:[]}},326:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:t.transition,mode:"in-out",appear:"","appear-active-class":t.enterClass,"enter-active-class":t.enterClass,"leave-active-class":t.leaveClass},on:{beforeEnter:t.beforeEnter,afterLeave:t.afterLeave}},[t.show?a("div",{class:t.classes},[a("div",{staticClass:"modal-background",on:{click:t.deactive}}),t._v(" "),a("div",{staticClass:"modal-container"},[a("div",{staticClass:"modal-content"},[t._t("default")],2)]),t._v(" "),t.closable?a("button",{staticClass:"modal-close",on:{click:t.deactive}}):t._e()]):t._e()])},staticRenderFns:[]}},334:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(317);e.default={components:{Modal:i.a},props:{visible:Boolean,object:Object,type:String},data:function(){return{editing:!1,action:"",pageTitle:"",errorMsg:null,filename:""}},methods:{addPageValidator:function(){return""===this.pageTitle||!this.filename.endsWith(".html")},createPage:function(){if(this.filename.endsWith(".html")){this.errorMsg=null;var t={folder:this.object.original.Path+this.object.original.Name+"/",filename:this.filename,headers:{title:this.pageTitle}};this.pageTitle="",this.filename="",this.$emit("createPage",t)}else this.errorMsg="Filename must ends with .html"},validateFilename:function(){return console.log("validaing title"+this.filename),!1},validateTitle:function(){return console.log("validaing title"+this.pageTitle),!0},checkAction:function(t,e){return t===e},isInEdit:function(){return!0===this.editing},isDir:function(){return"Dir"===this.object.subtype},isFile:function(){return"File"===this.object.subtype},cancel:function(){!0===this.editing?this.editing=!1:this.close()},close:function(){this.$emit("close")},edit:function(t){console.log("emiting editObj"),console.log(t),this.$emit("editObj",t)},addPage:function(){this.action="AddPage",this.editing=!0},addFolder:function(){this.action="AddFolder",this.editing=!0}}}},335:function(t,e,a){e=t.exports=a(295)(),e.push([t.i,".box[data-v-7136949a]{min-height:400px}.btnNoPad[data-v-7136949a]{width:29%}.btn[data-v-7136949a]{width:29%;margin:30px}.rightfloat[data-v-7136949a]{float:right}","",{version:3,sources:["/mnt/windows/shared/workspaces/acentera/serverless-ui/client/views/design/modals/InfoModal.vue"],names:[],mappings:"AACA,sBACE,gBAAkB,CACnB,AACD,2BACE,SAAW,CACZ,AACD,sBACE,UAAW,AACX,WAAY,CACb,AACD,6BACE,WAAa,CACd",file:"InfoModal.vue",sourcesContent:["\n.box[data-v-7136949a] {\n  min-height: 400px;\n}\n.btnNoPad[data-v-7136949a] {\n  width: 29%;\n}\n.btn[data-v-7136949a] {\n  width: 29%;\n  margin:30px;\n}\n.rightfloat[data-v-7136949a] {\n  float: right;\n}\n\n"],sourceRoot:""}])},336:function(t,e,a){var i=a(335);"string"==typeof i&&(i=[[t.i,i,""]]);a(296)(i,{});i.locals&&(t.exports=i.locals)},339:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("modal",{attrs:{visible:t.visible},on:{close:t.close}},[a("div",{staticClass:"box"},[a("article",{staticClass:"media"},[a("div",{staticClass:"media-content"},[a("button",{staticClass:"btnNoPad rightfloat",on:{click:t.cancel}},[t._v("Cancel")]),t._v(" "),a("div",{staticClass:"content"},[t.editing?a("div",[t._v("\n              In edit action\n\n              "),a("p",[a("strong",[t._v("Action is : "+t._s(t.action))])]),t._v(" "),t.checkAction(t.action,"AddPage")?a("div",[a("article",{staticClass:"tile is-child box"},[a("label",{staticClass:"label"},[t._v("Page Title")]),t._v(" "),a("div",{staticClass:"field has-addons"},[a("p",{staticClass:"control is-expanded"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.pageTitle,expression:"pageTitle"}],staticClass:"input",attrs:{type:"text",placeholder:"Enter page title here"},domProps:{value:t.pageTitle},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.validateTitle()},input:function(e){e.target.composing||(t.pageTitle=e.target.value)}}})])]),t._v(" "),a("label",{staticClass:"label"},[t._v("File name "),a("i",[t._v("(must ends with .html)")])]),t._v(" "),a("div",{staticClass:"field has-addons"},[a("p",{staticClass:"control is-expanded"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.filename,expression:"filename"}],staticClass:"input",attrs:{type:"text",placeholder:"Enter .html file name here"},domProps:{value:t.filename},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.validateFilename()},input:function(e){e.target.composing||(t.filename=e.target.value)}}})])]),t._v(" "),a("p",{staticClass:"control"},[a("a",{staticClass:"button rightfloat is-primary",attrs:{disabled:t.addPageValidator()},on:{click:function(e){t.createPage()}}},[a("span",[t._v("Create page")])])])])]):t._e(),t._v(" "),t.checkAction(t.action,"AddFolder")?a("div",[t._v("\n                Adding foler\n              ")]):t._e()]):t._e(),t._v(" "),t.editing?t._e():a("div",[t.isDir(t.object)?a("div",[a("p",[a("strong",[t._v("Selected Directory: "+t._s(t.object.key))]),t._v(" "),a("br"),t._v("Type is "+t._s(t.type)+" HTML\n                "),a("br"),t._v("Select one of the operation below."),a("br")])]):t._e(),t._v(" "),t.isFile(t.object)?a("div",[a("p",[a("strong",[t._v("File "+t._s(t.object.key))]),t._v("\n                Path: "+t._s(t.object.original.Path)+"\n                "),a("br"),t._v("Type is "+t._s(t.type)+"\n              ")])]):t._e()])]),t._v(" "),t.editing?t._e():a("div",{staticClass:"buttons"},[t.isDir(t.object)?a("div",[a("button",{staticClass:"btn",on:{click:t.addPage}},[t._v("Add Page")]),t._v(" "),a("button",{staticClass:"btn",on:{click:t.addFolder}},[t._v("Add Folder")]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("button",{staticClass:"btn",attrs:{title:"Not yet implemented",disabled:""}},[t._v("Delete Folder")])]):t._e(),t._v(" "),t.isFile(t.object)?a("div",[a("button",{staticClass:"btn right",on:{click:function(e){t.edit(t.object)}}},[t._v("Edit")]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("button",{staticClass:"btn",attrs:{title:"Not yet implemented",disabled:""}},[t._v("Delete Page")]),t._v(" "),a("button",{staticClass:"btn",attrs:{title:"Not yet implemented",disabled:""}},[t._v("Copy Page")])]):t._e()])])])])])},staticRenderFns:[]}}});
//# sourceMappingURL=2.4684f35b6f4cc52bc2e8.js.map