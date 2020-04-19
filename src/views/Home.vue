<template>
  <div class="home">
    <section class="container" id="primeiro">
      <div class="partone row">
        <div class="col d-flex justify-content-center align-items-center">
          <div class="text-center text-md-center" id="conteudo-primeiro">
            <h1>A plataforma que conecta você ao atendimento ideal</h1>
            <h2>Você já conhece a <div class="nomedosite"><span class="psipara">Psi Para</span> <span class="todos">Todos</span></div>?</h2>
            <div class="align-items-center">
              <img :src="require('../assets/part1.svg')">
            </div>
            <a href="#saiba" class="button-home"><button>SAIBA MAIS</button></a>
          </div>
        </div>
      </div>
    </section>
    <section class="parttwo" id="saiba">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-4 d-none d-md-block">
            <img :src="require('../assets/part2.svg')" class="img-fluid">
          </div>
          <div class="col-md-8">
            <h1>O que é Psi Para Todos?</h1>
            <h2>Uma solução que une a população e psicólogos facilitando a conexão e agendamento de serviços psicológicos
              gratuito, de maneira simples, humana e segura, com apenas um clique!</h2>
            <h2>
              Períodos de pandemia e quarentena aumentam ainda mais os casos de transtornos ansiosos, como no caso da COVID-19, junto a isso o problema pode-se tornar ainda maior com agravante de uma possível crise econômica.
            </h2>
            <h2>A oferta de serviços de atendimento psicológico voluntário é uma prática existente não só pelos profissionais psicólogos, como também, por instituições públicas e privadas.
            </h2>
            <h2>Diante deste cenário, a demanda pela busca de serviços torna-se maior e a necessidade de distanciamento isolamento social pode dificultar que o cidadão o encontre.</h2>
            <h2> O <div class="nomedosite"><span class="psipara">Psi Para</span> <span class="todos">Todos</span></div> é um serviço que reúne as ofertas de atendimento psicológico voluntário de profissionais e instituições públicas e privadas fazendo uma conexão com o cidadão.
            </h2>
            <h1>Quem pode usar?</h1>
            <h2>Qualquer pessoa, maior de 18 anos, pode acessar nossa plataforma, se cadastrar e agendar um dia e horário para falar com um dos profissionais disponíveis via chamada de vídeo, áudio ou chat.</h2>
            <div class="d-flex justify-content-center">
              <router-link :to="{name: 'Cadastro'}" tag="button">CADASTRAR</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="partthree" id="parceiros">
      <div class="container">
        <h1 class="mt-0">Venha ser nosso parceiro</h1>
        <div class="d-flex">
          <img :src="require('../assets/susam1.svg')" class="logo-partthree img-fluid mx-auto">
          <img :src="require('../assets/vivamente1.svg')" class="logo-partthree d-none d-md-block">
          <img :src="require('../assets/pisco1.svg')" class="logo-partthree img-fluid mx-auto">
          <img :src="require('../assets/clinica1.svg')" class="logo-partthree d-none d-md-block">
        </div>
      </div>
    </section>
    <section class="container" id="voce-profissional">
      <div class="partfour row">
        <div class="col">
          <h1>Você que é um profissional na área da Psicologia?</h1>
          <div class="row">
            <div class="col d-none d-md-block">
              <img :src="require('../assets/profi.svg')">
            </div>
            <div class="col">
              <h2>O <div class="nomedosite"><span class="psipara">Psi Para</span> <span class="todos">Todos</span></div> permite crescimento profissional e conecta o psicólogo com pacientes em horários
                flexíveis de acordo com a disponibilidade de ambos.
              </h2>
              <h2>Você define os horários que pode atender, o tempo de consulta, etc.</h2>
              <h2>O <div class="nomedosite"><span class="psipara">Psi Para</span> <span class="todos">Todos</span></div> permite que o profissional com CRP ativo e cadastro no E-Psi participe de forma individual e em caráter voluntário a partir do cadastramento na plataforma.
              </h2>
              <h2>Além de permitir o gerenciamento da agenda de atendimento e o acompanhamento do serviço, ao final do atendimento, o profissional será avaliado e sua pontuação integrará uma lista de “heróis”.
              </h2>
              <router-link :to="{name: 'CadastroPofissional'}" tag="button">QUERO PARTICIPAR</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="partfive" id="rank">
      <div class="container">
        <div class="row">
          <div class="col">
            <h1>Rank de Heróis</h1>
            <div class="container">
              <div class="row">
                <div class="col">
                  <card class="px-3">
                    <div class="container">
                      <div class="row rank-usuario">
                        <div class="col-4"><img :src="require('../assets/perfil1.svg')"></div>
                        <div class="col-8 rank-descricao">
                          <h2>Carlos Assunção</h2>
                          <h4>Herói Diamante <span class="icon-diamante"></span></h4>
                          <div class="icones1">
                            <img :src="require('../assets/amizade.svg')">
                            <img :src="require('../assets/bate-papo.svg')">
                            <img :src="require('../assets/amigo.svg')">
                          </div>
                        </div>
                      </div>
                      <div class="row rank-usuario">
                        <div class="col-4"><img :src="require('../assets/perfil2.svg')"></div>
                        <div class="col-8 rank-descricao">
                          <h2>Amanda Louise</h2>
                          <h4>Herói Diamante <span class="icon-diamante"></span></h4>
                          <div class="icones1">
                            <img :src="require('../assets/mao.svg')">
                            <img :src="require('../assets/bate-papo1.svg')">
                            <img :src="require('../assets/amizade.svg')">
                          </div>
                        </div>
                      </div>
                      <div class="row rank-usuario">
                        <div class="col-4"><img :src="require('../assets/perfil3.svg')"></div>
                        <div class="col-8 rank-descricao">
                          <h2>Roberta Miranda</h2>
                          <h4>Herói Platina <span class="icon-platina"></span></h4>
                          <div class="icones1">
                            <img :src="require('../assets/bate-papo.svg')">
                            <img :src="require('../assets/amigo.svg')">
                            <img :src="require('../assets/amizade.svg')">
                          </div>
                        </div>
                      </div>
                      <div class="row rank-usuario">
                        <div class="col-4"><img :src="require('../assets/perfil4.svg')"></div>
                        <div class="col-8 rank-descricao">
                          <h2>Gustavo Silva</h2>
                          <h4>Herói Platina <span class="icon-platina"></span></h4>
                          <div class="icones1">
                            <img :src="require('../assets/amizade.svg')">
                            <img :src="require('../assets/mao.svg')">
                            <img :src="require('../assets/bate-papo.svg')">
                          </div>
                        </div>
                      </div>
                    </div>
                  </card>
                </div>
                <div class="col">
                  <div class="rank-selecionado">
                    <h1>Bete</h1>
                    <div class="img-rank-usuario">
                      <img :src="require('../assets/bete.svg')">
                      <h4>Herói Platina <span class="icon-platina"></span></h4>
                    </div>
                    <div class="icones2">
                      <img :src="require('../assets/1.svg')">
                      <img :src="require('../assets/2.svg')">
                      <img :src="require('../assets/3.svg')">
                    </div>
                    <div class="text-center">
                      Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Sapien in monti palavris qui num significa nadis i pareci latim.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="partsix" id="instituicao">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-4 d-none d-md-block">
              <img :src="require('../assets/orgao.svg')" class="img-fluid">
            </div>
            <div class="col-md-8 text-justify">
              <h1>Instituições</h1>
              <h2>A parceria com as instituições que disponibilizam serviços de psicologia, através de Tecnologias da Informação e comunicação (TIC), é de extrema relevância e produz benefícios a todos:</h2>
              <h2>
                <ol type="I">
                  <li>Auxilia no gerenciamento da agenda direcionando o usuário ao serviço disponível no momento</li>
                  <li>Ajuda a organização no acompanhamento do serviço e auxilia a prestação de contas gerando dados sobre o serviço como: confirmação de atendimento realizado, quantidade de horas de serviços já realizadas e muito mais.</li>
                  <li>Proporciona à população um canal transparente com informações seguras e atendimento humano, para minimizar prejuízos.</li>
                  <li>O fluxo de acessos e o aumento da demanda produz dados que serão disponibilizados aos setores públicos para o desenvolvimento de estratégias e de políticas públicas cada vez melhores de saúde mental.</li>
                </ol>
              </h2>

              <h2>Na plataforma a instituição podem realizar seu cadastro e cadastrar seus colaboradores, permitindo ainda, a visualização das confirmações de atendimento e o cenário de avaliações dos usuários do serviço.
              </h2>
              <router-link :to="{name: 'CadastroOrgao'}" tag="button">SEJA UM PARCEIRO</router-link>
            </div>
          </div>
        </div>
    </section>
    <section class="partseven" id="dicas">
        <div class="container">
          <div class="row">
            <div class="col">
              <h1>Dicas de Higiene Mental</h1>
              <div class="container-fluid">
                <div class="row">
                  <div class="col-8">
                    <h2>A <div class="nomedosite"><span class="psipara">Psi Para</span> <span class="todos">Todos</span></div> traz a você diversas dicas para manter a higiene mental diante da pandemia do Covid-19, e o melhor é que a maioria das dicas você leva para a vida.</h2>

                    <h2>Ressaltamos que esse material não substitui a consulta psicológica, que deve ser realizada por um Profissional de Psicologia com Registro ativo no Conselho de Psicologia.</h2>
                    <h2>Então vamos ao que interessa?</h2>
                  </div>
                  <div class="col-4">
                    <img :src="require('../assets/saudemental.svg')" class="saudemental">
                  </div>
                </div>
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
          </div>
        </div>
      </div>
    </section>
    <section class="parteight" id="sobre">
      <div class="container mt-5">
        <div class="row">
          <div class="col">
            <h1>Nossa Missão</h1>
            <h2>Nossa missão é que a <div class="nomedosite"><span class="psipara">Psi Para</span> <span class="todos">Todos</span></div> atenda à população que não tem acesso a serviços psicológicos e conectar cada vez mais as pessoas com psicólogos.</h2>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h1>Equipe de Desenvolvimento</h1>
            <h2>Somos um time multidisciplinar engajados em formular soluções para promoção da saúde, através de um evento promovido pelo Ministério Público do Amazonas, intitulado Pandemic Hackfest Saúde.</h2>
          </div>
          <div class="col">
            <img :src="require('../assets/equipe.svg')" class="equipe">
          </div>
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
      $('#primeiro').height($(window).height() - $('#navbar-default').height()).css('min-height', $('#conteudo-primeiro').height())

      $(window).on('resize', function () {
        var altura = $('#conteudo-primeiro').height()
        altura = altura < 250 ? 250 : altura
        $('#primeiro').height($(window).height() - $('#navbar-default').height()).css('min-height', altura)
      })
    }
    $(window).on('load', function () {
      handleHomeContentHeight()
    })
  }
}
</script>

<style lang="scss">
  .home {
    @media (max-width: 767.98px) {
      h1 {
        font-size: 26px !important;
      }
      h2{
        text-align: center;
      }
      .parttwo {
        padding-top: 20px !important;
        padding-bottom: 15px;
      }
      .partfive{
        h1{
          margin-top: 15px;
        }
        h4{
          padding-left: 15px;
        }
        .col-4{
          img{
            padding-left: 10% !important;
          }
        }
        .icones1{
          padding-left: 15px;
        }
      }
      .partsix{
        h1{
          text-align: center;
        }
        h2{
          text-align: justify;
        }
        button{
          margin:0 auto;
          margin-left: 28%;
        }
      }
      .partseven{
        .col-8{
          flex: 0 0 100%;
          max-width: 100%;
        }
        .col-4{
          max-width: 0%;
        }
        .saudemental{
          display: none;
        }
        .preventivas{
          .row{
            display: inline-block;
            align-items: center;
            align-self: center;
            .col-2{
              max-width: 100% !important;
            }
            .col-10{
              //padding-left: 0 !important;
              max-width: 100% !important;
            }

            img{
              margin-left: 20px !important;
            }

          }
        }
      }
      .parteight{
        .equipe{
          width: 450px !important;
        }
      }
    }
    @media (max-width: 991.98px) {
      #primeiro {
        margin-top: 15px;
        margin-bottom: 15px;
      }
      .parttwo {
        div{
          h1 {
            font-size: 40px !important;
            text-align: center;
          }
          h2 {
            text-align: center !important;
          }
        }
      }
      .partfive{
        .col-4{
          flex: 0 0 100%;
          max-width: 100%;
          img{
            margin-left: 20%;
          }
        }
        .col-8{
          flex: 0 0 100%;
          max-width: 100%;
          padding-top: 7px;
          text-align: center;
        }
      }
      .partseven{
        .col-8{
          h2{
            text-align: justify;
          }
        }
        .saudemental{
          width: 183px;
          height: 340px;
        }

        .preventivas{
          .row{
            text-align: center;
            .col-2{
              flex: 0 0 100%;
              max-width: 100%;
            }
            .col-10{
              flex: 0 0 100%;
              max-width: 100%;
            }
          }
        }
      }
      .parteight{
        .equipe{
          width: 677px;
        }
      }
    }
    @media (min-width: 768px) {
      .parttwo {
        min-height: 559px;
      }
    }
    button {
      width: 225px;
      height: 45px;
      border: none;
      background-color: #4589ff;
      border-radius: .9em;
      color: white;
      padding-top: 0;
      font-size: 20px;
      margin-bottom: 10px;
    }
    .partone {
      padding-top: 20px;
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
      min-height: 365px;
      background-color: #E2ECFF;
      padding-top: 30px;
      padding-left: 30px;
      padding-right: 30px;
      text-align: right;
      align-items: center;
      display: flex;
      div{
        h1 {
          font-size: 35px;
          font-weight: bold;
        }
        h2 {
          font-size: 18px;
          color: #6E6E6E;
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
      padding-bottom: 10px;
      h1 {
        margin-top: 30px;
        margin-bottom: 30px;
      }

      div {
        h2 {
          margin-left: 30px;
          font-size: 24px;
          color: #6E6E6E;
          text-align: justify;
        }
        button{
          margin-top: 10px;
        }
      }
    }

    .partfive{
      background-color: #ffbe9d;
      padding-top: 20px;
      padding-bottom: 30px;
      div{
        h1{
          text-align: center;
        }
        .rank-usuario{
          margin-top: 10px;
          margin-bottom: 10px;
          h4{
            font-size: 15px;
          }
          .icones1{
            img{
              margin-left: 2px;
              margin-right: 2px;
            }
          }
        }
        .icon-diamante{
          display: inline-block;
          width: 15px;
          height: 15px;
          background-image: url('../assets/diamante.svg');
          background-size: 15px 15px;
        }
        .icon-platina{
          display: inline-block;
          width: 15px;
          height: 15px;
          background-image: url('../assets/platina.svg');
          background-size: 15px 15px;
        }
        .rank-selecionado{
          text-align: center;
        }
      }
    }

    .partsix{
      padding-top: 30px;
      padding-bottom: 10px;
      background-color: #FFFFFF;
    }

    .partseven{
      background-color: #58B7BD;
      padding-top: 20px;
      padding-bottom: 10px;
      div{
        h1{
          text-align: center;
          color: #d11211;
        }
        h2{
          margin-top: 15px;
          margin-bottom: 15px;
          color: #FFFFFF;
        }
        .preventivas{
          background-color: #FFFFFF;
          border-radius: 1.25rem;
          padding-top: 20px;
          padding-bottom: 10px;
          margin-bottom: 10px;
          h1{
            color: #4589FF;
          }
          .destaque{
            color: #fd3c65;
            font-weight: bold;
            font-size: 25px;
          }
          .row{
            padding-top: 29px;
            padding-bottom: 20px;
          }
          .col{
            font-size: 25px;
            text-align: justify;
            h2{
              color: #4589FF;
              text-align: center;
              line-height: 1.5;
              font-weight: bold;
            }
          }
          img{
            margin: 0 auto;

          }
        }
      }
    }

    .parteight{
      padding-bottom: 20px;
      .row{
        margin-bottom: 20px;
      }
    }
  }
</style>
