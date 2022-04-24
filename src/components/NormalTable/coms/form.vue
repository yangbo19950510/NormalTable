<template>
  <div>
    <el-form ref="normalForm" :model="searchForm" :inline="true" size="small">
      <el-form-item v-for="item in tablesFilter" :key="item.prop" :prop="item.prop">
        <component :is="componentsData[item.tag]" v-model="searchForm[item.prop]" clearable v-bind="getBindAll(item)" v-on="getEventsAll(item)" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSearch">搜索</el-button>
        <el-button @click="clearSearchForm('normalForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <template>
      <template v-for="(btn,index) in operations">
        <el-button
          v-if="!btn.hide"
          :key="index"
          :size="btn.size || 'mini'"
          :type="btn.type || 'info'"
          @click.native.prevent="btn.call()"
          v-bind="getBtnBind(btn)"
        >{{ btn.label }}</el-button>
      </template>
    </template>
  </div>
</template>

<script>
import { EVENT_NAME, COMPONENTS_NAME } from '@/components/constants.js'
import NormalSelect from "@/components/NormalSelect/index.vue"
import NormalPicker from "@/components/NormalDate/datePicker.vue"
import NormalDate from "@/components/NormalDate/date.vue"

export default {
  name: 'NormalForm',
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
      default: () => {}
    }
  },
  data() {
    return {
      componentsData: COMPONENTS_NAME,
      searchForm: {}
    }
  },
  computed: {
    getBindAll: _ => it => {
      const { options: op } = it?.bind || {}
      const options = typeof op === 'function' ? op?.() : op
      return {
        ...(options && { options }),
        placeholder: it.label,
        ...it.bind
      }
    },
    getEventsAll: _ => it => {
      const bind = it?.bind || {}
      const eventsAll = {}
      Object.keys(bind).forEach(i => {
        if (EVENT_NAME.includes(i)) {
          eventsAll[i] = bind[i]
        }
      })
      return eventsAll
    },
    getBtnBind: _ => btn => btn?.bind ?? {}
  },
  methods: {
    handleSearch() {
      this.getList({ ...this.searchForm })
    },
    // 重置筛选条件并重新搜索
    clearSearchForm(formName) {
      this.$refs[formName].resetFields()
      this.searchForm = {}
      this.handleSearch()
    }
  }
}
</script>
