<template>
  <div class="login">
    <card class="px-4">
        <h1 class="text-center text-psi" style="margin-bottom: 4rem">Seus Atendimentos</h1>
    </card>
    <card class="px-4">
        <h1 class="text-center text-psi" style="margin-bottom: 4rem">Atendimentos</h1>
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
    justify-content: left;
    align-items: left;
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
