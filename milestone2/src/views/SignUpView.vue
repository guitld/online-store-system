<template>
<div class="sign-up">
    <h4>Cadastre sua conta</h4>
    <form class="form-signup">
      <simple-input
        v-model="event.name" label="nome" type="text" required
      ></simple-input>
      <simple-input
        v-model="event.email" label="e-mail" type="email" required
      ></simple-input>
      <simple-input
        v-model="event.cpf" label="cpf" type="text" pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})" required
      ></simple-input>
      <simple-input
        v-model="event.address" label="endereço" type="text" required
      ></simple-input>
      <simple-input
        v-model="event.phone" label="telefone" type="tel" required
      ></simple-input>
      <simple-input
        v-model="event.password" label="senha" type="password" required
      ></simple-input>
      <router-link class="btn_submit" type="button" to="/" @click="cadastrar()"> cadastrar    
      </router-link>
    </form>
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
        name: "",
        email: "",
        cpf: "",
        address: "",
        phone: "",
        password: "",
      },
    };
  },
  methods: {
    cadastrar(){
      if(this.event.email != "" && 
          this.event.password != "" && 
          this.event.name != "" && 
          this.event.cpf != "" && 
          this.event.address != "" &&
          this.event.phone != "") {
        let newEmail = true;
        let newCPF = true;
    
        for (let i = 0; i < users.length; i++){
          if (this.event.email == users[i]['email'] && this.event.cpf == users[i]['cpf']){
            newEmail = false;
            newCPF = false;
            break;
            }
            else if(this.event.email == users[i]['email']){
              newEmail = false;
              break;
            }
            else if(this.event.cpf == users[i]['cpf']) {
              newCPF = false;
              break;
            }
          }
          if (!newCPF && !newEmail)
            alert("Uma conta com este CPF e e-mail já foi cadastrada. Utilize outros dados");

          else if (!newEmail)
            alert("Uma conta com este e-mail já foi cadastrada. Utilize outro e-mail");
        
        else if(!newCPF)
          alert("Uma conta com este CPF já foi cadastrada. Utilize outro CPF");
        
        else{
          alert("Bem-vindx ao Meu Amigo Pet!")
          this.emitter.emit('authenticated', true)
        }
      }
      else {
        alert("Preencha todos os campos");
      }
    },
  },
};
</script>


<style scoped>
@import '/public/assets/css/login_signup.css';
@import '/public/assets/css/signup.css';
</style>