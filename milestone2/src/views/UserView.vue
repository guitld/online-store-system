<template>
    <div class="wrapper">
        <div class="formulary">
            <h4>Alterar perfil</h4>
            <form class="form-inputs">
                <simple-input v-model="event.name" label="nome" type="text" required></simple-input>
                <simple-input v-model="event.email" label="e-mail" type="email" required></simple-input>
                <simple-input v-model="event.cpf" label="cpf" type="text"
                    pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})" required>
                </simple-input>
                <simple-input v-model="event.address" label="endereço" type="text" required></simple-input>
                <simple-input v-model="event.phone" label="telefone" type="tel" required></simple-input>
                <simple-input v-model="event.password" label="senha" type="password" required></simple-input>
                <button class="btn-submit" type="button" @click="handleCadastro()">
                    alterar cadastro
                </button>
            </form>
        </div>
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
                password: "",
            },
        };
    },
    methods: {
        handleCadastro() {
            if (
                this.event.email != "" &&
                this.event.password != "" &&
                this.event.name != "" &&
                this.event.cpf != "" &&
                this.event.address != "" &&
                this.event.phone != ""
            ) {
                let emailCPFFound = false;
                for (let i = 0; i < users.length; i++) {
                    if (this.event.email == users[i]["email"] ||
                        this.event.cpf == users[i]["cpf"]) {
                        emailCPFFound = true;
                        break;
                    }
                }
                if (emailCPFFound) {
                    alert("Dados alterados com sucesso!");
                }
                else {
                    alert("Usuário não encontrado!");
                }
            }
            else
                alert("Preencha todos os campos!");
        },
    },
};
</script>


<style>
@import "/public/assets/css/forms.css";
@import "/public/assets/css/button.css";

.btn-submit {
    width: 150px;
}
</style>