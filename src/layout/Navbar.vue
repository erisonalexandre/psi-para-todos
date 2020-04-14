<template>
  <b-navbar toggleable="lg" type="" variant="info" class="navbar-psi">
    <div class="container">

      <router-link to="/" class="navbar-brand"><img :src="require('../assets/logo.svg')" class="img-fluid" style="max-height: 55px" alt=""></router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" class="ml-md-4" is-nav>
        <b-navbar-nav>
          <router-link to="/" class="nav-link">Sobre nós</router-link>
          <router-link to="/about" class="nav-link">Serviços</router-link>
          <router-link to="/about" class="nav-link">Tabalhe conosco</router-link>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <router-link to="/login" tag="button" class="btn btn-primary mr-md-2">login</router-link>
          <router-link to="/cadastro" tag="button" class="btn btn-primary">cadastro</router-link>
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

<style>
.navbar-psi {
  background: linear-gradient(90deg, #43C7FF 0%, #44A9FF 64.99%, #4584FF 102.13%);
}
.nav-link {
  color: #fff;
}
</style>
