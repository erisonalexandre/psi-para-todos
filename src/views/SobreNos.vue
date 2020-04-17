<template>
  <div>
    <div class="container mt-5">
    <section class="row">
      <div class="col-3">
        <img :src="require('../assets/nossamissao1.svg')" class="img-fluid">
      </div>
      <div class="col-8">
        <h1>Nossa Missão</h1>
        <h2>Nossa missão é que a PSI PARA TODOS atenda à população que não tem acesso a serviços psicológicos e conectar cada vez mais as pessoas com psicólogos.</h2>
      </div>
    </section>
    <section class="row">
      <div class="col-7">
        <h1>O Problema</h1>
        <h2>O Brasil é o país com o maior índice de Transtornos Ansiosos, com 9,3% da população afetada, segundo dados da OMS*, e isso pode ser potencializado pela atual situação enfrentada pelas pessoas.</h2>
      </div>
      <div class="col-5">
        <img :src="require('../assets/oproblema.svg')" class="img-fluid">
      </div>
    </section>
    <section class="row">
      <div class="col">
        <h1>Objetivo</h1>
        <h2>Desenvolver uma ferramenta que auxilie na garantia de saúde mental para todos, e que permita gerenciar os agendamentos de atendimentos dos mais diversos projetos e serviços de Psicologia , fazendo  conexão entre o profissional e a pessoa que necessita do serviço.</h2>
        <h1>Quem pode usar?</h1>
        <h2>Qualquer pessoa, maior de 18 anos, pode acessar nossa plataforma, se cadastrar e agendar um dia e horário para falar com um dos profissionais disponíveis via chamada de vídeo, áudio ou chat.</h2>

        <h1>Impactos</h1>
        <h2>O maior impacto de nossa solução é na prevenção, foco que deve ser o principal sempre quando falamos de saúde: prevenir para evitar maiores problemas no futuro.</h2>
      </div>
    </section>
    <section class="row">
      <div class="col">
        <h1>Equipe de Desenvolvimento</h1>
        <h2>Somos um time multidisciplinar engajados em formular soluções para promoção da saúde, através de um evento promovido pelo Ministério Público do Amazonas, intitulado Pandemic Hackfest Saúde.</h2>
      </div>
      <div class="col">
        <img :src="require('../assets/equipe.svg')" class="img-fluid">
      </div>
    </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SobreNos'
}
</script>
<style lang="scss">
h1{
  margin-top:10px;
  margin-bottom: 10px;
}
h2{
  text-align: justify;
  line-height: 1.5;
}
img{
  margin-top: 20px;
  margin-bottom: 30px;
}
</style>
