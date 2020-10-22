<template>
    <div class="container">
        <div class="video-wrapper">
            <video
                src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
            ></video>
        </div>
        <info-collect class="info-collect"></info-collect>
    </div>
</template>

<script>
import infoCollect from "@/components/info-collect";
export default {
    components: {
        infoCollect,
    },
};
</script>

<style scoped lang="scss">
.container {
    position: absolute;
    top: 0;
    left: 0;
    .video-wrapper {
        position: absolute;
        top: 0;
        right: $right-width;
        left: 0;
        bottom: 0;

        display: inline-block;
        height: 100%;
        padding: 0 30px;

        video {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: calc(100% - 60px);
        }
    }

    .info-collect {
        display: inline-block;
    }
}
</style>