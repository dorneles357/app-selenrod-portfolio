<template>
  <div class="container">
    <div class="container-presentation">
      <div id="box-text">
        <Box-view id="box" :title="boxtext.title" :subtitle="boxtext.subtitle" data-aos="fade-up" data-aos-duration="3000"/>
        <div id="box-btn" data-aos="fade-up" data-aos-duration="3000">
          <Btn :name="btn.name1" :to="btn.to1" />
          <Btn :name="btn.name2" :to="btn.to2"/>
        </div>
      </div>
      <Svg id="box-svg" data-aos="fade-up" data-aos-duration="3000"/>
    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import BoxView from '../components/BoxView.vue';
import Svg from '../components/Svg.vue';
import Btn from '../components/Btn-glass-route.vue';
export default {
    name:"Home",
    components:{
      BoxView,
      Svg,
      Btn,
    },
    created(){
      AOS.init()
    },
    data(){
        return{
            boxtext:{
                title:"Olá! Que bom que está aqui!",
                subtitle: "Este espaço foi criado para compartilhar um pouco do meu trabalho."
            },
            btn: 
            {
              name1: "Projetos",
              to1: "/projects",
              name2: "Sobre",
              to2:"/about"
            }
        }
    }
}
</script>

<style scoped>
  .container{
    margin: 60px;
    padding: 20px 0px 20px 0px;
  }
  .container-presentation{
    display:flex;
    flex-direction: row;
    height: 500px;
    align-items: center;
    justify-content: space-around;
  }

  #box-btn{
    display: flex;
    justify-content: space-between;
    width: 250px;
  }


  /*responsive*/
  @media(max-width: 880px){
    .container{
      margin: 60px 20px 60px 20px; 
    }
  }

  @media(max-width: 830px){
    .container-presentation{
      flex-direction: column;
      height: auto;
    }
  }

  @media(max-width: 430px){
    .container{
      margin: 0px 10px 0px 10px; 
    }
  }
</style>