<template>
  <div class="welcome-container">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Make Cities Safe, Resilient, and Sustainable</h1>
        <p class="hero-subtitle">Your safety is our priority. Access emergency services, real-time updates, and recovery assistance in one place.</p>
        <button class="cta-button" @click="scrollToFeatures">Explore Features</button>
      </div>
     
    </section>

    <!-- Features Section -->
    <section class="features-section" ref="featuresSection">
      <h2 class="section-title">Key Features</h2>
      <div class="feature-cards">
        <!-- Emergency Response & Coordination -->
        <div class="feature-card" @mouseenter="animateCard($event)" @mouseleave="resetCard($event)">
          <i class="mdi mdi-alert-circle-outline feature-icon"></i>
          <h3>Emergency Response</h3>
          <p>Access police, ambulance, and fire services with a single tap. Share your live location with trusted circles.</p>
          <button class="feature-button" @click="openEmergencyModal">Learn More</button>
        </div>

        <!-- Real-Time Safety Updates -->
        <div class="feature-card" @mouseenter="animateCard($event)" @mouseleave="resetCard($event)">
          <i class="mdi mdi-map-marker-radius feature-icon"></i>
          <h3>Real-Time Safety Updates</h3>
          <p>Get zonal updates, safety ratings, and alerts for your area.</p>
          <button class="feature-button" @click="openSafetyModal">Learn More</button>
        </div>

        <!-- First Aid & Recovery -->
        <div class="feature-card" @mouseenter="animateCard($event)" @mouseleave="resetCard($event)">
          <i class="mdi mdi-first-aid feature-icon"></i>
          <h3>First Aid & Recovery</h3>
          <p>Step-by-step tutorials for injuries and post-emergency recovery assistance.</p>
          <button class="feature-button" @click="openFirstAidModal">Learn More</button>
        </div>

        <!-- Support Systems -->
        <div class="feature-card" @mouseenter="animateCard($event)" @mouseleave="resetCard($event)">
          <i class="mdi mdi-hand-heart feature-icon"></i>
          <h3>Support Systems</h3>
          <p>Psychological and logistical support for crisis situations.</p>
          <button class="feature-button" @click="openSupportModal">Learn More</button>
        </div>
      </div>
    </section>

    <!-- Call-to-Action Section -->
    <section class="cta-section">
      <h2 class="cta-title">Join Us in Building Safer Communities</h2>
      <p class="cta-subtitle">Download the app today and take the first step towards a safer, more resilient city.</p>
      <button class="cta-button" @click="downloadApp">Download Now</button>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const featuresSection = ref(null);

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
const openEmergencyModal = () => alert('Emergency Response: Learn More');
const openSafetyModal = () => alert('Safety Updates: Learn More');
const openFirstAidModal = () => alert('First Aid: Learn More');
const openSupportModal = () => alert('Support Systems: Learn More');

// Download app handler
const downloadApp = () => {
  alert('Redirecting to download page...');
  // Add actual download logic here
};
</script>

<style scoped>
/* General Styles */
.welcome-container {
  font-family: 'Arial', sans-serif;
  color: #333;
  background-color: #f9f9f9;
}

/* Hero Section */
.hero-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  color: white;
}

.hero-content {
  max-width: 50%;
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
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
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
  color: #2a5298;
  margin-bottom: 1rem;
}

.feature-button {
  padding: 0.5rem 1rem;
  background-color: #2a5298;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.feature-button:hover {
  background-color: #1e3c72;
}

/* CTA Section */
.cta-section {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #2a5298, #1e3c72);
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