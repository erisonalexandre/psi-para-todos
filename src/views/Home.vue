<template>
  <div class="home container-fluid">
    <section class="partone row">
      <div class="col">
        <h1>A plataforma que conecta você ao atendimento ideal</h1>
        <h2>Você já conhece a psi para todos?</h2>
        <button>SAIBA MAIS</button>
      </div>
      <div class="col">
        <img :src="require('../assets/part1.svg')">
      </div>
    </section>
    <section class="parttwo row" style="background:#E2ECFF">
      <div class="col">
         <img :src="require('../assets/part2.svg')">
      </div>
      <div class="col">
        <h1>O que é Psi Para Todos?</h1>
        <h2>Uma solução que une a população e psicólogos facilitando a conexão e agendamento de serviços psicológicos gratuito, de maneira simples, humana e segura, com apenas um clique!</h2>
        <button>CADASTRAR</button>
      </div>
    </section>
    <section class="partthree row" style="background:#458AFF">
      <div class="col">
          <h1>Venha ser nosso parceiro</h1>
          <div>
              <img :src="require('../assets/susam1.svg')" class="logo-partthree">
              <img :src="require('../assets/vivamente1.svg')" class="logo-partthree">
              <img :src="require('../assets/pisco1.svg')" class="logo-partthree">
              <img :src="require('../assets/clinica1.svg')" class="logo-partthree">
          </div>
      </div>
    </section>
    <section class="partfour row">
      <h1>Você é profissional?</h1>
      <div class="row">
        <div class="col">
          <h2>O Psi Para Todos permite crescimento profissional e conecta o psicólogo com pacientes em horários flexíveis de acordo com a disponibilidade de ambos. Você define os horários que pode atender, o tempo de consulta, etc</h2>
        </div>
        <div class="col">
          <img :src="require('../assets/jarrodeflor.svg')">
        </div>
      </div>
      <button>QUERO PARTICIPAR</button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'

}
</script>
