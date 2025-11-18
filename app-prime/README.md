# 🔢 Générateur de Nombres Premiers Optimisé

Une application web interactive pour générer, vérifier et deviner des nombres premiers. Construite avec **React**, **Vite**, **TailwindCSS** et **Zustand**.

---

## 📋 Table des matières

- [Fonctionnalités](#-fonctionnalités)
- [Architecture](#-architecture)
- [Installation et lancement](#-installation-et-lancement)
- [Structure du projet](#-structure-du-projet)
- [Technologies utilisées](#-technologies-utilisées)
- [Comment ça fonctionne](#-comment-ça-fonctionne)

---

## ✨ Fonctionnalités

### 1. 🎲 Générateur de nombres premiers

- Génère automatiquement un nombre premier aléatoire
- Le nombre s'actualise **toutes les secondes**
- Affichage en temps réel avec gestion de l'état

### 2. ✓ Vérificateur de nombres premiers

- Interface permettant de saisir un nombre personnalisé
- Vérification instantanée pour déterminer si le nombre est premier
- Retour utilisateur clair (✓ "C'est un nombre premier" ou ✗ "Ce n'est pas un nombre premier")

### 3. 🎮 Mini-jeu interactif

- Un nombre aléatoire est généré
- L'utilisateur doit deviner si le nombre est premier ou non
- Deux boutons : **Vrai** et **Faux**
- Retour immédiat sur la réponse (correcte ou incorrecte)
- Bouton "Nouveau Nombre" pour passer à la question suivante
- Système de désactivation des boutons après une réponse pour éviter les clics multiples

---

## 🏗️ Architecture

### Choix architecturaux

L'application suit une architecture **modulaire et orientée composants** avec séparation des responsabilités :

#### 1. **Gestion d'état globale avec Zustand**

- **`usePrimeStore.js`** : État global pour la vérification des nombres premiers
  - Stocke le nombre actuel, le résultat de la vérification
  - Contient la liste de 25 premiers nombres premiers (référence)
- **`useGamePrimeStore.js`** : État global spécifique au mini-jeu
  - Gère l'état du jeu (nombre, résultat, boutons désactivés)
  - Trace quel bouton a été cliqué (true/false)

**Avantage** : État centralisé, facile à déboguer et à maintenir

#### 2. **Hooks personnalisés pour la logique métier**

- **`usePrimeAlea.jsx`** : Génère un nombre premier aléatoire avec rafraîchissement auto (1 seconde)
- **`useGamePrimeAlea.jsx`** : Génère un nombre premier aléatoire pour le mini-jeu

**Avantage** : Logique réutilisable et séparation des effets secondaires

#### 3. **Service de vérification**

- **`isPrime.service.js`** : Fonction pure pour tester si un nombre est premier
  - Algorithme optimisé avec boucle jusqu'à √n
  - Pas de dépendances externes

#### 4. **Routage avec TanStack Router**

- `/` : Page d'accueil
- `/generateprime` : Générateur de nombres premiers
- `/prime` : Vérificateur
- `/minigame` : Mini-jeu

**Avantage** : Navigation type SPA avec routage déclaratif

#### 5. **Styling avec TailwindCSS**

- Classes utilitaires pour un design cohérent et responsive
- Réduction du CSS custom

---

## 📦 Installation et lancement

### Prérequis

- **Node.js** ≥ 18
- **npm** ou **yarn**

### Étapes

1. **Cloner ou télécharger le projet**

   ```bash
   cd app-prime
   ```

2. **Installer les dépendances**

   ```bash
   npm install
   ```

3. **Lancer en mode développement**

   ```bash
   npm run dev
   ```

   L'application s'ouvrira sur `http://localhost:5173`

4. **Construire pour la production**

   ```bash
   npm run build
   ```

5. **Prévisualiser la build production**

   ```bash
   npm run preview
   ```

6. **Linter le code**
   ```bash
   npm run lint
   ```

---

## 📁 Structure du projet

```
src/
├── App.jsx                          # Composant racine
├── main.jsx                         # Point d'entrée
├── index.css                        # Styles globaux
│
├── components/                      # Composants réutilisables
│   ├── CheckPrime.jsx              # Vérificateur de nombres
│   ├── GeneratePrime.jsx           # Générateur
│   ├── MiniGame.jsx                # Mini-jeu
│   └── ui/
│       └── Button.jsx              # Bouton réutilisable
│
├── hooks/                           # Hooks personnalisés
│   ├── usePrimeAlea.jsx            # Hook pour générer nombres premiers
│   └── useGamePrimeAlea.jsx        # Hook pour le mini-jeu
│
├── pages/                           # Pages complètes (layout)
│   ├── GeneratePrime.jsx
│   ├── MiniGamePage.jsx
│   └── PrimePage.jsx
│
├── routes/                          # Configuration TanStack Router
│   ├── __root.jsx                  # Layout racine
│   ├── index.jsx                   # Route /
│   ├── generateprime.jsx           # Route /generateprime
│   ├── prime.jsx                   # Route /prime
│   └── minigame.jsx                # Route /minigame
│
├── services/                        # Logique métier
│   └── isPrime.service.js          # Fonction vérification nombres premiers
│
├── schemas/                         # Validation (Zod)
│   └── numberSchema.jsx
│
└── stores/                          # État global (Zustand)
    ├── usePrimeStore.js
    └── useGamePrimeStore.js
```

---

## 🛠️ Technologies utilisées

| Technologie         | Version | Rôle                            |
| ------------------- | ------- | ------------------------------- |
| **React**           | 19.2.0  | Framework UI                    |
| **Vite**            | 7.2.2   | Bundler et dev server           |
| **TailwindCSS**     | 4.1.17  | Styling utilitaire              |
| **TanStack Router** | 1.136.1 | Routage SPA                     |
| **Zustand**         | 5.0.8   | Gestion d'état globale          |
| **Zod**             | 4.1.12  | Validation de schémas           |
| **React Query**     | 5.90.9  | Gestion des données asynchrones |
| **ESLint**          | 9.39.1  | Linting du code                 |

---

## 💡 Comment ça fonctionne

### 1️⃣ Génération de nombres premiers

L'algorithme de vérification optimisé (`isPrime.service.js`) :

```javascript
- Rejette les nombres < 2
- Vérifie rapidement 2 et les pairs
- Teste la divisibilité jusqu'à √n avec uniquement les nombres impairs
- Complexité : O(√n)
```

### 2️⃣ Rafraîchissement automatique (Générateur)

- Un hook `usePrimeAlea` utilise `React Query` pour gérer les appels asynchrones
- Un intervalle est configuré pour rafraîchir les données toutes les 1000ms
- Le composant reçoit un nouveau nombre premier toutes les secondes

### 3️⃣ Gestion d'état du mini-jeu

1. Un nombre aléatoire est généré
2. L'utilisateur clique sur "Vrai" ou "Faux"
3. La réponse est vérifiée et comparée avec le résultat attendu
4. Les boutons sont désactivés pour éviter les multiples soumissions
5. Un message de feedback s'affiche
6. Bouton "Nouveau Nombre" pour relancer une partie

### 4️⃣ Validation des entrées

- Les entrées utilisateur sont converties en nombres
- Les entrées invalides affichent `null` (pas de résultat)
- Utilisation de `Number.isNaN()` pour la détection robuste

---

## 🎯 Points clés de l'implémentation

✅ **Séparation des responsabilités** : Logique métier dans les services, UI dans les composants  
✅ **État centralisé** : Zustand pour un state management simple et performant  
✅ **Hooks réutilisables** : Logique factorisée dans des hooks personnalisés  
✅ **Performance** : Algorithme O(√n) pour la vérification des nombres premiers  
✅ **UX** : Retours utilisateur clairs et désactivation des actions pendant le traitement  
✅ **Maintenabilité** : Code modulaire, facile à tester et à étendre

---

## 📝 Licence

Projet réalisé dans le cadre d'un TP (Travail Pratique)
