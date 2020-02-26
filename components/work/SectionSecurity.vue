<template>
    <div
        class="section-security bg-no-repeat bg-cover py-70px px-15px lg:p-0 lg:-mt-100px"
    >
        <SectionTitle section-title="Как это работает?" :is-gray-title="true" />
        <div class="justify-between hidden lg:flex">
            <SecurityWithout />
            <Security />
        </div>
        <SecurityMobile class="lg:hidden max-w-375px w-full mx-auto" />
    </div>
</template>

<script>
import SectionTitle from '../SectionTitle.vue';
import SecurityMobile from './SecurityMobile.vue';
import Security from './Security.vue';
import SecurityWithout from './SecurityWithout.vue';
export default {
    components: { SectionTitle, SecurityWithout, Security, SecurityMobile }
};
</script>

<style lang="scss">
@media screen and (max-width: 991px) {
    .section-security {
        background-image: url('../../assets/img/security-mobile/security-mobile-back.jpg');
    }
}
</style>
