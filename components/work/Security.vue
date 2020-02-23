<template>
    <div
        class="work__content work__content--yellow bg-accent-gray w-6/12 rounded-3 overflow-hidden ml-7px"
    >
        <img
            src="../../assets/img/security-figure-2.png"
            class="work__figure -ml-5px"
        />
        <h2 class="work__title ml-20px">
            ОБЪЕКТ ПОД ОХРАНОЙ TOP SECURITY KZ
        </h2>
        <div
            class="work__blog w-9/12 xl:w-8/12 flex flex-wrap justify-center mx-auto hidden"
        >
            <div
                v-for="(work, index) in security"
                :id="work.id"
                :key="work"
                class="work max-w-170px w-full mb-40px  lg:mx-5px xl:mx-20px xl:max-w-210px"
            >
                <img
                    :src="
                        require(`../../assets/img/security/security-${index +
                            1}.jpg`)
                    "
                    class="work__img work__img--yellow mx-auto mb-10px xl:mb-15px max-w-110px xl:max-w-none"
                />
                <p class="text-white text-center text-12px xl:text-16px">
                    {{ work.text }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            security: require('../../assets/json/security.json')
        };
    }
};
</script>
