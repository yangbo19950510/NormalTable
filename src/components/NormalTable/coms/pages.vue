<template>
  <el-pagination
    class="pagination-container"
    v-bind="$attrs"
    v-on="$listeners"
  >
  </el-pagination>
</template>

<script>
export default {
  name: 'NormalPages'
}
</script>
<style scoped>
.pagination-container {
  background: #fff;
  margin-top: 16px;
  text-align: right;
}
</style>
