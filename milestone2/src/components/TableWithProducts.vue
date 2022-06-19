<template>
  <!-- <div class="grid-container" v-if="items.length">
        <div class="grid-header">
            <div style="grid-column: span 3"></div>
            <span class="grid-header-item">quantidade</span>
            <span class="grid-header-item">preço unitário</span>
            <span class="grid-header-item">preço total</span>
        </div>
        <div class="grid-wrapper">
            <template  v-for="item in items" :key="item">
                <img v-if="!edit_disabled" :src="require('@/../public/assets/img/delete-button.png')" id="delete-button-image" @click="emitRemoveItem(item.id)"/>
                <div v-else></div>
                <input type="button" name="input-delete" id="input-delete" style="display: none">

                <img :src="item.image" class="grid-item grid-product-image">
                <span class="grid-item">{{item.title}}</span>
                <span class="grid-item">{{ item.quantities }}</span>
                <span class="grid-item">R$ {{ item.price }}</span>
                <span class="grid-item">R${{ (item.price * item.quantities).toFixed(2) }}</span>
            </template>
        </div>
        <span class="final-price"><strong>Total compra:</strong> R$ {{ total }}</span>
    </div>

    <div v-else class="error-grid-cart-products">
        <span><strong>Você ainda não possui nenhum item no carrinho.<br>Continue procurando <router-link to="/">itens</router-link> em nossa loja!</strong></span>
    </div> -->
  <div class="wrapper">
    <div class="grid-container" v-if="items.length">
      <table class="table">
        <thead class="table__header">
          <tr class="table__row">
            <!--<th class="table__cell u-text-left">Remover item</th>
          <th class="table__cell u-text-left">Imagem item</th>
          <th class="table__cell u-text-left">Nome item</th>-->
            <th></th>
            <th></th>
            <th class="table__cell u-text-left">Quantidade item</th>
            <th class="table__cell u-text-left">Preço unitário</th>
            <th class="table__cell u-text-left">Preço</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr class="table__row" v-for="item in items" :key="item">
            <td class="grid-item">
              <img :src="item.image" class="grid-product-image" />
            </td>
            <td class="grid-item">
              <span>{{ item.title }}</span>
            </td>
            <td class="grid-item" data-th="quatidade">
              <span>{{ item.quantities }}</span>
            </td>
            <td class="grid-item" data-th="preço unitário">
              <span>R$ {{ item.price }}</span>
            </td>
            <td class="grid-item" data-th="preço">
              <span>R${{ (item.price * item.quantities).toFixed(2) }}</span>
            </td>
            <td v-if="!edit_disabled">
              <img
                :src="require('@/../public/assets/img/delete-button.png')"
                id="delete-button-image"
                @click="emitRemoveItem(item.id)"
              />
            </td>
            <td v-else></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="6" align="right">
              <span class="final-price"
                ><strong>Total compra:</strong> R$ {{ total }}</span
              >
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div v-else class="error-grid-cart-products">
      <span
        ><strong
          >Você ainda não possui nenhum item no carrinho.<br />Continue
          procurando <router-link to="/">itens</router-link> em nossa
          loja!</strong
        ></span
      >
    </div>
  </div>
</template>


<script>
export default {
  name: "TableWithProducts",
  props: {
    items: {
      type: Array,
      default: [],
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    edit_disabled: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    emitRemoveItem(id) {
      this.$emit("emit-click-remove", id);
    },
  },
};
</script>

<style scoped>
@import "/public/assets/css/style.css";

table {
  background-color: var(--color-white);
  width: 100%;
  border-radius: 4px;
  border-collapse: collapse;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 2rem;
  box-shadow: 0 2px 10px rgba(0, 67, 115, 0.2);
}

thead {
  background-color: white;
  margin-bottom: 20px;
  text-align: center;
}

td,
th {
  text-align: center;
  border: 1px black;
  padding: 8px;
}

#delete-button-image {
  width: 20px;
  height: 20px;
}

.grid-product-image {
  width: 60px;
}

.final-price {
  float: right;
  margin-top: 15px;
  background-color: #faf6ef;
  padding: 20px;
  border-radius: 5px;
}

.error-grid-cart-products {
  margin: auto auto;
  background-color: white;
  padding: 40px;
  text-align: center;
  border-radius: 5px;
}

.error-grid-cart-products a {
  text-decoration: none;
  color: #cb5c7f;
}

.error-grid-cart-products span {
  margin: auto;
}

@media only screen and (max-width: 650px) {
  html {
    font-size: 12px;
    justify-content: flex-end;
  }

  .table__header, tr:nth-child(2) {
    display: none;
  }


  td,th {
    display: block;
  }

  td[data-th]:before {
    content: attr(data-th);
    padding-right: 10px;
    font-weight: bold;
  }


}
</style>