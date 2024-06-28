<template>
  <form @submit.prevent="createUser">
    <label>Name:</label>
    <input type="text" v-model="formData.name" required />

    <label>Email:</label>
    <input type="email" v-model="formData.email" required />

    <button type="submit">Create User</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: ''
      }
    };
  },
  methods: {
    async createUser() {
      try {
        const response = await this.$axios.post('/api/users', this.formData);
        console.log('User created:', response.data);
        // Optionally: Show success message or redirect to user list
      } catch (error) {
        console.error('Error creating user:', error);
        // Handle error: show error message or log
      }
    }
  }
};
</script>
