<template>
  <div class="container">
    <div class="sign-in-flexbox">
      <div class="sign-in">
        <h4>Acesse sua conta</h4>
        <p>
          é novo por aqui?
          <router-link to="/cadastro"><strong>cadastre-se</strong></router-link>
        </p>
        <form class="form-inputs">
          <simple-input
            v-model="event.email"
            label="e-mail"
            type="email"
            required
          ></simple-input>
          <simple-input
            v-model="event.password"
            label="senha"
            type="password"
            required
          ></simple-input>
          <router-link class="btn-submit" type="button" to="/" @click="login()">
            entrar
          </router-link>
        </form>
      </div>

      <div class="pet-img">
        <img :src="catDogImage" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import SimpleInput from "@/components/SimpleInput.vue";
import users from "@/data/users.json";

export default {
  components: { SimpleInput },
  data() {
    return {
      event: {
        email: "",
        password: "",
      },
      catDogImage: "assets/img/header-pet-na-cabine.png",
    };
  },

  methods: {
    login() {
      if (this.event.email != "" && this.event.password != "") {
        let emailFound = false;

        for (let i = 0; i < users.length; i++) {
          if (this.event.email == users[i]["email"]) {
            emailFound = true;
            if (this.event.password == users[i]["password"]) {
              this.emitter.emit("authenticated", true);
              break;
            } else alert("Senha incorreta.");
          }
        }
        if (!emailFound) alert("Email não cadastrado.");
      } else alert("Preencha os campos de Email e Senha");
    },
  },
};
</script>

<style scoped>
@import "/public/assets/css/button.css";
@import "/public/assets/css/forms.css";

.container {
  width: 70%;
  margin: auto auto;
}

.sign-in-flexbox {
  display: flex;
  flex-direction: row;
  gap: 100px;
}

.sign-in p {
  margin-top: 12px;
  text-align: right;
  text-transform: lowercase;
  font-size: 14px;
  padding-right: 6%;
  padding-bottom: 10px;
}

.sign-in p a > strong {
  color: black;
  font-size: 16px;
}

.sign-in p a:hover {
  color: rgb(50, 49, 49);
}

.form-inputs {
  margin: 0 -140%;
}

.pet-img {
  width: 100%;
  margin: auto;
}

.pet-img img {
  width: 400px;
}
</style>