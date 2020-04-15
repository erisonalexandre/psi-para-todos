<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
             <img :src="require('../assets/paciente.svg')">
          </div>
          <div class="card-footer"><router-link to="/cadpaciente">Paciente</router-link></div>
        </div>
        <card>
          <form-cadastro-paciente></form-cadastro-paciente>
        </card>
      </div>
      <div class="col">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <img :src="require('../assets/profissional.svg')">
          </div>
          <div class="card-footer"><router-link to="/cadprofissional">Profissional</router-link></div>
        </div>
      </div>
      <div class="col">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
             <img :src="require('../assets/orgao.svg')">
          </div>
          <div class="card-footer"><router-link to="/cadorgao">Orgão</router-link></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormCadastroPaciente from '../components/forms/FormCadastroPaciente'
export default {
  name: 'Cadastro',
  components: { FormCadastroPaciente }
}
</script>
