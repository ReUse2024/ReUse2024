<template>
  <div id="app">
    <header>
      <h1>{{ titulo }}</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/sobre">Sobre</router-link>
        <router-link to="/contato">Contato</router-link>
      </nav>
    </header>
    <router-view />
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    FooterComponent,
  },
  data() {
    return {
      titulo: 'Título Padrão', // O título pode mudar com base na rota
    };
  },
  watch: {
    // Observe as mudanças na rota e atualize o título conforme necessário
    $route(to) {
      if (to.name === 'home') {
        this.titulo = 'Página Inicial';
      } else if (to.name === 'sobre') {
        this.titulo = 'Sobre Nós';
      } else if (to.name === 'contato') {
        this.titulo = 'Contato';
      }
    },
  },
  created() {
    // Defina o título inicial com base na rota atual
    this.titulo = this.$route.name === 'home' ? 'Página Inicial' : 'Título Padrão';
  },
};
</script>

<style>
/* Estilos para o App.vue */
header {
  background-color: #f8f9fa;
  padding: 20px;
  text-align: center;
}

nav {
  margin: 20px 0;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #007bff;
}

footer {
  text-align: center;
  padding: 20px;
  background-color: #f1f1f1;
}
</style>
