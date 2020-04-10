<template>
  <div class="container vh-100">
    <!-- Outer Row -->
    <div class="row h-100">
      <div class="col-lg-10 offset-lg-1 my-auto">
        <div class="card o-hidden border-0 shadow-lg">
          <div class="card-body p-0 h-50">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block bg-primary bg-login-image"></div>
              <div class="col-lg-6 bg-gray-100">
                <div class="p-5 mb-2">
                  <h2>Criação de senha</h2>
                  <p
                    class="text-primary"
                  >Para efetivar seu cadastro, crie uma senha, sua senha deve ter no minimo 8 digitos, essa senha será usada no login junto com seu e-mail</p>
                  <form action>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Digite sua senha"
                        v-model="password"
                      />
                    </div>

                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Confirme sua senha"
                        v-model="password_confirmation"
                      />
                    </div>

                    <button
                      type="button"
                      class="btn btn-lg btn-block btn-primary mt-4"
                      @click="send()"
                    >Enviar</button>
                  </form>
                </div>
                <div class="col-lg-12 text-right">
                  <router-link to="/signin" class="m-0 btn btn-link">voltar login</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: "",
      password_confirmation: ""
    };
  },
  mounted() {
    if (this.$store.getters.signedIn) {
      this.$router.push("/pagina-nao-encontrada");
    }
  },
  methods: {
    send() {
      this.$http.plain
        .put("/confirmation", {
          password: this.password,
          password_confirmation: this.password_confirmation,
          token: this.$route.params.token
        })
        .then(response => {
          this.$router.push("/signin");
        });
    }
  }
};
</script>

<style lang="css" scoped>
.form-control {
  height: 50px;
  font-size: 20px;
  font-weight: lighter;
  border-radius: 0px;
  margin: 20px 0px;
}
.middle-box {
  padding-top: 0vh;
}

h2 {
  font-size: 40px;
  font-weight: bold;
}

p {
  font-size: 16px;
  letter-spacing: 0.5px;
}

.forgot-password {
  font-size: 18px;
  margin: 20px;
}

.btn-link {
  margin-left: 20px;
  padding-top: 20px;
}
</style>
