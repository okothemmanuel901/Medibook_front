<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Newsletter Section -->
      <div class="footer-section">
        <h3>Newsletter</h3>
        <div class="underline"></div>
        <p>Subscribe to our Newsletter</p>
        <div class="newsletter-form">
          <input
            type="email"
            placeholder="Email address"
            v-model="email"
            @keyup.enter="subscribe"
            :disabled="isSubscribing"
          />
          <button @click="subscribe" :disabled="isSubscribing">
            {{ isSubscribing ? 'Subscribing...' : '→' }}
          </button>
        </div>
        <p v-if="subscriptionMessage" class="subscription-message">
          {{ subscriptionMessage }}
        </p>
      </div>

      <!-- Quick Links Section -->
      <div class="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/services">Services</router-link></li>
          <li><router-link to="/faq">FAQ</router-link></li>
          <li><router-link to="/appointment">Appointment</router-link></li>
        </ul>
      </div>

      <!-- Support Section -->
      <div class="footer-section">
        <h3>Support</h3>
        <ul>
          <li><router-link to="/support">Get Support</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
          <li><router-link to="/blog">My Blog</router-link></li>
        </ul>
      </div>

      <!-- Follow Us Section -->
      <div class="footer-section">
        <h3>Follow Us</h3>
        <div class="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Contact Info Section -->
    <div class="footer-bottom">
      <div class="contact-info">
        <div class="contact-item">
          <i class="fas fa-phone-alt"></i>
          <span>877-255-7945</span>
        </div>
        <div class="contact-item">
          <i class="fas fa-envelope"></i>
          <span>info@email.com</span>
        </div>
        <div class="contact-item">
          <i class="fas fa-map-marker-alt"></i>
          <span>3850 North Place Suite 878</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

// Newsletter subscription state
const email = ref('');
const isSubscribing = ref(false);
const subscriptionMessage = ref('');

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const subscribe = async () => {
  // Validate email
  if (!email.value.trim()) {
    subscriptionMessage.value = 'Please enter an email address.';
    return;
  }

  if (!emailRegex.test(email.value)) {
    subscriptionMessage.value = 'Please enter a valid email address.';
    return;
  }

  isSubscribing.value = true;
  subscriptionMessage.value = '';

  try {
    // Simulate API call to subscribe
    // Replace with actual API endpoint
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Mock delay
    // Example: await axios.post('https://your-api/newsletter/subscribe', { email: email.value });

    subscriptionMessage.value = `Successfully subscribed with ${email.value}!`;
    email.value = ''; // Clear the input
  } catch (error) {
    console.error('Subscription error:', error);
    subscriptionMessage.value = 'An error occurred. Please try again later.';
  } finally {
    isSubscribing.value = false;
  }
};
</script>

<style scoped>
.footer {
  background-color: #2e2e2e;
  color: #fff;
  padding: 40px 20px;
  font-family: Arial, sans-serif;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
}

.footer-section {
  flex: 1;
  min-width: 200px;
  margin: 10px;
}

.footer-section h3 {
  font-size: 18px;
  margin-bottom: 10px;
  position: relative;
}

.underline {
  width: 30px;
  height: 3px;
  background-color: #00cc00;
  margin-bottom: 10px;
}

.footer-section p {
  font-size: 14px;
  margin-bottom: 10px;
}

.newsletter-form {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.newsletter-form input {
  padding: 8px;
  border: none;
  border-radius: 4px 0 0 4px;
  flex: 1;
  transition: border 0.3s ease;
}

.newsletter-form input:focus {
  outline: none;
  border: 1px solid #00cc00;
}

.newsletter-form button {
  background-color: #00cc00;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 0 4px 4px 0;
  color: #fff;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.newsletter-form button:hover:not(:disabled) {
  background-color: #00b300;
}

.newsletter-form button:disabled {
  background-color: #666;
  cursor: not-allowed;
}

.subscription-message {
  font-size: 12px;
  color: #00cc00;
  margin-top: 5px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 8px;
}

.footer-section ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}

.footer-section ul li a:hover {
  color: #00cc00;
  text-decoration: none;
}

.social-icons {
  display: flex;
  gap: 15px;
}

.social-icons a {
  color: #fff;
  font-size: 18px;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: #00cc00;
}

.footer-bottom {
  border-top: 1px solid #444;
  padding-top: 20px;
  margin-top: 20px;
  text-align: center;
}

.contact-info {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
}

.contact-item i {
  font-size: 16px;
}
</style>
