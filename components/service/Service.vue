<template>
    <div
        class="service mx-auto flex flex-col text-center bg-white border border-solid border-#878787 rounded-20 py-25px px-15px mb-25px lg:w-49 md:h-300px xl:mb-0"
    >
        <h3
            class="font-bebas-neue uppercase mb-20px lg:mb-25px text-24px lg:text-30px"
        >
            {{ title }}
        </h3>
        <div class="sm:flex items-center justify-center">
            <img
                :src="imgPath"
                class="service__img cursor-pointer mx-auto"
                @click="toggleService()"
            />
            <button
                class="button button--service px-40px py-5px sm:hidden my-15px"
                @click="toggleService()"
            >
                {{ isOpen ? 'Скрыть' : 'Подробнее' }}
            </button>
            <div v-if="isOpen" class="sm:ml-20px">
                <p
                    v-for="(text, index) in texts"
                    :key="index"
                    class="service__text text-left mb-10px sm:mb-15px text-14px lg:text-16px xl:text-18px"
                >
                    {{ text }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        texts: {
            type: Array
        },
        imgPath: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            isOpen: false
        };
    },
    methods: {
        toggleService() {
            this.isOpen = !this.isOpen;
        }
    }
};
</script>

<style lang="scss" scoped>
.service {
    transition: 0.5s;
    &__text {
        transition: 0.5s;
        &:last-child {
            margin-bottom: 0;
        }
    }
    &__img {
        transition: 0.5s;
        &:hover {
            transform: scale(1.05, 1.05);
        }
    }
}

@media screen and (max-width: 630px) {
    .service {
        &__img {
            &:hover {
                transform: scale(1);
            }
        }
    }
}
</style>
