<template>
  <form @submit.prevent="signup">
    <label>Email:</label>
    <input type="email" v-model="email" required />

    <label>Password:</label>
    <input type="password" v-model="password" required />

    <button type="submit">Sign Up</button>
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
    async signup() {
      try {
        const response = await this.$axios.post('/api/signup', {
          email: this.email,
          password: this.password
        });
        console.log('Signup successful:', response.data);
        // Optionally: Redirect to login page or show success message
      } catch (error) {
        console.error('Error signing up:', error);
        // Handle error: show error message or log
      }
    }
  }
};
</script>
