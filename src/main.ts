import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import App from './App.vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

import '~/styles/index.scss';
import 'uno.css';
import 'element-plus/theme-chalk/src/message.scss';
import 'element-plus/theme-chalk/src/notification.scss';

//! LAYOUTS IMPORT-----------

import defaultLyaout from './layouts/defaultLyaout.vue';
import anotherLyaout from './layouts/anotherLyaout.vue';

//!-----------------------

const pinia = createPinia();
const app = createApp(App);

app.component('default-layout', defaultLyaout);
app.component('another-lyaout', anotherLyaout);

app.use(pinia);
app.use(router);
app.mount('#app');

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
