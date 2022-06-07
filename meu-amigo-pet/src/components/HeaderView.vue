<template>
  <header>
    <nav>
      <dropdown-view title="acessórios" :items="acessories"></dropdown-view>
      <dropdown-view title="serviços" :items="services"></dropdown-view>
      <dropdown-view title="comidinhas" :items="foods"></dropdown-view>  
      
      <div class="menu-item"><router-link to="/"><strong>meu amigo pet</strong></router-link></div>
      <div class="menu-item"><router-link to="/login">entrar</router-link></div>
      <div class="menu-item"><router-link to="/sign-up">cadastrar</router-link></div>
      <div class="menu-item"><router-link to="/shop-cart">carrinho</router-link></div>
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
          link: '/acessories',
        },
        {
          title: 'camas e casinhas',
          link: '/acessories',
        },
        {
          title: 'brinquedos',
          link: '/acessories',
        },
        {
          title: 'alimentação',
          link: '/acessories',
        },
      ],
      services: [
        {
          title: 'banho',
          link: '/services',
        },
        {
          title: 'tosa',
          link: '/services',
        },
      ],
      foods: [
        {
          title: 'petiscos',
          link: '/foods',
        },
        {
          title: 'rações',
          link: '/foods',
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