<template>
  <div v-for="item in items" :key="item" :id="item.section" class="items">
    <h4 v-if="item.section !== 'alimentacao' && item.section !== 'racoes'">
      {{ item.section }}
    </h4>
    <h4 v-else-if="item.section === 'alimentacao'">alimentação</h4>
    <h4 v-else>rações</h4>
    <div class="cards-wrap">
      <div v-for="product in item.products" :key="product" class="card-item">
        <div class="card-inner">
          <img :src="product.image" alt="" />
          <div class="description">
            <router-link :to="`/produto/${product.id}`">{{
              product.title
            }}</router-link>
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
      required: true,
    },
  },
};
</script>

<style scoped>
@import "/public/assets/css/style.css";
@import "/public/assets/css/index.css";

h4 {
  margin-top: 30px;
}

.items {
  padding-top: 14%;
  margin-top: -14%;
}

.cards-wrap .card-inner {
  background: #fbacca;
}

.cards-wrap .card-item .card-inner img {
  margin-top: 30px;
  text-align: center;
  width: 100px;
  height: 100px;
}

.cards-wrap .card-item .card-inner .description {
  padding: 5px;
}

.price {
  margin: 5px 0;
  color: #4b4b4b;
}
</style>