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
                  <h2>Esqueceu sua senha?</h2>
                  <p
                    class="text-primary"
                  >Não se preocupe, enviaremos outra para você, preencha o campo abaixo e siga as intruções no seu e-mail</p>

                  <div class="row">
                    <div class="col-lg-12">
                      <form role="form">
                        <div class="form-group">
                          <input type="email" class="form-control" placeholder="Email" required />
                        </div>
                        <button
                          type="submit"
                          class="btn btn-primary btn-lg btn-block mb-2"
                        >Enviar nova senha</button>
                      </form>
                      <hr />
                      <div class="mt-4">
                        <router-link
                          to="/"
                          class="btn btn-sm btn-outline-secondary"
                        >Lembrei minha senha</router-link>
                      </div>
                    </div>
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
