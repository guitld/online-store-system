<template>
    <div class="payment-page-wrapper">
        <div class="payment-page-flex-box">
            
            <div class="payment-container">
                <div class="payment-form">
                    <h4>Preencha seus dados</h4>
                    <form class="form-inputs">
                        <simple-input label="numero-cartao" type="number" required></simple-input>
                        <simple-input label="ccv" type="number" required></simple-input>
                        <simple-input label="cep" type="number" required></simple-input>
                        <simple-input label="numero-casa" type="number" required></simple-input>
                        
                        <button type="submit" @click="login()" class="btn-submit"><span
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
import { parse } from 'path';
import TableWithProducts from '@/components/TableWithProducts.vue'
import SimpleInput from "@/components/SimpleInput.vue";

export default {
    name: "Payment",
    components: { TableWithProducts, SimpleInput },

    data() {
        return {
            cart_items: [{
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
                },],
            final_price: 0,
        }
    },
};
</script>

<style scoped>

@import "/public/assets/css/button.css";
@import "/public/assets/css/forms.css";
.payment-page-wrapper {
    width: 90%;
    margin: auto auto;
}

.payment-page-flex-box {
    display: flex;
    flex-direction: row;
    gap: 50px;
    justify-content: space-around;
    flex-wrap: wrap-reverse;
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