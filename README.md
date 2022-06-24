1.第一版本
<NormalTable ref="NormalTable" :tables="tables" />

NormalTable配置
1. filter 
{
    tag: 'Select', 
    label: '状态',
    prop: 'status',
    bind: { // 可传入element所哟最短
        options: this.getList // 可为数组或函数，可同步可异步
        defaultValue // 初始化参数
    }
}
tag配置：{
    'Input': 'el-input',
    'Select': 'NormalSelect',
    'DatePicker': 'NormalPicker',
    'Upload': 'NormalUpload',
    'Date': 'NormalDate',
    'Cascader': 'el-cascader',
    'Radio': 'NormalRadio',
    'InputNumber':'el-input-number',
    'Switch': 'el-switch',
    'Checkbox': 'NormalCheckbox'
}