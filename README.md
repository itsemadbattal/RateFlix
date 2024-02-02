# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# App Logic

1. This app fetches list of movies from (The Movie DB) TMDB [https://developer.themoviedb.org/docs].
1. Users can search for movies by name, search request kicks in after the second character.
1. The list of movies fetched is dynamic and will change on every page reload.
1. React Redux was used to facilitate the component logic
