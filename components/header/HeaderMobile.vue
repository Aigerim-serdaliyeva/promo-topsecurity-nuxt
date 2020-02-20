<template>
    <div>
        <div
            class="header w-full fixed z-30 py-5px"
            :class="{ active: mobileMenuState }"
        >
            <div class="container flex items-center ">
                <div @click="toggleMenu()">
                    <div class="burger" :class="{ checked: isChecked }">
                        <div
                            class="burger__inner dark-bg-white burger__inner--1"
                        ></div>
                        <div
                            class="burger__inner dark-bg-white burger__inner--2"
                        ></div>
                        <div
                            class="burger__inner dark-bg-white burger__inner--3"
                        ></div>
                    </div>
                </div>

                <a
                    v-scroll-to="'#main'"
                    href="#main"
                    class="logo text-center mx-auto block w-50px"
                    ><img src="@/assets/img/logo.svg" class="mx-auto" />
                </a>
                <a href="tel:5335">
                    <img src="../../assets/img/header-phone.svg" />
                </a>
            </div>
        </div>
        <div
            class="header-mobile w-full h-screen bg-white fixed flex items-center justify-center flex-col pb-25px px-15px pt-250px z-20"
            :class="{ active: mobileMenuState }"
        >
            <MainMenu class="flex-grow" @onSelectItem="closeMenu" />
            <a href="" class="button mb-25px">Заказать звонок</a>
            <HeaderSocial />
        </div>
    </div>
</template>

<script>
import HeaderSocial from './HeaderSocial.vue';
import MainMenu from './MainMenu.vue';
export default {
    components: { MainMenu, HeaderSocial },
    data() {
        return {
            mobileMenuState: false,
            isChecked: false
        };
    },
    methods: {
        toggleMenu() {
            this.mobileMenuState = !this.mobileMenuState;
            this.isChecked = !this.isChecked;
        },
        closeMenu() {
            this.mobileMenuState = false;
            this.isChecked = false;
        }
    }
};
</script>

<style lang="scss" scoped>
.header {
    transition: 0.5s all ease-out;
    background: linear-gradient(
        180deg,
        #252525 0%,
        rgba(37, 37, 37, 0.42) 100%
    );
    &.active {
        padding: 50px 0;
        border-radius: 0 0 100px 100px;
        background-color: #32353c;
        .logo {
            width: 80px;
        }
    }
}

.header-mobile {
    transform: translateY(-100%);
    transition: 0.4s all ease-in-out;
    &.active {
        transform: translateY(0);
    }
}

.burger {
    width: 25px;
    height: 18px;
    position: relative;
    transform: rotate(0deg);
    transition: 0.5s ease-in-out;
    cursor: pointer;
    &__inner {
        position: absolute;
        width: 25px;
        height: 3px;
        background-color: #fff;
        border-radius: 6px;
        margin-bottom: 3px;
        transform: rotate(0deg);
        transition: 0.25s ease-in-out;
        &:last-child {
            margin-bottom: 0;
        }
        &--2 {
            top: 6px;
        }
        &--3 {
            top: 12px;
        }
    }
    &.checked {
        .burger__inner {
            &--1 {
                top: 6px;
                transform: rotate(135deg);
            }
            &--2 {
                opacity: 0;
            }
            &--3 {
                top: 6px;
                transform: rotate(-135deg);
            }
        }
    }
}
</style>
