<template>
  <div>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>123123</el-header>
        <NormalTable ref="NormalTable" :tables="tables" >
          <!-- <template v-slot:table-header>
            <h1>Here might be a page title</h1>
          </template> -->
        </NormalTable>
      </el-container>
    </el-container>
    <NormalForm ref="NormalForm" :normalForm="normalForm" />
  </div>
</template>
<script lang="jsx">
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
      aaa: '',
      tables: {
        filter: [
          {
            tag: 'Input',
            label: '姓名/手机号',
            hide: true,
            prop: 'nameOrMobile'
          },{
            tag: 'Select',
            label: '状态',
            prop: 'status',
            bind: {
              options: this.getList
            }
          },
          {
            tag: 'Select',
            label: '状态333',
            prop: 'props123',
            bind: {
              // clearable: true,
              // multiple: true,
              value: 1,
              options: [{
                label: '状态1',
                value: 1
              },{
                label: '状态2',
                value: 2
              }]
            }
          },{
            tag: 'DatePicker',
            label: '测试开始日期',
            prop: 'time',
            bind: {
              startPlaceholder:"空档开1始日期",
              endPlaceholder: "空档结111束日期"
            }
          },
          {
            tag: 'Date1',
            label: '测试开始日期',
            prop: 't12ime',
            // render() {
            //   return 123
            // }
          },
          // {
          //   tag: 'DatePicker',
          //   label: '测试开始日期',
          //   prop: 't1ime',
          //   bind: {
          //     startPlaceholder:"空档开始日期",
          //     endPlaceholder: "空档结束日期"
          //   }
          // }
        ],
        operations: [{
          label: '测试123',
          type: 'success',
          call: () => {
            console.log('测试123')
            // this.isEdit = false
          },
          bind: {
            circle: true,
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
            render: () => {
              const asd = (a) => {
                this.aaa = a
              }
              return (<div>
                <el-input value={this.aaa} onInput={asd} placeholder="请输入内容"></el-input>
              </div>)
            }
          },
          {
            prop: 'ddd',
            label: '测12222试',
            width: '140px',
            render: (row) => {
              
              return row.snowId === 1 ? '测试1' : '测试2'
            }
          },
          {
          label: '操作',
          btns: (row) => {
            const isShowAdd = row.id !== 1
            return [
              {
                label: '添加',
                hide: isShowAdd,
                // confirm: '确定移除吗？',
                call: (row) => {
                  console.log(row, '一点击确认')
                  this.$refs['NormalForm'].open('添加',row)
                }
              },
              {
                label: '删除',
                // confirm: '确定移除吗？',
                call: (row) => {
                  // this.$refs['NormalForm'].open('提示',{
                  //   con111tent: [1, 2]
                  // })
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
            list: [{ddd: 123, id: 1}]
          }
        }
      },
      normalForm: {
        dialogBind: {
          width: '600px',
          // 'before-close': () => {
          //   console.log(123123)
          // }
        },
        list: (data) => {
          // const isStatusShow = data.id === 1
          return [
            {
              label: '跟进状态',
              // hide: isStatusShow,
              prop: 'status',
              render(row) {
                return 123
              }
            },
            {
              tag: 'Input',
              label: '跟进信息',
              prop: 'content',
              bind: {
                input: () => {
                  console.log(123)
                }
              }
            },
            {
              tag: 'Checkbox',
              label: '跟进信息',
              prop: 'con111tent',
              rules:  [
                { required: true, message: '请填写活动形式', trigger: 'blur' }
              ],
              bind: {
                options: []
              }
            },
          ]
        },
        async submit (values) {
        //  await post()
         return true
          console.log(values, 'oooo')
        }
      }
    }
  },
  methods: {
    getList() {
      return new Promise((resolve, reject) => {
        resolve([{value: 1, label: 'zhuangtia1'}] )
      })
      // return  [{value: 1, label: 'zhuangtia1'}] 
    }
  },
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