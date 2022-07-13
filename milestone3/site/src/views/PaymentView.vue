<template>
    <div class="wrapper">
        <div class="payment-page-flex-box">
            <div class="payment-container">
                <div class="payment-form">
                    <h4>Preencha seus dados</h4>
                    <form class="form-inputs">
                        <simple-input v-model="cart.number" label="numero-cartao" type="number" required></simple-input>
                        <simple-input v-model="cart.ccv"  label="ccv" type="number" required></simple-input>
                        <simple-input v-model="addr.cep" label="cep" type="number" required></simple-input>
                        <simple-input v-model="addr.number" label="numero-casa" type="number" required></simple-input>

                        <button type="submit" @click.prevent.default="submitPayment()" class="btn-submit"><span
                                class="btn-submit-text">finalizar compra</span></button>
                    </form>
                </div>
            </div>

            <div class="product-table-container">
                <table-with-products :items="cart_items" :total="final_price" :edit_disabled="true">
                </table-with-products>
            </div>
        </div>
    </div>
</template>

<script>
// import { parse } from 'path';
import TableWithProducts from '@/components/TableWithProducts.vue'
import SimpleInput from "@/components/SimpleInput.vue";
import router from '@/router';

export default {
    name: "Payment",
    components: { TableWithProducts, SimpleInput },

    data() {
        return {
            cart_items: [],
            final_price: undefined,
            
            cart: {
                number: undefined,
                ccv: undefined,
            },
            addr: {
                cep: undefined,
                number: undefined,
            }
        }
    },

    created() {
        this.fetchShoppingCart();
        this.computeFinalPrice();
    },

    methods: {
        async fetchShoppingCart() {
            try {
                let response = await fetch('http://localhost:3000/customers', {
                    method: 'GET',
                    headers: { 'x-access-token': localStorage.user_token }
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
                this.final_price += parseFloat((parseInt(element.quantities) * parseFloat(element.price)))
            })

            this.final_price = this.final_price.toFixed(2)
        },

        async submitPayment() {
            if (this.addr.cep === undefined || this.addr.number === undefined || this.cart.number === undefined || this.cart.ccv === undefined) {
                alert('Preencha todos os campos corretament');
            }
            else {

                try {
                    this.cart_items.forEach(async (obj) => {
                        console.log(obj.title);
                        let response_product = await fetch(`http://localhost:3000/products/${obj.id}`, {
                            method: 'PUT',
                            headers: { 'x-access-token': localStorage.user_token, 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                'stock_quantity': obj.stock_quantity,
                                'sold_quantity': obj.sold_quantity + obj.quantities
                            })
                        });

                        if (response_product.status !== 200) {
                            console.log(`Falha na atualização do protudo ${obj.title} no banco de dados`);
                        }
                    });

                    let response_customer = await fetch(`http://localhost:3000/customers/update-customer`, {
                        method: 'PUT',
                        headers: { 'x-access-token': localStorage.user_token, 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            'shopping_cart': []
                        })
                    });

                    if (response_customer.status === 200) {
                        alert('Pedido concluído com sucesso! Muito obrigado pela compra :)')
                    }

                    this.$router.push('/');
                } catch (e) {
                    alert('Falha na manipulação do banco de dados!');
                }
            }
        }
    }
};
</script>

<style scoped>
@import "/public/assets/css/button.css";
@import "/public/assets/css/forms.css";

.payment-page-flex-box {
    display: flex;
    flex-direction: row;
    gap: 50px;
    justify-content: space-around;
    flex-wrap: wrap-reverse;
}

.payment-form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.payment-form h4 {
    padding-bottom: 20px;
}

.btn-submit {
    width: 200px;
}

.payment-container {
    margin: auto auto;
}
</style>