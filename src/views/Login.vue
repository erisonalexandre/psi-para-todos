<template>
  <div class="login">
    <div class="card text-left">
      <div class="card-body px-5">
        <h1 class="text-center text-psi" style="margin-bottom: 4rem">Login</h1>
        <form>
          <div class="form-group mb-4">
            <label for="username" class="form-label">Nome</label>
            <input type="text" class="form-control" id="username">
          </div>
          <div class="form-group" style="margin-top: 5rem">
            <label for="password" class="form-label">Senha</label>
            <input type="password" class="form-control" id="password">
          </div>
          <div class="form-group d-flex justify-content-center align-items-center flex-column" style="margin-top: 4rem">
            <button class="psi-btn mb-4">Acessar</button>
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

<style>
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100% - 81px);
  }
  .login > .card {
    width: 100%;
    padding: 15px;
    margin: auto;
    max-width: 450px;
  }
</style>
