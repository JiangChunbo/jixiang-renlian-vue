<template>
    <div class="container">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped lang="scss">
.container {
    position: fixed;
    left: $tab-width;
    right: 0;
    top: $title-height;

    overflow: auto;
    height: 100%;
    background: #242333;
}
</style>