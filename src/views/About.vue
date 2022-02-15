<template>
  <div class="container">
    <div id="box-one">
      <div id="presentaion-panel" data-aos="fade-up" data-aos-duration="3000">
        <Avatar :src="avatar.src" />
        <h1>Ebenézer Dorneles</h1>
        <div id="text">
          <h2>{{avatar.text}}</h2>
        </div>
      </div>
      <SkillsPanel data-aos="fade-up" data-aos-duration="3000"/>
    </div>

    <div class="box-two">
      <BoxArticle :title="boxone.title" :subtitle="boxone.subtitle"  data-aos="fade-up" data-aos-duration="3000"/>
      <div class="cards-panel">
        <Cards :title="cardone[0].title" :text="cardone[0].text"  :srcone="cardone[0].img1" :srctwo="cardone[0].img2" data-aos="fade-up" data-aos-duration="3000"/>
        <Cards :title="cardone[1].title" :text="cardone[1].text"  :srcone="cardone[1].img1" data-aos="fade-up" data-aos-duration="3000"/>
        <Cards :title="cardone[2].title" :text="cardone[2].text"  :srcone="cardone[2].img1" data-aos="fade-up" data-aos-duration="3000"/>
      </div>
    </div>

    <div id="box-three">
      <BoxArticle :title="boxtwo.title" :subtitle="boxtwo.subtitle" data-aos="fade-up" data-aos-duration="3000"/>
      <div class="cards-panel">
        <Cards :title="cardtwo[0].title" :text="cardtwo[0].text"  :srcone="cardtwo[0].img1" data-aos="fade-up" data-aos-duration="3000"/>
        <Cards :title="cardtwo[1].title" :text="cardtwo[1].text"  :srcone="cardtwo[1].img1" data-aos="fade-up" data-aos-duration="3000"/>
        <Cards :title="cardtwo[2].title" :text="cardtwo[2].text"  :srcone="cardtwo[2].img1" data-aos="fade-up" data-aos-duration="3000"/>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

import SkillsPanel from '../components/SkillsPanel.vue'
import Avatar from '../components/Avatar.vue';
import BoxArticle from '../components/BoxAtricle.vue';
import Cards from '../components/Cards.vue'
export default {
  name: 'About',
  components:{
    SkillsPanel,
    Avatar,
    BoxArticle,
    Cards,
  },
  created(){
    AOS.init()
  },
  data(){
    return{
      avatar:
      {
        src:"/img/user.jpg",
        text:`Tive meu primeiro contato com programação em 2016, na Universidade  do pampa (Unipampa), utilizando a linguagem C. 
        A partir de então,  eu vi que programar é algo fantástico. Principalmente em  processos de automatização. A programação 
        me ajudou muito e o mais incrivel é que eu tirei essa solução da minha cabeça e tranformei em código. Programar é uma das
         minhas paixões. Assim como, a Matemática, Fisíca, Astronomia ,filmes de ficção e terrror.`
      },
      boxone:
      {
        title:"Programar é muito legal!",
        subtitle:`Comecei a programar utilizando a linguagem C para automatizar cálculos. Já utilizei a linguagem R para análise de dados.
         Atualmente, me dedico a programação com JS para aplicações web.`
      },
      boxtwo:
      {
        title:"O que me levou a programar para web?",
        subtitle:`Quando eu entrava em algum site da internet eu fica adimirado com a capacidade dos desenvolvedores em criar sites com uma
         aprência incrivel e agrádavel. Isso me deixou muito entusiasmado. Adimiro os profissionais que atuam no front-end. Pois, sem dúvida, 
         a interação com o usuário é algo indispensável.`,
      },
      cardone:
      [
        {title:"Javascript e Node Js", 
        text:`A mais de um ano e meio venho me dedicando ao estudo de Javascript.`,
        img1:"/img/js.png",
        img2:"/img/node.png"},

        {title:"Database", 
        text:`Tenho conhecimentos em postgres, mysql e tambem MongoDB.`,
        img1:"/img/database.png",},

        {title:"Vue JS", 
        text:`Adoro o framework Vue. Sua simplicidade e praticidade são incrivéis!`,
        img1:"/img/vue.png",}
        
      ],
      cardtwo:
      [
        {title:"Fullstack", text:"atuação fullstack é ampla, JS e Node tornam isso algo fácil.", img1:"/img/full.png"},
        {title:"UI e UX ", text:"A experiência positiva do usuário com a aplicação é fundamental. saber isso tambem.", img1:"/img/website.png"},
        {title:"Html e css", text:"Fazer uma página web que agrade seu cliente sem dúvida é muito bom.", img1:"/img/web.png"},
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
  #box-one{
    display: flex;
    justify-content: space-between;
    height: 100%;
    padding-bottom: 60px;
  }
  #presentaion-panel{
    width: 680px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h2{
       color: #5D627E;
        font-size: 20px;
        font-weight: 80;
        text-align: justify;
  }
  h1{
    color: white;
  }

  .cards-panel{
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
  }
  /*responsive*/

  @media(max-width: 880px){
    .container{
      margin: 30px 20px 30px 20px; 
    }
  }
    @media(max-width: 830px){
    #box-one{
      flex-direction: column;
      align-items: center;
    }
  }
  @media(max-width: 430px){
    .container{
      margin: 0px 10px 0px 10px; 
    }
    #presentaion-panel{
      width: 350px;
    }
  }
</style>