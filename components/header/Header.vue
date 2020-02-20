<template>
    <div
        class="fixed z-10 w-full bg-accent-gray py-10px border-b-6 border-solid border-accent-red"
    >
        <div class="container">
            <div class="flex items-center">
                <a v-scroll-to="'#main'" href="#main" class="flex-grow"
                    ><img src="../../assets/img/logo.svg"
                /></a>
                <MainMenu />
                <div>
                    <HeaderPhone
                        href="tel:+77016437956"
                        phone="+7 (701) 643-79-56"
                    />
                    <HeaderPhone
                        href="tel:+77273390452"
                        phone="+7 (727) 339-04-52"
                    />
                    <HeaderPhone href="tel:5335" phone="5335" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderPhone from './HeaderPhone.vue';
import MainMenu from './MainMenu.vue';
export default {
    components: { MainMenu, HeaderPhone }
};
</script>

<style lang="scss" scoped></style>
