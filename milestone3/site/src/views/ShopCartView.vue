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
import TableWithProducts from '@/components/TableWithProducts.vue'
import { processSlotOutlet } from '@vue/compiler-core';

export default {
    name: "Cart",

    components: { TableWithProducts },

    data() {
        return {
            cart_items: [],
            catDogImage: "assets/img/header-pet-na-cabine.png",
            final_price: '',
        }
    },

    created() {
        this.fetchShoppingCart();
    },

    methods: {
        async fetchShoppingCart() {
            try {
                let response = await fetch('http://localhost:3000/customers',{
                    method: 'GET',
                    headers: {'x-access-token': localStorage.user_token}
                });

                if (response.status === 200) {
                    let response_body = await response.json();
                    let shopping_cart = response_body.data.shopping_cart;
                    
                    shopping_cart.forEach((element) => {
                        this.cart_items.push({
                            image: element.product.img,
                            title: element.product.title,
                            quantities: element.quantity,
                            price: element.product.price,
                            id: element.product._id,
                            sold_quantity: element.product.sold_quantity,
                            stock_quantity: element.product.stock_quantity,
                        });
                    });

                    this.computeFinalPrice();
                }
                else {
                    alert('Falha em carregar dados do usuário');
                    this.$router.push('/');
                }
            } catch (e) {
                alert('Falha do servidor');
            }

        },


        computeFinalPrice() {
            this.final_price = 0;

            this.cart_items.forEach((element) => {
                this.final_price += Number(element.quantities * element.price);
            })

            this.final_price = this.final_price.toFixed(2);
        },

        async removeItem(id) {
            let item = this.cart_items.filter(object => {
                return object.id === id;
            })[0]

            this.cart_items = this.cart_items.filter(object => {
                return object.id !== id;
            })
            
            this.final_price = (this.final_price - item.price * item.quantities).toFixed(2);
            console.log(item);
            try {
                let response_customer = await fetch('http://localhost:3000/customers/remove-from-cart',{
                    method: 'PUT',
                    body: JSON.stringify({ product_id: item.id }), 
                    headers: {
                        'x-access-token': localStorage.user_token,
                        'Content-Type': 'application/json'
                    }
                });
                
                let response_product = await fetch(`http://localhost:3000/products/${item.id}`, { 
                    method: 'PUT',
                    body: JSON.stringify({ stock_quantity: item.stock_quantity + item.quantities, sold_quantity: item.sold_quantity }), 
                    headers: {
                        'x-access-token': localStorage.user_token,
                        'Content-Type': 'application/json'
                    }
                });
            } catch (e) {
                alert('Falha do servidor');
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