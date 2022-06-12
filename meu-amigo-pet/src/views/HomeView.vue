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
          link: "/serviços",
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

<style scoped>

  .wrapper {
    width: 80%;
    margin: auto auto;
  }

  .cards-wrap {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;
    margin: 30px auto;
  }

  .cards-wrap .card-inner {
    background: #ffffff9a;
    border-radius: 20px;
    min-width: 300px;
    min-height: 200px;
    width: 300px;
    text-align: center;
  }

  .cards-wrap .card-item .card-inner img {
    width: 300px;
    height: 200px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .cards-wrap .card-item .card-inner .description {
    padding: 15px;
  }

  .cards-wrap .card-item .card-inner .description a {
    font-weight: bold;
    text-decoration: none;
    color: #000000;
  }

  .cards-wrap .card-item .card-inner a:hover {
    color: #00c1c1;
    text-decoration: none;
  }

  .cat-dog-image {
    display: flex;
    justify-content: center;
    margin-bottom: -20px;
  }

  .cat-dog-image img {
    width: 30%;
  }

</style>