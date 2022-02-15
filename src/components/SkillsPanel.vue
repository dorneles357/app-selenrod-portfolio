<template>
    <div class="panel glass">
        <h1>Skills</h1>
        <div class="skill"><p>Javascript</p> <div class="display-skill" style="width: 280px"></div></div>

        <div class="skill"><p>Node JS</p> <div class="display-skill" style="width: 250px"></div></div>

        <div class="skill"><p>HTML e CSS</p> <div class="display-skill" style="width: 250px"></div></div>

        <div class="skill"><p>Vue JS</p> <div class="display-skill" style="width: 220px"></div></div>

        <div class="skill"><p>MongoDB</p> <div class="display-skill" style="width: 200px"></div></div>

        <div class="skill"><p>MySQL</p> <div class="display-skill" style="width: 190px"></div></div>

        <div class="skill"><p>Docker</p> <div class="display-skill" style="width: 180px"></div></div>

    </div>
</template>

<script>
export default {
    name: 'SkillsPanel',
}
</script>

<style scoped>
    .panel{
        width: 400px;
        height: 500px;
        padding: 5px;
        border-radius: 10%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    h1{
        color: white;
        font-size: 25px;
    }
    p{
        width: 100px;
        color: #1AD1DB;
    }
    .skill{
        display: flex;
        align-items: center;
    }
    .display-skill{
        background: white;
        height: 15px;
        margin: 10px;
    }

    .glass{
        background: rgba(250, 250, 250, .03);
        backdrop-filter: blur(16px);
        overflow: hidden;
    }

    .panel:hover{
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

    /*resposive*/

    @media(max-width: 430px){
        .panel{
            width: 360px;
        }
    }
</style>