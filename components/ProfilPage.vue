<template>
  <div class="flex flex-col space-y-4">
    <div
      v-if="label"
      v-for="(label, index) in labels"
      :key="label"
      class="flex flex-col"
    >
      <label>{{label}}</label>
      <div class="border px-4 py-2">
        {{ values[index] }}
      </div>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    labels: Array,
    values: Array,
  }
}
</script>
