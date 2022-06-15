<template>
    <div class="wrapper">
        <div class="grid-wrapper">
            <div style="grid-column: span 3"></div>
            <span class="grid-header">quantidade</span>
            <span class="grid-header">preco unitario</span>
            <span class="grid-header">preco total</span>
            
            <template v-for="item in cart_items">
                <button class="grid-item btn grid-product-remove-btn"></button>
                <img :src="item.image" class="grid-item grid-product-image">
                <span class="grid-item">{{item.title}}</span>
                <span class="grid-item">{{ item.quantities }}</span>
                <span class="grid-item">R$ {{ item.price }}</span>
                <span class="grid-item">R${{ (item.price * item.quantities).toFixed(2) }}</span>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    name: "Cart",

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
                },
            ]
        }
    },
};
</script>

<style scoped>
.wrapper {
    margin: auto auto;
}

* {
    margin: 0;
    padding: 0;
    font-family: "JetBrains Mono", monospace;
}

.grid-wrapper {
    background-color: #FAF6EF;
    display: grid;
    grid-template-columns: repeat(6, auto);
    column-gap: 20px;
    border-radius: 20px;
    padding: 15px 30px 15px 30px;
    align-items: center;
}
.grid-header {
    font-size: 17px;
    font-weight: bold;
}

.grid-item {
    justify-self: center;
}

.grid-product-remove-btn {
    width: 30px;
    height: 30px;
    border-color: transparent;
    background: transparent url('@/../public/assets/img/delete-button.png') no-repeat top;
}

.grid-product-image {
    width: 80px;
}
</style>