<template>
  <div class="home">
    <section class="container" id="primeiro">
      <div class="partone row">
        <div class="col d-flex justify-content-center align-items-center">
          <div class="text-center text-md-left">
            <h1>A plataforma que conecta você ao atendimento ideal</h1>
            <h2>Você já conhece a psi para todos?</h2>
            <div class="d-md-none">
              <img :src="require('../assets/part1.svg')" class="img-fluid">
            </div>
            <button>SAIBA MAIS</button>
          </div>
        </div>
        <div class="col d-none d-md-flex justify-content-center align-items-center p-5" style="box-sizing: border-box">
          <img :src="require('../assets/part1.svg')" class="img-fluid">
        </div>
      </div>
    </section>
    <section class="parttwo" style="background:#E2ECFF">
      <div class="container">
        <div class="row">
          <div class="col-4">
            <img :src="require('../assets/part2.svg')">
          </div>
          <div class="col-8">
            <h1>O que é Psi Para Todos?</h1>
            <h2>Uma solução que une a população e psicólogos facilitando a conexão e agendamento de serviços psicológicos
              gratuito, de maneira simples, humana e segura, com apenas um clique!</h2>
            <div class="d-flex justify-content-center">
              <button>CADASTRAR</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="partthree">
      <div class="container">
        <h1 class="mt-0">Venha ser nosso parceiro</h1>
        <div>
          <img :src="require('../assets/susam1.svg')" class="logo-partthree">
          <img :src="require('../assets/vivamente1.svg')" class="logo-partthree">
          <img :src="require('../assets/pisco1.svg')" class="logo-partthree">
          <img :src="require('../assets/clinica1.svg')" class="logo-partthree">
        </div>
      </div>
    </section>
    <section class="container">
      <div class="partfour row">
        <div class="col">
          <h1>Você é profissional?</h1>
          <div class="row">
            <div class="col">
              <h2>O Psi Para Todos permite crescimento profissional e conecta o psicólogo com pacientes em horários
                flexíveis de acordo com a disponibilidade de ambos. Você define os horários que pode atender, o tempo de
                consulta, etc</h2>
            </div>
            <div class="col">
              <img :src="require('../assets/jarrodeflor.svg')">
            </div>
          </div>
          <button>QUERO PARTICIPAR</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted () {
    var handleHomeContentHeight = function () {
      $('#primeiro').height($(window).height() - $('#navbar-default').height())

      $(window).on('resize', function () {
        $('#primeiro').height($(window).height() - $('#navbar-default').height())
      })
    }
    $(document).ready(function () {
      handleHomeContentHeight()
    })
  }
}
</script>

<style lang="scss">
  @media (max-width: 991.98px) {
    .partone {
      min-height: 600px;
    }
  }
  .home {
    button {
      width: 225px;
      height: 45px;
      border: none;
      background-color: #4589ff;
      border-radius: .9em;
      color: white;
      padding-top: 0;
      font-size: 20px;
    }
  }
  .partone {
    height: 100%;
    div {
      h1 {
        font-size: 35px;
        font-weight: bold;
      }

      h2 {
        margin-top: 30px;
        margin-bottom: 20px;
        font-size: 25px;
        color: #6E6E6E;
      }

      img {
        max-height: 480px;
      }
    }
  }

  .parttwo {
    height: 559px;
    background-color: #E2ECFF;
    padding-top: 80px;
    padding-left: 30px;
    padding-right: 30px;

    div {

      h1 {
        font-size: 55px;
        font-weight: bold;
      }

      h2 {
        font-size: 23px;
        color: #6E6E6E;
        text-align: right;
        margin-bottom: 30px;
        line-height: 1.5;
      }
    }
  }

  .partthree {
    padding-top: 10px;
    height: 240px;
    background-color: #458AFF;
    text-align: center;

    div {
      h1 {
        color: #FFFFFF;
        margin-top: 20px;
        margin-bottom: 50px;
        font-weight: bold;
      }
    }

  }

  .partfour {
    text-align: center;
    min-height: 405px;

    h1 {
      margin-top: 30px;
      margin-bottom: 30px;
    }

    div {
      h2 {
        margin-left: 30px;
        font-size: 24px;
        color: #6E6E6E;
        text-align: left;
      }
    }
  }
</style>
