<template>
    <footer id="blog-footer">
        <div class="box">
        <nav class="nav">
            <a href="https://github.com/dorneles357" target="_blanck" class="nav-link"><ion-icon name="logo-github"></ion-icon></a>
            <a href="mailto:ebenezerdorneles@gmail.com" target="_blanck" class="nav-link"><ion-icon name="mail-outline"></ion-icon></a>
            <a href="https://www.linkedin.com/in/ebedorneles/" target="_blanck" class="nav-link"><ion-icon name="logo-linkedin"></ion-icon></a>
        </nav>
        <nav class="nav">
            <p class="txtFooter">Desenvolvido por Ebenézer Dorneles 2022</p>
        </nav>
        </div>
    </footer>
</template>

<script>

export default {
    name: 'Footer',
    props:{},
}
</script>

<style scoped>

#blog-footer{
    position: absolute;
    left: 0;
    margin: 0px;
    background: #040614;
    
    width: 100%;
    height: 180px;
}

.box{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}
.txtFooter{
    color: #5D627E;
    font-size: .9rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

ion-icon {
    font-size: 30px;
    color: gray;
    padding: 40px 10px 20px 10px;
    
}

</style>