<template>
    <h1>Cadastre sua conta</h1>
    <form>
        <div class="col-6">
            <label>nome</label>
            <input type="text" required v-model="nome">
            <label>e-mail</label>
            <input type="email" required v-model="email">
            <label>cpf</label>
            <input type="text" required v-model="cpf">
        </div>
        <div class="col-6">
            <label>endereço</label>
            <input type="text" required v-model="endereco">
            <label>telefone</label>
            <input type="tel" required v-model="telefone">
            <label>senha</label>
            <input type="password" required v-model="senha">
        </div>
    </form>
    <p>
</template>

<script>
export default {
   data() {
       return {
           email: '',
           password: ''
       }
   }
}
</script>


<style>
h1 {
    text-transform: uppercase;
    text-align: center;
    font-size: 16px;
    font-family: "JetBrains Mono", monospace;
    margin-top: 15px;
}

form {
    text-align: left;
    margin: 0 auto;
}

label {
    color: rgba(0, 0, 0, 0.4);
    display: inline-block;
    margin: 25px 0 5px;
    font-size: 0.8em;
    letter-spacing: 1px;
}

input {
    display: block;
    padding: 12px 6px;
    width: 100%;
    box-sizing: border-box;
    background-color: #FAD2E1;
    border: 2px solid #F5E9EE;
    border-radius: 5px;
}

.col-6 {
    display: inline-block;
    padding: 20px;
    width: 420px;
}
</style>