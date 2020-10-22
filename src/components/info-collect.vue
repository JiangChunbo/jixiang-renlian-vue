<template>
    <div class="right">
        <info-collect-item class="item"></info-collect-item>
        <info-collect-item class="item"></info-collect-item>
        <info-collect-item class="item"></info-collect-item>
    </div>
</template>

<script>
import infoCollectItem from '@/components/info-collect-item'
export default {
    components: {
        infoCollectItem
    }
}
</script>
<style scoped lang="scss">
.right {
    position: fixed;
    right: 0;
    
    overflow: auto;
    height: 100%;
    width: $right-width;
    background: #2E2F44;
}

.item {
    margin: 20px 0;
}
</style>