<template>
    <div class="wrapper">
        <div class="flex-box">
            <div class="product-image-wrapper">
                <div class="product-image-area">
                    <img :src="product.image" alt="" class="product-image" />
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
                    <div class="product-description-text">
                        <p>{{ product.description }}</p>
                    </div>
                </div>

                <div class="product-selection">
                    <div class="product-selection-top">
                        <div class="product-number-input">
                            <button class="btn btn--minus" @click="changeCounter('-1')" type="button" name="button">
                                -
                            </button>
                            <input class="quantity" type="text" name="name" :value="number_of_products" />
                            <button class="btn btn--plus" @click="changeCounter('1')" type="button" name="button">
                                +
                            </button>
                        </div>
                        <div class="product-final-price">
                            <span> R$ {{ final_price }} </span>
                        </div>
                    </div>

                    <div class="product-add-to-card">
                        <button class="btn-submit" @click="addToCart()" type="button" name="button">
                            adicionar ao carrinho
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import data from "@/data/products.json";

export default {
    name: "product",
    data() {
        return {
            product_id: 0,
            final_price: 0,
            number_of_products: 1,
            product: {},
            unitary_price: 0,
        };
    },

    created() {
        this.product_id = this.$route.params.id;
        this.fetchProduct();
    },

    methods: {
        fetchProduct() {
            this.product = data[this.product_id];
            this.unitary_price = this.loadPrice();
            this.final_price = this.unitary_price;
        },

        loadPrice() {
            let price_string = this.product["price"];
            price_string = price_string.replace(/[R$. ]+/g, "");
            price_string = price_string.replace(/,+/g, ".");
            console.log(price_string);

            this.unitary_price = parseFloat(price_string);

            return this.unitary_price;
        },

        changeCounter: function (num) {
            this.number_of_products += +num;
            console.log(this.number_of_products);
            !isNaN(this.number_of_products) && this.number_of_products > 0
                ? this.number_of_products
                : (this.number_of_products = 0);
            this.final_price = (this.number_of_products * this.unitary_price).toFixed(
                2
            );
        },

        addToCart() {
            // DEPOIS FAZER A LOGICA
            if (this.number_of_products > 0) {
                alert("Produto adicionado ao carrinho!");
            }
            else
                alert("Preencha o campo de quantidade");
        },
    },
};
</script>

<style scoped>
@import "/public/assets/css/button.css";

.flex-box {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
}

.product-image-wrapper {
    background-color: #fbacca;
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgb(161, 161, 161);
    width: 50%;
    min-width: 270px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

}

.product-image-wrapper,
.product-description {
    max-height: 500px;
    box-shadow: 5px 5px 10px rgb(161, 161, 161);
}

.product-image-area {
    width: 100%;
    height: 90%;
    background-color: rgb(255, 255, 255);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    /* text-align: center; */
}

.product-image-info {
    margin: auto auto auto 10px;
}

.product-image-info {
    font-size: 10px;
    color: #1b1b1b;
}

.product-image {
    margin: auto;
    max-width: 100%;
    max-height: 70%;
    display: block;
    margin-top: 10%;
}

.product-description {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: white;
    width: 40%;
    min-width: 230px;
    border-radius: 10px;
    padding: 20px;
    text-align: justify;
}

.product-description-text {
    overflow-y: scroll;
    max-height: 150px;
    padding-right: 15px;
    margin-top: 10px;
}

.product-text-field>h2,
.product-description-title,
.product-description-text>p,
.product-selection {
    margin: 20px 0px 20px 0;
}

.product-description-title {
    text-align: left;
}

.product-description-text>p {
    font-size: 12px;
}

.product-selection {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 10%;
    gap: 20px;
}

.product-selection-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
    color: #43484d;
    font-weight: 300;
    border: 1px solid #e1e8ee;
    height: 28px;
}

.btn {
    border: 1px solid #e1e8ee;
    width: 30px;
    background-color: #e1e8ee;
    cursor: pointer;
    height: 30px;
}

.product-number-input {
    height: 30px;
    display: flex;
}

button:focus,
input:focus {
    outline: 0;
}
</style>