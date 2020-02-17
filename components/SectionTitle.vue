<template>
    <h2 :class="[crayTitle]">
        {{ sectionTitle }}
    </h2>
</template>

<script>
export default {
    props: {
        sectionTitle: String,
        isGrayTitle: {
            type: Boolean,
            default: false
        },
        isWhiteTitle: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        crayTitle() {
            return this.isGrayTitle
                ? 'section-title text-252525'
                : 'section-title text-accent-red';
        },
        whiteTitle() {
            return this.isWhiteTitle
                ? 'section-title text-252525'
                : 'section-title text-white';
        }
    }
};
</script>
