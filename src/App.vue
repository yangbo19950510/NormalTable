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
      tables: {
        isShowFilterLabel: false, // filter中始终显示label
        filter: [
          {
            tag: 'Input',
            label: '姓名/手机号:',
            prop: 'nameOrMobile',
            bind: {
              defaultValue: 123
            }
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
            label: '状态333:',
            prop: 'props123',
            bind: {
              // clearable: true,
              // multiple: true,
              defaultValue: 1,
              options: this.getList
            }
          },{
            tag: 'DatePicker',
            label: '测试稍等稍等都是开始日期:',
            prop: 'time',
            bind: {
              // type: 'datetimerange',
              // valueFormat: 'yyyy-MM-dd: HH-mm-ss',
              startPlaceholder:"空档开1始日期",
              endPlaceholder: "空档结111束日期",
              // defaultValue: [new Date('2022-07-10'), new Date('2022-07-20')]
            }
          },
          // {
          //   tag: 'Date1',
          //   label: '测试开始日期',
          //   prop: 't12ime',
          //   // render() {
          //   //   return 123
          //   // }
          // },
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
            type: 'Img',
            label: '图片',
            prop: 'img'
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
            prop: 'img',
            label: '测12222试',
            type: 'Img'
          },
          {
            prop: 'fff',
            label: '测121222试',
            type: 'find',
            find: {
              a: 'hahah',
              b: 2
            }
          },
          {
          label: '操作',
          width: 300,
          btns: (row) => {
            const isShowAdd = row.id !== 1
            return [
              {
                label: '添加',
                hide: isShowAdd,
                // type: 'text',
                // confirm: '确定移除吗？',
                call: (row) => {
                  row = JSON.parse(JSON.stringify(row))
                  // const a = ["https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics4.baidu.com%2Ffeed%2Fb7003af33a87e95072727419c701dd49fbf2b426.jpeg%3Ftoken%3Dbe6c9e98435e9d39a525a7ea254a933d&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1656522000&t=e64ef9ef184678fb8850b2ad60ba9499"]
                  row.img = row.img.map((i, index) => {
                    return {
                      url: i,
                      key: index + Date.now() + ''
                    }
                  })
                  
                  this.$refs['NormalForm'].open('添加', row)
                }
              },
              {
                label: '删除',
                // type: 'text',
                // confirm: '确定移除吗？',
                call: (row) => {
                  // this.$refs['NormalForm'].open('提示',{
                  //   con111tent: [1, 2]
                  // })
                }
              },
              {
                label: '测dddd试',
                call:() => {
                  
                }
              }
            ]
          }
        }
        ],
        onSearch: async({ filterValue, pagination }) => {
          console.log(filterValue, 'filterValue')
          const fff = 'a'
          return {
            ...pagination,
            total: 1000,
            'pageSize': 100,
            list: [{ddd: 123, id: 1, fff, img: ['https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics4.baidu.com%2Ffeed%2Fb7003af33a87e95072727419c701dd49fbf2b426.jpeg%3Ftoken%3Dbe6c9e98435e9d39a525a7ea254a933d&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1656522000&t=e64ef9ef184678fb8850b2ad60ba9499', 'https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics7.baidu.com%2Ffeed%2F34fae6cd7b899e5146495720f5885439c9950dfc.jpeg%3Ftoken%3D1469f937ff1c3032fd1483ee764fe255&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1656522000&t=97d444d8e6fa51a08bf0b242832e51d9']}]
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
              tag: 'Upload',
              label: '跟进信息',
              prop: 'img',
              bind: {
                action: 'https://jsonplaceholder.typicode.com/posts/'
              }
            },
          ]
        },
        async submit (values) {
          console.log(values, 'oooo')
        }
      }
    }
  },
  methods: {
    getList() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([{value: 1, label: 'zhuangtia1'}] )
        }, 1000);
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