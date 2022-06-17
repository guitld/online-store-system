<template>
		<item-list :items="items"></item-list>
</template>

<script>
import ItemList from "@/components/ItemListView.vue"
import data from "@/data/products.json"
import { throwStatement } from "@babel/types";

export default {
	name: "Accessories",

	components: { ItemList },

	data() {
		return {
			items: []
		};
	},

	created() {
		this.fetchData()
	},

	methods: {
		fetchData() {
			let products_by_category = {}
			
			let products_ids = Object.keys(data)
			
			products_ids.forEach((product_id) => {
				if (data[product_id]['category'] === 'acessorios') {
					if (!(data[product_id]['product_class'] in products_by_category)) products_by_category[data[product_id]['product_class']] = new Array(data[product_id])
					else products_by_category[data[product_id]['product_class']].push(data[product_id])
				}
			})

			Object.keys(products_by_category).forEach((key) => {
				let obj = {}
				obj['section'] = key
				obj['products'] = products_by_category[key]
				this.items.push(obj)
			})

			console.log(this.items)
	  }
	}
}
</script>
