<template>
    <div class="wrapper">
        <h3 class="page-title">seu carrinho</h3>
        <div class="content-wrapper">
            <div class="cart-info">
                <div class="product-table-container">
                    <table-with-products :items="cart_items" @emit-click-remove="removeItem" :total="final_price"
                        :edit_disabled="false"></table-with-products>
                </div>
                <div class="continue-purshase-container" v-if="cart_items.length">
                    <button class="btn-submit" type="button" @click="routePaymentView()">
                        ir para finalizar a compra
                    </button>
                </div>
            </div>
            <div class="cat-dog-image-container">
                <img :src="catDogImage" alt="" id="cat-dog-image" />
            </div>
        </div>
    </div>
</template>

<script>
import { parse } from 'path';
import TableWithProducts from '@/components/TableWithProducts.vue'

export default {
    name: "Cart",

    components: { TableWithProducts },

    data() {
        return {
            cart_items: [
                {
                    "id": "11",
                    "title": "mordedor",
                    "price": 12.90,
                    "image": "/assets/img/mordedor.png",
                    "stock_quantities": 0,
                    "sold_quantities": 0,
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed sem efficitur, varius lacus vel, consectetur orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque fermentum magna at arcu rutrum vestibulum. Morbi mattis aliquet justo, sit amet varius eros suscipit eu. Pellentesque condimentum, leo quis imperdiet facilisis, neque ex lobortis tortor, eu mattis nibh metus ut purus. Aenean fringilla ipsum in sagittis euismod. Mauris fermentum euismod ultrices. Donec euismod felis id nibh condimentum, a iaculis urna tincidunt. Mauris eu leo vitae nisi consequat euismod at et erat. Phasellus et mauris mauris. Suspendisse eu ornare magna. Pellentesque interdum, velit sed lacinia facilisis, felis nibh venenatis tellus, vel fringilla nunc purus nec enim.",
                    "category": "acessorios",
                    "quantities": "5",
                    "product_class": "brinquedos"
                },

                {
                    "id": "12",
                    "title": "ossinhos",
                    "price": 14.90,
                    "image": "/assets/img/ossinho.png",
                    "stock_quantities": 0,
                    "sold_quantities": 0,
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed sem efficitur, varius lacus vel, consectetur orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque fermentum magna at arcu rutrum vestibulum. Morbi mattis aliquet justo, sit amet varius eros suscipit eu. Pellentesque condimentum, leo quis imperdiet facilisis, neque ex lobortis tortor, eu mattis nibh metus ut purus. Aenean fringilla ipsum in sagittis euismod",
                    "category": "comidinhas",
                    "quantities": "2",
                    "product_class": "petiscos"
                }, {
                    "id": "1",
                    "title": "camisa fruit",
                    "price": 22.90,
                    "image": "/assets/img/fruit.png",
                    "stock_quantities": 0,
                    "sold_quantities": 0,
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed sem efficitur, varius lacus vel, consectetur orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque fermentum magna at arcu rutrum vestibulum. Morbi mattis aliquet justo, sit amet varius eros suscipit eu. Pellentesque condimentum, leo quis imperdiet facilisis, neque ex lobortis tortor, eu mattis nibh metus ut purus. Aenean fringilla ipsum in sagittis euismod. Mauris fermentum euismod ultrices. Donec euismod felis id nibh condimentum, a iaculis urna tincidunt. Mauris eu leo vitae nisi consequat euismod at et erat. Phasellus et mauris mauris. Suspendisse eu ornare magna. Pellentesque interdum, velit sed lacinia facilisis, felis nibh venenatis tellus, vel fringilla nunc purus nec enim.",
                    "category": "acessorios",
                    "product_class": "roupas",
                    "quantities": "2",

                },
            ],

            catDogImage: "assets/img/header-pet-na-cabine.png",
            final_price: 0,
        }
    },

    created() {
        this.computeFinalPrice();
    },

    methods: {
        computeFinalPrice() {
            this.cart_items.forEach((element) => {
                console.log(element)
                this.final_price += parseFloat((parseInt(element.quantities) * parseFloat(element.price)))
            })

            this.final_price = this.final_price.toFixed(2)
        },

        removeItem(id) {
            for (let idx in this.cart_items) {
                if (this.cart_items[idx].id === id) {
                    this.final_price = (this.final_price - (this.cart_items[idx].price * this.cart_items[idx].quantities)).toFixed(2)
                    this.cart_items.splice(idx, 1)
                    console.log(idx)
                }
            }
        },

        routePaymentView() {
            this.$router.push({ name: 'pagamento', params: { data: this.cart_items } })
        }
    }
};
</script>

<style scoped>
@import "/public/assets/css/button.css";
@import "/public/assets/css/style.css";

.content-wrapper {
    width: 100%;
    margin: auto auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 50px;
}

.cat-dog-image-container {
    margin: auto;
}

#cat-dog-image {
    margin: auto auto;
    width: 90%;
    display: block;
}

.cart-info {
    display: flex;
    flex-direction: column;
    margin: auto;
    gap: 40px;
}


.btn-submit {
    width: 254px;
    float: right;
    margin: auto auto;
}

@media only screen and (max-width: 550px) {
    .cart-info {
        align-items: center;
    }
}

</style>