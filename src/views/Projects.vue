<template>
    <div class="container">
        <div class="container-presentation">
            <div id="box-text" data-aos="fade-in">
                <Box-view id="box" :title="boxtext[0].title" :subtitle="boxtext[0].subtitle" />
                <div id="box-btn" data-aos="fade-in">
                <Btn :name="btn[0].name" :href="btn[0].to" />
                </div>
            </div>
            <Svg id="box-img" data-aos="fade-in"/>
        </div>

        <div class="container-presentation">
            <div id="box-text" data-aos="fade-in">
                <Box-view id="box" :title="boxtext[1].title" :subtitle="boxtext[1].subtitle" />
                <div id="box-btn" data-aos="fade-in">
                <Btn :name="btn[1].name" :href="btn[1].to"  />
                </div>
            </div>
            <Svg id="box-img" data-aos="fade-in"/>
        </div>

        <div class="container-presentation">
            <div id="box-text" data-aos="fade-in">
                <Box-view id="box" :title="boxtext[2].title" :subtitle="boxtext[2].subtitle" />
                <div id="box-btn" data-aos="fade-in">
                <Btn :name="btn[2].name" :href="btn[2].to"  />
                </div>
            </div>
            <Svg id="box-img" data-aos="fade-in"/>
        </div>
  </div> 
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import BoxView from '../components/BoxView.vue';
import Svg from '../components/Svg.vue';
import Btn from '../components/Btn-glass-link.vue';
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
            boxtext:
            [
              {title:"API de registro", subtitle: "Facilita o processo de autenticação do usuário na sua aplicação e torna ela mais segura."},
              {title:"Agenda de contatos", subtitle: "Uma maneira de organizar seus contatos de forma simples e objetiva."},
              {title:"Chat real-time", subtitle: "Uma agenda de contatos que possibilita conversa por mensagens de texto em tempo real"},
            ],
            btn:
            [ 
              {name: "GitHub", to: "https://github.com/dorneles357/api-authentication-js"},
              {name: "GitHub", to: "https://github.com/dorneles357/agenda-.git"},
              {name: "GitHub", to: "https://github.com/dorneles357/Project-real-time.git"},
            ]
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
    margin-bottom: 30px;
    padding: 15px 0px 15px 0px;
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

  @media(max-width: 830px){
    .container-presentation{
      flex-direction: column;
      height: auto;
    }
    #box-img{
        display: none;
    }
  }

  @media(max-width: 430px){
    .container{
      margin: 0px 10px 0px 10px;  
    }
  }
</style>