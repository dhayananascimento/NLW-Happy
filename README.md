# Happy
Projeto desenvolvido durante a semana Next Level Week 3.0, na turma Omnistack, promovida pela Rocketseat.

## Linguagens
* TypeScript

## Tecnologias
* React Native
* ReactJs
* Node.js
* SQLite
* Expo
* Axios

## Requisitos
* Node.js
* Expo 
* npm

## Instalação
```
$ git clone https://github.com/dhayananascimento/NLW-Happy.git
$ cd NLW-Happy
```

### Backend
```
$ cd backend
$ npm install

$ npx ts-node-dev ./node_modules/typeorm/cli.js

$ npx ts-node-dev ./node_modules/typeorm/cli.js migration:create -n create_orphanages
$ npx ts-node-dev ./node_modules/typeorm/cli.js migration:run

$ npx ts-node-dev ./node_modules/typeorm/cli.js migration:create -n create_images
$ npx ts-node-dev ./node_modules/typeorm/cli.js migration:run

$ npx ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts
```

### Web
```
$ cd web
$ npm install

$ touch .env
$ adicionar "REACT_APP_MAPBOX_TOKEN=" com o token do mapa

$ npm start
```

### Mobile
```
$ cd mobile
$ npm install
$ npm start
```
