<template>
    <div
        class="object w-6/12 rounded-3 overflow-hidden mr-7px"
        :class="[
            { hover: objectShownSide === direction },
            `object--${direction}`
        ]"
        :style="{ backgroundImage: objectBackground }"
        @mouseover="showObjectSide(direction)"
    >
        <img :src="figurePath" class="object__figure -mr-7px ml-auto" />
        <h2 class="object__title" :style="{ color }">
            {{ title }}
        </h2>
        <div
            class="object__content w-9/12 xl:w-8/12 flex flex-wrap justify-center mx-auto hidden"
        >
            <div
                v-for="(item, index) in items"
                :key="`item-${index}`"
                class="item max-w-170px w-full mb-40px lg:mx-5px xl:mx-20px xl:max-w-210px"
            >
                <img
                    :src="item.imgPath"
                    class="item__img mx-auto mb-10px xl:mb-15px max-w-110px xl:max-w-none"
                    :style="{ 'border-color': color }"
                />
                <p class="text-white text-center text-12px xl:text-16px">
                    {{ item.text }}
                </p>
            </div>
            <svg
                width="660"
                height="8"
                viewBox="0 0 660 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0 4H720"
                    :stroke="color"
                    stroke-width="5"
                    stroke-dasharray="20 8"
                />
            </svg>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import VueAnime from 'vue-animejs';
export default {
    props: {
        direction: {
            type: String,
            default: 'left'
        },
        title: {
            type: String,
            default: ''
        },
        figurePath: {
            type: String,
            default: ''
        },
        items: {
            type: Array,
            default() {
                return [];
            }
        },
        color: {
            type: String,
            default: 'accent-red'
        },
        objectBackground: {
            type: String,
            default:
                'linear-gradient(90deg, rgba(239, 59, 57, 0.6) 0%, rgba(239, 59, 57, 0) 100%)'
        }
    },
    computed: {
        ...mapGetters({
            objectShownSide: 'objectShownSide'
        })
    },
    mounted() {
        const targets = this.$el;
        this.$anime.timeline();
    },
    methods: {
        ...mapMutations({
            showObjectSide: 'showObjectSide'
        })
    }
};
</script>

<style lang="scss">
.item {
    &:last-child {
        margin-bottom: 0;
    }
    &__img {
        border-radius: 50%;
        border-width: 7px;
        border-style: solid;
    }
}

.object {
    -webkit-box-shadow: 0 1px 4px #000;
    box-shadow: 0 1px 4px #000;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    background-color: #32353c;

    &--left {
        .object {
            &__title {
                margin: 0 20px 0 auto;
            }
        }
    }

    &--right {
        .object {
            &__title {
                margin: 0 auto 0 20px;
            }
            &__figure {
                margin: 0 auto 0 0;
            }
        }
    }

    &:not(.hover) {
        .object {
            &__title {
                color: #fff !important;
            }
        }
    }

    &.hover {
        width: 90%;
        padding: 20px 0;
        .object {
            &__content {
                display: flex;
            }
            &__figure {
                display: none;
            }
            &__title {
                max-width: none;
                text-align: center;
                margin: 0 0 40px;
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .item {
        &__img {
            border-width: 5px;
        }
    }
}
</style>
