<template>
    <el-container
        style="
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        "
    >
        <div class="my-5">Другой Лайаут</div>
        <slot />

        <el-button @click="router.push('/')" type="primary" class="mt-5"
            >На главную</el-button
        >
    </el-container>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style lang="scss" scoped></style>
