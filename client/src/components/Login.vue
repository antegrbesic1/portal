<template>
  <div class="login-component">
    <div class="login-wrapper">
      <div class="login-modal">
        <p>Prijavi se!</p>
        <form action="" id="logInForm">
          <input
            type="username"
            placeholder="Korisničko ime"
            v-model="username"
          />
          <input type="password" placeholder="Lozinka" v-model="password" />
        </form>
        <button @click="logIn">Potvrdi</button>
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
    };
  },
  methods: {
    async logIn() {
      document.querySelector("#logInForm").reset();
      Api()
        .post("login", {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          alert(response.data);
        });
    },
  },
};
</script>

<style>
.login-component {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d6d6d6;
}

.login-modal {
  height: 500px;
  width: 500px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.login-modal p {
  margin-top: 100px;
  font-size: 32px;
  font-weight: 400;
  letter-spacing: 0.5px;
}
.login-modal form {
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-modal form input {
  width: 60%;
  height: 25%;
  margin: 10px;
  border: 0.5px solid rgb(148, 148, 148);
  padding: 10px;
  transition: all 0.2s ease-in-out;
}

.login-modal form input:focus {
  border: 0.5px solid rgb(0, 0, 0);
}

.login-modal button {
  height: 10%;
  width: 30%;
  font-size: 20px;
  font-weight: 300;
  color: white;
  background-color: rgb(68, 68, 68);
}
.login-modal button:hover {
  background-color: rgb(37, 37, 37);
}
</style>
