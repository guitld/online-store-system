<template>
  <header>
    <nav>
      <dropdown-view title="acessórios" path="acessorios" :items="acessories"></dropdown-view>
      <dropdown-view title="serviços" path="servicos" :items="services"></dropdown-view>
      <dropdown-view title="comidinhas" path="comidinhas" :items="foods"></dropdown-view>

      <div class="menu-item"><router-link to="/"><strong>meu amigo pet</strong></router-link></div>
      <div class="menu-item"><router-link to="/carrinho">carrinho</router-link></div>
      <div v-if="authenticated" class="menu-item"><router-link to="/perfil">perfil</router-link></div>
      <div v-else class="menu-item"><router-link to="/login">entrar</router-link></div>
      <div v-if="authenticated" class="menu-item"> <a href="/" @click="logout()"> sair </a> </div> 
      <div v-else class="menu-item"><router-link to="/cadastro">cadastrar</router-link></div>
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
  created() {
    this.emitter.on('authenticated', status => {
      this.authenticated = status;
    })
  },

  methods: {
    logout() {
        this.authenticated = false;
    }
  },

  data() {
    return {
      authenticated: false,
      acessories: [
        {
          title: 'roupas',
          link: '/acessorios',
          hash: '#roupas'
        },
        {
          title: 'camas e casinhas',
          link: '/acessorios',
          hash: '#camas'
        },
        {
          title: 'brinquedos',
          link: '/acessorios',
          hash: '#brinquedos'
        },
        {
          title: 'alimentação',
          link: '/acessorios',
          hash: '#alimentacao'
        },
      ],
      services: [
        {
          title: 'banho',
          link: '/servicos',
          hash: '#banho'
        },
        {
          title: 'tosa',
          link: '/servicos',
          hash: '#tosa'
        },
      ],
      foods: [
        {
          title: 'petiscos',
          link: '/comidinhas',
          hash: '#petiscos'
        },
        {
          title: 'rações',
          link: '/comidinhas',
          hash: '#racoes'
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
  position: sticky;
  top: 0;
}

nav {
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
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
  z-index: 1;
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

/* #nav  a.active-link {
  color: #d403b9;
} */

nav>.menu-item>a.active-link {
  color: #d403b9;
}

a > strong {
  font-size: 24px;
}

</style>