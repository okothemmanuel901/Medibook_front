<template>

  <v-container fluid class="pa-0">
    <!-- Hero Section -->
    <v-row class="hero-section" align="center" justify="center">
      <v-col cols="12" class="text-center">
        <h1 class="display-2 font-weight-bold white--text">Welcome to Hospital Booking System</h1>
        <p class="headline white--text mt-4">
          Your trusted platform for booking healthcare appointments with ease.
        </p>
        <v-btn x-large color="primary" class="mt-6" to="/AppointmentPage">
          Book an Appointment
        </v-btn>
        <v-btn x-large outlined color="white" class="mt-6 ml-4" to='/loginpage'>
          Login
        </v-btn>
      </v-col>
    </v-row>

    <!-- Introduction Section -->
    <v-row class="mt-10" justify="center">
      <v-col cols="12" sm="10" md="8" class="text-center">
        <h2 class="display-1 font-weight-bold">Why Choose Us?</h2>
        <p class="subtitle-1 mt-4">
          At Hospital Booking System, we are committed to providing a seamless and efficient way for patients to connect with healthcare professionals. Our platform is designed to make healthcare accessible and convenient for everyone.
        </p>
      </v-col>
    </v-row>

    <!-- Features Section -->
    <v-row class="mt-10" justify="center">
      <v-col cols="12" sm="10" md="8">
        <v-row>
          <v-col cols="12" md="4" class="text-center">
            <v-icon size="64" color="primary">mdi-calendar-check</v-icon>
            <h3 class="headline mt-4">Easy Booking</h3>
            <p class="subtitle-1">
              Book appointments with your preferred doctors in just a few clicks.
            </p>
          </v-col>
          <v-col cols="12" md="4" class="text-center">
            <v-icon size="64" color="primary">mdi-doctor</v-icon>
            <h3 class="headline mt-4">Experienced Doctors</h3>
            <p class="subtitle-1">
              Access a network of highly qualified and experienced healthcare professionals.
            </p>
          </v-col>
          <v-col cols="12" md="4" class="text-center">
            <v-icon size="64" color="primary">mdi-clock-fast</v-icon>
            <h3 class="headline mt-4">Quick Access</h3>
            <p class="subtitle-1">
              Get timely access to healthcare services without long waiting times.
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Call to Action Section -->
    <v-row class="mt-10 primary white--text py-10" justify="center">
      <v-col cols="12" sm="10" md="8" class="text-center">
        <h2 class="display-1 font-weight-bold">Ready to Get Started?</h2>
        <p class="subtitle-1 mt-4">
          Join thousands of satisfied users and experience the convenience of Hospital Booking System today.
        </p>
        <v-btn x-large color="white" class="mt-6" to="/RegisterPage">
          Sign Up Now
        </v-btn>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
.hero-section {
  background-image: url('https://via.placeholder.com/1500x600'); /* Replace with your hero image */
  background-size: cover;
  background-position: center;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>