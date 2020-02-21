<template>
    <div class="bg-accent-gray text-white py-80px">
        <div class="container">
            <SectionTitle
                class="text-white"
                section-title="НАШИ ЛИЦЕНЗИИ"
                is-gray-title="false"
            />
            <div class="relative lg:flex items-start justify-between mx-auto">
                <img
                    src="@/assets/img/logo-white.png"
                    class="license__logo mx-auto mb-30px lg:absolute"
                />
                <div
                    v-for="(license, index) in licenses"
                    :key="`license-${index}`"
                    class="text-center max-w-470px w-full mx-auto mb-30px lg:mb-0"
                >
                    <img
                        :src="
                            require(`../../assets/img/license-${index + 1}.jpg`)
                        "
                        class="mx-auto w-250px h-350px mb-20px lg:mb-30px"
                    />
                    <div class="font-bold text-18px md:text-20px xl:text-24px">
                        {{ license.title }}
                    </div>
                    <p class="text-16px xl:text-20px">{{ license.text }}</p>
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

<style lang="scss">
.license__logo {
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
}

@media screen and (max-width: 1024px) {
    .license__logo {
        top: 0;
        left: 0;
        transform: none;
    }
}
</style>
