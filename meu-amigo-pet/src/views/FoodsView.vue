<template>
 <div class="raçôes">
    <h1> RAÇÕES </h1>
    <div class="cards-wrap">
    <div v-for="card in racoes" :key="card" class="card-item">
      <div class="card-inner">
        <img :src="card.image" />
        <div class="description">
          <router-link :to="card.link">{{ card.title }} </router-link>
        </div>
        <div class="price">
          {{ card.price }}
        </div>
      </div>
    </div>
  </div>
  </div>
  <div class="petiscos">
    <h1> PETISCOS </h1>
    <div class="cards-wrap">
        <div v-for="card in petiscos" :key="card" class="card-item">
          <div class="card-inner">
            <img :src="card.image" />
            <div class="description">
              <router-link :to="card.link">{{ card.title }}</router-link>
            </div>
            <div class="price">
              {{ card.price }}
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      petiscos: [
        {
          title: "ossinhos",
          price: "R$ 14,90",
          image: "assets/img/ossinho.png",
          link: "/petiscos/ossinho",
        },
        {
          title: "bifinhos",
          price: "R$ 18,90",
          image: "assets/img/bifinho.png",
          link: "/petiscos/bifinhos",
        },
        {
          title: "biscoito",
          price: "R$ 9,90",
          image: "assets/img/biscoito.png",
          link: "/petiscos/biscoito",
        },
      ],
      racoes: [
        {
          title: "ração para cachorro",
          price: "R$ 29,90",
          image: "assets/img/raçao_dog.png",
          link: "/petiscos/raçao-cachorro",
        },
        {
          title: "ração para gato",
          price: "R$ 24,90",
          image: "assets/img/raçao.png",
          link: "/petiscos/raçao-gato",
        },
        {
          title: "ração para peixe",
          price: "R$ 19,90",
          image: "assets/img/raçao_peixe.png",
          link: "/petiscos/raçao-peixe",
        },

      ]
    };
  },

};

</script>

<style scoped>


h1{
    font-family: "JetBrains Mono", monospace;
}

h1 {
  text-transform: uppercase;
  text-align: center;
  font-size: 16px;
  margin-top: 30px;
}


.wrapper {
  width: 60%;
  margin: auto auto;
}

.cards-wrap {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  margin: 30px 0;
}

.cards-wrap .card-inner {
  background: #fbacca;
  border-radius: 20px;
  min-width: 300px;
  min-height: 200px;
  width: 300px;
  text-align: center;
}

.cards-wrap .card-item .card-inner img {
  margin-top: 30px;
  text-align: center;
  width: 100px;
  height: 100px;
  border-top-left-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.cards-wrap .card-item .card-inner .description {
  padding: 5px;
}

.price{
  padding-top: 5px;
  color:#4b4b4b;
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
</style>