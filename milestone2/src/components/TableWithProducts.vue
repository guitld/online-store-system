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

    <div class="grid-container" v-if="items.length">
        <table class="table">
            <thead class="table__header">
                <tr class="table__row">
                    <th class="table__cell u-text-left">Remover item</th>
                    <th class="table__cell u-text-left">Imagem item</th>
                    <th class="table__cell u-text-left">Nome item</th>
                    <th class="table__cell u-text-left">Quantidade item</th>
                    <th class="table__cell u-text-left">Preço unitário</th>
                    <th class="table__cell u-text-left">Preço</th>
                </tr>
            </thead>
            <tbody>
                <tr class="table__row" v-for="item in items" :key="item">
                    <td v-if="!edit_disabled" ><img :src="require('@/../public/assets/img/delete-button.png')" id="delete-button-image" @click="emitRemoveItem(item.id)"/></td>
                    <td v-else><div></div></td>
                    
                    <td><input type="button" name="input-delete" id="input-delete" style="display: none"></td>
                    <td><img :src="item.image" class="grid-item grid-product-image"></td>
                    <td><span class="grid-item">{{item.title}}</span></td>
                    <td><span class="grid-item">{{ item.quantities }}</span></td>
                    <td><span class="grid-item">R$ {{ item.price }}</span></td>
                    <td><span class="grid-item">R${{ (item.price * item.quantities).toFixed(2) }}</span></td>
                </tr>
            </tbody>

            <tfoot>
                <td class="final-price"><span ><strong>Total compra:</strong> R$ {{ total }}</span></td>
            </tfoot>
        </table>
    </div>
</template>


<script>
export default {
    name: "TableWithProducts",
    props: {
        items: {
            type: Array,
            default: [],
            required: true
        },
        total: {
            type: Number,
            required: true,
        },
        edit_disabled: {
            type: Boolean,
            required: true
        }
    },

    methods: {
        emitRemoveItem(id) {
            this.$emit('emit-click-remove', id);
        }
    }
};
</script>

<style scoped>
@import '/public/assets/css/style.css';	

.grid-wrapper,
.grid-header {
    display: grid;
    grid-template-columns: 20px 60px 100px repeat(3, auto);
    column-gap: 20px;
    border-radius: 10px;
    align-items: center;
}

.grid-wrapper {
    background-color: #FAF6EF;
    row-gap: 20px;
    padding: 15px 30px 15px 30px;
    max-height: 400px;
    overflow-y: scroll;
}

.grid-header {
    background-color: white;
    margin-bottom: 20px;
    padding: 10px 30px 10px 30px;
    text-align: center;
}

.grid-header {
    font-size: 17px;
    font-weight: bold;
}

.grid-item {
    justify-self: center;
    border: 1px black;
}

.grid-product-remove-btn {
    width: 30px;
    height: 30px;
    border-color: transparent;
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
    background-color: #FAF6EF;
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

</style>