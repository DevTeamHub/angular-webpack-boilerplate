# Motivation

Angular is a powerful Typescript / Javascript framework for building progressive web applications. It has component oriented architecture and module-based easy to extend application structure. It is blazing fast and can be used for Hybrid mobile development with Cordova/Ionic or cross platform desktop applications with Electron. It's build with Typescript and for Typescript apps in mind, what makes it easy to support even big web apps with different layers of business logic. And with help of Angular Universal we can have a full list of advantages of Server-Side Rendering, like optimization for search engines, improved user experience, social networks previews and so on.

Webpack is probably the most famous module bundler in web development nowadays. I would say that webpack is much more than just a module bundler: it has enormous number of different plugins and loaders. Here is just a small range of available functionality: building your typescipt/cofee-script/... code, scss/less/stylus/post-css/... styles, jade/mustache/handlebars/... templates, minification, validation, uglification, code splitting... Additionaly it has some number of possibilities to simplify your work with static files: you can generate .svg fonts from icons that you are going to use, generate sprite files for colorful small icons, optimize image size and a lot, LOT more. Although webpack is quite difficult tool, expecially for developers who are new in front-end world.

I think it won't be mistake if I say that Webpack is the most popular module bundler for Angular too, especially considering that Angular Cli is using webpack internally. Angular Cli resolves this problem and prepares build of Angular applications with Webpack for dev / prod environments and even provides ability to build server-side code for rendering with Universal framework. 

But unfortunately Cli doesn't support a lot of useful webpack plugins, and doesn't support override or extend of internal webpack configs.  

## Goal

This Angular + Webpack starter provides custom webpack config for Angular / Webpack build. The goal of this project is to add as much as possible available and useful plugins and loaders provided by webpack community to make it easier to work with Angular and to make it possible to add your own extensions to webpack config at any point of time. Whichever you want, whenever you want.

## Features

1. Angular 5
2. Webpack 3
3. AOT build
4. Universal build
5. Lazy loaded routes

## Documentation

Documentation will be available soon as number of articles.

## Support

We'd love to hear any suggestions and solutions: please don't hesistate and create feature requests, report bugs or create Pull Requests with some interesting webpack solutions that can help to work with Angular apps. Current template is just a first step and will be improved a lot in the nearest future.

## Future

This template will be extended with the most useful and interesting webpack plugins and loader, with different postcss plugins, Cordova / Ionic build structure and Electron build structure. 

## How to start

Starter provides a few scripts in package.json that you can use to run this code in development environment, in production and with universal server side rendering:

npm run start -> starts webpack dev server for development
npm run build:dev -> builds your code in development mode: source maps included, unminified code
npm run build:prod -> builds your code in production mode, all production mode optimizations are included: AOT build, minification, uglification, compression, code splitting, images optimization 
npm run build:release -> builds production ready code and prepares server side bundle for SSR with Angular Universal for ExpressJS server
npm run server -> starts ExpressJS server