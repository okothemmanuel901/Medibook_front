<template>
  <div class="home-container">
    <!-- Hero Section (from Hero.vue) -->
    <section class="welcome-section">
      <div class="text-content">
        <h1>Welcome to Hospital Booking System</h1>
        <p>
          Your hospital booking system is designed to streamline the appointment process,
          ensuring efficient and convenient scheduling for both patients and healthcare providers.
          It allows patients to view available time slots, book appointments, and receive confirmation in real time.
          The system incorporates features such as automated reminders, user-friendly navigation,
          and secure data handling to protect patient information. Additionally,
          healthcare providers can manage their schedules seamlessly, track patient visits,
          and access relevant records, promoting a smooth and organized workflow.
        </p>
        <div class="buttons">
          <button class="read-more" @click="goToAboutUs">Read More</button>
          <a href="#" class="contact-us" @click.prevent="goToContact">Contact Us →</a>
        </div>
      </div>
      <div class="image-content">
        <img
          src="https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-goggles_23-2149611193.jpg?t=st=1745344257~exp=1745347857~hmac=6356f64b8fc361e928f222a075a88cdfdd26147ad7ac80d356df441407fb7e6e&w=1380"
          alt="Medical Staff Illustration"
          class="hero-image"
        />
      </div>
    </section>

    <!-- Hero Section (from Home.vue) -->
    <section class="hero-section">
      <div class="hero-content">
        <h2 class="hero-subtitle">Quality Medical Services</h2>
        <h1 class="hero-title">Make Our Patients Happy</h1>
        <p class="hero-description">
          Our hospital booking system ensures seamless appointment scheduling, secure data handling, and efficient management for both patients and healthcare providers. Experience healthcare made simple and accessible.
        </p>
      </div>
      <div class="hero-image">
        <img
          src="https://img.freepik.com/free-vector/surgeons-preparing-surgery-concept-illustration_114360-15647.jpg?t=st=1745388151~exp=1745391751~hmac=0036434e7c2caafee95aed418d80ed1aa2126de8b51b399ae222bdd50003a283&w=826"
          alt="Medical staff illustration"
          class="illustration"
        />
      </div>
    </section>

    <!-- Happy Patients Section (from HappyPatients.vue) -->
    <section class="happy-patients-section">
      <h2 class="section-title">Happy Patients</h2>
      <p class="section-description">
        Hear from our satisfied patients who have experienced seamless healthcare through our booking system.
      </p>
      <div class="patients-gallery">
        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
          alt="Patient 1"
          class="patient-image"
        />
        <img
          src="https://images.unsplash.com/photo-1506794778202-80a2b81d6981?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
          alt="Patient 2"
          class="patient-image"
        />
        <img
          src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
          alt="Patient 3"
          class="patient-image"
        />
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
          alt="Patient 4"
          class="patient-image"
        />
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
          alt="Patient 5"
          class="patient-image"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'HomeView',
  setup() {
    const router = useRouter();

    const goToAboutUs = () => {
      router.push('/About');
    };

    const goToContact = () => {
      router.push('/contact');
    };

    return { goToAboutUs, goToContact };
  },
};
</script>

<style scoped>
/* General Container */
.home-container {
  font-family: 'Arial', sans-serif;
  color: #333;
  background-color: #f5f7fa;
}

/* Welcome Section (from Hero.vue) */
.welcome-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  background-color: #fff;
}

@media (min-width: 768px) {
  .welcome-section {
    flex-direction: row;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
  }
}

.text-content {
  max-width: 500px;
  flex: 1;
}

.text-content h1 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1.5rem;
}

.text-content p {
  font-size: 1rem;
  color: #777;
  margin-bottom: 2rem;
}

.buttons {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.read-more {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.read-more:hover {
  background-color: #218838;
}

.contact-us {
  color: #28a745;
  font-weight: bold;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
}

.contact-us:hover {
  text-decoration: underline;
}

.image-content {
  flex: 1;
  max-width: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
}

@media (min-width: 768px) {
  .image-content {
    margin-top: 0;
  }
}

.hero-image {
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Hero Section (from Home.vue) */
.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  background-color: #f5f7fa;
}

@media (min-width: 768px) {
  .hero-section {
    flex-direction: row;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
  }
}

.hero-content {
  max-width: 600px;
  flex: 1;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: #2a5298;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: 1.5rem;
  color: #777;
  margin-bottom: 2rem;
}

.hero-image {
  flex: 1;
  max-width: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
}

@media (min-width: 768px) {
  .hero-image {
    margin-top: 0;
  }
}

.illustration {
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: contain;
}

/* Happy Patients Section (from HappyPatients.vue) */
.happy-patients-section {
  padding: 4rem 2rem;
  text-align: center;
  background-color: #fff;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
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

.patients-gallery {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.patient-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #f5f7fa;
}
</style>
