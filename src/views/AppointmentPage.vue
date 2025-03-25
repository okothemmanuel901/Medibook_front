<template>
    <div class="appointment-container">
      <!-- Header Section with Background Image -->
      <header class="header">
        <h1>Book Your Doctor Appointment</h1>
        <p>Schedule a consultation with ease</p>
      </header>
  
      <!-- Appointment Form -->
      <section class="appointment-form-container">
        <form @submit.prevent="submitAppointment" class="appointment-form">
          <!-- Doctor Selection -->
          <div class="form-group">
            <label for="doctor">Select Doctor</label>
            <select v-model="appointment.doctor" id="doctor" required class="input-field">
              <option value="" disabled>Select a doctor</option>
              <option value="Dr. Smith">Dr. Emoktanye - </option>
              <option value="Dr. Smith">Dr. John Smith - Cardiologist</option>
              <option value="Dr. Johnson">Dr. Emily Johnson - Pediatrician</option>
              <option value="Dr. Patel">Dr. Anita Patel - General Practitioner</option>
            </select>
          </div>
  
          <!-- Date Selection -->
          <div class="form-group">
            <label for="date">Appointment Date</label>
            <input 
              v-model="appointment.date" 
              type="date" 
              id="date" 
              :min="today" 
              required 
              class="input-field"
            >
          </div>
  
          <!-- Time Selection -->
          <div class="form-group">
            <label for="time">Appointment Time</label>
            <select v-model="appointment.time" id="time" required class="input-field">
              <option value="" disabled>Select a time</option>
              <option value="09:00">09:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="14:00">02:00 PM</option>
              <option value="16:00">04:00 PM</option>
            </select>
          </div>
  
          <!-- Patient Name -->
          <div class="form-group">
            <label for="patientName">Your Name</label>
            <input 
              v-model="appointment.patientName" 
              type="text" 
              id="patientName" 
              placeholder="Enter your full name" 
              required 
              class="input-field"
            >
          </div>
  
          <!-- Patient Contact -->
          <div class="form-group">
            <label for="contact">Contact Number</label>
            <input 
              v-model="appointment.contact" 
              type="tel" 
              id="contact" 
              placeholder="Enter your phone number" 
              required 
              class="input-field"
            >
          </div>
  
          <!-- Submit Button -->
          <button type="submit" class="submit-btn">Book Appointment</button>
        </form>
  
        <!-- Doctor Image Section -->
        <div class="doctor-image">
          <!-- Placeholder for Doctor Image -->
        </div>
      </section>
  
      <!-- Confirmation Message -->
      <div v-if="confirmation" class="confirmation">
        <p>{{ confirmation }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        appointment: {
          doctor: '',
          date: '',
          time: '',
          patientName: '',
          contact: ''
        },
        confirmation: '',
        today: new Date().toISOString().split('T')[0] // Sets min date to today
      }
    },
    methods: {
      submitAppointment() {
        // Simulate appointment booking logic
        this.confirmation = `Appointment booked with ${this.appointment.doctor} on ${this.appointment.date} at ${this.appointment.time}. We'll contact you at ${this.appointment.contact}.`;
        this.resetForm();
      },
      resetForm() {
        this.appointment = {
          doctor: '',
          date: '',
          time: '',
          patientName: '',
          contact: ''
        };
      }
    }
  }
  </script>
  
  <style scoped>
  .appointment-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Arial', sans-serif;
  }
  
  /* Header Styles */
  .header {
    text-align: center;
    padding: 50px 20px;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('path-to-header-image.jpg');
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
  
  /* Form Container */
  .appointment-form-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
  }
  
  .appointment-form {
    background-color: #ffffff;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 100px 3px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 500px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-group label {
    display: block;
    font-weight: 600;
    color: #333;
    margin-bottom: 8px;
  }
  
  .input-field {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s ease;
  }
  
  .input-field:focus {
    border-color: #2d79f3;
    outline: none;
  }
  
  .submit-btn {
    width: 100%;
    padding: 12px;
    background-color: #2d79f3;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .submit-btn:hover {
    background-color: #1a5ed9;
  }
  
  /* Doctor Image Section */
  .doctor-image {
    width: 100%;
    max-width: 500px;
    height: 400px;
    background: url('path-to-doctor-image.jpg') no-repeat center;
    background-size: cover;
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  /* Confirmation Message */
  .confirmation {
    margin-top: 30px;
    padding: 20px;
    background-color: #e6ffe6;
    border-radius: 10px;
    text-align: center;
    color: #2d662d;
    font-size: 16px;
  }
  
  @media (max-width: 768px) {
    .appointment-form-container {
      flex-direction: column;
      align-items: center;
    }
    
    .doctor-image {
      height: 300px;
      max-width: 100%;
    }
  }
  </style>