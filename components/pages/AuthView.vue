<template>
  <div class="flex">
    <SideNav />
    <div class="mt-6 mx-4">
      <SheetInput />

      <SpreadSheetList />
    </div>
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
