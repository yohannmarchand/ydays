<template>
  <div class="mt-4 grid grid-cols-3 gap-4">
    <NuxtLink
      v-for="spreadSheet in spreadSheets"
      :key="spreadSheet.id"
      :to="`/spreadsheet/${spreadSheet.id}`"
      class="flex flex-col aspect-square justify-center items-center border p-4 cursor-pointer rounded"
    >
      <div class="font-bold uppercase text-center">{{ spreadSheet.title }}</div>
      <div class="mt-4">Nombre de feuille: {{ spreadSheet.sheets.length}}</div>
    </NuxtLink>
  </div>
</template>

<script>
export default {

  computed: {
    spreadSheets() {
      return this.$store.getters["spreadsheet/getUserSpreadSheet"](this.$auth.user.sub)
    }
  }
}
</script>
