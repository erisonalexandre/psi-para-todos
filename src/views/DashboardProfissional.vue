<template>
  <div class="altura-100-centro">
    <div class="row">
      <div class="col-md-4">
          <img :src="require('../assets/Agendamentos.svg')" class="img-fluid" width="350px">
          <img :src="require('../assets/agendamento.svg')" class="img-fluid" width="350px">
      </div>
      <div class="col-md-8">
        <div>
          <card class="card card1">
              <p>Você atendeu</p>
              <h1>3 vezes esse mês</h1>
          </card>
          <card class="card1">
            <h1>Seja um Herói Ouro!</h1>
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
            <tr>
              <td class="tg-hmp39">Paciente</td>
              <td class="tg-hmp39">Horário</td>
              <td class="tg-hmp39">Data</td>
              <td class="tg-hmp39">Ação</td>
            </tr>
            <tr>
              <td class="tg-hmp38">Sr. Amarildo</td>
              <td class="tg-hmp38">17:00h PM</td>
              <td class="tg-hmp38">18/04/2020<br></td>
              <td class="tg-hmp38">
                <input type="image" id="image" width="15px" alt="confirm" :src="require('../assets/confirm.svg')">
                <input type="image" id="image" width="15px" alt="confirm" :src="require('../assets/cancel.svg')">
              </td>
            </tr>
            <tr>
              <td class="tg-hmp38">Sra. Bruna</td>
              <td class="tg-hmp38"><span style="font-weight:400;font-style:normal">11:00h AM</span><br></td>
              <td class="tg-hmp38"><span style="font-weight:400;font-style:normal">19/04/2020</span></td>
              <td class="tg-hmp38">
                <input type="image" id="image" width="15px" alt="confirm" :src="require('../assets/confirm.svg')">
                <input type="image" id="image" width="15px" alt="confirm" :src="require('../assets/cancel.svg')">
              </td>
            </tr>
            <tr>
              <td class="tg-hmp38">Sra Renata</td>
              <td class="tg-hmp38">14:00 PM</td>
              <td class="tg-hmp38"><span style="font-weight:400;font-style:normal">21/04/2020</span><br></td>
              <td class="tg-hmp38">
                <input type="image" id="image" width="15px" alt="confirm" :src="require('../assets/confirm.svg')">
                <input type="image" id="image" width="15px" alt="confirm" :src="require('../assets/cancel.svg')">
              </td>
            </tr>
            <tr>
              <td class="tg-hmp38">Sr Apollo</td>
              <td class="tg-hmp38">16:00 PM</td>
              <td class="tg-hmp38"><span style="font-weight:400;font-style:normal">20/04/2020</span></td>
              <td class="tg-hmp38">
                <input type="image" id="image" width="15px" alt="confirm" :src="require('../assets/confirm.svg')">
                <input type="image" id="image" width="15px" alt="confirm" :src="require('../assets/cancel.svg')">
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
  name: 'Login'
}
</script>

<style lang="scss">
  .login {
    display: flex;
    justify-content: left;
    align-items: left;
    border-radius: 20%;
    overflow-y: auto;
    overflow-x: hidden;
    height: calc(100% - 81px);
  }
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

.card1 {
  //position: absolute;
  width: 315px;
  height: 132px;
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
