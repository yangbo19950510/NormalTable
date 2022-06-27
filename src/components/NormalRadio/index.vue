<template>
  <!-- 设置value后 change不生效 -->
  <el-radio-group v-model="radioValue" @change="handleChange" v-bind="$attrs" v-on="$listeners" >
    <el-radio
      v-for="item in ops"
      :key="item.value"
      :label="item.value"
      :disabled="item.disabled"
    >
      {{item.label}}
    </el-radio>
  </el-radio-group>
</template>
<script>
export default {
  name: 'NormalRadio',
  props: {
    options: {
      type: [Array, Function],
      default: () => {
        return []
      }
    },
    value: {
      type: [String, Number, Boolean],
      default: v => v ?? ''
    }
  },
  watch: {
    value: {
    	immediate: true,
    	handler(val) {
      	this.radioValue = val
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
      radioValue: ''
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
