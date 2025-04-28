<script setup>
import { RouterLink, RouterView } from 'vue-router';
import NavBar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
</script>

<template>
  <div id="app">
    <Header />
  <v-app>
    <NavBar />

    <v-content>
      <Router-View />
    </v-content>
    <Footer />
  </v-app>
  </div>
</template>
