<script setup>
import { store } from '../data/store'
import Panier from '../components/Panier.vue'

function retirer(index) {
  store.retirerDuPanier(index)
}

function viderPanier() {
  if (confirm('Vider complètement le panier ?')) {
    store.viderPanier()
  }
}
</script>

<template>
  <h1>Mon panier</h1>

  <Panier :articles="store.panier" @retirer="retirer" />

  <div v-if="store.panier.length" class="recap carte">
    <span>Total</span>
    <span class="prix total">
      <img src="../assets/coin.png" class="piece" alt="pièces" />
      {{ store.totalPanier.toLocaleString('fr-FR') }}
    </span>
  </div>

  <div v-if="store.panier.length" class="actions-panier">
    <button class="btn btn-secondaire" @click="viderPanier">Vider le panier</button>
    <button class="btn btn-primaire">Passer commande</button>
  </div>
</template>

<style scoped>
.recap {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: 1.1rem;
}
.total {
  font-size: 1.4rem;
}
.actions-panier {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 16px;
  flex-wrap: wrap;
}
</style>
