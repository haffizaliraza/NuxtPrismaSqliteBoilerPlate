<template>
  <form @submit.prevent="updateUser">
    <label>Name:</label>
    <input type="text" v-model="user.name" required />

    <label>Email:</label>
    <input type="email" v-model="user.email" required />

    <button type="submit">Update User</button>
  </form>
</template>

<script>
export default {
  props: ['user'],
  data() {
    return {
      editedUser: {
        id: this.user.id,
        name: this.user.name,
        email: this.user.email
      }
    };
  },
  methods: {
    async updateUser() {
      try {
        const response = await this.$axios.put(`/api/users/${this.user.id}`, this.editedUser);
        console.log('User updated:', response.data);
        // Optionally: Show success message or redirect to user list
      } catch (error) {
        console.error('Error updating user:', error);
        // Handle error: show error message or log
      }
    }
  }
};
</script>
