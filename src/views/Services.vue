<template>
  <section class="services-section">
    <h2 class="section-title">Our Services</h2>
    <p class="section-description">
      Discover the range of specialized services we offer to meet your healthcare needs with care and precision.
    </p>
    <div class="services-cards">
      <!-- Obstetrics and Gynecology -->
      <div class="service-card">
        <i class="fas fa-briefcase-medical service-icon"></i>
        <h3 class="service-title">Obstetrics and Gynecology</h3>
        <p class="service-description">
          Comprehensive care for women’s health, including prenatal care, delivery, and gynecological services.
        </p>
        <button class="read-more" @click="goToServiceDetails('obstetrics-gynecology')">
          Read More →
        </button>
      </div>

      <!-- Diabetes and Obesity Counseling -->
      <div class="service-card">
        <i class="fas fa-heartbeat service-icon"></i>
        <h3 class="service-title">Diabetes and Obesity Counseling</h3>
        <p class="service-description">
          Personalized counseling and management plans to help patients manage diabetes and achieve a healthy weight.
        </p>
        <button class="read-more" @click="goToServiceDetails('diabetes-obesity')">
          Read More →
        </button>
      </div>

      <!-- Surgical and Medical Oncology -->
      <div class="service-card">
        <i class="fas fa-wheelchair service-icon"></i>
        <h3 class="service-title">Surgical and Medical Oncology</h3>
        <p class="service-description">
          Advanced cancer care with surgical and medical treatments tailored to each patient’s needs.
        </p>
        <button class="read-more" @click="goToServiceDetails('oncology')">
          Read More →
        </button>
      </div>
    </div>
  </section>
  <!-- How It Works Section -->
<section class="how-it-works-section">
  <p class="how-subtitle">We Made It Simple</p>
  <h2 class="how-title">How it works</h2>
  <p class="how-description">
    Our hospital booking system operates efficiently, providing a seamless experience for both patients and healthcare providers. Patients start by logging into the system, where they can search for available doctors and select convenient time slots for their appointments. Once a booking is made, the system sends real-time confirmations and automated reminders to ensure the patient is well-informed. On the provider's end, the system allows doctors to review and manage their schedules, keep track of bookings, and access relevant patient records when needed. Through robust security protocols, the system safeguards sensitive patient information while enabling quick and reliable interactions. Let me know if you'd like to elaborate further on its functionality or specific features!
  </p>

  <div class="steps-container">
    <div class="step-card">
      <div class="step-icon">
        <i class="fas fa-envelope-open-text"></i>
      </div>
      <div class="step-number">1</div>
      <h3 class="step-title">Sign up</h3>
      <p class="step-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp.</p>
    </div>

    <div class="step-card">
      <div class="step-icon">
        <i class="fas fa-check-square"></i>
      </div>
      <div class="step-number">2</div>
      <h3 class="step-title">Appointment</h3>
      <p class="step-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp.</p>
    </div>

    <div class="step-card">
      <div class="step-icon">
        <i class="fas fa-comment-alt"></i>
      </div>
      <div class="step-number">3</div>
      <h3 class="step-title">Feedback</h3>
      <p class="step-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp.</p>
    </div>
  </div>
</section>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

// Redirect to a service details page (placeholder for now)
const goToServiceDetails = (service) => {
  alert(`Learn more about ${service.replace('-', ' ')}`);
  // Example: router.push(`/services/${service}`);
};
</script>

<style scoped>
/* Services Section */
.services-section {
  padding: 4rem 2rem;
  text-align: center;
  background-color: #ffff;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #222;
  margin-bottom: 1rem;
}

.section-description {
  font-size: 1rem;
  color: #777;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.services-cards {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.service-card {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.service-icon {
  font-size: 3rem;
  color: #28a745;
  margin-bottom: 1rem;
}

.service-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
}

.service-description {
  font-size: 1rem;
  color: #777;
  margin-bottom: 1.5rem;
}

.read-more {
  background: none;
  border: none;
  color: #28a745;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 auto;
}

.read-more:hover {
  text-decoration: underline;
}
.how-it-works-section {
  background: #f9f9f9;
  padding: 4rem 9rem;
  text-align: center;
}

.how-subtitle {
  color: #888;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.how-title {
  font-size: 3.5rem;
  color: #333;
  font-weight: bold;
  margin-bottom: 1rem;
}

.how-description {
  color: #777;
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto 3rem;
}

.steps-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  position: relative;
}

.step-card {
  background: #fff;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  position: relative;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.step-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.step-icon {
  font-size: 3rem;
  color: #28a745;
  margin-bottom: 0.5rem;
}

.step-number {
  background-color: #28a745;
  color: #fff;
  border-radius: 50%;
  padding: 0.5rem 1rem;
  font-weight: bold;
  position: absolute;
  bottom: -1rem;
  left: 50%;
  transform: translateX(-50%);
}

.step-title {
  font-size: 1.5rem;
  color: #333;
  margin-top: 2rem;
}

.step-text {
  font-size: 0.9rem;
  color: #777;
  margin-top: 0.5rem;
}

</style>
