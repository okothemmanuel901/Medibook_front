<template>
  <div class="doctors-container">
    <!-- Header Section -->
    <header class="header">
      <h1>Meet Our Doctors</h1>
      <p>Experienced professionals ready to assist you</p>
    </header>

    <!-- Doctors List -->
    <section class="doctors-grid">
      <div v-for="doctor in doctors" :key="doctor.id" class="doctor-card">
        <div class="doctor-image" :style="{ backgroundImage: `url(${doctor.image})` }"></div>
        <div class="doctor-info">
          <h3>{{ doctor.name }}</h3>
          <p class="specialty">{{ doctor.specialty }}</p>
          <p class="bio">{{ doctor.bio }}</p>
          <button @click="bookAppointment(doctor.name)" class="book-btn">
            Book Appointment
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      doctors: [
        {
          id: 1,
          name: "Dr. John Smith",
          specialty: "Cardiologist",
          bio: "Specializing in heart health with over 15 years of experience.",
          image: "https://images.unsplash.com/photo-1612349317154-3c9ba00a3776?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
        },
        {
          id: 2,
          name: "Dr. Emily Johnson",
          specialty: "Pediatrician",
          bio: "Dedicated to children's health and well-being.",
          image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
        },
        {
          id: 3,
          name: "Dr. Anita Patel",
          specialty: "General Practitioner",
          bio: "Providing comprehensive care for all ages.",
          image: "https://images.unsplash.com/photo-1598887142487-3c360d73793b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
        }
      ]
    };
  },
  methods: {
    bookAppointment(doctorName) {
      // Navigate to AppointmentPage with doctor pre-selected
      this.$router.push({
        name: 'AppointmentPage',
        query: { doctor: doctorName }
      });
    }
  }
};
</script>

<style scoped>
.doctors-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

/* Header Styles */
.header {
  text-align: center;
  padding: 50px 20px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
              url('https://images.unsplash.com/photo-1576091160399-1d65cdaa8778?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  color: white;
  border-radius: 10px;
  margin-bottom: 40px;
}

.header h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

.header p {
  font-size: 18px;
}

/* Doctors Grid */
.doctors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.doctor-card {
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.doctor-card:hover {
  transform: translateY(-5px);
}

.doctor-image {
  width: 100%;
  height: 250px;
  background-size: cover;
  background-position: center;
}

.doctor-info {
  padding: 20px;
  text-align: center;
}

.doctor-info h3 {
  font-size: 24px;
  color: #333;
  margin-bottom: 5px;
}

.specialty {
  font-size: 16px;
  color: #2d79f3;
  margin-bottom: 10px;
}

.bio {
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
}

.book-btn {
  padding: 10px 20px;
  background-color: #2d79f3;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.book-btn:hover {
  background-color: #1a5ed9;
}

@media (max-width: 768px) {
  .doctors-grid {
    grid-template-columns: 1fr;
  }
}
</style>

