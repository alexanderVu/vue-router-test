import {
  createRouter,
  createWebHistory
  // parseQuery as originalParseQuery,
  // stringifyQuery as originalStringifyQuery
} from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: Home
    }
  },
  {
    path: '/about',
    name: 'About',
    components: {
      default: About
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
  // workaround for https://github.com/vuejs/vue-router-next/issues/561
  // parseQuery: (query) => originalParseQuery(query.replace(/\+/g, ' ')),
  // stringifyQuery: (query) => originalStringifyQuery(query).replace(/\+/g, '%2B')
})

export default router