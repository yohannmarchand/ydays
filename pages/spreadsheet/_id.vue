<template>
  <div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      sheet: null
    }
  },

  computed:{
    spreadSheet() {
      return this.$store.getters["spreadsheet/getSpreadSheetById"](this.$route.params.id)
    }
  },

  created() {
    if (this.$route.query.sheet && this.spreadSheet) {
      const tempSheet = this.spreadSheet.sheets.find(({ sheetId }) => sheetId == this.$route.query.sheet)
      this.$store.dispatch("spreadsheet/fetchsheetValue", { id: this.$route.params.id, sheet: tempSheet.title}).then(data => {
        this.sheet = data
      })
    }
  }
}
</script>
