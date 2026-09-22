<script setup>
import { getBrandById } from '../data/brands'

defineProps({
  articles: { type: Array, required: true },
})

const emit = defineEmits(['retirer'])

function retirer(index) {
  emit('retirer', index)
}
</script>

<template>
  <div>
    <p v-if="articles.length === 0" class="vide">
      🛒 Ton panier est vide pour le moment. Direction <RouterLink to="/articles">les articles</RouterLink> !
    </p>

    <ul v-else class="liste-panier">
      <li v-for="(article, index) in articles" :key="index" class="ligne-panier carte">
        <img :src="article.image" :alt="article.nom" class="mini-image" />
        <div class="infos-ligne">
          <span class="nom">{{ article.nom }}</span>
          <span class="marque" v-if="getBrandById(article.marque)">
            {{ getBrandById(article.marque).nom }}
          </span>
        </div>
        <span class="prix">
          <img src="../assets/coin.png" class="piece" alt="pièces" />
          {{ article.prix.toLocaleString('fr-FR') }}
        </span>
        <button class="btn btn-danger btn-petit" @click="retirer(index)">Retirer</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.liste-panier {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.ligne-panier {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px;
}
.mini-image {
  width: 48px;
  height: 48px;
  object-fit: contain;
  background: var(--fond-puce);
  border-radius: 10px;
  padding: 6px;
  flex-shrink: 0;
}
.infos-ligne {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
}
.nom {
  font-weight: 700;
  font-family: 'Baloo 2', sans-serif;
}
.marque {
  font-size: 0.78rem;
  color: var(--texte-muet);
}
</style>
