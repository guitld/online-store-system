<template>
	<div class="wrapper">
		<item-list :items="items"></item-list>
	</div>
</template>

<script>
import ItemList from "@/components/ItemListView.vue";

export default {
	name: "Accessories",

	components: { ItemList },

	data() {
		return {
			items: Object(),
		};
	},

	mounted() {
		this.fetch_data();
	},

	methods: {
		async fetch_data() {
			try {
				let resp = await fetch('http://localhost:3000/products/category/acessorios', { method: 'GET' });
				let items = await resp.json();

				items.forEach((object) => {
					if (this.items.hasOwnProperty(object.product_class)) {
						this.items[object.product_class].append(object);
					} else {
						this.items[object.product_class] = [object];
					}
				})
			} catch (e) {
				alert('Falha no carregamento dos itens, tente novamente');
			}

			console.log(this.items);
		}
	},
};
</script>
