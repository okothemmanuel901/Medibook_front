<template>
  <div class="about-container">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Simplifying Healthcare with Easy Hospital Booking</h1>
        <p class="hero-subtitle">
          We are dedicated to making healthcare accessible. Book appointments, manage records, and connect with top hospitals seamlessly.
        </p>
        <button class="cta-button" @click="scrollToFeatures">Discover Our Services</button>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section" ref="featuresSection">
      <h2 class="section-title">Why Choose Us</h2>
      <div class="feature-cards">
        <!-- Easy Appointment Booking -->
        <div class="feature-card" @mouseenter="animateCard($event)" @mouseleave="resetCard($event)">
          <i class="fas fa-calendar-check feature-icon"></i>
          <h3>Easy Appointment Booking</h3>
          <p>Schedule appointments with doctors across top hospitals in just a few clicks.</p>
          <button class="feature-button" @click="openBookingModal">Learn More</button>
        </div>

        <!-- Real-Time Availability -->
        <div class="feature-card" @mouseenter="animateCard($event)" @mouseleave="resetCard($event)">
          <i class="fas fa-clock feature-icon"></i>
          <h3>Real-Time Availability</h3>
          <p>Check live availability of doctors and book slots that suit your schedule.</p>
          <button class="feature-button" @click="openAvailabilityModal">Learn More</button>
        </div>

        <!-- Medical Records Management -->
        <div class="feature-card" @mouseenter="animateCard($event)" @mouseleave="resetCard($event)">
          <i class="fas fa-file-medical feature-icon"></i>
          <h3>Medical Records Management</h3>
          <p>Securely store and access your medical history and prescriptions anytime.</p>
          <button class="feature-button" @click="openRecordsModal">Learn More</button>
        </div>

        <!-- 24/7 Support -->
        <div class="feature-card" @mouseenter="animateCard($event)" @mouseleave="resetCard($event)">
          <i class="fas fa-headset feature-icon"></i>
          <h3>24/7 Support</h3>
          <p>Our team is here to assist you with booking, cancellations, and more, round the clock.</p>
          <button class="feature-button" @click="openSupportModal">Learn More</button>
        </div>
      </div>
    </section>

    <!-- Call-to-Action Section -->
    <section class="cta-section">
      <h2 class="cta-title">Join Thousands of Happy Patients</h2>
      <p class="cta-subtitle">
        Sign up today and experience a hassle-free way to manage your healthcare needs.
      </p>
      <div class="cta-buttons">
    <button class="cta-button" @click="goToRegister">Sign Up Now</button>
    <button class="cta-button secondary" @click="goToFAQ">View FAQ</button>
    <button class="cta-button secondary" @click="goToContact">Contact Us</button>
  </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const featuresSection = ref(null);
const router = useRouter();

// Scroll to features section
const scrollToFeatures = () => {
  featuresSection.value.scrollIntoView({ behavior: 'smooth' });
};

// Card animation on hover
const animateCard = (event) => {
  event.currentTarget.style.transform = 'scale(1.05)';
  event.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
};

// Reset card animation
const resetCard = (event) => {
  event.currentTarget.style.transform = 'scale(1)';
  event.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
};

// Modal handlers (placeholders for now)
const openBookingModal = () => alert('Appointment Booking: Learn More');
const openAvailabilityModal = () => alert('Real-Time Availability: Learn More');
const openRecordsModal = () => alert('Medical Records: Learn More');
const openSupportModal = () => alert('24/7 Support: Learn More');


const goToRegister = () => {
  router.push('/registerPage');
};
const goToFAQ = () => {
  router.push('/FAQ');
};
const goToContact = () => {
  router.push('/contact');
};
</script>

<style scoped>
/* General Styles */
.about-container {
  font-family: 'Arial', sans-serif;
  color: #333;
  background-color: #f9f9f9;
}

/* Hero Section */
.hero-section {
  display: inline-table;
  justify-content:first baseline;
  align-items: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #48bb78, #48bb78);
  color: white;
}

.hero-content {
  max-width: 30%;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: fadeIn 1s ease-in;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  animation: fadeIn 1.5s ease-in;
}

.cta-button {
  padding: 0.75rem 2rem;
  background-color: #ff6f61;
  color: white;
  border: none;
  border-radius: 5cap;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.4s ease;
}

.cta-button:hover {
  background-color: #ff3b2f;
}

.hero-image img {
  max-width: 100%;
  height: auto;
  animation: slideIn 1s ease-in;
}

/* Features Section */
.features-section {
  padding: 4rem 2rem;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  animation: fadeIn 1s ease-in;
}

.feature-cards {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 250px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-icon {
  font-size: 3rem;
  color: #48bb78;
  margin-bottom: 1rem;
}

.feature-button {
  padding: 0.5rem 1rem;
  background-color: #48bb78;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.feature-button:hover {
  background-color: #48bb78;
}

/* CTA Section */
.cta-section {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #48bb78, #48bb78);
  color: white;
  text-align: center;
}

.cta-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}
</style>
