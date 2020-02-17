<template>
    <div class="section-video py-80px">
        <div class="container">
            <SectionTitle section-title="TOP Security KZ" />
            <div class="w-full mx-auto text-center">
                <iframe
                    class="w-11/12 mx-auto h-350px  md:h-500px"
                    src="https://www.youtube.com/embed/B1UMkBdsO1o"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen=""
                ></iframe>
            </div>
        </div>
    </div>
</template>

<script>
import SectionTitle from '../SectionTitle.vue';
export default {
    components: { SectionTitle }
};
</script>

<style lang="scss">
.section-video {
    background: linear-gradient(
        360deg,
        rgba(255, 255, 255, 0.8) 0%,
        rgba(214, 214, 214, 0.304) 100%
    );
}
</style>
