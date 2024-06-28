<template>
  <form @submit.prevent="login">
    <label>Email:</label>
    <input type="email" v-model="email" required />

    <label>Password:</label>
    <input type="password" v-model="password" required />

    <button type="submit">Login</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await this.$axios.post('/api/login', {
          email: this.email,
          password: this.password
        });
        console.log('Login successful:', response.data);
        // Store token in localStorage or Vuex state for subsequent requests
        localStorage.setItem('token', response.data.token);
        // Optionally: Redirect to dashboard or show success message
      } catch (error) {
        console.error('Error logging in:', error);
        // Handle error: show error message or log
      }
    }
  }
};
</script>
