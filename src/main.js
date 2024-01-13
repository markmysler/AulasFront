import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import axios from 'axios'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          darkBrick: '#BC4A3C',
          lightBrick: '#E76C63',
          white: '#FFFEFC',
          black: '040406',
          darkSilver: '#C0C0C0',
          lightSilver: 'D9D9D9'
        }
      },
    },
  },
})

axios.defaults.baseURL= 'http://149.50.135.56:8080'
// axios.defaults.baseURL= 'http://localhost:8000'

createApp(App)
.use(store)
.use(router,axios)
.use(vuetify)
.mount('#app')
