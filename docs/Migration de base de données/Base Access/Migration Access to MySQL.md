
# Access TO MySQL
## Introduction

:::info
Access to MySQL est un petit programme qui convertira les bases de données Microsoft Access en MySQL.
:::

- Interface de l'assistant.
- Transférer des données directement d'un serveur à un autre.
- Créez un fichier de vidage.
- Sélectionnez les tables à transférer.
- Sélectionnez les champs à transférer.
- Transférer des bases de données protégées par mot de passe.
- Prend en charge à la fois la sécurité partagée et la sécurité au niveau de l'utilisateur.
- Transfert facultatif des index.
- Transfert facultatif des dossiers.
- Transfert facultatif des valeurs par défaut dans les définitions de champs.
- Identifie et transfère les types de champs de numérotation automatique.
- Interface de ligne de commande.
- Installation, désinstallation et mise à niveau faciles.
## Utiliser l'accès à MySQL
Lorsque vous démarrez le programme, il vous fera passer par un assistant. L'assistant vous posera toutes les questions nécessaires pour configurer le transfert de la base de données. Dans la première étape, vous êtes invité à fournir le nom de fichier de la base de données Microsoft Access à convertir.

Si votre base de données Access vous demande de vous connecter, vous pouvez spécifier un nom d'utilisateur, un mot de passe et une base de données système.

<p align="center">

   ![image     ](/img/capture1.png)

</p>

:::info

Spécifier la base de données Access

:::

La base de données de destination et les paramètres de connexion au serveur MySQL sont spécifiés comme indiqué ci-dessous. Vous aurez le choix de placer le résultat dans un fichier de vidage au lieu de le transférer directement dans une autre base de données MySQL.
<p align="center">

   ![image     ](/img/bullzip2.png)

</p>

:::info

Paramètres de connexion et de destination MySQL

:::

Vous pouvez spécifier exactement les tables que vous souhaitez transférer vers la base de données de destination. Cochez simplement la case devant chaque nom de table que vous souhaitez transférer et cliquez sur suivant.

<p align="center">

   ![image     ](/img/capture3.png)

</p>

:::info

Sélection des tables à transférer

:::

Des options de transfert supplémentaires peuvent être définies dans la boîte de dialogue ci-dessous. Ici, vous pouvez spécifier si vous souhaitez transférer les index de la base de données Access vers MySQL. Vous pouvez également choisir de ne transférer aucun enregistrement. Cela créera uniquement les tables dans la table de destination et les laissera vides.

Dans Access et MySQL, les champs peuvent avoir des valeurs par défaut. Lors de la création des tables dans MySQL, le programme peut conserver les valeurs par défaut spécifiées dans la définition du champ Accès. Les propriétés de numérotation automatique d'un champ peuvent également être transférées si vous cochez la case Propriétés de numérotation automatique .

<p align="center">

   ![image     ](/img/capture2.png)

</p>

:::info

Définition des options de transfert avancées

:::

Après avoir répondu à toutes les questions de l'assistant, vous pouvez appuyer sur Terminer . Le transfert va maintenant s'exécuter jusqu'à ce que toutes les tables sélectionnées soient transférées. Lorsque le transfert est terminé, vous verrez un petit rapport vous indiquant la quantité de données transférées.

:::note

Les paramètres de l'assistant peuvent être enregistrés dans un fichier .ini.

:::

pour l'installation de l'outil visitez le site [Download BullZip MS Access to MySQL 5.4.0.281 for Windows](https://www.download.io/bullzip-ms-access-to-mysql-download-windows.html)