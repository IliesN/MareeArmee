<script setup>
import { ref, computed } from 'vue'
import { store } from '../data/store'
import { categories } from '../data/articles'
import { getBrandById } from '../data/brands'
import BarreRecherche from '../components/BarreRecherche.vue'
import ListeArticles from '../components/ListeArticles.vue'

const recherche = ref('')
const categorieSelectionnee = ref('')
const messageAjout = ref('')

const articlesFiltres = computed(() => {
  const texte = recherche.value.trim().toLowerCase()

  return store.articles.filter((article) => {
    const marque = getBrandById(article.marque)
    const correspondTexte =
      !texte ||
      article.nom.toLowerCase().includes(texte) ||
      (marque && marque.nom.toLowerCase().includes(texte))
    const correspondCategorie =
      !categorieSelectionnee.value || article.categorie === categorieSelectionnee.value

    return correspondTexte && correspondCategorie
  })
})

function ajouterAuPanier(article) {
  store.ajouterAuPanier(article)
  messageAjout.value = `${article.nom} ajouté au panier !`
  setTimeout(() => (messageAjout.value = ''), 2000)
}
</script>

<template>
  <h1>Tous les articles</h1>

  <BarreRecherche
    v-model:recherche="recherche"
    v-model:categorie-selectionnee="categorieSelectionnee"
    :categories="categories"
  />

  <p v-if="messageAjout" class="confirmation">✅ {{ messageAjout }}</p>

  <p class="resultats">{{ articlesFiltres.length }} article(s) trouvé(s)</p>

  <ListeArticles
    :articles="articlesFiltres"
    :par-page="8"
    @ajouter-panier="ajouterAuPanier"
  />
</template>

<style scoped>
.resultats {
  color: var(--texte-muet);
  margin: 14px 2px 0;
  font-size: 0.85rem;
}
.confirmation {
  background: rgba(53, 224, 122, 0.15);
  border: 1px solid var(--succes);
  color: var(--succes);
  padding: 10px 16px;
  border-radius: 10px;
  margin-top: 14px;
  font-weight: 700;
}
</style>
