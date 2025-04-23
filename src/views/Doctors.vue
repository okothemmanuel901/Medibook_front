<template>
  <div class="doctors-container">
    <!-- Header Section -->
    <header class="header">
      <h1>Our Doctor Team</h1>
      <p>Your information is secure and encrypted, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim.</p>
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
  name: 'DoctorTeam',
  data() {
    return {
      doctors: [
        {
          id: 1,
          name: "Josie Wells",
          specialty: "Ph.D, DPT, MS OMPT",
          bio: "Based in the United Kingdom. Available today with 4-star rating.",
          image: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
        },
        {
          id: 2,
          name: "Stanley George",
          specialty: "Ph.D, DPT, MS OMPT",
          bio: "Based in the United Kingdom. Available today with 4-star rating.",
          image: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png"
        },
        {
          id: 3,
          name: "Caleb Bowen",
          specialty: "Ph.D, DPT, MS OMPT",
          bio: "Based in the United Kingdom. Available today with 4-star rating.",
          image: "https://cdn-icons-png.flaticon.com/512/2922/2922512.png"
        },
        {
          id: 4,
          name: "Christine Lawson",
          specialty: "Ph.D, DPT, MS OMPT",
          bio: "Based in the United Kingdom. Available today with 4-star rating.",
          image: "https://cdn-icons-png.flaticon.com/512/2922/2922561.png"
        }
      ]
    };
  },
  methods: {
    bookAppointment(doctorName) {
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.doctor-card {
  background-color: #2ecc40;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  color: white;
}

.doctor-card:hover {
  transform: translateY(-5px);
}

.doctor-image {
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  background-color: #475b66;
}

.doctor-info {
  padding: 20px;
  text-align: center;
}

.doctor-info h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
}

.specialty {
  font-size: 14px;
  font-weight: bold;
  color: #fffbd2;
  margin-bottom: 10px;
}

.bio {
  font-size: 14px;
  color: #e9ffe9;
  margin-bottom: 15px;
}

.book-btn {
  padding: 10px 20px;
  background-color: #fff;
  color: #2ecc40;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.book-btn:hover {
  background-color: #f2f2f2;
}

@media (max-width: 768px) {
  .doctors-grid {
    grid-template-columns: 1fr;
  }
}
</style>
