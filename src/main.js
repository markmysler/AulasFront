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
})

axios.defaults.baseURL= 'http://149.50.135.56:8080'

createApp(App)
.use(store)
.use(router,axios)
.use(vuetify)
.mount('#app')
