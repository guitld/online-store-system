<template>
  <form>
  <div v-for="item in items" :key="item">
    <input
      v-bind="$attrs"
      :placeholder="item.label"
      class="field"
      :value="item.modelValue"
      @input="$emit('update:item.modelvalue', $event.target.value)"
      />
  </div>
  </form>



  <!-- <input
    v-bind="$attrs"
    :placeholder="label"
    class="field"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  /> -->
</template>

<script>

export default {
    props: {
        // label: {
        //     type: String,
        //     default: '',
        //     required: true
        // },
        // modelValue: {
        //     type: [String, Number],
        //     default: ''
        // }
        items: {
            type: Array,
            default: [],
            required: true
        }
    }
}

</script>

