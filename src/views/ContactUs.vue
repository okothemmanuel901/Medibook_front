<template>
  <div class="contact-container">
    <!-- Header Section with Image -->
    <section class="header-section">
      <div class="header-content">
        <h1 class="header-title">Contact Us</h1>
        <p class="header-subtitle">
          We're here to assist you with your healthcare needs. Reach out to us anytime!
        </p>
      </div>
      <img
        src="https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
        alt="Hospital reception desk"
        class="header-image"
      />
    </section>

    <!-- Contact Info and Form Section -->
    <section class="contact-section">
      <div class="contact-wrapper">
        <!-- Contact Information -->
        <div class="contact-info">
          <h2 class="section-title">Get in Touch</h2>
          <div class="info-item">
            <i class="fas fa-phone-alt info-icon"></i>
            <p>Phone: <a href="tel:8772557945">877-255-7945</a></p>
          </div>
          <div class="info-item">
            <i class="fas fa-envelope info-icon"></i>
            <p>Email: <a href="mailto:info@email.com">info@email.com</a></p>
          </div>
          <div class="info-item">
            <i class="fas fa-map-marker-alt info-icon"></i>
            <p>Address: 3850 North Place Suite 878</p>
          </div>
          <!-- Social Media Links -->
          <div class="social-links">
            <h3>Follow Us</h3>
            <div class="social-icons">
              <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
              <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
              <a href="https://linkedin.com" target="_blank"><i class="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="contact-form">
          <h2 class="section-title">Send Us a Message</h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                required
                placeholder="Your Name"
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                placeholder="Your Email"
              />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                required
                placeholder="Your Message"
                rows="5"
              ></textarea>
            </div>
            <button type="submit" class="cta-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="map-section">
      <h2 class="section-title">Find Us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.953735315316!3d-37.816279779751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577c7e7a2b8b1e!2s3850%20N%20Place%20Suite%20878!5e0!3m2!1sen!2sus!4v1697654321!5m2!1sen!2sus"
        width="100%"
        height="400"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>

    <!-- Back to About Us Section -->
    <section class="back-section">
      <button class="cta-button" @click="goToAboutUs">Back to About Us</button>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';


// Form data
const form = ref({
  name: '',
  email: '',
  message: '',
});

// Submit form handler
const submitForm = () => {
  if (form.value.name && form.value.email && form.value.message) {
    alert('Message sent successfully!\n\n' +
          `Name: ${form.value.name}\n` +
          `Email: ${form.value.email}\n` +
          `Message: ${form.value.message}`);
    // Reset form
    form.value = { name: '', email: '', message: '' };
  } else {
    alert('Please fill out all fields.');
  }
};

const goToAboutUs = () => {
  router.push('/About');
};
</script>

<style scoped>
/* General Styles */
.contact-container {
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

/* Contact Section */
.contact-section {
  padding: 4rem 2rem;
}

.contact-wrapper {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  gap: 2rem;
  flex-wrap: wrap;
}

.contact-info,
.contact-form {
  flex: 1;
  min-width: 300px;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  animation: fadeIn 1s ease-in;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.info-icon {
  font-size: 1.5rem;
  color: #2a5298;
}

.info-item p {
  margin: 0;
  font-size: 1rem;
}

.info-item a {
  color: #2a5298;
  text-decoration: none;
}

.info-item a:hover {
  text-decoration: underline;
}

.social-links {
  margin-top: 2rem;
}

.social-links h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icons a {
  color: #2a5298;
  font-size: 1.5rem;
  text-decoration: none;
}

.social-icons a:hover {
  color: #ff6f61;
}

/* Contact Form */
.contact-form form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  font-family: 'Arial', sans-serif;
}

.form-group textarea {
  resize: vertical;
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

/* Map Section */
.map-section {
  padding: 4rem 2rem;
  text-align: center;
}

.map-section iframe {
  max-width: 100%;
}

/* Back Section */
.back-section {
  padding: 2rem;
  text-align: center;
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
