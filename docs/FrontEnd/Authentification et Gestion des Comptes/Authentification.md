---
sidebar_position: 2
---


<table Style="width: 100%; border-top: 1px solid transparent;">
  <tr Style="display: flex;">
    <td Style="width: 3500px;   border: 1px solid transparent;  text-align: center; align: middle; margin-top:200px; ">

![image](/img/frontlogin.png)

 </td>
 <td Style=" border: 1px solid transparent;">
<th>
Le dossier Login est un sous dossier de dossier pages qui contient l'ensemble des pages de notre application. Comme son nom l'indique ce dernier contient les pages liées a l'authentification
</th>

- Le fichier ***Form.jsx*** est un composant React qui permet à l'utilisateur de se connecter en entrant son nom d'utilisateur (adresse e-mail) et son mot de passe. Il est situé dans le dossier login qui est lui-même situé dans le dossier pages.Ce dernier importe plusieurs modules de @mui/material, y compris TextField, Button, Container, Stack, Typography et CircularProgress. Il utilise également des icônes Visibility et VisibilityOff de @mui/icons-material, ainsi que des modules externes tels que react-router-dom, react-redux, jwt-decode, et un composant personnalisé CustomSnackBar qui utilise un useSnackBar hook.Ce composant utilise le useState hook pour gérer l'état du formulaire et des messages d'erreur associés à chaque champ. Il utilise également useSelector pour obtenir l'état du slice authReducer et useDispatch pour envoyer des actions au store Redux.Le composant comporte plusieurs fonctions, notamment redirectTo, qui redirige l'utilisateur vers la page appropriée en fonction du rôle de l'utilisateur, sendLoginForm, qui envoie les données du formulaire pour vérification et connexion, handleChange, qui gère les modifications de formulaire et les mises à jour de l'état, et handelSubmit, qui gère la soumission du formulaire, effectue la validation des champs et envoie les données pour connexion.


- Le fichier ***index.jsx*** est une implémentation de la page de connexion d'un site web, utilisant le framework Material-UI pour la conception de l'interface utilisateur. La page contient une image de fond, une boîte de connexion avec des champs pour saisir les identifiants de l'utilisateur et un bouton pour se connecter. La page comporte également un effet de transition pour faire glisser la boîte de connexion vers la droite lorsque la page se charge. Il y a également un effet de transition pour faire apparaître le texte de titre et le sous-titre en fondu après un court délai. La mise en page est adaptative, avec les éléments se déplaçant et se redimensionnant en fonction de la taille de l'écran.




</td>
</tr>
</table>