<template>
    <div
        class="advantage relative text-white max-w-550px -mx-15px sm:mx-auto lg:w-49 mb-10px"
    >
        <img :src="imgPath" class="w-full" />
        <div class="absolute pb-10px top-55% z-10 px-10px sm:p-20px">
            <h3
                class="font-bebas-neue uppercase text-20px sm:text-24px xl:text-30px"
            >
                {{ title }}
            </h3>
            <p
                class="leading-none text-15px sm:text-16px xl:leading-tight xl:text-18px"
            >
                {{ text }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imgPath: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        }
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
