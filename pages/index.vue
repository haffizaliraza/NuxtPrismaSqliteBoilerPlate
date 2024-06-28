<template>
  <div>
    <form @submit.prevent="login">
      <input v-model="username" type="text" placeholder="Username">
      <input v-model="password" type="password" placeholder="Password">
      <button type="submit">Login</button>
    </form>
    <form @submit.prevent="register">
      <input v-model="username" type="text" placeholder="Username">
      <input v-model="password" type="password" placeholder="Password">
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch('login', {
          username: this.username,
          password: this.password,
        });
        this.$router.push('/dashboard'); // Redirect to dashboard after successful login
      } catch (error) {
        console.error('Login error:', error);
      }
    },

    async register() {
      try {
        await this.$store.dispatch('register', {
          username: this.username,
          password: this.password,
        });
        alert('Registration successful');
      } catch (error) {
        console.error('Registration error:', error);
      }
    },
  },
};
</script>
