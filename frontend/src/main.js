// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

// Importando as views
import Home from './views/Home.vue';
import Sobre from './views/Sobre.vue';
import Contato from './views/Contato.vue';

// Definindo as rotas
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: Sobre,
  },
  {
    path: '/contato',
    name: 'contato',
    component: Contato,
  },
];

// Criando o router
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Criando a aplicação Vue
const app = createApp(App);

// Usando o router na aplicação
app.use(router);

// Montando a aplicação
app.mount('#app');
