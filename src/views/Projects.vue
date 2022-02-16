<template>
    <div class="container">
        <div class="container-presentation">
            <div id="box-text" data-aos="fade-in">
                <Box-view id="box" :title="boxtext[0].title" :subtitle="boxtext[0].subtitle" />
                <div id="box-btn" data-aos="fade-in">
                <Btn :name="btn[0].name" :href="btn[0].to" />
                </div>
            </div>

            <div id="box-text" data-aos="fade-in">
                <Box-view id="box" :title="boxtext[1].title" :subtitle="boxtext[1].subtitle" />
                <div id="box-btn" data-aos="fade-in">
                <Btn :name="btn[1].name" :href="btn[1].to"  />
                </div>
            </div>
           
        </div>

        <div class="container-presentation">
            <div id="box-text" data-aos="fade-in">
                <Box-view id="box" :title="boxtext[2].title" :subtitle="boxtext[2].subtitle" />
                <div id="box-btn" data-aos="fade-in">
                <Btn :name="btn[2].name" :href="btn[2].to"  />
                </div>
            </div>

            <div id="box-text" data-aos="fade-in">
                <Box-view id="box" :title="boxtext[3].title" :subtitle="boxtext[3].subtitle" />
                <div id="box-btn" data-aos="fade-in">
                <Btn :name="btn[3].name" :href="btn[3].to"  />
                </div>
            </div>
           
        </div>
  </div> 
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import BoxView from '../components/BoxView.vue';
import Btn from '../components/Btn-glass-link.vue';
export default {
    name:"Home",
    components:{
        BoxView,
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
              {title:"Chat real-time", subtitle: "Uma agenda de contatos que possibilita conversar por mensagens de texto em tempo real."},
              {title:"Batalha espacial", subtitle: "Um jogo desenvolvido utilizando Javascript, HTML5 e canvas. Faça o Teste!"},

            ],
            btn:
            [ 
              {name: "GitHub", to: "https://github.com/dorneles357/api-authentication-js"},
              {name: "GitHub", to: "https://github.com/dorneles357/agenda-.git"},
              {name: "GitHub", to: "https://github.com/dorneles357/Project-real-time.git"},
              {name: "GitHub", to: "https://github.com/dorneles357/app-game-introduction"},
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
    padding: 15px 0px 30px 0px;
    display:flex;
    flex-direction: row;
    max-height: 500px;
    align-items: center;
    justify-content: space-between;
  }

  .container-presentation > div {
    margin-bottom: 30px;
    padding-bottom: 30px;
  }

  #box-btn{
    display: flex;
    justify-content: space-between;
    width: 250px;
  }


  /*responsive*/

  @media(max-width: 900px){
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