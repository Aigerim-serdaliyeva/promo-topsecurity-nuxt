<template>
    <ul
        class="md:flex md:justify-between w-full max-w-550px xl:max-w-690px md:mr-20px"
    >
        <li class="text-center" @click="select">
            <a v-scroll-to="'#work'" href="#work" class="main-menu-link"
                >Как мы работаем
            </a>
        </li>
        <li class="text-center" @click="select">
            <a
                v-scroll-to="'#advantage'"
                href="#advantage"
                class="main-menu-link"
                >Преимущества
            </a>
        </li>
        <li class="text-center" @click="select">
            <a v-scroll-to="'#service'" href="#service" class="main-menu-link"
                >Услуги
            </a>
        </li>
        <li class="text-center" @click="select">
            <a v-scroll-to="'#about'" href="#about" class="main-menu-link"
                >О нас
            </a>
        </li>
        <li class="text-center" @click="select">
            <a v-scroll-to="'#contact'" href="#contact" class="main-menu-link"
                >Контакты
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    methods: {
        select() {
            this.$emit('onSelectItem');
        }
    }
};
</script>

<style lang="scss" scoped>
ul {
    .main-menu-link {
        border-bottom: 2px solid transparent;
        transition: 0.3s all ease-out;
        &.active,
        &:hover {
            border-bottom: 2px solid #ef3b39;
        }
    }
}

@media screen and (max-width: 768px) {
    ul {
    }
}
</style>
