"use strict";(self.webpackChunkdocumentation_lpo=self.webpackChunkdocumentation_lpo||[]).push([[261],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,v=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(v,o(o({ref:t},p),{},{components:r})):n.createElement(v,o({ref:t},p))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6341:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>L,contentTitle:()=>S,default:()=>H,frontMatter:()=>C,metadata:()=>T,toc:()=>x});var n=r(7462),a=r(7294),l=r(3905),o=r(6010),i=r(2466),s=r(6550),u=r(1980),p=r(7392),d=r(12);function c(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function m(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function v(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function k(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=m(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!v({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,u]=f({queryString:r,groupId:n}),[p,c]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,d.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),k=(()=>{const e=s??p;return v({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!v({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),c(e)}),[u,c,l]),tabValues:l}}var h=r(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:r,selectedValue:l,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),c=e=>{const t=e.currentTarget,r=p.indexOf(t),n=u[r].value;n!==l&&(d(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:c},i,{className:(0,o.Z)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":l===t})}),r??t)})))}function P(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function g(e){const t=k(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},a.createElement(b,(0,n.Z)({},e,t)),a.createElement(P,(0,n.Z)({},e,t)))}function z(e){const t=(0,h.Z)();return a.createElement(g,(0,n.Z)({key:String(t)},e))}const N={tabItem:"tabItem_Ymn6"};function w(e){let{children:t,hidden:r,className:n}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(N.tabItem,n),hidden:r},t)}const C={},S=void 0,T={unversionedId:"Application web/Premier Pas",id:"Application web/Premier Pas",title:"Premier Pas",description:"Installation",source:"@site/docs/Application web/Premier Pas.md",sourceDirName:"Application web",slug:"/Application web/Premier Pas",permalink:"/docs/Application web/Premier Pas",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Application web/Premier Pas.md",tags:[],version:"current",frontMatter:{},sidebar:"myslidebar",previous:{title:"Notre Application",permalink:"/docs/Application web/Notre Application"},next:{title:"Introduction",permalink:"/docs/FrontEnd/Introduction"}},L={};(0,l.kt)("link",{rel:"stylesheet",href:"/app.css"});const x=[{value:"Installation",id:"installation",level:2},{value:"D\xe9tails",id:"d\xe9tails",level:3}],I={toc:x},q="wrapper";function H(e){let{components:t,...r}=e;return(0,l.kt)(q,(0,n.Z)({},I,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Installer les outils n\xe9cessaires :")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Installer Node.js (",(0,l.kt)("a",{parentName:"strong",href:"https://nodejs.org/"},"https://nodejs.org/"),")")),(0,l.kt)(z,{mdxType:"Tabs"},(0,l.kt)(w,{value:"Windows",label:"Windows",default:!0,mdxType:"TabItem"},(0,l.kt)("ul",null,"Une fois sur le Site "),(0,l.kt)("ul",null,'1- Cliquez sur le bouton "Download" pour t\xe9l\xe9charger le programme d\'installation.'),(0,l.kt)("ul",null,"2- Une fois le t\xe9l\xe9chargement termin\xe9, double-cliquez sur le fichier d'installation pour lancer l'installation."),(0,l.kt)("ul",null,'3- Acceptez les termes du contrat de licence et cliquez sur "Next".'),(0,l.kt)("ul",null,'4- Choisissez le dossier d\'installation et cliquez sur "Next".'),(0,l.kt)("ul",null,'5- S\xe9lectionnez les fonctionnalit\xe9s que vous souhaitez installer (les options par d\xe9faut sont g\xe9n\xe9ralement suffisantes) et cliquez sur "Next".'),(0,l.kt)("ul",null,'6- Cliquez sur "Install" pour lancer l\'installation.'),(0,l.kt)("ul",null,"7- Attendez que l'installation soit termin\xe9e et cliquez sur \"Finish\" pour fermer l'installateur."),(0,l.kt)("ul",null," Une fois que Node.js est install\xe9 sur votre ordinateur, vous pouvez v\xe9rifier si l'installation a r\xe9ussi en ouvrant une invite de commande et en tapant la commande suivante :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," Node -v\n"))),(0,l.kt)(w,{value:"Linux",label:"Linux",mdxType:"TabItem"},(0,l.kt)("ul",null,"1- Ouvrez un terminal et tapez la commande suivante pour mettre \xe0 jour le cache du package manager : "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," sudo apt update\n")),(0,l.kt)("ul",null,"2- Ensuite, tapez la commande suivante pour installer Node.js:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," sudo apt install nodejs     \n")),(0,l.kt)("ul",null,"3- Pour v\xe9rifier si l'installation a r\xe9ussi, tapez la commande suivante pour afficher la version de Node.js install\xe9e sur votre ordinateur :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," node -v\n")),(0,l.kt)("ul",null,"Cette commande devrait afficher la version de Node.js. Si vous voyez une version affich\xe9e pour la commande, cela signifie que Node.js  est install\xe9 et fonctionnent correctement sur votre syst\xe8me Linux."),(0,l.kt)("div",null,(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Selon votre distribution Linux, la commande pour installer Node.js peut diff\xe9rer l\xe9g\xe8rement. Par exemple, sur les distributions bas\xe9es sur Debian, vous pouvez utiliser la commande sudo apt-get install nodejs \xe0 la place de sudo apt install nodejs."))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Installer PHP (",(0,l.kt)("a",{parentName:"strong",href:"https://windows.php.net/download/"},"https://windows.php.net/download/"),")")),(0,l.kt)(z,{mdxType:"Tabs"},(0,l.kt)(w,{value:"Windows",label:"Windows",default:!0,mdxType:"TabItem"},(0,l.kt)("ul",null,"1- T\xe9l\xe9charger PHP: Tout d'abord, vous devez t\xe9l\xe9charger la version de PHP que vous souhaitez installer sur votre ordinateur. Vous pouvez t\xe9l\xe9charger la derni\xe8re version de PHP sur le site officiel de PHP ."),(0,l.kt)("ul",null,"2- Extraire les fichiers: Apr\xe8s avoir t\xe9l\xe9charg\xe9 le fichier ZIP de PHP, vous devez extraire les fichiers dans un dossier sur votre ordinateur."),(0,l.kt)("ul",null," 3- D\xe9finir la variable d'environnement PATH: Pour utiliser PHP \xe0 partir de la ligne de commande, vous devez d\xe9finir la variable d'environnement PATH pour pointer vers le dossier o\xf9 vous avez install\xe9 PHP."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"}," Pour ce faire, suivez ces \xe9tapes: "),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"Cliquez sur le bouton D\xe9marrer, faites un clic droit sur Ordinateur et s\xe9lectionnez Propri\xe9t\xe9s."),(0,l.kt)("li",{parentName:"ul"},"Dans la fen\xeatre qui s'ouvre, s\xe9lectionnez Param\xe8tres syst\xe8me avanc\xe9s."),(0,l.kt)("li",{parentName:"ul"},"Cliquez sur Variables d'environnement."),(0,l.kt)("li",{parentName:"ul"},"Sous Variables syst\xe8me, recherchez la variable PATH et cliquez sur Modifier."),(0,l.kt)("li",{parentName:"ul"},"Ajoutez le chemin d'acc\xe8s au dossier contenant les fichiers PHP \xe0 la fin de la ligne de valeur, en utilisant un point-virgule pour s\xe9parer le chemin d'acc\xe8s des autres chemins."),(0,l.kt)("li",{parentName:"ul"},"Cliquez sur OK pour fermer toutes les fen\xeatres."))),(0,l.kt)("ul",null,"4- Configurer le serveur web: Si vous souhaitez ex\xe9cuter des scripts PHP sur un serveur web local, vous devez installer un serveur web tel que Apache ou IIS, puis configurer le serveur web pour utiliser PHP. Les \xe9tapes pr\xe9cises pour cette configuration d\xe9pendront du serveur web que vous utilisez."),(0,l.kt)("ul",null,"5- Tester l'installation: Pour tester si PHP est correctement install\xe9, cr\xe9ez un fichier PHP simple contenant la commande suivante:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"  <?php\n  phpinfo();\n  ?>\n")),(0,l.kt)("p",null,'Enregistrez le fichier sous le nom info.php dans le dossier racine de votre serveur web local (g\xe9n\xe9ralement un dossier appel\xe9 "htdocs" pour Apache ou "wwwroot" pour IIS). Ensuite, ouvrez un navigateur web et acc\xe9dez \xe0 l\'adresse suivante: http://localhost/info.php. Si PHP est correctement install\xe9, vous devriez voir une page contenant des informations sur votre installation de PHP.')),(0,l.kt)(w,{value:"Linux",label:"Linux",mdxType:"TabItem"},(0,l.kt)("ul",null,"1- Ouvrir un terminal: Tout d'abord, ouvrez un terminal sur votre distribution Linux."),(0,l.kt)("ul",null,"2- Mettre \xe0 jour les packages: Avant d'installer PHP, vous devez vous assurer que les packages de votre distribution Linux sont \xe0 jour. Pour ce faire, tapez la commande suivante dans le terminal:"),(0,l.kt)("p",null,"sudo apt-get update"),(0,l.kt)("ul",null,"3- Installer PHP: Pour installer PHP, tapez la commande suivante dans le terminal:"),(0,l.kt)("p",null,"sudo apt-get install php"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Cette commande va installer PHP ainsi que les extensions et d\xe9pendances n\xe9cessaires.")),(0,l.kt)("ul",null,"4- Tester l'installation: Pour tester si PHP est correctement install\xe9, cr\xe9ez un fichier PHP simple contenant la commande suivante:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"  <?php\n  phpinfo();\n  ?>\n")),(0,l.kt)("p",null,'Enregistrez le fichier sous le nom info.php dans le dossier racine de votre serveur web local (g\xe9n\xe9ralement un dossier appel\xe9 "/var/www/html"). Ensuite, ouvrez un navigateur web et acc\xe9dez \xe0 l\'adresse suivante: http://localhost/info.php. Si PHP est correctement install\xe9, vous devriez voir une page contenant des informations sur votre installation de PHP.'),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Notez que les commandes exactes peuvent varier selon votre distribution Linux, donc consultez la documentation de votre distribution pour des instructions sp\xe9cifiques.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Installer Composer (",(0,l.kt)("a",{parentName:"strong",href:"https://getcomposer.org/"},"https://getcomposer.org/"),")")),(0,l.kt)(z,{mdxType:"Tabs"},(0,l.kt)(w,{value:"Windows",label:"Windows",default:!0,mdxType:"TabItem"},(0,l.kt)("ul",null,"1- T\xe9l\xe9charger Composer: Tout d'abord, vous devez t\xe9l\xe9charger le fichier d'installation de Composer \xe0 partir du site officiel de Composer."),(0,l.kt)("ul",null,"2- Ex\xe9cuter le fichier d'installation: Une fois le fichier d'installation de Composer t\xe9l\xe9charg\xe9, double-cliquez dessus pour l'ex\xe9cuter. Le programme d'installation va vous guider tout au long du processus d'installation."),(0,l.kt)("ul",null,"3- Configurer les options d'installation: Pendant l'installation, vous serez invit\xe9 \xe0 configurer certaines options, telles que le chemin d'installation de Composer et les param\xe8tres de proxy si vous en utilisez un. Vous pouvez g\xe9n\xe9ralement accepter les options par d\xe9faut, sauf si vous avez une configuration r\xe9seau particuli\xe8re."),(0,l.kt)("ul",null,"4- V\xe9rifier l'installation: Pour v\xe9rifier si Composer a \xe9t\xe9 correctement install\xe9, ouvrez une invite de commande et tapez la commande suivante:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"composer -V\n")),(0,l.kt)("p",null,"Si Composer est correctement install\xe9, vous devriez voir la version de Composer s'afficher."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Notez que Composer n\xe9cessite \xe9galement PHP pour fonctionner, donc assurez-vous que PHP est install\xe9 sur votre ordinateur avant d'installer Composer."))),(0,l.kt)(w,{value:"Linux",label:"Linux",mdxType:"TabItem"},(0,l.kt)("ul",null,"1- Ouvrir un terminal: Tout d'abord, ouvrez un terminal sur votre distribution Linux."),(0,l.kt)("ul",null,"2- T\xe9l\xe9charger le fichier d'installation: Pour t\xe9l\xe9charger le fichier d'installation de Composer, tapez la commande suivante dans le terminal:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"php -r \"copy('https://getcomposer.org/installer', 'composer-setup.php');\"\n")),(0,l.kt)("p",null,"Cette commande va t\xe9l\xe9charger le fichier composer-setup.php \xe0 partir du site officiel de Composer."),(0,l.kt)("ul",null,"3- V\xe9rifier l'int\xe9grit\xe9 du fichier: Avant d'ex\xe9cuter le fichier d'installation de Composer, vous devez v\xe9rifier l'int\xe9grit\xe9 du fichier en utilisant la cl\xe9 de signature Composer. Pour ce faire, tapez les commandes suivantes dans le terminal:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"php -r \"if (hash_file('SHA384', 'composer-setup.php') === '669656bab3166a7aff8a7506b8cb2d1c292f042046c5a994c43155c0be6190fa0355160742ab2e1c88d40d5be660b410') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;\"\n")),(0,l.kt)("p",null,"Si le message \"Installer verified\" s'affiche, le fichier d'installation est authentique. Si le message \"Installer corrupt\" s'affiche, vous devez supprimer le fichier composer-setup.php et recommencer \xe0 partir de l'\xe9tape 2."),(0,l.kt)("ul",null,"4- Ex\xe9cuter le fichier d'installation: Pour ex\xe9cuter le fichier d'installation de Composer, tapez la commande suivante dans le terminal:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo php composer-setup.php --install-dir=/usr/local/bin --filename=composer\n")),(0,l.kt)("p",null,'Cette commande va installer Composer dans le r\xe9pertoire /usr/local/bin et cr\xe9er un alias appel\xe9 "composer".'),(0,l.kt)("ul",null,"5- V\xe9rifier l'installation: Pour v\xe9rifier si Composer a \xe9t\xe9 correctement install\xe9, tapez la commande suivante dans le terminal:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"composer -V\n")),(0,l.kt)("p",null,"Si Composer est correctement install\xe9, vous devriez voir la version de Composer s'afficher."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Notez que Composer n\xe9cessite \xe9galement PHP pour fonctionner, donc assurez-vous que PHP est install\xe9 sur votre ordinateur avant d'installer Composer.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Installer Symfony CLI (",(0,l.kt)("a",{parentName:"strong",href:"https://symfony.com/download"},"https://symfony.com/download"),")")),(0,l.kt)(z,{mdxType:"Tabs"},(0,l.kt)(w,{value:"Windows",label:"Windows",default:!0,mdxType:"TabItem"},(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"Installer PHP : Avant d'installer la CLI de Symfony, vous devez vous assurer que PHP est install\xe9 sur votre ordinateur Windows. Pour ce faire, t\xe9l\xe9chargez le fichier d'installation de PHP \xe0 partir du site officiel de PHP (",(0,l.kt)("a",{parentName:"p",href:"https://windows.php.net/download/"},"https://windows.php.net/download/"),") et suivez les instructions d'installation.")),(0,l.kt)("ul",null,"1- Ouvrir une invite de commande : Une fois PHP install\xe9, ouvrez une invite de commande Windows."),(0,l.kt)("ul",null,"2- T\xe9l\xe9charger le fichier d'installation de la CLI de Symfony : Tapez la commande suivante dans l'invite de commande :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"php -r \"readfile('https://get.symfony.com/cli/installer');\" | php\n")),(0,l.kt)("p",null,"Cette commande t\xe9l\xe9charge le fichier d'installation de la CLI de Symfony et l'ex\xe9cute automatiquement."),(0,l.kt)("ul",null,"3-Ajouter la CLI de Symfony au PATH : Pour pouvoir utiliser la CLI de Symfony \xe0 partir de n'importe quel r\xe9pertoire, vous devez ajouter le chemin d'installation de la CLI de Symfony au PATH de votre syst\xe8me. Pour ce faire, tapez les commandes suivantes dans l'invite de commande :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'setx /M PATH "%PATH%;C:\\Users"votre_nom_utilisateur"\\AppData\\Roaming\\Composer\\vendor\\bin"\n')),(0,l.kt)("p",null,"Remplacez ",(0,l.kt)("strong",{parentName:"p"},'"votre_nom_utilisateur"')," par le nom de votre utilisateur Windows."),(0,l.kt)("ul",null,"5- V\xe9rifier l'installation : Pour v\xe9rifier si la CLI de Symfony a \xe9t\xe9 correctement install\xe9e, tapez la commande suivante dans l'invite de commande :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"symfony -v\n")),(0,l.kt)("p",null,"Si la CLI de Symfony est correctement install\xe9e, vous devriez voir la version de la CLI s'afficher."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"}," Notez que la CLI de Symfony n\xe9cessite \xe9galement Composer pour fonctionner, donc assurez-vous que Composer est install\xe9 sur votre ordinateur avant d'installer la CLI de Symfony."))),(0,l.kt)(w,{value:"Linux",label:"Linux",mdxType:"TabItem"},(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"Installer PHP : Avant d'installer la CLI de Symfony, vous devez vous assurer que PHP est install\xe9 sur votre distribution Linux. Pour ce faire, ouvrez un terminal et tapez la commande suivante :\nsudo apt-get install php"),(0,l.kt)("p",{parentName:"admonition"},"Si vous utilisez une autre distribution Linux, vous pouvez trouver la commande d'installation de PHP appropri\xe9e pour votre distribution en effectuant une recherche en ligne.")),(0,l.kt)("ul",null,"1- Installer Composer : La CLI de Symfony n\xe9cessite Composer pour fonctionner. Pour installer Composer, tapez les commandes suivantes dans le terminal : php -r \"copy('https://getcomposer.org/installer', 'composer-setup.php');\" "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"php composer-setup.php --install-dir=/usr/local/bin --filename=composer\n")),(0,l.kt)("p",null,"Cette commande t\xe9l\xe9charge le fichier d'installation de Composer \xe0 partir du site officiel de Composer, puis l'installe dans le r\xe9pertoire /usr/local/bin."),(0,l.kt)("ul",null,"2- T\xe9l\xe9charger le fichier d'installation de la CLI de Symfony : Tapez la commande suivante dans le terminal :"),'wget https://get.symfony.com/cli/installer -O - | bash"',(0,l.kt)("p",null,"Cette commande t\xe9l\xe9charge le fichier d'installation de la CLI de Symfony et l'ex\xe9cute automatiquement."),(0,l.kt)("ul",null,"3- Ajouter la CLI de Symfony au PATH : Pour pouvoir utiliser la CLI de Symfony \xe0 partir de n'importe quel r\xe9pertoire, vous devez ajouter le chemin d'installation de la CLI de Symfony au PATH de votre syst\xe8me. Pour ce faire, tapez les commandes suivantes dans le terminal :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," echo 'export PATH=\"$HOME/.symfony/bin:$PATH\"' >> ~/.bashrc\n")),(0,l.kt)("p",null,'Cette commande ajoute la ligne "export PATH="$HOME/.symfony/bin:$PATH"" au fichier .bashrc de votre utilisateur.'),(0,l.kt)("ul",null,"4- Fermer et rouvrir le terminal : Pour que les modifications apport\xe9es au fichier .bashrc prennent effet, vous devez fermer et rouvrir le terminal."),(0,l.kt)("ul",null,"5- V\xe9rifier l'installation : Pour v\xe9rifier si la CLI de Symfony a \xe9t\xe9 correctement install\xe9e, tapez la commande suivante dans le terminal :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," symfony -v\n")),(0,l.kt)("p",null,"Si la CLI de Symfony est correctement install\xe9e, vous devriez voir la version de la CLI s'afficher."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Installer MySQL (",(0,l.kt)("a",{parentName:"strong",href:"https://dev.mysql.com/downloads/windows/installer/"},"https://dev.mysql.com/downloads/windows/installer/"),")")),(0,l.kt)(z,{mdxType:"Tabs"},(0,l.kt)(w,{value:"Windows",label:"Windows",default:!0,mdxType:"TabItem"},(0,l.kt)("ul",null,"1- T\xe9l\xe9charger le programme d'installation : T\xe9l\xe9chargez le programme d'installation de MySQL \xe0 partir du site officiel de MySQL. S\xe9lectionnez la version appropri\xe9e pour votre syst\xe8me d'exploitation Windows (32 ou 64 bits)."),(0,l.kt)("ul",null,"2- Lancer l'installation : Double-cliquez sur le fichier d'installation que vous avez t\xe9l\xe9charg\xe9 pour lancer l'installation de MySQL. Suivez les instructions \xe0 l'\xe9cran pour installer MySQL."),(0,l.kt)("ul",null,"Configurer le serveur MySQL : Pendant le processus d'installation, vous devrez configurer le serveur MySQL. Assurez-vous de noter le mot de passe root que vous choisissez pour le serveur, car vous en aurez besoin pour vous connecter au serveur MySQL ult\xe9rieurement."),(0,l.kt)("p",null,"Ajouter MySQL au PATH : Pour pouvoir utiliser MySQL \xe0 partir de n'importe quel r\xe9pertoire, vous devez ajouter le chemin d'installation de MySQL au PATH de votre syst\xe8me. Pour ce faire, suivez les \xe9tapes suivantes :"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"Cliquez sur le bouton D\xe9marrer de Windows."),(0,l.kt)("li",{parentName:"ul"},'Cliquez avec le bouton droit de la souris sur "Ordinateur" ou "Ce PC", puis s\xe9lectionnez "Propri\xe9t\xe9s".'),(0,l.kt)("li",{parentName:"ul"},'Cliquez sur "Param\xe8tres syst\xe8me avanc\xe9s".'),(0,l.kt)("li",{parentName:"ul"},'Cliquez sur "Variables d\'environnement".'),(0,l.kt)("li",{parentName:"ul"},'Sous "Variables syst\xe8me", recherchez la variable "Path" et cliquez sur "Modifier".'),(0,l.kt)("li",{parentName:"ul"},'Ajoutez le chemin d\'installation de MySQL \xe0 la fin de la ligne de chemin existante, en s\xe9parant chaque chemin avec un point-virgule. Par exemple : "C:\\Program Files\\MySQL\\MySQL Server 8.0\\bin".'),(0,l.kt)("li",{parentName:"ul"},'Cliquez sur "OK" pour fermer toutes les fen\xeatres.'))),(0,l.kt)("ul",null,"5- V\xe9rifier l'installation : Pour v\xe9rifier si MySQL a \xe9t\xe9 correctement install\xe9, ouvrez une invite de commande et tapez la commande suivante :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," mysql -u root -p\n")),(0,l.kt)("p",null,"Si MySQL est correctement install\xe9, vous devriez \xeatre invit\xe9 \xe0 entrer votre mot de passe root. Si vous pouvez vous connecter au serveur MySQL, cela signifie que l'installation de MySQL a r\xe9ussi."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Ces \xe9tapes devraient vous permettre d'installer MySQL sur votre ordinateur Windows. Notez que les \xe9tapes peuvent varier l\xe9g\xe8rement en fonction de la version de MySQL que vous installez."))),(0,l.kt)(w,{value:"Linux",label:"Linux",mdxType:"TabItem"},(0,l.kt)("ul",null,"1- Ouvrir un terminal : Pour installer MySQL sur Linux, vous devez ouvrir un terminal. Sur la plupart des distributions Linux, vous pouvez ouvrir un terminal en appuyant sur Ctrl + Alt + T."),(0,l.kt)("ul",null,"2- Mettre \xe0 jour les d\xe9p\xf4ts : Tapez la commande suivante dans le terminal pour mettre \xe0 jour les d\xe9p\xf4ts de votre syst\xe8me :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo apt-get update\n")),(0,l.kt)("ul",null,"3- Installer MySQL : Tapez la commande suivante dans le terminal pour installer MySQL :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo apt-get install mysql-server\n")),(0,l.kt)("ul",null,"4- Configurer le serveur MySQL : Pendant le processus d'installation, vous devrez configurer le serveur MySQL. Assurez-vous de noter le mot de passe root que vous choisissez pour le serveur, car vous en aurez besoin pour vous connecter au serveur MySQL ult\xe9rieurement."),(0,l.kt)("ul",null,"5- Ajouter MySQL au PATH : Pour pouvoir utiliser MySQL \xe0 partir de n'importe quel r\xe9pertoire, vous devez ajouter le chemin d'installation de MySQL au PATH de votre syst\xe8me. Pour ce faire, tapez la commande suivante dans le terminal :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"echo 'export PATH=\"/usr/local/mysql/bin:$PATH\"' >> ~/.bashrc\n")),(0,l.kt)("p",null,'Cette commande ajoute la ligne "export PATH="/usr/local/mysql/bin:$PATH"" au fichier .bashrc de votre utilisateur.'),(0,l.kt)("ul",null,"6- Red\xe9marrer le terminal : Pour que les modifications apport\xe9es au fichier .bashrc prennent effet, vous devez fermer et rouvrir le terminal."),(0,l.kt)("ul",null,"7- V\xe9rifier l'installation : Pour v\xe9rifier si MySQL a \xe9t\xe9 correctement install\xe9, tapez la commande suivante dans le terminal :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," mysql -u root -p\n")),(0,l.kt)("p",null,"Si MySQL est correctement install\xe9, vous devriez \xeatre invit\xe9 \xe0 entrer votre mot de passe root. Si vous pouvez vous connecter au serveur MySQL, cela signifie que l'installation de MySQL a r\xe9ussi."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Ces \xe9tapes devraient vous permettre d'installer MySQL sur votre distribution Linux. Notez que les \xe9tapes peuvent varier l\xe9g\xe8rement en fonction de la distribution Linux que vous utilisez.  ")))),(0,l.kt)("h3",{id:"d\xe9tails"},"D\xe9tails"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Basculez moi\xa0!"),(0,l.kt)("div",null,(0,l.kt)("div",null,"Cette section et un plus"),(0,l.kt)("br",null),(0,l.kt)("details",null,(0,l.kt)("summary",null,"N'oubliez pas de v\xe9rifier les versions de votre projet"),(0,l.kt)("div",null,"\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32")))))}H.isMDXComponent=!0}}]);