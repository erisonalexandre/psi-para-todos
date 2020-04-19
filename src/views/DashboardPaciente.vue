<template>
  <div class="altura-100-centro container">
    <div class="row">
      <div class="col-md-4">
        <card>
          <template slot="header">
            <h2 class="text-center mt-2 text-white"><strong>Seus Agendamento</strong></h2>
          </template>
          <div class="d-flex justify-content-center">
            <b-calendar></b-calendar>
          </div>
        </card>
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
