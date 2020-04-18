<template>
  <div class="altura-100-centro">
    <card class="px-5">
      <h1 class="text-center text-psi" style="margin-bottom: 4rem">Faça seu cadastro</h1>
      <form>
        <div class="form-group mb-4">
          <label for="username" class="form-label">Nome</label>
          <input type="text" class="form-control" id="username">
        </div>
        <div class="form-group">
          <label for="email" class="form-label">Email</label>
          <input type="text" class="form-control" id="email">
        </div>
        <div class="form-group">
          <label for="telefone" class="form-label">Telefone</label>
          <input type="text" class="form-control" id="telefone">
        </div>
        <div class="form-group">
          <label for="data_nascimento" class="form-label">Data de Nascimento</label>
          <input type="text" class="form-control" id="data_nascimento">
        </div>
        <div class="form-group">
          <label for="cpf" class="form-label">CPF</label>
          <input type="text" class="form-control" id="cpf">
        </div>
        <div class="form-group">
          <label for="password" class="form-label">Senha</label>
          <input type="password" class="form-control" id="password">
        </div>
        <div class="form-group d-flex justify-content-center align-items-center flex-column" style="margin-top: 4rem">
          <button class="psi-btn mb-4">
            <p>Continuar</p>
            <span></span>
          </button>
        </div>
      </form>
    </card>
  </div>
</template>

<script>
import animarInputs from '../../mixins/animarInputs'

export default {
  name: 'CadastroProfissional',
  mixins: [animarInputs]
}
</script>
