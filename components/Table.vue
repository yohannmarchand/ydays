<template>
  <div>
    <table class="mt-6 overflow-x-auto mx-4">
      <tr
        v-for="(row, i) in value"
        :key="`row-${i}`"
        class="border p-2"
      >
        <component
          v-for="(col, index) in row"
          :is="i === 0 ? 'th'  : 'td'"
          :key="`col-${index}`"
          class="border p-2 text-center"
        >
          {{ col }}
        </component>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    value: Array
  }
}
</script>
