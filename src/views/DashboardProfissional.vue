<template>
  <div class="altura-100-centro">
    <div class="row">
      <div class="col-md-4">
          <img :src="require('../assets/Agendamentos.svg')" class="img-fluid" width="500px" >
        <card class="px-4">
            <h1 class="text-center text-psi">Atendimentos</h1>
        </card>
      </div>
      <div class="col-md-8">
      <br>
        <card class="card text-center text-psi">
            <p>Você atendeu</p>
            <h1>3 vezes esse mês</h1>
        </card>
        <br>
        <card class="card text-center text-psi">
          <h1>Seja um Herói Ouro!</h1>
        </card>
        <br>
        <card>
          <template slot="header">
            Agendamentos pendentes de confirmação
          </template>
          <table class="table table-borderless">
            <tr>
              <td class="tg-hmp3">Paciente</td>
              <td class="tg-hmp3">Horário</td>
              <td class="tg-hmp3">Data</td>
              <td class="tg-hmp3">Ação</td>
            </tr>
            <tr>
              <td class="tg-0lax">Sr. Amarildo</td>
              <td class="tg-0lax">17:00h PM</td>
              <td class="tg-lqy6">18/04/2020<br></td>
              <td class="tg-0lax">img img</td>
            </tr>
            <tr>
              <td class="tg-hmp3">Sra. Bruna</td>
              <td class="tg-hmp3"><span style="font-weight:400;font-style:normal">11:00h AM</span><br></td>
              <td class="tg-mb3i"><span style="font-weight:400;font-style:normal">19/04/2020</span></td>
              <td class="tg-hmp3">img img</td>
            </tr>
            <tr>
              <td class="tg-0lax">Sra Renata</td>
              <td class="tg-0lax">14:00 PM</td>
              <td class="tg-lqy6"><span style="font-weight:400;font-style:normal">21/04/2020</span><br></td>
              <td class="tg-0lax">img img</td>
            </tr>
            <tr>
              <td class="tg-hmp3">Sr Apollo</td>
              <td class="tg-hmp3">16:00 PM</td>
              <td class="tg-hmp3"><span style="font-weight:400;font-style:normal">20/04/2020</span></td>
              <td class="tg-hmp3">img img</td>
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

</style>
