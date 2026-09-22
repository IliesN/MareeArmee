import { icones } from './icones'

// Catégories (classes d'armes, noms francisés façon Splatoon)
export const categories = [
  'Flingueur',
  'Rouleau',
  'Sniper',
  'Éclabousseur',
  'Seau',
  'Duo',
  'Mitrailleur',
  'Parapluie',
  'Arc',
  'Pinceau',
  'Lame',
]

// 24 articles, chacun rattaché à une des 18 marques Splatoon
export const articlesInitiaux = [
  { id: 1, nom: 'Splattershot', marque: 'leviathus', categorie: 'Flingueur', prix: 1200, image: icones.Splattershot, description: "Le flingueur polyvalent par excellence, taillé pour l'encrage rapide de terrain." },
  { id: 2, nom: 'Tentatek Splattershot', marque: 'ef', categorie: 'Flingueur', prix: 1300, image: icones.TentatekSplattershot, description: 'Une variante nerveuse du Splattershot, prisée des attaquants agressifs.' },
  { id: 3, nom: 'Splat Roller', marque: 'krakers', categorie: 'Rouleau', prix: 1500, image: icones.SplatRoller, description: 'Rouleau standard, parfait pour recouvrir de larges zones en un passage.' },
  { id: 4, nom: 'Dynamo Roller', marque: 'ezko', categorie: 'Rouleau', prix: 2100, image: icones.DynamoRoller, description: 'Rouleau lourd à la portée impressionnante mais au maniement exigeant.' },
  { id: 5, nom: 'Splat Charger', marque: 'friture', categorie: 'Sniper', prix: 1800, image: icones.SplatCharger, description: 'Le sniper de référence : précision et portée pour contrôler la ligne de front.' },
  { id: 6, nom: 'E-liter 4K', marque: 'thony_k', categorie: 'Sniper', prix: 2800, image: icones.ELiter4K, description: 'Sniper longue portée équipé de la téléportation, redoutable en défense.' },
  { id: 7, nom: 'Blaster', marque: 'abysma', categorie: 'Éclabousseur', prix: 1100, image: icones.Blaster, description: "Éclabousseur classique à l'explosion directe redoutablement efficace." },
  { id: 8, nom: 'Rapid Blaster', marque: 'aroz', categorie: 'Éclabousseur', prix: 1400, image: icones.RapidBlaster, description: 'Cadence de tir rapide pour arroser une zone entière de projections.' },
  { id: 9, nom: 'Slosher', marque: 'focus', categorie: 'Seau', prix: 1000, image: icones.Slosher, description: "Un seau d'encre simple et fiable, capable d'atteindre par-dessus les obstacles." },
  { id: 10, nom: 'Tri-Slosher', marque: 'cubic', categorie: 'Seau', prix: 1250, image: icones.TriSlosher, description: 'Projection en éventail à courte portée, dévastateur en combat rapproché.' },
  { id: 11, nom: 'Splat Dualies', marque: 'jack', categorie: 'Duo', prix: 1350, image: icones.SplatDualies, description: "Duo d'armes permettant esquives et roulades pour un style très mobile." },
  { id: 12, nom: 'Glooga Dualies', marque: 'alpaj', categorie: 'Duo', prix: 1600, image: icones.GloogaDualies, description: 'Duo puissant à la cadence soutenue et au recul maîtrisé.' },
  { id: 13, nom: 'Heavy Splatling', marque: 'ocul_r', categorie: 'Mitrailleur', prix: 2400, image: icones.HeavySplatling, description: "Mitrailleur d'encre lourd, à charger avant de déverser un tir continu." },
  { id: 14, nom: 'Hydra Splatling', marque: 'apex', categorie: 'Mitrailleur', prix: 2900, image: icones.HydraSplatling, description: 'Le plus puissant des mitrailleurs, à la portée quasi inégalée une fois chargé.' },
  { id: 15, nom: 'Tenta Brella', marque: 'kalamarus_rex', categorie: 'Parapluie', prix: 2000, image: icones.TentaBrella, description: "Parapluie offrant un bouclier d'encre solide pour avancer en sécurité." },
  { id: 16, nom: 'Undercover Brella', marque: 'iormungand', categorie: 'Parapluie', prix: 1450, image: icones.UndercoverBrella, description: 'Petit parapluie léger, idéal pour tendre des embuscades.' },
  { id: 17, nom: 'Tri-Stringer', marque: 'lux', categorie: 'Arc', prix: 1750, image: icones.TriStringer, description: 'Arc triple tir à trajectoire courbe, parfait pour toucher derrière un couvert.' },
  { id: 18, nom: 'Inkbrush', marque: 'gedeon', categorie: 'Pinceau', prix: 900, image: icones.Inkbrush, description: 'Pinceau ultra rapide qui privilégie la mobilité à la puissance de feu.' },
  { id: 19, nom: 'Octobrush', marque: 'leviathus', categorie: 'Pinceau', prix: 1550, image: icones.Octobrush, description: 'Pinceau large à double frappe, redoutable au contact.' },
  { id: 20, nom: 'Splatana Wiper', marque: 'ef', categorie: 'Lame', prix: 1900, image: icones.SplatanaWiper, description: "Lame d'encre à l'onde de choc verticale, tranche à travers les défenses." },
  { id: 21, nom: 'Splatana Stamper', marque: 'krakers', categorie: 'Lame', prix: 2050, image: icones.SplatanaStamper, description: 'Lame lourde au tampon puissant, dévastatrice en un seul coup bien placé.' },
  { id: 22, nom: 'N-ZAP 85', marque: 'ezko', categorie: 'Flingueur', prix: 1050, image: icones.NZAP85, description: 'Flingueur léger et équilibré, un classique apprécié des débutants.' },
  { id: 23, nom: 'Carbon Roller', marque: 'friture', categorie: 'Rouleau', prix: 1300, image: icones.CarbonRoller, description: 'Rouleau léger aux projections rapides, très vif en combat rapproché.' },
  { id: 24, nom: 'Squeezer', marque: 'thony_k', categorie: 'Flingueur', prix: 1650, image: icones.Squeezer, description: 'Flingueur semi-automatique à tir précis, efficace à toute distance.' },
]
