<template>
  <item-list :items="items"></item-list>
</template>

<script>
import ItemList from "@/components/ItemListView.vue"
import acessories_data from "@/data/acessories.json"

export default {
  name: "Acessories",

  components: {ItemList},

  data() {
    return {
      items: acessories_data
    };
  },
};
</script>