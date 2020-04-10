<template>
  <div class="container">
    <div class="row h-100">
      <div class="col-lg-12 my-auto text-center">
        <div class="ops">
          <h1>
            <i class="far fa-frown"></i> <br> OOPS!
          </h1>
          <h2>Pagina não encontrada!</h2>

          <router-link to="/" class="btn btn-outline-primary mt-5 px-5">
            Voltar
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 83vh;
  h1 {
    font-size: 9em;
    font-weight: bolder;
    color: #5b246a2e;
  }
}
</style>