<template>
  <!-- Navigation Section -->
  <nav class="bg-white shadow py-4">
    <div class="container mx-auto flex justify-center space-x-12 px-4"> <!-- Increased space-x-8 to space-x-12 -->
      <router-link to="/" class="text-gray-600 hover:text-green-500 px-4">HOME</router-link> <!-- Added padding -->
      <router-link to="/about" class="text-gray-600 hover:text-green-500 px-4">ABOUT</router-link>
      <router-link to="/doctors" class="text-gray-600 hover:text-green-500 px-4">DOCTORS</router-link>
      <router-link to="/faq" class="text-gray-600 hover:text-green-500 px-4">FAQ</router-link>
      <router-link to="/Services" class="text-gray-600 hover:text-green-500 px-4">SERVICES</router-link>
      <router-link to="/appointmentpage" class="text-gray-600 hover:text-green-500 px-4"> APPOINTMENT</router-link>
      <router-link to="/contact" class="text-gray-600 hover:text-green-500 px-4">CONTACT</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar_Section",
};
</script>

<style scoped>
/* Navbar styles */
nav {
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.router-link-active {
  color: #38a169; /* Green color for active link */
}
</style>
