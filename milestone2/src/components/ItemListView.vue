<template>
  <div v-for="item in items" :key="item" :id="item.section">
      <h4>{{ item.section }}</h4>
      <div class="cards-wrap">
        <div v-for="product in item.products" :key="product" class="card-item">
          <div class="card-inner">
            <img :src="product.image" alt="">
            <div class="description">
              <router-link :to="`/produto/${product.id}`">{{ product.title }}</router-link>
            </div>
            <div class="price">
              {{ product.price }}
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "ItemList",
    props: {
        items: {
            type: Array,
            default: [],
            required: true
        }
    }
};
</script>

<style scoped>
h4 {
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

.price {
  padding-top: 5px;
  color: #4b4b4b;
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