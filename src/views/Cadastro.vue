<template>
  <div class="container" id="cadastro">
    <div class="row">
      <div class="col">
        <card>
          <div class="card-body">
            <img :src="require('../assets/paciente.svg')">
          </div>
          <template slot="footer">
            <router-link to="/cadpaciente">Paciente</router-link>
          </template>
        </card>
      </div>
      <div class="col">
        <card>
          <div class="card-body">
            <img :src="require('../assets/profissional.svg')">
          </div>
          <template slot="footer">
            <router-link to="/cadprofissional">Profissional</router-link>
          </template>
        </card>
      </div>
      <div class="col">
        <card>
          <div class="card-body">
            <img :src="require('../assets/orgao.svg')">
          </div>
          <template slot="footer">
            <router-link to="/cadorgao">Orgão</router-link>
          </template>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cadastro'
}
</script>

<style lang="scss">
  #cadastro {
    .card{
      margin-top: 30px;
      .card-body{
        text-align: center;
        background-color: #FFFFFF;
        img{
          width: 242px;
          height: 341px;
        }
      }

      .card-footer{
        background-color: #4589ff;
        text-decoration: none;
        color: white;
        font-weight: bold;
        text-align: center;
        text-transform: uppercase;
      }
    }
  }
</style>
