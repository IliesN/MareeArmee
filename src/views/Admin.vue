<script setup>
import { store } from '../data/store'
import ListeArticles from '../components/ListeArticles.vue'

function supprimer(id) {
  store.supprimerArticle(id)
}
</script>

<template>
  <h1>Espace administration</h1>
  <p class="intro">
    Bienvenue <strong>{{ store.utilisateur?.pseudo }}</strong>. Voici tous les articles du catalogue,
    tu peux les supprimer directement d'ici.
  </p>

  <p class="resultats">{{ store.articles.length }} article(s) au total</p>

  <ListeArticles
    :articles="store.articles"
    :par-page="10"
    :mode-admin="true"
    @supprimer="supprimer"
  />
</template>

<style scoped>
.intro {
  color: var(--texte-muet);
  margin-bottom: 6px;
}
.resultats {
  color: var(--texte-muet);
  font-size: 0.85rem;
  margin-bottom: 4px;
}
</style>
