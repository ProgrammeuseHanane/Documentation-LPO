Doctrine est un framework ORM (Object-Relational Mapping) pour PHP. L'ORM est une technique de programmation qui permet de faciliter la communication entre une base de données relationnelle et une application orientée objet. En utilisant l'ORM, les développeurs peuvent travailler avec des objets en mémoire plutôt qu'avec des requêtes SQL brutes, ce qui simplifie le développement d'applications en évitant les tâches répétitives et fastidieuses de création et de manipulation d'objets de la base de données.

:::note

Doctrine permet ainsi de faciliter l'implémentation des fonctionnalités CRUD (Create, Read, Update, Delete) en fournissant une interface simple et intuitive pour manipuler les données de la base de données. Elle offre également d'autres fonctionnalités utiles comme la gestion des relations entre les tables, la validation des données et la gestion des transactions.
:::

# La création d'entités en utilisant Doctrine se fait généralement en suivant ces étapes :

  1- Ouvrir le terminal : Ouvrez le terminal et naviguez jusqu'au répertoire du projet Symfony.

  2- Installer Doctrine : Doctrine est un ORM (Object-Relational Mapping) qui permet de faciliter la manipulation de la base de données dans Symfony. Pour l'installer, exécutez la commande suivante :

```bash
composer require symfony/orm-pack
```

  3- Configurer la base de données : Dans le fichier .env à la racine de votre projet, ajoutez les informations de connexion à votre base de données.

  4- Créer l'entité : Pour créer une entité, utilisez la commande suivante :

```bash
php bin/console make:entity
```
  
  Cette commande vous guidera à travers les étapes de création de l'entité. Vous devrez fournir un nom pour l'entité et spécifier les propriétés que vous souhaitez ajouter. Vous pouvez également ajouter des relations entre les entités.

   5- Générer les getters et setters : Les getters et setters permettent d'accéder et de modifier les propriétés d'une entité. Pour les générer automatiquement, utilisez la commande suivante :

```bash
php bin/console make:entity --regenerate
```

   6- Créer la table : Pour créer la table correspondante à l'entité, utilisez la commande suivante :

```bash
php bin/console doctrine:schema:update --force
```

Cette commande créera la table dans la base de données en utilisant les informations définies dans l'entité.


Ces étapes vous permettent de créer et d'utiliser des entités dans votre projet Symfony. Il est important de noter que la création d'entités est un processus itératif et que vous devrez peut-être modifier votre schéma de base de données et vos entités au fur et à mesure que votre projet évolue.

# Migration
 La migration permet de gérer les changements dans le schéma de la base de données tout en conservant les données existantes. Voici les étapes pour effectuer une migration dans un projet Symfony :

   1- Créer une nouvelle migration : Pour créer une nouvelle migration, utilisez la commande suivante :
```bash
php bin/console make:migration
```
Cette commande va créer un fichier de migration dans le dossier src/Migrations.

   2- Éditer la migration : Ouvrez le fichier de migration et ajoutez les instructions pour la modification de la base de données. Vous pouvez ajouter des colonnes, des tables, des clés étrangères, etc.

   3- Exécuter la migration : Pour exécuter la migration, utilisez la commande suivante :
```bash
php bin/console doctrine:migrations:migrate
```

Cette commande exécutera toutes les migrations qui n'ont pas encore été exécutées.

   4- Vérifier la migration : Vérifiez que la migration a été exécutée correctement en vérifiant la base de données. Vous pouvez également utiliser la commande suivante pour afficher l'historique des migrations :
```bash
php bin/console doctrine:migrations:status
```
Cette commande affichera l'état actuel de la base de données et de toutes les migrations.

   5- Réverser une migration : Si vous avez besoin de réverser une migration, vous pouvez utiliser la commande suivante :
```bash
php bin/console doctrine:migrations:execute <migration_version> --down
```

Remplacez <migration_version> par le numéro de version de la migration que vous souhaitez réverser.