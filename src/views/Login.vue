<template>
  <div class="login">
    <card class="px-5">
        <h1 class="text-center text-psi" style="margin-bottom: 4rem">Login</h1>
        <form>
          <div class="form-group mb-4">
            <label for="username" class="form-label">Nome</label>
            <input type="text" class="form-control" id="username">
          </div>
          <div class="form-group">
            <label for="password" class="form-label">Senha</label>
            <input type="password" class="form-control" id="password">
          </div>
          <div class="form-group d-flex justify-content-center align-items-center flex-column" style="margin-top: 4rem">
            <button class="psi-btn mb-4">
              <p>Acessar</p>
              <span>></span>
            </button>
            <router-link to="/esqueci">Esqueci minha senha.</router-link>
          </div>
        </form>
    </card>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang="scss">
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20%;
    overflow-y: auto;
    overflow-x: hidden;
    height: calc(100% - 81px);
  }
  .login > .card {
    width: 100%;
    padding: 15px;
    margin: auto;
    max-width: 450px;
    h1{
      font-weight: bold;
    }
  }

</style>
