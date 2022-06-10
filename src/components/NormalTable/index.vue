<template>
  <div>
    <template v-if="tables.columns">
      <NoramlTabs v-if="isTabs(tables.tabs)" :tabs="tables.tabs" :change-tabs="changeTabs" />
      <!-- 筛选项 -->
      <NoramlForm v-if="tables.filter" v-bind="gather" />
      <!-- 插槽 -->
      <slot name="table-header"></slot>
      <!-- table -->
      <el-table
        v-loading="loading"
        :data="datas.list"
        style="width: 100%; margin-top: 20px;"
        border
        v-bind="$attrs"
        v-on="$listeners"
      >
        <template v-for="item in tables.columns">
          <!-- 是否有render -->
          <el-table-column v-if="item.render" :key="item.label" :label="item.label" :width="item.width || '120px'" align="center">
            <template slot-scope="scope">
              <jsxRender :r="item.render" :row="scope.row"/>
            </template>
          </el-table-column>
          <!-- 是否有btns-->
          <el-table-column v-else-if="item.btns" :key="item.label" :label="item.label" :fixed="item.fixed || false" :width="item.width || '120px'" align="center">
            <template slot-scope="scope">
              <template v-for="(btn,index) in tableOperates(item, scope)">
                <el-button
                  v-if="!btn.hide"
                  :key="index"
                  class="normalButton"
                  :size="btn.size || 'mini'"
                  :type="btn.type || 'info'"
                  v-bind="getBtnBind(btn)"
                  @click.native.prevent="handleBtn(scope.row, btn)"
                >
                  {{ btn.label }}
                </el-button>
              </template>
            </template>
          </el-table-column>
          <!-- 纯文本内容 -->
          <el-table-column v-else :key="item.label" v-bind="getColumns(item)" />
        </template>
      </el-table>
      <Pagination v-if="isPageShow" v-bind="getPagesBind" @current-change="changePage" />
    </template>
  </div>
</template>
<script>
import Pagination from "./coms/pages.vue"
import { JsxRender } from "@/components/render/index.jsx"
import NoramlTabs from "./coms/tabs.vue"
import NoramlForm from "./coms/form.vue"

export default {
  name: 'NormalTable',
  components: { JsxRender, NoramlForm, NoramlTabs, Pagination },
  props: {
    tables: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  data() {
    return {
      datas: {
        list: []
      },
      currentTab: '',
      filterValue: {},
      curPage: {},
      loading: false
    }
  },
  computed: {
    onSearch() {
      return this.tables.onSearch
    },
    tableOperates: _ => (row, scope) => {
      const { btns } = row
      return typeof btns === 'function' ? btns(scope.row) : btns
    },
    jsxRender: _ => (render, row) => {
      return typeof render === 'function' ? render(row) : render
    },
    isTabs: _ => tabs => !!tabs?.list,
    gather() {
      const { getList, tables: { filter, operations }} = this
      return {
        getList,
        tablesFilter: filter,
        operations
      }
    },
    getColumns: _ => it => ({
      ...it,
      align: it.align || 'center'
    }),
    isPageShow() {
      const { datas, tables } = this
      return datas?.list?.length > 0 && !tables.noPage
    },
    getPagesBind() {
      const { total = 0, pageSize = 10, currentPage = 1 } = this.datas ?? {}
      return {
        total,
        pageSize,
        currentPage
      }
    },
    getBtnBind: _ => btn => btn?.bind ?? {}
  },
  mounted() {
    this.init()
  },
  activated() {
    this.init()
  },
  methods: {
    init() {
      // 无tabs直接执行getlist
      const { isTabs, tables } = this
      if (!isTabs(tables.tabs)) {
        this.getList()
      }
    },
    async getList(filterValue) {
      // filter数据发生改变页码重置为1
      if (filterValue) {
        this.filterValue = filterValue
        this.curPage.page = 1
      }
      const { curPage, onSearch, currentTab } = this
      const data = {
        filterValue: this.filterValue, // 筛选
        currentTab,
        pagination: curPage // 页码
      }
      try {
        this.datas = await onSearch(data) || []
      } catch {
        console.error('onSearch出错了')
      }
    },
    confirmFn(title) {
      return new Promise((resove, reject) => {
        this.$confirm(title, "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(resove).catch(reject)
      })
    },
    handleBtn(row, btn) {
      if (!btn.confirm) return btn.call(row)
      this.confirmFn(btn.confirm).then(r => btn.call(row))
      .catch(r => console.log('取消'))
    },
    changePage(page) {
      this.curPage = {
        ...this.curPage,
        page
      }
      this.getList()
    },
    changeTabs(cur) {
      this.currentTab = cur
      this.getList()
    }
  }
}
</script>
<style scoped>
.normalButton{
  margin-top: 4px;
  margin-bottom: 4px;
}
</style>
