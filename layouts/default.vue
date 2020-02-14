<template>
    <div class="font-montserrat leading-tight">
        <HeaderMobile class="md:hidden" />
        <Header class="hidden md:block" />
        <nuxt />
        <Footer />
    </div>
</template>

<script>
import Footer from '../components/footer/Footer.vue';
import HeaderMobile from '../components/header/HeaderMobile.vue';
import Header from '../components/header/Header.vue';
export default {
    components: {
        Header,
        HeaderMobile,
        Footer
    },
    data() {
        return {};
    }
};
</script>
