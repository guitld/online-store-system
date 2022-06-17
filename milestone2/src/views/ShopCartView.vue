<template>
    <div class="content-wrapper">
        <div class="product-table-container">
            <table-with-products :items="cart_items" @emit-click-remove="removeItem"></table-with-products>
        </div>
        <div class="cat-dog-image-container">
            <img :src="catDogImage" alt="" id="cat-dog-image" />
        </div>
    </div>

    <div class="continue-purshase-container">
        <span class="final-price">Preço total: R$ {{ final_price }}</span>
        <button class="btn-submit" type="button">
        continuar para finalizar a compra
      </button>
    </div>
</template>

<script>
import { parse } from 'path';
import TableWithProducts from '@/components/TableWithProducts.vue'

export default {
    name: "Cart",

    components: {TableWithProducts},

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
            for (let idx in this.cart_items) {
                this.final_price += this.cart_items[idx].price * parseInt(this.cart_items[idx].quantities)
            }

            this.final_price = this.final_price.toFixed(2)
        },

        removeItem(id) {
            for (let idx in this.cart_items) {
                if (this.cart_items[idx].id === id) {
                    this.final_price = (this.final_price - (this.cart_items[idx].price * this.cart_items[idx].quantities)).toFixed(2)
                    this.cart_items.splice(idx, 1)
                }
            }
        },
    }
};
</script>

<style scoped>
@import "/public/assets/css/button.css";
@import "/public/assets/css/style.css";

.content-wrapper {
    width: 90%;
    margin: auto auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.cat-dog-image-container {
    margin: auto;
}

#cat-dog-image {
    margin: auto auto;
}

.continue-purshase-container {
    display: flex;
    flex-direction: row;
    width: 50%;
    justify-content: space-around;
}

.btn-submit {
    width: 300px;
}

.final-price {
    font-weight: bold;
}

</style>