<!-- components/Navbar.vue -->
<template>
  <nav class="navbar">
    <ul>
      <li>
        <NuxtLink to="/">Dashboard</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/users">Users</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/stats">Stats</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/reports">Reports</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped>
.navbar {
  background-color: #333;
  padding: 1rem;
}
.navbar ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}
.navbar a {
  color: white;
  text-decoration: none;
}
.navbar a:hover {
  text-decoration: underline;
}
</style>
