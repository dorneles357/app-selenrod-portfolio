<template>
    <div class="avatar">
        <!-- Avatar image -->
        <img class="avatar__image" :src="src" />
    </div>
</template>

<script>
export default {
    name:'Avatar',
    props:{
        src: String,
    }
}
</script>

<style scoped>
    .avatar {
        /* Rounded border */
        border-radius: 50%;
        height:180px;
        width: 180px;
    }

    .avatar__image {
        /* Rounded border */
        border-radius: 50%;

        /* Take full size */
        height: 100%;
        width: 100%;
    }

    .avatar__image:hover{
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