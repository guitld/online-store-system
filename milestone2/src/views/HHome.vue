<template>
  <div class="wrapper">
    <div class="cards-wrap">
      <div v-for="card in cards" :key="card" class="card-item">
        <div v-for="option in card" :key="option" class="card-inner">
          <img :src="image" />
          <div class="description">
            <router-link to="link">{{ title }}</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="cat-dog-image">
      <!--<img src="./assets/img/header-pet-na-cabine.png" alt="">
            -->
    </div>
  </div>
</template>

<script>
export default {
  name: "HHome",

  data() {
    return {
      cards: [
        {
          title: "Serviços",
          description: "Banho, tosa, etc.",
          image: "../assets/img/servicos.jpg",
          link: "/services",
        },
        {
          title: "Comidinhas",
          description: "Petiscos, rações, etc.",
          image: "../assets/img/comidinhas.jpg",
          link: "/foods",
        },
        {
          title: "Acessórios",
          description: "Roupas, cama, brinquedos, etc.",
          image: "../assets/img/acessorio.jpg",
          link: "/accessories",
        },
      ],
    };
  },
};
</script>