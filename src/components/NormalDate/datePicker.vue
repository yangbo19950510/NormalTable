<template>
  <el-date-picker
    :value="value"
    range-separator="至"
    style="width: 395px;"
    :start-placeholder="startPlaceholder"
    :end-placeholder="endPlaceholder"
    :value-format="getValueFormat"
    :default-time="defaultTime"
    :type="type"
    v-bind="$attrs"
    @input="changeDate"
  />
</template>
<script>
import { DATE_FORMAT } from '../constants'
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
      default: 'daterange',
    },
    valueFormat: {
      type: String
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
  computed: {
    getValueFormat() {
      const { valueFormat, type } = this
      console.log(valueFormat, 'valueFormat')
      return valueFormat || DATE_FORMAT[type] || ''
    }
  },
  methods: {
    changeDate(v) {
      this.$emit('input', v)
    }
  }
}
</script>
