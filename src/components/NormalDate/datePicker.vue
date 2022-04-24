<template>
  <el-date-picker
    :value="value"
    range-separator="至"
    style="width: 395px;"
    :start-placeholder="startPlaceholder"
    :end-placeholder="endPlaceholder"
    :value-format="valueFormat"
    :default-time="defaultTime"
    :type="type"
    v-bind="$attrs"
    @input="changeDate"
  />
</template>
<script>
export default {
  name: 'DatePicker',
  props: {
    value: {
      type: [Array, String, Date],
      default: v => {
        return v || ''
      }
    },
    defaultTime: {
      type: [Array, String],
      default: v => {
        return v || ['00:00:00', '23:59:59']
      }
    },
    type: {
      type: String,
      default: 'daterange'
    },
    valueFormat: {
      type: String,
      default: 'yyyy-MM-dd'
    },
    startPlaceholder: {
      type: String,
      default: '开始日期'
    },
    endPlaceholder: {
      type: String,
      default: '结束日期'
    }
  },
  methods: {
    changeDate(v) {
      this.$emit('input', v)
    }
  }
}
</script>
