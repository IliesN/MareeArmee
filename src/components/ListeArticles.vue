<script setup>
import { ref, computed, watch } from 'vue'
import ArticleItem from './ArticleItem.vue'

const props = defineProps({
  articles: { type: Array, required: true },
  parPage: { type: Number, default: 8 },
  modeAdmin: { type: Boolean, default: false },
})

const emit = defineEmits(['ajouter-panier', 'supprimer'])

const pageActuelle = ref(1)

const totalPages = computed(() =>
  Math.max(1, Math.ceil(props.articles.length / props.parPage))
)

const articlesPage = computed(() => {
  const debut = (pageActuelle.value - 1) * props.parPage
  return props.articles.slice(debut, debut + props.parPage)
})

// Si la recherche/filtre change et réduit le nombre de pages, on revient sur une page valide
watch(
  () => props.articles,
  () => {
    if (pageActuelle.value > totalPages.value) {
      pageActuelle.value = totalPages.value
    }
  }
)

function pagePrecedente() {
  if (pageActuelle.value > 1) pageActuelle.value--
}
function pageSuivante() {
  if (pageActuelle.value < totalPages.value) pageActuelle.value++
}
</script>

<template>
  <div>
    <p v-if="articles.length === 0" class="vide">
      🦑 Aucun article ne correspond à ta recherche pour le moment.
    </p>

    <div v-else class="grille-articles">
      <ArticleItem
        v-for="article in articlesPage"
        :key="article.id"
        :article="article"
        :mode-admin="modeAdmin"
        @ajouter-panier="emit('ajouter-panier', $event)"
        @supprimer="emit('supprimer', $event)"
      />
    </div>

    <div class="pagination" v-if="articles.length > parPage">
      <button class="btn btn-secondaire btn-petit" :disabled="pageActuelle === 1" @click="pagePrecedente">
        ← Précédent
      </button>
      <span>Page {{ pageActuelle }} / {{ totalPages }}</span>
      <button
        class="btn btn-secondaire btn-petit"
        :disabled="pageActuelle === totalPages"
        @click="pageSuivante"
      >
        Suivant →
      </button>
    </div>
  </div>
</template>
