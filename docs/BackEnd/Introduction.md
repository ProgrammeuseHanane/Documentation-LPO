---
sidebar_position: 1
---
2023
# Symfony

## Objectif
Symfony est un framework PHP open-source pour le développement d'applications web robustes et évolutives. Pour créer un projet Symfony, vous pouvez suivre les étapes suivantes :

## Installons un projet symfony

1- Installer PHP et Composer sur votre ordinateur si ce n'est pas déjà fait. Vous pouvez le faire en téléchargeant l'installateur sur les sites officiels de PHP et de Composer.

2- Ouvrez un terminal ou une invite de commandes et installez l'outil de ligne de commande de Symfony en tapant la commande suivante :

```js
wget https://get.symfony.com/cli/installer -O - | bash
```

Cela installera l'outil de création de projet Symfony sur votre ordinateur.

3- Créez un nouveau projet Symfony en tapant la commande suivante dans votre terminal :

```sql
symfony new my-project --full
```

Cela créera un nouveau projet Symfony nommé "my-project" dans le dossier actuel. Vous pouvez remplacer "my-project" par le nom que vous souhaitez donner à votre projet.

L'option **--full** installe toutes les dépendances recommandées pour un nouveau projet Symfony.

4- Accédez au répertoire du projet en tapant la commande suivante dans votre terminal :

```shell
cd my-project
```
5- Lancez le serveur web Symfony en tapant la commande suivante :

```sql
symfony server:start
```

Cela lancera le serveur web de développement de Symfony à l'adresse http://localhost:8000.

Vous pouvez maintenant commencer à développer votre application Symfony en modifiant les fichiers contenus dans le dossier du projet. Vous pouvez également installer des bundles supplémentaires à l'aide de la commande "composer require" et les utiliser dans votre application.

