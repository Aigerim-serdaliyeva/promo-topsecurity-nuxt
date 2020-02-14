<template>
    <div class="flex flex-wrap justify-between mt-40px">
        <div
            v-for="(advantage, index) in advantages"
            :key="advantage"
            class="advantage relative text-white w-49 mb-10px"
        >
            <img
                :src="require(`@/assets/img/advantage-${index + 1}.jpg`)"
                class="w-full"
            />
            <div class="absolute p-20px pb-10px bottom-22px z-10">
                <h3 class="font-bebas-neue uppercase text-30px">
                    {{ advantage.title }}
                </h3>
                <p class="text-18px">{{ advantage.text }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
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
