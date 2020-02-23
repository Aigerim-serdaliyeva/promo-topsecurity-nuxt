<template>
    <div
        class="object w-6/12 rounded-3 overflow-hidden mr-7px"
        :class="[
            { hover: objectShownSide === direction },
            `object--${direction}`
        ]"
        :style="{ background: objectBackground }"
        @mouseover="showobjectSide(direction)"
    >
        <img :src="figurePath" class="object__figure -mr-7px ml-auto" />
        <h2 class="object__title ml-auto mr-20px">
            {{ title }}
        </h2>
        <div
            class="object__content w-9/12 xl:w-8/12 flex flex-wrap justify-center mx-auto hidden"
        >
            <div
                v-for="(item, index) in items"
                :key="`item-${index}`"
                :style="{ 'border-color': color }"
                class="item max-w-170px w-full mb-40px lg:mx-5px xl:mx-20px xl:max-w-210px"
            >
                <img
                    :src="item.imgPath"
                    class="item__img mx-auto mb-10px xl:mb-15px max-w-110px xl:max-w-none"
                />
                <p class="text-white text-center text-12px xl:text-16px">
                    {{ item.text }}
                </p>
            </div>
            <svg
                width="720"
                height="8"
                viewBox="0 0 720 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0 4H720"
                    :stroke="color"
                    stroke-width="7"
                    stroke-dasharray="25 8"
                />
            </svg>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
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
            default: '#EF3B39'
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
    methods: {
        ...mapMutations({
            showobjectSide: 'showobjectSide'
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
                text-align: right;
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
