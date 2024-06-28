<template>
  <div>
    <h1>Welcome to the Dashboard!</h1>
    <p>Logged in as: {{ username }}</p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  computed: {
    username() {
      return this.$store.state.auth.username;
    },
  },
  methods: {
    logout() {
      this.$store.commit('clearToken');
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
    