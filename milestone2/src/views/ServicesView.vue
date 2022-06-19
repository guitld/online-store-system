<template>
    <div class="wrapper">
        <div class="cards-wrap">
            <div v-for="card in cards" :key="card" class="card-item">
                <div class="card-inner">
                    <img :src="card.image" />
                    <div class="description">
                        <router-link :to="card.link" :service_type="card.title">{{ card.title }}</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Services",

    data() {
        return {
            cards: [
                {
                    title: "banho",
                    image: "assets/img/banho.jpg",
                    link: "/servicos/agendamento",
                },
                {
                    title: "tosa",
                    image: "assets/img/tosa.jpg",
                    link: "/servicos/agendamento",
                },
            ],
        };
    },
};
</script>

<style scoped>
@import '/public/assets/css/index.css';

.cards-wrap {
    margin-top: 4rem;
}
</style>