"use strict";(self.webpackChunkdocumentation_lpo=self.webpackChunkdocumentation_lpo||[]).push([[308],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||s;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[c]="string"==typeof e?e:i,o[1]=a;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9496:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const s={sidebar_position:4},o=void 0,a={unversionedId:"FrontEnd/Authentification et Gestion des Comptes/Fonctions utilis",id:"FrontEnd/Authentification et Gestion des Comptes/Fonctions utilis",title:"Fonctions utilis",description:"image",source:"@site/docs/FrontEnd/Authentification et Gestion des Comptes/Fonctions utilis.md",sourceDirName:"FrontEnd/Authentification et Gestion des Comptes",slug:"/FrontEnd/Authentification et Gestion des Comptes/Fonctions utilis",permalink:"/docs/FrontEnd/Authentification et Gestion des Comptes/Fonctions utilis",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/FrontEnd/Authentification et Gestion des Comptes/Fonctions utilis.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"myslidebar",previous:{title:"Gestion des Comptes",permalink:"/docs/FrontEnd/Authentification et Gestion des Comptes/Gestion des Comptes"},next:{title:"Introduction",permalink:"/docs/FrontEnd/Gestion des Fiches Observations/Introduction"}},l={},u=[],p={toc:u},c="wrapper";function d(e){let{components:t,...s}=e;return(0,i.kt)(c,(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("table",{Style:"width: 100%; border-top: 1px solid transparent;"},(0,i.kt)("tr",{Style:"display: flex;"},(0,i.kt)("td",{Style:"width: 3500px;   border: 1px solid transparent;  text-align: center; align: middle; margin-top:200px; "},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(7010).Z,width:"250",height:"193"}))),(0,i.kt)("td",{Style:" border: 1px solid transparent;"},(0,i.kt)("th",null,"Le dossier utils est un dossier de dossier qui contient l'ensemble des fonctions utiliser dans notre application"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Le Fichier ",(0,i.kt)("em",{parentName:"p"},"protectedRoute.jsx")," est un composant ProtectedRoute dans notre application React qui utilise la biblioth\xe8que react-router-dom pour g\xe9rer le routage. Ce composant v\xe9rifie si un utilisateur est authentifi\xe9 et a le r\xf4le requis pour acc\xe9der \xe0 une route particuli\xe8re. Si l'utilisateur n'est pas authentifi\xe9, il est redirig\xe9 vers la page de connexion. Si l'utilisateur est authentifi\xe9 mais n'a pas le r\xf4le requis, il est redirig\xe9 vers une page indiquant qu'il n'est pas autoris\xe9 \xe0 acc\xe9der \xe0 la ressource demand\xe9e. Si l'utilisateur est authentifi\xe9 et a le r\xf4le requis, le composant affiche le contenu de la route prot\xe9g\xe9e.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Le Fichier ",(0,i.kt)("em",{parentName:"p"},"index.js")," de dossier routes est un code qui d\xe9finit quatre constantes (ADMIN_ROUTE_START, OBSERVATEUR_ROUTE_START, VALIDATEUR_ROUTE_START et ANALYSTE_ROUTE_START) qui contiennent les pr\xe9fixes des routes pour chaque type d'utilisateur dans l'application."))),(0,i.kt)("p",null,"Ensuite, quatre tableaux de routes sont d\xe9finis (RoutesObs, RoutesVal, RoutesAna et RoutesAdmin) qui contiennent des objets repr\xe9sentant les diff\xe9rentes pages accessibles pour chaque type d'utilisateur."),(0,i.kt)("p",null,'Par exemple, RoutesObs contient des objets repr\xe9sentant les pages "Mon compte", "Mes Fiches" et "Ajouter Fiche" pour les utilisateurs ayant le r\xf4le d\'observateur. Chaque objet contient un titre et une localisation, qui est la partie de l\'URL qui suit le pr\xe9fixe correspondant \xe0 chaque type d\'utilisateur.'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Le Fichier ",(0,i.kt)("em",{parentName:"li"},"elHocine")," est un fichier JavaScript contenant des exportations de variables et de fonctions. Il d\xe9finit des tokens de design de couleurs pour les modes clair et sombre, ainsi que des param\xe8tres de th\xe8me pour le framework Material UI.")),(0,i.kt)("p",null,"La variable tokensDark contient un objet qui d\xe9finit une palette de couleurs pour le mode sombre. Elle contient des couleurs grises et deux couleurs principales: une nuance de bleu et une nuance de jaune. Chaque couleur a des nuances allant de 0 \xe0 1000, avec 0 \xe9tant la couleur la plus claire et 1000 \xe9tant la plus fonc\xe9e."),(0,i.kt)("p",null,"La fonction reverseTokens est d\xe9finie pour inverser la palette de couleurs de tokensDark et la stocker dans la variable tokensLight. Cette fonction prend la palette de couleurs sombres en entr\xe9e et renvoie une palette de couleurs invers\xe9e, avec des couleurs claires \xe0 gauche et des couleurs fonc\xe9es \xe0 droite."),(0,i.kt)("p",null,"La fonction themeSettings prend un param\xe8tre mode pour d\xe9terminer si les param\xe8tres de th\xe8me doivent \xeatre configur\xe9s pour le mode clair ou sombre. En fonction de la valeur de mode, elle d\xe9finit la palette de couleurs et la typographie pour le th\xe8me. Les valeurs de palette de couleurs sont extraites des objets tokensDark et tokensLight, en fonction du mode choisi. Les param\xe8tres de typographie d\xe9finissent la police et la taille de police pour les diff\xe9rents \xe9l\xe9ments de titre (h1, h2, etc.)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Le Fichier ",(0,i.kt)("em",{parentName:"li"},"regex.jsx")," d\xe9finit deux constantes contiennent des expressions r\xe9guli\xe8res utilis\xe9es pour v\xe9rifier si une cha\xeene de caract\xe8res est un e-mail valide et un mot de passe valide, respectivement.")),(0,i.kt)("p",null,"La constante validEmail utilise une expression r\xe9guli\xe8re qui correspond \xe0 un ensemble de caract\xe8res autoris\xe9s pour la partie avant l'arobase d'une adresse e-mail, suivi de l'arobase et d'un domaine valide. Cette expression r\xe9guli\xe8re ne permet qu'une seule lettre finale pour le domaine, mais elle devrait en fait en accepter plusieurs."),(0,i.kt)("p",null,"La constante validPassword utilise une expression r\xe9guli\xe8re qui v\xe9rifie si le mot de passe contient au moins une lettre et un chiffre, et doit avoir une longueur d'au moins 6 caract\xe8res."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ce code utilise la biblioth\xe8que React et de la biblioth\xe8que de conception de l'interface utilisateur Material-UI (MUI).")),(0,i.kt)("p",null,"Il d\xe9finit un objet theme qui est cr\xe9\xe9 en utilisant la fonction createTheme de MUI. Ce th\xe8me personnalis\xe9 est ensuite utilis\xe9 pour styliser les composants MUI dans l'application."),(0,i.kt)("p",null,"Le th\xe8me d\xe9finit diff\xe9rentes couleurs pour les \xe9l\xe9ments de l'interface utilisateur, telles que les couleurs de fond, les couleurs de texte et les couleurs d'action. Il utilise \xe9galement des noms de couleurs pr\xe9-d\xe9finis pour certains \xe9l\xe9ments, tels que primary et secondary, ainsi que des couleurs personnalis\xe9es pour d'autres \xe9l\xe9ments."),(0,i.kt)("p",null,"Le code importe \xe9galement des composants React tels que Box et ThemeProvider de MUI et utilise la syntaxe import * as pour importer tous les \xe9l\xe9ments export\xe9s du module en tant que namespace."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Le Fichier ",(0,i.kt)("em",{parentName:"li"},"usePagination"),' impl\xe9mente le hook React personnalis\xe9 "usePagination" qui permet de paginer des donn\xe9es. Le hook prend deux arguments : les donn\xe9es \xe0 paginer et le nombre d\'\xe9l\xe9ments par page.')),(0,i.kt)("p",null,"Le hook utilise useState pour stocker l'\xe9tat actuel de la page courante. Il calcule \xe9galement le nombre maximum de pages en divisant la longueur des donn\xe9es par le nombre d'\xe9l\xe9ments par page et en arrondissant le r\xe9sultat vers le haut."),(0,i.kt)("p",null,"Le hook fournit plusieurs fonctions pour naviguer entre les pages : next pour aller \xe0 la page suivante, prev pour aller \xe0 la page pr\xe9c\xe9dente, jump pour aller \xe0 une page sp\xe9cifique et currentData pour obtenir les donn\xe9es de la page courante."),(0,i.kt)("p",null,"Le hook retourne \xe9galement l'\xe9tat actuel de la page courante et le nombre maximum de pages."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"}))))))}d.isMDXComponent=!0},7010:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);