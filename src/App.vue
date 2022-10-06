<template>
  <el-config-provider :locale="locale" namespace="db">
    <component :is="currentLayout">
      <router-view />
    </component>
  </el-config-provider>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';
import ru from 'dayjs/locale/ru';
import ruRu from 'element-plus/es/locale/lang/ru';
import { useRoute } from 'vue-router';



dayjs.locale({ ...ru, weekStart: 1 });

const locale = ruRu;
const route = useRoute();

const currentLayout = computed<any>(() => {
  return route.meta.layout || 'default-layout';
});

</script>

<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

.element-plus-logo {
  width: 50%;
}
</style>
