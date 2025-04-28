<template>
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
        Let me know if you'd like to add specific technical details or unique features!
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
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'HeroSection',
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
</style>
