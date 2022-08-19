<template>
  <div class="home">
    <router-link 
      to="/helloworld" tag="button" active-class="active" 
      class="btn"
      v-quando="'animation-helloworld'"
      >
        <a>Hello</a>
    </router-link>

    <router-view name="page"></router-view>

    <!-- <div class="previa"></div> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  directives: {
		"quando": {
			bind(el, binding){
					// const tipoEvento = binding.arg
					const classElement = binding.value
					el.addEventListener('mouseenter', ()=>{
            el.classList.add(classElement)
          })
					el.addEventListener('mouseout', ()=>{
            el.classList.remove(classElement)
          })

			}
		}
	},
  name: 'HomeView',
  components: {},
  data(){
    return {
      aaa: '123'
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>

  a{
    color: white;
    background-color: black;
    border-radius: 1rem;
    padding: 0.5rem;
    text-decoration: none;
  }
  .btn{
      width: 30rem;
      height: 20rem;
      border-radius: 1rem;
      margin-left: auto;
      margin-right: auto; 

  }

  .animation-helloworld{
    animation-name: animation;
    animation-fill-mode: both;
    animation-duration: 3s;
  }

  @keyframes animation {
    from {
      background-color: black ;
    }
    to {
      background-image: url("@/image/teste.gif");
      Background-size: contain;
      background-repeat: no-repeat
    }
  }
</style>
