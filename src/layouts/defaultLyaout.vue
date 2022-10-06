<template>
    <div style="height: 100vh">
        <el-header height="60px" style="padding: 0">
            <TheHeader />
        </el-header>
        <el-container>
            <el-aside width="70px">
                <TheSide />
            </el-aside>
            <el-main style="height: calc(100vh - 60px); padding-right: 0">
                <el-scrollbar class="pr-5">
                    <slot />
                </el-scrollbar>
            </el-main>
        </el-container>
    </div>
</template>

<script lang="ts" setup>
import TheHeader from '~/components/TheHeader.vue';
import TheSide from '~/components/TheSide.vue';
</script>

<style lang="scss" scoped></style>
