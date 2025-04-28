<template>
  <div class="form-container">
    <form class="form" @submit.prevent="handleLogin">
      <div class="flex-column">
        <label>Email</label>
      </div>
      <div class="inputForm">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 32 32" height="20">
          <g data-name="Layer 3" id="Layer_3">
            <path
              d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"
            ></path>
          </g>
        </svg>
        <input v-model="email" placeholder="Enter your Email" class="input" type="email" required />
      </div>

      <div class="flex-column">
        <label>Password</label>
      </div>
      <div class="inputForm">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="-64 0 512 512" height="20">
          <path
            d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"
          ></path>
          <path
            d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"
          ></path>
        </svg>
        <input
          v-model="password"
          placeholder="Enter your Password"
          class="input"
          :type="showPassword ? 'text' : 'password'"
          required
        />
        <i
          :class="showPassword ? 'mdi mdi-eye-off' : 'mdi mdi-eye'"
          class="input-icon"
          @click="showPassword = !showPassword"
        ></i>
      </div>

      <div class="flex-row">
        <div>
          <input type="checkbox" v-model="rememberMe" />
          <label>Remember me</label>
        </div>
        <span class="span">Forgot password?</span>
      </div>

      <button class="button-submit" :disabled="loading" type="submit">
        {{ loading ? 'Signing In...' : 'Sign In' }}
      </button>
      <p class="p">Have an account?
    <router-link to="/RegisterPage" class="span">Sign Up</router-link>
  </p>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../Services/auth.service'

const router = useRouter()
const { login, loading, error } = useAuth()

// Form fields
const email = ref('')
const password = ref('')
const showPassword = ref(false)
const rememberMe = ref(false)
const form = ref(null)

// Validation rules
const emailRules = [
  (v) => !!v || 'Email is required',
  (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
]

const passwordRules = [(v) => !!v || 'Password is required']

// Login handler with form validation
async function handleLogin() {
  // Validate form before submission
  const isValid = form.value?.validate()

  // if (!isValid) {
  //   return
  // }

  // if (!email.value || !password.value) {
  //   console.error('Email and password are required')
  //   return
  // }

  try {
    await login({
      email: email.value,
      password: password.value,
    })

    // Redirect after successful login
    router.push('/Welcome_page')
  } catch (err) {
    // Error is already handled by the auth service
    console.error('Login failed', err)
  }
}
</script>

<style>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #a0a0a0 0%, #b6b1b1 50%, #8e8e8e 100%);
  position: relative;
  overflow: hidden;
}
.form-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  pointer-events: none;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #ffffff;
  padding: 30px;
  width: 450px;
  border-radius: 20px;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 5px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
}

::placeholder {
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
}

.form button {
  align-self: flex-end;
}

.flex-column > label {
  color: #151717;
  font-weight: 600;
}

.inputForm {
  border: 1.5px solid #ecedec;
  border-radius: 10px;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  transition: 0.2s ease-in-out;
}

.input {
  margin-left: 10px;
  border-radius: 10px;
  border: none;
  width: 100%;
  height: 100%;
}

.input:focus {
  outline: none;
}

.inputForm:focus-within {
  border: 1.5px solid #2d79f3;
}

.flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
}

.flex-row > div > label {
  font-size: 14px;
  color: black;
  font-weight: 400;
}

.span {
  font-size: 14px;
  margin-left: 5px;
  color: #2d79f3;
  font-weight: 500;
  cursor: pointer;
}

.button-submit {
  margin: 20px 0 10px 0;
  background-color: #151717;
  border: none;
  color: white;
  font-size: 15px;
  font-weight: 500;
  border-radius: 10px;
  height: 50px;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button-submit:disabled {
  background-color: #888;
  cursor: not-allowed;
}

.p {
  text-align: center;
  color: black;
  font-size: 14px;
  margin: 5px 0;
}

.btn {
  margin-top: 10px;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  gap: 10px;
  border: 1px solid #a0a0a9;
  background-color: rgb(106, 69, 69);
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.btn:hover {
  border: 1px solid #3677df;
}

.error {
  color: red;
  text-align: center;
  margin-top: 10px;
}

.input-icon {
  margin-right: 10px;
  cursor: pointer;
}
</style>
