<template>
    <div class="section-service bg-cover pt-70px pb-70px lg:pb-250px">
        <div class="container">
            <SectionTitle section-title="Наши услуги" />
            <p class="text-center mb-40px text-18px lg:text-25px">
                Надежный удаленный контроль при помощи <br />
                беспроводной сигнализации и смартфона, в квартире, доме или
                офисе
            </p>
            <Services />
        </div>
    </div>
</template>

<script>
import SectionTitle from '../SectionTitle.vue';
import Services from './Services.vue';
export default {
    components: { SectionTitle, Services }
};
</script>

<style lang="scss" scoped>
.section-service {
    background-image: url('../../assets/img/service-back.jpg');
}
</style>
