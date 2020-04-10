<template>
  <nav class="navbar navbar-expand navbar-light bg-primary topbar shadow">
    <div class="container">
      <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
        <i class="fa fa-bars"></i>
      </button>

      <router-link class="sidebar-brand d-flex align-items-center justify-content-center" to="/">
        <img src="@/assets/logo_gradient.png" alt="totvs" width="120" />
      </router-link>

      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown no-arrow d-sm-none">
          <a class="nav-link dropdown-toggle"
             href="#"
             id="searchDropdown"
             role="button"
             data-toggle="dropdown"
             aria-haspopup="true"
             aria-expanded="false">
                <i class="fas fa-search fa-fw"></i>
          </a>
        </li>

        <li class="nav-item dropdown no-arrow">
          <a class="nav-link dropdown-toggle"
             href="#"
             id="userDropdown"
             role="button"
             data-toggle="dropdown"
             aria-haspopup="true"
             aria-expanded="false">
            <span class="mr-2 d-none d-lg-inline text-white small">
              {{ user.name }}
              <br />
              {{ user.email }}
            </span>
            <i class="fa fa-2x fa-user-circle"></i>
          </a>

          <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
            <a class="dropdown-item" href="/" @click="signOut()">
              <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
              Sair
            </a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    computed: {
      user() {
        return this.$store.getters.account
      }
    },
    methods: {
      signOut() {
        console.log('teste');
        this.$router.replace('/')

        this.$store.dispatch('logout')
      }
    }
  }
</script>
