<template>
    <div class="wrapper">
        <div class="flex-box">
            <div class="product-image-wrapper">
                <div class="product-image-area">
                    <img :src="product.image" alt="" id="product-image">
                </div>
                <div class="product-image-info">
                    <p>quantidade vendida: {{ product.sold_quantities }}</p>
                    <p>quantidade em estoque: {{ product.stock_quantities }}</p>
                </div>
            </div>
            <div class="product-description">
                <div class="product-text-field">
                    <h2 class="product-description-title">{{ product.title }}</h2>
                    <h5 v-if="product.brand != undefined">Marca: {{ product.brand }}</h5>
                    <h5>n° de identificação: {{ product.id }}</h5>
                    <p>{{ product.description }}</p>
                </div>

                <div class="product-selection">
                    <div class="product-number-input">
                        <button class="btn btn--minus" @click="changeCounter('-1')" type="button"
                            name="button">-</button>
                        <input class="quantity" type="text" name="name" :value="number_of_products">
                        <button class="btn btn--plus" @click="changeCounter('1')" type="button" name="button">+</button>
                    </div>
                    <div class="product-final-price">
                        <span> R$ {{ final_price }} </span>
                    </div>

                    <div class="product-add-to-card">
                        <button class="btn btn-submit-final" @click="addToCart()" type="button"
                            name="button"><strong>adicionar ao carrinho</strong></button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import data from '@/data/teste2.json'

export default {
    name: 'product',
    data() {
        return {
            product_id: 0,
            final_price: 0,
            number_of_products: 0,
            product: {},
            unitary_price: 0
        }
    },

    created() {
        this.product_id = this.$route.params.id
        this.fetchProduct()
    },

    methods: {
        fetchProduct() {
            this.product = data[this.product_id]
            this.unitary_price = this.loadPrice()
        },

        loadPrice() {
            let price_string = this.product['price']
            price_string = price_string.replace(/[R$. ]+/g, "")
            price_string = price_string.replace(/,+/g, ".")
            console.log(price_string)

            this.unitary_price = parseFloat(price_string)

            return this.unitary_price
        },

        changeCounter: function (num) {
            this.number_of_products += +num
            console.log(this.number_of_products)
            !isNaN(this.number_of_products) && this.number_of_products > 0 ? this.number_of_products : this.number_of_products = 0
            this.final_price = (this.number_of_products * this.unitary_price).toFixed(2)
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
    width: 60%;
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
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.product-image-area {
    width: 100%;
    height: 90%;
    background-color: rgb(255, 255, 255);    
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    text-align: center;
}

.product-image-info {
    margin: auto auto auto 10px;
}

.product-image-info {
    font-size: 10px;
    color: #1b1b1b;
}

#product-image {
    margin: 5%;
    max-width: 400px;
}

.product-description {
    background-color: white;
    width: 100%;
    min-width: 300px;
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgb(161, 161, 161);
    padding: 20px;
    text-align: justify;
}

.product-text-field>h2,
.product-text-field>h5,
.product-text-field>p,
.product-selection {
    margin: 20px;
}

.product-text-field>p {
    font-size: 12px;
}

.product-text-field {
    height: 85%;
}

.product-selection {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 30px;
}

.product-final-price {
    margin-top: auto;
    margin-bottom: auto;
}

.quantity {
    -webkit-appearance: none;
    border: none;
    text-align: center;
    width: 30px;
    font-size: 16px;
    color: #43484D;
    font-weight: 300;
    border: 1px solid #E1E8EE;
    height: 28px;

}

.btn {
    border: 1px solid #E1E8EE;
    width: 30px;
    background-color: #E1E8EE;
    cursor: pointer;
    height: 30px;
}

.product-number-input {
    height: 30px;
    display: flex;
}

.btn-submit-final {
    width: 250px;
    height: 30px;
    border-radius: 10px;
    background-color: #EDFFBD;
    border-color: #D8FF6E;
}

button:focus,
input:focus {
    outline: 0;
}
</style>