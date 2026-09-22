<script setup>
import { ref } from 'vue'
import { store } from '../data/store'
import FormulaireArticle from '../components/FormulaireArticle.vue'

const confirmation = ref(false)

function ajouterArticle(article) {
  store.ajouterArticle(article)
  confirmation.value = true
  window.scrollTo({ top: 0, behavior: 'smooth' })
  setTimeout(() => (confirmation.value = false), 3000)
}
</script>

<template>
  <h1>Ajouter un article</h1>
  <p class="intro">
    Complète le formulaire ci-dessous pour ajouter une nouvelle arme au catalogue de Marée Armée.
  </p>

  <p v-if="confirmation" class="confirmation">
    ✅ Article ajouté avec succès au catalogue ! Va le retrouver dans <RouterLink to="/articles">la liste des articles</RouterLink>.
  </p>

  <FormulaireArticle @ajouter="ajouterArticle" />
</template>

<style scoped>
.intro {
  color: var(--texte-muet);
  margin-bottom: 20px;
}
.confirmation {
  background: rgba(53, 224, 122, 0.15);
  border: 1px solid var(--succes);
  color: var(--succes);
  padding: 12px 16px;
  border-radius: 10px;
  margin-bottom: 20px;
  font-weight: 700;
}
</style>
