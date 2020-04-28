<template>
  <div class="altura-min-100 container py-4">
    <div class="d-lg-flex d-block justify-content-around">
      <card id="calendario-agendamentos">
        <template slot="header">
          <h2 class="text-center mt-2 text-white"><strong>Seus Agendamentos</strong></h2>
        </template>
        <div class="d-flex justify-content-center agenda">
          <datepicker v-model="dataSelecionada" format="dd/MM/yyyy" :highlighted="state.highlighted" inline @selected="getAgendas" :language="ptBR"></datepicker>
        </div>
      </card>
      <card id="card-cadastro">
        <template slot="header">
          <h2 class="text-center mt-2 text-white"><strong>Cadastrar Horários de Atendimentos</strong></h2>
        </template>
        <div>
          <b-row>
            <b-col cols="6"><p class="mb-0">Horário</p></b-col>
            <b-col cols="6"><p class="mb-0">Preenchimento automático</p></b-col>
          </b-row>
          <hr class="mt-1">
        </div>
        <b-row>
          <b-col cols="6">
            <p v-for="(horario, index) in horarios" :key="index" class="mb-1">{{horario}}</p>
            <b-input-group>
              <input type="time" v-model="hora" class="form-control mt-1" required id="novoHorario">
              <b-input-group-append>
                <span class="botao-salvar-agenda" @click="adicionarHorario"><i class="fas fa-check"></i></span>
              </b-input-group-append>
            </b-input-group>
          </b-col>
          <b-col cols="6">
            <!-- <p>10:10</p>
            <p>10:10</p>
            <p>10:10</p> -->
          </b-col>
        </b-row>
      </card>
    </div>
  </div>
</template>

<script>
import { ptBR } from 'vuejs-datepicker/dist/locale'
import moment from 'moment'
export default {
  name: 'Agenda',
  data () {
    return {
      ptBR: ptBR,
      dataSelecionada: new Date(),
      hora: null,
      state: {
        highlighted: {
          daysOfMonth: [15, 20, 31], // Highlight 15th, 20th and 31st of each month
          includeDisabled: true // Highlight disabled dates
        }
      },
      horarios: [
        '10:00'
      ]
    }
  },
  created () {
    this.getAgendas()
  },
  methods: {
    adicionarHorario () {
      this.horarios = this.horarios.concat([this.hora])
      this.$http.post('agenda', {
        hora: this.hora,
        data: moment(this.dataSelecionada).format('YYYY-MM-DD')
      })
        .then((response) => {
          console.log(response)
        })
    },
    getAgendas (data) {
      this.$http.get('agenda/' + moment(data).format('YYYY-MM-DD'))
        .then(({ data }) => {
          this.horarios = data
        })
    }
  }
}
</script>

<style lang="scss">
  @media (max-width: 991.98px) {
    .agenda {
      .vdp-datepicker__calendar {
        width: 100%;
      }
    }
  }
  @media (min-width: 992px) {
    #card-cadastro {
      min-width: 600px;
    }
  }
  #calendario-agendamento {
    max-height: 300px
  }
  .botao-salvar-agenda {
    border-bottom: black 1px solid;
    color: #42b983;
    cursor: pointer;
    transition: .2s;
  }
  .botao-salvar-agenda:hover {
    color: #3d9363;
  }
  #novoHorario {
    outline: none;
  }
  #novoHorario:focus {
    box-shadow: none;
    border-bottom: black 1px solid;
    cursor: text;
  }
  #novoHorario::-webkit-inner-spin-button,
  #novoHorario::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
</style>
