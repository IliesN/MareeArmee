<script setup>
import { getBrandById } from '../data/brands'

const props = defineProps({
  article: { type: Object, required: true },
  modeAdmin: { type: Boolean, default: false }, // affiche le bouton "supprimer"
})

const emit = defineEmits(['ajouter-panier', 'supprimer'])

const marque = getBrandById(props.article.marque)

function ajouter() {
  emit('ajouter-panier', props.article)
}

function supprimer() {
  if (confirm(`Supprimer "${props.article.nom}" du catalogue ?`)) {
    emit('supprimer', props.article.id)
  }
}
</script>

<template>
  <div class="carte article-carte">
    <RouterLink :to="`/article/${article.id}`" class="lien-image">
      <img :src="article.image" :alt="article.nom" class="image-article" />
      <span class="badge badge-categorie">{{ article.categorie }}</span>
    </RouterLink>

    <div class="contenu-article">
      <div class="marque-ligne" v-if="marque">
        <img :src="marque.logo" :alt="marque.nom" class="logo-marque" />
        <span>{{ marque.nom }}</span>
      </div>

      <RouterLink :to="`/article/${article.id}`" class="nom-article">{{ article.nom }}</RouterLink>

      <div class="bas-carte">
        <span class="prix">
          <img src="../assets/coin.png" class="piece" alt="pièces" />
          {{ article.prix.toLocaleString('fr-FR') }}
        </span>

        <div class="boutons-carte">
          <button class="btn btn-primaire btn-petit" @click="ajouter">+ Panier</button>
          <button v-if="modeAdmin" class="btn btn-danger btn-petit" @click="supprimer">
            Suppr.
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.article-carte {
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.article-carte:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
}
.lien-image {
  position: relative;
  display: block;
  background: radial-gradient(circle at 50% 30%, var(--fond-carte-claire), var(--fond-puce));
  padding: 22px;
}
.image-article {
  width: 100%;
  height: 110px;
  object-fit: contain;
  display: block;
}
.badge-categorie {
  position: absolute;
  top: 10px;
  right: 10px;
}
.contenu-article {
  padding: 14px 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.marque-ligne {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.78rem;
  color: var(--texte-muet);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.logo-marque {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  object-fit: contain;
  background: white;
}
.nom-article {
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
}
.bas-carte {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 6px;
  gap: 8px;
  flex-wrap: wrap;
}
.boutons-carte {
  display: flex;
  gap: 6px;
}
</style>
