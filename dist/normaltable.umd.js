var __defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,t,n)=>t in e?__defProp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,__spreadValues=(e,t)=>{for(var n in t||(t={}))__hasOwnProp.call(t,n)&&__defNormalProp(e,n,t[n]);if(__getOwnPropSymbols)for(var n of __getOwnPropSymbols(t))__propIsEnum.call(t,n)&&__defNormalProp(e,n,t[n]);return e},__spreadProps=(e,t)=>__defProps(e,__getOwnPropDescs(t)),__async=(e,t,n)=>new Promise(((a,r)=>{var l=e=>{try{i(n.next(e))}catch(t){r(t)}},o=e=>{try{i(n.throw(e))}catch(t){r(t)}},i=e=>e.done?a(e.value):Promise.resolve(e.value).then(l,o);i((n=n.apply(e,t)).next())}));!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).normaltable={})}(this,(function(e){"use strict";function t(e,t,n,a,r,l,o,i){var s,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),a&&(c.functional=!0),l&&(c._scopeId="data-v-"+l),o?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=s):r&&(s=i?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),s)if(c.functional){c._injectStyles=s;var u=c.render;c.render=function(e,t){return s.call(t),u(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,s):[s]}return{exports:e,options:c}}const n={};var a=t({name:"NormalPages"},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-pagination",e._g(e._b({staticClass:"pagination-container"},"el-pagination",e.$attrs,!1),e.$listeners))}),[],!1,r,"197991dc",null,null);function r(e){for(let t in n)this[t]=n[t]}var l=function(){return a.exports}();const o={name:"JsxRender",props:{r:{type:Function,default:()=>{}},row:{type:Object,default:()=>{}}},render(){const e=arguments[0],{r:t,row:n}=this;return e("div",[t(n)])}};const i={};var s=t({name:"NormalSelect",props:{tabs:{type:Object,default:()=>{}},changeTabs:{type:Function,default:()=>{}}},data:()=>({options:[],type:""}),mounted(){this.init()},methods:{init(){return __async(this,null,(function*(){var e;const{list:t,defaultValue:n}=this.tabs,a=t instanceof Function?yield t():t,r=new Map([["value","value"],["id","id"]]),l=Object.keys(null==a?void 0:a[0]).find((e=>r.has(e))),o=null==(e=null==a?void 0:a[0])?void 0:e[l],i=n instanceof Function?yield n(a):n;this.type=i||0===i?i:o,this.options=a,this.changeTab()}))},changeTab(){const{type:e,tabs:t,options:n}=this;if(t.changeTab){const a=(null==n?void 0:n.find((t=>t.id===e||t.value===e)))||{};t.changeTab(a)}this.changeTabs(e)}}},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-tabs",{on:{"tab-click":e.changeTab},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},e._l(e.options,(function(e){return n("el-tab-pane",{key:e.id||e.value,attrs:{label:e.label,name:e.id||e.value}})})),1)}),[],!1,c,null,null,null);function c(e){for(let t in i)this[t]=i[t]}var u=function(){return s.exports}();const d=["click","change","input","clear","clear","blur","focus"],p={Input:"el-input",Select:"NormalSelect",DatePicker:"NormalPicker",Date:"NormalDate",Cascader:"el-cascader",Radio:"NormalRadio",InputNumber:"el-input-number",Switch:"el-switch",checkbox:"el-checkbox"};const m={};var h=t({name:"NormalSelect",props:["value","options","onchange"],data:()=>({newOptions:[]}),watch:{options:{handler(){this.init()},immediate:!0,deep:!0}},methods:{init(){return __async(this,null,(function*(){const{options:e=[]}=this,t=e instanceof Function;this.newOptions=t?yield e():e}))},changeSelect(e){this.$emit("input",e)}}},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-select",e._g(e._b({attrs:{value:e.value,"collapse-tags":"",clearable:""},on:{change:e.changeSelect}},"el-select",e.$attrs,!1),e.$listeners),e._l(e.newOptions,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value,disabled:e.disabled}})})),1)}),[],!1,f,null,null,null);function f(e){for(let t in m)this[t]=m[t]}var _=function(){return h.exports}();const b={name:"DatePicker",props:{value:{type:[Array,String,Date],default:e=>e||""},defaultTime:{type:[Array,String],default:e=>e||["00:00:00","23:59:59"]},type:{type:String,default:"daterange"},valueFormat:{type:String,default:"yyyy-MM-dd"},startPlaceholder:{type:String,default:"开始日期"},endPlaceholder:{type:String,default:"结束日期"}},methods:{changeDate(e){this.$emit("input",e)}}},g={};var v=t(b,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-date-picker",e._b({staticStyle:{width:"395px"},attrs:{value:e.value,"range-separator":"至","start-placeholder":e.startPlaceholder,"end-placeholder":e.endPlaceholder,"value-format":e.valueFormat,"default-time":e.defaultTime,type:e.type},on:{input:e.changeDate}},"el-date-picker",e.$attrs,!1))}),[],!1,y,null,null,null);function y(e){for(let t in g)this[t]=g[t]}var F=function(){return v.exports}();const S={name:"NormalDate",props:{value:{type:[Array,String,Date],default:e=>e||""},type:{type:String,default:"date"},valueFormat:{type:String,default:"yyyy-MM-dd"}},methods:{changeDate(e){this.$emit("input",e)}}},P={};var w=t(S,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-date-picker",e._g(e._b({attrs:{value:e.value,type:e.type,"value-format":e.valueFormat},on:{input:e.changeDate}},"el-date-picker",e.$attrs,!1),e.$listeners))}),[],!1,x,null,null,null);function x(e){for(let t in P)this[t]=P[t]}var k=function(){return w.exports}();const N={};var O=t({name:"NormalForm",components:{NormalSelect:_,NormalPicker:F,NormalDate:k},props:{tablesFilter:{type:Array,default:()=>[]},operations:{type:Array,default:()=>[]},getList:{type:Function,default:()=>{}}},data:()=>({componentsData:p,searchForm:{}}),computed:{getBindAll:e=>e=>{const{options:t}=(null==e?void 0:e.bind)||{},n="function"==typeof t?null==t?void 0:t():t;return __spreadValues(__spreadProps(__spreadValues({},n&&{options:n}),{placeholder:e.label}),e.bind)},getEventsAll:e=>e=>{const t=(null==e?void 0:e.bind)||{},n={};return Object.keys(t).forEach((e=>{d.includes(e)&&(n[e]=t[e])})),n},getBtnBind:e=>e=>{var t;return null!=(t=null==e?void 0:e.bind)?t:{}}},methods:{handleSearch(){this.getList(__spreadValues({},this.searchForm))},clearSearchForm(e){this.$refs[e].resetFields(),this.searchForm={},this.handleSearch()}}},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-form",{ref:"normalForm",attrs:{model:e.searchForm,inline:!0,size:"small"}},[e._l(e.tablesFilter,(function(t){return n("el-form-item",{key:t.prop,attrs:{prop:t.prop}},[n(e.componentsData[t.tag],e._g(e._b({tag:"component",attrs:{clearable:""},model:{value:e.searchForm[t.prop],callback:function(n){e.$set(e.searchForm,t.prop,n)},expression:"searchForm[item.prop]"}},"component",e.getBindAll(t),!1),e.getEventsAll(t)))],1)})),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.handleSearch}},[e._v("搜索")]),n("el-button",{on:{click:function(t){return e.clearSearchForm("normalForm")}}},[e._v("重置")])],1)],2),[e._l(e.operations,(function(t,a){return[t.hide?e._e():n("el-button",e._b({key:a,attrs:{size:t.size||"mini",type:t.type||"info"},nativeOn:{click:function(e){return e.preventDefault(),t.call()}}},"el-button",e.getBtnBind(t),!1),[e._v(e._s(t.label))])]}))]],2)}),[],!1,$,null,null,null);function $(e){for(let t in N)this[t]=N[t]}const T={};var B=t({name:"NormalTable",components:{JsxRender:o,NoramlForm:function(){return O.exports}(),NoramlTabs:u,Pagination:l},props:{tables:{type:Object,required:!0,default:()=>{}}},data:()=>({datas:{list:[]},currentTab:"",filterValue:{},curPage:{},loading:!1}),computed:{onSearch(){return this.tables.onSearch},tableOperates:e=>(e,t)=>{const{btns:n}=e;return"function"==typeof n?n(t.row):n},jsxRender:e=>(e,t)=>"function"==typeof e?e(t):e,isTabs:e=>e=>!!(null==e?void 0:e.list),gather(){const{getList:e,tables:{filter:t,operations:n}}=this;return{getList:e,tablesFilter:t,operations:n}},getColumns:e=>e=>__spreadProps(__spreadValues({},e),{align:e.align||"center"}),isPageShow(){var e;const{datas:t,tables:n}=this;return(null==(e=null==t?void 0:t.list)?void 0:e.length)>0&&!n.noPage},getPagesBind(){var e;const{total:t=0,pageSize:n=10,currentPage:a=1}=null!=(e=this.datas)?e:{};return{total:t,pageSize:n,currentPage:a}},getBtnBind:e=>e=>{var t;return null!=(t=null==e?void 0:e.bind)?t:{}}},mounted(){this.init()},activated(){this.init()},methods:{init(){const{isTabs:e,tables:t}=this;e(t.tabs)||this.getList()},getList(e){return __async(this,null,(function*(){e&&(this.filterValue=e,this.curPage.page=1);const{curPage:t,onSearch:n,currentTab:a}=this,r={filterValue:this.filterValue,currentTab:a,pagination:t};try{this.datas=(yield n(r))||[]}catch(l){console.error("onSearch出错了")}}))},confirmFn(e){return new Promise(((t,n)=>{this.$confirm(e,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{t()})).catch((()=>{n()}))}))},handleBtn(e,t){if(!t.confirm)return t.call(e);this.confirmFn(t.confirm).then((n=>t.call(e))).catch((e=>console.log("取消")))},changePage(e){this.curPage=__spreadProps(__spreadValues({},this.curPage),{page:e}),this.getList()},changeTabs(e){this.currentTab=e,this.getList()}}},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.tables.columns?[e.isTabs(e.tables.tabs)?n("NoramlTabs",{attrs:{tabs:e.tables.tabs,"change-tabs":e.changeTabs}}):e._e(),e.tables.filter?n("NoramlForm",e._b({},"NoramlForm",e.gather,!1)):e._e(),n("el-table",e._g(e._b({directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.datas.list,border:""}},"el-table",e.$attrs,!1),e.$listeners),[e._l(e.tables.columns,(function(t){return[t.render?n("el-table-column",{key:t.label,attrs:{label:t.label,width:t.width||"120px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[n("jsxRender",{attrs:{r:t.render,row:e.row}})]}}],null,!0)}):t.btns?n("el-table-column",{key:t.label,attrs:{label:t.label,fixed:t.fixed||!1,width:t.width||"120px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[e._l(e.tableOperates(t,a),(function(t,r){return[t.hide?e._e():n("el-button",e._b({key:r,staticClass:"normalButton",attrs:{size:t.size||"mini",type:t.type||"info"},nativeOn:{click:function(n){return n.preventDefault(),e.handleBtn(a.row,t)}}},"el-button",e.getBtnBind(t),!1),[e._v(" "+e._s(t.label)+" ")])]}))]}}],null,!0)}):n("el-table-column",e._b({key:t.label},"el-table-column",e.getColumns(t),!1))]}))],2),e.isPageShow?n("Pagination",e._b({on:{"current-change":e.changePage}},"Pagination",e.getPagesBind,!1)):e._e()]:e._e()],2)}),[],!1,E,"44726e6f",null,null);function E(e){for(let t in T)this[t]=T[t]}var V=function(){return B.exports}();const D={name:"NormalRadio",props:{options:{type:Array,default:[]},value:{type:[String,Number,Boolean],default:e=>null!=e?e:""}},watch:{value:{immediate:!0,handler(e){this.radioValue=e}}},data:()=>({radioValue:""}),methods:{handleChange(e){this.$emit("input",e)}}},j={};var C=t(D,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-radio-group",{on:{change:e.handleChange},model:{value:e.radioValue,callback:function(t){e.radioValue=t},expression:"radioValue"}},e._l(e.options,(function(t){return n("el-radio",{key:t.value,attrs:{label:t.value,disabled:t.disabled}},[e._v(" "+e._s(t.label)+" ")])})),1)}),[],!1,R,null,null,null);function R(e){for(let t in j)this[t]=j[t]}const A={};var L=t({name:"NormalForm",components:{NormalSelect:_,NormalDate:k,NormalPicker:F,NormalRadio:function(){return C.exports}(),JsxRender:o},props:{normalForm:{type:Object,required:!0,default:()=>{}}},data:()=>({componentsData:p,title:"",dialogStatus:!1,searchForm:[]}),computed:{getBindAll:e=>e=>__spreadValues({placeholder:e.label},e.bind),dialogBind(){const{dialogBind:e={width:"600px"}}=this.normalForm;return console.log(e,"dialogBind"),__spreadValues({},e)},allBind:e=>({prop:e,label:t,rules:n,bind:a})=>__spreadProps(__spreadValues({},a),{label:t,prop:e,rules:n}),getEventsAll:e=>({bind:e={}})=>{const t={};return Object.keys(e).forEach((n=>{d.includes(n)&&(t[n]=e[n])})),t},getFormBefore(){const{searchForm:e,normalForm:{list:t}}=this;return"function"==typeof t?t(e):t},getFormList(){return this.getFormBefore.filter((e=>!e.hide))}},methods:{open(e="提示",t={}){this.title=e,this.dialogStatus=!0,this.searchForm=JSON.parse(JSON.stringify(t))},openFilter(e="提示",t={}){this.title=e,this.dialogStatus=!0;const{getFormBefore:n}=this,a={};n.forEach((e=>{const n=e.prop;(t[n]||0===t[n])&&(a[n]=t[n])}));const r=/id/i;for(const l in t)-1!==l.search(r)&&(a[l]=t[l]);this.searchForm=a},setFieldsValue(e){const{searchForm:t}=this;this.searchForm=__spreadValues(__spreadValues({},t),e)},close(){this.dialogStatus=!1},submit(){return __async(this,null,(function*(){const{normalForm:e,searchForm:t}=this;"function"==typeof(null==e?void 0:e.submit)&&this.$refs.normalForm.validate((n=>__async(this,null,(function*(){if(!n)return!1;const a=JSON.parse(JSON.stringify(t));(yield e.submit(a))||this.close()}))))}))}}},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",e._b({attrs:{title:e.title,visible:e.dialogStatus},on:{"update:visible":function(t){e.dialogStatus=t}}},"el-dialog",e.dialogBind,!1),[n("el-form",{ref:"normalForm",attrs:{model:e.searchForm,"label-width":e.normalForm.labelWidth||"180px"}},e._l(e.getFormList,(function(t){return n("el-form-item",e._b({key:t.prop,class:e.normalForm.inline?"form_itme":""},"el-form-item",e.allBind(t),!1),[t.render?n("JsxRender",{attrs:{r:t.render,row:e.searchForm}}):e.componentsData[t.tag]?n(e.componentsData[t.tag],e._g(e._b({tag:"component",model:{value:e.searchForm[t.prop],callback:function(n){e.$set(e.searchForm,t.prop,n)},expression:"searchForm[item.prop]"}},"component",e.getBindAll(t),!1),e.getEventsAll(t))):n("div",[e._v("tag配置错误")])],1)})),1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:e.close}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("确 定")])],1)],1)}),[],!1,J,"0bae71f6",null,null);function J(e){for(let t in A)this[t]=A[t]}const z={NormalTable:V,NormalForm:function(){return L.exports}()},M=function(e){console.log(e.component,"install"),Object.keys(z).forEach((t=>{const n=z[t];e.component(n.name,n)}))};var I={Components:z,install:M};e.Components=z,e.default=I,e.install=M,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
//# sourceMappingURL=normaltable.umd.js.map
