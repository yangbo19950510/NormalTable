var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var render$7 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("el-pagination", _vm._g(_vm._b({ staticClass: "pagination-container" }, "el-pagination", _vm.$attrs, false), _vm.$listeners));
};
var staticRenderFns$7 = [];
var pages_vue_vue_type_style_index_0_scoped_true_lang = "";
function normalizeComponent(scriptExports, render2, staticRenderFns2, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
  var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
  if (render2) {
    options.render = render2;
    options.staticRenderFns = staticRenderFns2;
    options._compiled = true;
  }
  if (functionalTemplate) {
    options.functional = true;
  }
  if (scopeId) {
    options._scopeId = "data-v-" + scopeId;
  }
  var hook;
  if (moduleIdentifier) {
    hook = function(context) {
      context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
      if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
        context = __VUE_SSR_CONTEXT__;
      }
      if (injectStyles) {
        injectStyles.call(this, context);
      }
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    options._ssrRegister = hook;
  } else if (injectStyles) {
    hook = shadowMode ? function() {
      injectStyles.call(this, (options.functional ? this.parent : this).$root.$options.shadowRoot);
    } : injectStyles;
  }
  if (hook) {
    if (options.functional) {
      options._injectStyles = hook;
      var originalRender = options.render;
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }
  return {
    exports: scriptExports,
    options
  };
}
const __vue2_script$7 = {
  name: "NormalPages"
};
const __cssModules$7 = {};
var __component__$7 = /* @__PURE__ */ normalizeComponent(__vue2_script$7, render$7, staticRenderFns$7, false, __vue2_injectStyles$7, "197991dc", null, null);
function __vue2_injectStyles$7(context) {
  for (let o in __cssModules$7) {
    this[o] = __cssModules$7[o];
  }
}
var Pagination = /* @__PURE__ */ function() {
  return __component__$7.exports;
}();
const JsxRender = {
  name: "JsxRender",
  props: {
    r: {
      type: Function,
      default: () => {
      }
    },
    row: {
      type: Object,
      default: () => {
      }
    }
  },
  render() {
    const h = arguments[0];
    const {
      r,
      row
    } = this;
    return h("div", [r(row)]);
  }
};
var render$6 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("el-tabs", { on: { "tab-click": _vm.changeTab }, model: { value: _vm.type, callback: function($$v) {
    _vm.type = $$v;
  }, expression: "type" } }, _vm._l(_vm.options, function(item) {
    return _c("el-tab-pane", { key: item.id || item.value, attrs: { "label": item.label, "name": item.id || item.value } });
  }), 1);
};
var staticRenderFns$6 = [];
const __vue2_script$6 = {
  name: "NormalSelect",
  props: {
    tabs: {
      type: Object,
      default: () => {
      }
    },
    changeTabs: {
      type: Function,
      default: () => {
      }
    }
  },
  data() {
    return {
      options: [],
      type: ""
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      return __async(this, null, function* () {
        var _a;
        const { list, defaultValue } = this.tabs;
        const isFun = list instanceof Function;
        const newOptions = isFun ? yield list() : list;
        const map = /* @__PURE__ */ new Map([
          ["value", "value"],
          ["id", "id"]
        ]);
        const has = Object.keys(newOptions == null ? void 0 : newOptions[0]).find((i) => map.has(i));
        const initValue = (_a = newOptions == null ? void 0 : newOptions[0]) == null ? void 0 : _a[has];
        const valueIsFun = defaultValue instanceof Function;
        const temp = valueIsFun ? yield defaultValue(newOptions) : defaultValue;
        this.type = temp || temp === 0 ? temp : initValue;
        this.options = newOptions;
        this.changeTab();
      });
    },
    changeTab() {
      const { type, tabs, options } = this;
      if (tabs.changeTab) {
        const params = (options == null ? void 0 : options.find((i) => i.id === type || i.value === type)) || {};
        tabs.changeTab(params);
      }
      this.changeTabs(type);
    }
  }
};
const __cssModules$6 = {};
var __component__$6 = /* @__PURE__ */ normalizeComponent(__vue2_script$6, render$6, staticRenderFns$6, false, __vue2_injectStyles$6, null, null, null);
function __vue2_injectStyles$6(context) {
  for (let o in __cssModules$6) {
    this[o] = __cssModules$6[o];
  }
}
var NoramlTabs = /* @__PURE__ */ function() {
  return __component__$6.exports;
}();
const EVENT_NAME = ["click", "change", "input", "clear", "clear", "blur", "focus"];
const COMPONENTS_NAME = {
  "Input": "el-input",
  "Select": "NormalSelect",
  "DatePicker": "NormalPicker",
  "Date": "NormalDate",
  "Cascader": "el-cascader",
  "checkbox": "el-checkbox"
};
var render$5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("el-select", _vm._g(_vm._b({ attrs: { "value": _vm.value, "collapse-tags": "", "clearable": "" }, on: { "change": _vm.changeSelect } }, "el-select", _vm.$attrs, false), _vm.$listeners), _vm._l(_vm.newOptions, function(item) {
    return _c("el-option", { key: item.value, attrs: { "label": item.label, "value": item.value, "disabled": item.disabled } });
  }), 1);
};
var staticRenderFns$5 = [];
const __vue2_script$5 = {
  name: "NormalSelect",
  props: ["value", "options", "onchange"],
  data() {
    return {
      newOptions: []
    };
  },
  watch: {
    "options": {
      handler() {
        this.init();
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    init() {
      return __async(this, null, function* () {
        const { options = [] } = this;
        const isFun = options instanceof Function;
        this.newOptions = isFun ? yield options() : options;
      });
    },
    changeSelect(v) {
      this.$emit("input", v);
    }
  }
};
const __cssModules$5 = {};
var __component__$5 = /* @__PURE__ */ normalizeComponent(__vue2_script$5, render$5, staticRenderFns$5, false, __vue2_injectStyles$5, null, null, null);
function __vue2_injectStyles$5(context) {
  for (let o in __cssModules$5) {
    this[o] = __cssModules$5[o];
  }
}
var NormalSelect = /* @__PURE__ */ function() {
  return __component__$5.exports;
}();
var render$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("el-date-picker", _vm._b({ staticStyle: { "width": "395px" }, attrs: { "value": _vm.value, "range-separator": "\u81F3", "start-placeholder": _vm.startPlaceholder, "end-placeholder": _vm.endPlaceholder, "value-format": _vm.valueFormat, "default-time": _vm.defaultTime, "type": _vm.type }, on: { "input": _vm.changeDate } }, "el-date-picker", _vm.$attrs, false));
};
var staticRenderFns$4 = [];
const __vue2_script$4 = {
  name: "DatePicker",
  props: {
    value: {
      type: [Array, String, Date],
      default: (v) => {
        return v || "";
      }
    },
    defaultTime: {
      type: [Array, String],
      default: (v) => {
        return v || ["00:00:00", "23:59:59"];
      }
    },
    type: {
      type: String,
      default: "daterange"
    },
    valueFormat: {
      type: String,
      default: "yyyy-MM-dd"
    },
    startPlaceholder: {
      type: String,
      default: "\u5F00\u59CB\u65E5\u671F"
    },
    endPlaceholder: {
      type: String,
      default: "\u7ED3\u675F\u65E5\u671F"
    }
  },
  methods: {
    changeDate(v) {
      this.$emit("input", v);
    }
  }
};
const __cssModules$4 = {};
var __component__$4 = /* @__PURE__ */ normalizeComponent(__vue2_script$4, render$4, staticRenderFns$4, false, __vue2_injectStyles$4, null, null, null);
function __vue2_injectStyles$4(context) {
  for (let o in __cssModules$4) {
    this[o] = __cssModules$4[o];
  }
}
var NormalPicker = /* @__PURE__ */ function() {
  return __component__$4.exports;
}();
var render$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("el-date-picker", _vm._g(_vm._b({ attrs: { "value": _vm.value, "type": _vm.type, "value-format": _vm.valueFormat }, on: { "input": _vm.changeDate } }, "el-date-picker", _vm.$attrs, false), _vm.$listeners));
};
var staticRenderFns$3 = [];
const __vue2_script$3 = {
  name: "NormalDate",
  props: {
    value: {
      type: [Array, String, Date],
      default: (v) => {
        return v || "";
      }
    },
    type: {
      type: String,
      default: "date"
    },
    valueFormat: {
      type: String,
      default: "yyyy-MM-dd"
    }
  },
  methods: {
    changeDate(v) {
      this.$emit("input", v);
    }
  }
};
const __cssModules$3 = {};
var __component__$3 = /* @__PURE__ */ normalizeComponent(__vue2_script$3, render$3, staticRenderFns$3, false, __vue2_injectStyles$3, null, null, null);
function __vue2_injectStyles$3(context) {
  for (let o in __cssModules$3) {
    this[o] = __cssModules$3[o];
  }
}
var NormalDate = /* @__PURE__ */ function() {
  return __component__$3.exports;
}();
var render$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_c("el-form", { ref: "normalForm", attrs: { "model": _vm.searchForm, "inline": true, "size": "small" } }, [_vm._l(_vm.tablesFilter, function(item) {
    return _c("el-form-item", { key: item.prop, attrs: { "prop": item.prop } }, [_c(_vm.componentsData[item.tag], _vm._g(_vm._b({ tag: "component", attrs: { "clearable": "" }, model: { value: _vm.searchForm[item.prop], callback: function($$v) {
      _vm.$set(_vm.searchForm, item.prop, $$v);
    }, expression: "searchForm[item.prop]" } }, "component", _vm.getBindAll(item), false), _vm.getEventsAll(item)))], 1);
  }), _c("el-form-item", [_c("el-button", { attrs: { "type": "primary" }, on: { "click": _vm.handleSearch } }, [_vm._v("\u641C\u7D22")]), _c("el-button", { on: { "click": function($event) {
    return _vm.clearSearchForm("normalForm");
  } } }, [_vm._v("\u91CD\u7F6E")])], 1)], 2), [_vm._l(_vm.operations, function(btn, index2) {
    return [!btn.hide ? _c("el-button", _vm._b({ key: index2, attrs: { "size": btn.size || "mini", "type": btn.type || "info" }, nativeOn: { "click": function($event) {
      $event.preventDefault();
      return btn.call();
    } } }, "el-button", _vm.getBtnBind(btn), false), [_vm._v(_vm._s(btn.label))]) : _vm._e()];
  })]], 2);
};
var staticRenderFns$2 = [];
const __vue2_script$2 = {
  name: "NormalForm",
  components: { NormalSelect, NormalPicker, NormalDate },
  props: {
    tablesFilter: {
      type: Array,
      default: () => []
    },
    operations: {
      type: Array,
      default: () => []
    },
    getList: {
      type: Function,
      default: () => {
      }
    }
  },
  data() {
    return {
      componentsData: COMPONENTS_NAME,
      searchForm: {}
    };
  },
  computed: {
    getBindAll: (_) => (it) => {
      const { options: op } = (it == null ? void 0 : it.bind) || {};
      const options = typeof op === "function" ? op == null ? void 0 : op() : op;
      return __spreadValues(__spreadProps(__spreadValues({}, options && { options }), {
        placeholder: it.label
      }), it.bind);
    },
    getEventsAll: (_) => (it) => {
      const bind = (it == null ? void 0 : it.bind) || {};
      const eventsAll = {};
      Object.keys(bind).forEach((i) => {
        if (EVENT_NAME.includes(i)) {
          eventsAll[i] = bind[i];
        }
      });
      return eventsAll;
    },
    getBtnBind: (_) => (btn) => {
      var _a;
      return (_a = btn == null ? void 0 : btn.bind) != null ? _a : {};
    }
  },
  methods: {
    handleSearch() {
      this.getList(__spreadValues({}, this.searchForm));
    },
    clearSearchForm(formName) {
      this.$refs[formName].resetFields();
      this.searchForm = {};
      this.handleSearch();
    }
  }
};
const __cssModules$2 = {};
var __component__$2 = /* @__PURE__ */ normalizeComponent(__vue2_script$2, render$2, staticRenderFns$2, false, __vue2_injectStyles$2, null, null, null);
function __vue2_injectStyles$2(context) {
  for (let o in __cssModules$2) {
    this[o] = __cssModules$2[o];
  }
}
var NoramlForm = /* @__PURE__ */ function() {
  return __component__$2.exports;
}();
var render$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_vm.tables.columns ? [_vm.isTabs(_vm.tables.tabs) ? _c("NoramlTabs", { attrs: { "tabs": _vm.tables.tabs, "change-tabs": _vm.changeTabs } }) : _vm._e(), _vm.tables.filter ? _c("NoramlForm", _vm._b({}, "NoramlForm", _vm.gather, false)) : _vm._e(), _c("el-table", _vm._g(_vm._b({ directives: [{ name: "loading", rawName: "v-loading", value: _vm.loading, expression: "loading" }], staticStyle: { "width": "100%", "margin-top": "20px" }, attrs: { "data": _vm.datas.list, "border": "" } }, "el-table", _vm.$attrs, false), _vm.$listeners), [_vm._l(_vm.tables.columns, function(item) {
    return [item.render ? _c("el-table-column", { key: item.label, attrs: { "label": item.label, "width": item.width || "120px", "align": "center" }, scopedSlots: _vm._u([{ key: "default", fn: function(scope) {
      return [_c("jsxRender", { attrs: { "r": item.render, "row": scope.row } })];
    } }], null, true) }) : item.btns ? _c("el-table-column", { key: item.label, attrs: { "label": item.label, "fixed": item.fixed || false, "width": item.width || "120px", "align": "center" }, scopedSlots: _vm._u([{ key: "default", fn: function(scope) {
      return [_vm._l(_vm.tableOperates(item, scope), function(btn, index2) {
        return [!btn.hide ? _c("el-button", _vm._b({ key: index2, staticClass: "normalButton", attrs: { "size": btn.size || "mini", "type": btn.type || "info" }, nativeOn: { "click": function($event) {
          $event.preventDefault();
          return _vm.handleBtn(scope.row, btn);
        } } }, "el-button", _vm.getBtnBind(btn), false), [_vm._v(" " + _vm._s(btn.label) + " ")]) : _vm._e()];
      })];
    } }], null, true) }) : _c("el-table-column", _vm._b({ key: item.label }, "el-table-column", _vm.getColumns(item), false))];
  })], 2), _vm.isPageShow ? _c("Pagination", _vm._b({ on: { "current-change": _vm.changePage } }, "Pagination", _vm.getPagesBind, false)) : _vm._e()] : _vm._e()], 2);
};
var staticRenderFns$1 = [];
var index_vue_vue_type_style_index_0_scoped_true_lang$1 = "";
const __vue2_script$1 = {
  name: "NormalTable",
  components: { JsxRender, NoramlForm, NoramlTabs, Pagination },
  props: {
    tables: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      datas: {
        list: []
      },
      currentTab: "",
      filterValue: {},
      curPage: {},
      loading: false
    };
  },
  computed: {
    onSearch() {
      return this.tables.onSearch;
    },
    tableOperates: (_) => (row, scope) => {
      const { btns } = row;
      return typeof btns === "function" ? btns(scope.row) : btns;
    },
    jsxRender: (_) => (render2, row) => {
      return typeof render2 === "function" ? render2(row) : render2;
    },
    isTabs: (_) => (tabs) => !!(tabs == null ? void 0 : tabs.list),
    gather() {
      const { getList, tables: { filter, operations } } = this;
      return {
        getList,
        tablesFilter: filter,
        operations
      };
    },
    getColumns: (_) => (it) => __spreadProps(__spreadValues({}, it), {
      align: it.align || "center"
    }),
    isPageShow() {
      var _a;
      const { datas, tables } = this;
      return ((_a = datas == null ? void 0 : datas.list) == null ? void 0 : _a.length) > 0 && !tables.noPage;
    },
    getPagesBind() {
      var _a;
      const { total = 0, pageSize = 10, currentPage = 1 } = (_a = this.datas) != null ? _a : {};
      return {
        total,
        pageSize,
        currentPage
      };
    },
    getBtnBind: (_) => (btn) => {
      var _a;
      return (_a = btn == null ? void 0 : btn.bind) != null ? _a : {};
    }
  },
  mounted() {
    this.init();
  },
  activated() {
    this.init();
  },
  methods: {
    init() {
      const { isTabs, tables } = this;
      if (!isTabs(tables.tabs)) {
        this.getList();
      }
    },
    getList(filterValue) {
      return __async(this, null, function* () {
        if (filterValue) {
          this.filterValue = filterValue;
          this.curPage.page = 1;
        }
        const { curPage, onSearch, currentTab } = this;
        const data = {
          filterValue: this.filterValue,
          currentTab,
          pagination: curPage
        };
        try {
          this.datas = (yield onSearch(data)) || [];
        } catch (e) {
          console.error("onSearch\u51FA\u9519\u4E86");
        }
      });
    },
    confirmFn(title) {
      return new Promise((resove, reject) => {
        this.$confirm(title, "\u63D0\u793A", {
          confirmButtonText: "\u786E\u5B9A",
          cancelButtonText: "\u53D6\u6D88",
          type: "warning"
        }).then(() => {
          resove();
        }).catch(() => {
          reject();
        });
      });
    },
    handleBtn(row, btn) {
      if (!btn.confirm)
        return btn.call(row);
      this.confirmFn(btn.confirm).then((r) => btn.call(row)).catch((r) => console.log("\u53D6\u6D88"));
    },
    changePage(page) {
      this.curPage = __spreadProps(__spreadValues({}, this.curPage), {
        page
      });
      this.getList();
    },
    changeTabs(cur) {
      this.currentTab = cur;
      this.getList();
    }
  }
};
const __cssModules$1 = {};
var __component__$1 = /* @__PURE__ */ normalizeComponent(__vue2_script$1, render$1, staticRenderFns$1, false, __vue2_injectStyles$1, "f68d7b84", null, null);
function __vue2_injectStyles$1(context) {
  for (let o in __cssModules$1) {
    this[o] = __cssModules$1[o];
  }
}
var NormalTable = /* @__PURE__ */ function() {
  return __component__$1.exports;
}();
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("el-dialog", _vm._b({ attrs: { "width": "1000px", "title": _vm.title, "visible": _vm.dialogStatus }, on: { "update:visible": function($event) {
    _vm.dialogStatus = $event;
  } } }, "el-dialog", _vm.dialogBind, false), [_c("el-form", { ref: "normalForm", attrs: { "model": _vm.searchForm, "label-width": _vm.normalForm.labelWidth || "180px" } }, _vm._l(_vm.getFormList, function(item) {
    return _c("el-form-item", _vm._b({ key: item.prop, class: _vm.normalForm.inline ? "form_itme" : "" }, "el-form-item", _vm.allBind(item), false), [item.render ? _c("JsxRender", { attrs: { "r": item.render, "row": _vm.searchForm } }) : _vm.componentsData[item.tag] ? _c(_vm.componentsData[item.tag], _vm._g(_vm._b({ tag: "component", model: { value: _vm.searchForm[item.prop], callback: function($$v) {
      _vm.$set(_vm.searchForm, item.prop, $$v);
    }, expression: "searchForm[item.prop]" } }, "component", _vm.getBindAll(item), false), _vm.getEventsAll(item))) : _c("div", [_vm._v("tag\u914D\u7F6E\u9519\u8BEF")])], 1);
  }), 1), _c("span", { staticClass: "dialog-footer", attrs: { "slot": "footer" }, slot: "footer" }, [_c("el-button", { on: { "click": _vm.close } }, [_vm._v("\u53D6 \u6D88")]), _c("el-button", { attrs: { "type": "primary" }, on: { "click": _vm.submit } }, [_vm._v("\u786E \u5B9A")])], 1)], 1);
};
var staticRenderFns = [];
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script = {
  name: "NormalForm",
  components: { NormalSelect, NormalDate, NormalPicker, JsxRender },
  props: {
    normalForm: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      componentsData: COMPONENTS_NAME,
      title: "",
      dialogStatus: false,
      searchForm: []
    };
  },
  computed: {
    getBindAll: (_) => (it) => __spreadValues({
      placeholder: it.label
    }, it.bind),
    dialogBind() {
      const { dialogBind } = this.normalForm;
      return __spreadValues({}, dialogBind);
    },
    allBind: (_) => ({ prop, label, rules, bind }) => __spreadProps(__spreadValues({}, bind), {
      label,
      prop,
      rules
    }),
    getEventsAll: (_) => ({ bind = {} }) => {
      const eventsAll = {};
      Object.keys(bind).forEach((i) => {
        if (EVENT_NAME.includes(i)) {
          eventsAll[i] = bind[i];
        }
      });
      return eventsAll;
    },
    getFormBefore() {
      const { searchForm, normalForm: { list: fn } } = this;
      return typeof fn === "function" ? fn(searchForm) : fn;
    },
    getFormList() {
      const list = this.getFormBefore;
      const filterHide = (x) => !x.hide;
      return list.filter(filterHide);
    }
  },
  methods: {
    open(title = "title", data = {}) {
      this.title = title;
      this.dialogStatus = true;
      this.searchForm = JSON.parse(JSON.stringify(data));
    },
    openFilter(title = "title", data = {}) {
      this.title = title;
      this.dialogStatus = true;
      const { getFormBefore: getFormList } = this;
      const params = {};
      const filterHide = (x) => {
        const it = x.prop;
        if (data[it] || data[it] === 0) {
          params[it] = data[it];
        }
      };
      getFormList.forEach(filterHide);
      const reg = /id/i;
      for (const it in data) {
        if (it.search(reg) !== -1) {
          params[it] = data[it];
        }
      }
      this.searchForm = params;
    },
    setFieldsValue(data) {
      const { searchForm } = this;
      this.searchForm = __spreadValues(__spreadValues({}, searchForm), data);
    },
    close() {
      this.dialogStatus = false;
    },
    submit() {
      return __async(this, null, function* () {
        const { normalForm, searchForm } = this;
        if (typeof (normalForm == null ? void 0 : normalForm.submit) === "function") {
          this.$refs["normalForm"].validate((val) => __async(this, null, function* () {
            if (!val)
              return false;
            const from = JSON.parse(JSON.stringify(searchForm));
            const isClose = yield normalForm.submit(from);
            if (!isClose)
              this.close();
          }));
        }
      });
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(__vue2_script, render, staticRenderFns, false, __vue2_injectStyles, "de458280", null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
var NormalForm = /* @__PURE__ */ function() {
  return __component__.exports;
}();
const Components = {
  NormalTable,
  NormalForm
};
const install = function(Vue) {
  console.log(Vue.component, "install");
  Object.keys(Components).forEach((key) => {
    const component = Components[key];
    Vue.component(component.name, component);
  });
};
var index = {
  Components,
  install
};
export { Components, index as default, install };
//# sourceMappingURL=normaltable.es.js.map
