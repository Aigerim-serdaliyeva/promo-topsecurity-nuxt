<template>
    <div id="form" class="section-form bg-252525 text-white py-80px">
        <div class="container">
            <SectionTitle
                class="section-title"
                section-title="Нужна консультация?"
            />
            <div class="text-center mb-20px text-20px">
                Заполните поля, и мы Вам перезвоним!
            </div>
            <ValidationObserver ref="form">
                <form
                    class="text-center lg:flex justify-between items-start max-w-1070px w-full mx-auto"
                    @submit.prevent="sendMail()"
                >
                    <ValidationProvider
                        v-slot="{ errors }"
                        rules="required"
                        class="input-div"
                    >
                        <input
                            v-model="name"
                            type="text"
                            class="input"
                            placeholder="Ваше имя"
                        />
                        <span class="input-required">{{ errors[0] }}</span>
                    </ValidationProvider>

                    <ValidationProvider
                        v-slot="{ errors }"
                        rules="required|numeric|min:11|max:11"
                        class="input-div"
                    >
                        <input
                            v-model="phone"
                            type="tel"
                            class="input"
                            placeholder="Номер телефона"
                        />
                        <span class="input-required">{{ errors[0] }}</span>
                    </ValidationProvider>

                    <button
                        type="submit"
                        class="button max-w-375px w-full lg:w-auto"
                    >
                        ЗАКАЗАТЬ
                    </button>
                </form>
            </ValidationObserver>
        </div>
    </div>
</template>

<script>
import SectionTitle from '../SectionTitle.vue';
import { ValidationObserver, ValidationProvider } from 'vee-validate';

export default {
    components: { SectionTitle, ValidationObserver, ValidationProvider },
    data() {
        return {
            name: '',
            phone: null
        };
    },
    methods: {
        sendMail() {
            this.$refs.form.validate().then((success) => {
                if (!success) {
                    return;
                }
                this.$nextTick(() => {
                    this.$refs.form.reset();
                });
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.section-title {
    color: #fff !important;
}

.section-form {
    border-top: 5px solid #ffb800;
    border-bottom: 5px solid #ef3b39;
}

.input {
    transition: all 0.5s ease;
    &:hover {
        -webkit-box-shadow: 0 0 20px 0 #ffb800;
        box-shadow: 0 0 20px 0 #ffb800;
    }
    &::before {
        content: '';
        position: absolute;
        background-image: url('../../assets/img/icon-user.svg');
        width: 27px;
        height: 27px;
        left: 0;
        top: 0;
    }
}

.button {
    transition: all 0.5s ease;
    &:hover,
    &.active {
        background-color: transparent;
        -webkit-box-shadow: 0 0 10px 0 #ffb800;
        box-shadow: 0 0 10px 0 #ffb800;
    }
    &--service {
        &:hover,
        &.active {
            background-color: #ffb800;
            -webkit-box-shadow: 0 0 10px 0 #ffb800;
            box-shadow: 0 0 10px 0 #ffb800;
        }
    }
}
</style>
