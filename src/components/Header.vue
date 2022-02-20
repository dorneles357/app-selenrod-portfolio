<template>
    <nav id="nav-h" class="nav-bar glass">
        <div class="nav-bar">
            <router-link id="selenrod-logo" to="/"><img :src="logo.src" width="32"></router-link>
        </div>

        <div>
            <img id="btn-sandwich" :src="btn.btnSandwich" @click="menu($event)">
        </div>

        <div class="menu" id="menu">
            <div id="nav-bar-responsive" class="nav-bar" >
                <router-link id="selenrod-logo" to="/">Home</router-link>
                <router-link class="nav-menu" to="/projects" @click="menu($event)">Projects</router-link>
                <router-link class="nav-menu" to="/about" @click="menu($event)">About</router-link>
            </div>
        </div>
    </nav> 
    
</template>

<script>

export default {
    name: 'Header',
    data(){
        return {
            btn: 
            {
                btnSandwich:"/img/btn-sandwich.png"
            },
            logo:
            {
                src:'img/selenrod.png'
            }
        }
    },
    methods:{
        menu(event){
            //Identica o evento e aplica o método viável
            if(event.type === 'touchstart') event.preventDefault();

            document.querySelector('#menu').classList.toggle('active');
            

            /*
            event.currentTarget.setAttribute('aria-expanded', active);

            //Assecibilidade
            if(active) 
                event.currentTarget.setAttribute('aria-label','Fechar Menu');
            else
                event.currentTarget.setAttribute('aria-label','Abrir Menu');
           */ 
        }
    }
}
</script>

<style scoped>

    #nav-h{  
/*         width: 100%;
        position: fixed;
        top:0;
        left: 0; */
        height: 70px;
        display: flex;
        
        
        
    }
    #nav-h > div{
        margin: 0 60px 0 60px;
    }
    .nav-bar{
        display: flex;
        align-items: center;
        justify-content: space-between;
    
    }

    #selenrod-logo{
        text-decoration: none;
        margin: 10px;
        padding: 10px;
        color: white;
        font-size: 16px;
    }
    .nav-menu{
        text-decoration: none;
        margin: 10px;
        padding: 10px;
        font-size: 16px;
        color: #1AD1DB;
    }
    #link-h{
        display: flex;

    } 

    .menu{
        display: flex;
    }

    #btn-sandwich{
        display: none;
        width: 32px;
        cursor: pointer;
        padding: 10px;
    }

    .glass {
        background:#070A1B;
    }

    /*Resposive*/
    /*Responsivo*/

    @media(max-width: 900px){
        #nav-h > div{
            margin: 0px 20px 0px 20px;
        }
    }


    @media(max-width: 650px){
        #nav-h{  
            margin: 0 1px 0 1px; 
        }
        #nav-h > div{
        margin: 0 1px 0 1px;
         }
        #btn-sandwich{
            display: block;
        }
        #nav-bar-responsive{
            display: flex;
            flex-direction: column;
        }
        #menu{
            display: block; 
            position: absolute;
            width: 100%;
            top: 80px;
            right: 0px;
            background:#070A1B;
            height: 0px;
            transition: 0.6s;
            z-index: 1000;
            visibility: hidden;
            overflow-y: hidden;
        }

        #menu.active{
            height: calc(100vh - 70px);
            visibility: visible;
            overflow: auto;
    }
    }

    

</style>