<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { store } from './data/store'
import coin from './assets/coin.png'

const router = useRouter()

function seDeconnecter() {
  store.logout()
  router.push('/')
}
</script>

<template>
  <header class="entete">
    <div class="conteneur entete-inner">
      <RouterLink to="/" class="logo">
        <img :src="coin" alt="Pièce Splatoon" class="logo-piece" />
        <span class="titre-jeu">Marée Armée</span>
      </RouterLink>

      <nav class="nav">
        <RouterLink to="/" class="lien-nav">Accueil</RouterLink>
        <RouterLink to="/articles" class="lien-nav">Articles</RouterLink>
        <RouterLink to="/ajouter" class="lien-nav">Ajouter</RouterLink>
        <RouterLink to="/admin" class="lien-nav">Admin</RouterLink>
      </nav>

      <div class="actions-entete">
        <RouterLink to="/panier" class="btn btn-secondaire panier-btn">
          🛒 Panier
          <span v-if="store.panier.length" class="compteur-panier">{{ store.panier.length }}</span>
        </RouterLink>

        <RouterLink v-if="!store.estConnecte" to="/login" class="btn btn-cyan">Connexion</RouterLink>
        <div v-else class="session">
          <span class="pseudo">👤 {{ store.utilisateur.pseudo }}</span>
          <button class="btn btn-secondaire btn-petit" @click="seDeconnecter">Déconnexion</button>
        </div>
      </div>
    </div>
  </header>

  <main class="conteneur">
    <RouterView />
  </main>

  <footer class="pied">
    <p>Marée Armée — Projet pédagogique Vue.js &amp; Vue Router, sur le thème de Splatoon 🦑</p>
  </footer>
</template>

<style scoped>
.entete {
  background: var(--fond-noir);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  position: sticky;
  top: 0;
  z-index: 10;
}
.entete-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  padding-top: 14px;
  padding-bottom: 14px;
}
.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.4rem;
  font-weight: 800;
  font-family: 'Baloo 2', sans-serif;
  color: var(--texte-clair);
}
.logo-piece {
  width: 32px;
  height: 32px;
}
.nav {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}
.lien-nav {
  padding: 8px 14px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--texte-muet);
}
.lien-nav:hover {
  color: var(--texte-clair);
  background: rgba(255, 255, 255, 0.06);
}
.lien-nav.router-link-exact-active {
  color: #14140a;
  background: var(--encre-vertjus);
}
.actions-entete {
  display: flex;
  align-items: center;
  gap: 10px;
}
.panier-btn {
  position: relative;
}
.compteur-panier {
  background: var(--encre-rose);
  color: white;
  border-radius: 999px;
  font-size: 0.7rem;
  padding: 1px 7px;
  margin-left: 2px;
}
.session {
  display: flex;
  align-items: center;
  gap: 8px;
}
.pseudo {
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--texte-muet);
}
.pied {
  text-align: center;
  padding: 24px;
  color: var(--texte-muet);
  font-size: 0.85rem;
  background: var(--fond-noir);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  margin-top: auto;
}
</style>
