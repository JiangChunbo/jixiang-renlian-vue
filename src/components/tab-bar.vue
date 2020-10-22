<template>
    <div class="tab">
        <div class="tab-item">
<router-link to="/multi" tag="button" class="tab-item-button">
    <i class="icon iconfont">&#xe60a;</i>
</router-link>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        handleList() {},
    },
};
</script>

<style scoped lang="scss">
.tab {
    position: fixed;
    top: $title-height;
    left: 0;

    width: $tab-width;
    height: 100%;
    background-color: #363547;

    .tab-item {
        width: 100%;
        height: $tab-width;

        font-size: 18px;
        line-height: 50px;
        text-align: center;

        .tab-item-button {
            width: $tab-button-width;
            height: $tab-button-width;
            background: none;
            border: none;
        }
    }

    .tab-item:hover .tab-item-button,
    .router-link-active {
        background: #1b1f28;
        .iconfont {
            color: #007aff;
        }
    }
}
</style>