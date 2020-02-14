<template>
    <div class="flex justify-between">
        <div
            v-for="(service, index) in services"
            :key="service"
            class="w-49 text-center bg-white border border-solid border-#878787 rounded-20 py-25px px-15px"
        >
            <h3 class="font-bebas-neue uppercase text-30px mb-25px">
                {{ service.title }}
            </h3>
            <div class="flex items-center">
                <img
                    :src="require(`../../assets/img/service-${index + 1}.png`)"
                />
                <div class="ml-20px">
                    <p
                        v-for="text in service.text"
                        :key="text"
                        class="service__text text-left mb-15px"
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
    }
};
</script>

<style lang="scss" scoped>
.service__text {
    &:last-child {
        margin-bottom: 0;
    }
}
</style>
