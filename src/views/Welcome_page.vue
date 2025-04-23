<template>
  <div class="welcome-container">
    <div class="welcome-card">
      <h1>Welcome to Hospital Bookings</h1>
      <p>Hello, {{ user.name }}!</p>
      <p>You’re now logged in to manage your hospital appointments with ease.</p>
      <button class="button-logout" @click="handleLogout">Logout</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()
const user = JSON.parse(localStorage.getItem('user') || '{}')

// Logout handler
async function handleLogout() {
  try {
    await axios.post(
      'http://api/logout',
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    )
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.push('/Homeview')
  } catch (err) {
    console.error('Logout failed', err)
  }
}
</script>

<style scooped>
.welcome-container {
  display:flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #5b6895;
}

.welcome-card {
  background-color: #9b91e4;
  padding: 100px;
  width: 800px;
  border-radius: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.15);
  text-align: center;
}

.welcome-card h1 {
  color: #151717;
  font-size: 68px;
  margin-bottom: 5px;
}

.welcome-card p {
  color: #333;
  font-size: 16px;
  margin: 10px 0;
}

.button-logout {
  margin-top: 20px;
  background-color: #151717;
  border: none;
  color: white;
  font-size: 19px;
  font-weight: 550;
  border-radius: 10px;
  height: 50px;
  width:110%;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.button-logout:hover {
  background-color: #4a89ef;
}
</style>
