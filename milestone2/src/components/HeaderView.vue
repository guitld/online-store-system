<template>
  <header>
    <nav>
      <router-link to="/acessorios" style="text-decoration: none;"><dropdown-view title="acessórios" :items="acessories"></dropdown-view> </router-link>
      <router-link to="/servicos" style="text-decoration: none;"><dropdown-view title="serviços" :items="services"></dropdown-view> </router-link>
      <router-link to="/comidinhas" style="text-decoration: none;"><dropdown-view title="comidinhas" :items="foods"></dropdown-view> </router-link>
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
          link: '/acessorios/#roupas',
        },
        {
          title: 'camas e casinhas',
          link: '/acessorios/#camas-e-casinhas',
        },
        {
          title: 'brinquedos',
          link: '/acessorios/#brinquedos',
        },
        {
          title: 'alimentação',
          link: '/acessorios/#alimentacao',
        },
      ],
      services: [
        {
          title: 'banho',
          link: '/servicos/#banho',
        },
        {
          title: 'tosa',
          link: '/servicos/#tosa',
        },
      ],
      foods: [
        {
          title: 'petiscos',
          link: '/comidinhas/#petiscos',
        },
        {
          title: 'rações',
          link: '/comidinhas/#racoes',
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

nav .menu-item a.active-link {
  color: #d403b9;
}

a > strong {
  font-size: 24px;
}

</style>