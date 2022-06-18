<template>
  <div class="formulary" v-if="isAdmin">
    <div class="form-wrapper-flex">
      <form class="form-inputs">
        <h4>Gerenciar usuários</h4>
        <simple-input
          v-model="event.name"
          label="nome"
          type="text"
          required
        ></simple-input>
        <simple-input
          v-model="event.email"
          label="e-mail"
          type="email"
          required
        ></simple-input>
        <simple-input
          v-model="event.cpf"
          label="cpf"
          type="text"
          pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})"
          required
        ></simple-input>
        <simple-input
          v-model="event.address"
          label="endereço"
          type="text"
          required
        ></simple-input>
        <simple-input
          v-model="event.phone"
          label="telefone"
          type="tel"
          required
        ></simple-input>
        <simple-input
          v-model="event.update"
          label="alterar/remover"
          type="text"
          required
        ></simple-input>
        <button
          class="btn-submit"
          type="button"
          @click="handleCadastro()"
        >
          atualizar usuário
        </button>
      </form>
      <form class="form-inputs">
        <h4>Gerenciar produtos</h4>
        <simple-input
          v-model="event.nameprd"
          label="nome do produto"
          type="text"
          required
        ></simple-input>
        <simple-input
          v-model="event.number"
          label="número de identificação"
          type="number" min="0"
          required
        ></simple-input>
        <simple-input
          v-model="event.description"
          label="descrição"
          type="text"
          required
        ></simple-input>
        <simple-input
          v-model="event.price"
          label="preço"
          type="number" min="0.00" max="10000.00" step="0.01"
          required
        ></simple-input>
        <simple-input
          v-model="event.update2"
          label="alterar/adicionar/remover"
          type="text"
          required
        ></simple-input>
        <button
          class="btn-submit"
          type="button"
          @click="handleProduto()"
        >
          atualizar produto
        </button>
      </form>
    </div>
  </div>
  <div v-else class="login-admin">
    <h4>Faça login como administrador</h4>
  </div>
</template>

<script>
import SimpleInput from "@/components/SimpleInput.vue";
export default {
  components: { SimpleInput },
  data() {
    return {
      event: {
        name: "",
        email: "",
        cpf: "",
        address: "",
        phone: "",
        update: "",
        nameprd: "",
        number: "",
        description: "",
        price: "",
        update2: ""
      },
    };
  },
  methods: {
    isAdmin() {
      return this.$store.state.isAdmin && this.$store.state.isAuthenticated;
    },
    handleCadastro() {
      if (
        this.event.email != "" &&
        this.event.password != "" &&
        this.event.name != "" &&
        this.event.cpf != "" &&
        this.event.address != "" &&
        this.event.phone != "" &&
        this.event.update != ""
      ) {
        let emailCPFFound = false;
        for (let i = 0; i < users.length; i++) {
          if (this.event.email == users[i]["email"] || 
              this.event.cpf == users[i]["cpf"]) {
            emailCPFFound = true;
            break;
          }
        }
        if(emailCPFFound) {
          alert("Dados alterados com sucesso!");
        }
        else {
          alert("Usuário não encontrado!");
        }
      } 
      else 
        alert("Preencha todos os campos!");
    },

    handleProduto() {
      if (
        this.event.nameprd != "" &&
        this.event.number != "" &&
        this.event.description != "" &&
        this.event.price != "" &&
        this.event.update2 != ""
        ) {
        let numberFound = false;
        for (let i = 0; i < test2.length; i++) {
          if (this.event.number == test2[i]["number"]) {
            emailCPFFound = true;
            break;
          }
        }
        if(numberFound) {
          alert("Dados alterados com sucesso!");
        }
        else {
          alert("Produto não encontrado!");
        }
      } 
      else 
        alert("Preencha todos os campos!");
    },
  },
};
</script>


<style>
@import "/public/assets/css/button.css";
@import "/public/assets/css/forms.css";

.form-inputs {
  margin-bottom: 20px;
}

.formulary {
  width: 80%;
  margin: auto auto;
}

.login-admin {
  margin: auto 0;
}

.form-wrapper-flex {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 100px;
}

</style>