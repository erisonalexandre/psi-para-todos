<template>
  <div class="login container mt-5">
    <div class="card text-left">
      <div class="card-body">
        <h1>Login</h1>
        <form>
          <div class="form-group">
            <label for="username">Nome</label>
            <input type="text" class="form-control" v-model="username">
          </div>
          <div class="form-group">
            <label for="password">Senha</label>
            <input type="password" class="form-control" v-model="password">
          </div>
          <div class="form-group">
            <button>Acessar</button>
            <router-link to="/">Esqueci minha senha.</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'

}
</script>
