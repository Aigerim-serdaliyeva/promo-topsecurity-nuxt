<template>
    <ul
        class="md:flex md:justify-between w-full max-w-550px xl:max-w-690px md:mr-20px"
    >
        <li class="text-center" @click="select">
            <a class="main-menu-link" active-class="active">Как мы работаем </a>
        </li>
        <li class="text-center" @click="select">
            <a class="main-menu-link" active-class="active">Преимущества </a>
        </li>
        <li class="text-center" @click="select">
            <a class="main-menu-link" active-class="active">Услуги </a>
        </li>
        <li class="text-center" @click="select">
            <a class="main-menu-link" active-class="active">О нас </a>
        </li>
        <li class="text-center" @click="select">
            <a class="main-menu-link" active-class="active">Контакты </a>
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
        border-bottom: 5px solid transparent;
        &.active,
        &:hover {
            border-bottom: 1px solid #ef3b39;
        }
    }
}

@media screen and (max-width: 1280px) {
}

@media screen and (max-width: 768px) {
    ul {
        .main-menu-link {
            border: none;
            &.active,
            &:hover {
                border: none;
                color: #3ca6cd;
            }
        }
    }
}
</style>
