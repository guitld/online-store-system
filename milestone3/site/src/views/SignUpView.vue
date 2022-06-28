<template>
    <div class="wrapper">
        <div class="formulary">
            <h4>Cadastre sua conta</h4>
            <form class="form-inputs">
                <simple-input v-model="event.name" label="nome" type="text" required></simple-input>
                <simple-input v-model="event.email" label="e-mail" type="email" required></simple-input>
                <simple-input v-model="event.cpf" label="cpf" type="text"
                    pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})" required></simple-input>
                <simple-input v-model="event.address" label="endereço" type="text" required></simple-input>
                <simple-input v-model="event.phone" label="telefone" type="tel" required></simple-input>
                <simple-input v-model="event.password" label="senha" type="password" required></simple-input>

                <button type="submit" @click="cadastrar()" class="btn-submit"><span
                        class="btn-submit-text">cadastrar</span></button>
            </form>
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
        cadastrar() {
            if (this.event.email != "" &&
                this.event.password != "" &&
                this.event.name != "" &&
                this.event.cpf != "" &&
                this.event.address != "" &&
                this.event.phone != "") {
                let newEmail = true;
                let newCPF = true;

                for (let i = 0; i < users.length; i++) {
                    newEmail = !(this.event.email == users[i]['email'])
                    newCPF = !(this.event.cpf == users[i]['cpf'])
                    if (!newEmail || !newCPF) break
                }
                
                if (!newCPF && !newEmail)
                    alert("Uma conta com este CPF e e-mail já foi cadastrada. Utilize outros dados");

                else if (!newEmail)
                    alert("Uma conta com este e-mail já foi cadastrada. Utilize outro e-mail");

                else if (!newCPF)
                    alert("Uma conta com este CPF já foi cadastrada. Utilize outro CPF");

                else {
                    alert("Bem-vindx ao Meu Amigo Pet!")
                    this.emitter.emit('authenticated', true)
                    this.$router.push('/')
                    return
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
@import '/public/assets/css/button.css';
@import '/public/assets/css/forms.css';
</style>