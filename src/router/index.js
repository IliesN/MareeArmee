import { createRouter, createWebHistory } from 'vue-router'
import { store } from '../data/store'

import Accueil from '../views/Accueil.vue'
import Articles from '../views/Articles.vue'
import ArticleDetail from '../views/ArticleDetail.vue'
import Ajouter from '../views/Ajouter.vue'
import PanierPage from '../views/PanierPage.vue'
import Login from '../views/Login.vue'
import Admin from '../views/Admin.vue'

const routes = [
  { path: '/', name: 'accueil', component: Accueil },
  { path: '/articles', name: 'articles', component: Articles },
  { path: '/article/:id', name: 'article-detail', component: ArticleDetail, props: true },
  { path: '/ajouter', name: 'ajouter', component: Ajouter },
  { path: '/panier', name: 'panier', component: PanierPage },
  { path: '/login', name: 'login', component: Login },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    meta: { requiresAuth: true }, // page protégée
  },
  // Route "catch-all" : redirige vers l'accueil si l'URL n'existe pas
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Protection basique : simple condition dans un beforeEach, sans authentification réelle
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.estConnecte) {
    // On redirige vers /login en gardant en mémoire la page demandée
    next({ name: 'login', query: { redirect: to.fullPath } })
  } else {
    next()
  }
})

export default router
