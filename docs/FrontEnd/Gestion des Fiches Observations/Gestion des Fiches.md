<table Style="width: 100%; border-top: 1px solid transparent;">
  <tr Style="display: flex;">
    <td Style="width: 1000px;   border: 1px solid transparent;  text-align: center; align: middle; margin-top:200px; ">

![image](/img/capFiche.png)
    
 </td>
 <td Style=" border: 1px solid transparent;">
<th>
Le sous dossier Fiche de Feature contient l'ensemble des interface de sprint 2 que nous allons détailler dans ce qui suit
</th>

Le Fichier **_addFicheService.js_** du dossier addFiche_feature, utilise la bibliothèque Axios pour effectuer des requêtes HTTP. Il implémente trois fonctions pour gérer les fiches d'observations dans le contexte d'une application de suivi de la faune.

La première fonction s'appelle ficheSendService et elle envoie une fiche d'observation à un endpoint "observateur/fiche-temporaire" via une requête POST. La fonction prend une fiche en paramètre et ajoute des informations d'authentification (le jeton d'accès et l'e-mail de l'utilisateur) dans les en-têtes de la requête. La fonction renvoie la réponse de la requête si elle réussit et une erreur sinon.

La deuxième fonction s'appelle ficheSaveService et elle enregistre une fiche d'observation dans une table temporaire via une requête POST à l'endpoint "observateur/fiches-temporaire". Comme la fonction précédente, elle prend une fiche en paramètre et ajoute des informations d'authentification dans les en-têtes de la requête. La fonction renvoie la réponse de la requête si elle réussit et une erreur sinon.

La troisième fonction s'appelle updateFicheService et elle met à jour une fiche d'observation existante via une requête PUT à l'endpoint "observateur/fiche-temporaire/{id_fiche}". La fonction prend une fiche en paramètre qui contient l'identifiant de la fiche à mettre à jour et les nouvelles informations à lui appliquer. Elle ajoute également les informations d'authentification dans les e!mn-têtes de la requête. La fonction renvoie la réponse de la requête si elle réussit et une erreur sinon.

Enfin, toutes ces fonctions sont regroupées dans un objet addFicheService qui est exporté pour être utilisé dans d'autres parties de l'application.

---

Le Fichier **_addFicheSlice.js_** du addFiche_feature, utilise les bibliothèques Redux Toolkit pour gérer l'état de l'application.

Les fonctions createAsyncThunk créent des actions asynchrones qui envoient une requête HTTP à un serveur pour récupérer ou envoyer des données. Les actions renvoient une promesse qui peut être résolue ou rejetée en fonction du résultat de la requête.

La fonction getCommunesAndEspeces récupère les données de toutes les communes et espèces à partir d'un service Web. Elle stocke également les données dans le stockage local pour une utilisation ultérieure.

La variable initialState contient l'état initial de l'application.

La fonction addFicheSlice définit le slice Redux qui gère l'état de l'application pour les actions de création, de récupération, de mise à jour et de sauvegarde de fiches. Elle utilise extraReducers pour définir comment l'état est mis à jour en réponse aux actions asynchrones.

---

Le Fichier **_getFicheService.jsx_** du dossier getFiche_feature exporte un objet getFicheService contenant plusieurs fonctions asynchrones pour interagir avec une API.

Les fonctions incluses dans l'objet getFicheService sont les suivantes :

getAllFicheObs(code): Récupère toutes les fiches temporaires d'un observateur en fournissant le code de l'observateur en tant que paramètre. Cette fonction envoie une requête HTTP GET à l'API avec des paramètres de requête et des en-têtes d'autorisation.

getOneFicheTemporaire(idFiche): Récupère une fiche temporaire unique en fournissant l'identifiant de la fiche en tant que paramètre. Cette fonction envoie une requête HTTP GET à l'API avec des en-têtes d'autorisation.

getAllFicheLibreService(): Récupère toutes les fiches temporaires en état libre en envoyant une requête HTTP GET à l'API avec des paramètres de requête et des en-têtes d'autorisation.

deleteFicheTemporaireService(id_fiche): Supprime une fiche temporaire unique en fournissant l'identifiant de la fiche en tant que paramètre. Cette fonction envoie une requête HTTP DELETE à l'API avec des en-têtes d'autorisation.

Les requêtes HTTP sont effectuées en utilisant la bibliothèque axios qui est importée en tant que useAxios. Les en-têtes d'autorisation contiennent le jeton d'authentification et l'adresse e-mail de l'utilisateur stockés localement. La constante ETAT_FICHE_LIBRE est importée depuis un module utilFiche.jsx.

L'ensemble du script semble être écrit en ES6 et est conçu pour être utilisé dans un environnement de développement Node.js.

---

Le Fichier **_getFicheSlice.jsx_** du dossier getFiche_feature utilise la bibliothèque Redux Toolkit pour créer des tranche (slices) de store Redux qui gèrent l'état d'une application React.

Il définit plusieurs actions asynchrones créées à l'aide de la fonction createAsyncThunk. Ces actions utilisent des services externes pour récupérer des données ou les modifier, et mettent à jour l'état du store Redux en fonction de leurs résultats.

Le slice créé dans ce code a un état initial avec plusieurs propriétés qui reflètent l'état de chargement des données. Il contient également des reducers pour trier les fiches en fonction de leur date.

Les extraReducers sont des fonctions qui sont automatiquement ajoutées au slice et sont appelées lorsqu'une action est traitée par le slice. Ces extraReducers gèrent les états de chargement, d'erreur et de réussite pour chaque action asynchrone créée avec createAsyncThunk.

---

Le Fichier **_validerFicheService.jsx_** du dossier validerFiche_feature, utilise la bibliothèque useAxios pour effectuer une requête POST à un endpoint validateur/fiche-valide.

La fonction validerOneFicheService est une fonction asynchrone qui prend un objet fiche comme paramètre. Elle envoie une requête POST à l'endpoint validateur/fiche-valide avec l'objet fiche comme corps de la requête et deux en-têtes Authorization et email avec des valeurs extraites du localStorage. Si la requête réussit, la fonction renvoie la réponse, sinon elle renvoie une erreur.

Ensuite, l'objet validerFicheService est créé avec une propriété validerOneFicheService, qui fait référence à la fonction validerOneFicheService. Cet objet est exporté par défaut pour être utilisé dans d'autres fichiers JavaScript.

---

Le Fichier **_validerFicheSlice.jsx_** du dossier validerFiche_feature, utilise Redux Toolkit pour gérer un état asynchrone dans une application React.

La fonction createAsyncThunk crée une action asynchrone qui peut être utilisée dans les reducers pour mettre à jour l'état de l'application en fonction du résultat de l'opération asynchrone. Dans cet exemple, la fonction validerOneFiche est créée pour valider une fiche. Elle appelle la fonction validerOneFicheService qui effectue la requête HTTP pour valider la fiche.

Le validerFicheSlice est un slice de Redux qui définit l'état initial de l'application et les reducers qui peuvent être utilisés pour modifier cet état. Dans cet exemple, il n'y a pas de reducer défini car l'action est gérée par extraReducers.

Le extraReducers est un objet qui définit la manière dont l'état de l'application doit être mis à jour en fonction du résultat de l'action asynchrone. Dans cet exemple, l'état de l'application est mis à jour en fonction des trois cas possibles: pending, rejected et fulfilled. L'état est mis à jour avec les propriétés isLoading, isError et isSuccess en fonction du cas.

---

Le Fichier **_Espece&communeService.jsx_** du dossier Fiche, c'est une collection de deux fonctions qui appellent deux endpoints différents de l'API à l'aide de useAxios, qui semble être un hook personnalisé pour faire des requêtes HTTP avec axios.

La première fonction, getAllEspeceService, appelle l'endpoint /api/especes et renvoie une promesse résolue avec la réponse si la requête est réussie, ou une promesse rejetée avec l'erreur si elle échoue. Les requêtes HTTP incluent également un en-tête avec un jeton d'authentification et une adresse e-mail stockée dans le localStorage.

La deuxième fonction, getAllcommunesService, appelle l'endpoint /api/communes et suit la même logique que getAllEspeceService.

Enfin, les deux fonctions sont regroupées dans un objet especeCommuneService et exportées.

</td>
</tr>
</table>
