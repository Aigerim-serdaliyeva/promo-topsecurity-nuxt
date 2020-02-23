<template>
    <Object
        title="ОБЪЕКТ БЕЗ ОХРАНЫ TOP SECURITY KZ"
        :figure-path="require('../../assets/img/security-figure-1.png')"
        color="#EF3B39"
        :items="securityItems"
    />
</template>

<script>
import Object from './Object';
export default {
    components: { Object },
    data() {
        return {
            securityWithout: require('../../assets/json/security-without.json')
        };
    },
    computed: {
        securityItems() {
            return this.securityWithout.map((item, index) => ({
                ...item,
                imgPath: require(`../../assets/img/without-security/without-security-${index +
                    1}.jpg`)
            }));
        }
    }
};
</script>
