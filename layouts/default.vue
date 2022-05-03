<template>
  <div>
    <Navbar />

    <div class="flex pt-16">
      <SideNav />
      <div class="px-8">
        <Nuxt />
      </div>

    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";

export default {
  components: { Navbar, SideNav }
}
</script>
