<template>
    <div class="btn glass">
        <router-link id="btn-name" :to="to">
            {{name}}
        </router-link>
    </div>
</template>

<script>
export default {
    nome: "Btn",
    props:{
        name: String,
        to: String,
    }
}
</script>

<style scoped>
.btn{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 50px;
    border-radius: 10px;
    cursor: pointer;
    
    
}

#btn-name{
    text-decoration: none;
    padding: 10px;
    color: #1AD1DB;
}

.glass{
    background: rgba(250, 250, 250, .03);
    backdrop-filter: blur(16px);
    overflow: hidden;
}

.btn:hover{
    animation: borderAnimation 0.5s ease-out both;
}
@keyframes borderAnimation {
0%{ background: rgba(250, 250, 250, .05);
    backdrop-filter: blur(2px);
    box-shadow: 0 5px 15px rgba(158, 157, 157, 0.411) ;
    
    }
100%{ background: rgba(250, 250, 250, .05);
    backdrop-filter: blur(5px);
    box-shadow: 0 5px 15px #8A2BE2 ;
    
    }
}
</style>