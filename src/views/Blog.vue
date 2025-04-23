<template>
  <div class="blog-container">
    <div class="blog-card">
      <h1>Create a Blog Post</h1>
      <p>Share your insights, updates, or tips with our community.</p>

      <form class="blog-form" @submit.prevent="handleSubmit">
        <!-- Title Field -->
        <div class="form-group">
          <label for="title">Blog Title</label>
          <div class="input-wrapper">
            <i class="fas fa-heading icon"></i>
            <input
              id="title"
              v-model="formData.title"
              type="text"
              placeholder="Enter the blog title"
              :disabled="isSubmitting"
            />
          </div>
          <span v-if="errors.title" class="error">{{ errors.title }}</span>
        </div>

        <!-- Author Field -->
        <div class="form-group">
          <label for="author">Author Name</label>
          <div class="input-wrapper">
            <i class="fas fa-user icon"></i>
            <input
              id="author"
              v-model="formData.author"
              type="text"
              placeholder="Enter your name"
              :disabled="isSubmitting"
            />
          </div>
          <span v-if="errors.author" class="error">{{ errors.author }}</span>
        </div>

        <!-- Category Field -->
        <div class="form-group">
          <label for="category">Category</label>
          <div class="input-wrapper">
            <i class="fas fa-list icon"></i>
            <select
              id="category"
              v-model="formData.category"
              :disabled="isSubmitting"
            >
              <option value="" disabled>Select a category</option>
              <option value="health-tips">Health Tips</option>
              <option value="hospital-news">Hospital News</option>
              <option value="patient-stories">Patient Stories</option>
              <option value="medical-research">Medical Research</option>
            </select>
          </div>
          <span v-if="errors.category" class="error">{{ errors.category }}</span>
        </div>

        <!-- Image Upload Field -->
        <div class="form-group">
          <label for="image">Featured Image (Optional)</label>
          <div class="input-wrapper file-input">
            <input
              id="image"
              type="file"
              accept="image/*"
              @change="handleImageUpload"
              :disabled="isSubmitting"
            />
            <span v-if="imageName" class="file-name">{{ imageName }}</span>
          </div>
          <span v-if="errors.image" class="error">{{ errors.image }}</span>
        </div>

        <!-- Content Field -->
        <div class="form-group">
          <label for="content">Content</label>
          <div class="input-wrapper">
            <i class="fas fa-comment icon textarea-icon"></i>
            <textarea
              id="content"
              v-model="formData.content"
              placeholder="Write your blog post here..."
              rows="8"
              :disabled="isSubmitting"
            ></textarea>
          </div>
          <span v-if="errors.content" class="error">{{ errors.content }}</span>
        </div>

        <!-- Submit Button -->
        <button type="submit" class="submit-button" :disabled="isSubmitting">
          {{ isSubmitting ? 'Publishing...' : 'Publish Blog Post' }}
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
  title: '',
  author: '',
  category: '',
  content: '',
  image: null,
});

// Form errors
const errors = ref({
  title: '',
  author: '',
  category: '',
  content: '',
  image: '',
});

// Image upload state
const imageName = ref('');

// Form submission state
const isSubmitting = ref(false);
const formMessage = ref('');
const isError = ref(false);

const router = useRouter();

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    // Basic validation for image size (e.g., max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      errors.value.image = 'Image size should not exceed 5MB.';
      formData.value.image = null;
      imageName.value = '';
      return;
    }
    formData.value.image = file;
    imageName.value = file.name;
    errors.value.image = '';
  } else {
    formData.value.image = null;
    imageName.value = '';
  }
};

const handleSubmit = async () => {
  // Reset errors and messages
  errors.value = { title: '', author: '', category: '', content: '', image: '' };
  formMessage.value = '';
  isError.value = false;

  // Validation
  let isValid = true;

  if (!formData.value.title.trim()) {
    errors.value.title = 'Please enter a blog title.';
    isValid = false;
  }

  if (!formData.value.author.trim()) {
    errors.value.author = 'Please enter the author name.';
    isValid = false;
  }

  if (!formData.value.category) {
    errors.value.category = 'Please select a category.';
    isValid = false;
  }

  if (!formData.value.content.trim()) {
    errors.value.content = 'Please write the blog content.';
    isValid = false;
  }

  if (!isValid) return;

  isSubmitting.value = true;

  try {
    // Simulate API call (replace with actual API endpoint)
    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.value.title);
    formDataToSend.append('author', formData.value.author);
    formDataToSend.append('category', formData.value.category);
    formDataToSend.append('content', formData.value.content);
    if (formData.value.image) {
      formDataToSend.append('image', formData.value.image);
    }

    // Mock API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Example: await axios.post('https://your-api/blog', formDataToSend, {
    //   headers: { 'Content-Type': 'multipart/form-data' },
    // });

    formMessage.value = 'Your blog post has been published successfully!';
    isError.value = false;

    // Reset form
    formData.value = { title: '', author: '', category: '', content: '', image: null };
    imageName.value = '';

    // Redirect to a blog list page or home after a delay
    setTimeout(() => {
      router.push('/home'); // Or '/blog-list' if you create a blog list page
    }, 2000);
  } catch (error) {
    console.error('Blog post error:', error);
    formMessage.value = 'An error occurred while publishing your blog post. Please try again later.';
    isError.value = true;
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.blog-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f7fa;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 20px;
}

.blog-card {
  background-color: #fff;
  padding: 40px;
  width: 100%;
  max-width: 800px;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.15);
  text-align: center;
}

.blog-card h1 {
  font-size: 2.5rem;
  color: #151717;
  margin-bottom: 10px;
}

.blog-card p {
  font-size: 1rem;
  color: #777;
  margin-bottom: 20px;
}

.blog-form {
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

.file-input {
  padding: 10px;
  display: block;
}

input[type="file"] {
  width: 100%;
  border: none;
  padding: 0;
}

.file-name {
  font-size: 12px;
  color: #777;
  margin-top: 5px;
  display: block;
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
select,
textarea {
  width: 100%;
  border: none;
  padding: 10px;
  font-size: 14px;
  border-radius: 10px;
  margin-left: 10px;
}

select {
  appearance: none;
  background: transparent;
}

textarea {
  resize: vertical;
  padding-top: 15px;
  padding-bottom: 15px;
}

input:focus,
select:focus,
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
