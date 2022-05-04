<template>
  <div class="mx-4">
    <table
      v-if="cols.length > 0"
      class="mt-6 overflow-x-auto"
    >
      <tr
        v-for="(row, i) in value"
        :key="`row-${i}`"
        class="border p-2"
      >

        <component
          v-for="(cell, index) in row"
          :is="i === 0 ? 'th'  : 'td'"
          :key="`col-${index}`"
          class="border p-2 text-center"
          :class="{ 'bg-gray-300': !cols[index].isDisplay }"
          :value="cell"
        >
          <div
            v-if="i === 0"
            class="flex flex-nowrap"
          >
            <span>{{ cell }}</span>
            <svg
              v-if="cols[index].isDisplay"
              xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
              @click="display(index)"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
              @click="display(index)"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
            </svg>
          </div>
          <template v-else>
            {{ cell }}
          </template>
        </component>
      </tr>
    </table>

    <button
      class="w-60 mx-auto mt-4 bg-green-500 text-white px-6 py-2"
      @click="$emit('save', cols)"
    >
      Enregistrer
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cols: [],
    }
  },

  props: {
    value: Array
  },

  created() {
    this.value[0].forEach(col => {
      this.cols.push({
        name: col,
        isDisplay: true
      })
    })
  },

  methods: {
    display(col) {
      this.cols[col].isDisplay = !this.cols[col].isDisplay
    },
  }
}
</script>
