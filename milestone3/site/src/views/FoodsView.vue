<template>
	<div class="wrapper">
		<item-list :items="items"></item-list>
	</div>
</template>

<script>
import ItemList from "@/components/ItemListView.vue"

export default {
  name: "Foods",

  components: {ItemList},

  data() {
    return {
      items: {}
    };
  },

  mounted() {
		this.fetch_data()
	},

	methods: {
		async fetch_data() {
			try {
				let resp = await fetch('http://localhost:3000/products/category/comidinhas', { method: 'GET' });
				let items = await resp.json();
				items.forEach((object) => {
					if (this.items.hasOwnProperty(object.product_class)) {
						this.items[object.product_class].push(object);
					} else {
						this.items[object.product_class] = [object];
					}
				})
			} catch (e) {
				alert('Falha no carregamento dos itens, tente novamente');
			}
		}
	}
};
</script>