---
sidebar_position: 2
---

# Notre Projet (FrontEnd)
<table Style="width: 100%; border-top: 1px solid transparent;">
  <tr Style="display: flex;">
    <td Style="width: 1200px;   border: 1px solid transparent;  text-align: center; align: middle; margin-top:50px; ">

![image](/img/frontprojet1.png)

 </td>
 <td Style=" border: 1px solid transparent;">
<th>
Notre projet React se trouve principalement dans le dossier "assets".
</th>

 Le répertoire ***assets*** contient le code source de l'application React. Il contient généralement un fichier index.js qui importe le composant racine de l'application et le rend dans l'élément racine du DOM. Le répertoire assetsd contient également les fichiers des composants, des fichiers CSS, des fichiers d'état Redux, des fichiers utilitaires, des fichiers de configuration, etc. plus de détail dans les sections qui suit
 </td>
</tr>
<tr Style="display: flex;">
    <td Style="width: 1200px;   border: 1px solid transparent;  text-align: center; align: middle; margin-top:50px; ">

![image](/img/frontprojet2.png)

 </td>
 
<td>
<th> Sous Répertoire assets continet plusieurs sous répertoires </th>

- app: Ce dossier les Fichiers *axios.js* pour créer une instance d'un client HTTP qui communiquera avec un point d'extrémité d'API. Et *store.js* pour stocker et gérer l'état global de l'application.

- assets: Ce dossier contient tous les fichiers statiques tels que les images, les polices, les fichiers de styles, etc.

- components: Ce dossier contient tous les composants React réutilisables de notre application. Les composants peuvent être des boutons, des formulaires, des cartes, des modales, des en-têtes, des pieds de page, etc.

- features: Ce dossier contient des fonctionnalités ou des modules spécifiques de l'application. Chaque fonctionnalité peut avoir son propre état et ses propres composants. Par exemple, vous pouvez avoir une fonctionnalité de connexion avec ses propres composants (formulaire de connexion, inscription, etc.) et son propre état (utilisateur connecté ou non).

- images: Ce dossier contient l'ensemble des images utilisés dans notre application.

- layout2: Ce dossier contient les composants de la structure de la page tels que le menu de navigation, le pied de page, l'en-tête, etc. Ces composants sont généralement statiques et sont utilisés pour maintenir la structure de la page.

- pages: Ce dossier contient tous les composants de page de notre application. Les composants de page sont des composants React qui définissent l'interface utilisateur de chaque page de l'application. Les pages sont généralement constituées de composants réutilisables et sont chargées avec des données spécifiques.

- themes: Ce dossier de style pour notre application React utilisant Material UI comme framework de conception. 

- utils: Ce dossier contient tous les fichiers utilitaires tels que les fonctions d'aide, les fonctions de traitement de données, les fonctions d'API, etc. Ces fichiers sont généralement réutilisables dans toute l'application et fournissent une fonctionnalité commune.

- App.js: Ce fichier fourni est une configuration des routes pour une application web développée avec React et React Router. Les différentes routes sont définies en fonction des différents rôles que les utilisateurs peuvent avoir dans l'application (administrateur, observateur, analyste, etc.). 

- index.css: Ce fichier définit les styles de base pour notre application web.

- main.jsx: Ce fichier est une configuration pour notre application React qui utilise Redux pour la gestion de l'état global et React Router pour la navigation. Il utilise également le StrictMode de React pour effectuer des vérifications supplémentaires en mode de développement.
 

 </td>
 </tr>
<tr Style="display: flex;">
    <td Style="width: 1200px;   border: 1px solid transparent;  text-align: center; align: middle; margin-top:50px; ">

![image](/img/frontprojet3.png)

 </td>
 <td>
<th>Le dossier app contient les fichiers "axios.js" et "store.js" qui sont utilisés pour gérer les appels API et la gestion de l'état global de l'application avec Redux respectivement
</th>

- Le fichier axios.js contient un objet useAxios qui est créé à l'aide de axios.create(). Cet objet est utilisé pour effectuer des appels HTTP à l'API du projet. Il définit la baseURL de l'API ainsi que les en-têtes de la requête.

- Le fichier store.js utilise la fonction configureStore de Redux Toolkit pour créer le store Redux de l'application. Il définit les reducers utilisés dans l'application en les combinant dans un objet reducer. Dans cet exemple, trois reducers sont combinés: authReducer, adminReducer et addFicheReducer. Ces reducers sont importés à partir de différents fichiers dans le dossier features.



 </td>
 </tr>
<tr Style="display: flex;">
    <td Style="width: 490px;   border: 1px solid transparent;  text-align: center; align: middle; margin-top:50px; ">

![image](/img/frontprojet4.png)

 </td>
 <td>
<th>Le dossier "assets" contient un sous-dossier nommé "styles", qui lui-même contient un fichier nommé "form.css".
</th>

- Le fichier "form.css" contient un sélecteur de classe nommé ".stack", qui définit des propriétés de style pour les éléments HTML ayant cette classe.
- Le dossier assets contient aussi un ensemble des images.



 </td>
 </tr>
 <tr Style="display: flex;">
    <td Style="width: 2880px;   border: 1px solid transparent;  text-align: center; align: middle; margin-top:50px; ">

![image](/img/frontprojet5.png)

 </td>
 <td>
<th>Le dossier components contient l'ensemble des composants réutilisables de l'application. 
</th>

- Le composant React fonctionnel nommé ***"CustomDialog"*** qui utilise les composants de l'interface utilisateur fournis par la bibliothèque MUI (anciennement connue sous le nom de Material-UI) pour afficher un dialogue avec un titre, un message et des boutons "OK" et "Annuler". Le composant accepte plusieurs propriétés en entrée, notamment le titre du dialogue, le message à afficher, une fonction qui doit être appelée lorsque l'utilisateur accepte le dialogue, l'état d'ouverture ou de fermeture du dialogue et une fonction pour mettre à jour cet état.

- Le composant React fonctionnel nommé ***"CustomInput"*** qui utilise les composants de l'interface utilisateur fournis par la bibliothèque MUI (anciennement connue sous le nom de Material-UI) pour afficher un champ de saisie de texte personnalisé. Le composant accepte plusieurs propriétés en entrée, notamment le label du champ, le type de saisie de texte, une fonction qui doit être appelée lorsqu'il y a un changement de texte dans le champ, la valeur actuelle du champ, le nom du champ, une valeur booléenne qui indique si le champ doit prendre toute la largeur disponible, la taille du champ, une valeur booléenne qui indique si le champ doit être désactivé, une valeur booléenne qui indique si le champ est requis, un motif de validation pour le champ, un texte d'erreur pour afficher si la validation échoue. Le composant utilise également l'état local pour stocker les erreurs de validation et les afficher si nécessaire.
- Le composant React appelé ***"CustomSelect"*** qui rend un formulaire Select personnalisé en utilisant le composant MenuItem de Material-UI. Il prend plusieurs propriétés (props) comme entrée, notamment label pour le libellé de la sélection, onChange pour la fonction appelée lorsque l'utilisateur modifie la sélection, value pour la valeur de la sélection, name pour le nom de la sélection, fullWidth pour définir la largeur de la sélection, items pour les options de sélection qui doivent être rendues sous forme de MenuItem, size pour la taille de la sélection, required pour définir si la sélection est requise ou non, et title pour le titre de la sélection.
- Le composant React appelé ***"CustomSelect2"*** qui permet de créer une liste déroulante personnalisée avec des options spécifiques. Le composant utilise les composants MUI (Material UI) tels que MenuItem et Select pour l'interface utilisateur et prend plusieurs propriétés en entrée telles que label, onChange, value, name, fullWidth, items, size, required et title pour personnaliser le comportement de la liste déroulante. La liste déroulante est créée en utilisant les éléments du tableau d'objets "items" passés en entrée, qui ont des propriétés "code" et "nom".
- Le composant React appelé ***"CustomSnackBar"*** qui affiche une notification ou un message d'alerte en haut de l'écran. Le composant utilise les composants Snackbar et Alert de la bibliothèque MUI (Material UI). Il prend en paramètre une snackOption qui contient les informations à afficher dans la notification, telles que le message, la durée et le type (success, error, warning, info). Le composant CustomSnackBar rend une Snackbar avec l'Alert approprié, et peut être fermé manuellement ou automatiquement après la durée spécifiée.
- Le hook personnalisé ***"useSnackBar"*** qui retourne un objet contenant l'état actuel du message d'alerte ainsi qu'une fonction pour le modifier. Le hook initialise l'état avec un objet contenant les propriétés open (booléen), message (chaîne de caractères), type (chaîne de caractères représentant le niveau de gravité de l'alerte, par exemple "info", "warning" ou "error"), et duration (nombre représentant la durée en millisecondes pendant laquelle le message d'alerte doit être affiché avant de disparaître automatiquement). Le hook est destiné à être utilisé dans des composants React pour gérer des messages d'alerte ou des notifications.
- Le composant React nommé ***"EnteteFiche"***, qui représente l'en-tête d'une fiche. Il comporte des champs de saisie pour des informations de la fiche telles que la date de création, l'heure de début d'observation, la durée de l'observation, le code INSEE de la commune, etc. Certains de ces champs de saisie utilisent des composants personnalisés tels que CustomInput, CustomSelect et CustomSelect2. Le composant a également un bouton "Valider la fiche" qui s'affiche uniquement en mode d'édition.
- Le composant ***"NavBar"*** en React, qui est utilisé pour créer une barre de navigation. Il contient des fonctions pour rendre la barre de navigation transparente ou fixe, pour ouvrir ou fermer un mini-menu de navigation, et pour détecter si la barre de navigation est cachée ou non. Le code utilise également des icônes et des composants MUI pour la mise en page.
- Le composant React appelé ***"NavText"***, qui est utilisé pour afficher une barre de navigation avec du texte. Le composant utilise les bibliothèques React Router et Material UI pour afficher une série de liens d'enchevêtrement (breadcrumbs) pour permettre à l'utilisateur de naviguer vers la page précédente. Il prend en charge une icône, un titre et un chemin, ainsi que des propriétés optionnelles pour modifier l'apparence du texte.
- Le composant appelé ***"SideNavRoot"*** et plusieurs constantes qui contiennent des routes pour différentes catégories d'utilisateurs. Le composant "useLocation" de React Router est utilisé pour obtenir l'emplacement de la page actuelle et le diviser en un tableau pour vérifier quelle catégorie d'utilisateur est actuellement active. En fonction de la catégorie, le composant "SideNavRoot" est rendu avec les routes appropriées pour cette catégorie. Le composant final est exporté sous le nom "SideNav".
- Le composant React ***"SideNav"*** qui représente un menu latéral de navigation. Il affiche une liste de liens cliquables vers différentes pages de l'application, ainsi qu'un bouton pour se déconnecter. Le menu latéral est réactif et s'adapte en fonction de la taille de l'écran. Le code utilise la bibliothèque MUI pour la création de composants d'interface utilisateur, ainsi que React Router pour la gestion de la navigation. Le composant utilise également Redux pour gérer l'état de connexion de l'utilisateur.
-Le composant React appelé ***"Error404"*** représente une page d'erreur 404 qui s'affiche lorsque l'utilisateur demande une page qui n'existe pas. Le composant utilise des éléments graphiques fournis par la bibliothèque MUI (anciennement connue sous le nom de Material-UI) tels que "Box", "Button" et "Typography". Le composant est exporté pour pouvoir être utilisé dans d'autres parties de l'application.
- Le composant React nommé ***"Unauthorized"*** qui affiche un message indiquant que l'utilisateur n'est pas autorisé à accéder à une certaine page. Il importe des éléments de la bibliothèque MUI tels que "Box", "Button" et "Typography". Il utilise également un lien de la bibliothèque "react-router-dom". Le composant renvoie deux éléments de texte, le premier étant un titre indiquant "Not Authorized" et le second explique que l'utilisateur n'est pas autorisé à accéder à cette page. Il est également possible d'ajouter une image personnalisée, mais dans ce cas, il utilise une image importée nommée "notAuthorised.jpg".

 


 </td>
 </tr>
<tr>
<th>
 Le dossier assets contient aussi les fichiers
</th>

- Le Fichier *App.jsx* code est une configuration des routes dans notre application React utilisant la bibliothèque React Router. Il définit les différentes routes qui seront disponibles dans l'application.

L'élément Routes est utilisé pour définir l'ensemble des routes pour l'application. Les éléments Route sont utilisés pour définir les différentes routes. Chaque route est associée à un composant spécifique qui sera rendu lorsque cette route sera activée.

Dans cet exemple, il y a plusieurs routes définies, notamment la route par défaut "/", qui affiche le composant Home, et la route "/login", qui affiche le composant LoginPage.

Il y a également plusieurs routes protégées, qui nécessitent que l'utilisateur ait un certain rôle pour y accéder. Ces routes sont définies avec l'élément ProtectedRoute et vérifient si l'utilisateur a le rôle requis avant de rendre le composant associé.

Les différentes pages pour les rôles "ROLE_ADMIN" et "ROLE_OBSERVATEUR" sont définies à l'aide des éléments Route imbriqués. Par exemple, la route "/admin/create-account" ne sera disponible que pour les utilisateurs ayant le rôle "ROLE_ADMIN", et affichera le composant CreateAccount lorsqu'elle sera activée.

Enfin, il y a une route générique "*" qui sera utilisée pour toutes les autres routes non définies dans l'application, et qui affichera le composant Error404 pour indiquer que la page demandée n'existe pas.

- Le Fichier  *main.jsx* est le point d'entrée de l'application React. Il importe le composant App qui contient les routes et le rend à l'aide de ReactDOM.createRoot(), qui permet le rendu incrémental et optimisé des composants React.

Le fichier importe également les dépendances nécessaires pour la configuration de l'application :

react-dom/client pour le rendu de l'application
BrowserRouter pour le routage de l'application
Provider pour connecter l'application au store Redux
Enfin, il enveloppe l'application dans les contextes fournis par les LayoutControllerProvider et Provider et est enveloppé dans un React.StrictMode pour des avertissements supplémentaires en mode développement.


</tr>
<tr>
<th>
Dans un Projet React nous avons aussi les  fichiers suivants
</th>

- Le Fichier *index.html*  code HTML qui définit la structure d'une page web basique. Il y a une section head> qui contient des informations sur la page telles que le titre, l'icône de la page et le viewport, qui définit la taille de la fenêtre visible de la page. La section body contient le contenu de la page, qui est défini par un élément div avec l'ID "root". Le code JavaScript est chargé à partir du fichier "/assets/main.jsx" à l'aide de l'attribut assets de l'élément script. Le fichier JavaScript est écrit en utilisant le module type="module" et  assets le main.jsx.

- Le Fichier *package-lock.json* contienent des informations sur les packages utilisés dans le projet, tels que React lui-même, React Router, Redux, Webpack, Babel, et d'autres packages qui sont souvent utilisés pour construire une application React moderne. Ces informations peuvent être importantes pour maintenir la stabilité de l'application, en garantissant que chaque développeur qui travaille sur le projet utilise exactement les mêmes versions des packages.

- Le Fichier *package.json* décrit les dépendances et les scripts d'un projet appelé lpo_front. Les packages nécessaires pour le projet sont répertoriés dans la section dependencies, tandis que les packages nécessaires uniquement à des fins de développement sont répertoriés dans la section devDependencies. La section scripts définit les commandes qui peuvent être exécutées pour construire et exécuter le projet.

- Le fichier *compser.json* utilisés par le gestionnaire de paquets PHP, Composer, pour installer et gérer les dépendances d'un projet PHP.

- Le fichier *composer.lock* est généré automatiquement par le gestionnaire de paquets PHP, Composer, lors de l'exécution de la commande composer install ou composer update.

Ce fichier contient des informations sur les packages installés, y compris les versions exactes des packages, les dépendances de chaque package, et les informations de l'arbre de dépendances.

</tr>
</table>
