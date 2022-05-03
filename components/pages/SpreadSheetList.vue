<template>
  <div class="mt-4 grid grid-cols-3 gap-4">
    <div
      v-for="spreadSheet in spreadSheets"
      :key="spreadSheet.id"
      class="flex content-center items-center border p-4"
    >
      {{ spreadSheets.title }}
    </div>
  </div>
</template>

<script>
export default {

  computed: {
    spreadSheets() {
      return this.$store.state["spreadsheet/spreadSheets"]
    }
  }
}
</script>
