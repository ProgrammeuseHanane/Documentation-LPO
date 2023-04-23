---
sidebar_position: 3
---
<table Style="width: 100%; border-top: 1px solid transparent;">
  <tr Style="display: flex;">
    <td Style="width: 4000px;   border: 1px solid transparent;  text-align: center; align: middle; margin-top:50px; ">

![image](/img/gestioncompte.png)

 </td>
 <td Style=" border: 1px solid transparent;">
<th>

Le dossier *Admin* et *Observateur* est un sous dossier de dossier pages qui contient l'ensemble des pages de notre application. Ce dernier contient les pages liées a la Gestion des comptes par l'Adminstrateur(Tous les comptes) et l'Observateur(Son compte) [plus de détail dans les sections précédentes]
</th>


## Adminstrateur

- Le Fichier ***form.jsx*** du dossier *createAccount* est une fonction React qui crée un formulaire pour créer un compte utilisateur. Elle utilise des composants MUI (Material-UI) tels que TextField, Box, Button, Stack, Select et MenuItem pour afficher différents champs de saisie pour les informations de l'utilisateur.
Le formulaire contient également une liste déroulante pour sélectionner le rôle de l'utilisateur, avec des options prédéfinies dans la constante ROLES.Ce formulaire effectue également des validations pour les champs d'email, de mot de passe et de rôle, et affiche des messages d'erreur appropriés si les informations saisies ne sont pas valides.

En outre, le formulaire utilise le composant CircularProgress pour afficher une icône de chargement pendant que les données de l'utilisateur sont en cours de traitement.

- Le Fichier ***index.jsx*** du dossier *createAccount* est un composant React pour créer un nouveau compte utilisateur. Il utilise des dépendances telles que "react", "react-redux" et "@mui/material" pour la mise en forme des composants.Ce composant crée un état local "info" avec des champs tels que "prenom", "nom", "adresse1", "adresse2", "ville", "password", "telephone", "code", "code_postal", "roles", "email". Lorsque l'utilisateur saisit des informations dans les champs de formulaire, la fonction handleChange est appelée pour mettre à jour l'état local.Ce dernier utilise également une fonction verify_info_valid_create pour vérifier si les champs obligatoires sont remplis et si le format du mot de passe, de l'e-mail et du numéro de téléphone est correct. Si la vérification réussit, il appelle une fonction handleClick pour créer un nouveau compte utilisateur en dispatchant l'action "createAccount" vers Redux.Le composant utilise également un composant "CustomSnackBar" pour afficher des messages d'erreur ou de succès lorsqu'un compte est créé ou qu'une erreur se produit.

- Le Fichier ***index.jsx*** du dossier *editAccount* code est un composant React pour la fonctionnalité d'édition de compte utilisateur pour un administrateur. Il utilise des hooks React comme useState, useEffect et useSelector, ainsi que des composants MUI tels que Paper et CircularProgress. Il utilise également react-router-dom pour la navigation entre les pages.Ce composant récupère l'ID de l'utilisateur à éditer à partir des paramètres d'URL et utilise le useEffect pour récupérer les informations de l'utilisateur à partir du backend via Redux. Le composant affiche ensuite un formulaire pré-rempli avec les informations récupérées de l'utilisateur.

Lorsque l'utilisateur apporte des modifications et soumet le formulaire, le composant vérifie que les informations saisies sont valides à l'aide de la fonction verify_info_valid_edit et envoie les modifications au backend via Redux. Si la modification est réussie, le composant affiche un message de confirmation avec un CustomSnackBar.

## Observateur

- Le Fichier ***index.jsx*** est un composant React appelé MyAccount. Il importe des modules tels que Stack, Paper et MesInfos et utilise des hooks tels que useDispatch, useSelector et useState. Il utilise également la fonction jwt_decode pour décoder un jeton JWT stocké dans le stockage local.Ce composant crée un état initial pour les informations d'utilisateur avec des champs tels que le nom, le prénom, l'adresse, le code postal, le téléphone et le mot de passe. Le champ "roles" est également initialisé avec un tableau vide.Il y a une fonction handleClick qui est appelée lorsque l'utilisateur clique sur le bouton de modification d'informations d'utilisateur. Cette fonction appelle la fonction editAccount avec les informations d'utilisateur mises à jour et stockées dans l'état.

Le composant utilise également un hook personnalisé appelé useSnackBar pour afficher des messages d'erreur ou de succès dans un CustomSnackBar.

- Le Fichier ***changePassword.jsx***   est une implémentation d'une fonctionnalité de changement de mot de passe à plusieurs étapes. Il utilise des composants de la bibliothèque Material-UI pour créer une interface utilisateur conviviale pour l'utilisateur final. Il valide également les entrées de l'utilisateur à chaque étape pour s'assurer qu'elles sont valides avant de passer à l'étape suivante. Une fois toutes les étapes validées, il envoie une requête au backend pour mettre à jour le mot de passe de l'utilisateur.

- Le Fichier ***MesInfos.jsx***  est un composant React appelé MesInfosStatique qui rend un formulaire avec des champs d'entrée en utilisant la bibliothèque Material-UI. Le formulaire contient des informations personnelles telles que le code et le rôle, ainsi que des statistiques telles que la distance parcourue. Le composant est utilisé pour afficher les informations statiques d'un utilisateur et n'est pas interactif.

- Le Fichier ***MesInfosStatique.jsx***  est un composant ObsStat est utilisé pour afficher des statistiques observées. Il prend en entrée un titre, une unité et une valeur, qui sont affichés dans un Paper (un composant qui représente un conteneur rectangulaire avec des ombres et un fond).

Le composant MesInfosStatique affiche les informations statiques d'un utilisateur (un code et un rôle) ainsi que des statistiques observées pour trois éléments différents. Il utilise le composant ObsStat pour chaque statistique et les affiche dans une grille (Grid) avec deux colonnes pour les informations de l'utilisateur et les statistiques observées.

Les champs de texte (TextField) sont également utilisés pour afficher le code et le rôle de l'utilisateur.


</td>

</tr>
</table>