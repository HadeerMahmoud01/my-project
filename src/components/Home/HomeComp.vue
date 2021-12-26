<template>
    <section class="slider  text-center position-relative">
            <div class="caption position-absolute top-50 start-50 translate-middle">

                <h3> design/ development / photography</h3>
                <h1> creativity has new level </h1>
                <a class="btn career">preview</a>
                <a class="btn career"> get theme</a>






            </div>

    </section>
</template>
<style  scoped>
.slider{
    background-image: url("../assets/img/header.jpg");
    background-size: cover;
    height: 85vh;
    background-color: var(--secondcolor);
    background-blend-mode: multiply;
    color:var(--white);
}
.slider .caption .career{
    color: var(--white);
    background-color: transparent;
    border: 2px solid var(--white);
    font-weight: bold;
    margin-right: 2%; ;
    font-size: calc(var(fontsize)
    2px);
}
.slider .caption .career:hover{
    background-color: var(--white);
    transition: all 1s ease-in-out;
}
</style>

<script>


export default {
    name:"HomeComp"
}
</script>
