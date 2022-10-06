<template>
    <el-menu mode="horizontal" :ellipsis="false">
        <router-link style="display: flex" to="/">
            <div style="align-self: center; margin-left: 10px">
                <img style="height: 40px" src="../assets/img/logo.png" alt="" />
            </div>
            <div style="align-self: center; margin-left: 10px">
                <img
                    style="height: 25px"
                    src="../assets/img/kuazot.png"
                    alt=""
                />
            </div>
        </router-link>

        <div style="flex: 0 1 100%"></div>

        <div
            class="mr-4"
            style="
                height: var(--db-menu-item-height);
                display: flex;
                align-items: center;
            "
        >
            <el-switch
                @change="toggleDark()"
                v-model="isThemeSwitcher"
                :active-icon="Moon"
                :inactive-icon="Sunny"
            />
        </div>

        <el-menu-item style="color: var(--db-color-primary); font-weight: bold">
            <el-icon>
                <UserFilled />
            </el-icon>
            Иванов Иван Иванович
        </el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>
import { toggleDark } from '~/composables';
import { Moon, Sunny, UserFilled } from '@element-plus/icons-vue';

let isThemeSwitcher = ref<boolean>(false);

const checkTheme = () => {
    let check = localStorage.getItem('vueuse-color-scheme');
    isThemeSwitcher.value = check === 'dark' ? true : false;
};

onMounted(checkTheme);
</script>

<style lang="scss"></style>
