<template>
        <div class="text-content">
            <h1>{{title}}</h1>
            <h2>{{subtitle}}</h2>
            <p>{{text}}</p>
        </div>
</template>

<script>

export default {
    name: 'BoxView',
    props:{
        title: String,
        subtitle: String,
        text: String,
    }
}
</script>

<style scoped>
    .text-content{
        width: 500px;
    }
    h1{
        text-align: left;
        color: #E5E6EC;
        font-size: 40px;
        padding: 0px 10px 0px 10px;
    }
    h2{
        color: #5D627E;
        font-size: 20px;
        font-weight: 80;
        text-align: left;
        padding: 0px 10px 0px 10px;
    }
    p{
        color: white;
        text-align: left;
        padding: 0px 10px 0px 10px;
    }



@media(max-width: 500px){
    .text-content{
        width: 350px;
    }
    h1{
        font-size: 30px;
    }
}

</style>
