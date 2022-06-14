<template>
  <item-list :items="items"></item-list>
</template>

<script>
import ItemList from "@/components/ItemListView.vue"
import data from "@/data/teste.json"

export default {
  name: "Accessories",

  components: {ItemList},

  data() {
    return {
      items: data["accessory"]
    };
  },
};
</script>