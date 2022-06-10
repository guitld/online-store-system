<template>
  <div class="container">
    <div class="sign-in-flexbox">
      <div class="sign-in">
        <h4>Acesse sua conta</h4>
        <p>
          é novo por aqui?
          <a href="sign_up.html"><strong>cadastre-se</strong></a>
        </p>
        <form>
          <simple-input
            v-model="event.email"
            label="e-mail"
            type="email"
            required
          ></simple-input>
          <simple-input
            v-model="event.senha"
            label="senha"
            type="password"
            required
          ></simple-input>
          <input class="btn_submit" type="submit" value="ENTRAR" />
        </form>
      </div>

      <div class="pet-img">
        <img :src="catDogImage" alt="" />
      </div>
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
        email: "",
        password: "",
      },
      catDogImage: "assets/img/header-pet-na-cabine.png",
    };
  },
};
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
  justify-content: center;
}

.sign-in h4 {
  text-align: center;
}

.sign-in h4,
.btn_submit {
  text-transform: uppercase;
}

input {
  border: 2px solid #f5e9ee;
  background-color: #fad2e1;
  border-radius: 5px;
  width: 330px;
  height: 40px;
  padding-left: 5px;
}

input:focus {
  border-color: #cb5c7f;
}

.formulary > div {
  position: relative;
  padding-top: 2px;
}

.formulary > div > label {
  position: absolute;
  left: 0;
  font-size: small;
  color: rgba(0, 0, 0, 0.4);
  cursor: text;
  transition: top 200ms ease-in, left 200 ease-in, font-size 200ms ease-in;
  background-color: #fad2e1;
}

input:focus + label,
input:not(:placeholder-shown) + label {
  transform: translateY(-1.8em) scale(0.9);
  transition: 0.3s;
  color: black;
}

input::placeholder {
  color: transparent;
}

input:focus {
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
  margin: auto;
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

.body {
  position: absolute;
}

.container {
  width: 70%;
  margin: auto auto;
}

.sign-in-flexbox {
  display: flex;
  flex-direction: row;
  gap: 100px;
}

.sign-in p {
  margin-top: 12px;
  text-align: right;
  text-transform: lowercase;
  font-size: 14px;
  padding-right: 6%;
}

.sign-in p a {
  color: black;
}

.sign-in p a:hover {
  color: rgb(50, 49, 49);
}

input {
  margin: 10px;
}

.formulary > div > label {
  margin: 7% 5%;
}

.pet-img {
  width: 100%;
  margin: auto;
}

.form-pet-logo {
  width: 400px;
}
</style>