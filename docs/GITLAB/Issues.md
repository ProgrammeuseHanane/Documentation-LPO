
Au cours de la réalisation d'un projet, notre équipe a été confrontée à plusieurs problèmes qui ont eu un impact significatif sur l'avancement du projet. Ces problèmes ont été considérés comme les plus graves car ils ont entraîné un blocage ou une interruption du travail de l'équipe, et ont donc nécessité une attention particulière pour être résolus. Nous présentons dans cette section ces déffirents issues.
:::danger 

Cannot autowire service "doctrine.orm.entity_manager": argument "$config" of method "Doctrine\ORM\EntityManager::__construct()" references class "Doctrine\ORM\Configuration" but no such service exists. You should maybe alias this class to one of these existing services: "doctrine.orm.configuration", "doctrine.orm.default_configuration". 

:::

# Solution 
Cette erreur se produit généralement dans le contexte de l'utilisation du framework Symfony et de l'intégration de Doctrine ORM.

La raison de cette erreur est que l'argument $config de la méthode Doctrine\ORM\EntityManager::__construct() fait référence à la classe Doctrine\ORM\Configuration, mais aucun service portant ce nom n'existe dans le conteneur de services de Symfony.

Cela peut se produire si le bundle Doctrine est mal configuré ou si une configuration personnalisée de Doctrine a été ajoutée sans avoir été correctement déclarée en tant que service.

Pour résoudre cette erreur, il faut modifier le fichier de configuration services.yaml comme suit :

```jsx
  #Configuration de l'entity manager
  doctrine.orm.configuration:
    class: Doctrine\ORM\Configuration
    arguments:
    // highlight-next-line
    - "%kernel.project_dir%/**config/packages**/doctrine.yaml"

  doctrine.orm.entity_manager:
   // highlight-next-line
    class: Doctrine\ORM\**EntityManagerInterface**
    arguments: ["@doctrine.orm.configuration"]
    public: true

```
Vérifiez ce qui ce trouve entre  **


:::danger

Front->Back : Erreur CORS(Cross-Origin Resource Sharing)

:::

La méthode OPTIONS est une méthode HTTP utilisée pour demander des informations sur les options de communication disponibles pour une ressource. Elle est généralement utilisée dans le cadre des requêtes CORS (Cross-Origin Resource Sharing) pour demander les autorisations de requête pour une ressource qui est située sur un domaine différent du domaine de la page web qui l'appelle.

Le bundle NelmioCorsBundle est une extension Symfony qui facilite la mise en œuvre de CORS en fournissant une configuration simple pour gérer les autorisations de requête.

Cependant, dans ce cas, malgré l'utilisation du bundle NelmioCorsBundle, la méthode OPTIONS a entraîné une redirection 307, ce qui peut indiquer une configuration incorrecte du bundle ou une incompatibilité avec d'autres parties du code.

Dans une tentative de résoudre le problème, il a été tenté de supprimer la route /login du fichier de configuration routes.yaml, et de ne garder que celle définie dans nelmio.cors.yaml. Cependant, l'erreur a persisté.

Finalement, la route /login a été réintroduite dans le fichier de configuration routes.yaml, afin d'appeler la méthode login et de permettre la gestion correcte de la méthode OPTIONS dans le contexte de la requête CORS.

Cela a probablement permis de résoudre le problème et de garantir que la méthode OPTIONS fonctionne correctement pour les requêtes CORS dans le cadre du projet.

Pour régler ce problème il faut :

```jsx

```