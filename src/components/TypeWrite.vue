<template>
<h1 @load="typewrite" class="dynamic-text">...</h1>
</template>

<script>

export default {
    name: 'TypeWrite',
    props:{
        database: Array,
    },
    methods:{
        machinetypewrite(messages){
            const textAnim = document.querySelector('.dynamic-text');
            
            textAnim.innerHTML ='';
            const textArray = messages.split('');
            
            textArray.forEach((letra, index) => {
                setTimeout(() =>{
                    textAnim.innerHTML += letra
                    }, 100 * index)
            });
        },
        typewrite(){
            const messages = this.database;
            messages.forEach((item, index)=>{
                setTimeout(()=> this.machinetypewrite(item), 3500 * index)
            });
        },
    
    },
    created(){
        setInterval(this.typewrite(), 4000)
    }
}
</script>

<style scoped>
    h1{
        color: #E5E6EC;
        font-size: 40px;
        text-align: center;
        margin-top: 30px;
        margin-bottom: 30px;
        }
    h1::after{
        content: '|';
        margin-left: 5px;
        opacity: 1;
        animation: pisca .7s infinite;
    }
    @keyframes pisca {
        0%, 100%{
            opacity: 1;
        }
        50%{
            opacity: 0;
        }
    }

@media(max-width: 900px){
    h1{
        font-size: 40px;
    }
  }

@media(max-width: 650px){
    h1{
        font-size: 35px;
    }
}


@media(max-width: 480px){
    h1{
        font-size: 30px;
    }
}

</style>