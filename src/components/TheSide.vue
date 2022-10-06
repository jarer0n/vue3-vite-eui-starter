<template>
    <el-menu
        style="height: 100%"
        :default-active="route.path"
        :collapse="isCollapse"
        @select="handleSelect"
        @open="handleOpen"
        @close="handleClose"
    >
        <el-menu-item index="/">
            <i-ep-location />
            <template #title> Навигация 2 </template>
        </el-menu-item>

        <el-menu-item index="/2" disabled>
            <i-ep-document />
            <template #title>Навигация 3</template>
        </el-menu-item>

        <el-menu-item index="/about">
            <i-ep-files />
            <template #title>Навигация 4</template>
        </el-menu-item>

        <el-menu-item index="/4">
            <i-ep-service />
            <template #title>Навигация 5</template>
        </el-menu-item>

        <el-menu-item index="/5">
            <i-ep-setting />
            <template #title>Навигация 6</template>
        </el-menu-item>

        <el-sub-menu index="/6">
            <template #title>
                <i-ep-more />
            </template>

            <el-menu-item-group title="Группа 1">
                <el-menu-item index="/1-1">Итем 1</el-menu-item>
                <el-menu-item index="/1-2">Итем 2</el-menu-item>
            </el-menu-item-group>

            <el-menu-item-group title="Группа 2">
                <el-menu-item index="/1-3">Итем 3</el-menu-item>
            </el-menu-item-group>

            <el-sub-menu index="/1-4">
                <template #title><span> Подменю</span></template>
                <el-menu-item index="/1-4-1">Итем 4</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
    </el-menu>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const isCollapse = ref(true);

const handleOpen = (key: string, keyPath: string[]): void => {
    // console.log(key, keyPath)
};
const handleClose = (key: string, keyPath: string[]): void => {
    // console.log(key, keyPath)
};

const handleSelect = (key: string): void => {
    router.push(key);
};
</script>
