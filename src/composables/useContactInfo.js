// src/composables/useContactInfo.js
import { ref, onMounted } from 'vue';
import axios from 'axios';

export function useContactInfo() {
  const contactInfo = ref({
    email: 'info@email.com',
    phone: '877-255-7945',
    address: '3850 North Place Suite 878',
  });

  onMounted(async () => {
    try {
      const response = await axios.get('https://api.medibook.com/contact-info');
      contactInfo.value = response.data;
    } catch (error) {
      console.error('Error fetching contact info:', error);
      // Fallback to default values if API fails
    }
  });

  return { contactInfo };
}
