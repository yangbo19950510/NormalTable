<template>
  <el-select v-bind="$attrs" v-on="$listeners" :value="value" collapse-tags clearable @change="changeSelect">
    <el-option
      v-for="item in newOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    />
  </el-select>
</template>

<script>
export default {
  name: 'NormalSelect',
  props: ['value', 'options', 'onchange'],
  data() {
    return {
      newOptions: []
    }
  },
  watch: {
    'options': {
      handler() {
        this.init()
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    async init() {
      const { options = [] } = this
      const isFun = options instanceof Function
      this.newOptions = isFun ? await options() : options
    },
    changeSelect(v) {
      this.$emit('input', v)
    }
  }
}
</script>
