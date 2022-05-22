<template>
  <div>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>123123</el-header>
        <NormalTable ref="NormalTable" :tables="tables" />
      </el-container>
    </el-container>
    <NormalForm ref="NormalForm" :normalForm="normalForm" />
  </div>
</template>
<script>
// import { debounce } from '@/utils/decorator'
import NormalTable from "@/components/NormalTable/index.vue"
import NormalForm from "@/components/NormalForm/index.vue"
export default {
  name: 'App',
  components: {
    NormalTable,
    NormalForm
  },
  data() {
    return {
      tables: {
        filter: [
          {
            tag: 'Input',
            label: '姓名/手机号',
            prop: 'nameOrMobile'
          },{
            tag: 'Select',
            label: '状态',
            prop: 'status',
            bind: {
              options: []
            }
          },{
            tag: 'DatePicker',
            label: '测试开始日期',
            prop: 'time',
            bind: {
              startPlaceholder:"空档开始日期",
              endPlaceholder: "空档结束日期"
            }
          },
          {
            tag: 'Date',
            label: '测试开始日期',
            prop: 't12ime'
          },
          {
            tag: 'DatePicker',
            label: '测试开始日期',
            prop: 't1ime',
            bind: {
              startPlaceholder:"空档开始日期",
              endPlaceholder: "空档结束日期"
            }
          }
        ],
        operations: [{
          label: '测试',
          type: 'primary',
          call: () => {
            this.isEdit = false
          },
          bind: {
            icon: 'el-icon-search'
          }
        }],
        columns: [
          {
            type: 'selection'
          },
          {
            prop: 'snowId',
            label: 'ID',
            width: '140px',
          },
          {
            prop: 'ddd123',
            label: '测12222试',
            width: '140px',
            render: (row) => {
              return row.snowId === 1 ? '测试1' : '测试2'
            }
          },
          {
          label: '操作',
          btns: (row) => {
            return [
              {
                label: '删除',
                // confirm: '确定移除吗？',
                call: (row) => {
                  this.$refs['NormalForm'].open('提示',{
                    con111tent: 1
                  })
                }
              }
            ]
          }
        }
        ],
        onSearch: async({ filterValue, pagination }) => {
          console.log(filterValue, 'filterValue')
          return {
            ...pagination,
            total: 1000,
            'pageSize': 100,
            list: [{snowId:1}]
          }
        }
      },
      normalForm: {
        dialogBind: {
          width: '600px'
        },
        list (data) {
          return [
            {
              tag: 'Select',
              label: '跟进状态',
              prop: 'status',
              bind: { options: [] }
            },
            {
              tag: 'Input',
              label: '跟进信息',
              prop: 'content'
            },
            {
              tag: 'Radio',
              label: '跟进信息',
              prop: 'con111tent',
              bind: {
                options: [
                  {
                    label: '测试1',
                    value: 1
                  },
                  {
                    label: '测试1',
                    value: 2
                  },
                  {
                    label: '测试2',
                    value: 3
                  }
                ]
              }
            },
          ]
        },
        async submit (o) {
          console.log(o, 'oooo')
        }
      }
    }
  }
}
</script>
<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>