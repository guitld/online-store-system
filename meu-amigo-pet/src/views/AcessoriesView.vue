<template>
  <div class="roupas">
    <h1> ROUPAS </h1>
    <div class="cards-wrap">
    <div v-for="card in roupas" :key="card" class="card-item">
      <div class="card-inner">
        <img :src="card.image" />
        <div class="description">
          <router-link :to="'/produto?id=' + card.id">{{ card.title }} </router-link>
        </div>
        <div class="price">
          {{ card.price }}
        </div>
      </div>
    </div>
  </div>
  </div>

  <div class="camas">
    <h1> CAMAS </h1>
    <div class="cards-wrap">
    <div v-for="card in camas" :key="card" class="card-item">
      <div class="card-inner">
        <img :src="card.image" />
        <div class="description">
          <router-link :to="'/produto?id=' + card.id">{{ card.title }} </router-link>
        </div>
        <div class="price">
          {{ card.price }}
        </div>
      </div>
    </div>
  </div>
  </div>

  <div class="brinquedos">
    <h1> BRINQUEDOS </h1>
    <div class="cards-wrap">
    <div v-for="card in brinquedos" :key="card" class="card-item">
      <div class="card-inner">
        <img :src="card.image" />
        <div class="description">
          <router-link :to="'/produto?id=' + card.id">{{ card.title }} </router-link>
        </div>
        <div class="price">
          {{ card.price }}
        </div>
      </div>
    </div>
  </div>
  </div>

  <div class="alimentacao">
    <h1> ALIMENTAÇÃO </h1>
    <div class="cards-wrap">
    <div v-for="card in alimentacao" :key="card" class="card-item">
      <div class="card-inner">
        <img :src="card.image" />
        <div class="description">
          <router-link :to="'/produto?id=' + card.id">{{ card.title }} </router-link>
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
      camas: [
        {
          id: "0",
          title: "casinha iglu",
          price: "R$ 89,90",
          image: "assets/img/casinha.png"
        },
        {
          id: "1",
          title: "cama listrada",
          price: "R$ 49,90",
          image: "assets/img/caminha.png"
        },
        {
          id: "2",
          title: "tapete gelado",
          price: "R$ 23,90",
          image: "assets/img/tapete.png"
        }
      ],

      alimentacao: [
        {
          id: "3",
          title: "jogo americano",
          price: "R$ 17,90",
          image: "assets/img/americano.png"
        },
        {
          id: "4",
          title: "bebedouro",
          price: "R$ 34,90",
          image: "assets/img/bebedouro.png"
        },
        {
          id: "5",
          title: "comedouro",
          price: "R$ 8,90",
          image: "assets/img/comedouro.png"
        }

      ],
      roupas: [
        {
          id: "6",
          title: "colete para gato",
          price: "R$ 19,90",
          image: "assets/img/colete.png"
        },
        {
          id: "7",
          title: "camisa fruit",
          price: "R$ 22,90",
          image: "assets/img/fruit.png"
        },
        {
          id: "8",
          title: "suéter",
          price: "R$ 22,90",
          image: "assets/img/roupinha.png"
        }
      ],
      brinquedos: [
        {
          id: "9",
          title: "bolinha",
          price: "R$ 6,90",
          image: "assets/img/bola.png"
        },
        {
          id: "10",
          title: "pelúcia",
          price: "R$ 14,90",
          image: "assets/img/pelucia.png"
        },
        {
          id: "11",
          title: "mordedor",
          price: "R$ 12,90",
          image: "assets/img/mordedor.png"
        }
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