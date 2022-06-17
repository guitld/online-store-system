<template>
  <div class="formulary">
    <form class="form-inputs">
      <h4>Gerenciar usuários</h4>
      <simple-input
        v-model="event.nome"
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
        v-model="event.endereco"
        label="endereço"
        type="text"
        required
      ></simple-input>
      <simple-input
        v-model="event.telefone"
        label="telefone"
        type="tel"
        required
      ></simple-input>
      <simple-input
        v-model="event.senha"
        label="senha"
        type="password"
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
        v-model="event.nome"
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
        v-model="event.endereco"
        label="endereço"
        type="text"
        required
      ></simple-input>
      <simple-input
        v-model="event.telefone"
        label="telefone"
        type="tel"
        required
      ></simple-input>
      <simple-input
        v-model="event.senha"
        label="senha"
        type="password"
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
</template>

<script>
import SimpleInput from "@/components/SimpleInput.vue";
export default {
  components: { SimpleInput },
  data() {
    return {
      event: {
        nome: "",
        email: "",
        cpf: "",
        endereco: "",
        telefone: "",
        senha: "",
      },
    };
  },
  methods: {
    handleCadastro() {
      // REFINAR ISSO AQUI, QUANDO CLICA, DÁ O ALERTA MESMO N TENDO CAMPO PREENCHIDO
      alert("Dados alterados com sucesso!");
    },
    handleProduto() {
      alert("Dados alterados com sucesso!");
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

</style>