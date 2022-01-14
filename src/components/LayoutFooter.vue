<template>
  <el-footer>
    <p class="footer_text">vue3 + axios + nodejs + koa</p>
  </el-footer>
</template>

<script>
export default {
  name: 'LayoutFooter',
  props: {
  }
}
</script>

<style scoped>
.el-footer{
  width: 100%;
  height: 40px;
  background-color: #E9EEF3;
}
.footer_text {
  line-height: 40px;
  font-size: 16px;
  text-align: center;
}
</style>
