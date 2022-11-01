<template>
    <nav class="navbar navbar-light shadow-sm" style="background-color: #ff6b6b;">
        <p class="text-header text-white"><i class="fa-solid fa-envelope p-2"></i>nnshop@gmail.com &emsp;&emsp; <i class="fa-solid fa-phone p-2"></i>hostline: 0123456789</p>
        <div class="nav">
            <li class="nav-item">
                <a class="nav-link text-white" href="/about">Giới thiệu</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="/contact">Liên hệ</a>
            </li>
            <li class="nav-item ">
                <a class="nav-link text-white" href="/register">Đăng ký</a>
            </li>
            <li class="nav-item">
                <div class="dropdown">
                    <button class="btn dropdown-toggle text-white" type="button" data-toggle="dropdown" aria-expanded="false">
                        <i class="fa-solid fa-user"></i>
                    </button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Quản lý tài khoản</a>
                        <a class="dropdown-item" href="#">Quản lý đơn hàng</a>
                        <a class="dropdown-item" href="#"></a>
                        <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Đăng xuất</a>
                    </div>
                </div>
            </li>
        </div>
        <!-- <router-link :to="{ name: 'home' }" class="nav-link">
            Danh bạ
            <i class="fas fa-address-book"></i>
        </router-link> -->
    </nav>
    <div class="navigation shadow-sm p-3 mb-5 bg-white rounded">
        <div class=" d-flex justify-content-around">
            
            <a href="/" class="logo"> <img src="https://o.vdoc.vn/data/image/2022/08/25/avatar-cute-meo-con-than-chet.jpg" alt="logo" style="height: 100px; width:100px; margin-left: 300px;"> </a>
            <InputSearch v-model="searchText" class="search" />
        </div>

        <ul class="nav justify-content-center">
            <li class="nav-item">
                <a class="nav-link" href="/">Trang chủ</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/about">Giới thiệu</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/club">Áo câu lạc bộ</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/team">Áo đấu đội tuyển</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/discount">Khuyến mãi</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/discount"><i class="fa-solid fa-cart-shopping pl-2"></i> Giỏ hàng</a>
            </li>
        </ul>
    </div>
</template>
<script>

import InputSearch from "@/components/InputSearch.vue";


export default {
    components: {

        InputSearch
      
    },
}
</script>
<style>
    .text-header {
        font-size: 20px;
        margin-left: 300px;
    }
    .navigation {
        font-weight: 500;
    }
    .search {
        left: -200px;
    }
</style>
