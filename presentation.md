---
marp: true
title: Workshop 2024 M1TL groupe 2
theme: uncover
class: invert
footer: © 2024 Built by Groupe 2 M1TL
paginate: true
---

![bg left height:500 YunoHost Logo](https://apps.yunohost.org/assets/ynh_logo_roundcorner.png)

```typescript

Axel VERGLAS
Lisa AU
Dorine HENRY
Pierre Arthur TOUTOUOM YOUNTEBO
El Mehdi BADOUH
Steven YAMBOS

```

[Notre journal de bord](https://declic.cc/yunohost/?Groupe2M1TL)
[Dépôt doc technique](https://github.com/axelverglas/bundle-app-backend-yunohost/blob/main/doc-technique.md)
[Lien de notre VPS](https://51.158.74.176)

---

<style>
    h1, h2, h4 {
      color: #5bc0de;
    },
    span,p {
      font-size: 30px;
    },
    span2 {
      font-size: 40px;
    }

</style>

# Contexte

<span>Ce projet collaboratif s'inscrit dans le contexte de l'[open source](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwif8J-i_9SDAxXmVKQEHeo2AjIQFnoECBsQAQ&url=https%3A%2F%2Ffr.wikipedia.org%2Fwiki%2FOpen_source&usg=AOvVaw1SG66KlXZK-DDwY77f0XNb&opi=89978449) avec la distribution Linux [YunoHost](https://yunohost.org/#/). Notre objectif principal est de développer une application web dédiée à simplifier le processus de téléchargement et d'installation d'applications sur des serveurs YunoHost pour une association.</span>

---

# Open source ![width:70px](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Open_Source_Initiative_keyhole.svg/330px-Open_Source_Initiative_keyhole.svg.png)

<span>L'open source désigne des logiciels dont le **code source** est **librement accessible**, **modifiable** et **redistribuable**. Il encourage la collaboration, la transparence et l'innovation collective.</span>

---

##### C'est quoi ![width:150px drop-shadow:0,5px,10px,rgba(0,0,0,.4)](https://raw.githubusercontent.com/YunoHost/apps/master/store/assets/horizontal-yunohost.svg) ?

> <span> ![width: 120px drop-shadow:0,5px,10px,rgba(0,0,0,.4)](https://raw.githubusercontent.com/YunoHost/apps/master/store/assets/horizontal-yunohost.svg) est une plateforme de serveur **auto-hébergé** qui simplifie le processus de déploiement et de gestion d'applications web. Conçu pour offrir une expérience d'auto-hébergement accessible aux utilisateurs de tous niveaux, ![width :120px drop-shadow:0,5px,10px,rgba(0,0,0,.4)](https://raw.githubusercontent.com/YunoHost/apps/master/store/assets/horizontal-yunohost.svg) facilite l'installation et la gestion d'un serveur personnel, tout en proposant une variété d'applications pré-configurées.</span>

---

## Notre solution

<span> Notre application simplifie le téléchargement d'applications ![width: 120px drop-shadow:0,5px,10px,rgba(0,0,0,.4)](https://raw.githubusercontent.com/YunoHost/apps/master/store/assets/horizontal-yunohost.svg). Nous offrons une interface simple d'utilisation et intuitive facilitant le processus d'installation d'application qui nécessite plusieurs étapes.</span>

---

#### Le Bundle association / projet de groupe, usages collaboratifs

**Applications :** YesWiki![width:40px](https://github.com/YunoHost/apps/blob/master/logos/yeswiki.png?raw=true), Paheko![width:40px](https://static.piaille.fr/accounts/avatars/109/534/402/496/650/008/original/9c3da78c32aedee7.png), Dolibarr![width:40px](https://github.com/YunoHost/apps/blob/master/logos/dolibarr.png?raw=true), NextCloud![width:40px](https://github.com/YunoHost/apps/blob/master/logos/nextcloud.png?raw=true), Etherpad![width:40px](https://github.com/YunoHost/apps/blob/master/logos/etherpad.png?raw=true), libreto![width:40px](https://github.com/YunoHost/apps/blob/master/logos/libreto.png?raw=true), Cryptpad![width:40px](https://github.com/YunoHost/apps/blob/master/logos/cryptpad.png?raw=true), Wekan![width:40px](https://github.com/YunoHost/apps/blob/master/logos/wekan.png?raw=true), Scrumblr![width:40px](https://github.com/YunoHost/apps/blob/master/logos/scrumblr.png?raw=true)

**Pour qui ?** : Des membres d'une association qui souhaite permettre à leur collectif de fonctionner tout en gardant la maîtrise de leurs outils et de leurs données ou parce qu'ils souhaitent réduire au maximum le recours aux ressources des plateformes privatrices de liberté.

---

## Personae

![bg left:20% 80%](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRueGTUtb8TvNYvtYFjdue8rRR4hmbLz-8FV6CwcyiVpw6F9ZRy_2_9dUlBBXy8xrdIlII&usqp=CAU)

| <p style="font-size:20px;"> _Profession_ : Administrateur système </br> _Niveau d'expérience_ : Expert </br> _Lieu de résidence_ : Paris, France </p> | <p style="font-size:20px;"> _Olivier_, le SysAdmin passionné </br>_Âge_ : 35 ans </p> |
| :---------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| <p style="font-size:20px;"> Description </p>                                                                                                          | <p style="font-size:20px;"> Objectifs et motivations </span>                          |
| <p style="font-size:20px;"> Administrateur système expérimenté et passionné par l'utilisation de serveurs Linux. </p>                                 | <p style="font-size:20px;">Simplifier les tâches </p>                                 |
| <p style="font-size:20px;">Travaille dans une petite entreprise qui utilise des serveurs YunoHost pour héberger différentes applications et services. | <p style="font-size:20px;"> Gagner du temps </p>                                      |
| <p style="font-size:20px;"> Aime l'idée de l'open source et cherche constamment des moyens d'améliorer l'efficacité de son infrastructure</p>         | <p style="font-size:20px;"> Contribuer à l'open source </p>                           |

---

# Technologies

<span>Nous avons fait le choix d'utiliser exclusivement des technologies **Open Source** pour respecter la vision des initiateurs du projet.</span>

-   <span> **Front-End** : ReactJS ![width:50px](https://cdn.freelogovectors.net/svg15/react_logo_freelogovectors.net.svg) </span>
-   <span> **Back-End** : NestJs ![width:50px](https://nestjs.com/logo-small.ede75a6b.svg) </span>
-   <span> **Base de données** : JSON ![width:50px](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/JSON_vector_logo.svg/240px-JSON_vector_logo.svg.png) </span>
-   <span> **Présentation** : Marp ![width:120px](https://github.com/marp-team/marp/raw/main/marp-dark.png#gh-dark-mode-only) </span>
-   <span> **Distribution** : YunoHost ![width:90px](https://raw.githubusercontent.com/YunoHost/apps/master/store/assets/horizontal-yunohost.svg) </span>

---

|Fonctionnalités Principales
|:---|
<span>Processus de téléchargement de bundles et d'applications simplifié </span> |
| <span> Installation d'applications </span> ![width:120px drop-shadow:0,5px,10px,rgba(0,0,0,.4)](https://raw.githubusercontent.com/YunoHost/apps/master/store/assets/horizontal-yunohost.svg) |
| <span>Installation des bundles d'applications </span>![width:120px drop-shadow:0,5px,10px,rgba(0,0,0,.4)](https://raw.githubusercontent.com/YunoHost/apps/master/store/assets/horizontal-yunohost.svg)

---

## Téléchargement d'Applications

<span> L'application offre la possibilité de télécharger et d'installer des applications ![width:120px drop-shadow:0,5px,10px,rgba(0,0,0,.4)](https://raw.githubusercontent.com/YunoHost/apps/master/store/assets/horizontal-yunohost.svg) en utilisant des Bundles préconfigurés. Ces Bundles regroupent des applications thématiques pour faciliter la mise en place de services sur les serveurs ![width:120px drop-shadow:0,5px,10px,rgba(0,0,0,.4)](https://raw.githubusercontent.com/YunoHost/apps/master/store/assets/horizontal-yunohost.svg). </span>

---

# Gestion des Bundles

<p> Les Bundles sont des ensembles d'applications liées par un thème commun. L'application permet de naviguer à travers ces Bundles, d'en visualiser le contenu et de sélectionner les applications à installer sur le serveur. </p>

---

# Gestion de projet

-   <p> Répartition par compétences </p>
-   <p> 2 personnes par tâches </p>
-   <span> Outils de travaux collaboratifs (Figma ![width:25px](https://s3-alpha.figma.com/hub/file/4495150327/7de456a8-1da6-4858-b0b5-0308d42904e7-cover.png), WhatsApp ![width:40px](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/640px-WhatsApp.svg.png), GitHub ![width:45px](https://github.com/fluidicon.png)) </span>
-   <p> Organisation des tâches par jour et par demi-journées </p>

---

# Back-End

|                                                         |                                      |
| :------------------------------------------------------ | :----------------------------------- |
| <p>Création et mise en place de la base de données </p> | <p> (abandonnée) </p>                |
| <p>Création d'un fichier JSON <p>                       | <p>(remplace la base de données)</p> |
| <p> Création des différentes routes de l'API </p>       |

[Dépôt Back-End](https://github.com/axelverglas/bundle-app-backend-yunohost)

---

# Front-End

![bg right height:400 ](https://image.noelshack.com/fichiers/2024/02/4/1704983585-maquette.png)

-   <p> Création de maquettes </p>
-   <p> Recherche de librairie UI adaptée </p>
-   <p> Création du squelette du projet et des composants </p>
-   <p> Développement </p>
    [Dépôt Front-End](https://github.com/axelverglas/bundle-app-backend-yunohost)

<!-- ---

![bg 70%](https://image.noelshack.com/fichiers/2024/02/4/1704983585-maquette.png)


Interface

![bg 70%](https://raw.githubusercontent.com/YunoHost/apps/master/store/assets/horizontal-yunohost.svg) -->

---

## Problèmes rencontrés

|               |                                                                |                                                                    |
| :------------ | :------------------------------------------------------------- | :----------------------------------------------------------------- |
| **Global**    | <p>Compréhension de certains points du projet</p>              |
| **Front-End** | <p>Réflexion sur les composants d'une interface conviviale</p> |
| **Back-End**  | <p>Logique relative au stockage des données</p>                | <p>Utilisation de la commande pour télécharger une application</p> |

---

# Merci :smile:
