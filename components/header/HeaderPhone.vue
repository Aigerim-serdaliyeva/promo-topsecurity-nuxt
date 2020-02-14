<template>
    <div class="flex items-center text-accent-red text-16px xl:text-18px">
        <img src="@/assets/img/phone.png" />
        <a :href="href" class="ml-5px">{{ phone }}</a>
    </div>
</template>

<script>
export default {
    props: {
        href: String,
        phone: String
    }
};
</script>
