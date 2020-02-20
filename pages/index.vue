<template>
    <div class="">
        <SectionMain id="main" />
        <SectionService id="service" />
        <SectionSecurity id="work" />
        <SectionAdvantage id="advantage" />
        <SectionAbout id="about" />
        <SectionForm id="form" />
    </div>
</template>

<script>
import SectionSecurity from '../components/work/SectionSecurity.vue';
import SectionForm from '../components/form/SectionForm.vue';
import SectionAbout from '../components/about/SectionAbout.vue';
import SectionAdvantage from '../components/advantage/SectionAdvantage.vue';
import SectionService from '../components/service/SectionService.vue';
import SectionMain from '../components/main/SectionMain.vue';
export default {
    components: {
        SectionMain,
        SectionService,
        SectionAdvantage,
        SectionAbout,
        SectionForm,
        SectionSecurity
    }
};
</script>

<style lang="scss"></style>
