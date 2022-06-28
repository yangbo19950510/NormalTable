<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogStatus"
    v-bind="dialogBind"
  >
    <el-form ref="normalForm" :model="searchForm" :label-width="normalForm.labelWidth || '180px'">
      <el-form-item v-for="item in getFormList" :key="item.prop" :class="normalForm.inline ? 'form_itme' : ''" v-bind="allBind(item)">
        <JsxRender v-if="item.render" :r="item.render" :row="searchForm" />
        <component
          v-else-if="componentsData[item.tag]"
          :is="componentsData[item.tag]"
          v-model="searchForm[item.prop]"
          v-bind="getBindAll(item)"
          v-on="getEventsAll(item)"
        />
        <div v-else>tag配置错误</div>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="submit">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { JsxRender } from "@/components/render"
import { EVENT_NAME, COMPONENTS_NAME } from '@/components/constants.js'
import NormalSelect from "@/components/NormalSelect/index.vue"
import NormalRadio from "@/components/NormalRadio/index.vue"
import NormalUpload from "@/components/NormalUpload/index.vue"
import NormalCheckbox from "@/components/NormalCheckbox/index.vue"
import NormalPicker from "@/components/NormalDate/datePicker.vue"
import NormalDate from "@/components/NormalDate/date.vue"
// import { debounce } from '@/utils/decorator'
export default {
  name: 'NormalForm',
  components: { NormalSelect, NormalDate, NormalPicker, NormalRadio, NormalCheckbox, NormalUpload, JsxRender },
  props: {
    normalForm: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  data() {
    return {
      componentsData: COMPONENTS_NAME,
      title: '',
      dialogStatus: false,
      searchForm: []
    }
  },
  computed: {
    getBindAll: _ => ({ label,  bind }) => {
      return {
        placeholder: label,
        ...bind
      }
    },
    dialogBind() {
      const { dialogBind = { width: '600px'} } = this.normalForm
      return {
        ...dialogBind
      }
    },
    allBind: _ => ({ prop, label, rules, bind }) => ({
      ...bind,
      label,
      prop,
      rules
    }),
    getEventsAll: _ => ({ bind = {} }) => {
      const eventsAll = {}
      Object.keys(bind).forEach(i => {
        if (EVENT_NAME.includes(i)) {
          eventsAll[i] = bind[i]
        }
      })
      return eventsAll
    },
    getFormBefore() {
      const { searchForm, normalForm: { list: fn }} = this
      return typeof fn === 'function' ? fn(searchForm) : fn
    },
    getFormList() {
      const list = this.getFormBefore
      const filterHide = x => !x.hide
      return list.filter(filterHide)
    }
  },
  methods: {
    open(title = '提示', data = {}) {
      this.title = title
      this.dialogStatus = true
      this.searchForm = JSON.parse(JSON.stringify(data))
    },
    openFilter(title = '提示', data = {}) {
      this.title = title
      this.dialogStatus = true
      const { getFormBefore: getFormList } = this
      const params = {}
      const filterHide = x => {
        const it = x.prop
        // 清空不需要的参数
        if (data[it] || data[it] === 0) {
          params[it] = data[it]
        }
      }
      getFormList.forEach(filterHide)
      // 保留与id相关参数
      const reg = /id/i
      for (const it in data) {
        if (it.search(reg) !== -1) {
          params[it] = data[it]
        }
      }
      this.searchForm = params
    },
    setFieldsValue(data) {
      const { searchForm } = this
      this.searchForm = {
        ...searchForm,
        ...data
      }
    },
    close() {
      this.dialogStatus = false
    },
    // @debounce(600)
    async submit() {
      const { normalForm, searchForm } = this
      if (typeof normalForm?.submit === 'function') {
        this.$refs['normalForm'].validate(async val => {
          if (!val) return false
          const from = JSON.parse(JSON.stringify(searchForm))
          const isClose = await normalForm.submit(from)
          if (!isClose) this.close()
        })
      }
    }
  }
}
</script>
<style scoped>
.dialog-footer{
  text-align: center;
  margin: 50px 0 0;
}
.form_itme {
  display: inline-block;
  width: 400px;
}
</style>
