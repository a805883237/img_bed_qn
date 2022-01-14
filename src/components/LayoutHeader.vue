<template>
  <el-header>
    <p class="header_text">简易七牛图床(博客专用)</p>
  </el-header>
</template>

<script>
export default {
  name: 'LayoutHeader',
  props: {
  }
}
</script>

<style scoped>
.el-header{
  width: 100%;
  height: 60px;
  background-color: #E9EEF3;
}
.header_text {
  line-height: 60px;
  font-size: 24px;
  letter-spacing: 4px;
  text-align: center;
}
</style>
