<script setup>
import { reactive, computed } from 'vue'
import { categories } from '../data/articles'
import { brands } from '../data/brands'
import { listeIcones } from '../data/icones'

const emit = defineEmits(['ajouter'])

const form = reactive({
  nom: '',
  marque: '',
  categorie: '',
  prix: null,
  icone: '',
  description: '',
})

const erreurs = reactive({})

const iconeChoisie = computed(() => listeIcones.find((i) => i.id === form.icone))

function valider() {
  Object.keys(erreurs).forEach((k) => delete erreurs[k])

  if (!form.nom.trim()) erreurs.nom = 'Le nom est obligatoire.'
  if (!form.marque) erreurs.marque = 'Choisis une marque.'
  if (!form.categorie) erreurs.categorie = 'Choisis une catégorie.'
  if (!form.prix || form.prix <= 0) erreurs.prix = 'Le prix doit être un nombre positif.'
  if (!form.icone) erreurs.icone = 'Choisis une icône.'

  return Object.keys(erreurs).length === 0
}

function soumettre() {
  if (!valider()) return

  emit('ajouter', {
    nom: form.nom.trim(),
    marque: form.marque,
    categorie: form.categorie,
    prix: Number(form.prix),
    image: iconeChoisie.value.src,
    description: form.description.trim() || 'Un nouvel article fraîchement encré.',
  })

  // Réinitialisation du formulaire
  form.nom = ''
  form.marque = ''
  form.categorie = ''
  form.prix = null
  form.icone = ''
  form.description = ''
}
</script>

<template>
  <form class="carte formulaire" @submit.prevent="soumettre">
    <div class="champ">
      <label for="nom">Nom de l'article</label>
      <input id="nom" v-model="form.nom" type="text" placeholder="Ex : Splattershot Custom" />
      <p v-if="erreurs.nom" class="erreur">{{ erreurs.nom }}</p>
    </div>

    <div class="ligne-2">
      <div class="champ">
        <label for="marque">Marque</label>
        <select id="marque" v-model="form.marque">
          <option value="" disabled>Sélectionner une marque</option>
          <option v-for="m in brands" :key="m.id" :value="m.id">{{ m.nom }}</option>
        </select>
        <p v-if="erreurs.marque" class="erreur">{{ erreurs.marque }}</p>
      </div>

      <div class="champ">
        <label for="categorie">Catégorie</label>
        <select id="categorie" v-model="form.categorie">
          <option value="" disabled>Sélectionner une catégorie</option>
          <option v-for="c in categories" :key="c" :value="c">{{ c }}</option>
        </select>
        <p v-if="erreurs.categorie" class="erreur">{{ erreurs.categorie }}</p>
      </div>
    </div>

    <div class="ligne-2">
      <div class="champ">
        <label for="prix">Prix (pièces Splatoon)</label>
        <input id="prix" v-model.number="form.prix" type="number" min="1" placeholder="Ex : 1200" />
        <p v-if="erreurs.prix" class="erreur">{{ erreurs.prix }}</p>
      </div>

      <div class="champ">
        <label for="icone">Icône de l'arme</label>
        <select id="icone" v-model="form.icone">
          <option value="" disabled>Choisir une icône</option>
          <option v-for="i in listeIcones" :key="i.id" :value="i.id">{{ i.label }}</option>
        </select>
        <p v-if="erreurs.icone" class="erreur">{{ erreurs.icone }}</p>
      </div>
    </div>

    <div v-if="iconeChoisie" class="apercu">
      <img :src="iconeChoisie.src" :alt="iconeChoisie.label" />
      <span>Aperçu de l'icône choisie</span>
    </div>

    <div class="champ">
      <label for="description">Description (optionnel)</label>
      <textarea
        id="description"
        v-model="form.description"
        rows="3"
        placeholder="Décris l'article en quelques mots..."
      ></textarea>
    </div>

    <button type="submit" class="btn btn-primaire">✅ Ajouter au catalogue</button>
  </form>
</template>

<style scoped>
.formulaire {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 560px;
}
.ligne-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
@media (max-width: 520px) {
  .ligne-2 {
    grid-template-columns: 1fr;
  }
}
.erreur {
  color: var(--danger);
  font-size: 0.8rem;
  margin: 4px 0 0;
  font-weight: 700;
}
.apercu {
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--fond-puce);
  border-radius: 10px;
  padding: 10px 14px;
}
.apercu img {
  width: 48px;
  height: 48px;
  object-fit: contain;
}
.apercu span {
  font-size: 0.85rem;
  color: var(--texte-muet);
}
</style>
