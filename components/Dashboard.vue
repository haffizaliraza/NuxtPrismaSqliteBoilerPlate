<template>
  <div class="dashboard">
    <h1>Welcome to the Dashboard, {{ username }}!</h1>
    
    <div class="chart-container">
      <canvas id="userChart" width="400" height="200"></canvas>
    </div>

    <button @click="logout" class="logout-btn">Logout</button>
  </div>
</template>

<script>
import { Line } from 'vue-chartjs';

export default {
  extends: Line,
  computed: {
    username() {
      return this.$store.state.auth.username;
    },
  },
  mounted() {
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Users over time',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          data: [10, 20, 30, 25, 40, 35, 45], // Replace with actual data
        },
      ],
    }, { responsive: true, maintainAspectRatio: false });
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
.dashboard {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.chart-container {
  margin-top: 20px;
}

.logout-btn {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.logout-btn:hover {
  background-color: #c0392b;
}
</style>
