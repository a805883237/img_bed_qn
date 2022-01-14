<template>
  <el-container>
    <layout-header></layout-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <layout-footer></layout-footer>
  </el-container>
</template>

<script>
import LayoutHeader from './LayoutHeader.vue';
import LayoutFooter from './LayoutFooter.vue';

export default {
  name: 'Layout',
  components:{
    LayoutHeader,
    LayoutFooter,
  },
  props: {
  }
}
</script>

<style scoped>
.el-container {
  flex-direction: column;
}
</style>
