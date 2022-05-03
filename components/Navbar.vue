<template>
  <div class="fixed flex h-16 p-4 top-0 w-full bg-white border-b">
    <NuxtLink to="/" class="font-bold">SheetProject</NuxtLink>
    <div class="flex-grow flex ml-8 space-x-4">
      <NuxtLink
        v-for="{ link, name } in navigations"
        :key="name"
        :to="link"
      >
        {{ name }}
      </NuxtLink>
    </div>
    <LoginButton v-if="!$auth.user" />
    <div
      v-else
      class="flex items-center space-x-4"
    >
      <div>Welcome {{ $auth.user.name}}</div>
      <div
        class="border rounded p-1"
        @click="$auth.logout('google')"
      >
        Logout
      </div>
    </div>
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
      navigations: []
    }
  },

  created() {

  }
}
</script>
