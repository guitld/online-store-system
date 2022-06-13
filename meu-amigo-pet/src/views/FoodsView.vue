<template>
  <item-list :items="items"></item-list>
</template>

<script>
import ItemList from "@/components/ItemListView.vue"
import foods_data from "@/data/foods.json"

export default {
  name: "Foods",

  components: {ItemList},

  data() {
    return {
      items: foods_data
    };
  },
};
</script>