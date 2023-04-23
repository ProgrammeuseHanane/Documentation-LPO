:::info

Notre projet se décompose en deux partie 
   - *Frontend crée avec React*
   - *Backend créé avec Symfony*
:::

 Un travail a été entrepris pour faciliter et informatiser les processus définis par la LPO Normandie, nous présenterons brièvement les problèmes rencontrés les procédures entreprises pour les solutionner et atteindre les buts. Commençons par nous remettre dans le contexte, la LPO travaille essentiellement dans biodiversité, elle œuvre pour la protection et l’exploration de la faune et flore et la sensibilisation du grand public entre autre, pour ce faire l’usage des inventaires est rendu indispensable, ces derniers sont fait à partir d’observations écrites sur des fiches papiers (téléchargeable sur leur site) puis saisies manuellement sur Excel, envoyées par la suite via mail pour la validation par un Validateur et en dernier lieu enregistré dans une base de données Access. Par la suite ces observations peuvent servir à des statiques à divers fins. D’après tout ça on peut dénoter plusieurs complications qu’on pourra simplifier :
 
  * Premièrement, la collecte de l'information se fait sur différentes étapes dont on peut citer le remplissage de formulaires papiers, l’enregistrement dans un tableur Excel.
 	
  * Deuxièmement, l’envoi d’information engendre un délai d’attente pour le 	contrôle, la correction éventuelle et l’usage d’e-mails (méthode classique et non-pratique).
 	
  * Troisièmement utilisation de MS Access, étant opérationnel que sur les machines 	dotées d’une licence Windows, et difficile à gérer. 	

Multiples épilogues existent, sur ce nous proposons la solution suivante : La collecte de données ,L’envoi et consultation des observations sera automatisé par une application mobile, d’autre part une application web pour la gestion des notation( correction validation rejet), changer MS Access par MySQL/PostgreSQL, on gardera l’œil sur difficultés qui pourraient surgir (bdd temporaire, optimisation de la bdd ‘pas de doublons’ ,modification d’une observation par le Validateur et un observateur en même temps …), que nous détaillerons dans les sections adéquates.
