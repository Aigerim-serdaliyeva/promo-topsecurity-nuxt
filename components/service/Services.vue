<template>
    <div class="lg:flex justify-between">
        <Service
            v-for="(service, index) in services"
            :key="service.title"
            :title="service.title"
            :texts="service.text"
            :img-path="require(`../../assets/img/service-${index + 1}.png`)"
        ></Service>
    </div>
</template>

<script>
import Service from './Service';
export default {
    components: { Service },
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
