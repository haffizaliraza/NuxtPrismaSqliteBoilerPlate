<template>
  <div>
    <h2>User List</h2>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.email }}
        <button @click="deleteUser(user.id)">Delete</button>
        <router-link :to="{ name: 'edit', params: { id: user.id }}">Edit</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: []
    };
  },
  async created() {
    await this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await this.$axios.get('/api/users');
        this.users = response.data;
      } catch (error) {
        console.error('Error fetching users:', error);
        // Handle error: show error message or log
      }
    },
    async deleteUser(id) {
      if (confirm('Are you sure you want to delete this user?')) {
        try {
          await this.$axios.delete(`/api/users/${id}`);
          this.users = this.users.filter(user => user.id !== id);
          // Optionally: Show success message
        } catch (error) {
          console.error('Error deleting user:', error);
          // Handle error: show error message or log
        }
      }
    }
  }
};
</script>
