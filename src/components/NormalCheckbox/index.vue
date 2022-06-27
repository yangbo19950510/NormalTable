<template>
  <!-- 设置value后 change不生效 -->
  <el-checkbox-group v-bind="$attrs" v-on="$listeners" :value="checkboxValue" @change="handleChange"  >
    <el-checkbox
      v-for="item in ops"
      :key="item.value"
      :label="item.value"
      :checked="!!item.checked"
      :disabled="!!item.disabled"
    >
      {{item.label}}
    </el-checkbox>
  </el-checkbox-group>
</template>
<script>
export default {
  name: 'NormalCheckbox',
  props: {
    options: {
      type: [Array, Function],
      default: () => []
    },
    value: {
      type: Array,
      default: v => v ?? []
    },
  },
  watch: {
    value: {
    	immediate: true,
    	handler(val) {
      	this.checkboxValue = val
      }
    },
    options: {
      immediate: true,
      handler(val) {
        this.init(val)
      }
    }
  },
  data() {
    return {
      ops: [],
      checkboxValue: []
    }
  },
  methods: {
    async init(options) {
      const isFun = options instanceof Function
      this.ops = isFun ? await options() : options
    },
    handleChange(v) {
      this.$emit('input', v)
    }
  },
}
</script>
