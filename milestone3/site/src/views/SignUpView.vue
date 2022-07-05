<template>
    <div class="wrapper">
        <div class="formulary">
            <h4>Cadastre sua conta</h4>
            <form class="form-inputs">
                <simple-input v-model="event.name" label="nome" type="text" required></simple-input>
                <simple-input v-model="event.email" label="e-mail" type="email" required></simple-input>
                <simple-input v-model="event.cpf" label="cpf" type="text"
                    pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})" required>
                </simple-input>
                <simple-input v-model="event.address" label="endereço" type="text" required></simple-input>
                <simple-input v-model="event.phone" label="telefone" type="tel" required></simple-input>
                <simple-input v-model="event.password" label="senha" type="password" required></simple-input>

                <button type="button" @click="cadastrar()" class="btn-submit"><span
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
        validateEmail(email) {
            return email.match(
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        },

        async cadastrar() {
            if (this.event.email != "" && this.event.password != "" && this.event.name != "" && this.event.cpf != "" && this.event.address != "" && this.event.phone != "" && this.validateEmail(this.event.email)) {
                try {
                    let req_body = JSON.stringify({
                            name: this.event.name,
                            email: this.event.email,
                            cpf: this.event.cpf,
                            address: this.event.address,
                            phone: this.event.phone,
                            password: this.event.password,
                    });

                    let resp = await fetch('http://localhost:3000/customers/sign-up', 
                    { 
                        method: 'POST', 
                        body: req_body,
                        headers: { 'Content-Type': 'application/json' }
                    });

                    if (resp.status === 201) {
                        alert(`Cadastro realizado com sucesso :).\nSeja bem vindo ${this.event.name}`);
                        let resp_json = await resp.json();
                        console.log(resp_json.token);
                        this.$store.commit('login', resp_json.token);
                        this.$router.push('/');
                    }

                    else if (resp.status === 400) {
                        let resp_data = await resp.json();
                        alert(resp_data.message);
                    }
                } catch(e) {
                    alert('Falha no cadastro!');
                }
            }
            else {
                alert("Campos inválidos. Preencha todos os campos corretamente");
            }
        },
    },
};
</script>


<style scoped>
@import '/public/assets/css/button.css';
@import '/public/assets/css/forms.css';
</style>