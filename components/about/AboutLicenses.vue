<template>
    <div class="bg-accent-gray text-white py-80px">
        <div class="container">
            <SectionTitle class="text-white" section-title="НАШИ ЛИЦЕНЗИИ" />
            <div class="relative flex items-start justify-between mx-auto">
                <img
                    src="@/assets/img/logo-white.png"
                    class="absolute license-logo-absolute"
                />
                <div
                    v-for="(license, index) in licenses"
                    :key="license"
                    class="text-center max-w-470px w-full"
                >
                    <img
                        :src="
                            require(`../../assets/img/license-${index + 1}.jpg`)
                        "
                        class="mx-auto mb-30px w-250px h-350px"
                    />
                    <div class="text-24px font-bold">{{ license.title }}</div>
                    <p class="text-20px">{{ license.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SectionTitle from '../SectionTitle.vue';
export default {
    components: { SectionTitle },
    data() {
        return {
            licenses: [
                {
                    title: 'Уведомление № KZ82UBG0000297',
                    text:
                        'Уведомление о деятельности по монтажу наладке и техническому обслуживанию средств охранной cигнализации от 23.02.2018 года'
                },
                {
                    title: 'Лицензия № 19004986',
                    text:
                        'На осуществление охранной деятельности юридическими лицами от 28.02.2019 года'
                }
            ]
        };
    }
};
</script>
