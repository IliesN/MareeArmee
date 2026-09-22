# Marée Armée 🦑 — Mini-application Vue.js (TP Splatoon)

Mini-boutique en Vue 3 + Vue Router sur le thème de **Splatoon** : affichage,
recherche, ajout et suppression d'articles, navigation multi-pages, panier et
un espace admin protégé par une redirection simple vers `/login`.

## Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvre l'URL affichée dans le terminal (en général `http://localhost:5173`).

Pour générer une version de production :

```bash
npm run build
npm run preview
```

## Thème et données

- **Marques** : les 18 logos fournis dans `Marques_Splatoon.zip` (Leviathus, EF,
  Krakers, Ezko, Friture, Thony K., Abysma, Aroz, Focus, Cubic, Jack, Alpaj,
  OculR, Apex, Kalamarus Rex, Iormungand, LUX, Gedeon) -> `src/data/brands.js`.
- **Articles** : 24 armes tirées de `Splatoon_3_Weapons_Flat_Icons_-_Main_Weapons.zip`,
  chacune associée à une marque et une catégorie -> `src/data/articles.js`
  (les images sont centralisées dans `src/data/icones.js`).
- **Monnaie** : les prix sont affichés en **pièces Splatoon**, avec l'icône de
  pièce fournie (`src/assets/coin.png`) utilisée dans toute l'application
  (cartes, détail d'article, panier).

Toutes les données restent **en mémoire** (aucune API, aucune base de
données) : elles sont stockées dans `src/data/store.js`, un petit état
réactif partagé (`reactive()`), lu par les vues et modifié uniquement via
ses méthodes (`ajouterArticle`, `supprimerArticle`, `ajouterAuPanier`, etc.).
À l'intérieur d'une même page, la communication entre composants passe par
des **props** (données descendantes) et des **events** (`emit`, actions
remontantes), comme demandé dans l'énoncé.

## Structure du projet

```
src/
├─ assets/            # logos des marques, icônes d'armes, icône de pièce
├─ data/
│  ├─ brands.js        # les 18 marques
│  ├─ icones.js         # import centralisé des icônes d'armes
│  ├─ articles.js       # catalogue initial (24 articles) + catégories
│  └─ store.js          # état en mémoire partagé (articles, panier, session)
├─ router/
│  └─ index.js           # routes + garde de navigation pour /admin
├─ components/
│  ├─ BarreRecherche.vue    # recherche texte + filtre par catégorie
│  ├─ ListeArticles.vue     # grille paginée d'ArticleItem
│  ├─ ArticleItem.vue       # carte d'un article (+ bouton suppr. en mode admin)
│  ├─ FormulaireArticle.vue # formulaire d'ajout avec validation
│  └─ Panier.vue            # liste des articles du panier
├─ views/
│  ├─ Accueil.vue        # /
│  ├─ Articles.vue       # /articles
│  ├─ ArticleDetail.vue  # /article/:id
│  ├─ Ajouter.vue        # /ajouter
│  ├─ PanierPage.vue     # /panier
│  ├─ Login.vue          # /login
│  └─ Admin.vue          # /admin (protégée)
├─ App.vue             # barre de navigation + RouterView
└─ main.js             # point d'entrée (Vue + Router)
```

## Fonctionnalités bonus incluses

- Confirmation (`confirm()`) avant toute suppression d'article.
- Message de confirmation affiché après l'ajout d'un article et après
  l'ajout d'un article au panier.
- Filtre par catégorie en plus de la recherche texte.
- Mise en page et thème visuel personnalisés façon "encre" Splatoon.

## Protection de `/admin`

Il n'y a pas de vraie authentification : `router/index.js` contient un
`router.beforeEach` qui vérifie simplement si un utilisateur est "connecté"
(`store.estConnecte`, un booléen en mémoire). Si ce n'est pas le cas, il
redirige vers `/login`. Le formulaire de connexion se contente d'enregistrer
un pseudo, sans mot de passe ni vérification côté serveur.
