<template>
  <div>
    <Navbar />

    <div class="pt-16">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";

export default {
  components: { Navbar }
}
</script>
