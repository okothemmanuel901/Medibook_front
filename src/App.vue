<script setup>
import { RouterLink, RouterView } from 'vue-router';
import NavBar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Happy_patients from './components/Happy_patients.vue';
</script>

<template>
  <div id="app">
    <Header />
  <v-app>
    <NavBar />
    <Hero />
    <v-content>
      <Router-View />
    </v-content>
    <Happy_patients />
    <Footer />
  </v-app>
  </div>
</template>
