<template>
  <nav class="navbar">
    <div class="logo">
      JS CDA
    </div>
    <ul class="nav-links">
      <li>
        <router-link to="/" exact-active-class="active">Home</router-link>
      </li>
      <li>
        <router-link to="/exercice" exact-active-class="active">Exercice</router-link>
      </li>
      <li>
        <router-link to="/contact" exact-active-class="active">Contact</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  color: white;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 1px;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.nav-links li a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background 0.3s;
}

.nav-links li a:hover {
  background: rgba(255, 255, 255, 0.2);
}

.active {
  background: rgba(255, 255, 255, 0.4);
}
</style>
