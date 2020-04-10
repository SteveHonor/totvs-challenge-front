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
                <div class="p-5">
                  <h2>Sistema</h2>
                  <h4 class="text-primary">Gestão de clientes Inadimplentes</h4>
                  <form class="user mt-4" @submit.prevent="signin()">
                    <div class="alert alert-danger" v-if="error">{{ error }}</div>
                    <div class="form-group">
                      <input
                        type="email"
                        v-model="email"
                        class="form-control"
                        placeholder="E-mail"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        v-model="password"
                        class="form-control"
                        placeholder="Senha"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <div class="custom-control custom-checkbox small">
                        <input type="checkbox" class="custom-control-input" id="customCheck" />
                        <label class="custom-control-label" for="customCheck">Lembre-Me</label>
                      </div>
                    </div>
                    <button
                      type="submit"
                      class="btn btn-lg btn-primary btn-block mb-2 mt-4 font-weight-bold"
                    >Entrar</button>
                  </form>
                  <hr class="mt-4" />
                  <div class="text-center mt-4">
                    <span class="text-grey">Totvs Challenge | Steve J</span>
                  </div>
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
  name: "signin",
  data() {
    return {
      email: "dev@totvs.com.br",
      password: "123123",
      error: ""
    };
  },
  created() {
    this.checkSignedIn();
  },
  updated() {
    this.checkSignedIn();
  },
  mounted() {
    if (this.$store.getters.signedIn) {
      this.$router.push("/");
    }
  },
  methods: {
    async signin() {
      await this.$http.plain
        .post("/users/signin", {
          email: this.email,
          password: this.password
        })
        .then(response => this.signinSuccessful(response))
        .catch(error => this.signinFailed(error));
    },
    signinSuccessful(response) {
      console.log(response);
      if (!response.data.token) {
        this.signinFailed(response);
        return;
      }
      this.$store.dispatch("login", response.data.user);
      this.$store.dispatch("token", response.data.token);

      this.error = "";

      this.$router.push("/financial/defaulting");
    },
    signinFailed(error) {
      this.error =
        (error.response && error.response.data && error.response.data.error) ||
        "";
      this.$store.dispatch("logout");
    },
    checkSignedIn() {
      if (this.$store.getters.signedIn) {
        this.$router.replace("/signin");
      }
    }
  }
};
</script>
