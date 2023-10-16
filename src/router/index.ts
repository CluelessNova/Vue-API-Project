import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'
import AboutView from '../views/About/AboutView.vue'
import Weather from '../views/Projects/Weather/Weather.vue'
import Movies from '../views/Projects/Movies/Movie.vue'
import Projects from '../views/Projects/Projects.vue'
import Contact from '../views/Contact/Contact.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/projects/weather',
      name: 'weather',
      component: Weather
    },
    {
      path: '/projects/movies',
      name: 'movies',
      component: Movies
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})

export default router
