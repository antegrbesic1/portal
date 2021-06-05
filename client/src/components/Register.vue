<template>
  <div class="register-component">
    <div class="register-wrapper">
      <div class="register-modal">
        <p>Registriraj se</p>
        <form action="" id="registerForm">
          <input
            v-bind:class="{
              valid: validUsername,
              exist: validUsername == false,
            }"
            type="username"
            placeholder="Odaberite vaše korisničko ime"
            v-model="username"
            @keyup="checkUsername"
          />
          <input
            type="password"
            placeholder="Odaberite lozinku"
            v-model="password"
          />
        </form>
        <button @click="register">Potvrdi</button>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "../services/Api";
export default {
  name: "Login",
  data() {
    return {
      username: null,
      password: null,
      validUsername: null,
    };
  },
  methods: {
    register() {
      document.querySelector("#registerForm").reset();
      Api().post("register", {
        username: this.username,
        password: this.password,
      });
    },
    checkUsername() {
      Api()
        .post("usernamecheck", {
          username: this.username,
        })
        .then((response) => {
          this.validUsername = response.data.valid;
        });
    },
  },
};
</script>

<style>
.register-component {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d6d6d6;
}

.register-modal {
  height: 500px;
  width: 500px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.register-modal p {
  margin-top: 100px;
  font-size: 32px;
  font-weight: 400;
  letter-spacing: 0.5px;
}
.register-modal form {
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.register-modal form input {
  width: 60%;
  height: 25%;
  margin: 10px;
  border: 0.5px solid rgb(148, 148, 148);
  padding: 10px;
  transition: all 0.2s ease-in-out;
}

.register-modal form input:focus {
  border: 0.5px solid rgb(0, 0, 0);
}

.register-modal button {
  height: 10%;
  width: 30%;
  font-size: 20px;
  font-weight: 300;
  color: white;
  background-color: rgb(68, 68, 68);
}
.register-modal button:hover {
  background-color: rgb(37, 37, 37);
}
.valid {
  color: green !important;
}
.exist {
  color: red !important;
}
</style>
