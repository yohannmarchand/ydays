<template>
  <div class="flex">
    <SideNav />
    <div class="flex-grow mt-6">
      <Table
        v-if="sheet"
        :value="sheet.values"
      />
    </div>
  </div>
</template>

<script>
import Table from "../../components/Table";

export default {
  components: {Table},

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
    } else {
      this.$store.dispatch("spreadsheet/fetchsheetValue", { id: this.$route.params.id, sheet: this.spreadSheet.sheets[0].title}).then(data => {
        this.sheet = data
      })
    }
  },

  watch: {
    $route() {
      if (this.$route.query.sheet && this.spreadSheet) {
        const tempSheet = this.spreadSheet.sheets.find(({ sheetId }) => sheetId == this.$route.query.sheet)
        this.$store.dispatch("spreadsheet/fetchsheetValue", { id: this.$route.params.id, sheet: tempSheet.title}).then(data => {
          this.sheet = data
        })
      } else {
        this.$store.dispatch("spreadsheet/fetchsheetValue", { id: this.$route.params.id, sheet: this.spreadSheet.sheets[0].title}).then(data => {
          this.sheet = data
        })
      }
    }
  }
}
</script>
