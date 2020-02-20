<template>
    <div
        class="section-main h-screen bg-cover text-white leading-tight text-20px pt-145px pb-100px lg:text-24px lg:pt-200px lg:pb-120px xl:pt-280px xl:pb-165px xl:text-30px"
    >
        <div class="container">
            <div class="max-w-670px w-full text-center md:text-left">
                <h2
                    class="font-bebas-neue font-bold leading-none tracking-tight uppercase text-50px lg:text-70px xl:text-80px"
                >
                    Охранная сигнализация для дома и офиса
                </h2>
                <ul class="mt-20px mb-30px">
                    Бесплатно:
                    <li>• Выезд</li>
                    <li>• Аудит</li>
                    <li>• Монтаж</li>
                </ul>
                <div class="mb-30px">
                    Надежная защита имущества <br />
                    за 5 500 тг в месяц
                </div>
                <a
                    v-scroll-to="'#form'"
                    href="#form"
                    class="button lg:text-18px xl:text-24px"
                    >ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>

<style scoped>
.section-main {
    background-image: url('../../assets/img/main-back.jpg');
}
</style>
