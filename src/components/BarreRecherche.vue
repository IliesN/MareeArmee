<script setup>
defineProps({
  recherche: { type: String, default: '' },
  categorieSelectionnee: { type: String, default: '' },
  categories: { type: Array, default: () => [] },
})

const emit = defineEmits(['update:recherche', 'update:categorieSelectionnee'])

function onInput(e) {
  emit('update:recherche', e.target.value)
}

function onCategorie(e) {
  emit('update:categorieSelectionnee', e.target.value)
}
</script>

<template>
  <div class="barre-recherche carte">
    <div class="champ-recherche">
      <span class="icone">🔍</span>
      <input
        type="text"
        placeholder="Rechercher une arme, une marque..."
        :value="recherche"
        @input="onInput"
      />
    </div>

    <select :value="categorieSelectionnee" @change="onCategorie" class="filtre-categorie">
      <option value="">Toutes les catégories</option>
      <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
    </select>
  </div>
</template>

<style scoped>
.barre-recherche {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
  padding: 14px 16px;
}
.champ-recherche {
  flex: 1;
  min-width: 220px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--fond-puce);
  border: 2px solid rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  padding: 0 12px;
}
.champ-recherche input {
  border: none;
  background: transparent;
  padding: 10px 0;
}
.champ-recherche input:focus {
  border: none;
  outline: none;
}
.filtre-categorie {
  max-width: 220px;
}
</style>
