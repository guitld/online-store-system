<template>
  <header>
    <nav>
      <dropdown-view
        title="acessórios"
        path="/acessorios"
        :items="acessories"
        @click.prevent="handleSound()"
      ></dropdown-view>
      <dropdown-view
        title="comidinhas"
        path="/comidinhas"
        :items="foods"
        @click.prevent="handleSound()"
      ></dropdown-view>

      <div class="menu-item">
        <router-link to="/servicos" @click.prevent="handleSound()">serviços</router-link>
      </div>
      <div class="menu-item">
        <router-link to="/" @click.prevent="handleSound()"><strong>meu amigo pet</strong></router-link>
      </div>
      <div class="menu-item">
        <router-link to="/carrinho" @click.prevent="handleSound()">carrinho</router-link>
      </div>
      <div v-if="authenticated" class="menu-item">
        <router-link to="/perfil" @click.prevent="handleSound()">perfil</router-link>
      </div>
      <div v-else class="menu-item">
        <router-link to="/login" @click.prevent="handleSound()">entrar</router-link>
      </div>
      <div v-if="authenticated" class="menu-item">
        <a href="/" @click="logout()"> sair </a>
      </div>
      <div v-else class="menu-item">
        <router-link to="/cadastro" @click.prevent="handleSound()">cadastrar</router-link>
      </div>
    </nav>
  </header>
</template>


<script>
import DropdownView from "./DropdownView.vue";
import data from "@/data/sounds.json";

export default {
  name: "HeaderView",

  components: {
    DropdownView,
  },
  created() {
    this.emitter.on("authenticated", (status) => {
      this.authenticated = status;
    });
  },

  methods: {
    logout() {
      this.authenticated = false;
    },

    handleSound() {
      let objKey = Object.keys(data).map((key) => data[key]);
      let randomKey = objKey[Math.floor(Math.random() * objKey.length - 1)];
      let sound = new Audio(randomKey.sound)
      sound.play()
    }
  },
  data() {
    return {
      authenticated: false,
      acessories: [
        {
          title: "roupas",
          link: "/acessorios",
          hash: "#roupas",
        },
        {
          title: "camas e casinhas",
          link: "/acessorios",
          hash: "#camas",
        },
        {
          title: "brinquedos",
          link: "/acessorios",
          hash: "#brinquedos",
        },
        {
          title: "alimentação",
          link: "/acessorios",
          hash: "#alimentacao",
        },
      ],
      foods: [
        {
          title: "petiscos",
          link: "/comidinhas",
          hash: "#petiscos",
        },
        {
          title: "rações",
          link: "/comidinhas",
          hash: "#racoes",
        },
      ],
    };
  },
};
</script>

<style>
@import "/public/assets/css/style.css";

nav .menu-item {
  color: #000000;
  position: relative;
  display: flex;
  transition: 0.4s;
  padding: 8px 30px;
  font-size: 14px;
  font-weight: 600;
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

nav > .menu-item > a.active-link {
  color: #d403b9;
}

</style>