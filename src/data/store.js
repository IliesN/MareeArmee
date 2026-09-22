import { reactive } from 'vue'
import { articlesInitiaux } from './articles'

// Tout est stocké en mémoire (tableaux réactifs) : rien n'est envoyé à une API.
// Les composants lisent cet état via des props et remontent les actions via des events,
// qui appellent ensuite les méthodes exposées ici.
export const store = reactive({
  articles: [...articlesInitiaux],
  panier: [],
  utilisateur: null, // null = non connecté, sinon { pseudo: '...' }

  // -- Articles --
  ajouterArticle(article) {
    const nouvelId = this.articles.length
      ? Math.max(...this.articles.map((a) => a.id)) + 1
      : 1
    this.articles.push({ id: nouvelId, ...article })
  },

  supprimerArticle(id) {
    this.articles = this.articles.filter((a) => a.id !== id)
    // On retire aussi l'article du panier s'il y était
    this.panier = this.panier.filter((a) => a.id !== id)
  },

  getArticleById(id) {
    return this.articles.find((a) => a.id === Number(id))
  },

  // -- Panier --
  ajouterAuPanier(article) {
    this.panier.push(article)
  },

  retirerDuPanier(index) {
    this.panier.splice(index, 1)
  },

  viderPanier() {
    this.panier = []
  },

  get totalPanier() {
    return this.panier.reduce((total, a) => total + a.prix, 0)
  },

  // -- Session (basique, sans vraie authentification) --
  login(pseudo) {
    this.utilisateur = { pseudo }
  },

  logout() {
    this.utilisateur = null
  },

  get estConnecte() {
    return this.utilisateur !== null
  },
})
