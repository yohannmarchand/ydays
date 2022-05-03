<template>
  <div class="mt-6">
    <SheetInput />

    <SpreadSheetList />
  </div>
</template>

<script>
import SpreadSheetList from "./SpreadSheetList";
import SheetInput from "../SheetInput";

export default {
  name: "AuthView",

  components: {SpreadSheetList, SheetInput}
}
</script>
