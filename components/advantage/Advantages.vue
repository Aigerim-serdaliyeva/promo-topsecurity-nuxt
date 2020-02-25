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
