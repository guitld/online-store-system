<template>
    <div class="wrapper">
        <div class="formulary" v-if="true">
            <h4>Agende seu serviço</h4>
            <form class="form-inputs">
                <div class="service-type-choice">
                    <span class="service-type-label">tipo do serviço:</span>
                    <div class="service-type-checkbox-container"><input class="service-type-checkbox" type="checkbox"
                            name="tipo-servico" value="Tosa"><span>tosa</span></div>
                    <div class="service-type-checkbox-container"><input class="service-type-checkbox" type="checkbox"
                            name="tipo-servico" value="Banho"><span>banho</span></div>
                </div>

                <simple-input v-model="event.zipcode" label="cep" type="text" required></simple-input>
                <simple-input v-model="event.number" label="número" type="text" required></simple-input>
                <simple-input v-model="event.date" label="data" type="date" required></simple-input>
                <simple-input v-model="event.hour" label="horario" type="time" required></simple-input>
                <simple-input v-model="event.email" label="e-mail" type="email" required></simple-input>
                <simple-input v-model="event.phone" label="senha" type="password" required></simple-input>
                <button type="submit" @click="agendar()" class="btn-submit">
                    <span class="btn-submit-text">agendar</span>
                </button>
            </form>
        </div>
        <div v-else class="need-authentication">
            <h4>Faça o seu login para agendar um serviço.</h4>
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
                zipcode: "",
                number: "",
                date: "",
                hour: "",
                email: "",
                phone: "",
            },
        };
    },
    methods: {
        agendar() {
            if (
                this.event.zipcode != "" &&
                this.event.number != "" &&
                this.event.date != "" &&
                this.event.hour != "" &&
                this.event.email != "" &&
                this.event.phone != ""
            ) {
                alert("Agendamento realizado com sucesso!");
                this.$router.push("/");
            } else alert("Preencha todos os campos!");
        },
    },
};
</script>


<style>
@import "/public/assets/css/forms.css";
@import "/public/assets/css/button.css";

.need-authentication {
    margin: auto;
}

.service-type-choice {
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.service-type-checkbox-container {
    gap: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.service-type-checkbox {
    width: 20px;
}

.service-type-label {
    color: rgba(0, 0, 0, 0.7);
}
</style>