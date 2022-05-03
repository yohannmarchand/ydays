<template>
  <div class="py-4 pl-6 pr-10 h-screen overflow-y-auto border border-l-0 w-60">
    <div class="font-semibold">Liste de travail: </div>
    <hr class="bg-zinc-800 my-4">

    <div
      v-for="spreadSheet in spreadSheets"
      :key="spreadSheet.id"
      class="mt-6"
    >
      <NuxtLink
        class="underline"
        :to="`/spreadsheet/${spreadSheet.id}`"
      >
        {{ spreadSheet.title }}
      </NuxtLink>
      <div class="ml-2">
        <div
          v-for="sheet in spreadSheet.sheets"
          :key="sheet.id"
        >
          •
          <NuxtLink
            class="underline"
            :to="`/spreadsheet/${spreadSheet.id}?sheet=${sheet.sheetId}`"
          >
            {{ sheet.title }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideNav",

  computed: {
    spreadSheets() {
      return this.$store.getters["spreadsheet/getUserSpreadSheet"](this.$auth.user.sub)
    }
  }
}
</script>
