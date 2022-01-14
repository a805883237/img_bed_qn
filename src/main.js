import { createApp } from 'vue';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'


import * as ElIcons from '@element-plus/icons-vue';
// 引入全部 icon
// const app = createApp(App)
// for (const name in ElIcons){
// 	app.component(name,(ElIcons as any)[name])
// }

import App from './App.vue';
import router from "./router";


createApp(App)
  .use(ElementPlus)
  .use(router)
  .component('Search', ElIcons.Search)
  .component('DocumentCopy', ElIcons.DocumentCopy)
  .mount('#app');
