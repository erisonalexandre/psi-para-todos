<template>
  <div class="altura-100-centro">
    <card class="px-3">
      <h1 class="text-center text-psi">Faça seu cadastro</h1>
      <form ref="form" @submit.prevent="submit">
        <div class="form-group">
          <label for="username" class="form-label">Nome</label>
          <input type="text" class="form-control" v-model="form.nome" id="username">
        </div>
        <div class="form-group">
          <label for="email" class="form-label">Email</label>
          <input type="text" class="form-control" v-model="form.email" id="email">
        </div>
        <div class="form-group">
          <label for="telefone" class="form-label">Telefone</label>
          <input type="text" class="form-control" v-model="form.telefone" id="telefone">
        </div>
        <div class="form-group">
          <label for="data_nascimento" class="form-label">Data de Nascimento</label>
          <input type="text" class="form-control" v-model="form.data_nascimento" id="data_nascimento">
        </div>
        <div class="form-group">
          <label for="cpf" class="form-label">CPF</label>
          <input type="text" class="form-control" v-model="form.cpf" id="cpf">
        </div>
        <div class="form-group">
          <label for="password" class="form-label">Senha</label>
          <input type="password" class="form-control" v-model="form.password" id="password">
        </div>
        <div class="form-group d-flex justify-content-center align-items-center flex-column">
          <button class="psi-btn">
            <p>Continuar</p>
            <span>></span>
          </button>
        </div>
      </form>
    </card>
  </div>
</template>

<script>
import animarInputs from '../../mixins/animarInputs'

export default {
  name: 'CadastroPaciente',
  data () {
    return {
      form: {
        nome: null,
        cpf: null,
        data_nascimento: null,
        password: null,
        telefone: null,
        email: null
      }
    }
  },
  mixins: [animarInputs],
  methods: {
    submit () {
      // const formData = this.$refs.form ? new FormData(this.$refs.form) : new FormData()
      axios.post('/users', this.form).then((response) => {
        console.log(response)
      })
    }
  }
}
</script>
