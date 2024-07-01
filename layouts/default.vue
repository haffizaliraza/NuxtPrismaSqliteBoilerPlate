<!-- layouts/default.vue -->
<template>
  <div>
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>
