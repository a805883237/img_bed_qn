<template>
  <div class="home_container">
    <div class="imgs_container">
      <div v-for="item in imgList" :key="item.imgKey">
        <el-card class="img_card_inner" body-style="padding: 10px;">
          <el-image
            class="card_img" 
            :src="item.imgUrl + '-thumb'" 
            :preview-src-list="[item.imgUrl]"
            hide-on-click-modal
            lazy
            >
            <template #placeholder>
              <div class="image-slot">
                加载中<span class="dot">...</span>
              </div>
            </template>
          </el-image>
          <div class="card_footer">
            <el-button type="primary" icon="search" @click="handleImgPreview(item)">放大</el-button>
            <el-button type="primary" icon="document-copy" @click="copyImageUrl(item)">复制</el-button>
          </div>
        </el-card>
      </div>
    </div>
    <div class="home_footer">
      <el-pagination
        @size-change="handlePageSizeChange"
        @current-change="handlePageNumberChange"
        :current-page="pageNumber"
        :default-page-size="12"
        :page-sizes="[12, 24, 50, 100, 200, 500]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="count"
      ></el-pagination>
    </div>
    <el-image-viewer
      v-if="imageViewerVisiable"
      :url-list="currentViewImg"
      @close="handleCloseImgViewer"
      hide-on-click-modal	
    >
    </el-image-viewer>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus';
import { copyText } from '../../utils/fun';

export default {
  data () {
    return {
      pageNumber: 1,
      pageSize: 12,
      count: null,
      imgList: [],
      imageViewerVisiable: false,
      currentViewImg: null,
    }
  },
  methods: {
    getImageData(){
      // const params = {
      //   pageNumber: this.pageNumber,
      //   pageSize: this.pageSize,
      // }
      this.imgList = [
        {imgKey: 'bizhi', imgUrl: 'http://img.andd.fun/LickObservatory_ZH-CN9676762110.jpg'}
      ];
      this.count = 1;
    },
    handlePageSizeChange(val) {
      this.pageSize = val;
      this.pageNumber = 1;

      this.$nextTick(() => {
        this.getImageData();
      })
    },
    handlePageNumberChange(val) {
      this.pageNumber = val;
  
      this.$nextTick(() => {
        this.getImageData();
      })
    },
    copyImageUrl(imgItem) {
      copyText(imgItem.imgUrl);
      ElMessage({
        message: '图片链接已复制~',
        type: 'success',
      })
    },
    handleImgPreview(item){
      this.imageViewerVisiable = true;
      this.currentViewImg = [item.imgUrl]
    },
    handleCloseImgViewer(){
      this.imageViewerVisiable = false;
    },
  },
  mounted() {
    this.getImageData();
  }
}
</script>

<style scoped>
.home_container {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
.imgs_container {
  flex-grow: 1;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.home_footer {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.img_card_inner {
  margin: 12px 12px;
}
.card_img {
  width: 300px;
  height: 300px;
  display: block;
}
.card_footer {
  padding-top: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.card_footer .el-button {
  flex-grow: 1;
}
</style>