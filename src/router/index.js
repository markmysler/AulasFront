import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import HomeView from '../views/HomeView.vue'
import AulaView from '../views/AulaView.vue'
import LogInView from '../views/LogInView.vue'
import SignUpView from '../views/SignUpView.vue'
import MyReservationsView from '../views/MyReservationsView.vue'
import ReservationView from '../views/ReservationView.vue'
import ReservationDetailView from '../views/ReservationDetailView.vue'
import TutorialView from '../views/TutorialView.vue'
import ProfileView from '../views/ProfileView.vue'

const routes = [
  {
    path: '/inicio',
    name: 'Inicio',
    component: HomeView,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/iniciar-sesion',
    name: 'IniciarSesion',
    component: LogInView
  },
  {
    path: '/registrarse',
    name: 'Registrarse',
    component: SignUpView
  },
  {
    path: '/mis-reservas',
    name: 'MisReservas',
    component: MyReservationsView,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/reservar',
    name: 'Reservar',
    component: ReservationView,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: ProfileView,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/',
    name: 'Tutorial',
    component: TutorialView
  },
  {
    path: '/aula/:aula_id/',
    name: 'AulaDetalle',
    component: AulaView,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/mis-reservas/:reserva_id/',
    name: 'ReservaDetalle',
    component: ReservationDetailView,
    meta: {
      requireLogin: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from)=>{
  if (to.meta?.requireLogin && !store.state.isAuthenticated) {
    return 'iniciar-sesion'
  }
})

export default router
