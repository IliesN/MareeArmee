<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { store } from '../data/store'
import { getBrandById } from '../data/brands'

const route = useRoute()
const messageAjout = ref(false)

const article = computed(() => store.getArticleById(route.params.id))
const marque = computed(() => (article.value ? getBrandById(article.value.marque) : null))

function ajouterAuPanier() {
  store.ajouterAuPanier(article.value)
  messageAjout.value = true
  setTimeout(() => (messageAjout.value = false), 2000)
}
</script>

<template>
  <div v-if="article" class="detail">
    <RouterLink to="/articles" class="retour">← Retour aux articles</RouterLink>

    <div class="carte fiche">
      <div class="image-zone">
        <img :src="article.image" :alt="article.nom" />
      </div>

      <div class="infos-zone">
        <span class="badge">{{ article.categorie }}</span>
        <h1>{{ article.nom }}</h1>

        <div v-if="marque" class="marque-detail">
          <img :src="marque.logo" :alt="marque.nom" />
          <span>Marque : <strong>{{ marque.nom }}</strong></span>
        </div>

        <p class="description">{{ article.description }}</p>

        <p class="prix-detail">
          <img src="../assets/coin.png" class="piece" alt="pièces" />
          {{ article.prix.toLocaleString('fr-FR') }} pièces Splatoon
        </p>

        <button class="btn btn-primaire" @click="ajouterAuPanier">🛒 Ajouter au panier</button>
        <p v-if="messageAjout" class="confirmation">✅ Ajouté au panier !</p>
      </div>
    </div>
  </div>

  <div v-else class="vide">
    <p>😢 Cet article n'existe pas (ou a été supprimé).</p>
    <RouterLink to="/articles" class="btn btn-secondaire">Retour aux articles</RouterLink>
  </div>
</template>

<style scoped>
.retour {
  display: inline-block;
  margin-bottom: 16px;
  color: var(--texte-muet);
  font-weight: 700;
}
.retour:hover {
  color: var(--texte-clair);
}
.fiche {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 30px;
}
@media (max-width: 640px) {
  .fiche {
    grid-template-columns: 1fr;
  }
}
.image-zone {
  background: radial-gradient(circle at 50% 30%, var(--fond-carte-claire), var(--fond-puce));
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
}
.image-zone img {
  width: 100%;
  max-width: 220px;
  object-fit: contain;
}
.infos-zone h1 {
  margin: 10px 0 14px;
  font-size: 1.8rem;
}
.marque-detail {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}
.marque-detail img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: white;
  object-fit: contain;
}
.description {
  color: var(--texte-muet);
  line-height: 1.6;
  margin-bottom: 20px;
}
.prix-detail {
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--encre-jaune);
  margin-bottom: 20px;
}
.prix-detail .piece {
  height: 1.1em;
  width: 1.1em;
}
.confirmation {
  color: var(--succes);
  font-weight: 700;
  margin-top: 10px;
}
</style>
