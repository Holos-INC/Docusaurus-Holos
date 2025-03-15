[![GitHub Contributors](https://img.shields.io/github/contributors/Holos-INC/Docusaurus-Holos)](https://github.com/Holos-INC/Docusaurus-Holos/graphs/contributors)
<a href="https://github.com/Holos-INC/Docusaurus-Holos/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Holos-INC/Docusaurus-Holos" width="300" height="50" alt="Contribuidores" />
</a>


# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

1. Instalar node.js en https://nodejs.org/en/download/
2. Clonar el repositorio:
```
git clone https://github.com/Holos-INC/Docusaurus-Holos.git
```
3. Abrir el proyecto en vsCode o el editor de texto de su confianza.
4. Instalar las dependencias necesarias de docusaurus:
```
npm install
pnmp install
```
5. Lanzar docusaurus:
```
npx docusaurus start
```


### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
