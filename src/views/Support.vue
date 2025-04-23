<template>
  <div class="support-container">
    <div class="support-card">
      <h1>Get Support</h1>
      <p>Fill out the form below, and our team will get back to you as soon as possible.</p>

      <form class="support-form" @submit.prevent="handleSubmit">
        <!-- Name Field -->
        <div class="form-group">
          <label for="name">Name</label>
          <div class="input-wrapper">
            <i class="fas fa-user icon"></i>
            <input
              id="name"
              v-model="formData.name"
              type="text"
              placeholder="Enter your name"
              :disabled="isSubmitting"
            />
          </div>
          <span v-if="errors.name" class="error">{{ errors.name }}</span>
        </div>

        <!-- Email Field -->
        <div class="form-group">
          <label for="email">Email</label>
          <div class="input-wrapper">
            <i class="fas fa-envelope icon"></i>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              placeholder="Enter your email"
              :disabled="isSubmitting"
            />
          </div>
          <span v-if="errors.email" class="error">{{ errors.email }}</span>
        </div>

        <!-- Subject Field -->
        <div class="form-group">
          <label for="subject">Subject</label>
          <div class="input-wrapper">
            <i class="fas fa-tag icon"></i>
            <input
              id="subject"
              v-model="formData.subject"
              type="text"
              placeholder="Enter the subject"
              :disabled="isSubmitting"
            />
          </div>
          <span v-if="errors.subject" class="error">{{ errors.subject }}</span>
        </div>

        <!-- Message Field -->
        <div class="form-group">
          <label for="message">Message</label>
          <div class="input-wrapper">
            <i class="fas fa-comment icon textarea-icon"></i>
            <textarea
              id="message"
              v-model="formData.message"
              placeholder="Describe your issue"
              rows="5"
              :disabled="isSubmitting"
            ></textarea>
          </div>
          <span v-if="errors.message" class="error">{{ errors.message }}</span>
        </div>

        <!-- Submit Button -->
        <button type="submit" class="submit-button" :disabled="isSubmitting">
          {{ isSubmitting ? 'Submitting...' : 'Submit Request' }}
        </button>

        <!-- Success/Error Message -->
        <p v-if="formMessage" :class="['form-message', { 'success': !isError, 'error': isError }]">
          {{ formMessage }}
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Form data
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
});

// Form errors
const errors = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
});

// Form submission state
const isSubmitting = ref(false);
const formMessage = ref('');
const isError = ref(false);

const router = useRouter();

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const handleSubmit = async () => {
  // Reset errors and messages
  errors.value = { name: '', email: '', subject: '', message: '' };
  formMessage.value = '';
  isError.value = false;

  // Validation
  let isValid = true;

  if (!formData.value.name.trim()) {
    errors.value.name = 'Please enter your name.';
    isValid = false;
  }

  if (!formData.value.email.trim()) {
    errors.value.email = 'Please enter your email.';
    isValid = false;
  } else if (!emailRegex.test(formData.value.email)) {
    errors.value.email = 'Please enter a valid email address.';
    isValid = false;
  }

  if (!formData.value.subject.trim()) {
    errors.value.subject = 'Please enter a subject.';
    isValid = false;
  }

  if (!formData.value.message.trim()) {
    errors.value.message = 'Please describe your issue.';
    isValid = false;
  }

  if (!isValid) return;

  isSubmitting.value = true;

  try {
    // Simulate API call (replace with actual API endpoint)
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Mock delay
    // Example: await axios.post('https://your-api/support', formData.value);

    formMessage.value = 'Your support request has been submitted successfully!';
    isError.value = false;

    // Reset form
    formData.value = { name: '', email: '', subject: '', message: '' };

    // Optional: Redirect to home after a delay
    setTimeout(() => {
      router.push('/home');
    }, 2000);
  } catch (error) {
    console.error('Support request error:', error);
    formMessage.value = 'An error occurred while submitting your request. Please try again later.';
    isError.value = true;
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.support-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f7fa;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 20px;
}

.support-card {
  background-color: #fff;
  padding: 40px;
  width: 100%;
  max-width: 600px;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.15);
  text-align: center;
}

.support-card h1 {
  font-size: 2.5rem;
  color: #151717;
  margin-bottom: 10px;
}

.support-card p {
  font-size: 1rem;
  color: #777;
  margin-bottom: 20px;
}

.support-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  text-align: left;
}

.form-group label {
  display: block;
  font-weight: 600;
  color: #151717;
  margin-bottom: 5px;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  border: 1.5px solid #ecedec;
  border-radius: 10px;
  padding: 0 10px;
  transition: border 0.3s ease;
}

.input-wrapper:focus-within {
  border: 1.5px solid #2d79f3;
}

.icon {
  color: #777;
  font-size: 16px;
}

.textarea-icon {
  position: absolute;
  top: 15px;
}

input,
textarea {
  width: 100%;
  border: none;
  padding: 10px;
  font-size: 14px;
  border-radius: 10px;
  margin-left: 10px;
}

textarea {
  resize: vertical;
  padding-top: 15px;
  padding-bottom: 15px;
}

input:focus,
textarea:focus {
  outline: none;
}

.error {
  color: #ff3b2f;
  font-size: 12px;
  margin-top: 5px;
  display: block;
}

.submit-button {
  background-color: #151717;
  border: none;
  color: white;
  font-size: 15px;
  font-weight: 500;
  border-radius: 10px;
  height: 50px;
  width: 100%;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease;
}

.submit-button:hover:not(:disabled) {
  background-color: #2d79f3;
}

.submit-button:disabled {
  background-color: #666;
  cursor: not-allowed;
}

.form-message {
  margin-top: 15px;
  font-size: 14px;
}

.form-message.success {
  color: #00cc00;
}

.form-message.error {
  color: #ff3b2f;
}
</style>
