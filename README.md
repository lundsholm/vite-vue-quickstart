# Vue 3 + Typescript + Vite

This template is a modified version of `npm init vite@latest <app name> --template vue-ts` that has some additional preconfigured packages for a quick start when setting up new projects.

It includes:

- [Vue Router](https://next.router.vuejs.org/)
- [Pinia](https://github.com/posva/pinia)
- [Windi CSS](https://windicss.org/)
- [Unplugin Icons (with auto import)](https://github.com/antfu/unplugin-icons)
- [File based routing](https://github.com/hannoeru/vite-plugin-pages)
- [Layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)
- [Prettier](https://prettier.io/)

The template also includes some demo components to highlight how to use the most common Vue features when using `<script setup>` SFCs.

Check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.
