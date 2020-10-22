<template>
    <div>
        <!-- 左边的面板 -->
        <tab-bar></tab-bar>
        <!-- 标题 -->
        <app-header></app-header>

        <app-main></app-main>
    </div>
</template>

<script>
import appHeader from "@/components/app-header";
import tabBar from "@/components/tab-bar";
import appMain from "@/components/app-main";
export default {
    name: "App",
    components: {
        appHeader,
        tabBar,
        appMain,
    },
};
</script>

<style scoped>
html,
body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}
#app {
    width: 100%;
    height: 100%;
    background: #242330;
}
</style>