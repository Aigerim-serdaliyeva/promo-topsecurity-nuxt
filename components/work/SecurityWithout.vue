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
            class="work__blog w-8/12 flex flex-wrap justify-center mx-auto hidden"
        >
            <div
                v-for="(work, index) in securityWithout"
                :id="work.id"
                :key="work"
                class="work max-w-210px w-full mb-40px mx-20px"
            >
                <img
                    :src="
                        require(`../../assets/img/without-security/without-security-${index +
                            1}.jpg`)
                    "
                    class="work__img work__img--red mx-auto mb-15px"
                />
                <p class="text-white text-center text-16px">{{ work.text }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import anime from 'animejs';
export default {
    data() {
        return {
            securityWithout: require('../../assets/json/security-without.json')
        };
    },
    methods: {}
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
</style>
