<template>
  <div>
    <AuthView v-if="$auth.loggedIn" />
    <GuestView v-else />
  </div>
</template>

<script>
import AuthView from "../components/pages/AuthView";
import GuestView from "../components/pages/GuestView";

export default {
  components: { AuthView, GuestView }

}
</script>
