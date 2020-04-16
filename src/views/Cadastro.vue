<template>
  <div class="container" id="cadastro">
    <div class="row">
      <div class="col-md-4">
        <card>
          <div class="card-body">
            <img :src="require('../assets/paciente.svg')">
          </div>
          <template slot="footer">
            <router-link to="/cadastro/paciente">Paciente</router-link>
          </template>
        </card>
      </div>
      <div class="col-md-4">
        <card>
          <div class="card-body">
            <img :src="require('../assets/profissional.svg')">
          </div>
          <template slot="footer">
            <router-link to="/cadastro/profissional">Profissional</router-link>
          </template>
        </card>
      </div>
      <div class="col-md-4">
        <card>
          <div class="card-body">
            <img :src="require('../assets/orgao.svg')">
          </div>
          <template slot="footer">
            <router-link to="/cadastro/orgao">Orgão</router-link>
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
    a {
      color: #fff;
    }
    .card{
      .card-body{
        text-align: center;
        background-color: #FFFFFF;
        img{
          width: 242px;
          height: 241px;
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
