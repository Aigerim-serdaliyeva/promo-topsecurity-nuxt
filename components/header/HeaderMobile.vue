<template>
    <div>
        <div class="header w-full fixed z-10 py-5px">
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
                <nuxt-link to="/" class="text-center mx-auto block">
                    <img src="@/assets/img/logo.svg" class="mx-auto" />
                </nuxt-link>
                <a href="tel:5335">
                    <img src="../../assets/img/header-phone.svg" />
                </a>
            </div>
        </div>
        <div
            class="header-mobile w-full h-screen bg-accent-yellow fixed flex items-center justify-center flex-col"
            :class="{ active: mobileMenuState }"
        >
            <MainMenu @onSelectItem="closeMenu" />
        </div>
    </div>
</template>

<script>
import MainMenu from './MainMenu.vue';
export default {
    components: { MainMenu },
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
    background: linear-gradient(
        180deg,
        #252525 0%,
        rgba(37, 37, 37, 0.42) 100%
    );
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
    height: 25px;
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
