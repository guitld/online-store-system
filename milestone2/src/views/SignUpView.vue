<template>
  <h1>Cadastre sua conta</h1>
  <form>
    <simple-input
      v-model="event.nome" label="nome" type="text" required
    ></simple-input>
    <simple-input
      v-model="event.email" label="e-mail" type="email" required
    ></simple-input>
    <simple-input
      v-model="event.cpf" label="cpf" type="text" pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})" required
    ></simple-input>
    <simple-input
      v-model="event.endereco" label="endereço" type="text" required
    ></simple-input>
    <simple-input
      v-model="event.telefone" label="telefone" type="tel" required
    ></simple-input>
    <simple-input
      v-model="event.senha" label="senha" type="password" required
    ></simple-input>
    <input
      class="btn_submit"
      type="submit"
      value="CADASTRAR"
      @click="cadastrar"
    />
  </form>
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
    cadastrar() {
      // REFINAR ISSO AQUI, QUANDO CLICA, DÁ O ALERTA MESMO N TENDO CAMPO PREENCHIDO
      alert("Cadastro realizado com sucesso!");
    },
  },
};
</script>


<style>
h1, input {
    font-family: "JetBrains Mono", monospace;
}

h1 {
  text-transform: uppercase;
  text-align: center;
  font-size: 16px;
  margin-top: 15px;
}

form {
  margin: 0 auto;
}


input {
  display: block;

  width: 350px;
  padding: 10px 5px;
  margin: 20px;

  font-size: 0.75em;
  letter-spacing: 1px;
  color: rgba(0, 0, 0, 0.7);

  box-sizing: border-box;
  background-color: #fad2e1;
  border: 2px solid #f5e9ee;
  border-radius: 5px;
}

input:focus {
  border-color: #cb5c7f;
  outline: none !important;
}

.btn_submit,
.btn_submit:hover {
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.btn_submit {
  background-color: #edffbd;
  border: 4px solid #d8ff6e;
  border-radius: 30px;
  width: 120px;
  height: 50px;
  text-align: center;
  margin: 10px auto;
  display: flex;
}

.btn_submit[value] {
  font-weight: 300;
  justify-content: center;
}

.btn_submit:hover {
  background-color: #c0eb4c;
  border: 4px solid #c0eb4c;
  cursor: pointer;
}

</style>