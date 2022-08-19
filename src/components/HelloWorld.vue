<template>
  <div class="hello">
    <div class="div1" :style="{width: porcentagem1}">
      Hello World
    </div>
    <div class="div2" :style="{width: porcentagem2}">
      Hello World
    </div>
    <div class="div3" :style="{width: porcentagem3}">
      Hello World
    </div>

  <!-- <div class="teste" :style="{width: porcentagem}">A</div> -->

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      porcentagem1: 0,
      porcentagem2: 0,
      porcentagem3: 0
    }
  },
  created() {
    this.div1()
  },
  methods:{
    div1(){
      let porcentagemAtual = 0
      let intPorcetagem = 60
      // let finalizou1 = false
      // let finalizou2 = false
        setInterval(()=> {
          if(porcentagemAtual > intPorcetagem) {
            if(porcentagemAtual > intPorcetagem * 2){
              if(porcentagemAtual > intPorcetagem * 3){
                porcentagemAtual = 0
                return
              } 
              this.porcentagem3 = `${porcentagemAtual - (intPorcetagem * 2)}%`
            }else{
              this.porcentagem2 = `${porcentagemAtual - intPorcetagem}%`
            }
          }else{
            this.porcentagem1 = `${porcentagemAtual}%`
          }
          porcentagemAtual++
        }, 50)
      // this.div2()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello{
  font-size: 20em;
  background-color: rgb(66, 65, 65);
}

.div1, .div2, .div3{
  text-align: left;
  margin-left: 20%;
  position: absolute;
  -webkit-transform: skew(-20deg);
}
.div1{
  // z-index: -3;
  color: rgb(0, 0, 0);
  background-color: rgb(0, 0, 0);;
}
.div2{
  // z-index: -2;
  color: black;
  background-color: rgb(255, 255, 255);;
}
.div3{
  // z-index: -1;
  color: black;
  background-color: rgb(0, 0, 0);;
}

</style>
