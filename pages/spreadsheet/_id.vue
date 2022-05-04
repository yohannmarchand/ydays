<template>
  <div class="flex">
    <SideNav />
    <div v-if="sheet" class="flex-grow mt-6">
      <Table
        v-if="isEditMode"
        :value="sheet.values"
        @save="save"
      />
      <div v-else class="m-4">
        <div class="font-bold mb-4">Ligne numéros: {{ profileIndex }}</div>

        <ProfilPage :labels="displayProperty" :values="formattedValue[profileIndex]" />
        <div class="flex space-x-4 mt-6">
          <div
            v-if="!(profileIndex <= 1)"
            class="cursor-pointer"
            @click="profileIndex--"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </div>
          <div
            v-if="!(profileIndex === sheet.values.length - 1)"
            @click="profileIndex++"
            class="cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Table from "../../components/Table";

export default {
  components: {Table},

  data() {
    return {
      sheet: null,
      isEditMode: true,
      formattedValue: [],
      displayProperty: [],
      profileIndex: 1
    }
  },

  computed:{
    spreadSheet() {
      return this.$store.getters["spreadsheet/getSpreadSheetById"](this.$route.params.id)
    },
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
  },

  methods: {
    save(value) {
      console.log(value)
      this.displayProperty = value.map(({ isDisplay, name }) => {
        if (isDisplay) {
          return name
        }
      })

      this.formattedValue = this.sheet.values.map((profile) => {
        return profile.filter((content, i) => value[i].isDisplay)
      })

      this.isEditMode = false
    }
  }
}
</script>
