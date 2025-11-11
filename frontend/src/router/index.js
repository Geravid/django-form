import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Venue from '../views/Venue.vue'
import Sessions from '../views/Sessions.vue'
import Committees from '../views/Committees.vue'
import RedisytRegistration from '../views/RedisytRegistration.vue'
import PreviousEvents from '../views/PreviousEvents.vue'
import Program from '../views/Program.vue'
import Poster from '../views/Poster.vue'
import Tribute from '../views/Tribute.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/venue', component: Venue },
  { path: '/sessions', component: Sessions },
  { path: '/committees', component: Committees },
  { path: '/redisyt-registration', component: RedisytRegistration },
  { path: '/previous-events', component: PreviousEvents },
  { path: '/program', component: Program },
  { path: '/poster', component: Poster },
  { path: '/tribute', component: Tribute },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
