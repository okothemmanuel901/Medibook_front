<template>
  <div class="home-container">
    <!-- Hero Section with Illustration -->
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

    <!-- Include Other Sections -->
    <AboutUs />
    <FAQ />
    <ContactUs />
  </div>
</template>



<style scoped>
.home-container {
  font-family: 'Arial', sans-serif;
  color: #333;
  background-color: #f5f7fa;
}

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

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  align-items: center;
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

.cta-button.secondary {
  background-color: #2a5298;
}

.cta-button.secondary:hover {
  background-color: #1e3c72;
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
</style>
