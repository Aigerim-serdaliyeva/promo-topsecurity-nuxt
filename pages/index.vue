<template>
    <div class="">
        <SectionMain />
        <SectionService />
        <SectionSecurity />
        <SectionAdvantage />
        <SectionAbout />
        <SectionForm />
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
