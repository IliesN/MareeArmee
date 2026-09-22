<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { store } from '../data/store'

const router = useRouter()
const route = useRoute()

const pseudo = ref('')
const erreur = ref('')

function seConnecter() {
  if (!pseudo.value.trim()) {
    erreur.value = 'Entre un pseudo pour te connecter.'
    return
  }

  // Connexion "basique" : aucune vérification de mot de passe / API,
  // on simule juste une session en mémoire.
  store.login(pseudo.value.trim())
  router.push(route.query.redirect || '/admin')
}
</script>

<template>
  <div class="page-login">
    <div class="carte formulaire-login">
      <h1>Connexion</h1>
      <p class="intro">
        Connecte-toi pour accéder à l'espace d'administration.
      </p>

      <form @submit.prevent="seConnecter">
        <div class="champ">
          <label for="pseudo">Pseudo</label>
          <input id="pseudo" v-model="pseudo" type="text" placeholder="Ex : AgentEncre" />
        </div>
        <p v-if="erreur" class="erreur">{{ erreur }}</p>

        <button type="submit" class="btn btn-primaire">Se connecter</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.page-login {
  display: flex;
  justify-content: center;
  padding-top: 30px;
}
.formulaire-login {
  max-width: 380px;
  width: 100%;
}
.intro {
  color: var(--texte-muet);
  font-size: 0.9rem;
  margin-bottom: 18px;
}
.champ {
  margin-bottom: 16px;
}
.erreur {
  color: var(--danger);
  font-size: 0.8rem;
  margin: -8px 0 14px;
  font-weight: 700;
}
button {
  width: 100%;
  justify-content: center;
}
</style>
