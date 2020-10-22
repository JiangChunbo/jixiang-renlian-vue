<template>
    <div class="container">
        <div class="item"></div>
        <div class="item"></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped lang="scss">
.container {
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    width: 100%;
    height: 100%;
    .item {
        margin: 20px;
        width: 50%;
        height: 300px;
        background: red;
    }
}
</style>