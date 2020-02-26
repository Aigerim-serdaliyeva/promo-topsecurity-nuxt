<template>
    <div>
        <div
            v-for="(work, index) in security"
            :id="work.id"
            :key="`work-${index + 1}`"
            class="work"
        >
            <div
                class="flex items-center"
                :class="{
                    'flex-row-reverse': work.arrow === 'arrow-left'
                }"
            >
                <img
                    :src="
                        require(`../../assets/img/security-mobile/security-mobile-${index +
                            1}.png`)
                    "
                    class="wow zoomIn work__img work__img--yellow mx-auto max-w-100px w-full"
                />
                <div
                    class="ml-20px wow slideInLeft"
                    :class="{
                        'text-right mr-20px ml-0': work.arrow === 'arrow-left'
                    }"
                >
                    <h3 class="font-bebas-neue font-bold text-30px">
                        {{ work.title }}
                    </h3>
                    <p class="text-14px">
                        {{ work.text }}
                    </p>
                </div>
            </div>
            <img
                v-if="work.arrow === 'arrow-right'"
                :src="
                    require(`../../assets/img/security-mobile/arrow-right.png`)
                "
                class="mx-auto wow zoomIn"
            />
            <img
                v-else-if="work.arrow === 'arrow-left'"
                :src="
                    require(`../../assets/img/security-mobile/arrow-left.png`)
                "
                class="mx-auto wow zoomIn"
            />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            security: require('../../assets/json/security-mobile.json')
        };
    }
};
</script>
