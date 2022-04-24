<template>
  <el-tabs v-model="type" @tab-click="changeTab">
    <el-tab-pane
      v-for="item in options"
      :key="item.id || item.value"
      :label="item.label"
      :name="item.id || item.value"
    />
  </el-tabs>
</template>

<script>
export default {
  name: 'NormalSelect',
  props: {
    tabs: {
      type: Object,
      default: () => {}
    },
    changeTabs: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      options: [],
      type: ''
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      const { list, defaultValue } = this.tabs
      const isFun = list instanceof Function
      const newOptions = isFun ? await list() : list
      // 默认值
      const map = new Map([
        ['value', 'value'],
        ['id', 'id']
      ])
      const has = Object.keys(newOptions?.[0]).find(i => map.has(i))
      const initValue = newOptions?.[0]?.[has]
      const valueIsFun = defaultValue instanceof Function
      // 防止出现默认value或id为0的情况
      const temp = valueIsFun ? await defaultValue(newOptions) : defaultValue
      this.type = (temp || temp === 0) ? temp : initValue
      this.options = newOptions
      // 通知业务组件changeTab
      this.changeTab()
    },
    changeTab() {
      const { type, tabs, options } = this
      // 通知业务组件
      if (tabs.changeTab) {
        const params = options?.find(i => i.id === type || i.value === type) || {}
        tabs.changeTab(params)
      }
      // 执行onSearch
      this.changeTabs(type)
    }
  }
}
</script>
