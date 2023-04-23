---
sidebar_position: 4
---

<table Style="width: 100%; border-top: 1px solid transparent;">
  <tr Style="display: flex;">
    <td Style="width: 3500px;   border: 1px solid transparent;  text-align: center; align: middle; margin-top:200px; ">

![image](/img/frontutils.png)

 </td>
 <td Style=" border: 1px solid transparent;">
<th>
Le dossier utils est un dossier de dossier qui contient l'ensemble des fonctions utiliser dans notre application
</th>


- Le Fichier *protectedRoute.jsx* est un composant ProtectedRoute dans notre application React qui utilise la bibliothèque react-router-dom pour gérer le routage. Ce composant vérifie si un utilisateur est authentifié et a le rôle requis pour accéder à une route particulière. Si l'utilisateur n'est pas authentifié, il est redirigé vers la page de connexion. Si l'utilisateur est authentifié mais n'a pas le rôle requis, il est redirigé vers une page indiquant qu'il n'est pas autorisé à accéder à la ressource demandée. Si l'utilisateur est authentifié et a le rôle requis, le composant affiche le contenu de la route protégée.

- Le Fichier *index.js* de dossier routes est un code qui définit quatre constantes (ADMIN_ROUTE_START, OBSERVATEUR_ROUTE_START, VALIDATEUR_ROUTE_START et ANALYSTE_ROUTE_START) qui contiennent les préfixes des routes pour chaque type d'utilisateur dans l'application.

Ensuite, quatre tableaux de routes sont définis (RoutesObs, RoutesVal, RoutesAna et RoutesAdmin) qui contiennent des objets représentant les différentes pages accessibles pour chaque type d'utilisateur.

Par exemple, RoutesObs contient des objets représentant les pages "Mon compte", "Mes Fiches" et "Ajouter Fiche" pour les utilisateurs ayant le rôle d'observateur. Chaque objet contient un titre et une localisation, qui est la partie de l'URL qui suit le préfixe correspondant à chaque type d'utilisateur.

- Le Fichier *elHocine* est un fichier JavaScript contenant des exportations de variables et de fonctions. Il définit des tokens de design de couleurs pour les modes clair et sombre, ainsi que des paramètres de thème pour le framework Material UI.

La variable tokensDark contient un objet qui définit une palette de couleurs pour le mode sombre. Elle contient des couleurs grises et deux couleurs principales: une nuance de bleu et une nuance de jaune. Chaque couleur a des nuances allant de 0 à 1000, avec 0 étant la couleur la plus claire et 1000 étant la plus foncée.

La fonction reverseTokens est définie pour inverser la palette de couleurs de tokensDark et la stocker dans la variable tokensLight. Cette fonction prend la palette de couleurs sombres en entrée et renvoie une palette de couleurs inversée, avec des couleurs claires à gauche et des couleurs foncées à droite.

La fonction themeSettings prend un paramètre mode pour déterminer si les paramètres de thème doivent être configurés pour le mode clair ou sombre. En fonction de la valeur de mode, elle définit la palette de couleurs et la typographie pour le thème. Les valeurs de palette de couleurs sont extraites des objets tokensDark et tokensLight, en fonction du mode choisi. Les paramètres de typographie définissent la police et la taille de police pour les différents éléments de titre (h1, h2, etc.)

- Le Fichier *regex.jsx* définit deux constantes contiennent des expressions régulières utilisées pour vérifier si une chaîne de caractères est un e-mail valide et un mot de passe valide, respectivement.

La constante validEmail utilise une expression régulière qui correspond à un ensemble de caractères autorisés pour la partie avant l'arobase d'une adresse e-mail, suivi de l'arobase et d'un domaine valide. Cette expression régulière ne permet qu'une seule lettre finale pour le domaine, mais elle devrait en fait en accepter plusieurs.

La constante validPassword utilise une expression régulière qui vérifie si le mot de passe contient au moins une lettre et un chiffre, et doit avoir une longueur d'au moins 6 caractères.

- Ce code utilise la bibliothèque React et de la bibliothèque de conception de l'interface utilisateur Material-UI (MUI).

Il définit un objet theme qui est créé en utilisant la fonction createTheme de MUI. Ce thème personnalisé est ensuite utilisé pour styliser les composants MUI dans l'application.

Le thème définit différentes couleurs pour les éléments de l'interface utilisateur, telles que les couleurs de fond, les couleurs de texte et les couleurs d'action. Il utilise également des noms de couleurs pré-définis pour certains éléments, tels que primary et secondary, ainsi que des couleurs personnalisées pour d'autres éléments.

Le code importe également des composants React tels que Box et ThemeProvider de MUI et utilise la syntaxe import * as pour importer tous les éléments exportés du module en tant que namespace.

- Le Fichier *usePagination* implémente le hook React personnalisé "usePagination" qui permet de paginer des données. Le hook prend deux arguments : les données à paginer et le nombre d'éléments par page.

Le hook utilise useState pour stocker l'état actuel de la page courante. Il calcule également le nombre maximum de pages en divisant la longueur des données par le nombre d'éléments par page et en arrondissant le résultat vers le haut.

Le hook fournit plusieurs fonctions pour naviguer entre les pages : next pour aller à la page suivante, prev pour aller à la page précédente, jump pour aller à une page spécifique et currentData pour obtenir les données de la page courante.

Le hook retourne également l'état actuel de la page courante et le nombre maximum de pages.

- 

</td>
</tr>
</table>