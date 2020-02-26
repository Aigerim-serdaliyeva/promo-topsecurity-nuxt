<template>
    <div
        class="object w-6/12 rounded-3 overflow-hidden mr-7px"
        :class="[
            { hover: objectShownSide === direction },
            `object--${direction}`
        ]"
        :style="{ backgroundImage: objectBackground }"
        @mouseenter="onHover"
    >
        <img :src="figurePath" class="object__figure -mr-7px ml-auto" />
        <h2 class="object__title" :style="{ color }">
            {{ title }}
        </h2>
        <div
            class="object__content relative w-9/12 xl:w-8/12 flex flex-wrap items-start justify-center mx-auto hidden"
        >
            <div
                v-for="(item, index) in items"
                :key="`item-${index + 1}`"
                class="item opacity-0 z-1 max-w-170px w-full mb-40px lg:mx-5px xl:mx-20px xl:max-w-210px"
                :class="`item-${index + 1}`"
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

            <div
                class="object__line object__line--1 absolute z-0 overflow-hidden"
            >
                <svg
                    width="500"
                    height="8"
                    viewBox="0 0 500 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 4H720"
                        :stroke="color"
                        stroke-width="5"
                        stroke-dasharray="20 10"
                    />
                </svg>
            </div>

            <div
                class="object__line object__line--3 absolute z-0 overflow-hidden"
            >
                <svg
                    width="79"
                    height="262"
                    viewBox="0 0 79 262"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M-6.02652e-06 4L42 4C60.2254 4.00001 75 18.7746 75 37L75 133.5L75 225C75 243.225 60.2254 258 42 258L5.07617e-06 258"
                        :stroke="color"
                        stroke-width="5"
                        stroke-dasharray="20 10"
                    />
                </svg>
            </div>

            <div
                class="object__line object__line--4 absolute z-0 overflow-hidden"
            >
                <svg
                    width="500"
                    height="8"
                    viewBox="0 0 500 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 4H720"
                        :stroke="color"
                        stroke-width="5"
                        stroke-dasharray="20 10"
                    />
                </svg>
            </div>

            <div
                v-if="`object--${direction}` === 'object--left'"
                class="object__line object__line--6 absolute z-0 overflow-hidden"
            >
                <svg
                    width="404"
                    height="270"
                    viewBox="0 0 404 270"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M113.091 4L37 4.00001C18.7746 4.00001 4 18.7746 4 37L4 121.401L4 233C4 251.225 18.7746 266 37 266L404 266"
                        :stroke="color"
                        stroke-width="5"
                        stroke-dasharray="20 10"
                    />
                </svg>
            </div>
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
            default: 'accent-red'
        },
        objectBackground: {
            type: String,
            default:
                'linear-gradient(90deg, rgba(239, 59, 57, 0.6) 0%, rgba(239, 59, 57, 0) 100%)'
        }
    },
    data() {
        return {
            itemAnime: this.$anime.timeline({
                easing: 'linear',
                loop: false,
                autoplay: false
            })
        };
    },
    computed: {
        ...mapGetters({
            objectShownSide: 'objectShownSide'
        })
    },
    mounted() {
        this.itemAnime
            .add(this.getObjectAnime('.item-1'))
            .add(this.getSvgAnime('.object__line--1'))
            .add(this.getObjectAnime('.item-2'))
            .add(this.getSvgAnime('.object__line--2'))
            .add(this.getObjectAnime('.item-3'))
            .add({
                targets: '.object__line--3',
                duration: 1000
            })
            .add(this.getObjectAnime('.item-6'))
            .add(this.getSvgAnime('.object__line--4'))
            .add(this.getObjectAnime('.item-5'))
            .add(this.getObjectAnime('.item-4'))
            .add(this.getObjectAnime('.item-7'));
    },
    methods: {
        ...mapMutations({
            showObjectSide: 'showObjectSide'
        }),
        onHover() {
            this.showObjectSide(this.direction);
            this.itemAnime.play();
        },
        getObjectAnime(targets) {
            return {
                targets,
                keyframes: [
                    {
                        opacity: 1,
                        duration: 200
                    },
                    {
                        scale: 1.1
                    },
                    {
                        scale: 1
                    }
                ],
                duration: 400
            };
        },
        getSvgAnime(targets) {
            return {
                targets,
                width: [0, 600],
                duration: 400
            };
        }
    }
};
</script>

<style lang="scss">
.content-right-svg {
    height: 14.20736vw;
    width: 5vw;
    // position: absolute;
    // top: 3.0456vw;
    // right: -2.2912vw;
    // z-index: -1;
    margin: auto;
}

@keyframes dash-right {
    from {
        stroke-dasharray: 20 10;
    }
    to {
        stroke-dasharray: 20 10;
        stroke-dashoffset: -90;
    }
}

svg {
    line {
        -webkit-animation: dash-right 1.5s linear infinite;
        animation: dash-right 1.5s linear infinite;
    }
    path {
        -webkit-animation: dash-right 1.5s linear infinite;
        animation: dash-right 1.5s linear infinite;
    }
}

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

    &__content {
        height: 770px;
    }

    &__line {
        &--1 {
            top: 9%;
            left: 25%;
        }
        &--3 {
            right: 2%;
            top: 9%;
        }
        &--4 {
            top: 42%;
            left: 25%;
        }
        &--6 {
            top: 42%;
            left: 0;
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
