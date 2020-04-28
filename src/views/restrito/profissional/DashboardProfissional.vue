<template>
  <div class="altura-100-centro container">
    <div class="row">
      <div class="col-md-4">
        <div class="d-flex justify-content-center">
          <img :src="require('../../../assets/Agendamentos.svg')" class="img-fluid" width="350px">
        </div>
        <div class="d-flex justify-content-center">
          <img :src="require('../../../assets/agendamento.svg')" class="img-fluid" width="350px">
        </div>
      </div>
      <div class="col-md-8">
        <div class="row mx-0 justify-content-between">
          <card class="card1 col-lg-5 col-12 mb-3 mb-lg-0">
            <p>Você atendeu</p>
            <h1>3 vezes esse mês</h1>
          </card>
          <card class="card1 col-lg-5 col-12">
            <div class="d-flex align-items-center h-100">
              <h1>Seja um Herói Ouro!</h1>
            </div>
          </card>
        </div>
        <br>
        <card>
          <template slot="header">
            <p class="headerTable">
            Agendamentos pendentes de confirmação
            </p>
          </template>
          <table class="table table-borderless">
            <tr class="text-center">
              <td class="tg-hmp39">Paciente</td>
              <td class="tg-hmp39">Horário</td>
              <td class="tg-hmp39">Data</td>
              <td class="tg-hmp39">Ação</td>
            </tr>
            <tr v-for="(agenda, index) in agendamentosPendentes" :key="index">
              <td class="tg-hmp38">{{ agenda.paciente }}</td>
              <td class="tg-hmp38 text-center">{{ agenda.hora }}</td>
              <td class="tg-hmp38 text-center">{{ agenda.data | moment('DD/MM/YYYY') }}<br></td>
              <td class="tg-hmp38 text-center">
                <span class="mr-2 text-success" @click="aprovarAgendamento(agenda.id)"><i class="fas fa-check-square"></i></span>
                <span class="text-danger"><i class="fas fa-ban"></i></span>
              </td>
            </tr>
          </table>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardProfissional',
  data () {
    return {
      agendamentosPendentes: []
    }
  },
  created () {
    this.getAgendamentosPendentes()
  },
  methods: {
    getAgendamentosPendentes () {
      this.$http.get('agendamentos-pendentes')
        .then(({ data }) => {
          this.agendamentosPendentes = data
        })
    },
    aprovarAgendamento (agendamentoId) {
      this.$http.post('aprovar-agendamento', { agendamento_id: agendamentoId })
        .then((response) => {
          this.getAgendamentosPendentes()
        })
    }
  }
}
</script>

<style lang="scss">
.card1 {
  //position: absolute;
  width: auto;
  height: 132px;
  h1 {
    font-size: 25px;
  }
}

.tg-hmp39{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 22px;
  color: #458AFF;
}

.tg-hmp38{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 112.19%;
  /* or 21px */

  color: #A6A0A0;

  span {
    cursor: pointer;
    transition: .3s
  }

  span:hover {
    filter: brightness(0.8)
  }
}

.headerTable{
  font-family: Nunito;
  font-style: normal;
  font-weight: 900;
  font-size: 27px;
  line-height: 112.19%;
  /* or 30px */

  color: #FFFFFF;
}

</style>
