# Creation du projet
npm create vite@latest projet_name nous permet de crééer un projet avec vite
## cd 001
cette commande nous permet d'acceder au projet
### npm install 
celle ci installe tous les dependances necessaires pour le bon fonctionnement du projet
#### npm run dev
La commande npm run dev lance le serveur de developpement
##### Notion de linter
un linter est un outil aui analyse le code pour detecter certains erreurs et signaler les mauvaises pratiques
 pourquoi le fichier package.json??
 Le fichier package.json est un fichier de configuration qui décrit le projet JavaScript.

Il permet notamment de :
- Définir le nom et la version du projet.
- Déclarer les bibliothèques utilisées.
- Définir les commandes permettant de lancer et de construire le projet.
- Préciser certaines informations sur l'environnement JavaScript.
 Dans ce fichier on trouve deux sous parties a savoir:
 ##### dependencies
 cette partie declare les bibiotheques dont l'application a besoin pour fonctionner
 ##### devDependencies
 Elle regroupe les outils utilises principalement pendant le developpement du projet
 Pourquoi les fichiers sont-ils en .jsx au lieu de .js??
 JavaScript est un langage de programmation
 JSX est une syntaxe qui permet d'ecrire une structure ressemblant a du HTML directement dans le code JS
 React n'oblige pas a utiliser .jsx  c'est simplement un choix courant pour les fichiers contenant des composants
 ######  main.jsx
 Importe React et les outils necessaires puis le composant principal App.jsx
 Connecte React au HTML généralement à l'élément ayant l'identifiant root 
 Afficher l'appli dans le navigateur
 En d'autres termes le main.jsx est la porte d'entrée par laquelle l'application React commence à fonctionner
