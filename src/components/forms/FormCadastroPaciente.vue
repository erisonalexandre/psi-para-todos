<template>
  <form>
    <div class="form-group mb-4">
      <label for="username" class="form-label">Nome</label>
      <input type="text" class="form-control" id="username">
    </div>
    <div class="form-group mb-4">
      <label for="email" class="form-label">Email</label>
      <input type="text" class="form-control" id="email" name="email">
    </div>
    <div class="form-group mb-4">
      <label for="username" class="form-label">Telefone</label>
      <input type="text" class="form-control" id="telefone">
    </div>
    <div class="form-group mb-4">
      <label for="username" class="form-label">Data de Nascimento</label>
      <input type="text" class="form-control" id="data_nascimento">
    </div>
    <div class="form-group mb-4">
      <label for="username" class="form-label">CPF</label>
      <input type="text" class="form-control" id="cpf">
    </div>
    <div class="form-group d-flex justify-content-center align-items-center flex-column" style="margin-top: 4rem">
      <button class="psi-btn mb-4 float-right">Continuar</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'FormCadastroPaciente'
}
</script>

<style scoped>

</style>
