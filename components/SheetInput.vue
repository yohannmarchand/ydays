<template>
  <div class="w-full mx-auto">
    <div class="font-semibold">
      Add a Google Sheet
    </div>
    <div class="mt-2 border flex">
      <input
        class="flex-grow p-2"
        v-model="value"
        type="text"
        placeholder="Enter Google Sheet Id"
      >
      <button
        class="bg-green-500 text-white px-6 py-2"
        @click="search"
      >
        Search
      </button>
    </div>
    <div
      v-if="spreadSheet"
      class="border pt-6"
    >
      <div class="font-bold px-6">Nom du fichier : {{ spreadSheet.properties.title }}</div>
      <div class="flex flex-col space-y-2 mt-4 px-6">
        <div
          v-for="{ properties } in spreadSheet.sheets"
          :key="properties.title"
          class="flex items-center space-x-4"
        >
          <div class="flex-grow">{{ properties.title }}</div>
          <input type="checkbox" :name="properties.sheetId" checked>
        </div>

      </div>
      <button
        class="w-full mt-4 bg-green-500 text-white px-6 py-2"
        @click="add"
      >
        Add
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SheetInput",

  data() {
    return {
      value: '',
      spreadSheet: null
    }
  },

  methods: {
    search() {
      this.$store.dispatch('spreadsheet/fetchSpreadsheet', this.value).then(data => this.spreadSheet = data)
    },

    add() {
      let sheets = []

      document.querySelectorAll("input:checked").forEach(sheet => {
        sheets.push(this.spreadSheet.sheets.find(({ properties }) => properties.sheetId == sheet.name)?.properties)
      })

      this.$store.commit('spreadsheet/add', {
        id: this.spreadSheet.spreadsheetId,
        title: this.spreadSheet.properties.title,
        sheets: sheets,
        user: this.$auth.user.sub
      })

      this.spreadSheet = null
    }
  },
}
</script>
