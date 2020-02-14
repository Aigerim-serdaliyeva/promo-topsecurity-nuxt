<template>
    <div class="-mt-130px">
        <SectionTitle section-title="Как это работает?" is-gray-title="true" />
        <div class="flex justify-between">
            <SecurityWithout />
            <Security />
        </div>
    </div>
</template>

<script>
import SectionTitle from '../SectionTitle.vue';
import Security from './Security.vue';
import SecurityWithout from './SecurityWithout.vue';
export default {
    components: { SectionTitle, SecurityWithout, Security }
};
</script>
