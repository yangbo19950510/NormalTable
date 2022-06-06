<template>
  <!-- 设置value后 change不生效 -->
  <el-radio-group v-model="radioValue" @change="handleChange" v-bind="$attrs" v-on="$listeners" >
    <el-radio
      v-for="item in options"
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
      type: Array,
      default: []
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
    }
  },
  data() {
    return {
      radioValue: ''
    }
  },
  methods: {
    handleChange(v) {
      this.$emit('input', v)
    }
  },
}
</script>
