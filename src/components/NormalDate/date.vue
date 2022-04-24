<template>
  <el-date-picker
    :value="value"
    :type="type"
    :value-format="valueFormat"
    v-bind="$attrs"
    v-on="$listeners"
    @input="changeDate"
  />
</template>
<script>
export default {
  name: 'NormalDate',
  props: {
    value: {
      type: [Array, String, Date],
      default: v => {
        return v || ''
      }
    },
    type: {
      type: String,
      default: 'date'
    },
    valueFormat: {
      type: String,
      default: 'yyyy-MM-dd'
    }
  },
  methods: {
    changeDate(v) {
      this.$emit('input', v)
    }
  }
}
</script>
