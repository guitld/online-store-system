<template>
  <div class="wrapper">
    <div class="flex-box">
        <div class="product-image-wrapper">
          <img :src="product.image" alt="" id="product-image">
          <div class="product-image-info">
            <p>quantidade vendida: {{ product.sold_quantities }}</p>
            <p>quantidade em estoque: {{ product.stock_quantities }}</p>
          </div>
        </div>
        <div class="product-description">
          <h2 class="product-description-title">{{ product.title }}</h2>
          <h4 v-if="product.brand != undefined">Marca: {{ product.brand }}</h4>
          <h4>n° de identificação: {{ product.id }}</h4>
          <p>{{ product.description }}</p>
          
          <div class="product-selection">
            <input class="num-products-input" type="number" v-model="number_of_products">
          </div>

          <span> {{ final_price }} </span>
        </div>

      </div>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import products from '@/data/acessories.json'

export default {
  // setup() {
  //   const route = useRoute()
  //   const product = computed(() => {
  //       return products.filter(a => a.abbreviation === route.params.code.toUpperCase())[0]
  //     })

  //     return { airport }
  // },

  name: 'product',
  data() {
    return {
      product: products[0]['products'][0],
      // product: this.$store.getters.product(this.$route.params.id)
      
      // unitary_price: this.computePrice(product.price),
      // number_of_products: 1
    }
  },

  watch: {
    number_of_products(old_v, new_v) {
      this.final_price = this.product.price * new_v
    }
  },

  methods: {
    computePrice() {

    }
  }
};
</script>

<style scoped>

  * {
    font-family: "JetBrains Mono", monospace;
    margin: 0;
    padding: 0;
  }
  .wrapper {
    width: 80%;
    margin: auto auto;
  }

  .flex-box {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    gap: 50px;
  }

  .product-image-wrapper {
    background-color: #FBACCA;
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgb(161, 161, 161);
    text-align: center;
    width: 100%;
    padding: 35px;
  }
  
  #product-image {
    width: 40%;
  }

  .product-description {
    background-color: white;
    width: 100%;
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgb(161, 161, 161);
    padding: 35px;
    text-align: justify;
  }

  .product-description>h2, 
  .product-description>h4,
  .product-description>p, 
  .num-products-input{
    margin: 10px;
  }

  .num-products-input {
    padding: 10px 0px 10px 10px;
  }

  .num-products-input {
    height: 20px;
    width: 40px;
  }

</style>