<template>
        <div class="card">
            <ImgList :srcone="srcone" :srctwo="srctwo" id="img" />
            <h3>{{title}}</h3>
            <div>
                <p>
                    {{text}}
                </p>
            </div>
        </div>
</template>
<script>
import ImgList from './ImgList.vue';

export default {
    name: 'Cards',
    components:{
        ImgList,
    },
    props:{
        title: String,
        text: String,
        srcone: String,
        srctwo: String,
    },
}
</script>

<style scoped>

h3{
    color: #E5E6EC;
    text-align: left;
    padding: 0 15px 0 15px;
}

p{
    color: #5D627E;
    text-align: left;
    padding: 0 15px 0 15px;
}

#img{
    padding: 15px;
}

.card{
    width: 300px;
    height: 200px;
    border-radius: 5%;
    margin: 20px 10px 20px 10px;
}






/*Responsivo*/

@media(max-width: 650px){
    .card{
        width: 350px;
        height: 200px;
    }
}
@media(max-width: 300px){
    
}

</style>