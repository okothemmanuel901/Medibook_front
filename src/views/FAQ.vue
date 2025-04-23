<template>
  <div class="faq-container">
    <!-- Header Section with Image -->
    <section class="header-section">
      <div class="header-content">
        <h1 class="header-title">Frequently Asked Questions</h1>
        <p class="header-subtitle">
          Find answers to common questions about our hospital booking system.
        </p>
      </div>
      <img
        src="https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
        alt="Hospital staff assisting a patient"
        class="header-image"
      />
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <h2 class="section-title">Your Questions, Answered</h2>
      <div class="faq-list">
        <!-- FAQ 1: How do I book an appointment? -->
        <div class="faq-item">
          <div class="faq-question">
            <i class="fas fa-calendar-check faq-icon"></i>
            <h3>How do I book an appointment?</h3>
          </div>
          <p class="faq-answer">
            To book an appointment, sign up or log in to your account, search for a doctor or hospital, check their availability, and select a time slot that suits you. Confirm your booking, and you'll receive a confirmation email.
          </p>
        </div>

        <!-- FAQ 2: Can I cancel or reschedule my appointment? -->
        <div class="faq-item">
          <div class="faq-question">
            <i class="fas fa-clock faq-icon"></i>
            <h3>Can I cancel or reschedule my appointment?</h3>
          </div>
          <p class="faq-answer">
            Yes, you can cancel or reschedule your appointment directly from your account dashboard. Go to "My Appointments," select the appointment, and choose to cancel or pick a new time slot, subject to availability.
          </p>
        </div>

        <!-- FAQ 3: How do I access my medical records? -->
        <div class="faq-item">
          <div class="faq-question">
            <i class="fas fa-file-medical faq-icon"></i>
            <h3>How do I access my medical records?</h3>
          </div>
          <p class="faq-answer">
            Your medical records are securely stored in your account. Navigate to the "Medical Records" section in your dashboard to view, download, or share your records with healthcare providers.
          </p>
        </div>

        <!-- FAQ 4: What if I need help with my booking? -->
        <div class="faq-item">
          <div class="faq-question">
            <i class="fas fa-headset faq-icon"></i>
            <h3>What if I need help with my booking?</h3>
          </div>
          <p class="faq-answer">
            Our 24/7 support team is here to assist you. Contact us via phone at 877-255-7945, email at info@email.com, or use the live chat feature on our website for immediate help.
          </p>
        </div>

        <!-- FAQ 5: Is my data secure? -->
        <div class="faq-item">
          <div class="faq-question">
            <i class="fas fa-lock faq-icon"></i>
            <h3>Is my data secure?</h3>
          </div>
          <p class="faq-answer">
            Absolutely. We use advanced encryption and comply with healthcare data privacy regulations to ensure your personal and medical information is safe and secure.
          </p>
        </div>
      </div>
    </section>

    <!-- Back to About Us Section -->
    <section class="back-section">
      <button class="cta-button" @click="goToAboutUs">Back to About Us</button>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

// Navigate back to About Us page
const goToAboutUs = () => {
  router.push('/about');
};
</script>

<style scoped>
/* General Styles */
.faq-container {
  font-family: 'Arial', sans-serif;
  color: #333;
  background-color: #f9f9f9;
}

/* Header Section */
.header-section {
  position: relative;
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  color: white;
}

.header-content {
  position: relative;
  z-index: 1;
}

.header-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: fadeIn 1s ease-in;
}

.header-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  animation: fadeIn 1.5s ease-in;
}

.header-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
  z-index: 0;
}

/* FAQ Section */
.faq-section {
  padding: 4rem 2rem;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  animation: fadeIn 1s ease-in;
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  text-align: left;
}

.faq-question {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.faq-icon {
  font-size: 2rem;
  color: #2a5298;
}

.faq-item h3 {
  font-size: 1.25rem;
  margin: 0;
}

.faq-answer {
  font-size: 1rem;
  color: #666;
}

/* Back Section */
.back-section {
  padding: 2rem;
  text-align: center;
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

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
