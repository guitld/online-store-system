<template>
  <div class="formulary" v-if="true">
    <h4>Agende seu serviço</h4>
    <form class="form-inputs">
      <simple-input
        v-model="event.zipcode"
        label="cep"
        type="text"
        required
      ></simple-input>
      <simple-input
        v-model="event.number"
        label="número"
        type="text"
        required
      ></simple-input>
      <simple-input v-model="event.date" type="date" required></simple-input>
      <simple-input v-model="event.hour" type="time" required></simple-input>
      <simple-input
        v-model="event.email"
        label="e-mail"
        type="email"
        required
      ></simple-input>
      <simple-input
        v-model="event.phone"
        label="senha"
        type="password"
        required
      ></simple-input>
      <button type="submit" @click="agendar()" class="btn-submit">
        <span class="btn-submit-text">agendar</span>
      </button>
    </form>
  </div>
  <div v-else class="need-authentication">
    <h4>Faça o seu login para agendar um serviço.</h4>
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

</style>