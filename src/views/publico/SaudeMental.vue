<template>
  <div>
    <div class="row">
      <div class="col">
        <h1>O que é higiene mental?</h1>
        <h2>A higiene mental nada mais é do que um conjunto de hábitos e práticas para manter sua mente prevenida dos diversos adoecimentos psíquicos. Durante a pandemia muito se fala quanto a higiene das mãos e de ações para manter você e as outras pessoas longe do vírus, e quando falamos de higiene mental seguimos a mesma lógica, pois o nível elevado de estresse e ansiedade diante do cenário pode te levar ao adoecimento psíquico e emocional.</h2>
      </div>
    </div>
    <div class="row preventivas">
      <div class="col">
        <h1>E quais ações preventivas devo tomar?</h1>
        <div class="container">
          <div class="row">
            <div class="col-2">
              <img :src="require('../assets/mantenhase.svg')">
            </div>
            <div class="col-10"><span class="destaque">Mantenha-se descansado!</span> O sono é essencial para a reparação do corpo econsolidação da memória.</div>
          </div>
          <div class="row">
            <div class="col-2">
              <img :src="require('../assets/pratique.svg')">
            </div>
            <div class="col-10"><span class="destaque">Pratique exercícios físicos!</span> Além de outros benefícios, eles ajudam na liberação de neurotransmissores naturais do corpo associados ao bem-estar.</div>
          </div>
          <div class="row">
            <div class="col-2">
              <img :src="require('../assets/rotina.svg')">
            </div>
            <div class="col-10"><span class="destaque">Crie uma rotina</span>, de forma que você se mantenha ativo e produtivo durante o dia. A sugestão é que busque intercalar atividades que te tragam bem-estar e atividades de trabalho (laborais)</div>
          </div>
          <div class="row">
            <div class="col-2">
              <img :src="require('../assets/ociosidade.svg')">
            </div>
            <div class="col-10"><span class="destaque">Evite a ociosidade.</span> A mente vazia pode trazer à tona pensamentos de desvalor, desvalia ou desesperança, ou seja, tenha sempre o que fazer.</div>
          </div>
          <div class="row">
            <div class="col-2">
              <img :src="require('../assets/fake.svg')">
            </div>
            <div class="col-10"><span class="destaque">Não caia em fake news!</span> Reduza a leitura ou o contato com notícias que podem causar ansiedade ou estresse. Busque informação apenas de fontes fidedignas e dê passos práticos para preparar seus planos, proteger-se e a sua família. Como a OMS, Ministério da Saúde e da Secretaria de saúde do seu Estado e da sua cidade.</div>
          </div>
          <div class="row">
            <div class="col-2">
              <img :src="require('../assets/empatia.svg')">
            </div>
            <div class="col-10"><span class="destaque">Tenha empatia.</span> Busque, na medida do possível, apoiar os outros ajudando-os em seus momentos de necessidade. A assistência a outros em seu momento de carência pode ajudar a quem recebe o apoio como a quem dá o auxílio, principalmente às pessoas do grupo de Risco. Ex: telefone para seus vizinhos, familiares ou pessoas em sua comunidade que precisam de assistência extra.</div>
          </div>
          <div class="row">
            <div class="col-2">
              <img :src="require('../assets/cuidedevoce.svg')">
            </div>
            <div class="col-10"><span class="destaque">Cuide de você!</span> Durante seu trabalho em casa procure beber bastante água, e adicionar intervalos de descanso e pausa, isso ajuda a reduzir o nível de estresse e te mantém mais produtivo e saudável.</div>
          </div>
          <div class="row">
            <div class="col-2">
              <img :src="require('../assets/mantenhacontato.svg')">
            </div>
            <div class="col-10"><span class="destaque">Mantenha contato</span> com seus familiares, amigos, namorada(o) e pessoas por quem você tem afeto, você não está sozinho! Você seus pares podem enfrentar isso juntos!</div>
          </div>
          <div class="row">
            <div class="col-2">
              <img :src="require('../assets/incentive.svg')">
            </div>
            <div class="col-10"><span class="destaque">Incentive boas ações!</span> Manifeste seu apoio aos profissionais que estão na linha de frente durante a pandemia, compartilhe boas práticas e bons projetos que podem ajudar a sociedade, como a <div class="nomedosite"><span class="psipara">Psi Para</span> <span class="todos">Todos</span></div></div>
          </div>
          <div class="row">
            <div class="col">
              <h2>Estar em quarentena não significa estar só no mundo! Existem milhões de pessoas que assim como você estão em suas casas e isso é um ato de amor, respeito ao próximo! São atos em favor da vida!</h2>
              <h2>Cuidar da saúde mental é cuidar de quem você é!</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h1>E nos casos de crise ou de maior gravidade?</h1>
        <h2>Procure imediatamente um profissional de Psicologia, pois um auxílio profissional será eficaz para redução dos prejuízos e enfrentamento da dificuldade. </h2>
        <h2>Não pense que é um “ato de fraqueza” você pode estar doente e a doença precisa ser tratada adequadamente.</h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h1>Você não está sozinho!</h1>
        <h2>Hoje existem diversas doenças mentais, consideradas por alguns como “frescura”, porém sabemos hoje através de estudos científicos que são doenças, e possuem tratamento!</h2>
        <h2>A Psi para todos possui profissionais cadastrados, de diversos órgãos e projetos, qualificados para atender as mais diversas demandas! Cadastre-se e agende sua consulta <router-link :to="{name:'Cadastro'}">clicando aqui</router-link>.</h2>
        <h2>Vamos juntos fazer a nossa parte e cuidar da nossa saúde física e mental, contribuindo também co a integridade de quem tanto amamos.</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SaudeMental'
}
</script>
