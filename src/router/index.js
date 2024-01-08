import { createRouter, createWebHistory } from 'vue-router'
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
    path: '/',
    name: 'home',
    component: HomeView
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
    component: MyReservationsView
  },
  {
    path: '/reservar',
    name: 'Reservar',
    component: ReservationView
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: ProfileView
  },
  {
    path: '/',
    name: 'Tutorial',
    component: TutorialView
  },
  {
    path: '/aula/:aula_id/',
    name: 'AulaDetalle',
    component: AulaView
  },
  {
    path: '/mis-reservas/:reserva_id/',
    name: 'ReservaDetalle',
    component: ReservationDetailView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
