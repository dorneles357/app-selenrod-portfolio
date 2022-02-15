<template>
    <div class="avatars">
    <!-- Avatar item -->
    <div class="avatars__item">
        <div class="avatars__image">
            <img :src="srcone">
        </div>
    </div>
    <div class="avatars__item">
        <div class="avatars__image">
            <img :src="srctwo">
        </div>
    </div>

    </div>
</template>

<script>

export default {
    name: 'ImgList',
    props: ['srcone', 'srctwo'],
}
</script>

<style scoped>
    .avatars {
        display: flex;
    }

    .avatars__item {
        /* Nagative margin make avatar overlap to previous one */
        margin-left: -4px;
    }  

    .avatars__image {
        /* Add a white curve between avatars */
    

        /* Center the content */
        align-items: center;
        display: flex;
        justify-content: center;

        /* Rounded border */
        border-radius: 9999px;
    }

    img{
        width: 32px;
    }

</style>