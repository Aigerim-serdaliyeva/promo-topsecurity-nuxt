<template>
    <div
        class="work__content work__content--red w-6/12 text-right rounded-3 overflow-hidden mr-7px"
    >
        <img
            src="../../assets/img/security-figure-1.png"
            class="work__figure -mr-7px ml-auto"
        />
        <h2 class="work__title ml-auto mr-20px">
            ОБЪЕКТ БЕЗ ОХРАНЫ TOP SECURITY KZ
        </h2>
        <div
            class="work__blog w-9/12 xl:w-8/12 flex flex-wrap justify-center mx-auto hidden"
        >
            <div
                v-for="(work, index) in securityWithout"
                :key="work"
                class="work max-w-170px w-full mb-40px lg:mx-5px xl:mx-20px xl:max-w-210px"
                :class="work.id"
            >
                <img
                    :src="
                        require(`../../assets/img/without-security/without-security-${index +
                            1}.jpg`)
                    "
                    class="work__img work__img--red mx-auto mb-10px xl:mb-15px max-w-110px xl:max-w-none"
                />
                <p class="text-white text-center text-12px xl:text-16px">
                    {{ work.text }}
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
                    stroke="#EF3B39"
                    stroke-width="7"
                    stroke-dasharray="25 8"
                />
            </svg>
        </div>
    </div>
</template>

<script>
import anime from 'animejs';
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            securityWithout: require('../../assets/json/security-without.json')
        };
    },
    methods: {
        ...mapGetters({
            workAnimationStatus: 'workAnimationStatus'
        }),
        animateWork() {
            if (!this.workAnimationStatus) {
                this.firstWorkAnimation();
                console.log('dsds');
            } else {
                this.normalWorkAnimation();
            }
        },
        firstWorkAnimation() {
            const _this = this;
            const imageDuration = 1000;
            this.$anime.timeline().add({
                targets: '.without-security-1',
                opacity: {
                    value: 1,
                    duration: 1000
                },
                scale: [1, 1.1, 1],
                duration: imageDuration
            });
        },
        normalWorkAnimation() {}
    }
};
</script>

<style lang="scss">
.work {
    &:last-child {
        margin-bottom: 0;
    }
    &__img {
        border-radius: 50%;
        &--red {
            border: 7px solid #ef3b39;
        }
        &--yellow {
            border: 7px solid #ffb800;
        }
    }
    &__content {
        -webkit-box-shadow: 0 1px 4px #000;
        box-shadow: 0 1px 4px #000;
        -webkit-transition: 0.3s;
        transition: 0.3s;

        &--red {
            background: linear-gradient(
                90deg,
                rgba(239, 59, 57, 0.6) 0%,
                rgba(239, 59, 57, 0) 100%
            );
            background-color: #32353c;
        }
        &--yellow {
            background: linear-gradient(
                270deg,
                rgba(255, 138, 0, 0.6) 0%,
                rgba(255, 138, 0, 0) 100%
            );
            background-color: #32353c;
        }

        &:hover {
            width: 90%;
            padding: 20px 0;
            .work {
                &__blog {
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
}

@media screen and (max-width: 768px) {
    .work {
        &__img {
            &--yellow {
                border: 5px solid #ffb800;
            }
        }
    }
}
</style>
