<template>
  <b-navbar toggleable="lg" type="dark" variant="info" class="navbar-psi" id="navbar-default">
    <div class="container">

      <router-link to="/" class="navbar-brand"><img :src="require('../assets/logo.svg')" class="img-fluid" style="max-height: 55px" alt=""></router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" class="ml-md-4" is-nav>
        <b-navbar-nav>
          <a href="/#sobre" class="nav-link">Sobre nós</a>
          <a href="/#voce-profissional" class="nav-link">Profissional</a>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" id="btn-navbar">
          <router-link to="/login" tag="button" class="btn btn-primary mr-md-2">Login</router-link>
          <router-link to="/cadastro" tag="button" class="btn btn-primary">Cadastro</router-link>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style lang="scss">
@media (max-width: 991.98px) {
  .navbar-collapse.collapsing, .navbar-collapse.show {
    text-align: center;
    z-index: 999;
    padding: 1.5rem;
    border-radius: 0.25rem;
    background: #FFF;
    box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1), 0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
    -webkit-animation: show-navbar-collapse .2s ease forwards;
    animation: show-navbar-collapse .2s ease forwards;
  }
  .navbar-dark .navbar-nav .nav-link {
    color: #808080 !important;
  }
  #btn-navbar {
    align-items: center;
  }
}
.navbar-psi {
  background: linear-gradient(90deg, #43C7FF 0%, #44A9FF 64.99%, #4584FF 102.13%);
}

#navbar-default.navbar-dark .navbar-nav .nav-link {
  color: #fff;
}
#navbar-default.navbar-dark .navbar-nav .nav-link:hover {
  color: #e4e4e4;
}
#navbar-default {
  max-height: 81px;
}
#btn-navbar {
  .btn {
    width: 6rem;
    height: 1.75rem;
    font-size: 0.8rem;
    font-weight: bold;
    padding-top: 0;
    padding-bottom: 0;
    border: none;
  }
  .btn:first-child {
    background-color: #fff;
    color: #458AFF;
  }
  .btn:last-child {
    background-color: #FD3C65;
  }
}
</style>
