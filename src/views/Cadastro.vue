<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <p class="card-text">Imagino colocar imagem aqui representado o usuario paciente</p>
          </div>
          <div class="card-footer bg-transparent border-success">Paciente</div>
        </div>
        <card>
          <form-cadastro-paciente></form-cadastro-paciente>
        </card>
      </div>
      <div class="col">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <p class="card-text">Imagino colocar imagem aqui representado o usuario profissional</p>
          </div>
          <div class="card-footer bg-transparent border-success">Profissional</div>
        </div>
      </div>
      <div class="col">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <p class="card-text">Imagino colocar imagem aqui representado o usuario orgão</p>
          </div>
          <div class="card-footer bg-transparent border-success">Orgão</div>
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
