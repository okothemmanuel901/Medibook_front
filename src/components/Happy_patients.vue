<template>
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
</template>

<script setup>
</script>

<style scoped>
/* Happy Patients Section */
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
