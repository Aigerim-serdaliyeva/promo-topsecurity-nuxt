<template>
    <h2 :class="[grayTitle]">
        {{ sectionTitle }}
    </h2>
</template>

<script>
export default {
    props: {
        sectionTitle: {
            type: String,
            default: ''
        },
        isGrayTitle: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        grayTitle() {
            return this.isGrayTitle
                ? 'section-title text-252525'
                : 'section-title text-accent-red';
        }
    }
};
</script>
