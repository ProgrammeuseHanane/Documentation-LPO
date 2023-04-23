import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
<link rel="stylesheet" href="/app.css"/>

## Installation 

*Installer les outils nécessaires :*

**Installer Node.js (https://nodejs.org/)**
<Tabs>
  <TabItem value="Windows" label="Windows" default>
<ul>Une fois sur le Site </ul>
 
  <ul>1- Cliquez sur le bouton "Download" pour télécharger le programme d'installation.</ul>
  <ul>2- Une fois le téléchargement terminé, double-cliquez sur le fichier d'installation pour lancer l'installation.</ul>
  <ul>3- Acceptez les termes du contrat de licence et cliquez sur "Next".</ul>
  <ul>4- Choisissez le dossier d'installation et cliquez sur "Next".</ul>
  <ul>5- Sélectionnez les fonctionnalités que vous souhaitez installer (les options par défaut sont généralement suffisantes) et cliquez sur "Next".</ul>
  <ul>6- Cliquez sur "Install" pour lancer l'installation.</ul>
  <ul>7- Attendez que l'installation soit terminée et cliquez sur "Finish" pour fermer l'installateur.</ul>
  <ul> Une fois que Node.js est installé sur votre ordinateur, vous pouvez vérifier si l'installation a réussi en ouvrant une invite de commande et en tapant la commande suivante :</ul>

     Node -v
</TabItem>
<TabItem value="Linux" label="Linux">
  <ul>1- Ouvrez un terminal et tapez la commande suivante pour mettre à jour le cache du package manager : </ul>

     sudo apt update
  <ul>2- Ensuite, tapez la commande suivante pour installer Node.js:</ul>

     sudo apt install nodejs     
  <ul>3- Pour vérifier si l'installation a réussi, tapez la commande suivante pour afficher la version de Node.js installée sur votre ordinateur :</ul>

     node -v
  <ul>Cette commande devrait afficher la version de Node.js. 
   Si vous voyez une version affichée pour la commande, cela signifie que Node.js  est installé et fonctionnent correctement sur votre système Linux.</ul>
 <div >

:::info
Selon votre distribution Linux, la commande pour installer Node.js peut différer légèrement. Par exemple, sur les distributions basées sur Debian, vous pouvez utiliser la commande sudo apt-get install nodejs à la place de sudo apt install nodejs.
:::


  </div>
  </TabItem>
</Tabs>


**Installer PHP (https://windows.php.net/download/)**
<Tabs>
  <TabItem value="Windows" label="Windows" default>
<ul>1- Télécharger PHP: Tout d'abord, vous devez télécharger la version de PHP que vous souhaitez installer sur votre ordinateur. Vous pouvez télécharger la dernière version de PHP sur le site officiel de PHP .</ul>
<ul>2- Extraire les fichiers: Après avoir téléchargé le fichier ZIP de PHP, vous devez extraire les fichiers dans un dossier sur votre ordinateur.</ul>

<ul> 3- Définir la variable d'environnement PATH: Pour utiliser PHP à partir de la ligne de commande, vous devez définir la variable d'environnement PATH pour pointer vers le dossier où vous avez installé PHP.</ul>

:::info
 Pour ce faire, suivez ces étapes: 

- Cliquez sur le bouton Démarrer, faites un clic droit sur Ordinateur et sélectionnez Propriétés.
- Dans la fenêtre qui s'ouvre, sélectionnez Paramètres système avancés.
- Cliquez sur Variables d'environnement.
- Sous Variables système, recherchez la variable PATH et cliquez sur Modifier.
- Ajoutez le chemin d'accès au dossier contenant les fichiers PHP à la fin de la ligne de valeur, en utilisant un point-virgule pour séparer le chemin d'accès des autres chemins.
- Cliquez sur OK pour fermer toutes les fenêtres.
:::

<ul>4- Configurer le serveur web: Si vous souhaitez exécuter des scripts PHP sur un serveur web local, vous devez installer un serveur web tel que Apache ou IIS, puis configurer le serveur web pour utiliser PHP. Les étapes précises pour cette configuration dépendront du serveur web que vous utilisez.</ul>

<ul>5- Tester l'installation: Pour tester si PHP est correctement installé, créez un fichier PHP simple contenant la commande suivante:</ul>

```php
  <?php
  phpinfo();
  ?>
```
Enregistrez le fichier sous le nom info.php dans le dossier racine de votre serveur web local (généralement un dossier appelé "htdocs" pour Apache ou "wwwroot" pour IIS). Ensuite, ouvrez un navigateur web et accédez à l'adresse suivante: http://localhost/info.php. Si PHP est correctement installé, vous devriez voir une page contenant des informations sur votre installation de PHP.

</TabItem>
<TabItem value="Linux" label="Linux">
<ul>1- Ouvrir un terminal: Tout d'abord, ouvrez un terminal sur votre distribution Linux.</ul>

<ul>2- Mettre à jour les packages: Avant d'installer PHP, vous devez vous assurer que les packages de votre distribution Linux sont à jour. Pour ce faire, tapez la commande suivante dans le terminal:</ul>

sudo apt-get update

<ul>3- Installer PHP: Pour installer PHP, tapez la commande suivante dans le terminal:</ul>

sudo apt-get install php

**Cette commande va installer PHP ainsi que les extensions et dépendances nécessaires.**

<ul>4- Tester l'installation: Pour tester si PHP est correctement installé, créez un fichier PHP simple contenant la commande suivante:</ul>

```php
  <?php
  phpinfo();
  ?>
```
Enregistrez le fichier sous le nom info.php dans le dossier racine de votre serveur web local (généralement un dossier appelé "/var/www/html"). Ensuite, ouvrez un navigateur web et accédez à l'adresse suivante: http://localhost/info.php. Si PHP est correctement installé, vous devriez voir une page contenant des informations sur votre installation de PHP.

:::info
Notez que les commandes exactes peuvent varier selon votre distribution Linux, donc consultez la documentation de votre distribution pour des instructions spécifiques.
:::
   
</TabItem>
</Tabs>

**Installer Composer (https://getcomposer.org/)**
<Tabs>
<TabItem value="Windows" label="Windows" default>
<ul>1- Télécharger Composer: Tout d'abord, vous devez télécharger le fichier d'installation de Composer à partir du site officiel de Composer.</ul>
<ul>2- Exécuter le fichier d'installation: Une fois le fichier d'installation de Composer téléchargé, double-cliquez dessus pour l'exécuter. Le programme d'installation va vous guider tout au long du processus d'installation.</ul>
<ul>3- Configurer les options d'installation: Pendant l'installation, vous serez invité à configurer certaines options, telles que le chemin d'installation de Composer et les paramètres de proxy si vous en utilisez un. Vous pouvez généralement accepter les options par défaut, sauf si vous avez une configuration réseau particulière.</ul>
<ul>4- Vérifier l'installation: Pour vérifier si Composer a été correctement installé, ouvrez une invite de commande et tapez la commande suivante:</ul>

    composer -V

Si Composer est correctement installé, vous devriez voir la version de Composer s'afficher.

:::info
Notez que Composer nécessite également PHP pour fonctionner, donc assurez-vous que PHP est installé sur votre ordinateur avant d'installer Composer.
:::

</TabItem>
<TabItem value="Linux" label="Linux">
<ul>1- Ouvrir un terminal: Tout d'abord, ouvrez un terminal sur votre distribution Linux.</ul>

<ul>2- Télécharger le fichier d'installation: Pour télécharger le fichier d'installation de Composer, tapez la commande suivante dans le terminal:</ul>

    php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"

Cette commande va télécharger le fichier composer-setup.php à partir du site officiel de Composer.

<ul>3- Vérifier l'intégrité du fichier: Avant d'exécuter le fichier d'installation de Composer, vous devez vérifier l'intégrité du fichier en utilisant la clé de signature Composer. Pour ce faire, tapez les commandes suivantes dans le terminal:</ul>

    php -r "if (hash_file('SHA384', 'composer-setup.php') === '669656bab3166a7aff8a7506b8cb2d1c292f042046c5a994c43155c0be6190fa0355160742ab2e1c88d40d5be660b410') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"

Si le message "Installer verified" s'affiche, le fichier d'installation est authentique. Si le message "Installer corrupt" s'affiche, vous devez supprimer le fichier composer-setup.php et recommencer à partir de l'étape 2.

<ul>4- Exécuter le fichier d'installation: Pour exécuter le fichier d'installation de Composer, tapez la commande suivante dans le terminal:</ul>

    sudo php composer-setup.php --install-dir=/usr/local/bin --filename=composer


Cette commande va installer Composer dans le répertoire /usr/local/bin et créer un alias appelé "composer".

<ul>5- Vérifier l'installation: Pour vérifier si Composer a été correctement installé, tapez la commande suivante dans le terminal:</ul>

    composer -V

Si Composer est correctement installé, vous devriez voir la version de Composer s'afficher.

:::info
Notez que Composer nécessite également PHP pour fonctionner, donc assurez-vous que PHP est installé sur votre ordinateur avant d'installer Composer.
:::

</TabItem>
</Tabs>

**Installer Symfony CLI (https://symfony.com/download)**
<Tabs>
<TabItem value="Windows" label="Windows" default>

:::warning
Installer PHP : Avant d'installer la CLI de Symfony, vous devez vous assurer que PHP est installé sur votre ordinateur Windows. Pour ce faire, téléchargez le fichier d'installation de PHP à partir du site officiel de PHP (https://windows.php.net/download/) et suivez les instructions d'installation.
:::

<ul>1- Ouvrir une invite de commande : Une fois PHP installé, ouvrez une invite de commande Windows.</ul>

<ul>2- Télécharger le fichier d'installation de la CLI de Symfony : Tapez la commande suivante dans l'invite de commande :</ul>

    php -r "readfile('https://get.symfony.com/cli/installer');" | php

Cette commande télécharge le fichier d'installation de la CLI de Symfony et l'exécute automatiquement.

<ul>3-Ajouter la CLI de Symfony au PATH : Pour pouvoir utiliser la CLI de Symfony à partir de n'importe quel répertoire, vous devez ajouter le chemin d'installation de la CLI de Symfony au PATH de votre système. Pour ce faire, tapez les commandes suivantes dans l'invite de commande :</ul>

    setx /M PATH "%PATH%;C:\Users"votre_nom_utilisateur"\AppData\Roaming\Composer\vendor\bin"

Remplacez **"votre_nom_utilisateur"** par le nom de votre utilisateur Windows.

<ul>5- Vérifier l'installation : Pour vérifier si la CLI de Symfony a été correctement installée, tapez la commande suivante dans l'invite de commande :</ul>

    symfony -v

Si la CLI de Symfony est correctement installée, vous devriez voir la version de la CLI s'afficher.

:::info
 Notez que la CLI de Symfony nécessite également Composer pour fonctionner, donc assurez-vous que Composer est installé sur votre ordinateur avant d'installer la CLI de Symfony.
:::  
</TabItem>
<TabItem value="Linux" label="Linux">

:::warning
Installer PHP : Avant d'installer la CLI de Symfony, vous devez vous assurer que PHP est installé sur votre distribution Linux. Pour ce faire, ouvrez un terminal et tapez la commande suivante :
sudo apt-get install php

Si vous utilisez une autre distribution Linux, vous pouvez trouver la commande d'installation de PHP appropriée pour votre distribution en effectuant une recherche en ligne.
:::
<ul>1- Installer Composer : La CLI de Symfony nécessite Composer pour fonctionner. Pour installer Composer, tapez les commandes suivantes dans le terminal :
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" </ul>

    php composer-setup.php --install-dir=/usr/local/bin --filename=composer

Cette commande télécharge le fichier d'installation de Composer à partir du site officiel de Composer, puis l'installe dans le répertoire /usr/local/bin.

<ul>2- Télécharger le fichier d'installation de la CLI de Symfony : Tapez la commande suivante dans le terminal :</ul>
     wget https://get.symfony.com/cli/installer -O - | bash"

Cette commande télécharge le fichier d'installation de la CLI de Symfony et l'exécute automatiquement.

<ul>3- Ajouter la CLI de Symfony au PATH : Pour pouvoir utiliser la CLI de Symfony à partir de n'importe quel répertoire, vous devez ajouter le chemin d'installation de la CLI de Symfony au PATH de votre système. Pour ce faire, tapez les commandes suivantes dans le terminal :</ul>

     echo 'export PATH="$HOME/.symfony/bin:$PATH"' >> ~/.bashrc

Cette commande ajoute la ligne "export PATH="$HOME/.symfony/bin:$PATH"" au fichier .bashrc de votre utilisateur.

<ul>4- Fermer et rouvrir le terminal : Pour que les modifications apportées au fichier .bashrc prennent effet, vous devez fermer et rouvrir le terminal.</ul>

<ul>5- Vérifier l'installation : Pour vérifier si la CLI de Symfony a été correctement installée, tapez la commande suivante dans le terminal :</ul>

     symfony -v

Si la CLI de Symfony est correctement installée, vous devriez voir la version de la CLI s'afficher.
    
</TabItem>
</Tabs>

**Installer MySQL (https://dev.mysql.com/downloads/windows/installer/)**
<Tabs>
<TabItem value="Windows" label="Windows" default>
<ul>1- Télécharger le programme d'installation : Téléchargez le programme d'installation de MySQL à partir du site officiel de MySQL. Sélectionnez la version appropriée pour votre système d'exploitation Windows (32 ou 64 bits).</ul>

<ul>2- Lancer l'installation : Double-cliquez sur le fichier d'installation que vous avez téléchargé pour lancer l'installation de MySQL. Suivez les instructions à l'écran pour installer MySQL.</ul>

<ul>Configurer le serveur MySQL : Pendant le processus d'installation, vous devrez configurer le serveur MySQL. Assurez-vous de noter le mot de passe root que vous choisissez pour le serveur, car vous en aurez besoin pour vous connecter au serveur MySQL ultérieurement.</ul>

Ajouter MySQL au PATH : Pour pouvoir utiliser MySQL à partir de n'importe quel répertoire, vous devez ajouter le chemin d'installation de MySQL au PATH de votre système. Pour ce faire, suivez les étapes suivantes :

:::info
- Cliquez sur le bouton Démarrer de Windows.
- Cliquez avec le bouton droit de la souris sur "Ordinateur" ou "Ce PC", puis sélectionnez "Propriétés".
- Cliquez sur "Paramètres système avancés".
- Cliquez sur "Variables d'environnement".
- Sous "Variables système", recherchez la variable "Path" et cliquez sur "Modifier".
- Ajoutez le chemin d'installation de MySQL à la fin de la ligne de chemin existante, en séparant chaque chemin avec un point-virgule. Par exemple : "C:\Program Files\MySQL\MySQL Server 8.0\bin".
- Cliquez sur "OK" pour fermer toutes les fenêtres.
:::

<ul>5- Vérifier l'installation : Pour vérifier si MySQL a été correctement installé, ouvrez une invite de commande et tapez la commande suivante :</ul>

     mysql -u root -p

Si MySQL est correctement installé, vous devriez être invité à entrer votre mot de passe root. Si vous pouvez vous connecter au serveur MySQL, cela signifie que l'installation de MySQL a réussi.

:::info
Ces étapes devraient vous permettre d'installer MySQL sur votre ordinateur Windows. Notez que les étapes peuvent varier légèrement en fonction de la version de MySQL que vous installez.
:::

</TabItem>
<TabItem value="Linux" label="Linux">
<ul>1- Ouvrir un terminal : Pour installer MySQL sur Linux, vous devez ouvrir un terminal. Sur la plupart des distributions Linux, vous pouvez ouvrir un terminal en appuyant sur Ctrl + Alt + T.</ul>

<ul>2- Mettre à jour les dépôts : Tapez la commande suivante dans le terminal pour mettre à jour les dépôts de votre système :</ul>

    sudo apt-get update

<ul>3- Installer MySQL : Tapez la commande suivante dans le terminal pour installer MySQL :</ul>

    sudo apt-get install mysql-server

<ul>4- Configurer le serveur MySQL : Pendant le processus d'installation, vous devrez configurer le serveur MySQL. Assurez-vous de noter le mot de passe root que vous choisissez pour le serveur, car vous en aurez besoin pour vous connecter au serveur MySQL ultérieurement.</ul>

<ul>5- Ajouter MySQL au PATH : Pour pouvoir utiliser MySQL à partir de n'importe quel répertoire, vous devez ajouter le chemin d'installation de MySQL au PATH de votre système. Pour ce faire, tapez la commande suivante dans le terminal :</ul>

    echo 'export PATH="/usr/local/mysql/bin:$PATH"' >> ~/.bashrc

Cette commande ajoute la ligne "export PATH="/usr/local/mysql/bin:$PATH"" au fichier .bashrc de votre utilisateur.

<ul>6- Redémarrer le terminal : Pour que les modifications apportées au fichier .bashrc prennent effet, vous devez fermer et rouvrir le terminal.</ul>

<ul>7- Vérifier l'installation : Pour vérifier si MySQL a été correctement installé, tapez la commande suivante dans le terminal :</ul>

     mysql -u root -p

Si MySQL est correctement installé, vous devriez être invité à entrer votre mot de passe root. Si vous pouvez vous connecter au serveur MySQL, cela signifie que l'installation de MySQL a réussi.

:::info
Ces étapes devraient vous permettre d'installer MySQL sur votre distribution Linux. Notez que les étapes peuvent varier légèrement en fonction de la distribution Linux que vous utilisez.  
:::

</TabItem>
</Tabs>


### Détails

<details>
  <summary>Basculez moi !</summary>
  <div>
    <div>Cette section et un plus</div>
    <br/>
    <details>
      <summary>
      N'oubliez pas de vérifier les versions de votre projet 
      </summary>
      <div>
        😲😲😲😲😲
      </div>
    </details>
  </div>
</details>