# Projet Naoned Synth

## NaonedIA

Le projet Naoned Synth est porté par des adhérents de l'association [NaonedIA](http://naonedia.fr/) visant à promouvoir l'intelligence artificielle dans le grand ouest.

## Description

L'objectif est de créer un synthétiseur des bruits et sons caractéristiques de Nantes et d'y ajouter la génération de sons à partir d'une IA.

L'application web sera responsive pour être utilisée depuis un mobile également.

## Fonctionnalités

### V0.1 POC

- Jouer des pistes de sons nantais et gérer le volume de chaque piste
- Jouer des sons sur 30 secondes comme des samples - Captés et fournis par les bénévoles de l'association
- Lire aléatoirement des sons générés en amont par l'IA comme une des pistes - Sons fournis par les bénévoles de l'association via le projet Magenta [Music Transformer](https://magenta.tensorflow.org/piano-transformer)

### Liens utiles

- 🎛️ [Interface et visuels pour Démonstration](https://naoned-synth.surge.sh/)
- 🖼️ [Maquettes](https://app.moqups.com/4hpFiZNNCP/view/page/ac41ad94d?ui=0)
- Pour implémenter la lecture des pistes, le volume et le tempo possibilité d'utiliser [ToneJS](https://tonejs.github.io/)

### developpement

#### Technologie

- [yarn](https://yarnpkg.com/)

### Installation

- `yarn install`

### Usage

- Compiler si changement dans les fichiers de `resources/` => `yarn run dev`
- Compiler avant commit `yarn run production`
