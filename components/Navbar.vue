<template>
  <div class="fixed flex h-16 p-4 top-0 w-full bg-slate-100 border-b">
    <h1 class="font-bold">SheetProject</h1>
    <div class="flex-grow flex ml-8 space-x-4">
      <NuxtLink
        v-for="{ link, name } in navigations"
        :key="name"
        :to="link"
      >
        {{ name }}
      </NuxtLink>
    </div>
    <LoginButton />
  </div>
</template>

<script>
import LoginButton from "./LoginButton";

export default {
  name: "Navbar",

  components: {
    LoginButton
  },

  data() {
    return {
      navigations: [{
        name: 'Test',
        link: '/test'
      }]
    }
  }
}
</script>
