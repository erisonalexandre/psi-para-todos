<template>
  <div class="altura-100-centro container">
    <div class="row">
      <div class="col-md-4">
        <img :src="require('../assets/agendamento_paciente.svg')" class="img-fluid" width="500px" >
      </div>
      <div class="col-md-4">
        <img :src="require('../assets/ultimo_atendimento.svg')" class="img-fluid" width="500px" >
      </div>
      <div class="col-md-4">
        <img :src="require('../assets/atendimentos_no_mes.svg')" class="img-fluid" width="500px" >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang="scss">
  .login > .card {
    width: 100%;
    padding: 15px;
    margin: auto;
    max-width: 450px;
    h1{
      font-weight: bold;
    }
  }

  th {
    background: linear-gradient(90deg, #43C7FF 0%, #44A9FF 64.99%, #4584FF 102.13%);
    border-radius: 20px 20px 0px 0px;
  }

</style>
