<template>
    <div class="wrapper">
        <div class="grid-wrapper">
            <div style="grid-column: span 3"></div>
            <span class="grid-header">quantidade</span>
            <span class="grid-header">preco unitario</span>
            <span class="grid-header">preco total</span>
            
            <template v-for="item in items" :key="item">
                <label for="input-delete">
                    <img src="@/../public/assets/img/delete-button.png" id="delete-button-image" @click="emitRemoveItem(item.id)"/>
                </label>
                <input type="button" name="input-delete" id="input-delete" style="display: none">

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
    name: "TableWithProducts",
    props: {
        items: {
            type: Array,
            default: [],
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
    column-gap: 50px;
    row-gap: 20px;
    border-radius: 10px;
    padding: 15px 30px 15px 30px;
    align-items: center;
    max-height: 400px;
    overflow: scroll;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #d8ff6e;
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
}

#delete-button-image {
    width: 30px;
    height: 30px;
}

.grid-product-image {
    width: 80px;
}
</style>