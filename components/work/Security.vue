<template>
    <Object
        title="ОБЪЕКТ ПОД ОХРАНОЙ TOP SECURITY KZ"
        :figure-path="require('../../assets/img/security-figure-2.png')"
        direction="right"
        color="#FFB800"
        :items="securityItems"
        object-background="linear-gradient(
                270deg,
                rgba(255, 138, 0, 0.6) 0%,
                rgba(255, 138, 0, 0) 100%
            )"
    />
</template>

<script>
import Object from './Object';
export default {
    components: { Object },
    data() {
        return {
            security: require('../../assets/json/security.json')
        };
    },
    computed: {
        securityItems() {
            return this.security.map((item, index) => ({
                ...item,
                imgPath: require(`../../assets/img/security/security-${index +
                    1}.jpg`)
            }));
        }
    }
};
</script>
