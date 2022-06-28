<template>
  <div>
    <div class="imgs">
      <img v-for="it in Imgs" :key="it" :src="it" @click="handlePictureCardPreview(it)">
    </div>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'NormalImg',
  props: {
    prop: {
      type: [String, Array],
      default: () => []
    }
  },
  watch: {
    prop: {
      immediate: true,
      handler(newVal) {
        this.Imgs = typeof newVal === 'string' ? [newVal] : newVal
      }
    }
  },
  data() {
    return {
      Imgs: [],
      dialogVisible: false,
      dialogImageUrl: ''
    }
  },
  methods: {
    handlePictureCardPreview(url) {
      this.dialogImageUrl = url
      this.dialogVisible = true
    }
  }
}
</script>
<style scope>
.imgs {
  display: flex;
}
.imgs img {
  display:block;
  width: 80px;
  margin-right: 10px;
}
</style>
