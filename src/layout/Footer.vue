<template>
  <footer class="rodape">
    <div class="container-fluid">
      <div class="row">
        <div class="col-4">
          <p>Desenvolvido por Krakatoa Team</p>
        </div>
        <div class="col-5">
          <p>E-mail: atendimentopsiparatodos@gmail.com
          </p>
        </div>
        <div class="col-3">
          <p>
            Siga-nos em nossa rede: Instagram:@psiparatodos_
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
.rodape{
    height: 69px;
    background-color: #458AFF;
    padding-left: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    div > p{
      color: #FFFFFF;
      font-size: 15px;
    }
}
</style>
