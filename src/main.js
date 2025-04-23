import { createApp } from 'vue'
import { createPinia } from 'pinia'
//colors
import { useColorsStore} from './stores/colors';

import App from './App.vue'
import "@fortawesome/fontawesome-free/css/all.min.css";
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import './assets/tailwind.css' // Import Tailwind CSS

//Material-Design-Icons
import '@mdi/font/css/materialdesignicons.css'

const app = createApp(App)
const vuetify = createVuetify({
    components,
    directives,
  })

app.use(createPinia())
app.config.globalProperties.$colorStore = useColorsStore.footerColor;
app.use(router)
app.use(vuetify)
app.mount('#app')
