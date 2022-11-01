<style>
    .slideshow {
        border-radius: 10px;
    }
    .slideshow img {
        height: 500px;
        width: 100%;
    }
</style>
<template>
  
        <div id="carouselExampleIndicators" class="carousel slide slideshow shadow-sm" data-ride="carousel" >
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://o.vdoc.vn/data/image/2022/08/25/avatar-cute-meo-con-than-chet.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="https://o.vdoc.vn/data/image/2022/08/25/avatar-cute-meo-con-than-chet.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="https://o.vdoc.vn/data/image/2022/08/25/avatar-cute-meo-con-than-chet.jpg" class="d-block w-100" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </button>
    </div>
    
</template>