<template>
  <!-- 设置value后 change不生效 -->
  <el-checkbox-group v-bind="$attrs" v-on="$listeners" :value="checkboxValue" @change="handleChange"  >
    <el-checkbox
      v-for="item in options"
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
      type: Array,
      default: []
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
    }
  },
  data() {
    return {
      checkboxValue: []
    }
  },
  methods: {
    handleChange(v) {
      this.$emit('input', v)
    }
  },
}
</script>
