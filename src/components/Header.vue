<template>
  <header class="header">
    <div class="container">
      <div class="brand">
        <span class="brand-icon">+</span>
        <span class="brand-name">MEDIBOOK</span>
      </div>
      <div class="contact-info">
        <span>📧 {{ contactInfo.email }}</span>
        <span>📞 {{ contactInfo.phone }}</span>
      </div>
      <div class="buttons">
        <button class="login-btn" @click="redirectToLogin">Patient Login</button>
        <button class="register-btn" @click="redirectToRegister">Patient Registration</button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useContactInfo } from '../composables/useContactInfo';

const router = useRouter();
const { contactInfo } = useContactInfo();

const redirectToLogin = () => {
  router.push('/Loginpage');
};

const redirectToRegister = () => {
  router.push('/registerpage');
};
</script>

<style scoped>
.header {
  background-color: #48bb78;
  color: white;
  padding: 16px 0;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.brand-icon {
  font-size: 2rem;
}

.brand-name {
  font-size: 1.5rem;
  font-weight: bold;
}

.contact-info {
  display: flex;
  gap: 16px;
}

.buttons {
  display: flex;
  gap: 16px;
}

.login-btn,
.register-btn {
  background-color: white;
  color: #48bb78;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  font-size: 1rem;
}

.login-btn:hover,
.register-btn:hover {
  background-color: #38a169;
  color: white;
}
</style>
