<script setup>
import { computed } from 'vue'
import { store } from '../data/store'
import ArticleItem from '../components/ArticleItem.vue'

function ajouterAuPanier(article) {
  store.ajouterAuPanier(article)
}

// On met en avant 3 articles au hasard à chaque visite
const vedettes = computed(() => {
  const copie = [...store.articles]
  for (let i = copie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copie[i], copie[j]] = [copie[j], copie[i]]
  }
  return copie.slice(0, 3)
})
</script>

<template>
  <section class="hero">
    <h1 class="titre-jeu">Marée Armée</h1>
    <p class="sous-titre">
      La boutique communautaire où les meilleures marques de la Zone Metropolis vendent leurs armes.
      Trouve ton équipement, ajoute-le au panier, et fais briller ton style d'encre !
    </p>
    <div class="hero-boutons">
      <RouterLink to="/articles" class="btn btn-primaire">Voir tous les articles</RouterLink>
      <RouterLink to="/ajouter" class="btn btn-cyan">Ajouter un article</RouterLink>
    </div>
  </section>

  <section>
    <h2>✨ Sélection du moment</h2>
    <div class="grille-articles">
      <ArticleItem
        v-for="article in vedettes"
        :key="article.id"
        :article="article"
        @ajouter-panier="ajouterAuPanier"
      />
    </div>
  </section>
</template>

<style scoped>
.hero {
  text-align: center;
  padding: 50px 10px 30px;
}
.hero h1 {
  font-family: 'Titan One', 'Baloo 2', sans-serif;
  font-size: 2.6rem;
  margin-bottom: 12px;
  color: var(--encre-vertjus);
  text-shadow: 2px 3px 0 rgba(0, 0, 0, 0.5);
  letter-spacing: 0.5px;
}
.sous-titre {
  max-width: 560px;
  margin: 0 auto 24px;
  color: var(--texte-muet);
  line-height: 1.5;
}
.hero-boutons {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
}
h2 {
  margin-top: 40px;
}
</style>
