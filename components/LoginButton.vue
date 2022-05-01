<template>
  <button
    class="border rounded p-1"
    @click="login"
  >
    Login with Google
  </button>
</template>

<script>
export default {
  name: "LoginButton",

  methods: {
    login() {
      this.$auth.loginWith('google', { params: { prompt: "select_account" } })
    }
  }
}
</script>
