<template>
  <header>
    <nav>
      <dropdown-view title="acessórios" :items="acessories"></dropdown-view>
      <dropdown-view title="serviços" :items="services"></dropdown-view>
      <dropdown-view title="comidinhas" :items="foods"></dropdown-view>  
      
      <div class="menu-item"><router-link to="/"><strong>meu amigo pet</strong></router-link></div>
      <div class="menu-item"><router-link to="/login">entrar</router-link></div>
      <div class="menu-item"><router-link to="/cadastro">cadastrar</router-link></div>
      <div class="menu-item"><router-link to="/carrinho">carrinho</router-link></div>
    </nav>
  </header>
</template>


<script>
import DropdownView from './DropdownView.vue';

export default {
  name: 'HeaderView',

  components: {
    DropdownView,
  },

  data() {
    return {
      acessories: [
        {
          title: 'roupas',
          link: '/acessorios/roupas',
        },
        {
          title: 'camas e casinhas',
          link: '/acessorios/camas-e-casinhas',
        },
        {
          title: 'brinquedos',
          link: '/acessorios/brinquedos',
        },
        {
          title: 'alimentação',
          link: '/acessorios/alimentação',
        },
      ],
      services: [
        {
          title: 'banho',
          link: '/serviços/banho',
        },
        {
          title: 'tosa',
          link: '/seviços/tosa',
        },
      ],
      foods: [
        {
          title: 'petiscos',
          link: '/comidinhas/petiscos',
        },
        {
          title: 'rações',
          link: '/comidinhas/rações',
        },
      ],
    };
  },
};
</script>

<style>
header {
  background-color: #d8ff6e;
  height: 12%;
  padding: 25px;
}

nav {
  display: flex;
  align-items: center;
  justify-content: center;
}

nav .menu-item {
  color: #000000;
  position: relative;
  display: flex;
  transition: 0.4s;
  padding: 8px 30px;
  font-size: 14px;
  font-weight: 600;
  font-family: "JetBrains Mono", monospace;
}

nav .menu-item a:active,
nav .menu-item a:hover,
#current_page.menu-item a:active,
#current_page.menu-item a:hover {
  color: #00c1c1;
}

nav .menu-item a {
  text-decoration: none;
  color: #000000;
}

nav .menu-item a.active-link {
  color: #d403b9;
}

a > strong {
  font-size: 24px;
}

</style>