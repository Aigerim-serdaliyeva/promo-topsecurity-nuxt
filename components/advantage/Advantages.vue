<template>
    <div class="lg:flex flex-wrap justify-between mt-40px">
        <Advantage
            v-for="(advantage, index) in advantages"
            :key="advantage"
            :img-path="require(`@/assets/img/advantage-${index + 1}.jpg`)"
            :title="advantage.title"
            :text="advantage.text"
        />
    </div>
</template>

<script>
import Advantage from './Advantage.vue';
export default {
    components: { Advantage },
    data() {
        return {
            advantages: require('@/assets/json/advantages.json')
        };
    }
};
</script>

<style lang="scss">
.advantage {
    &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.56) 99.99%,
            #000000 100%
        );
    }
}
</style>
