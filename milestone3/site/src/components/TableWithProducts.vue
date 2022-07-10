<template>
    <div class="grid-container" v-if="items.length">
        <div class="table-scroll">
            <table class="table">
                <thead class="table__header">
                    <tr class="table__row">
                        <th></th>
                        <th></th>
                        <th class="table__cell u-text-left"><span class="text">Quantidade item</span ></th>
                        <th class="table__cell u-text-left"><span class="text">Preço unitário</span ></th>
                        <th class="table__cell u-text-left"><span class="text">Preço</span ></th>
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
                            <img :src="require('@/../public/assets/img/delete-button.png')" id="delete-button-image"
                                @click="emitRemoveItem(item.id, item.quantities)" />
                        </td>
                        <td v-else></td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="6" align="right">
                            <span class="final-price"><strong>Total compra:</strong> R${{ total }}</span>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
    <div v-else class="error-grid-cart-products">
        <span><strong>Você ainda não possui nenhum item no carrinho.<br />Continue
                procurando <router-link to="/">itens</router-link> em nossa
                loja!</strong></span>
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
            type: String,
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

.grid-container {
    position: relative;
    overflow: auto;
    height: 500px;
}

table thead,
table tfoot {
  position: sticky;
}

table {
    background-color: white;
    width: 100%;
    border-collapse: collapse;
    box-shadow: 0 2px 10px rgba(0, 67, 115, 0.2);
}

thead {
    inset-block-start: 0; /* "top" */
    background-color: #EDFFBD;
    margin-bottom: 20px;
    text-align: center;
}

tbody {
    max-height: 500px;
}

td,
th {
    text-align: center;
    padding: 10px;
}

tr {
    border-bottom: 1px solid rgba(0, 67, 115, 0.2);
}

tfoot tr {
    border-bottom: transparent;
}

tfoot {
    inset-block-end: 0; /* "bottom" */
    background-color: #faf6ef;
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
    background-color: #faf6ef;
    margin: 20px;
}

.error-grid-cart-products {
    margin: auto auto;
    background-color: white;
    padding: 40px;
    text-align: center;
    border-radius: 5px
}

.error-grid-cart-products a {
    text-decoration: none;
    color: #cb5c7f;
}

.error-grid-cart-products span {
    margin: auto;
}

@media only screen and (max-width: 550px) {
    html {
        font-size: 12px;
        justify-content: flex-end;
    }

    .table__header,
    td:nth-child(2) {
        display: none;
    }

    tr {
        border-bottom: 1px solid rgba(0, 67, 115, 0.2);
        margin-top: 10px;
    }

    td {
        display: block;
    }

    td[data-th]:before {
        content: attr(data-th);
        padding-right: 10px;
        font-weight: bold;
    }
}
</style>