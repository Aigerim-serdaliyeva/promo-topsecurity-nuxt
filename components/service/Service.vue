<template>
    <div class="lg:flex justify-between">
        <div
            v-for="(service, index) in services"
            :key="service"
            class="service mx-auto flex flex-col text-center bg-white border border-solid border-#878787 rounded-20 py-25px px-15px mb-25px lg:w-49 md:h-300px xl:mb-0"
        >
            <h3
                class="font-bebas-neue uppercase mb-20px lg:mb-25px text-24px lg:text-30px"
            >
                {{ service.title }}
            </h3>
            <div class="sm:flex items-center justify-center">
                <img
                    :src="require(`../../assets/img/service-${index + 1}.png`)"
                    class="service__img cursor-pointer mx-auto"
                    @click="toggleService(index)"
                />
                <button
                    class="button button--service px-40px py-5px sm:hidden my-15px"
                    @click="toggleService(index)"
                >
                    {{ button.more }}
                </button>
                <div v-if="toggleText[index]" class="sm:ml-20px">
                    <p
                        v-for="text in service.text"
                        :key="text"
                        class="service__text text-left mb-10px sm:mb-15px text-14px lg:text-16px xl:text-18px"
                    >
                        {{ text }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            button: {
                more: 'Подробнее'
            },
            toggleText: [false, false],
            services: [
                {
                    title: 'Охранная сигнализация Standart',
                    text: [
                        'Комплексная охранная система с возможностью использования беспроводных и проводных датчиков. Обеспечивает полноценную защиту объекта.',
                        'В комплекте: датчики движения и открытия, сирена, пульт управления.',
                        'Беспроводной тип передачи сигнала'
                    ]
                },
                {
                    title: 'Охранная сигнализация Premium',
                    text: [
                        'Интеллектуальная охранная система с высокой степенью защиты от несанкционированного вторжения. Полный спектр защиты охранных зон.',
                        'В комплекте: \n Мощный процессор, комплект беспроводных датчиков движения и контроля доступа в помещения.',
                        'Беспроводной тип передачи сигнала'
                    ]
                }
            ]
        };
    },

    methods: {
        toggleService(index) {
            this.toggleText = this.toggleText.map((service, i) =>
                i === index ? !service : service
            );
            this.button.more = this.toggleText ? 'Скрыть' : 'Подробнее';
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
