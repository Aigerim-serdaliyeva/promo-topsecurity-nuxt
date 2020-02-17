<template>
    <div class="bg-252525 text-white font-thin py-50px text-16px lg:text-18px">
        <div
            class="container flex flex-col lg:flex-row text-center justify-between items-end"
        >
            <div
                class="lg:max-w-350px w-full mb-30px lg:mb-0 order-2 lg:order-1"
            >
                <span class="font-normal">ТОО «Top Security KZ»</span>
                <br />
                <p class="my-15px lg:my-0">
                    Адрес: Казахстан, г.Алматы, <br />
                    ул. Шевченко 153/1
                </p>
                <p class="mb-15px lg:mb-0">ПЦН: +7 (701) 031-68-20</p>
                <p>
                    Email: <a href="info@topsecurity.kz">info@topsecurity.kz</a>
                </p>
            </div>

            <div class="text-center mx-auto mb-30px lg:mb-0 order-1 lg:order-2">
                <nuxt-link to="/"
                    ><img
                        src="../../assets/img/logo.svg"
                        class="mx-auto mb-20px max-w-200px w-full"
                /></nuxt-link>
                <a href="tel:5335" class="footer-phone">5335</a>
                <p class="font-normal">*Звонок с мобильного бесплатный</p>
                <a href="tel:+77273390452" class="footer-phone"
                    >+7 (727) 339-04-52</a
                >
                <a href="tel:+77016437956" class="footer-phone"
                    >+7 (701) 643-79-56</a
                >
            </div>

            <div
                class="text-center w-full lg:max-w-273px lg:text-right order-3"
            >
                <div class="flex justify-center lg:justify-end mb-20px">
                    <a
                        href="https://www.facebook.com/topseckz/"
                        target="_blank"
                        class="mr-15px"
                        ><img src="../../assets/img/facebook.svg"
                    /></a>
                    <a
                        href="https://www.instagram.com/topsecurity.kz/"
                        target="_blank"
                        ><img src="../../assets/img/instagram.svg"
                    /></a>
                </div>
                <p>
                    Copyright © 2018 Top Security KZ. <br />
                    All Rights Reserved
                </p>
            </div>
        </div>
    </div>
</template>
