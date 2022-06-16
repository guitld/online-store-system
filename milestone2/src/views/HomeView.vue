<!-- ME PARECE OK-->
<template>
  <div class="wrapper">
    <div class="cards-wrap">
      <div v-for="card in cards" :key="card" class="card-item">
        <div class="card-inner">
          <img :src="card.image" />
          <div class="description">
            <router-link :to="card.link">{{ card.title }}</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="cat-dog-image">
      <img :src="catDogImage" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      cards: [
        {
          title: "serviços",
          image: "assets/img/servicos.jpg",
          link: "/servicos",
        },
        {
          title: "comidinhas",
          image: "assets/img/comidinhas.jpg",
          link: "/comidinhas",
        },
        {
          title: "acessórios",
          image: "assets/img/acessorio.jpg",
          link: "/acessorios",
        },
      ],

      catDogImage: "assets/img/header-pet-na-cabine.png",
    };
  },
};
</script>
