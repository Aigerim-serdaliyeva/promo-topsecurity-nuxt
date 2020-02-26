<template>
    <div class="section-advantage z-1 relative bg-cover bg-left py-80px ">
        <div class="container">
            <SectionTitle
                section-title="Наши преимущества"
                :is-gray-title="true"
            />
            <Advantages />
        </div>
    </div>
</template>

<script>
import SectionTitle from '../SectionTitle.vue';
import Advantages from './Advantages.vue';
export default {
    components: { SectionTitle, Advantages }
};
</script>

<style lang="scss">
.section-advantage {
    background-image: url('../../assets/img/advantage-back.jpg');
    &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(#fff, 0.85);
        z-index: -1;
    }
}
</style>
